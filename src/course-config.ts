import type { CourseMetaInput } from "astro-course-university";
import { z } from "astro/zod";

// The starter's supported course-code levels, including the approved 5000-level
// code for this prototype. Both the code pattern and the level field derive from it.
const LEVELS = [1, 2, 3, 4, 5, 6, 8] as const;
const allowedCode = new RegExp(`^SLOP[${LEVELS.join("")}]\\d{3}$`);

export const slopCourseMetaSchema = z
  .strictObject({
    code: z.string().regex(allowedCode, {
      message: "use SLOP plus a 1000–4000, 6000 or 8000 level code",
    }),
    title: z.string().trim().min(1).max(100),
    session: z.string().trim().min(1).max(40),
    year: z.number().int().min(2026).max(2200),
    level: z.literal(LEVELS),
    startDate: z.iso.date(),
    endDate: z.iso.date(),
    description: z.string().trim().min(80).max(300),
    tags: z.array(z.string().trim().min(2).max(24)).min(1).max(3),
  })
  .superRefine((course, ctx) => {
    const codeLevel = Number(course.code.at(4));
    if (course.level !== codeLevel) {
      ctx.addIssue({
        code: "custom",
        path: ["level"],
        message: `must match ${course.code}'s first digit (${codeLevel})`,
      });
    }
    if (course.startDate > course.endDate) {
      ctx.addIssue({
        code: "custom",
        path: ["startDate"],
        message: "must not be after endDate",
      });
    }
  });

// The single source of truth for the course record. The generated homepage,
// navigation label and /api/index.json all read this object.
// Keep this shape: the catalogue ingests this API contract when the course is
// published.
//
// Keep the code and level aligned: the schema checks that the first code digit
// matches the numeric course level.
export const courseMeta = slopCourseMetaSchema.parse({
  code: "SLOP5251",
  title: "How to Keep One Cat Happy for Twenty Years",
  session: "Semester 1",
  year: 2027,
  level: 5,
  startDate: "2027-02-22",
  endDate: "2027-05-28",
  description:
    "Follow one cat from her first night home into old age, learning to observe her, interpret change, make safe care decisions, and know when to seek professional help.",
  tags: ["feline care", "observation", "lifelong care"],
}) satisfies CourseMetaInput;
