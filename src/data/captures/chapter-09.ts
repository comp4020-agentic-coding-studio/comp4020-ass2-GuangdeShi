import type { CaptureChapterContent } from "./types";

export const chapter09 = {
  chapter: 9,
  slug: "the-signs-easy-to-miss",
  sceneTitle: "Ten quiet days that only become visible together",
  sceneCaption: "Milo is eighteen months old. She still eats and uses the litter box; that does not settle the question.",
  scene: [
    "Milo begins eating more slowly and favours one side of her mouth. A housemate notices that her breath smells different. In several unrelated photos her ears sit slightly back and her muzzle looks tense. Nobody compares notes until ten days have passed.",
    "One housemate is reassured because Milo still finishes meals and uses the litter box. Another wants an emergency visit based on the photos alone. The observations form a pattern, but they do not name a diagnosis.",
  ],
  withheld: "The cause is deliberately unresolved. The owner-level task is to describe persistence and combination, check urgency and context, and communicate the pattern to a veterinarian.",
  observationPrompt: "Record the eating, breath, facial, grooming, and duration details separately. Add what remains normal and do not supply a diagnosis.",
  observations: [
    "Eating is slower and appears one-sided against Milo's usual baseline.",
    "Breath smells different from the household's usual observation.",
    "Ears and muzzle appear changed across more than one recent photograph.",
    "The cluster has persisted for about ten days while meal completion and litter use remain normal.",
  ],
  initialDecision: {
    prompt: "What should the household do with this cluster of subtle observations?",
    options: [
      { id: "a", text: "Keep watching without contacting anyone because eating and litter use remain normal.", feedback: "Normal high-level routines do not erase quieter persistent change. Concealment is part of why pain and dental disease can be missed." },
      { id: "b", text: "Treat two facial signs in photos as proof of severe pain requiring an emergency visit tonight.", feedback: "The signs matter, but owner photos do not establish diagnosis or urgency by themselves. Persistence, combination, context, and known urgent signatures still guide action." },
      { id: "c", text: "Compare the combined ten-day pattern with baseline and describe it to the vet promptly without self-scoring or self-treating.", feedback: "This is the best answer because the pattern is persistent and unexplained but does not match a known emergency signature." },
    ],
    bestOption: "c",
  },
  learningTitle: "Look closely without claiming more than you can know",
  learningIntro: "Chapter 6's method now faces evidence designed to be quiet. The answer is neither dismissal nor home diagnosis, but a better description of the whole pattern.",
  learningThreads: [
    { label: "Concealment", title: "No dramatic symptom is not the same as no problem", paragraphs: [
      "Animals commonly conceal discomfort, and dental signs can remain subtle even when disease is painful. The acute-pain literature exists partly because feline pain recognition is difficult. Continued eating or ordinary litter use can coexist with a meaningful quieter change.",
      "The course combines the pain and dental evidence into one concealment warning. That combined framing is synthesis: each source supports its own domain, while the chapter connects them through the baseline method.",
    ], claimIds: ["CH9-05", "CH6-02"], support: "SYNTHESIS" },
    { label: "Acute facial signs", title: "Five things to describe in the face", paragraphs: [
      "The Feline Grimace Scale uses five Action Units associated with acute pain: ears rotated or flattened outward; orbital tightening or squinting; a tense, more elliptical muzzle; whiskers straightened, pushed forward, or bunched; and the head held level with or below the shoulders rather than above them.",
      "The scale was empirically validated for naturally occurring acute pain and showed strong performance among trained scorers. It was not validated for chronic or slow-onset pain, and this chapter does not ask an owner to calculate a diagnostic cutoff.",
    ], claimIds: ["CH9-01", "CH9-02"], support: "DIRECT" },
    { label: "Owner boundary", title: "Notice and describe; do not score and decide alone", paragraphs: [
      "The validation study used trained observers and explicitly left novice reliability unresolved. An owner can use the Action Units as vocabulary for observation, but cannot borrow the study's accuracy figures for an at-home diagnosis.",
      "Record which features changed, whether they persist, what else changed, and when they occur. Share that account with a veterinarian. Pain medication, diagnosis, and treatment stay outside owner scope.",
    ], claimIds: ["CH9-03"], support: "SYNTHESIS" },
    { label: "Dental signs", title: "The mouth supplies another quiet channel", paragraphs: [
      "Owner-observable warning signs include bad breath, excessive drooling, pawing at the face, difficulty eating, bleeding or recessed gums, and tooth loss. A cat need not stop eating completely for a mouth-related pattern to deserve attention.",
      "Definitive dental diagnosis requires general anesthesia with probing, charting, and full-mouth x-rays as the standard of care. Home observation can prompt assessment; it cannot reproduce that examination.",
    ], claimIds: ["CH9-04", "CH9-08"], support: "DIRECT" },
    { label: "Combined method", title: "One sign, its context, and the pattern around it", paragraphs: [
      "Add facial and mouth observations to the same sustainable log already holding routine and body-condition information. Then reuse the four steps: personal baseline, specific change, urgent signature, and benign explanation or persistence.",
      "A brief squint during a nail trim that resolves immediately has an identifiable context. A squint, tense muzzle, slower one-sided eating, and breath change persisting together does not. Combined signals and time prevent both normalisation drift and panic over one moment.",
    ], claimIds: ["CH9-06", "CH9-07", "CH4-04", "CH6-01"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "The acute-pain facial scale", support: "DIRECT", claimIds: ["CH9-01", "CH9-02"], sourceIds: ["S30"], body: "The full peer-reviewed paper was read through PMC. It validates five Action Units for acute pain among trained observers. It does not validate chronic-pain use or lay-owner scoring, and this course omits the clinical cutoff calculations." },
    { title: "The owner observation boundary", support: "SYNTHESIS", claimIds: ["CH9-03"], sourceIds: ["S30", "S31"], body: "The project website addresses owners, but the peer-reviewed reliability study used trained scorers. The course therefore teaches descriptive observation, not a claim that owners reproduce the validated scoring accuracy." },
    { title: "Dental warning and diagnostic limits", support: "DIRECT", claimIds: ["CH9-04", "CH9-08"], sourceIds: ["S32"], body: "Cornell's clinical-service page directly supplies the six warning signs and the anesthesia, probing, charting, and full-mouth x-ray standard. It is owner-facing institutional guidance, not a graded evidence review." },
    { title: "One baseline for quiet signs", support: "SYNTHESIS", claimIds: ["CH9-05", "CH9-06", "CH9-07"], sourceIds: ["S30", "S32"], body: "The sources support subtle presentation in their domains. Folding both into the existing log and four-step method is the course's disclosed integration of earlier claims." },
  ],
  readings: [
    { time: "25 min", title: "Facial expressions of cats with acute pain", prompt: "Identify the five Action Units, the population studied, who scored the images, and the limits on owner and chronic-pain use.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6911058/", linkLabel: "Open the peer-reviewed study" },
    { time: "15 min", title: "Feline Grimace Scale companion materials", prompt: "Compare the owner-facing language with the peer-reviewed validation and write one claim the website cannot add to the study.", href: "https://www.felinegrimacescale.com/science-and-research", linkLabel: "Open the project website" },
    { time: "15 min", title: "Dentistry and oral surgery", prompt: "Separate signs an owner can notice from procedures required for a definitive diagnosis.", href: "https://www.vet.cornell.edu/hospitals/services/dentistry-and-oral-surgery", linkLabel: "Open Cornell Veterinary Medicine" },
  ],
  appliedTitle: "The shared log sees what no housemate saw alone",
  appliedIntro: "Each entry looks small. Their persistence and combination change the decision tier.",
  appliedDecision: {
    prompt: "Over ten days Milo eats slowly on one side, grooms less near her mouth, shows repeated ear and muzzle changes in photos, and has changed breath. What is the best response?",
    options: [
      { id: "a", text: "Continue watching because she finishes meals and uses the litter box normally.", feedback: "This gives two unchanged behaviours power to erase a persistent cluster across eating, grooming, facial expression, and breath." },
      { id: "b", text: "Describe the combined baseline changes to the vet promptly, without assigning a diagnosis or starting pain relief.", feedback: "This is the best answer because persistence and combination support professional assessment while urgency and diagnosis remain unclaimed." },
      { id: "c", text: "Calculate the published scale score from the photos and begin pain relief if it crosses the research cutoff.", feedback: "The validation used trained observers, and treatment is veterinarian-led. Photos and an owner-calculated score do not authorise home diagnosis or medication." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "Four evenings of slower one-sided eating and changed breath have no benign explanation. Run the four-step method and choose an action tier.",
    "A squint begins after a vacuum startle and resolves within an hour. Explain why context and resolution matter without dismissing the sign forever.",
    "A week of abdominal flinching, reduced appetite, and hiding appears together. Describe the cluster and name what change would make escalation immediate.",
    "Three housemates record reduced play, later mouth pawing, and later bad breath. Show why the shared log reveals more than each memory.",
    "Write a facial observation using all five Action Unit categories without assigning a score or diagnosis.",
    "Separate what a household can inspect safely from what dental anesthesia, probing, charting, and x-rays must establish.",
  ],
  returnTitle: "The consultation ends with a description, not a verdict",
  returnScene: [
    "The household places the ten-day entries side by side. Slower one-sided eating, reduced grooming near the mouth, changed breath, and repeated facial tension form a persistent cluster with no benign explanation. None of the housemates claims to know whether the cause is dental pain, another acute problem, or something else.",
    "They contact the veterinary team promptly and provide the timeline, photos, and baseline comparison. The ordinary litter record remains useful context, but it no longer functions as a veto against the quieter evidence.",
  ],
  revisedDecision: {
    prompt: "What is the most accurate statement the household can make?",
    options: [
      { id: "a", text: "Milo has dental disease and scores above the pain-treatment threshold.", feedback: "That exceeds owner-level evidence and imports trained-observer scoring into a context where it was not validated." },
      { id: "b", text: "Milo has a persistent combined change in eating, grooming, breath, and facial appearance that needs veterinary assessment.", feedback: "This is the best statement: specific, longitudinal, useful, and appropriately limited." },
      { id: "c", text: "Milo is probably fine because no single sign proves pain on its own.", feedback: "No single sign is conclusive, but a persistent combined pattern is exactly what the course method treats as meaningful." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Add face and mouth to the existing look-over", reason: "Keep the routine sustainable by extending the shared baseline rather than creating a separate checklist.", claimIds: ["CH9-06"] },
    { action: "Describe all five facial categories", reason: "Use ears, eyes, muzzle, whiskers, and head position as acute-pain observation vocabulary, not a home diagnosis.", claimIds: ["CH9-01", "CH9-03"] },
    { action: "Notice dental warning signs early", reason: "Report breath, drooling, face pawing, eating difficulty, gum change, or tooth loss without waiting for complete food refusal.", claimIds: ["CH9-04"] },
    { action: "Read combination, persistence, and context", reason: "A resolved context-explained moment differs from an unexplained cluster that persists against baseline.", claimIds: ["CH9-05", "CH9-07"] },
    { action: "Keep definitive assessment professional", reason: "Dental diagnosis and pain treatment require clinical examination; owner evidence should make that conversation better, not replace it.", claimIds: ["CH9-03", "CH9-08"] },
  ],
  transferNote: "Careful observation is not certainty. Its value is giving a veterinarian a truthful pattern early enough to matter while keeping diagnosis and treatment where they belong.",
  workload: [{ label: "Core teaching", time: "~70 min" }, { label: "Method walkthrough", time: "~25 min" }, { label: "Sign sorting", time: "~65 min" }, { label: "Scenario analysis", time: "~60 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours",
} satisfies CaptureChapterContent;
