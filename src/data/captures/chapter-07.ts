import type { CaptureChapterContent } from "./types";

export const chapter07 = {
  chapter: 7,
  slug: "designing-a-healthy-routine",
  sceneTitle: "She looks well. What should the household bring to the visit?",
  sceneCaption: "Milo is fourteen months old. Preventive care begins between appointments, not in the waiting room.",
  scene: [
    "Milo's annual appointment is approaching. One housemate prints a generic vaccine list and plans to request every item. Another sees Milo sleeping comfortably and says there is nothing to prepare because the examination will catch anything important.",
    "The observation log contains months of ordinary life: feeding patterns, activity, body weight, indoor routines, and occasional contact with a relative's cat. None of those details is a diagnosis. Together they are the evidence a veterinarian cannot recover from one brief snapshot.",
  ],
  withheld: "The household has not yet compared weight, body condition, and muscle condition over time or assembled Milo's actual lifestyle exposures for the veterinary conversation.",
  observationPrompt: "List what the household knows between visits: feeding pattern, body and weight observations, environment, contact with animals, travel or boarding, and prevention history.",
  observations: [
    "Milo appears outwardly comfortable at home.",
    "An appointment is scheduled, so this is preparation rather than emergency triage.",
    "The household has a longitudinal log that the clinic visit alone cannot recreate.",
    "The proposed choices are a self-selected checklist or no preparation; neither is an individualised risk conversation.",
  ],
  initialDecision: {
    prompt: "How should the household prepare for Milo's preventive-care visit?",
    options: [
      { id: "a", text: "Choose a standard vaccine and parasite schedule online and ask the vet to follow it exactly.", feedback: "Research can support questions, but selecting the protocol removes the individual risk assessment and crosses the owner-level scope boundary." },
      { id: "b", text: "Bring body and weight trends plus accurate lifestyle exposures, then let the vet lead individual clinical decisions.", feedback: "This is the best answer because it gives the clinician evidence only the household can supply without asking the owner to prescribe a protocol." },
      { id: "c", text: "Bring nothing because a healthy-looking cat and the examination are enough to reveal gradual change.", feedback: "A single visit can miss a slow trend the home baseline makes visible. Looking well does not make preparation unnecessary." },
    ],
    bestOption: "b",
  },
  learningTitle: "Healthy is a routine of evidence, access, and conversation",
  learningIntro: "The household's job is to observe patterns and report risk honestly. Clinical selection of vaccines, products, tests, and treatment remains with the veterinary team.",
  learningThreads: [
    { label: "Body condition", title: "Fat and muscle answer different questions", paragraphs: [
      "Body Condition Score is a nine-point assessment of fat covering; 5/9 is the ideal reference, informed by rib palpability and a visible waist from above. Muscle Condition Score is separate and descriptive, ranging from normal muscle mass to mild, moderate, or severe muscle loss.",
      "A cat can carry excess fat and lose muscle at the same time, especially with age or illness. That is why body weight alone cannot replace both assessments. At owner level, the useful skill is to notice and record the trend, then use the WSAVA tools with a veterinarian rather than claiming a precise diagnosis from an untrained glance.",
    ], claimIds: ["CH7-01"], support: "DIRECT" },
    { label: "Feeding behaviour", title: "How Milo eats is part of what feeding provides", paragraphs: [
      "Feeding supports behaviour as well as calorie intake. Small, frequent meals and opportunities to forage or use puzzle feeders let a cat engage senses and food-seeking behaviour instead of receiving every meal in one static bowl.",
      "In multi-cat homes, feeding stations should be visually separated and kept away from litter boxes so an anxious or subordinate cat is less likely to lose access. Indoor sedentary life is associated with obesity risk, which makes daily feeding design and active opportunities part of prevention rather than decoration.",
      "The consensus statement does not recommend a commercial brand or prescribe a diet. This Capture therefore stays with feeding pattern, access, and behaviour; individual diet and calorie decisions belong in a veterinary conversation.",
    ], claimIds: ["CH7-02", "CH5-02"], support: "DIRECT" },
    { label: "Vaccination", title: "Risk changes the conversation", paragraphs: [
      "Current vaccination guidance is organised around individual risk factors such as life stage, environment, lifestyle, indoor or outdoor access, multi-cat contact, travel, and boarding. It replaces the idea that one remembered schedule fits every cat forever.",
      "The owner contributes accurate exposure information and questions. The veterinarian chooses the protocol, products, and timing. That division is a course synthesis from clinician-facing guidance, stated openly so 'be informed' does not become 'self-prescribe.'",
    ], claimIds: ["CH7-03", "CH7-04"], support: "MIXED" },
    { label: "Parasite prevention", title: "Prevention follows a cadence, not a one-time box", paragraphs: [
      "The registered guidance supports recurring preventive examinations, repeated testing shaped by risk, and a preference for year-round rather than intermittent parasite control. Indoor-only status can reduce exposure without making risk zero.",
      "The source page is clinician-facing and its captured view defaulted to a dog tab; the exact cat-specific cadence was not independently confirmed. For that reason this course does not turn the captured numbers into owner instructions. Milo's household reports exposure and asks the vet what cadence and prevention plan fits her.",
    ], claimIds: ["CH7-05", "CH7-04"], support: "MIXED" },
    { label: "Longitudinal prevention", title: "Use Chapter 6 on the body", paragraphs: [
      "Add body weight, BCS, and MCS observations to Milo's baseline. One number is less informative than a gradual direction across comparable observations. A slow unexplained rise or fall should be raised with the vet ahead of the next scheduled visit rather than waiting for the annual examination to be the only measurement.",
      "This is the course's extension of the baseline-comparison method, not a standalone source claim. It protects against normalisation drift: when Milo changes little by little, familiarity can hide the difference unless earlier observations remain visible.",
    ], claimIds: ["CH7-06", "CH6-01", "CH6-02"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "Two condition scales", support: "DIRECT", claimIds: ["CH7-01"], sourceIds: ["S22"], body: "WSAVA supports the nine-point BCS scale, 5/9 ideal reference, and the separate descriptive MCS. The image-based charts' exact per-point wording was not machine-read, so the course teaches purpose and distinction without reproducing unverified chart text." },
    { title: "Feeding as behaviour", support: "DIRECT", claimIds: ["CH7-02"], sourceIds: ["S11"], body: "The peer-reviewed consensus directly supports foraging and puzzle feeding, small frequent meals, and separated stations away from litter boxes. It is not used here to endorse brands or prescribe a specific diet." },
    { title: "Individual risk and the owner's role", support: "SYNTHESIS", claimIds: ["CH7-03", "CH7-04"], sourceIds: ["S12", "S23"], body: "S12 directly supports individualised vaccination risk. The coaching frame - owner reports lifestyle, vet selects protocol - is the course's synthesis from clinician-facing guidance and preserves the medical-scope boundary." },
    { title: "Parasite cadence with a source caution", support: "DIRECT", claimIds: ["CH7-05"], sourceIds: ["S23"], body: "CAPC supports recurring testing and year-round prevention principles, but the captured page defaulted to a dog tab and the cat tab was not independently spot-checked. Exact cat-only frequency numbers are therefore not quoted as owner instructions." },
    { title: "Extending the baseline", support: "SYNTHESIS", claimIds: ["CH7-06"], sourceIds: ["S22", "S1"], body: "No single source states this exact log integration. The course applies Chapter 6's method to weight, body condition, and muscle condition and discloses that transfer." },
  ],
  readings: [
    { time: "18 min", title: "WSAVA nutrition and condition tools", prompt: "Distinguish what BCS, MCS, and body weight each contribute. Do not copy exact point descriptions you have not verified.", href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/", linkLabel: "Open WSAVA" },
    { time: "17 min", title: "How to feed a cat", prompt: "Identify design choices about frequency, foraging, and access. Keep these separate from brand or diet selection.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11343346/", linkLabel: "Open the consensus statement" },
    { time: "12 min", title: "Feline vaccination guidance", prompt: "List the lifestyle facts that could change risk without attempting to build a protocol yourself.", href: "https://catvets.com/resource/aaha-aafp-feline-vaccination-guidelines/", linkLabel: "Open FelineVMA guidance" },
    { time: "8 min", title: "Parasite prevention guidance", prompt: "Read for the recurring-prevention principle and note why the course does not reproduce cat-specific numbers from the captured default view.", href: "https://capcvet.org/guidelines/general-guidelines/", linkLabel: "Open CAPC guidance" },
  ],
  appliedTitle: "The scale changes slowly while Milo looks the same",
  appliedIntro: "Gradual change is where a familiar face can mislead a careful household.",
  appliedDecision: {
    prompt: "Three monthly weigh-ins rise gradually, ribs are harder to feel, and no feeding change explains it. Milo otherwise seems well; the next appointment is in ten weeks. What should happen?",
    options: [
      { id: "a", text: "Wait for the appointment because the change is gradual and Milo has no other symptom.", feedback: "This lets an unexplained trend become the new normal. The baseline method says to raise it ahead of the scheduled visit." },
      { id: "b", text: "Contact the veterinary team with the trend and condition observations, without beginning an unsupervised restriction plan.", feedback: "This is the best answer: the household contributes longitudinal evidence and leaves diet or clinical decisions with the vet." },
      { id: "c", text: "Immediately cut food by a large amount until the weight returns to the first measurement.", feedback: "That turns observation into unsupervised treatment. The evidence supports a veterinary conversation, not a self-designed restriction." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "Sort two descriptions: difficult-to-feel ribs with a broad waist, and prominent shoulders with reduced muscle. State which scale each belongs to and why both may coexist.",
    "Redesign one static daily bowl into small feeding opportunities that include safe foraging without choosing a diet or calorie target.",
    "A second cat avoids the shared bowl. Rework the room using visual separation and distance from litter resources.",
    "Prepare a lifestyle brief covering indoor or outdoor access, other animals, travel, boarding, and region for a vaccine conversation.",
    "A housemate found a vaccine list and monthly product online. Write a response that values preparation while returning protocol choice to the vet.",
    "Run a three-month weight and condition trend through Chapter 6's four steps and identify what remains unexplained.",
  ],
  returnTitle: "The appointment begins with a pattern, not a shopping list",
  returnScene: [
    "The household brings Milo's weight and condition observations, describes how meals are offered, and reports occasional contact with another cat. They also state what they do not know. The vet can now assess Milo and ask focused questions about actual exposure.",
    "No one arrives with a self-selected protocol, and no one assumes that looking comfortable made the log irrelevant. Prevention becomes a shared conversation: household evidence on one side, clinical judgement on the other.",
  ],
  revisedDecision: {
    prompt: "What should remain in Milo's routine after this visit?",
    options: [
      { id: "a", text: "Only the clinic's next appointment date; body and lifestyle details matter only when illness appears.", feedback: "This throws away the between-visit evidence that reveals gradual trends and changing risk." },
      { id: "b", text: "Comparable body and muscle observations, feeding access, and updated lifestyle exposures for future vet conversations.", feedback: "This is the best answer because prevention remains longitudinal and individual rather than a one-day checklist." },
      { id: "c", text: "A permanent protocol copied from this visit, even if Milo's age, environment, or contact changes.", feedback: "The chapter rejects a fixed lifetime checklist. Risk and clinical guidance can change with Milo's circumstances." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Track fat and muscle separately", reason: "Use BCS, MCS, and weight as related but non-interchangeable observations, ideally with veterinary guidance.", claimIds: ["CH7-01"] },
    { action: "Design feeding around behaviour and access", reason: "Offer manageable foraging and smaller opportunities, and separate stations in multi-cat homes without self-prescribing diet content.", claimIds: ["CH7-02"] },
    { action: "Report real lifestyle exposure", reason: "Life stage, environment, animal contact, travel, and boarding inform individual vaccination and parasite decisions.", claimIds: ["CH7-03", "CH7-04"] },
    { action: "Keep prevention recurring and vet-led", reason: "Ask about testing and prevention cadence; do not convert clinician-facing guidance into a home-selected product schedule.", claimIds: ["CH7-04", "CH7-05"] },
    { action: "Raise unexplained condition trends before they become normal", reason: "Apply the baseline method to gradual weight, BCS, or MCS change rather than relying on the annual snapshot.", claimIds: ["CH7-06", "CH6-02"] },
  ],
  transferNote: "Preventive care is not passive waiting or owner-prescribed medicine. It is a steady household record that makes the next professional conversation more truthful and more useful.",
  workload: [{ label: "Core teaching", time: "~55 min" }, { label: "BCS / MCS sort", time: "~25 min" }, { label: "Worked method", time: "~30 min" }, { label: "Condition practice", time: "~60 min" }, { label: "Scenario analysis", time: "~65 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours 15 minutes",
} satisfies CaptureChapterContent;
