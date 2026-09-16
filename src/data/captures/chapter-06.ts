import type { CaptureChapterContent } from "./types";

export const chapter06 = {
  chapter: 6,
  slug: "noticing-what-changed",
  sceneTitle: "Less breakfast, more evening conversation",
  sceneCaption: "Milo is nine months old. The difference is noticeable, but its significance is not yet settled.",
  scene: [
    "For several days, Milo leaves more of her morning meal and vocalises more in the evening. One housemate calls it a phase. Another points out that she is energetic and using the litter box normally, so it probably is not urgent.",
    "Those details help with urgency, but neither explanation answers the larger question: what exactly changed from Milo's own baseline, how long has it lasted, and has anything in the household changed with it?",
  ],
  withheld: "You have not yet been told whether the food, feeding time, work schedule, visitors, or home environment changed. An explanation may exist, but it has not been checked.",
  observationPrompt: "Write only the departures from Milo's usual pattern. Add frequency, duration, and what has remained normal; leave the cause blank for now.",
  observations: [
    "Morning intake has been lower than Milo's recorded usual amount for several days.",
    "Evening vocalisation has increased relative to her usual pattern.",
    "Energy and litter-box use appear unchanged from the household's current observation.",
    "No household or environmental explanation has yet been sought or ruled out.",
  ],
  initialDecision: {
    prompt: "Given only these observations, what should happen next?",
    options: [
      { id: "a", text: "Wait indefinitely because no urgent sign is present and Milo still eats something.", feedback: "Not urgent does not mean no action. This skips a precise baseline comparison and the search for an explanation or persistence." },
      { id: "b", text: "Compare the log, specify the change, check urgent signatures, then look for an explanation before choosing observation or a vet conversation.", feedback: "This is the best answer because it uses the complete method instead of turning one reassuring detail into a conclusion." },
      { id: "c", text: "Treat any departure from routine as an immediate emergency visit.", feedback: "This is the opposite failure mode. Ordinary variation and explained, resolving changes still need proportionate judgement." },
    ],
    bestOption: "b",
  },
  learningTitle: "Four steps, not a feeling",
  learningIntro: "The method does not add a new diagnosis. It assembles the observation, escalation, communication, and triage skills already built across Milo's first five chapters.",
  learningThreads: [
    { label: "Step 1", title: "Return to the personal baseline", paragraphs: [
      "Recall what is normal for this cat rather than what cats supposedly do in general. Milo's observation log supplies usual meal completion, vocal patterns, litter use, play, social contact, and the context around them. A memory such as 'she has always been fussy' is not as stable as a dated record.",
      "If the baseline is incomplete, say so. Reconstruct what can be supported from both housemates, the log, and routine records, then lower confidence rather than allowing the most certain person to decide what is normal.",
    ], claimIds: ["CH6-01", "CH1-09"], support: "SYNTHESIS" },
    { label: "Step 2", title: "Specify the change", paragraphs: [
      "Name whether frequency, intensity, or duration changed; whether a new behaviour appeared; or whether a usual behaviour disappeared. 'Milo is acting strange' cannot be compared tomorrow. 'She left roughly half of breakfast on four mornings' can.",
      "Keep several channels available. A change in eating beside unchanged energy and litter use is a more complete record than the appetite detail alone, but the reassuring channels do not erase the changed one.",
    ], claimIds: ["CH6-01", "CH4-04"], support: "SYNTHESIS" },
    { label: "Step 3", title: "Check urgent signatures before explaining", paragraphs: [
      "Ask whether the observation matches an already learned urgent pattern. Repeated straining, crying, and little or no urine bypass a leisurely search for household explanations because Chapter 3 established that obstruction-risk signature as time-sensitive.",
      "This step prevents a plausible story from delaying urgent help. A recent visitor or changed routine cannot safely explain away a known emergency pattern.",
    ], claimIds: ["CH6-01", "CH3-06"], support: "SYNTHESIS" },
    { label: "Step 4", title: "Test explanation, persistence, and direction", paragraphs: [
      "If the change is not urgent, ask whether a specific benign cause fits: a schedule disruption, changed food, visitor, heating failure, or another environmental event. If the timing fits and the behaviour returns to baseline when the cause passes, log it and keep observing.",
      "If there is no explanation, or the change persists or worsens, raise it with a veterinarian rather than waiting without an endpoint. The method distinguishes immediate escalation from a prompt or routine conversation; it does not turn the owner into a diagnostician.",
    ], claimIds: ["CH6-01", "CH5-04"], support: "SYNTHESIS" },
    { label: "Failure modes", title: "Do not let the baseline drift; do not make every difference an alarm", paragraphs: [
      "Normalisation drift happens when gradual change quietly becomes the new normal: 'she has always been a bit like that.' Over-escalation happens when every harmless variation is treated as an emergency. One hides meaningful change; the other creates a method nobody can sustain.",
      "The correction is the same in both directions: use the dated baseline, specify magnitude and time, check urgency, and revisit the observation. The decision is evidence-shaped, not permanently relaxed or permanently anxious.",
    ], claimIds: ["CH6-02"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "A course-constructed baseline method", support: "SYNTHESIS", claimIds: ["CH6-01"], sourceIds: ["S1", "S2", "S3", "S4"], body: "No guideline states this exact four-step procedure. The course formalises a shared principle from Chapters 1, 3, 4, and 5: meaningful change is judged against the individual cat, urgent patterns override benign stories, and unexplained persistence belongs in a veterinary conversation." },
    { title: "Two pedagogical failure modes", support: "SYNTHESIS", claimIds: ["CH6-02"], sourceIds: [], body: "Normalisation drift and over-escalation are course-created cautions about using the method. They are not presented as named veterinary diagnoses or as claims from a registered source." },
  ],
  readings: [
    { time: "18 min", title: "Revisit Milo's observation log", prompt: "Return to Chapter 1 and identify which fields establish a personal baseline rather than a generic expectation.", href: "../the-first-72-hours/", linkLabel: "Revisit Capture 01" },
    { time: "17 min", title: "Revisit the urgent signature", prompt: "Explain why a known time-sensitive pattern is checked before searching for a household explanation.", href: "../reading-the-first-warning-signs/", linkLabel: "Revisit Capture 03" },
    { time: "15 min", title: "Revisit need and medical triage", prompt: "Compare environmental redirection, behavioural redirection, medical rule-out, and immediate escalation.", href: "../needs-not-naughtiness/", linkLabel: "Revisit Capture 05" },
  ],
  appliedTitle: "A visitor arrives, the scratching rises, then it falls",
  appliedIntro: "A visible change with an identifiable cause still needs the whole method, including evidence that it resolved.",
  appliedDecision: {
    prompt: "Milo scratches more intensely during a two-week houseguest's stay and returns to baseline the week after the guest leaves. What is the best judgement?",
    options: [
      { id: "a", text: "Log the explained, resolved change and keep observing rather than escalating it by default.", feedback: "This is the best answer: the change was specified, no urgent signature appeared, the timing fit an environmental cause, and the pattern resolved." },
      { id: "b", text: "Arrange an emergency visit because any two-week behaviour change is automatically urgent.", feedback: "Duration matters, but urgency is not assigned by duration alone. This case has a fitting cause and documented return to baseline." },
      { id: "c", text: "Delete the event from the log because a harmless explanation means it was never meaningful.", feedback: "The event remains useful baseline evidence. Explained change teaches the household how Milo responds to disruption." },
    ],
    bestOption: "a",
  },
  practicePrompts: [
    "Milo's water bowl needs refilling more often for a week, with no known household change. Run all four steps and state the appropriate endpoint.",
    "A cat strains, cries, and produces no urine. Identify the step that determines the decision and explain why later steps must wait.",
    "A cat sleeps more after the heating fails and returns to baseline once warmth is restored. Record the explanation and resolution without erasing the event.",
    "A cat withdraws for ten days with no identifiable change at home. Distinguish 'not an emergency' from 'keep waiting.'",
    "One breakfast is missed because nobody served it; lunch is normal. Explain why this does not establish a changed appetite pattern.",
    "Two housemates disagree about food intake because only one keeps notes. Reconstruct the usable baseline and name the resulting confidence limit.",
  ],
  returnTitle: "The missing fact belongs beside the symptom, not over it",
  returnScene: [
    "The log confirms that Milo's reduced breakfast and extra evening vocalising began when one housemate's work shift moved feeding ninety minutes later. The household restores a consistent morning time. Over the next several days, intake and evening vocalisation return toward the recorded baseline.",
    "The schedule shift is a supported explanation because its timing fits and the pattern resolves. If intake had stayed low, worsened, or gained other signs, the same method would have produced a different endpoint: raise the unexplained persistence with the vet.",
  ],
  revisedDecision: {
    prompt: "What should the household record after Milo returns to baseline?",
    options: [
      { id: "a", text: "Only that Milo was fine; the temporary details would make the log unnecessarily complicated.", feedback: "Removing the sequence loses evidence about how this individual responds to schedule disruption." },
      { id: "b", text: "The exact change, schedule shift, response, and return to baseline, while continuing ordinary observation.", feedback: "This is the best answer because it preserves the causal test and makes future comparisons more reliable." },
      { id: "c", text: "That any future appetite change can be assumed to come from timing and does not need reassessment.", feedback: "One explained event does not become a permanent interpretation. Future change must be run through the method again." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Start with Milo's recorded baseline", reason: "Use dated individual patterns and state when the record is incomplete.", claimIds: ["CH6-01", "CH1-09"] },
    { action: "Describe exactly what changed", reason: "Record frequency, intensity, duration, new behaviour, or missing usual behaviour so the observation can be compared later.", claimIds: ["CH6-01"] },
    { action: "Check urgent signatures before accepting an explanation", reason: "A known time-sensitive pattern overrides a plausible household story and requires immediate professional help.", claimIds: ["CH6-01", "CH3-06"] },
    { action: "Test a benign explanation against resolution", reason: "Log and observe when timing fits and the change resolves; raise unexplained, persistent, or worsening change with a vet.", claimIds: ["CH6-01"] },
    { action: "Guard both sides of judgement", reason: "Use the method to resist normalisation drift and unsustainable over-escalation.", claimIds: ["CH6-02"] },
  ],
  transferNote: "A baseline does not remove uncertainty. It gives uncertainty a disciplined next step and keeps the household from confusing 'not urgent' with 'not worth noticing.'",
  workload: [{ label: "Core teaching", time: "~50 min" }, { label: "Worked example", time: "~30 min" }, { label: "Recall worksheet", time: "~35 min" }, { label: "Method practice", time: "~50 min" }, { label: "Case analysis", time: "~60 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours 5 minutes",
} satisfies CaptureChapterContent;
