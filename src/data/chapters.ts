export const lifecycleStageIds = [
  "kitten",
  "young-adult",
  "mature",
  "senior",
  "very-old",
] as const;

export type LifecycleStageId = (typeof lifecycleStageIds)[number];

export interface LifecycleStage {
  id: LifecycleStageId;
  label: string;
  age: string;
  note: string;
}

export interface Chapter {
  number: number;
  week: number;
  date: string;
  slug: string;
  title: string;
  question: string;
  part: 1 | 2 | 3 | 4;
  partTitle: string;
  stage: Exclude<LifecycleStageId, "mature">;
  momoAge: string;
  homeCue: string;
  hotspot: { x: number; y: number };
  implemented: boolean;
}

export const lifecycleStages: LifecycleStage[] = [
  {
    id: "kitten",
    label: "Kitten",
    age: "10 weeks to 4 months",
    note: "A small safe room, a familiar carrier, and the first pages of Milo's log.",
  },
  {
    id: "young-adult",
    label: "Young / adult",
    age: "5 to 18 months",
    note: "The home opens up as observation becomes interpretation and daily care becomes deliberate.",
  },
  {
    id: "mature",
    label: "Mature",
    age: "The years between",
    note: "No chapter is skipped. Time passes here, and the routines built earlier become Milo's ordinary life.",
  },
  {
    id: "senior",
    label: "Senior",
    age: "13 to 15 years",
    note: "The same rooms now need lower routes, easier access, and a closer reading of gradual change.",
  },
  {
    id: "very-old",
    label: "Very old",
    age: "Entering her twentieth year",
    note: "The familiar home remains, but care is now planned through honest observation and conversation.",
  },
];

