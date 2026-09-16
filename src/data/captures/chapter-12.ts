import type { CaptureChapterContent } from "./types";

export const chapter12 = {
  chapter: 12,
  slug: "deciding-together",
  sceneTitle: "A number appears where a conversation should begin",
  sceneCaption: "Milo is nineteen years old. The course ends without pretending one score can decide the rest of her life.",
  scene: [
    "After a chronic condition is diagnosed, Milo's vet suggests an ongoing conversation about quality of life. That evening, a housemate finds an online yes-or-no quiz that produces a numeric score and attaches an interpretation to each range.",
    "The household wants the score to settle an emotionally difficult question. The log beside the phone holds something less tidy and more useful: appetite, mobility, comfort, resting-place changes, good days, difficult days, and the capacities of the people providing care.",
  ],
  withheld: "The quiz result and Milo's eventual outcome are deliberately withheld. This Capture evaluates how evidence and partnership shape the next conversation, not which ending the household must choose.",
  observationPrompt: "Write the concrete observations a quality-of-life prompt surfaces, their trend and timeframe, and the household's financial, time, emotional, and physical budgets. Leave the numeric score aside.",
  observations: [
    "Milo has a veterinarian-diagnosed chronic condition and is entering an ongoing quality-of-life conversation.",
    "The online tool's exact content and scoring have not been independently verified for this course.",
    "The long-term log contains specific observations that can be compared over time.",
    "The household is tempted to transfer a shared decision to one number rather than use the number as a prompt for inquiry.",
  ],
  initialDecision: {
    prompt: "What should the household do with the quiz and its score?",
    options: [
      { id: "a", text: "Treat the score range as the objective answer and act on its suggested interpretation.", feedback: "A number from an unverified tool cannot replace longitudinal observation, caregiver capacity, clinical judgement, and relationship-centred conversation." },
      { id: "b", text: "Use its questions to prompt specific observations, then bring those observations and care budgets to the vet rather than treating the score as a verdict.", feedback: "This is the best answer because it keeps useful structure while refusing premature certainty." },
      { id: "c", text: "Reject every structured prompt because quality of life is too personal to observe systematically.", feedback: "That discards the value of specific trends. The problem is not structure itself; it is allowing an unverified score to decide alone." },
    ],
    bestOption: "b",
  },
  learningTitle: "Everything you have learned, one more time, together",
  learningIntro: "The capstone adds no home diagnosis and assigns no ending. It clarifies what each participant brings to an honest, sustainable quality-of-life conversation.",
  learningThreads: [
    { label: "Trackable concepts", title: "Quality of life and frailty are more than vague impressions", paragraphs: [
      "Current senior-care guidance treats health-related quality of life and frailty as formal concepts that can be assessed and followed over time. That supports the course's familiar move: compare this cat with her own prior pattern rather than one day, one photograph, or another cat.",
      "The accessible source summary does not provide the full assessment criteria. The course therefore teaches longitudinal specificity, not a substitute scale of its own.",
    ], claimIds: ["CH12-01", "CH6-01"], support: "MIXED" },
    { label: "Structured partnership", title: "A real care-plan process exists", paragraphs: [
      "Current feline hospice and palliative-care guidance describes a five-step care-plan process grounded in relationship-centred communication. It includes quality-of-life assessment and attention to emotional and environmental needs, nutrition, and hydration.",
      "The landing-page summary confirms that named structure, but the full guideline was not independently fetched. This course does not invent the internal steps or turn the summary into a home protocol.",
    ], claimIds: ["CH12-02"], support: "DIRECT" },
    { label: "No borrowed score", title: "Specific questions can help even when the number cannot decide", paragraphs: [
      "Structured quality-of-life questionnaires exist, and many online tools produce scores. The exact questionnaire referenced by the registered guideline was not inspected, so its items and scoring are not taught here.",
      "A prompt can still help the household notice comfort, appetite, mobility, rest, hydration, interaction, and change over time. Those concrete observations enter the log and conversation. The unverified total does not become an objective verdict.",
    ], claimIds: ["CH12-03"], support: "SYNTHESIS" },
    { label: "Unit of care", title: "Care includes the caregiver", paragraphs: [
      "Hospice and palliative-care guidance explicitly frames the cat and caregiver together as a unit of care, with interdisciplinary support where appropriate. The caregiver's needs are not an embarrassing distraction from good care.",
      "Combined with Chapter 10's financial, time, emotional, and physical budgets, this means an unsustainable plan is not more devoted simply because it asks for more. The cat's observed condition and the caregiver's real capacity belong in the same conversation.",
    ], claimIds: ["CH12-04", "CH12-05", "CH10-02"], support: "MIXED" },
    { label: "Deciding together", title: "Bring facts and limits; do not decide alone or disappear from the decision", paragraphs: [
      "The caregiver brings the long log, current observations, values, and honest budgets. The veterinary team brings clinical assessment and options. The conversation remains ongoing because neither party alone holds every part of the evidence or carries every consequence.",
      "Two old failure modes return: dismissing a documented decline until everyone feels certain, and allowing one bad day or one online score to close the decision prematurely. Partnership asks for neither delay nor false finality.",
    ], claimIds: ["CH12-06", "CH7-04", "CH11-05"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "Quality of life and frailty", support: "DIRECT", claimIds: ["CH12-01"], sourceIds: ["S15"], body: "The accessible guideline summary confirms HRQOL and frailty as formal concepts. The full assessment criteria were not independently read, so the course does not reproduce them or create a new score." },
    { title: "Five-step relationship-centred care planning", support: "DIRECT", claimIds: ["CH12-02", "CH12-04"], sourceIds: ["S16"], body: "The accessible hospice-guideline summary confirms a five-step process, relationship-centred communication, and the unit-of-care concept. The full text remains unverified beyond that summary." },
    { title: "Why no quality-of-life score is taught", support: "SYNTHESIS", claimIds: ["CH12-03"], sourceIds: ["S16"], body: "S16 references a questionnaire, but its exact contents and scoring were not inspected. The course's decision to use prompts for observation while withholding a score is an editorial response to that evidence gap." },
    { title: "Unit and budgets of care", support: "SYNTHESIS", claimIds: ["CH12-05"], sourceIds: ["S16", "S15"], body: "The course combines S16's unit-of-care concept with S15's four caregiver budgets. Neither source states this exact course-wide synthesis on its own." },
    { title: "Shared decision as the capstone method", support: "SYNTHESIS", claimIds: ["CH12-06"], sourceIds: [], body: "This is the course's integration of preventive conversation, longitudinal observation, caregiver budgets, and the two failure modes. It is not attributed to one external source." },
  ],
  readings: [
    { time: "25 min", title: "Feline hospice and palliative care guidelines", prompt: "Identify the confirmed process, communication, and unit-of-care concepts. Mark the linked questionnaire as unverified rather than reconstructing it.", href: "https://catvets.com/resource/2023-feline-hospice-and-palliative-care-guidelines/", linkLabel: "Open FelineVMA guidance" },
    { time: "15 min", title: "Return to the first observation log", prompt: "Trace how one kitten log grew to include behaviour, condition, face, mouth, mobility, cognition, and caregiver capacity.", href: "../the-first-72-hours/", linkLabel: "Revisit Capture 01" },
    { time: "15 min", title: "Return to budgets of care", prompt: "Prepare one honest statement for each budget that a caregiver could bring into a veterinary conversation without apology.", href: "../the-aging-cat/", linkLabel: "Revisit Capture 10" },
  ],
  appliedTitle: "Three caregivers hold different pieces of the same life",
  appliedIntro: "Shared responsibility needs shared evidence, not equal exposure or one person's private verdict.",
  appliedDecision: {
    prompt: "One sibling logs several weeks of appetite and mobility decline; two less frequent visitors are unsure. What should happen?",
    options: [
      { id: "a", text: "Wait until all three independently notice the decline before raising it with the vet.", feedback: "Unequal observation time makes independent unanimity an unsafe threshold and allows a documented trend to continue without discussion." },
      { id: "b", text: "Use the dated observations to structure a family conversation, then bring the shared facts and differing perspectives to the vet team.", feedback: "This is the best answer because it makes evidence available to everyone without handing sole authority to the most frequent visitor." },
      { id: "c", text: "Let the most frequent visitor decide alone because that person has the strongest information.", feedback: "More observation matters, but partnership uses that evidence to inform a shared process rather than concentrating the entire decision." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "A sole caregiver has a long relationship with one veterinary team. Describe what 'together' means without inventing additional family decision-makers.",
    "Several relatives disagree because they visit at different frequencies. Convert impressions into one shared chronology before discussing options.",
    "A caregiver feels selfish naming low time, money, and emotional capacity. Use the unit-of-care concept to prepare an honest statement for the vet.",
    "Two housemates want an online score to settle their disagreement. Keep the useful questions and remove the unsupported authority of the total.",
    "Compare a single bad day with a six-week trend. Explain why neither should be erased and why they carry different evidentiary weight.",
    "Draft a consultation opening containing Milo's observed condition, what remains uncertain, and all four caregiver budgets without proposing a clinical outcome.",
  ],
  returnTitle: "The last page of the course remains an open record",
  returnScene: [
    "The household does not discard the quiz and does not obey its score. They translate its prompts into specific entries beside years of Milo's baseline: what comfort looks like now, what changed, how often, what still brings engagement, and which parts of care are becoming difficult for Milo or her people.",
    "They take that record and their honest budgets into the next veterinary conversation. No outcome is prewritten. Milo enters her twentieth year in the same home, now adapted many times, with a household that knows how to look, ask, revise, and decide with professional help.",
  ],
  revisedDecision: {
    prompt: "What is the course's final owner-level responsibility?",
    options: [
      { id: "a", text: "Find the most objective score so emotion and capacity no longer influence the answer.", feedback: "Emotion and capacity are not noise to delete, and an unverified score cannot carry clinical or relational judgement by itself." },
      { id: "b", text: "Bring specific trends and honest limits into an ongoing partnership, without demanding certainty from one day or one person.", feedback: "This is the best answer and gathers the full course method without assigning a predetermined outcome." },
      { id: "c", text: "Defer entirely to the vet because clinical expertise makes household knowledge and values secondary.", feedback: "Clinical expertise is essential, but the household holds longitudinal evidence, capacity, and values that the team needs for relationship-centred care." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Track quality of life as a trend", reason: "Use specific observations over time rather than a vague feeling, a comparison with another cat, or one isolated day.", claimIds: ["CH12-01", "CH6-01"] },
    { action: "Expect a structured relationship-centred process", reason: "Use the veterinary team's care-planning framework without inventing unverified internal steps at home.", claimIds: ["CH12-02"] },
    { action: "Keep prompts; question the verdict", reason: "Let a tool surface observations, but do not allow an unverified numeric score to settle the decision.", claimIds: ["CH12-03"] },
    { action: "Include the caregiver in the unit of care", reason: "State financial, time, emotional, and physical budgets honestly alongside Milo's observed condition.", claimIds: ["CH12-04", "CH12-05"] },
    { action: "Decide through ongoing partnership", reason: "The household contributes history and capacity; the veterinary team contributes clinical judgement; neither should disappear from the process.", claimIds: ["CH12-06"] },
  ],
  transferNote: "There is no final exam for the rest of Milo's life. There is the next honest observation, the next workable act of care, and the next conversation held together.",
  workload: [{ label: "Core teaching", time: "~75 min" }, { label: "Conversation walkthrough", time: "~30 min" }, { label: "Deciding-together practice", time: "~65 min" }, { label: "Scenario analysis", time: "~65 min" }, { label: "Check and reflection", time: "~25 min" }],
  workloadTotal: "About 4 hours 20 minutes",
} satisfies CaptureChapterContent;
