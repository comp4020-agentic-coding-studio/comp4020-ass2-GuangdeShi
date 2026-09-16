import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { courseMeta } from "../src/course-config";
import { chapters, lifecycleStageIds } from "../src/data/chapters";
import { siteConfig } from "../src/site-config";

interface CheckData {
  formative: boolean;
  status: "prototype" | "voice-gated" | "final";
  questions: Array<{
    id: string;
    type: string;
    bestOption: string;
    claimIds: string[];
    options: Array<{ id: string; feedback: string }>;
  }>;
}

describe("Milo course shell", () => {
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

  it("keeps the approved homepage opening and lifecycle contracts", () => {
    const homepage = readFileSync(resolve("dist/index.html"), "utf8");
    expect(courseMeta.code).toBe("SLOP5251");
    expect(homepage).toMatch(/<video[^>]+autoplay[^>]+muted[^>]+loop[^>]+playsinline/);
    expect(homepage).toContain("milo-at-home-poster.jpg");
    expect(homepage.match(/class="life-timeline__node"/g)).toHaveLength(5);
    expect(homepage).toContain('data-interactive-home data-stage="kitten"');
    expect(homepage).not.toContain("momo-home-stage");
  });

  it("uses the approved five-item student navigation", () => {
    expect(siteConfig.links?.map((link) => link.text)).toEqual([
      "Home",
      "Capture",
      "Consultation",
      "Assignments",
      "People",
    ]);
  });

  it("builds the reusable Capture rhythm without Chapter 1 teaching", () => {
    const capture = readFileSync(
      resolve("dist/lectures/capture-template/index.html"),
      "utf8",
    );
    for (const phase of [
      "scene",
      "observation",
      "knowledge",
      "evidence",
      "decision",
      "reflection",
      "quiz",
    ]) {
      expect(capture).toContain(`id="${phase}"`);
    }
    expect(capture).toContain("A warm field notebook following one cat across a lifetime.");
    expect(capture).not.toContain("The First 72 Hours");
  });

  it("opens the complete first Capture from the Capture index", () => {
    const index = readFileSync(resolve("dist/lectures/index.html"), "utf8");
    const chapter = readFileSync(
      resolve("dist/chapters/the-first-72-hours/index.html"),
      "utf8",
    );

    expect(index).toContain("Begin Capture 01");
    expect(index).toContain("/comp4020-ass2-GuangdeShi/chapters/the-first-72-hours/");
    expect(chapter).toContain("SLOP5251 · Capture 01");
    expect(chapter).toContain("DIRECT evidence");
    expect(chapter).toContain("SYNTHESIS evidence");
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
    expect(check.status).toBe("final");
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

  it("builds Chapter 1 as long-form learning rather than a prototype placeholder", () => {
    const page = readFileSync(resolve("dist/chapters/the-first-72-hours/index.html"), "utf8");
    expect(page).toContain("Walk the room before Milo does");
    expect(page).toContain("data-arrival-practice");
    expect(page).toContain("Guided reading");
    expect(page).not.toContain("Structural prototype");
    expect(page).not.toContain("later implementation slice");
    for (let claim = 1; claim <= 9; claim += 1) {
      expect(page).toContain(`CH1-${String(claim).padStart(2, "0")}`);
    }
  });

  it("keeps the formative retry path explicit and local-only", () => {
    const component = readFileSync(resolve("src/components/ChapterCheck.astro"), "utf8");
    expect(component).toContain('retry.addEventListener("click"');
    expect(component).toContain("form.reset()");
    expect(component).toContain("localStorage.removeItem(key)");
  });
});
