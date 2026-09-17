export type JudgementPhase = "initial" | "transfer" | "revised";

const phaseIndex: Record<JudgementPhase, number> = {
  initial: 0,
  transfer: 1,
  revised: 2,
};

export function consultationBestPosition(chapter: number, phase: JudgementPhase) {
  return (chapter - 1 + phaseIndex[phase]) % 3;
}

export function chapterCheckBestPosition(chapter: number, questionIndex: number) {
  return (chapter - 1 + questionIndex) % 3;
}

export function placeBestOption<T extends { id: string }>(
  options: readonly T[],
  bestOption: string,
  targetPosition: number,
) {
  const bestIndex = options.findIndex((option) => option.id === bestOption);
  if (bestIndex < 0 || options.length < 2) return [...options];

  const position = targetPosition % options.length;
  const shift = (bestIndex - position + options.length) % options.length;
  return [...options.slice(shift), ...options.slice(0, shift)];
}
