import type { CaptureChapterContent } from "./types";

export const chapter03 = {
  chapter: 3,
  slug: "reading-the-first-warning-signs",
  sceneTitle: "The log changes before the room looks dramatic",
  sceneCaption: "Two and a half weeks in: more litter-box trips, less output, one cry.",
  scene: [
    "Milo's first weeks have produced a quiet baseline: eating, drinking, playing, and using the litter tray in a familiar pattern. Yesterday the log changed. She visited the tray more often, appeared to produce very little, and this morning gave one short cry while in the box.",
    "She is slightly quieter, but she can still walk through the room. There is no single spectacular event. The question is whether the pattern has already crossed the point where watching is enough.",
  ],
  withheld: "You cannot identify the cause at home, and Milo's sex and kitten age do not match the highest-risk demographic for obstruction. The observable presentation still requires a safe action.",
  observationPrompt: "Compare today with Milo's logged baseline. Record frequency, output, vocalisation, and energy without naming a diagnosis.",
  observations: ["Litter-box visits are more frequent than Milo's established pattern.", "Very little output was seen on several visits.", "Milo vocalised once while in the tray.", "Her energy is lower than usual, though the change is not dramatic."],
  initialDecision: {
    prompt: "Milo is making repeated trips, producing very little, and cried once in the litter box. What should happen today?",
    options: [
      { id: "a", text: "Record it and watch for another day or two because settling can be uneven.", feedback: "Patience was useful during arrival, but repeated low-output attempts plus vocalising are the narrow pattern that overrides wait-and-observe." },
      { id: "b", text: "Contact a veterinarian today and describe the observed pattern.", feedback: "This is the safe owner-level decision. The owner reports the presentation; the veterinarian determines the cause and urgency." },
      { id: "c", text: "Change the litter or move the box because Milo may dislike the setup.", feedback: "Setup can matter, but changing it first skips medical-first reasoning when urinary discomfort is plausible." },
    ],
    bestOption: "b",
  },
  learningTitle: "A baseline is useful only when it changes what you do",
  learningIntro: "This chapter separates setup problems, behaviour patterns, routine warning signs, and the small group of observations that should not wait.",
  learningThreads: [
    { label: "Set the box up well", title: "A litter tray is an environment, not a container", paragraphs: [
      "Provide at least one litter box per cat plus one extra. A practical size guide is about one and a half times the cat's nose-to-base-of-tail length. Fine, unscented, clumping litter at least about three centimetres deep is the registered recommendation, with scooping at least daily and washing with soap and hot water rather than ammonia-based cleaners every one to four weeks.",
      "Keep boxes away from food and water and avoid facing boxes directly toward one another. Once Milo is reliably using a box, avoid relocating it for at least about two weeks. These details reduce avoidable setup problems; they do not make every later change a setup problem.",
    ], claimIds: ["CH3-01"], support: "DIRECT" },
    { label: "Name the pattern", title: "Marking, toileting, and location preference are not interchangeable", paragraphs: [
      "Marking is often small-volume and placed on a vertical surface while the cat stands with the tail raised or twitching; the litter box may still be used for full voids. Toileting outside the box is usually a full elimination and may involve litter, access, or aversion. A location preference is another pattern again.",
      "The distinction matters because an owner who calls every event 'bad litter behaviour' is already too far ahead of the evidence. Record posture, surface, volume, location, and whether normal box use continues. Those observations help a veterinarian or behaviour professional reason about the problem without punishment or guesswork.",
    ], claimIds: ["CH3-02"], support: "DIRECT" },
    { label: "Medical first", title: "Behavioural and medical causes can coexist", paragraphs: [
      "House-soiling can have a medical cause, an environmental or behavioural cause, or both. Treating one does not guarantee that a learned aversion disappears, and finding a plausible environmental explanation does not rule out disease. The owner's role is to preserve the evidence and seek assessment, not choose one category at home.",
      "Never punish elimination outside the box. Punishment does not address the cause and may worsen a stress-related problem. Clean, record, protect access to appropriate boxes, and move the question toward professional assessment when warning signs are present.",
    ], claimIds: ["CH3-03", "CH3-04"], support: "DIRECT" },
    { label: "Know the threshold", title: "Some observations change the timetable", paragraphs: [
      "Contact a veterinarian for concrete warning signs including appetite loss, persistent vomiting or diarrhoea, nasal or eye discharge, unexplained weight change, urinary straining or blood, excessive thirst, breathing difficulty, lethargy, or unexplained swelling. A list is more useful than the vague feeling that something is off.",
      "Repeated unproductive straining to urinate, crying while trying to eliminate, a firm painful abdomen, or no urine at all warrants immediate same-day or emergency care. Urethral obstruction especially affects male cats, and Milo is a young female; this chapter does not claim she is in the highest-risk group. It teaches recognition of an observable emergency signature whose cause cannot safely be decided at home.",
    ], claimIds: ["CH3-05", "CH3-06"], support: "MIXED" },
  ],
  evidenceNotes: [
    { title: "Litter setup and medical-first reasoning", support: "DIRECT", claimIds: ["CH3-01", "CH3-02", "CH3-03", "CH3-04"], sourceIds: ["S4"], body: "The house-soiling guideline supports the setup details, pattern distinctions, medical-and-behavioural reasoning, and no-punishment rule." },
    { title: "Owner-visible warning signs", support: "DIRECT", claimIds: ["CH3-05"], sourceIds: ["S5"], body: "Cornell's client guidance is used for a basic warning-sign list. It is institutional owner education, not a substitute for an examination or a source for diagnosis." },
    { title: "The urgent urinary presentation", support: "DIRECT", claimIds: ["CH3-06"], sourceIds: ["S7"], body: "The University of Illinois source supports the emergency nature of obstruction presentations, especially in male cats. The course applies the safe policy to the observable signature without claiming Milo has the diagnosis or highest statistical risk." },
    { title: "Recognise the signature, not the diagnosis", support: "SYNTHESIS", claimIds: ["CH3-06"], sourceIds: ["S7"], body: "The factual emergency signs are direct. Framing the owner task as recognising a behavioural signature and escalating without diagnosing is this course's disclosed owner-scope synthesis." },
  ],
  readings: [
    { time: "25 min", title: "House-soiling guideline", prompt: "Compare the setup recommendations and the marking-versus-toileting descriptions. Write which observations an owner can record without assigning a cause.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11148882/", linkLabel: "Open the AAFP/ISFM guideline" },
    { time: "10 min", title: "New-cat health guidance", prompt: "Locate the warning signs that can be observed at home and turn each into a plain log entry rather than a diagnosis.", href: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/choosing-and-caring-your-new-cat", linkLabel: "Open Cornell's owner guidance" },
    { time: "10 min", title: "Urinary obstruction emergency", prompt: "Read for the presentation and urgency. Keep the male-risk nuance separate from the universal owner action when the signature appears.", href: "https://vetmed.illinois.edu/pet-health-columns/blocked-cats-an-emergency-for-male-cats/", linkLabel: "Open the Illinois veterinary article" },
  ],
  appliedTitle: "A quiet change outside the urinary pattern",
  appliedIntro: "Transfer the escalation method to appetite and energy without stretching every change into an emergency.",
  appliedDecision: {
    prompt: "Milo has not eaten for more than 24 hours and is more tired than usual, but the litter box looks normal. What is the best owner-level response?",
    options: [
      { id: "a", text: "Wait another day because the urinary emergency pattern is absent.", feedback: "The absence of urinary red flags does not cancel other registered warning signs. Appetite loss and lethargy still warrant contact." },
      { id: "b", text: "Contact the vet today and describe the appetite and energy changes against Milo's baseline.", feedback: "This uses the concrete warning list and gives the veterinarian useful comparative information without claiming an emergency diagnosis." },
      { id: "c", text: "Offer favourite food and only call if Milo refuses that as well.", feedback: "A preferred food may produce more observation, but it should not become a test that delays contact after more than 24 hours without eating." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "A cat sprays a small amount on a vertical wall but still uses the tray for full voids. Record the pattern and the next owner action.",
    "A cat avoids a newly moved tray but shows no listed illness signs. Separate setup review from medical-first caution.",
    "A log shows repeated unproductive straining and crying. Write the action without naming a diagnosis.",
    "Several mild signs appear during noisy home repairs: reduced appetite, more drinking, hiding, and one painful response. Explain why same-day vet contact can be appropriate without calling it an emergency.",
    "A dramatic single change has no supporting warning sign and resolves. Explain what should still be recorded for the baseline.",
  ],
  returnTitle: "The log now carries an action, not just a memory",
  returnScene: [
    "The repeated trips, low output, and cry are written as separate observations. You contact the veterinary clinic today and read the pattern from the log. You do not change the litter, punish Milo, press her abdomen, or try to decide the cause yourself.",
    "The observation habit from Chapter 1 has changed roles. It no longer only documents settling. It makes a deviation legible enough to communicate promptly.",
  ],
  revisedDecision: {
    prompt: "What is the safest revised judgement for Milo's litter-box pattern?",
    options: [
      { id: "a", text: "Keep observing until the cause becomes clearer at home.", feedback: "Clarity about cause is not the owner's threshold. The observed signature already supports same-day professional contact." },
      { id: "b", text: "Contact the vet today, report the precise pattern, and follow the urgency advice given.", feedback: "This preserves the owner-professional boundary while responding to a potentially time-sensitive presentation." },
      { id: "c", text: "Treat the case as confirmed obstruction and attempt immediate home relief.", feedback: "The presentation can have more than one cause. Home diagnosis or treatment exceeds the owner-level task and may delay appropriate care." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Maintain an evidence-friendly litter setup", reason: "Use enough appropriately sized boxes, suitable litter, daily scooping, safe cleaning, and stable placement.", claimIds: ["CH3-01"] },
    { action: "Record the pattern before explaining it", reason: "Note posture, surface, volume, frequency, location, and whether normal tray use continues.", claimIds: ["CH3-02"] },
    { action: "Rule out medical causes professionally", reason: "Environmental and medical factors can coexist; the owner should not assume one category away.", claimIds: ["CH3-03"] },
    { action: "Never punish house-soiling", reason: "Punishment misses the cause and can worsen stress-related problems.", claimIds: ["CH3-04"] },
    { action: "Use concrete contact thresholds", reason: "Call for registered warning signs; treat repeated unproductive urinary attempts, elimination cries, painful firm abdomen, or no urine as immediate escalation signs.", claimIds: ["CH3-05", "CH3-06"] },
  ],
  transferNote: "Observe and communicate the presentation. A safe owner recognises urgency without pretending to know the diagnosis.",
  workload: [{ label: "Core teaching", time: "~55 min" }, { label: "Guided reading", time: "~45 min" }, { label: "Scenario analysis", time: "~70 min" }, { label: "Applied activity", time: "~85 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours 35 minutes",
} satisfies CaptureChapterContent;
