"use client";

import { useEffect, useRef, useState } from "react";
import type { SiteLinks } from "./site-links";

export default function SiteHeader({ links }: { links: SiteLinks }) {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!programsOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!programsRef.current?.contains(e.target as Node)) setProgramsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProgramsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [programsOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href={links.home} aria-label="CreatED home">
          {/* plain img so an external CREATED_LOGO_URL works without next.config remotePatterns */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={links.logoSrc} alt="CreatED" className="logo-img" width={613} height={166} />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav${mobileOpen ? " open" : ""}`} aria-label="Main">
          <a href={links.about}>About</a>

          <div className="nav-dropdown" ref={programsRef}>
            <button
              type="button"
              className={`nav-dropdown-btn${programsOpen ? " active" : ""}`}
              aria-expanded={programsOpen}
              aria-haspopup="true"
              onClick={() => setProgramsOpen((v) => !v)}
            >
              Programs
              <svg viewBox="0 0 12 12" aria-hidden="true" className="chev">
                <path
                  d="M2.5 7.5L6 4l3.5 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {programsOpen && (
              <div className="nav-menu">
                {links.programs.map((p) => (
                  <a key={p.href} href={p.href} onClick={() => setProgramsOpen(false)}>
                    {p.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href={links.featuredProjects}>Featured Projects</a>
          <a href={links.reachOut}>Reach Out</a>
        </nav>
      </div>
    </header>
  );
}