export const chapters: Chapter[] = [
  {
    number: 1,
    week: 1,
    date: "2027-02-22",
    slug: "the-first-72-hours",
    title: "The First 72 Hours",
    question: "Why does a newly arrived cat hide, and what does she need instead of forced reassurance?",
    part: 1,
    partTitle: "A New Life",
    stage: "kitten",
    momoAge: "About 10 weeks",
    homeCue: "The carrier is open. Milo is under the bed.",
    hotspot: { x: 75, y: 70 },
    implemented: true,
  },
  {
    number: 2,
    week: 2,
    date: "2027-03-01",
    slug: "learning-her-on-her-terms",
    title: "Learning Her on Her Terms",
    question: "Why is one welcome not the same as ongoing consent?",
    part: 1,
    partTitle: "A New Life",
    stage: "kitten",
    momoAge: "About 11 weeks",
    homeCue: "A hand pauses beside the chair. Milo decides whether to return.",
    hotspot: { x: 25, y: 56 },
    implemented: true,
  },
  {
    number: 3,
    week: 3,
    date: "2027-03-08",
    slug: "reading-the-first-warning-signs",
    title: "Reading the First Warning Signs",
    question: "When must observation become a call for professional help?",
    part: 1,
    partTitle: "A New Life",
    stage: "kitten",
    momoAge: "12 to 13 weeks",
    homeCue: "The litter log shows more trips, less output, and one cry.",
    hotspot: { x: 15, y: 77 },
    implemented: true,
  },
  {
    number: 4,
    week: 4,
    date: "2027-03-15",
    slug: "the-full-vocabulary",
    title: "The Full Vocabulary",
    question: "What is Milo saying once the easy signals run out?",
    part: 2,
    partTitle: "Learn to Read Her",
    stage: "kitten",
    momoAge: "About 16 weeks",
    homeCue: "Milo waits at the door. One sound is not enough to explain why.",
    hotspot: { x: 87, y: 45 },
    implemented: true,
  },
  {
    number: 5,
    week: 5,
    date: "2027-03-22",
    slug: "needs-not-naughtiness",
    title: "Needs, Not Naughtiness",
    question: "What is Milo trying to tell us by scratching the sofa?",
    part: 2,
    partTitle: "Learn to Read Her",
    stage: "young-adult",
    momoAge: "5 to 6 months",
    homeCue: "The same sofa corner is scratched every evening.",
    hotspot: { x: 38, y: 64 },
    implemented: true,
  },
  {
    number: 6,
    week: 6,
    date: "2027-03-29",
    slug: "noticing-what-changed",
    title: "Noticing What Changed",
    question: "How do we know something is different, not just an off day?",
    part: 2,
    partTitle: "Learn to Read Her",
    stage: "young-adult",
    momoAge: "About 9 months",
    homeCue: "Breakfast is unfinished. The observation log gives that detail a baseline.",
    hotspot: { x: 58, y: 53 },
    implemented: true,
  },
  {
    number: 7,
    week: 7,
    date: "2027-04-12",
    slug: "designing-a-healthy-routine",
    title: "Designing a Healthy Routine",
    question: "What does healthy look like between veterinary visits?",
    part: 3,
    partTitle: "Keep Her Well",
    stage: "young-adult",
    momoAge: "About 14 months",
    homeCue: "Bowls, play, weight, and prevention become one routine rather than four chores.",
    hotspot: { x: 70, y: 78 },
    implemented: true,
  },
  {
    number: 8,
    week: 8,
    date: "2027-04-19",
    slug: "the-indoor-outdoor-decision",
    title: "The Indoor / Outdoor Decision",
    question: "What kind of life fits this cat in this household?",
    part: 3,
    partTitle: "Keep Her Well",
    stage: "young-adult",
    momoAge: "About 16 months",
    homeCue: "The window and door turn a general debate into a household decision.",
    hotspot: { x: 80, y: 30 },
    implemented: true,
  },
  {
    number: 9,
    week: 9,
    date: "2027-04-26",
    slug: "the-signs-easy-to-miss",
    title: "The Signs Easy to Miss",
    question: "What might Milo be hiding, and how would we notice?",
    part: 3,
    partTitle: "Keep Her Well",
    stage: "young-adult",
    momoAge: "About 18 months",
    homeCue: "Small changes in eating, grooming, posture, and expression gather in the log.",
    hotspot: { x: 50, y: 76 },
    implemented: true,
  },
  {
    number: 10,
    week: 10,
    date: "2027-05-03",
    slug: "the-aging-cat",
    title: "The Aging Cat",
    question: "What does keeping her well mean when wellness is changing?",
    part: 4,
    partTitle: "Change With Her",
    stage: "senior",
    momoAge: "About 13 years",
    homeCue: "A ramp reaches the sofa Milo once jumped onto without thinking.",
    hotspot: { x: 44, y: 70 },
    implemented: true,
  },
  {
    number: 11,
    week: 11,
    date: "2027-05-10",
    slug: "when-her-mind-changes",
    title: "When Her Mind Changes",
    question: "Is this just age, or a change that needs action?",
    part: 4,
    partTitle: "Change With Her",
    stage: "senior",
    momoAge: "About 15 years",
    homeCue: "A night-light marks the route between bed, water, and litter.",
    hotspot: { x: 23, y: 38 },
    implemented: true,
  },
  {
    number: 12,
    week: 12,
    date: "2027-05-17",
    slug: "deciding-together",
    title: "Deciding Together",
    question: "How do we decide, together, what care looks like now?",
    part: 4,
    partTitle: "Change With Her",
    stage: "very-old",
    momoAge: "About 19 years",
    homeCue: "The log, the adapted home, and an honest conversation now belong together.",
    hotspot: { x: 59, y: 69 },
    implemented: true,
  },
];

export const chapterPath = (chapter: Chapter) => `/chapters/${chapter.slug}/`;

export const getChapter = (slug: string) => chapters.find((chapter) => chapter.slug === slug);

const teachingDateFormatter = new Intl.DateTimeFormat("en-AU", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatTeachingDate = (date: string) =>
  teachingDateFormatter.format(new Date(`${date}T00:00:00Z`));

export const teachingWeekLabel = (chapter: Pick<Chapter, "week" | "date">) =>
  `Week ${String(chapter.week).padStart(2, "0")} · ${formatTeachingDate(chapter.date)}`;
