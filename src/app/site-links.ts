/**
 * Header navigation targets.
 *
 * Read on the server (the root layout is a server component), so these are plain
 * env vars — no NEXT_PUBLIC_ prefix needed, and changing them does not require a
 * rebuild. Defaults point at the live create-ed.in pages.
 */

const BASE = process.env.CREATED_SITE_URL ?? "https://www.create-ed.in";

const url = (envValue: string | undefined, path: string) => envValue ?? `${BASE}${path}`;

export type NavLink = { label: string; href: string };

export type SiteLinks = {
  home: string;
  logoSrc: string;
  about: string;
  featuredProjects: string;
  reachOut: string;
  programs: NavLink[];
};

export function getSiteLinks(): SiteLinks {
  return {
    home: url(process.env.CREATED_URL_HOME, "/"),
    logoSrc: process.env.CREATED_LOGO_URL ?? "/created-logo.jpg",
    about: url(process.env.CREATED_URL_ABOUT, "/about"),
    featuredProjects: url(process.env.CREATED_URL_FEATURED_PROJECTS, "/portfolio"),
    reachOut: url(process.env.CREATED_URL_REACH_OUT, "/schedule-a-consultation"),
    programs: [
      {
        label: "Research and Build Program",
        href: url(process.env.CREATED_URL_RESEARCH_AND_BUILD, "/research-and-build-program"),
      },
      {
        label: "Passion Project Program",
        href: url(process.env.CREATED_URL_PASSION_PROJECT, "/passion-project-program"),
      },
      {
        label: "CaseQuest: National Case Challenge",
        href: url(process.env.CREATED_URL_CASEQUEST, "/national-case-challenge"),
      },
      {
        label: "Competition Mastery Program",
        href: url(process.env.CREATED_URL_COMPETITION_MASTERY, "/competition-mastery"),
      },
      {
        label: "CreatED Enclaves",
        href: url(process.env.CREATED_URL_ENCLAVES, "/created-enclaves"),
      },
    ],
  };
}
