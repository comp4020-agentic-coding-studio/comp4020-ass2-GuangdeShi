import type { CaptureChapterContent } from "./types";

export const chapter08 = {
  chapter: 8,
  slug: "the-indoor-outdoor-decision",
  sceneTitle: "The door is not a yes-or-no question",
  sceneCaption: "Milo is sixteen months old. A proactive household decision should begin with her, not with a slogan.",
  scene: [
    "One housemate worries that Milo has never had the chance to be a 'real cat' and wants to let her roam. Another sees the busy street outside the apartment and wants the door permanently closed. The apartment has a balcony but no yard; a securely fenced family garden is available on some weekends.",
    "Milo's log shows a confident, curious cat whose indoor needs appear well met. The disagreement is not a response to a current welfare crisis. It is a question about what kind of life fits this cat and this household now.",
  ],
  withheld: "The household has not yet weighed Milo's temperament, her indoor baseline, the street and balcony risks, training time, or the controlled weekend option together.",
  observationPrompt: "Record Milo's history and body-language pattern, the everyday home, every possible access setting, and the household's time, money, mobility, and supervision constraints.",
  observations: [
    "Milo was raised indoors and shows no logged pattern of indoor-life distress.",
    "The primary home faces a busy street and its balcony is not described as enclosed.",
    "A securely fenced garden may be available for supervised weekend access.",
    "The two proposed positions are universal claims; neither is yet a plan fitted to Milo and the household.",
  ],
  initialDecision: {
    prompt: "What should the household decide from the information available?",
    options: [
      { id: "a", text: "Begin unsupervised outdoor access because a confident cat is naturally suited to roaming.", feedback: "Confidence alone does not remove traffic, balcony, injury, or supervision risk. Outdoor access is not inherently the kinder option." },
      { id: "b", text: "Keep a complete indoor plan, assess Milo and the household, and explore gradual training for controlled weekend access with ID either way.", feedback: "This is the best answer because it treats indoor care as a full commitment and outdoor access as a controlled, trained option rather than an ideology." },
      { id: "c", text: "Choose indoor-only permanently because the busy street makes every future outdoor option irresponsible.", feedback: "Indoor-only may fit, but this reasoning ignores the fenced setting, temperament, training, and the need to keep reviewing whether the indoor environment remains complete." },
    ],
    bestOption: "b",
  },
  learningTitle: "Choose the life that fits, then do the work it requires",
  learningIntro: "There is no universally correct lifestyle. The consultation replaces indoor-versus-outdoor slogans with a repeatable household-matching decision.",
  learningThreads: [
    { label: "Decision frame", title: "No lane is right for every cat", paragraphs: [
      "Indoor-only, controlled indoor/outdoor access, and specific managed outdoor arrangements each carry risks and benefits. Fit depends on the individual cat's history and temperament alongside the household's actual environment and capacity.",
      "This means the same responsible household can reach different answers for different cats. A confident indoor-raised Milo near a busy street is not interchangeable with an older former barn cat who remains distressed despite a complete indoor setup.",
    ], claimIds: ["CH8-01"], support: "DIRECT" },
    { label: "Indoor commitment", title: "A closed door is not a complete care plan", paragraphs: [
      "Indoor-only living requires deliberate provision of food, water, clean toileting, resting and hiding space, vertical territory, play, and hunting or foraging opportunities. Without that work, reduced external risk can be exchanged for anxiety and stress-related welfare problems.",
      "The course makes this concrete by returning to Chapter 1's five pillars: safe place; separated key resources; predatory-play and foraging outlets; predictable, consent-aware social contact; and familiar scent and objects. This connection is a disclosed synthesis between S24 and S1.",
    ], claimIds: ["CH8-02", "CH8-06", "CH1-02", "CH1-03", "CH5-02"], support: "MIXED" },
    { label: "Controlled access", title: "Outdoor does not have to mean free-roaming", paragraphs: [
      "When outdoor access is chosen, safety comes first. Secure enclosures, cat-safe fencing, and harness-and-leash walking create options between permanent confinement and unrestricted roaming. Young cats and male cats warrant closer injury monitoring, and nighttime confinement is recommended.",
      "A balcony is controlled only if it is actually secured; supervision and good intentions do not change the physical risk of an open edge or escape route. The chosen setting must be evaluated, not merely labelled outdoor or supervised.",
    ], claimIds: ["CH8-03"], support: "DIRECT" },
    { label: "Training", title: "Reuse the carrier lesson: invite, pair, and progress gradually", paragraphs: [
      "S24 names controlled access but does not provide a harness-training manual. The course therefore extends Chapter 2's carrier method: leave equipment available as a neutral object, pair it with food or calm experiences, introduce contact in small steps, read consent and fear signals, and never force the next stage.",
      "This is synthesis by extension, not a direct instruction from the lifestyle statement. A cat who freezes, flattens, avoids, or cannot recover is supplying information about pace and possibly about whether that access method fits at all.",
    ], claimIds: ["CH8-07", "CH2-05", "CH2-08"], support: "SYNTHESIS" },
    { label: "Narrow exception and universal step", title: "Keep the option space honest", paragraphs: [
      "For a cat with a long outdoor-only history, unresolved multi-cat tension, or needs still unmet after genuine indoor effort, managed outdoor access or an appropriate managed placement may better support welfare. This narrow exception does not describe Milo and must not be inflated into a general preference for outdoor life.",
      "One recommendation does cross every lane: microchipping plus visible identification. Indoor status does not erase escape, travel, or emergency risk.",
    ], claimIds: ["CH8-04", "CH8-05"], support: "DIRECT" },
  ],
  evidenceNotes: [
    { title: "Lifestyle trade-offs and controlled access", support: "DIRECT", claimIds: ["CH8-01", "CH8-02", "CH8-03", "CH8-04", "CH8-05"], sourceIds: ["S24"], body: "The full FelineVMA position statement was read directly. It supports the individual decision frame, complete indoor needs, controlled-access options, narrow outdoor exceptions, and universal identification recommendation. It is a position statement, not a step-by-step training manual." },
    { title: "Indoor living as the five-pillar commitment", support: "SYNTHESIS", claimIds: ["CH8-06"], sourceIds: ["S24", "S1"], body: "S24 requires indoor needs to be met; the course maps that requirement onto the five pillars already taught from S1. The exact cross-chapter formulation is the course's construction." },
    { title: "Gradual harness and enclosure acclimation", support: "SYNTHESIS", claimIds: ["CH8-07"], sourceIds: ["S2", "S3", "S24"], body: "S24 does not provide training steps. The course deliberately extends the gradual, reward-paired, no-force carrier and handling method from Chapter 2 and labels that extension as synthesis." },
  ],
  readings: [
    { time: "25 min", title: "Indoor / outdoor lifestyle position statement", prompt: "Build a three-column risk-and-benefit table, then mark which factors depend on the cat and which depend on the household.", href: "https://catvets.com/resource/2024-indoor-outdoor-lifestyle-position-statement/", linkLabel: "Open the FelineVMA statement" },
    { time: "20 min", title: "Revisit the five environmental pillars", prompt: "Turn each pillar into one observable commitment an indoor household can verify in its own rooms.", href: "../the-first-72-hours/", linkLabel: "Revisit Capture 01" },
    { time: "15 min", title: "Revisit gradual consent-aware training", prompt: "Translate the carrier sequence into harness steps while naming where the extension becomes course synthesis.", href: "../learning-her-on-her-terms/", linkLabel: "Revisit Capture 02" },
  ],
  appliedTitle: "A small apartment does not erase every controlled option",
  appliedIntro: "The fit emerges only when the ordinary indoor week and the occasional outdoor setting are designed together.",
  appliedDecision: {
    prompt: "Milo is confident, the apartment faces a busy street, funds for a catio are limited, and a secure garden is available on weekends. Which plan is best supported?",
    options: [
      { id: "a", text: "Indoor-only by default because no yard at the apartment means no controlled outdoor option exists.", feedback: "This ignores a real secure setting and treats the primary address as the only factor, though indoor-only could still be chosen if training or temperament later indicates it fits better." },
      { id: "b", text: "Maintain the full indoor pillars, begin gradual harness training for supervised garden time, and use microchip plus visible ID either way.", feedback: "This is the best plan because it matches the available resources without weakening everyday indoor care or accepting unmanaged risk." },
      { id: "c", text: "Use the street-facing balcony unsupervised because someone is usually home to notice trouble.", feedback: "Being nearby is not the same as a secure enclosure. The setting remains physically uncontrolled and does not meet the safety-first principle." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "Design a complete indoor plan for a confident cat living with an owner who can play while seated but cannot supervise outdoor walking.",
    "Assess a secure fenced yard and a consistently confident cat. Name the training and supervision conditions that make controlled access plausible.",
    "Explain why a skittish cat in an apartment with no outdoor space may be better served by a full indoor plan rather than by forced harness exposure.",
    "A household has time to supervise and little money, but the cat startles at street noise. Weigh all three facts instead of letting one decide alone.",
    "For a former outdoor-only barn cat still distressed after genuine indoor effort, distinguish managed reconsideration from unrestricted release.",
    "Write an identification plan that remains relevant even if the final decision is indoor-only.",
  ],
  returnTitle: "Milo's life is designed in two places, not divided between them",
  returnScene: [
    "The household keeps Milo's everyday indoor environment complete. A harness begins on the floor beside familiar bedding, then becomes food-paired contact in short sessions. Weekend garden access is only a future possibility, contingent on Milo's comfort and the physical security of the visit.",
    "Microchip details and a visible tag are updated before any trial. If Milo repeatedly shows fear or cannot recover comfortably, the household can stop without treating indoor-only as failure. The decision remains revisable because Milo and the household will change.",
  ],
  revisedDecision: {
    prompt: "After several weeks Milo remains relaxed indoors but consistently avoids the harness and shows repelling signals during contact. What is the responsible next move?",
    options: [
      { id: "a", text: "Force one garden visit so she can discover that the experience is enjoyable.", feedback: "Forced transition breaks the gradual, consent-aware method and may intensify fear rather than reveal a hidden preference." },
      { id: "b", text: "Pause the access plan, keep the indoor pillars complete, and reconsider pace or fit from Milo's repeated response.", feedback: "This is the best answer. Controlled access is an option, not a requirement, and temperament evidence can change the plan." },
      { id: "c", text: "Let her roam without the harness because her avoidance shows the equipment, not the outdoors, is the only problem.", feedback: "The observation does not establish that inference, and removing control introduces the risks the plan was designed to avoid." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Match lifestyle to cat and household", reason: "Weigh temperament, history, environment, risk, supervision, money, time, and mobility rather than applying a universal rule.", claimIds: ["CH8-01"] },
    { action: "Make indoor care complete", reason: "Keep all five environmental pillars active whether or not controlled outdoor access is added.", claimIds: ["CH8-02", "CH8-06"] },
    { action: "Control and train any outdoor access", reason: "Choose a physically secure method and use gradual, reward-paired, no-force acclimation.", claimIds: ["CH8-03", "CH8-07"] },
    { action: "Keep narrow exceptions narrow", reason: "A former outdoor-only history or genuinely unmet needs may justify managed reconsideration, but does not create a rule for Milo or every cat.", claimIds: ["CH8-04"] },
    { action: "Identify Milo in every scenario", reason: "Maintain microchip and visible ID regardless of the final lifestyle choice.", claimIds: ["CH8-05"] },
  ],
  transferNote: "A lifestyle decision is not a moral label attached to a door. It is a revisable design for this cat, in this household, with the work and limits made visible.",
  workload: [{ label: "Core teaching", time: "~60 min" }, { label: "Training walkthrough", time: "~30 min" }, { label: "Household matching", time: "~70 min" }, { label: "Scenario analysis", time: "~65 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours 5 minutes",
} satisfies CaptureChapterContent;
