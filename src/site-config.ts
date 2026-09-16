import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";
import { courseMeta } from "./course-config";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see. Change them to Studios, Tutorials, Expeditions, etc.
export const sessionLabels = {
  singular: "Consultation",
  plural: "Consultations",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: "Home", href: "/" },
    { text: "Capture", href: "/lectures/" },
    { text: sessionLabels.singular, href: "/sessions/" },
    { text: "Assignments", href: "/assessments/" },
    { text: "People", href: "/people/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
  socialImage: "/src/assets/images/milo-at-home-poster.jpg",
  socialImageAlt: `Milo at home — ${courseMeta.code}: ${courseMeta.title}`,
});
