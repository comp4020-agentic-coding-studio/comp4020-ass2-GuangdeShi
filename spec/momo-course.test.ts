import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { chapters, lifecycleStageIds } from "../src/data/chapters";

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
});
