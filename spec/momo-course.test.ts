import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { courseMeta } from "../src/course-config";
import { captureContents } from "../src/data/captures";
import { chapters, lifecycleStageIds } from "../src/data/chapters";
import { siteConfig } from "../src/site-config";

interface CheckData {
  chapter: number;
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

  it("builds the Stage A illustration anchors from one lifecycle system", () => {
    const homepage = readFileSync(resolve("dist/index.html"), "utf8");
    for (const stage of lifecycleStageIds) {
      expect(homepage).toContain(`data-milo-stage="${stage}"`);
    }

    const anchors = [
      ["the-first-72-hours", "arrival", "kitten"],
      ["learning-her-on-her-terms", "consent", "kitten"],
      ["reading-the-first-warning-signs", "warning-signs", "kitten"],
      ["the-full-vocabulary", "vocabulary", "kitten"],
      ["needs-not-naughtiness", "scratching", "young-adult"],
      ["noticing-what-changed", "baseline", "young-adult"],
      ["designing-a-healthy-routine", "routine", "young-adult"],
      ["the-indoor-outdoor-decision", "threshold", "young-adult"],
      ["the-signs-easy-to-miss", "subtle-signs", "young-adult"],
      ["the-aging-cat", "aging", "senior"],
      ["when-her-mind-changes", "night-route", "senior"],
      ["deciding-together", "together", "very-old"],
    ] as const;
    for (const [slug, moment, stage] of anchors) {
      const page = readFileSync(resolve(`dist/chapters/${slug}/index.html`), "utf8");
      expect(page).toContain(`data-visual-moment="${moment}"`);
      expect(page).toContain(`data-milo-stage="${stage}"`);
    }

    expect(new Set(anchors.map(([, moment]) => moment)).size).toBe(12);
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

  it("builds every approved chapter as a complete Capture", () => {
    expect(chapters.every((chapter) => chapter.implemented)).toBe(true);
    expect(Object.keys(captureContents)).toHaveLength(11);

    for (const chapter of chapters) {
      const pagePath = resolve(`dist/chapters/${chapter.slug}/index.html`);
      expect(existsSync(pagePath), `missing Chapter ${chapter.number} page`).toBe(true);
      const page = readFileSync(pagePath, "utf8");
      const phasePattern = chapter.number === 1
        ? /<section id="[^"]+" class="consultation-section/g
        : /<section id="[^"]+" class="capture-phase/g;
      expect(page.match(phasePattern), `Chapter ${chapter.number} phase count`).toHaveLength(9);
      expect(page).toContain(`SLOP5251 · Capture ${String(chapter.number).padStart(2, "0")}`);

      if (chapter.number > 1) {
        const content = captureContents[chapter.slug];
        expect(content, `missing Chapter ${chapter.number} Capture data`).toBeDefined();
        expect(content.chapter).toBe(chapter.number);
        expect(content.workloadTotal).toMatch(/^About 4 hours/);
        expect(content.practicePrompts.length).toBeGreaterThanOrEqual(4);
        expect(content.learningThreads.length).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it("keeps all twelve Chapter Checks challenging, formative, and evidence-linked", () => {
    const sourceRegister = readFileSync(resolve("docs/SOURCES.md"), "utf8");

    for (const chapter of chapters) {
      const number = String(chapter.number).padStart(2, "0");
      const check = JSON.parse(
        readFileSync(resolve(`src/content/chapter-checks/chapter-${number}.json`), "utf8"),
      ) as CheckData;
      const counts = check.questions.reduce<Record<string, number>>((result, question) => {
        result[question.type] = (result[question.type] ?? 0) + 1;
        return result;
      }, {});

      expect(check.chapter).toBe(chapter.number);
      expect(check.formative).toBe(true);
      expect(check.status).toBe("final");
      expect(check.questions.length).toBeGreaterThanOrEqual(7);
      expect(check.questions.length).toBeLessThanOrEqual(8);
      expect(counts["core-concept"]).toBeGreaterThanOrEqual(3);
      expect(counts["core-concept"]).toBeLessThanOrEqual(4);
      expect(counts.scenario).toBe(2);
      expect(counts.synthesis).toBeGreaterThanOrEqual(1);
      expect(counts.synthesis).toBeLessThanOrEqual(2);

      for (const question of check.questions) {
        expect(question.options.some((option) => option.id === question.bestOption)).toBe(true);
        expect(question.options.every((option) => option.feedback.length >= 30)).toBe(true);
        for (const claimId of question.claimIds) {
          expect(sourceRegister, `${claimId} is absent from the claim register`).toContain(`| ${claimId} |`);
        }
      }
    }
  });

  it("keeps every data-driven Capture claim and source in the registered evidence set", () => {
    const sourceRegister = readFileSync(resolve("docs/SOURCES.md"), "utf8");

    for (const content of Object.values(captureContents)) {
      const claimIds = [
        ...content.learningThreads.flatMap((thread) => thread.claimIds),
        ...content.evidenceNotes.flatMap((note) => note.claimIds),
        ...content.carePlan.flatMap((item) => item.claimIds),
      ];
      const sourceIds = content.evidenceNotes.flatMap((note) => note.sourceIds);

      for (const claimId of new Set(claimIds)) {
        expect(sourceRegister, `${claimId} is absent from the claim register`).toContain(`| ${claimId} |`);
      }
      for (const sourceId of new Set(sourceIds)) {
        expect(sourceRegister, `${sourceId} is absent from the source register`).toMatch(
          new RegExp(`(?:\\| ${sourceId} \\||### ${sourceId} )`),
        );
      }
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

  it("builds the approved non-Chapter course shell without a parallel teaching system", () => {
    const assignments = readFileSync(resolve("dist/assessments/index.html"), "utf8");
    const consultation = readFileSync(
      resolve("dist/sessions/a-quiet-change-at-breakfast/index.html"),
      "utf8",
    );
    const people = readFileSync(resolve("dist/people/index.html"), "utf8");

    expect(assignments).toContain('data-assessment-total="100"');
    expect(assignments).toContain("Chapter Checks remain formative");
    expect(consultation.match(/<section id="[^"]+" class="capture-phase/g)).toHaveLength(6);
    expect(consultation).toContain("CH6-01");
    expect(consultation).toContain("data-judgement");
    expect(people).toContain("The teaching profile below is fictional");
    expect(people).toContain("Mara Bell");
  });
});
