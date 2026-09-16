import type { CaptureChapterContent } from "./types";

export const chapter05 = {
  chapter: 5,
  slug: "needs-not-naughtiness",
  sceneTitle: "The same sofa corner, every evening",
  sceneCaption: "Milo is five months old. The damage is visible; the reason is still being guessed.",
  scene: [
    "Milo stretches up and scratches the corner of a new sofa just after her housemates come home. It is the same place and roughly the same time each evening. One housemate reaches for a spray bottle. Another suggests declawing because a friend called it a permanent solution.",
    "Both responses begin with stopping the damage. Nobody has yet checked whether Milo has a scratching outlet, where it stands, or whether its surface and orientation match the sofa corner she repeatedly chooses.",
  ],
  withheld: "The household has not described Milo's available scratching surface, its location, or whether she uses it. Those details decide whether the environment offers a realistic alternative.",
  observationPrompt: "Describe the location, timing, body position, repetition, and proposed responses. Keep the damage separate from any claim about Milo's intention.",
  observations: [
    "Milo scratches one vertical sofa corner rather than changing sites at random.",
    "The behaviour recurs in the evening after the housemates return.",
    "She stretches upward while scratching, revealing an orientation preference.",
    "The proposed responses are punishment or surgery; neither person has assessed the available outlet.",
  ],
  initialDecision: {
    prompt: "What should happen the next time Milo scratches this corner?",
    options: [
      { id: "a", text: "Scold or spray her immediately so the correction is clearly connected to the scratching.", feedback: "Punishment does not address the normal function of scratching and can add stress. The source specifically warns that the cat does not make the intended punishment-act link." },
      { id: "b", text: "Identify her preferred surface and orientation, place a matching outlet at that site, and reduce the sofa's appeal without punishment.", feedback: "This is the best response because it works from the observed preference and gives the normal behaviour an acceptable place to occur." },
      { id: "c", text: "Ask about declawing because it removes the behaviour more permanently than environmental management.", feedback: "Declawing is an invasive, amputation-equivalent last resort, not a proportionate first response to a species-typical behaviour." },
    ],
    bestOption: "b",
  },
  learningTitle: "Ask what the behaviour is doing before trying to stop it",
  learningIntro: "The consultation follows three behaviours that can look like one category called 'bad behaviour.' They need three different readings: environmental redirection, play redirection, or a medical rule-out.",
  learningThreads: [
    { label: "Scratching", title: "Read the scratch, not just the damaged object", paragraphs: [
      "Scratching is normal territorial and identity marking. It deposits scent from paw glands, leaves a visible mark, and helps remove claw sheaths. That makes the repeated sofa corner evidence about Milo's preferred location, surface, and vertical orientation, not evidence of spite or revenge.",
      "A useful alternative must compete with the chosen site: it should match the preferred surface and orientation, be stable and long or tall enough for a full stretch, and begin close to the existing scratch. The household can make the sofa less appealing and gradually move a well-used outlet later. Nail trims or caps may reduce damage, but they do not replace the need to scratch.",
      "Punishment misses that mechanism and may increase stress. Declawing is not a training shortcut; the source describes an invasive, amputation-equivalent procedure that belongs only at the far end of a veterinary decision, not at the start of an ordinary furniture problem.",
    ], claimIds: ["CH5-01"], support: "DIRECT" },
    { label: "Predatory play", title: "A full food bowl does not switch off the hunting sequence", paragraphs: [
      "Cats retain a drive to locate, stalk, chase, pounce, capture, and eat whether or not they are hungry. Feet moving under a blanket can enter that sequence because movement resembles prey. Calling the pounce disobedience does not explain what keeps rehearsing it.",
      "Wand or rod play can carry the sequence toward a capture while keeping hands and feet out of the role of prey. Hiding or scattering food, puzzle or timed feeders, and rotating toys add foraging opportunities and reduce habituation. The aim is an acceptable outlet, not relentless stimulation.",
      "Chapter 2 and Chapter 4 still apply. Before redirecting, read ears, eyes, tail, posture, location, and recent interaction. Playful arousal and an overstimulated request for distance can look similar if the moving feet are the only cue considered.",
    ], claimIds: ["CH5-02", "CH4-04"], support: "MIXED" },
    { label: "Overgrooming", title: "A raw patch is not permission to diagnose stress", paragraphs: [
      "Normal grooming occupies a substantial part of a cat's day. A new bald, raw, or repeatedly licked area is different because physical causes must be ruled out by a veterinarian before the household treats it as stress-related displacement behaviour.",
      "Pain-related licking may remain localised, while itch-related licking can be more widespread. These are useful observations to report, not a home diagnosis. Licking can damage skin, invite infection, and reinforce the cycle; it may also persist as a habit after the first trigger resolves.",
      "After medical causes are excluded, gradual transitions, familiar bedding, vertical retreat space, and brief daily interactive play can support stress reduction. Medication, if relevant, remains a veterinarian-led decision rather than an owner experiment.",
    ], claimIds: ["CH5-03"], support: "DIRECT" },
    { label: "Triage", title: "One question, asked before every response", paragraphs: [
      "Across these cases, ask: what species-typical need might this behaviour meet, or could a medical cause be present? Scratching calls for an environmental match. Predatory play calls for an appropriate behavioural outlet. A new raw overgroomed patch calls for medical rule-out first.",
      "This umbrella is a course synthesis, not one source's universal rule. It carries Chapter 3's medical-first and no-punishment reasoning into a wider set of behaviours while preserving the important differences between them.",
    ], claimIds: ["CH5-04", "CH3-03", "CH3-04"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "Scratching as normal marking", support: "DIRECT", claimIds: ["CH5-01"], sourceIds: ["S26"], body: "Cornell's owner-facing page directly supports the function of scratching, matched alternatives, placement, punishment warning, and declawing boundary. Low-cost DIY examples are course applications of the matching principle, not quoted recommendations from the source." },
    { title: "Predatory sequence and acceptable outlets", support: "DIRECT", claimIds: ["CH5-02"], sourceIds: ["S1", "S11"], body: "The environmental-needs guideline directly supports the predatory sequence and play or foraging outlets; the feeding consensus corroborates foraging and puzzle feeding. Body-language interpretation is a callback to earlier chapters." },
    { title: "Medical-first overgrooming reasoning", support: "DIRECT", claimIds: ["CH5-03"], sourceIds: ["S27"], body: "Cornell supports the localised-versus-widespread observation, veterinary rule-out, self-reinforcing cycle, and later environmental supports. It does not authorise owners to diagnose the cause or begin medication." },
    { title: "Needs, not naughtiness", support: "SYNTHESIS", claimIds: ["CH5-04"], sourceIds: ["S26", "S1", "S27", "S4"], body: "No single source groups scratching, predatory play, and overgrooming under this exact triage. The course constructs the comparison and discloses it so the shared principle does not erase the different response each behaviour needs." },
  ],
  readings: [
    { time: "15 min", title: "Destructive behavior", prompt: "Trace the sequence from observed preference to matching outlet and changed surface. Mark where punishment and declawing fail that reasoning.", href: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-destructive-behavior", linkLabel: "Open Cornell Feline Health Center" },
    { time: "15 min", title: "Five pillars: predatory behaviour", prompt: "Read the predatory-play section and map each suggested outlet to one part of the hunt sequence.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11383066/", linkLabel: "Open the peer-reviewed guideline" },
    { time: "15 min", title: "Cats that lick too much", prompt: "Separate what an owner can observe from what requires veterinary exclusion. Note the source's medication boundary.", href: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/cats-lick-too-much", linkLabel: "Open Cornell Feline Health Center" },
  ],
  appliedTitle: "Three behaviours arrive in the same week",
  appliedIntro: "A single kind response can still be the wrong response if it skips triage.",
  appliedDecision: {
    prompt: "Milo scratches despite a nearby post, pounces on feet at night, and develops a raw bald patch from licking. What should the household do?",
    options: [
      { id: "a", text: "Assume general stress, add more toys, and wait to see whether all three settle.", feedback: "This sounds caring but treats three different mechanisms as one. Most importantly, it delays medical rule-out for the raw patch." },
      { id: "b", text: "Reassess the post's match and placement, redirect pouncing into wand play, and ask a vet to assess the licked patch before calling it stress.", feedback: "This is the best answer because each response follows the evidence and the medical-first boundary." },
      { id: "c", text: "Correct each behaviour firmly because food, toys, and a post are already available.", feedback: "Availability does not prove that a resource matches Milo's need, and punishment remains inappropriate. The raw patch also requires a different kind of response." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "A cat scratches a doorframe daily. Classify the next step and state which preference details you would inspect.",
    "A cat pounces on ankles around dusk. Design a redirect that includes the sequence and a safe capture.",
    "A raw localised bald patch appeared within a week. Separate observations to report from diagnoses you cannot make.",
    "A cat strains, cries, and produces no urine. Explain why this bypasses Chapter 5's redirection choices.",
    "A cat grooms with no skin or coat change. Explain what evidence would be needed before calling it overgrooming.",
    "A matching commercial post is unaffordable. Propose a stable low-cost outlet while labelling the proposal as an application of the source principle.",
  ],
  returnTitle: "The sofa corner becomes a question the room can answer",
  returnScene: [
    "The household compares the short unused post across the room with Milo's full vertical stretch on the sofa. They place a stable, taller, rough-surfaced outlet directly beside the marked corner and temporarily cover the sofa edge. Nobody sprays her.",
    "When Milo approaches the corner, the new outlet is a plausible alternative rather than a distant piece of furniture. The household records whether she uses it before deciding where it can eventually move. They have not 'won' against Milo; they have changed the choice the room offers.",
  ],
  revisedDecision: {
    prompt: "Milo uses the new outlet beside the sofa for several days. What is the strongest next interpretation?",
    options: [
      { id: "a", text: "The matched outlet supports the idea that the original site met a scratching need; keep observing and relocate only gradually.", feedback: "This is the best conclusion. The response tests a mechanism and preserves the outlet while the new habit becomes reliable." },
      { id: "b", text: "Milo has learned that scratching is forbidden, so the outlet can now be removed.", feedback: "She has not stopped needing to scratch. Removing the acceptable outlet recreates the original environmental problem." },
      { id: "c", text: "The result proves every unwanted behaviour should receive a better object instead of veterinary attention.", feedback: "That overgeneralises one environmental redirect. The chapter's core skill is choosing among different response categories." },
    ],
    bestOption: "a",
  },
  carePlan: [
    { action: "Describe the function before judging the behaviour", reason: "Record site, surface, orientation, timing, body language, and visible change rather than assigning spite or disobedience.", claimIds: ["CH5-01", "CH5-04"] },
    { action: "Match scratching outlets to the observed preference", reason: "Begin at the chosen site with a stable matching surface and reduce the off-limits surface's appeal without punishment.", claimIds: ["CH5-01"] },
    { action: "Give predatory play a complete, safe outlet", reason: "Use toy-led chase and capture, foraging opportunities, and rotation while keeping hands and feet out of the prey role.", claimIds: ["CH5-02"] },
    { action: "Route visible overgrooming change through a vet first", reason: "Report the location and extent; do not label a bald or raw patch as stress before physical causes are excluded.", claimIds: ["CH5-03"] },
    { action: "Choose a response per behaviour", reason: "Environmental redirect, behavioural redirect, and medical rule-out are not interchangeable versions of being helpful.", claimIds: ["CH5-04"] },
  ],
  transferNote: "The owner-level skill is not stopping every inconvenient behaviour. It is identifying the kind of need or risk in front of you and choosing the smallest safe response that matches it.",
  workload: [{ label: "Core teaching", time: "~55 min" }, { label: "Guided reading", time: "~45 min" }, { label: "Scenario analysis", time: "~55 min" }, { label: "Triage practice", time: "~55 min" }, { label: "Applied practice", time: "~15 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours 5 minutes",
} satisfies CaptureChapterContent;
