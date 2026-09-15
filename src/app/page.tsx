"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BrochureModal from "./BrochureModal";

const APPLY_URL = "https://forms.gle/ppFQpxY1aHbJ3J8x7";

export default function Home() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const nodes = document.querySelectorAll("[data-anim]");
    if (!("IntersectionObserver" in window)) {
      document.documentElement.classList.remove("motion-ready");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("play");
          el.addEventListener(
            "animationend",
            () => {
              el.setAttribute("data-motion-enter", "done");
            },
            { once: true },
          );
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );
    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* 1 . HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-panel">
              <Image
                className="hero-img"
                src="/hero-banner.png"
                alt="CreatED Labs student Ayaan Kikani pipetting a sample into a beaker in the laboratory"
                width={2037}
                height={772}
                priority
                sizes="100vw"
              />
              <div className="hero-scrim" />
              <div className="hero-content">
                <span className="hero-eyebrow">Applications open Sep 15 &middot; 15 seats</span>
                <h1>CreatED Labs</h1>
                <p className="sub">
                  A 10-week chemical engineering, material science and biochemistry program where you build an
                  original prototype in a real laboratory &mdash; and write the paper to go with it.
                </p>
                <div className="hero-btns">
                  <a className="pill lg apply" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                  <button type="button" className="pill lg brochure" onClick={() => setBrochureOpen(true)}>
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 . INTRO */}
      <section className="sec">
        <div className="wrap">
          <div className="grey-panel" data-anim="fade">
            <div>
              <p className="body">
                Join <strong>CreatED Labs</strong> &mdash; work one-on-one with an IIT mentor to learn deep-research
                method, design original experiments, develop your prototype in a lab, and write a publishable
                academic research paper. Cohort sessions begin in December and the program completes by
                mid-February. Apply <strong>individually or in teams of two</strong>.
              </p>
            </div>
            <dl className="stat-grid">
              <div className="stat stat-yellow">
                <dt>Duration</dt>
                <dd>
                  10 weeks
                  <small>Dec &ndash; mid-Feb</small>
                </dd>
              </div>
              <div className="stat stat-blue">
                <dt>Cohort</dt>
                <dd>
                  15<small>students or pairs</small>
                </dd>
              </div>
              <div className="stat stat-green">
                <dt>Mentorship</dt>
                <dd>
                  1 : 1<small>IIT PhD mentor</small>
                </dd>
              </div>
              <div className="stat stat-red">
                <dt>One day lab</dt>
                <dd>
                  Jaipur
                  <small>hands-on lab experience</small>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3 . HOW DOES IT WORK */}
      <section className="sec">
        <div className="wrap">
          <div className="hiw">
            <div className="hiw-centre">
              <h2>How Does It Work?</h2>
            </div>
            <div className="step s1">
              <span className="badge">01</span>
              <h3>Apply</h3>
              <p>Share your grades, subjects, and a starting idea if you have one. Solo or in a pair.</p>
            </div>
            <div className="step s2">
              <span className="badge">02</span>
              <h3>Match</h3>
              <p>You&apos;re paired with a PhD mentor from IIT in biotechnology and material science.</p>
            </div>
            <div className="step s3">
              <span className="badge">03</span>
              <h3>Build</h3>
              <p>Design your experiment, then travel to Jaipur to synthesize and test your prototype.</p>
            </div>
            <div className="step s4">
              <span className="badge">04</span>
              <h3>Publish</h3>
              <p>Write up your findings into a formatted academic paper, ready to submit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 . TIMELINE */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h" data-anim="fade">
            Program Timeline
          </h2>
          <div className="tl-wrap" data-anim="fade">
            <svg className="tl-svg" viewBox="0 0 1140 120" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0 76 C 150 22, 290 22, 430 62 S 700 112, 850 62 S 1040 20, 1140 44"
                stroke="#4d93f9"
                strokeWidth="9"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="40" cy="66" r="9" fill="#f1ca01" />
              <circle cx="430" cy="62" r="9" fill="#f1ca01" />
              <circle cx="850" cy="62" r="9" fill="#f1ca01" />
              <circle cx="1120" cy="47" r="9" fill="#f1ca01" />
            </svg>
            <div className="tl-labels">
              <div>
                <div className="tl-date">Sep 15, 2026</div>
                <div className="tl-note">Applications open</div>
              </div>
              <div>
                <div className="tl-date">Oct 30, 2026</div>
                <div className="tl-note">Registrations close</div>
              </div>
              <div>
                <div className="tl-date">Dec, week 1</div>
                <div className="tl-note">Cohort sessions start</div>
              </div>
              <div>
                <div className="tl-date">Mid-February</div>
                <div className="tl-note">Program ends</div>
              </div>
            </div>
          </div>
          <p className="rolling" data-anim="fade">
            Admission runs on a <strong>rolling basis</strong> &mdash; you&apos;ll be notified whether you&apos;ve
            been accepted by mid-November at the latest.
          </p>
        </div>
      </section>

      {/* 5 . STRUCTURE */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h" data-anim="fade">
            Program <span className="b">Structure</span>
          </h2>
          <p className="body" data-anim="fade" style={{ maxWidth: "78ch", marginBottom: 26 }}>
            Over 10 weeks you&apos;ll work with an expert IIT mentor to develop a project in biochemistry, material
            science or chemical engineering. Through cohort sessions and one-on-one mentorship you&apos;ll shape a
            research question and write it up as an academic paper. The cohort moves through three phases.
          </p>
          <div className="phases">
            <div className="phase" data-anim="fade">
              <div className="phase-top">
                <span className="phase-wk">Week 1 &ndash; 4 &middot; December</span>
                <h3>Laying Foundations</h3>
                <p>
                  Individual theory sessions around your availability, plus a cohort session every other Sunday on
                  research writing &mdash; morning or evening slot. You&apos;ll complete your secondary research
                  review, introduction and methodology.
                </p>
              </div>
              <div className="phase-band">Literature review &amp; methodology</div>
            </div>
            <div className="phase" data-anim="fade">
              <div className="phase-top">
                <span className="phase-wk">Week 4 &ndash; 8 &middot; January</span>
                <h3>Experiment Design &amp; Build</h3>
                <p>
                  Continuing individual sessions with your mentor, plus a one-day visit to the laboratory facility in
                  Jaipur to run hands-on experiments and collect real data for your project.
                </p>
              </div>
              <div className="phase-band">Jaipur lab visit</div>
            </div>
            <div className="phase" data-anim="fade">
              <div className="phase-top">
                <span className="phase-wk">Week 8 &ndash; 10 &middot; February</span>
                <h3>Writing &amp; Closing Report</h3>
                <p>
                  After the lab visit you&apos;ll continue work on your academic paper, writing your conclusions and
                  formatting the paper ready for submission.
                </p>
              </div>
              <div className="phase-band">Formatted research paper</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 . WHO IT'S FOR */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h">
            Who Is <span className="b">CreatED Labs</span> For?
          </h2>
          <div className="fit-panel">
            <p className="fit-lede">
              CreatED Labs is designed for high school students interested in chemical engineering, biochemistry or
              material science. You&apos;d be a great fit if:
            </p>
            <ul className="fit-list">
              {[
                "Biochemistry, material science or chemical engineering interests you, and you want to explore it through hands-on lab work.",
                "You have a rough idea, or a problem at the intersection of biology, chemistry and life sciences, you want to investigate.",
                "You want to publish an academic research paper, from start to finish.",
                "Connecting with like-minded, highly driven students your own age motivates you to push harder.",
              ].map((text) => (
                <li key={text}>
                  <span className="tick">
                    <svg viewBox="0 0 12 12" aria-hidden="true">
                      <path
                        d="M1.5 6.2l3 3 6-6.4"
                        fill="none"
                        stroke="#232323"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="fit-note">
              <h3>New to research? Don&apos;t worry.</h3>
              <p>
                No prior experience is required to enroll. CreatED Labs takes you from an initial rough idea to a
                formal academic paper, with expert guidance at every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 . OUTCOMES */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h" data-anim="fade">
            What You&apos;ll <span className="b">Walk Away With</span>
          </h2>
          <div className="outcomes">
            <div className="oc" data-anim="fade">
              <div className="oc-ico">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path
                    d="M19 6v14L9 38a5 5 0 0 0 4.4 7.5h21.2A5 5 0 0 0 39 38L29 20V6"
                    stroke="#fff"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M16 6h16M13 33h22" stroke="#f1ca01" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="oc-body">
                <p>Formulated and tested by you, in a real working laboratory in Jaipur.</p>
              </div>
              <div className="oc-band">A lab-synthesized prototype</div>
            </div>
            <div className="oc" data-anim="fade">
              <div className="oc-ico">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <rect x="10" y="5" width="28" height="38" rx="3" stroke="#fff" strokeWidth="2.6" />
                  <path d="M17 15h14M17 23h14M17 31h8" stroke="#f1ca01" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="oc-body">
                <p>Covering your literature review, methods, testing, results and conclusion.</p>
              </div>
              <div className="oc-band">An academic research paper</div>
            </div>
            <div className="oc" data-anim="fade">
              <div className="oc-ico">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path
                    d="M8 34l9-10 7 6 8-12 8 7"
                    stroke="#fff"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="17" cy="24" r="3" fill="#f1ca01" />
                  <circle cx="32" cy="18" r="3" fill="#f1ca01" />
                </svg>
              </div>
              <div className="oc-body">
                <p>Where to take the work next &mdash; competitions, publication, or your next research pursuit.</p>
              </div>
              <div className="oc-band">Identified future pathways</div>
            </div>
            <div className="oc" data-anim="fade">
              <div className="oc-ico">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path
                    d="M14 7h20v11a10 10 0 0 1-20 0V7Z"
                    stroke="#fff"
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 11H9a5 5 0 0 0 5 5M34 11h5a5 5 0 0 1-5 5"
                    stroke="#fff"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M24 28v7M17 41h14" stroke="#f1ca01" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="oc-body">
                <p>
                  Your mentor helps you shortlist, prepare and submit entries to two research competitions your
                  project is a strong fit for.
                </p>
              </div>
              <div className="oc-band">Application support for 2 competitions</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 . APPLICATION */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h">
            Application <span className="b">Process</span>
          </h2>
          <p className="body" style={{ maxWidth: "74ch", marginBottom: 26 }}>
            We&apos;re looking for interested, enthusiastic students who value learning. Apply through the form
            &mdash; it takes four things.
          </p>
          <div className="apply-grid">
            <div className="ap">
              <span className="ap-n">1</span>
              <h3>Tell us about you</h3>
              <p>Share your academic grades and the subjects you&apos;re currently taking.</p>
            </div>
            <div className="ap">
              <span className="ap-n">2</span>
              <h3>Already have an idea?</h3>
              <p>Having your own idea isn&apos;t necessary &mdash; but if you have an interest, we&apos;d love to help you bring it to life.</p>
            </div>
            <div className="ap">
              <span className="ap-n">3</span>
              <h3>Solo or in pairs</h3>
              <p>Apply individually, or team up with a partner to work on the same project together.</p>
            </div>
            <div className="ap">
              <span className="ap-n">4</span>
              <h3>Tell us why</h3>
              <p>We want to know more about what motivates you.</p>
            </div>
          </div>
          <div className="deadline">
            <p>
              Seats are filled on a rolling basis. Early applications have a real advantage.{" "}
              <strong>Apply before 30th October, 2026</strong>
            </p>
            <a className="pill yellow lg" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* 9 . NEXT STEPS */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h">
            <span className="k">Next Steps</span>
          </h2>
          <p className="body" style={{ marginBottom: 22 }}>
            Once you submit your application, you&apos;ll receive an email confirming:
          </p>
          <div className="next">
            <div className="nx">
              <span className="tick">
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path
                    d="M1.5 6.2l3 3 6-6.4"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>We&apos;ve received your application.</p>
            </div>
            <div className="nx">
              <span className="tick">
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path
                    d="M1.5 6.2l3 3 6-6.4"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>What to expect next, including additional information and timelines for review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 . FAQ */}
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h">
            Frequently <span className="b">Asked Questions</span>
          </h2>
          <div className="faq">
            <details open>
              <summary>Do I need prior research experience to apply?</summary>
              <div className="faq-a">
                <p>
                  <strong>No.</strong> CreatED Labs is designed to take you from a rough idea to a formatted academic
                  paper. Your mentor guides you through every stage of the research process &mdash; we only ask that
                  you bring curiosity and commitment.
                </p>
              </div>
            </details>
            <details>
              <summary>Is CreatED Labs only for people interested in biology?</summary>
              <div className="faq-a">
                <p>
                  No. CreatED Labs is not a pure biology research program. It supports projects for students
                  interested in <strong>life sciences, chemistry, new material development, chemical engineering and
                  biochemistry</strong>.
                </p>
              </div>
            </details>
            <details>
              <summary>How is CreatED Labs different from the Research and Build Program?</summary>
              <div className="faq-a">
                <p>
                  CreatED Labs is a shorter, individually mentored research program structured over{" "}
                  <strong>10 weeks</strong>, designed specifically for Indian high school students in{" "}
                  <strong>Grades 8&ndash;12</strong> with an interest in biology, chemistry or material sciences.
                </p>
              </div>
            </details>
            <details>
              <summary>Can I apply with a friend?</summary>
              <div className="faq-a">
                <p>
                  Yes. You can apply individually or in pairs. If you apply as a pair, you&apos;ll work on the same
                  project together and share sessions with your mentor.
                </p>
              </div>
            </details>
            <details>
              <summary>Can I apply solo and be matched with someone to work in a pair?</summary>
              <div className="faq-a">
                <p>Yes, you can &mdash; as long as both students are willing to work together on the same project.</p>
              </div>
            </details>
            <details>
              <summary>Who are the mentors?</summary>
              <div className="faq-a">
                <p>
                  Every CreatED Labs project is guided by a mentor with a <strong>PhD from IIT</strong>, specializing
                  in biotechnology and material science. You&apos;ll work with them 1:1 (or as a pair) throughout the
                  10 weeks.
                </p>
              </div>
            </details>
            <details>
              <summary>What does a typical week look like?</summary>
              <div className="faq-a">
                <p>
                  You&apos;ll attend individual theory sessions with your mentor, scheduled around your own
                  availability, plus a cohort session <strong>every other Sunday</strong> &mdash; morning or evening
                  &mdash; focused specifically on research writing.
                </p>
              </div>
            </details>
            <details>
              <summary>What happens during the Jaipur lab trip?</summary>
              <div className="faq-a">
                <p>
                  Between weeks 4 and 8 you&apos;ll travel to our Jaipur lab facility for a weekend to run hands-on
                  experiments and collect data. This is where your research moves from theory into testing.
                </p>
              </div>
            </details>
            <details>
              <summary>What will I actually walk away with?</summary>
              <div className="faq-a">
                <p>
                  A formulated and tested prototype, and a completed academic research paper covering your
                  literature review, methods, testing, results and conclusion &mdash; ready for publication
                  submissions, competitions, or your academic portfolio.
                </p>
              </div>
            </details>
            <details>
              <summary>What&apos;s included in the program fee, and what&apos;s billed separately?</summary>
              <div className="faq-a">
                <p>
                  Your program fee covers <strong>mentorship, theory sessions, cohort sessions, and access to the
                  Jaipur laboratory weekend</strong>. Additional costs may include materials specific to your
                  project, travel to Jaipur, and publishing costs depending on the journal you apply to.
                </p>
              </div>
            </details>
            <details>
              <summary>How does the application and selection process work?</summary>
              <div className="faq-a">
                <p>
                  You&apos;ll share your academic grades, current subjects, and your project idea if you have one
                  (it isn&apos;t mandatory). Seats are offered on a rolling, first-come-first-served basis, so
                  applying early gives you a real advantage. Questions? Reach out at{" "}
                  <a href="mailto:labs@create-ed.in">labs@create-ed.in</a>.
                </p>
              </div>
            </details>
            <details>
              <summary>How many seats are available?</summary>
              <div className="faq-a">
                <p>
                  Just <strong>15 seats</strong> for this cohort &mdash; kept deliberately small so every student
                  gets real 1:1 mentorship time.
                </p>
              </div>
            </details>
            <details>
              <summary>What if I don&apos;t have a fully formed idea yet?</summary>
              <div className="faq-a">
                <p>
                  That&apos;s completely fine. Tell us your domain of interest and a starting idea, and your mentor
                  will help you refine it into a workable research question before your sessions begin. For any
                  questions, reach out at <a href="mailto:labs@create-ed.in">labs@create-ed.in</a>.
                </p>
              </div>
            </details>
            <details>
              <summary>Can I submit my paper for publication?</summary>
              <div className="faq-a">
                <p>
                  Yes &mdash; many students choose to pursue publication after completing their paper. Publication
                  costs are separate from the program fee and depend on the journal.
                </p>
              </div>
            </details>
            <details>
              <summary>What if I need to miss a session?</summary>
              <div className="faq-a">
                <p>
                  Sunday cohort sessions are <strong>mandatory</strong> and cannot be missed. They&apos;re scheduled
                  in both a morning and an evening slot, so you can opt for whichever suits your availability. If
                  you&apos;re still unable to attend, we&apos;ll send you the recording after the session.
                </p>
              </div>
            </details>
            <details>
              <summary>Is there a refund policy?</summary>
              <div className="faq-a">
                <p>
                  We do not offer refunds, except under special circumstances. To request an exception, please email{" "}
                  <a href="mailto:info@create-ed.in">info@create-ed.in</a>.
                </p>
              </div>
            </details>
            <details>
              <summary>How do I apply?</summary>
              <div className="faq-a">
                <p>
                  Click Apply Now and fill out our application form &mdash; share your academic details and project
                  idea, then submit. You&apos;ll receive a confirmation email immediately, with next steps and
                  timelines to follow.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {brochureOpen && <BrochureModal onClose={() => setBrochureOpen(false)} />}
    </main>
  );
}
