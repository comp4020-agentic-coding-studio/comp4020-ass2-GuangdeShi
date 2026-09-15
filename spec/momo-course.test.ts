import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { chapters, lifecycleStageIds } from "../src/data/chapters";

interface CheckData {
  formative: boolean;
  questions: Array<{
    id: string;
    type: string;
    bestOption: string;
    claimIds: string[];
    options: Array<{ id: string; feedback: string }>;
  }>;
}

describe("Momo course shell", () => {
  it("defines twelve ordered, dated chapter entrances", () => {
    expect(chapters).toHaveLength(12);
    expect(chapters.map((chapter) => chapter.number)).toEqual(
      Array.from({ length: 12 }, (_, index) => index + 1),
    );
    expect(chapters.every((chapter) => /^2027-\d{2}-\d{2}$/.test(chapter.date))).toBe(true);
    expect(new Set(chapters.map((chapter) => chapter.slug)).size).toBe(12);
  });

  it("keeps the approved lifecycle state vocabulary", () => {
    expect(lifecycleStageIds).toEqual([
      "kitten",
      "young-adult",
      "mature",
      "senior",
      "very-old",
    ]);
  });

  it("builds the interactive home and semantic chapter journey", () => {
    expect(existsSync(resolve("dist/index.html"))).toBe(true);
    expect(existsSync(resolve("dist/chapters/index.html"))).toBe(true);
    expect(existsSync(resolve("dist/chapters/the-first-72-hours/index.html"))).toBe(true);
  });

  it("preserves the starter's four core content collections", () => {
    const config = readFileSync(resolve("src/content.config.ts"), "utf8");
    for (const collection of ["sessions", "assessments", "lectures", "people"]) {
      expect(config).toContain(`${collection}: defineCollection`);
    }
  });

  it("preserves every starter API collection in the generated course API", () => {
    const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as {
      nodes: Array<{ type: string }>;
    };
    const generatedTypes = new Set(api.nodes.map((node) => node.type));
    for (const collection of ["sessions", "assessments", "lectures", "people", "policies"]) {
      expect(generatedTypes.has(collection)).toBe(true);
    }
  });

  it("keeps Chapter 1 formative feedback structurally complete", () => {
    const check = JSON.parse(
      readFileSync(resolve("src/content/chapter-checks/chapter-01.json"), "utf8"),
    ) as CheckData;
    expect(check.formative).toBe(true);
    expect(check.questions).toHaveLength(7);
    expect(check.questions.filter((question) => question.type === "core-concept")).toHaveLength(4);
    expect(check.questions.filter((question) => question.type === "scenario")).toHaveLength(2);
    expect(check.questions.filter((question) => question.type === "synthesis")).toHaveLength(1);

    for (const question of check.questions) {
      expect(question.options.some((option) => option.id === question.bestOption)).toBe(true);
      expect(question.options.every((option) => option.feedback.length >= 30)).toBe(true);
      expect(question.claimIds.every((claimId) => /^CH1-\d{2}$/.test(claimId))).toBe(true);
    }
  });
});
