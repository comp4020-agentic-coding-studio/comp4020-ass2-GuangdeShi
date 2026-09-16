import type { CaptureChapterContent } from "./types";

export const chapter04 = {
  chapter: 4,
  slug: "the-full-vocabulary",
  sceneTitle: "One yowl, two confident explanations",
  sceneCaption: "Early evening at the front door: the sound is clear; its meaning is not.",
  scene: [
    "Milo trots to the front door, gives a loud yowl, and paces along the mat. One housemate says she obviously wants to go outside. Another points to the time and says dinner is usually served now, so she must be hungry.",
    "Both explanations sound plausible. Neither person has yet described Milo's ears, tail, direction of attention, recent routine, or what happened immediately before the sound.",
  ],
  withheld: "The sound alone does not settle which explanation, if either, fits. The task is to decide what information must be gathered before acting.",
  observationPrompt: "Record the vocal cue, Milo's movement, the time, and the two interpretations as separate things.",
  observations: ["Milo produced a loud yowl near the front door.", "She paced in the doorway area.", "The event occurred near the usual dinner time.", "Two observers supplied different meanings without yet describing other signals."],
  initialDecision: {
    prompt: "Milo yowls and paces at the front door in the early evening. What should you do first?",
    options: [
      { id: "a", text: "Let her outside because the location and loud yowl make the request clear.", feedback: "Location and loudness are relevant, but a single cue does not reliably identify the specific context." },
      { id: "b", text: "Check body language, orientation, routine, and recent events before deciding.", feedback: "This treats the vocalisation as real information without pretending it is a fixed translation." },
      { id: "c", text: "Ignore the yowl because responding would reward demanding behaviour.", feedback: "This over-corrects. Ambiguous communication still deserves observation; uncertainty is not meaninglessness." },
    ],
    bestOption: "b",
  },
  learningTitle: "Communication is a combination, not a dictionary",
  learningIntro: "Milo now has a daily vocal and scent life. The consultation adds those channels to the body-language reading already established in Chapter 2.",
  learningThreads: [
    { label: "Vocal categories", title: "Name the family without claiming a translation", paragraphs: [
      "Closed-mouth murmur sounds include purring and greeting trills or chirrups. Meowing is highly variable and directed mainly toward people rather than adult cat-to-cat interaction. Hostile open-mouth sounds include growls, yowls, snarls, hisses, spits, shrieks, and wails in offensive or defensive encounters.",
      "These categories offer vocabulary and typical contexts, not a phrasebook. A purr can occur in more than one state; a meow can be shaped by repeated human responses; a hostile sound tells an owner to take distance and context seriously but does not identify one exact cause on its own.",
    ], claimIds: ["CH4-01"], support: "DIRECT" },
    { label: "Scent vocabulary", title: "The room carries messages after the sound stops", paragraphs: [
      "Cats deposit scent through skin glands when rubbing on people or objects. Bunting often occurs in core territory and relates to comfort, reassurance, and friendly social interaction. Scratching adds a chemical mark from paw glands alongside the visible mark, often on travelled routes.",
      "The placement of urine and faeces can also communicate territory, identity, or reproductive status. This does not make every elimination event a communication problem; Chapter 3's medical-first reasoning remains in force. It means scent behaviour is one channel to record alongside posture, sound, location, and routine.",
    ], claimIds: ["CH4-02"], support: "DIRECT" },
    { label: "What listeners miss", title: "Confidence is not decoding accuracy", paragraphs: [
      "In one peer-reviewed study, adults heard representative meows from food-waiting, isolation, and brushing contexts. Their specific context classifications did not rise meaningfully above chance, even though listeners could often sense broad positive or negative emotional valence. Cat owners were only modestly more accurate in some contexts.",
      "The study used ten Maine Coon cats and deliberately removed the surrounding visual and situational information. That limitation is exactly why the finding belongs here: it supports caution about sound alone. It does not show that meows are empty or that everyday owners can never understand their own cats.",
    ], claimIds: ["CH4-03"], support: "DIRECT" },
    { label: "The combined read", title: "Put the channels back together", paragraphs: [
      "The course's method is to combine the body-language family from Chapter 2, the vocal or scent cue, and the situation: time, location, recent events, routine, and what happens next. No single source prescribes this exact three-channel procedure; it is a disclosed synthesis built from the registered evidence.",
      "A combined read can still end in uncertainty. That is not failure. It can support a smaller decision: wait, gather another observation, check the log, or avoid acting on a high-consequence interpretation until the pattern becomes clearer.",
    ], claimIds: ["CH4-04", "CH1-09"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "Vocal and scent communication vocabulary", support: "DIRECT", claimIds: ["CH4-01", "CH4-02"], sourceIds: ["S28"], body: "International Cat Care provides the descriptive categories and scent mechanisms. It is an undated owner-education source affiliated with ISFM, not a peer-reviewed guideline; the course uses it for vocabulary rather than precise outcome claims." },
    { title: "Limits of sound-only interpretation", support: "DIRECT", claimIds: ["CH4-03"], sourceIds: ["S29"], body: "The peer-reviewed study supports limited context classification from isolated meows. Its ten-cat, single-breed, listener-only design means the result must not be expanded into 'meows are meaningless.'" },
    { title: "The course's combined-reading method", support: "SYNTHESIS", claimIds: ["CH4-04"], sourceIds: ["S28", "S29", "S3"], body: "No source states this exact method. The course combines communication vocabulary, evidence about single-cue unreliability, and the body-language framework already taught in Chapter 2." },
  ],
  readings: [
    { time: "18 min", title: "Cat communication", prompt: "Sort the article's examples into vocal and scent channels. Note which descriptions name a typical context without guaranteeing one fixed meaning.", href: "https://icatcare.org/articles/cat-communication", linkLabel: "Open International Cat Care" },
    { time: "22 min", title: "What's in a Meow?", prompt: "Read the study design, the chance-level comparison, and the limitations. Write one conclusion the study supports and one it does not.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7765146/", linkLabel: "Open the peer-reviewed study" },
  ],
  appliedTitle: "A confident visitor supplies the meaning",
  appliedIntro: "The new variable is not the yowl. It is whether somebody else's certainty replaces the missing evidence.",
  appliedDecision: {
    prompt: "A visiting cousin says Milo clearly wants to go outside because she yowled at the door. What is the best response?",
    options: [
      { id: "a", text: "Accept the interpretation because the cousin heard the sound and saw the door location.", feedback: "Those observations matter, but confidence does not add the absent body-language and routine evidence." },
      { id: "b", text: "Check Milo's posture, orientation, timing, feeding routine, and what she does next before acting.", feedback: "This keeps the yowl in the evidence while refusing to let it carry more certainty than it can support." },
      { id: "c", text: "Explain that cat sounds cannot communicate anything useful and should be ignored.", feedback: "The study concerns specific context classification from sound alone. It does not erase broad valence or the value of sound within a combined read." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "A trill occurs as Milo approaches a familiar person with tail up. Identify every channel and state what the combination supports.",
    "Milo scratches a familiar route beside the sofa. Separate the visible damage from the scent and location information.",
    "A low growl is heard behind a closed door with no view of Milo. Explain what can and cannot be concluded before the door is opened.",
    "A housemate missed the event but can read the shared log. List the recorded context that would improve the combined read.",
    "Create one case where the responsible conclusion remains 'keep observing' rather than forcing a confident meaning.",
  ],
  returnTitle: "The room supplies what the yowl could not",
  returnScene: [
    "You pause at the door and look again. Milo's body angles toward the kitchen between calls. Her tail is upright rather than tucked, the time matches the feeding routine, and she walks toward the food area when a housemate moves that way.",
    "The combined read supports a feeding-context interpretation more strongly than the sound alone did. It still does not create a universal rule that this yowl always means dinner. Tomorrow's same sound belongs to tomorrow's context.",
  ],
  revisedDecision: {
    prompt: "What should the household carry forward from this event?",
    options: [
      { id: "a", text: "Record that Milo's loud door yowl means dinner from now on.", feedback: "This turns one successful combined read back into the fixed dictionary the chapter is designed to avoid." },
      { id: "b", text: "Record the whole pattern and repeat the combined read when the cue appears again.", feedback: "The log preserves useful context without pretending that one event fixes the meaning permanently." },
      { id: "c", text: "Stop recording vocalisations because the surrounding context matters more.", feedback: "Vocalisation remains one real channel. The correction is combination, not deletion." },
    ],
    bestOption: "b",
  },
  carePlan: [
    { action: "Name the vocal family cautiously", reason: "Use murmur, meow, and hostile open-mouth categories as context vocabulary, not fixed translations.", claimIds: ["CH4-01"] },
    { action: "Notice the scent channel", reason: "Record rubbing, scratching, marking placement, and location alongside sound and body language.", claimIds: ["CH4-02"] },
    { action: "Treat certainty as a hypothesis", reason: "Humans are limited at identifying a meow's specific context from sound alone, even when the sound feels clear.", claimIds: ["CH4-03"] },
    { action: "Combine body, cue, and situation", reason: "Use the course's disclosed combined-reading method and allow the answer to remain uncertain when evidence is incomplete.", claimIds: ["CH4-04"] },
    { action: "Use the shared log when the moment has passed", reason: "Recorded timing, routine, location, and behaviour can restore context without rewarding the most confident storyteller.", claimIds: ["CH4-04", "CH1-09"] },
  ],
  transferNote: "Interpretation is an evidence practice. The safer owner listens, looks, checks context, and remains willing to revise.",
  workload: [{ label: "Core teaching", time: "~55 min" }, { label: "Guided reading", time: "~40 min" }, { label: "Scenario analysis", time: "~55 min" }, { label: "Applied activity", time: "~85 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours 15 minutes",
} satisfies CaptureChapterContent;
