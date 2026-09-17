import type { CaptureChapterContent } from "./types";

export const chapter10 = {
  chapter: 10,
  slug: "the-aging-cat",
  sceneTitle: "Eleven quiet years, then one jump disappears",
  sceneCaption: "Milo is thirteen years old. Familiarity can make slow change look like no change at all.",
  scene: [
    "Most of Milo's adult years pass without a crisis. The log, feeding routine, indoor pillars, occasional controlled garden visits, and veterinary conversations continue quietly. Then a housemate remarks that she no longer jumps onto the counter and adds, 'I guess she's just getting old.'",
    "Nobody has checked when the jump disappeared, whether stair use or litter access changed with it, or whether the weekend access plan built for a young mobile cat still fits. Aging is real; it is not an explanation that makes observation unnecessary.",
  ],
  withheld: "The duration, associated mobility changes, and household capacity for adaptations have not yet been examined. The phrase 'just old' hides all three.",
  observationPrompt: "Compare current jumping, stairs, resting sites, litter access, body condition, and outdoor routine with the last reliable baseline. Record the household's financial, time, emotional, and physical capacity too.",
  observations: [
    "A formerly routine jump no longer occurs.",
    "The change may have developed gradually across months rather than on one noticeable day.",
    "No log review has yet tested duration, combination, or explanation.",
    "The home and lifestyle were designed for a younger cat and have not yet been reassessed for present mobility.",
  ],
  initialDecision: {
    prompt: "What should happen before the household accepts 'she is just getting old'?",
    options: [
      { id: "a", text: "Accept reduced jumping as an unavoidable senior trait that needs no professional conversation.", feedback: "Reduced activity or reluctance to jump can be a joint-pain signal. Age does not make the change unaddressable." },
      { id: "b", text: "Use the log to establish the trend and related changes, then raise the pattern and realistic care options with the vet.", feedback: "This is the best answer because it reapplies baseline comparison while keeping the eventual plan individual and capacity-aware." },
      { id: "c", text: "Book the most comprehensive senior plan available regardless of the evidence or household capacity.", feedback: "Maximal care is not automatically matched care. The guideline explicitly recognises financial, time, emotional, and physical budgets." },
    ],
    bestOption: "b",
  },
  learningTitle: "Change with her, and make the plan one the household can keep",
  learningIntro: "Senior care is neither resignation nor an idealised checklist. It joins slow-trend observation, accessible rooms, a revisited lifestyle decision, and honest budgets of care.",
  learningThreads: [
    { label: "Mobility", title: "Slowing down can be a pain signal, not a verdict called age", paragraphs: [
      "Reduced activity, stiffness, or reluctance to jump in an aging cat can reflect joint pain rather than an inevitable and unaddressable fact of growing older. Owners should report the changed function and timeline, not assume the cause or accept it without conversation.",
      "This claim is conservatively scoped. The registered senior guideline was only partially accessible, and the course deliberately excludes an unverified prevalence statistic from a lower-tier Cornell page.",
    ], claimIds: ["CH10-01"], support: "SYNTHESIS" },
    { label: "Budgets of care", title: "Good care must be sustainable for both sides of the relationship", paragraphs: [
      "The senior-care guideline names four caregiver budgets: financial, time, emotional, and physical. They vary by household. A plan that ignores the person who must carry it out can look comprehensive on paper and fail in ordinary life.",
      "Capacity is not a measure of love. A low-cost ramp, one reachable litter box, a short shared log, paid help, or a prioritised veterinary conversation can be responsible choices when they match the actual constraint. The goal is an honest, workable plan rather than a moral ranking of caregivers.",
    ], claimIds: ["CH10-02"], support: "DIRECT" },
    { label: "Adapt the home and life", title: "Reopen decisions that once fit", paragraphs: [
      "Low-sided litter boxes, ramps, softer resting surfaces, adjusted feeding access, and easier routes can reduce unnecessary difficulty. Which changes come first should follow Milo's observed use and the household's budgets rather than a fixed list every home must complete.",
      "Chapter 8's controlled garden visits were designed for a confident mobile young adult. Senior Milo may need shorter sessions, easier routes, a different transport setup, or an indoor-only plan. Reassessment uses the same cat-and-household weighing process; an earlier good decision is not a permanent contract.",
    ], claimIds: ["CH10-03", "CH8-01", "CH8-03"], support: "SYNTHESIS" },
    { label: "Slow baseline", title: "Use the Chapter 6 method on a longer clock", paragraphs: [
      "Apply the established baseline comparison to movement, resource use, weight, BCS, and MCS. The new difficulty is timescale: aging change may unfold slowly enough that normalisation drift becomes the larger danger.",
      "A single ordinary-looking day does not contradict a four-month loss of jumping. Periodic comparable observations make that long slope visible and give the veterinary conversation something more precise than 'she seems old.'",
    ], claimIds: ["CH10-04", "CH6-01", "CH6-02", "CH7-01"], support: "SYNTHESIS" },
    { label: "Use the right pain channel", title: "A calm face does not rule out chronic discomfort", paragraphs: [
      "Chapter 9's Feline Grimace Scale was validated for acute pain. It should not be assumed to read chronic, aging-related pain in the same way. A senior cat may have a relaxed face while quietly avoiding stairs, high perches, or a difficult litter route.",
      "Keep the acute tool for its supported context. For slow senior change, mobility and resource-use trends are the more fitting owner observation channel. This distinction is a course synthesis across the acute-pain and senior-care sources.",
    ], claimIds: ["CH10-05", "CH9-02"], support: "SYNTHESIS" },
    { label: "Veterinary partnership", title: "Discuss a closer cadence without inventing a universal interval", paragraphs: [
      "A senior cat generally benefits from more frequent veterinary check-ins than a younger adult, but this course has not independently verified one exact interval from the full guideline. Health history, observed trends, mobility, and household capacity belong in an individual conversation.",
      "This reuses Chapter 7's risk-conversation pattern: the household brings accurate longitudinal evidence, and the veterinary team helps choose timing and clinical action.",
    ], claimIds: ["CH10-06", "CH7-03", "CH7-04"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "Senior mobility and budgets", support: "DIRECT", claimIds: ["CH10-02"], sourceIds: ["S15"], body: "The accessible senior-guideline material directly confirms the four budgets of care. Its detailed mobility and visit-interval content was not fully fetched, so this course does not quote a fixed cadence or unverified protocol." },
    { title: "Mobility change and practical adaptation", support: "SYNTHESIS", claimIds: ["CH10-01", "CH10-03"], sourceIds: ["S15", "S20", "S21"], body: "The course uses the higher-tier senior guidance for the substantive frame and Cornell for owner-facing mobility and adaptation context. S20's unlimited-capacity assumption is explicitly tempered by S15's budgets; S21's unconfirmed prevalence statistic is omitted." },
    { title: "Slow change through the existing method", support: "SYNTHESIS", claimIds: ["CH10-04"], sourceIds: [], body: "No source states this exact cross-chapter integration. The course reapplies Chapters 6 and 7 to a months-or-years timescale and discloses normalisation drift as the principal reasoning risk." },
    { title: "Acute and chronic pain are not interchangeable contexts", support: "SYNTHESIS", claimIds: ["CH10-05"], sourceIds: ["S30", "S20", "S21"], body: "S30 validates the facial tool for acute pain only; the senior sources emphasise mobility and resource-use change. The course constructs the explicit wrong-tool warning from those boundaries." },
    { title: "An individual senior visit conversation", support: "SYNTHESIS", claimIds: ["CH10-06"], sourceIds: ["S15"], body: "The specific senior interval was not independently verified. Student-facing content is therefore limited to 'more frequent and individualised' and does not supply a number." },
  ],
  readings: [
    { time: "20 min", title: "Senior care guidelines", prompt: "Focus on caregiver partnership and the four budgets. Mark any protocol detail the accessible summary does not establish.", href: "https://catvets.com/resource/senior-care-guidelines/", linkLabel: "Open FelineVMA guidance" },
    { time: "20 min", title: "Special needs of the senior cat", prompt: "Sort suggested adaptations by the mobility or resource-use problem they address, then scale them against one household budget.", href: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/special-needs-senior-cat", linkLabel: "Open Cornell Feline Health Center" },
    { time: "15 min", title: "Is your cat slowing down?", prompt: "Use the page for mobility framing, but identify the prevalence statistic this course deliberately does not teach as verified.", href: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/your-cat-slowing-down", linkLabel: "Open Cornell Feline Health Center" },
  ],
  appliedTitle: "The stairs divide the home in two",
  appliedIntro: "A six-week pattern changes both the immediate room and the professional conversation.",
  appliedDecision: {
    prompt: "Senior Milo avoids stairs to a favourite perch and has accidents only downstairs. The pattern has lasted six weeks. What is the best response?",
    options: [
      { id: "a", text: "Accept the pattern as ordinary aging because no acute symptom or facial tension appears.", feedback: "This normalises a sustained mobility and resource-use change and misuses the absence of acute facial signs as reassurance." },
      { id: "b", text: "Add an accessible downstairs litter option now and raise the mobility pattern with the vet using the log.", feedback: "This is the best response because it combines a feasible immediate adaptation with professional assessment of an unexplained persistent change." },
      { id: "c", text: "Use Chapter 9's facial scale first and act only if Milo's face suggests pain.", feedback: "The scale is validated for acute pain, not as a rule-out tool for chronic senior mobility change." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "A caregiver has little money and ample time. Design a low-cost mobility plan and a cost-honest veterinary conversation.",
    "A caregiver has strong finances and little daily time. Separate what paid support can solve from the baseline observation that still needs a routine.",
    "An owner and Milo both have mobility limits. Redesign litter, food, and resting access so maintenance is physically workable for both.",
    "A caregiver is emotionally depleted by a major personal stressor. Reduce the plan to a sustainable minimum without erasing the observed change.",
    "Revisit Chapter 8's weekend garden routine for a cat who now hesitates on ramps and tires more quickly. State what changes and what remains.",
    "Compare a calm senior face with a four-month mobility decline and explain why the evidence channels are not contradictory.",
  ],
  returnTitle: "The same home becomes easier without pretending age is the cause",
  returnScene: [
    "The log shows that Milo's counter jump faded over roughly four months. Stair use also declined, while her face remained relaxed. The household adds a stable low route to the sofa, places an accessible litter box on the main floor, and pauses weekend garden access while transport and terrain are reassessed.",
    "They bring the mobility timeline and body-condition records to the vet and discuss a more suitable check-in cadence. The adaptations do not diagnose or treat joint disease; they remove immediate barriers while the persistent change receives professional attention.",
  ],
  revisedDecision: {
    prompt: "Which statement best carries Chapter 8's decision into Milo's senior life?",
    options: [
      { id: "a", text: "A lifestyle plan that was responsible at sixteen months remains responsible for life unless an emergency occurs.", feedback: "Aging changes the cat side of the original equation. Waiting for an emergency ignores gradual fit and mobility change." },
      { id: "b", text: "Reweigh Milo's current mobility and household capacity, then adapt, pause, or replace the earlier controlled-access routine.", feedback: "This is the best answer because it preserves the original decision process while allowing its outcome to change." },
      { id: "c", text: "Every senior cat should become indoor-only because age makes controlled access universally unsafe.", feedback: "The chapter does not replace one universal rule with another. Current function, setting, and capacity still determine fit." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Treat lost function as information", reason: "Record reluctance to jump, stiffness, and changed resource use rather than dismissing them as age.", claimIds: ["CH10-01", "CH10-04"] },
    { action: "Name all four caregiver budgets", reason: "Build a plan the household can sustain financially, temporally, emotionally, and physically.", claimIds: ["CH10-02"] },
    { action: "Adapt the room and revisit the lifestyle", reason: "Prioritise accessible routes and resources, and reopen Chapter 8's access decision for present-day Milo.", claimIds: ["CH10-03", "CH8-01"] },
    { action: "Use mobility trends for slow discomfort", reason: "Do not use a normal-looking acute-pain face to rule out chronic aging-related pain.", claimIds: ["CH10-05"] },
    { action: "Discuss a more suitable check-in cadence", reason: "Bring the trend and budgets to the vet without inventing a fixed interval the evidence reviewed here does not establish.", claimIds: ["CH10-06"] },
  ],
  transferNote: "Changing the plan is not evidence that the earlier plan failed. It is what a lifetime course promises: the same household keeps looking closely enough to care for the cat who is here now.",
  workload: [{ label: "Core teaching", time: "~75 min" }, { label: "Method walkthrough", time: "~25 min" }, { label: "Budget matching", time: "~70 min" }, { label: "Scenario analysis", time: "~65 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours 15 minutes",
} satisfies CaptureChapterContent;
