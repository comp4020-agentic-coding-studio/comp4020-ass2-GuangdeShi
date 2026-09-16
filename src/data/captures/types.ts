export interface CaptureOption {
  id: string;
  text: string;
  feedback: string;
}

export interface CaptureDecision {
  prompt: string;
  options: CaptureOption[];
  bestOption: string;
}

export interface LearningThread {
  label: string;
  title: string;
  paragraphs: string[];
  claimIds: string[];
  support: "DIRECT" | "SYNTHESIS" | "MIXED";
}

export interface EvidenceNote {
  title: string;
  support: "DIRECT" | "SYNTHESIS";
  claimIds: string[];
  sourceIds: string[];
  body: string;
}

export interface GuidedReading {
  time: string;
  title: string;
  prompt: string;
  href: string;
  linkLabel: string;
}

export interface CarePlanItem {
  action: string;
  reason: string;
  claimIds: string[];
}

export interface WorkloadItem {
  label: string;
  time: string;
}

export interface CaptureChapterContent {
  chapter: number;
  slug: string;
  sceneTitle: string;
  sceneCaption: string;
  scene: string[];
  withheld: string;
  observationPrompt: string;
  observations: string[];
  initialDecision: CaptureDecision;
  learningTitle: string;
  learningIntro: string;
  learningThreads: LearningThread[];
  evidenceNotes: EvidenceNote[];
  readings: GuidedReading[];
  appliedTitle: string;
  appliedIntro: string;
  appliedDecision: CaptureDecision;
  practicePrompts: string[];
  returnTitle: string;
  returnScene: string[];
  revisedDecision: CaptureDecision;
  carePlan: CarePlanItem[];
  transferNote: string;
  workload: WorkloadItem[];
  workloadTotal: string;
}
