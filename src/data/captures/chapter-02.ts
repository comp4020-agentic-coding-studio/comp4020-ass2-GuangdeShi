import type { CaptureChapterContent } from "./types";

export const chapter02 = {
  chapter: 2,
  slug: "learning-her-on-her-terms",
  sceneTitle: "Milo approached first. Then the signal changed.",
  sceneCaption: "Several days after arrival: contact begins, pauses, and must be read again.",
  scene: [
    "Milo has been home for several days. While you sit on the floor, she approaches and presses her head into your hand. You begin to stroke her. After a few passes, her tail starts to flick and her ears rotate slightly backwards.",
    "Nothing dramatic has happened. She has not hissed, scratched, or run. The change is small enough that continuing can still feel like the friendly choice.",
  ],
  withheld: "You do not know whether the small signal will escalate. The decision has to be made before Milo produces a larger, easier-to-read refusal.",
  observationPrompt: "Record the sequence: what Milo did before contact, what changed during it, and what has not happened.",
  observations: [
    "Milo initiated the approach and made contact with the hand.",
    "Her tail began to flick after several strokes.",
    "Her ears rotated back slightly during the interaction.",
    "She has not yet hissed, swatted, bitten, or fled.",
  ],
  initialDecision: {
    prompt: "Milo's tail starts to flick and her ears turn back while you are petting her. What do you do?",
    options: [
      { id: "a", text: "Keep petting because she approached and asked for attention.", feedback: "Her approach explained the beginning, not every moment that follows. Continuing treats initiation as permanent permission." },
      { id: "b", text: "Stop petting and let Milo decide whether to approach again.", feedback: "This responds to the change without punishing or escalating it. Milo can renew contact if she wants it." },
      { id: "c", text: "Pick her up to settle her before she becomes more agitated.", feedback: "This looks comforting but increases restraint at the exact moment her signals call for less contact." },
    ],
    bestOption: "b",
  },
  learningTitle: "Consent is a reading practice, not a one-time answer",
  learningIntro: "Chapter 1 protected distance. This consultation asks what to do when Milo comes close and the answer changes halfway through.",
  learningThreads: [
    {
      label: "Read the whole range",
      title: "Quiet does not always mean comfortable",
      paragraphs: [
        "Positive engagement may look like ears forward, tail up, rubbing, moving closer, and a relaxed posture. Protective signals arrive in several forms. Inhibition can be a freeze, half-shut eyes, or ears turning back. Avoidance creates distance. Repelling signals such as growling, hissing, swatting, or biting are the clearest, but they should not be the first signals an owner waits for.",
        "The difficult case is inhibition because stillness can resemble calm. Read the direction of change: did Milo soften and move closer, or become smaller and less mobile as contact continued? A good owner-level response does not need a diagnosis of emotion. It needs enough observation to reduce pressure when the interaction stops looking welcome.",
      ],
      claimIds: ["CH2-05"], support: "DIRECT",
    },
    {
      label: "Pause and re-check",
      title: "An approach is not a blank cheque",
      paragraphs: [
        "Offer a hand or a brief touch, pause, and watch what Milo does next. Leaning in, rubbing, or returning supports continuing. Moving away, freezing, or turning the ears back supports stopping. Repeat the check during the interaction because willingness can change even when Milo initiated it.",
        "Rapport also belongs to each relationship. A visitor does not inherit the permission Milo gives her owner. The useful household rule is simple: every person offers, pauses, and reads. Nobody argues with a withdrawal signal because somebody else can usually pick Milo up without trouble.",
      ],
      claimIds: ["CH2-06"], support: "DIRECT",
    },
    {
      label: "A closing window",
      title: "Later does not mean pointless",
      paragraphs: [
        "The classic feline sensitive period begins as early as two to three weeks and may be closing around nine to ten weeks, with individual variation. Milo arrived close to that edge. The guideline gives the age range; applying it to this particular ten-week-old kitten is the course's reasoned synthesis.",
        "This does not mean Milo's personality is fixed or that later learning cannot happen. It means early experiences deserve deliberate handling because one startling or rough experience can carry disproportionate weight. The practical response is not urgency through force. It is frequent, brief, pleasant contact that Milo can leave.",
      ],
      claimIds: ["CH2-01", "CH2-02", "CH2-03"], support: "MIXED",
    },
    {
      label: "Practise the future",
      title: "Hands are not toys, and carriers are not warnings",
      paragraphs: [
        "When Milo grabs or bites during play, move the activity onto a wand or other toy rather than continuing with hands or feet. A kitten-sized bite may seem harmless, but the paired habit is what matters. Redirecting preserves play without teaching that skin is the play object.",
        "Use the same gradual, reward-paired logic for the carrier and handling. Leave the carrier familiar, practise brief calm steps, and stop before the session becomes a struggle. Cooperative care is built when nothing urgent is happening, not introduced for the first time when travel or treatment is already necessary.",
      ],
      claimIds: ["CH2-04", "CH2-07", "CH2-08"], support: "DIRECT",
    },
  ],
  evidenceNotes: [
    { title: "Life-stage and introduction guidance", support: "DIRECT", claimIds: ["CH2-01", "CH2-02", "CH2-04", "CH2-08"], sourceIds: ["S2"], body: "The life-stage guideline supports the sensitive-period range, the importance of positive early experience, cat-led introductions, and gradual reward-paired carrier and travel practice." },
    { title: "Signal reading and consent-checking", support: "DIRECT", claimIds: ["CH2-05", "CH2-06", "CH2-07"], sourceIds: ["S3"], body: "S3 is written for veterinary interaction. This chapter uses only its general body-language, cooperative-care, and positive-handling principles in the home; clinic logistics are not transferred." },
    { title: "Milo at the edge of the window", support: "SYNTHESIS", claimIds: ["CH2-03"], sourceIds: ["S2"], body: "S2 does not define ten-week-old adopted kittens as a special category. The course combines Milo's stated age with the registered sensitive-period range and discloses that application as synthesis." },
  ],
  readings: [
    { time: "20 min", title: "Life-stage guidance", prompt: "Read the kitten socialisation and carrier sections. Note what the source says about timing, reward, and avoiding a negative first exposure.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10812130/", linkLabel: "Open the 2021 life-stage guideline" },
    { time: "20 min", title: "Cat-friendly interaction", prompt: "Trace the positive, inhibition, avoidance, and repelling signals. Write the earliest signal at which you would pause contact.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10845437/", linkLabel: "Open the cat-friendly interaction guideline" },
  ],
  appliedTitle: "A visitor wants to hold Milo",
  appliedIntro: "Good intentions do not replace Milo's signals. Decide how contact should begin, continue, and stop.",
  appliedDecision: {
    prompt: "Milo's owner's grandmother is visiting and wants to pick her up. What plan best applies this consultation?",
    options: [
      { id: "a", text: "Let her pick Milo up immediately because she will be gentle.", feedback: "Gentleness matters, but it does not create consent or give this visitor an already-established relationship with Milo." },
      { id: "b", text: "Ask her to sit, let Milo approach, and pause or stop if Milo inhibits, avoids, or repels.", feedback: "This gives the visitor a practical consent-check and keeps Milo in control of distance throughout the interaction." },
      { id: "c", text: "Keep Milo apart for the entire visit so no uncomfortable moment can occur.", feedback: "This avoids force but also removes the possibility of gradual, cat-directed contact. Caution does not require permanent isolation." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "Milo leans into a hand, then freezes after three strokes. Name the signal family and the next action.",
    "Milo walks away from a visitor who follows her. Separate what is observable from what the visitor assumes.",
    "During play, Milo grabs a moving hand. Describe a redirection that keeps play active without using skin as the toy.",
    "A child moves quickly toward Milo. Write one simple rule the supervising adult can set and enforce before contact.",
  ],
  returnTitle: "The pause changes the next moment",
  returnScene: [
    "You stop moving your hand. Milo remains beside you for a moment, then steps away. No one follows. A minute later she returns to sniff your fingers and rubs once against your wrist.",
    "The return does not prove that every touch is now welcome. It shows why a pause is useful: Milo has room to provide new information instead of being pushed into a louder refusal.",
  ],
  revisedDecision: {
    prompt: "Milo returns after the pause. What should guide the next interaction?",
    options: [
      { id: "a", text: "Resume a long petting session because returning confirms she wanted the earlier contact.", feedback: "Returning is a new positive signal, not permission for an unlimited session. The consent-check continues." },
      { id: "b", text: "Offer brief contact, pause again, and continue only while Milo keeps choosing engagement.", feedback: "This treats consent as a sequence of observable choices and gives small signals enough weight." },
      { id: "c", text: "Avoid touching Milo from now on because her first tail flick showed that petting is unsafe.", feedback: "This turns one change into a permanent rule. The goal is responsive contact, not avoiding all contact." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Read before and during contact", reason: "Use positive, inhibition, avoidance, and repelling signals as a changing sequence, not a one-time label.", claimIds: ["CH2-05", "CH2-06"] },
    { action: "Let each person build rapport", reason: "Ask visitors to offer, pause, and let Milo approach rather than inheriting the owner's permission.", claimIds: ["CH2-04", "CH2-06"] },
    { action: "Keep early experiences brief and positive", reason: "Milo is near the closing edge of the classic sensitive period; later learning remains possible, but careless exposure is not neutral.", claimIds: ["CH2-01", "CH2-02", "CH2-03"] },
    { action: "Redirect play onto toys", reason: "Preserve the chase and pounce while keeping hands and feet out of the play pattern.", claimIds: ["CH2-07"] },
    { action: "Practise carrier and handling skills calmly", reason: "Pair short steps with reward before travel or care becomes urgent.", claimIds: ["CH2-08"] },
  ],
  transferNote: "The owner-level task is to notice, pause, redirect, and prepare. It is not to restrain Milo until she tolerates contact.",
  workload: [
    { label: "Core teaching", time: "~50 min" }, { label: "Guided reading", time: "~40 min" }, { label: "Scenario analysis", time: "~60 min" }, { label: "Applied activity", time: "~80 min" }, { label: "Check and review", time: "~20 min" },
  ],
  workloadTotal: "About 4 hours 10 minutes",
} satisfies CaptureChapterContent;
