import type { CaptureChapterContent } from "./types";
import { chapter02 } from "./chapter-02";
import { chapter03 } from "./chapter-03";
import { chapter04 } from "./chapter-04";
import { chapter05 } from "./chapter-05";
import { chapter06 } from "./chapter-06";
import { chapter07 } from "./chapter-07";
import { chapter08 } from "./chapter-08";
import { chapter09 } from "./chapter-09";
import { chapter10 } from "./chapter-10";

export const captureContents: Record<string, CaptureChapterContent> = {
  [chapter02.slug]: chapter02,
  [chapter03.slug]: chapter03,
  [chapter04.slug]: chapter04,
  [chapter05.slug]: chapter05,
  [chapter06.slug]: chapter06,
  [chapter07.slug]: chapter07,
  [chapter08.slug]: chapter08,
  [chapter09.slug]: chapter09,
  [chapter10.slug]: chapter10,
};
