import type { CaptureChapterContent } from "./types";

export const chapter11 = {
  chapter: 11,
  slug: "when-her-mind-changes",
  sceneTitle: "A yowl in the dark is a sign, not a diagnosis",
  sceneCaption: "Milo is fifteen years old. The behaviour matches a real condition and several possible alternatives.",
  scene: [
    "Milo begins yowling on most nights, sometimes stares at a wall, and has two house-soiling accidents despite a clean accessible box. One housemate says she is losing her mind and starts searching for cognitive-support supplements.",
    "The phrase feels plausible because these behaviours are associated with feline cognitive dysfunction. It is still only one explanation. Nobody has yet compared appetite, thirst, mobility, dental signs, or the full timeline.",
  ],
  withheld: "Conditions including arthritis, kidney disease, hyperthyroidism, hypertension, and periodontal disease have not been clinically excluded. A symptom match cannot perform that work.",
  observationPrompt: "Log the nighttime, orientation, sleep, play, eating, drinking, toileting, mobility, and dental observations, including signs that are absent. Do not write a diagnostic label.",
  observations: [
    "Nighttime vocalisation is new and occurs on most nights.",
    "Blank staring has appeared, but frequency and duration still need clearer recording.",
    "Two house-soiling events occurred despite an accessible, maintained box.",
    "A household member has moved from symptom recognition to a cognitive conclusion and product search without veterinary rule-out.",
  ],
  initialDecision: {
    prompt: "What should happen before the household calls this cognitive dysfunction?",
    options: [
      { id: "a", text: "Order a cognitive-support product because several listed signs already match.", feedback: "A genuine symptom match still cannot complete the medical rule-out or authorise an owner-selected treatment." },
      { id: "b", text: "Record the full pattern and bring it to a vet before concluding a cause or beginning a product.", feedback: "This is the best answer because it recognises the pattern while preserving clinical rule-out and treatment boundaries." },
      { id: "c", text: "Dismiss it as ordinary old age unless an emergency signature appears.", feedback: "Not an emergency does not mean no action. Persistent multi-sign change deserves a professional conversation." },
    ],
    bestOption: "b",
  },
  learningTitle: "Recognise the signature, then ask what else it could be",
  learningIntro: "The consultation deliberately reuses Chapter 3: owners notice, compare, and escalate; clinicians rule out competing causes and diagnose.",
  learningThreads: [
    { label: "Associated signs", title: "Name the pattern without claiming the cause", paragraphs: [
      "Signs associated with feline cognitive dysfunction include spatial disorientation, wandering, reduced interest in play, excessive sleeping, altered sleep-wake cycles, long blank-staring episodes, indifference to food or water, house-soiling, and unprompted loud vocalisation, often at night.",
      "They become most clearly noticeable from around age ten onward. The list helps a household describe what changed; it does not turn matching behaviours into a confirmed diagnosis.",
    ], claimIds: ["CH11-01"], support: "DIRECT" },
    { label: "Rule-out", title: "A checklist cannot exclude another condition", paragraphs: [
      "Cognitive dysfunction is a rule-out diagnosis. Arthritis, kidney failure, hyperthyroidism, hypertension, periodontal disease, and sometimes neurological causes must be considered and excluded through veterinary examination, tests, or specialist evaluation.",
      "Medication is veterinarian-led after that process. A household cannot replace bloodwork, blood-pressure measurement, imaging, or dental assessment with a persuasive online match.",
    ], claimIds: ["CH11-02"], support: "DIRECT" },
    { label: "Medical-first callback", title: "You have already met these signs under other names", paragraphs: [
      "House-soiling and vocalisation can belong to urinary or other medical patterns from Chapter 3. Reduced play and withdrawal can accompany mobility pain from Chapter 10. Changed eating and breath can recall Chapter 9's dental signs. The same observation may support several hypotheses.",
      "The course synthesis is to reapply Chapter 3's rule: report the full behavioural picture and never assume a cause away. Negative observations matter too, but ruling out what a household can see does not rule out kidney, thyroid, blood-pressure, or neurological causes.",
    ], claimIds: ["CH11-03", "CH3-03", "CH9-04", "CH10-01"], support: "SYNTHESIS" },
    { label: "Support after assessment", title: "Scale the environment to the unit that must live with it", paragraphs: [
      "The source suggests avoiding a stressful new-animal introduction, using low-sided accessible boxes, adding ramps, maintaining routine checkups, and discussing diet with a veterinarian. These are support topics, not a package every household must implement unaided.",
      "Chapter 10's four budgets still apply. Choose feasible changes with the vet after the rule-out process, and do not turn a diet reference into a DIY supplement or treatment plan.",
    ], claimIds: ["CH11-04", "CH10-02"], support: "SYNTHESIS" },
    { label: "Failure modes", title: "Neither 'just old' nor 'definitely cognitive' is careful", paragraphs: [
      "Normalisation drift dismisses gradual behavioural change indefinitely as age. Cognitive-specific over-escalation jumps from a sign list to a diagnosis, medication request, or supplement purchase before clinical rule-out.",
      "Use Chapter 6's comparison discipline and Chapter 3's medical-first boundary, then move directly to this chapter's new task: assembling cognitive-associated signs and credible alternatives for veterinary rule-out.",
    ], claimIds: ["CH11-05", "CH6-02"], support: "SYNTHESIS" },
  ],
  evidenceNotes: [
    { title: "Signs and clinical rule-out", support: "DIRECT", claimIds: ["CH11-01", "CH11-02"], sourceIds: ["S25"], body: "Cornell's full owner-facing page directly supports the sign list, the named competing conditions, and the veterinarian-led rule-out and medication boundary. It must not be adapted into an owner self-diagnosis checklist." },
    { title: "Earlier signs, new hypothesis", support: "SYNTHESIS", claimIds: ["CH11-03"], sourceIds: [], body: "No single source maps these cognitive-associated behaviours back to Chapters 3, 9, and 10. The course makes that comparison to transfer its established medical-first reasoning." },
    { title: "Support scaled to budgets", support: "SYNTHESIS", claimIds: ["CH11-04"], sourceIds: ["S25", "S15"], body: "S25 supplies owner-support suggestions; the course applies S15's caregiver budgets to decide which are feasible. Diet remains a topic for the vet, not a self-selected supplement recommendation." },
    { title: "Cognitive-specific failure modes", support: "SYNTHESIS", claimIds: ["CH11-05"], sourceIds: [], body: "The normalisation-drift and premature-diagnosis pair is a course reapplication of Chapter 6. It is not represented as terminology from Cornell or another guideline." },
  ],
  readings: [
    { time: "25 min", title: "Cognitive dysfunction", prompt: "Separate signs an owner can record, conditions a vet must rule out, and support topics that belong after clinical assessment.", href: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/cognitive-dysfunction", linkLabel: "Open Cornell Feline Health Center" },
    { time: "15 min", title: "Revisit medical-first reasoning", prompt: "Compare Chapter 3's house-soiling reasoning with the same observed behaviour in a senior cognitive context.", href: "../reading-the-first-warning-signs/", linkLabel: "Revisit Capture 03" },
    { time: "15 min", title: "Revisit dental and mobility alternatives", prompt: "List the Chapter 9 and 10 observations that should join, not compete with, the cognitive-associated sign record.", href: "../the-signs-easy-to-miss/", linkLabel: "Revisit Capture 09" },
  ],
  appliedTitle: "The household has ruled out only what it can see",
  appliedIntro: "Negative home observations strengthen the report; they do not complete a clinical rule-out.",
  appliedDecision: {
    prompt: "Milo wanders at night, sleeps at new times, and has one accident. No dental or mobility signs are visible, and appetite and thirst seem unchanged. What next?",
    options: [
      { id: "a", text: "Conclude cognitive dysfunction because the household has checked the obvious alternatives.", feedback: "Kidney, thyroid, blood-pressure, and other causes require clinical testing. Clear home observations do not rule them out." },
      { id: "b", text: "Bring the full positive and negative pattern to the vet for rule-out before choosing an explanation or support product.", feedback: "This is the best answer because it makes household evidence useful without pretending it is a diagnostic workup." },
      { id: "c", text: "Do nothing because the pattern does not match a Chapter 3 emergency signature.", feedback: "Absence of emergency establishes the tier, not inaction. Persistent unexplained change still belongs in a vet conversation." },
    ],
    bestOption: "b",
  },
  practicePrompts: [
    "Nighttime yowling appears alone in a detailed log. Explain why thorough observation speeds recognition but does not authorise diagnosis.",
    "Three housemates separately notice yowling and one accident. Assemble a shared pattern and state what the gaps do to confidence.",
    "A care-fatigued household calls new restlessness 'just old.' Identify the failure mode and design the smallest sustainable next step.",
    "One staring episode leads to an online supplement order. Reorder the actions using rule-out and budgets of care.",
    "Night yowling, reduced appetite, and new bad breath appear together. Connect Chapter 9's dental warning to the full report.",
    "A log adds increased thirst to cognitive-looking signs. Explain why non-matching information may be the most useful detail for the vet.",
  ],
  returnTitle: "The old log asks the same question in a new room",
  returnScene: [
    "The household expands the record. Milo's nighttime yowling and staring are joined by a modest increase in thirst that the first story left out. No one tries to select which condition that proves. They bring the combined pattern and timeline to the veterinary team.",
    "While waiting for assessment, they keep the nighttime route predictable and accessible within their capacity. They do not add a supplement, medication, or new diet on their own. The environment supports Milo without pretending to settle the cause.",
  ],
  revisedDecision: {
    prompt: "Which conclusion can the household responsibly carry into the appointment?",
    options: [
      { id: "a", text: "The cognitive-looking signs are real and worth assessment, but their cause remains open until clinical rule-out.", feedback: "This is the best answer because it neither dismisses the pattern nor converts recognition into diagnosis." },
      { id: "b", text: "Increased thirst proves the behaviour is medical rather than cognitive.", feedback: "The added sign broadens the rule-out; it does not identify a cause or make cognitive change impossible." },
      { id: "c", text: "Because several causes are possible, observation cannot contribute anything useful.", feedback: "Specific chronology and co-occurring signs are exactly what makes the professional rule-out conversation more focused." },
    ],
    bestOption: "a",
  },
  carePlan: [
    { action: "Log cognitive-associated signs specifically", reason: "Record orientation, sleep-wake cycle, play, staring, eating, drinking, vocalising, and toileting as changes from Milo's baseline.", claimIds: ["CH11-01"] },
    { action: "Keep diagnosis and medication behind rule-out", reason: "A veterinarian must exclude named medical and neurological alternatives before confirming cognitive dysfunction or prescribing.", claimIds: ["CH11-02"] },
    { action: "Bring earlier chapters into the report", reason: "Dental, mobility, urinary, appetite, and thirst observations may challenge the first cognitive explanation.", claimIds: ["CH11-03"] },
    { action: "Scale support to caregiver budgets", reason: "Choose accessible routes, litter changes, routine supports, and professional discussions that the household can sustain.", claimIds: ["CH11-04"] },
    { action: "Resist both senior-care shortcuts", reason: "Do not dismiss new change as age or close the case with an online diagnosis and product.", claimIds: ["CH11-05"] },
  ],
  transferNote: "The lifetime method has not changed: observe closely, report honestly, act safely, and leave enough room for the first explanation to be wrong.",
  workload: [{ label: "Core teaching", time: "~65 min" }, { label: "Worked rule-out", time: "~25 min" }, { label: "Sign attribution", time: "~65 min" }, { label: "Scenario analysis", time: "~65 min" }, { label: "Check and review", time: "~20 min" }],
  workloadTotal: "About 4 hours",
} satisfies CaptureChapterContent;
