import type { CaptureChapterContent } from "./types";
import { chapter02 } from "./chapter-02";
import { chapter03 } from "./chapter-03";
import { chapter04 } from "./chapter-04";

export const captureContents: Record<string, CaptureChapterContent> = {
  [chapter02.slug]: chapter02,
  [chapter03.slug]: chapter03,
  [chapter04.slug]: chapter04,
};
