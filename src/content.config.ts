import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { courseNodeSchema } from "astro-course-university/schemas";

const weekSchema = z.coerce.number().int().min(1).max(12);
const courseNodeLoader = (dir: string) =>
  glob({ pattern: ["**/*.{md,mdx}", "!**/CLAUDE.md"], base: `src/content/${dir}` });
const teacherRefs = z.array(reference("people")).min(1);

const chapterCheckQuestionSchema = z
  .object({
    id: z.string().regex(/^ch\d{2}-q\d{2}$/),
    type: z.enum(["core-concept", "scenario", "synthesis"]),
    prompt: z.string().trim().min(20),
    options: z
      .array(
        z.object({
          id: z.string().regex(/^[a-d]$/),
          text: z.string().trim().min(10),
          feedback: z.string().trim().min(30),
        }),
      )
      .min(3)
      .max(4),
    bestOption: z.string().regex(/^[a-d]$/),
    claimIds: z.array(z.string().regex(/^CH\d{1,2}-\d{2}$/)).min(1),
  })
  .superRefine((question, ctx) => {
    const optionIds = question.options.map((option) => option.id);
    if (new Set(optionIds).size !== optionIds.length) {
      ctx.addIssue({ code: "custom", path: ["options"], message: "option IDs must be unique" });
    }
    if (!optionIds.includes(question.bestOption)) {
      ctx.addIssue({
        code: "custom",
        path: ["bestOption"],
        message: "bestOption must identify one of the supplied options",
      });
    }
  });

const chapterCheckSchema = z
  .object({
    chapter: weekSchema,
    title: z.string().trim().min(1),
    status: z.enum(["prototype", "voice-gated", "final"]),
    formative: z.literal(true),
    questions: z.array(chapterCheckQuestionSchema).min(7).max(8),
  })
  .superRefine((check, ctx) => {
    const ids = check.questions.map((question) => question.id);
    if (new Set(ids).size !== ids.length) {
      ctx.addIssue({ code: "custom", path: ["questions"], message: "question IDs must be unique" });
    }

    const counts = check.questions.reduce<Record<string, number>>((result, question) => {
      result[question.type] = (result[question.type] ?? 0) + 1;
      return result;
    }, {});
    if ((counts["core-concept"] ?? 0) < 3 || (counts.scenario ?? 0) < 2 || (counts.synthesis ?? 0) < 1) {
      ctx.addIssue({
        code: "custom",
        path: ["questions"],
        message: "a check needs at least 3 core concepts, 2 scenarios, and 1 synthesis judgement",
      });
    }
  });

const weightedMarking = z
  .object({
    mode: z.literal("weighted"),
    criteria: z
      .array(z.object({ name: z.string().trim().min(1), weight: z.number().positive() }))
      .min(1),
  })
  .superRefine((marking, ctx) => {
    const total = marking.criteria.reduce((sum, criterion) => sum + criterion.weight, 0);
    if (total !== 100) {
      ctx.addIssue({
        code: "custom",
        path: ["criteria"],
        message: `criterion weights sum to ${total}, not 100`,
      });
    }
  });

const holisticMarking = z.object({
  mode: z.literal("holistic"),
  description: z.string().trim().min(40),
});

export const collections = {
  chapterChecks: defineCollection({
    loader: glob({ pattern: "**/*.json", base: "src/content/chapter-checks" }),
    schema: chapterCheckSchema,
  }),

  sessions: defineCollection({
    loader: courseNodeLoader("sessions"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        date: z.coerce.date(),
        teachers: teacherRefs.optional(),
      })
      .loose(),
  }),

  assessments: defineCollection({
    loader: courseNodeLoader("assessments"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        due: z.coerce.date(),
        weight: z.coerce.number().positive().max(100),
        stage: z.string().trim().min(10),
        deliverable: z.string().trim().min(30),
        marking: z.discriminatedUnion("mode", [weightedMarking, holisticMarking]).optional(),
      })
      .loose(),
  }),

  lectures: defineCollection({
    loader: courseNodeLoader("lectures"),
    schema: courseNodeSchema
      .extend({
        week: weekSchema,
        date: z.coerce.date(),
        teachers: teacherRefs.optional(),
        auxiliary: z.coerce.boolean().default(false),
        slides: z
          .string()
          .regex(/^\/decks\/[a-z0-9-]+\/$/)
          .optional(),
      })
      .loose(),
  }),

  people: defineCollection({
    loader: courseNodeLoader("people"),
    schema: ({ image }) =>
      z
        .object({
          title: z.string().trim().min(1),
          description: z.string().trim().min(40),
          role: z.string().trim().min(1),
          contact: z.string().trim().min(1).optional(),
          affiliation: z.string().trim().min(1).optional(),
          email: z.email().optional(),
          url: z.url().optional(),
          photo: image().optional(),
          photoAlt: z.string().trim().optional(),
          published: z.coerce.boolean().default(true),
        })
        .superRefine((person, ctx) => {
          if (person.photo && !person.photoAlt) {
            ctx.addIssue({
              code: "custom",
              path: ["photoAlt"],
              message: "describe the photo when one is supplied",
            });
          }
        }),
  }),
};
