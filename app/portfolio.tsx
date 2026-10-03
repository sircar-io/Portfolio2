"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import {
  businessValue,
  capabilityFamilies,
  creatorCollaborations,
  creatorMetrics,
  ownershipSteps,
  receiptItems,
  roleFunctions,
  selectedWork,
} from "@/lib/portfolio-content";

function MapLabel({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return <p className={`map-label${light ? " map-label--light" : ""}`}><span>{index}</span>{children}</p>;
}

function Connector({ className = "" }: { className?: string }) {
  return (
    <svg className={`connector ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" d="M50 0 V34 Q50 50 36 50 H12 M50 34 Q50 50 64 50 H88 M50 34 V100" />
    </svg>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reveals = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach((element) => observer.observe(element));

    let frame = 0;
    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--page-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
        if (!reduced) {
          document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((element) => {
            const rect = element.getBoundingClientRect();
            const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.025;
            element.style.setProperty("--parallax", `${offset}px`);
          });
        }
      });
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const hero = document.querySelector<HTMLElement>(".map-hero");
    let pointerFrame = 0;
    const updatePointer = (event: PointerEvent) => {
      if (!hero) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        hero.style.setProperty("--map-x", `${x * 10}px`);
        hero.style.setProperty("--map-y", `${y * 8}px`);
        hero.style.setProperty("--grid-x", `${x * -4}px`);
        hero.style.setProperty("--grid-y", `${y * -3}px`);
      });
    };
    const resetPointer = () => {
      if (!hero) return;
      hero.style.setProperty("--map-x", "0px");
      hero.style.setProperty("--map-y", "0px");
      hero.style.setProperty("--grid-x", "0px");
      hero.style.setProperty("--grid-y", "0px");
    };
    if (hero && finePointer && !reduced) {
      hero.addEventListener("pointermove", updatePointer, { passive: true });
      hero.addEventListener("pointerleave", resetPointer);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", updateScroll);
      hero?.removeEventListener("pointermove", updatePointer);
      hero?.removeEventListener("pointerleave", resetPointer);
      document.documentElement.classList.remove("js");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="page-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Siddhartha Sarkar, back to top" onClick={closeMenu}>
          <b>SS</b><span>Creative operating system<br />Map 01 / 2026</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? "Close" : "Index"}</span><i /><i />
        </button>
        <nav id="site-nav" aria-label="Primary navigation" data-open={menuOpen}>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#value" onClick={closeMenu}>Value</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#receipts" onClick={closeMenu}>Receipts</a>
        </nav>
      </header>

      <section className="map-hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-side-note hero-side-note--left" aria-hidden="true">Strategy ↔ execution</div>
        <div className="hero-side-note hero-side-note--right" aria-hidden="true">Scroll to follow the system ↓</div>

        <div className="identity-map hero-sequence">
          <p className="identity-kicker">Siddhartha Sarkar / Creative portfolio</p>
          <div className="sid-node">
            <div className="sid-portrait" aria-hidden="true">
              <img src="/assets/sid-profile.jpeg" alt="" width={886} height={886} fetchPriority="high" />
            </div>
            <span className="node-index">00 / Siddhartha Sarkar</span>
            <p>Creative Strategist <i>×</i> Writer <i>×</i> Creative Generalist</p>
          </div>
          <div className="positioning-node">
            <span>What is he?</span>
            <strong>I turn complex briefs into clear, watchable content.</strong>
          </div>
          <Connector className="identity-connector" />
        </div>

        <div className="capability-fan hero-sequence" id="capabilities">
          {capabilityFamilies.map((family, index) => (
            <article
              className={`capability-node capability-node--${family.key}`}
              key={family.title}
              style={{ "--hero-delay": `${1.1 + index * 0.13}s` } as React.CSSProperties}
            >
              <header><span>0{index + 1}</span><h2>{family.title}</h2></header>
              <p>{family.thesis}</p>
              <ul>{family.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>

        <a className="hero-handoff" href="#value" aria-label="Continue to what Siddhartha can own">
          <span>00 / Identity</span><i aria-hidden="true" /><b aria-hidden="true" /><span>01 / What he can own</span>
        </a>
      </section>

      <section className="ownership section-pad" id="value">
        <div className="section-heading" data-reveal>
          <MapLabel index="01">What he can own</MapLabel>
          <h2>Give me the problem.<br /><em>Not just the task.</em></h2>
          <p>The useful part is not a long list of skills. It is continuity—from the first question to the final piece.</p>
        </div>

        <div className="ownership-chain" data-reveal aria-label="Content ownership from brief to publish">
          {ownershipSteps.map((step, index) => (
            <div className="chain-node" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < ownershipSteps.length - 1 && <i aria-hidden="true">→</i>}
            </div>
          ))}
        </div>

        <div className="value-map" data-reveal>
          <div className="value-core"><span>What the company gets</span><strong>One connected<br />creative loop.</strong></div>
          <Connector className="value-connector" />
          {businessValue.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fit section-pad">
        <div className="fit-intro" data-reveal>
          <MapLabel index="02" light>Where Sid fits</MapLabel>
          <h2>Between the<br /><em>thinking</em> and<br />the making.</h2>
          <p>These are functions Sid can perform—not a claim that each has been a previous job title.</p>
        </div>
        <div className="role-map" data-reveal>
          <div className="role-axis" aria-hidden="true"><span>Strategy</span><i /><span>Execution</span></div>
          {roleFunctions.map((role, index) => (
            <article key={role.title}>
              <span>0{index + 1}</span>
              <h3>{role.title}</h3>
              <p>{role.focus}</p>
            </article>
          ))}
          <div className="role-core"><strong>Core function</strong><p>Bridge strategy and execution. Own content from problem to publish.</p></div>
        </div>
      </section>

      <section className="work-map section-pad" id="work">
        <header className="work-heading" data-reveal>
          <MapLabel index="03">Selected work / experience</MapLabel>
          <h2>The map,<br /><em>in practice.</em></h2>
          <p>Finance, consumer technology and creator-led brand work—different subjects, connected by the same job: make the complex clear enough to watch.</p>
        </header>

        <div className="work-system" data-reveal>
          <div className="work-spine" aria-hidden="true"><span>Capabilities</span><i /><span>Work</span></div>
          {selectedWork.map((item, index) => (
            <article className={`work-node work-node--${item.tone}`} key={item.name}>
              <div className="work-number">0{index + 1}</div>
              <div className="work-copy">
                <p>{item.context}</p>
                <h3>{item.name}</h3>
                <span>{item.summary}</span>
                {"metric" in item && item.metric && <small>{item.metric}</small>}
              </div>
              <ul>{item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="experience-line" data-reveal>
          <p><span>2024 → now</span><strong>Medical documentation + independent tech creator practice</strong></p>
          <p><span>Selected agency work</span><strong>Finance + consumer technology through YAAS Media</strong></p>
          <p><span>Creator collaborations</span><strong>{creatorCollaborations.join(" · ")}</strong></p>
        </div>
      </section>

      <section className="proof-band" aria-label="Selected creator performance">
        <div className="proof-band-label"><span>04</span>Proof of audience instinct</div>
        <div className="metric-row">
          {creatorMetrics.map((metric, index) => (
            <div className="metric-card" key={metric.value} data-reveal style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}>
              <span>0{index + 1}</span><strong>{metric.value}</strong><p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="receipts section-pad" id="receipts">
        <header className="receipts-heading" data-reveal>
          <MapLabel index="05">Proof / receipts</MapLabel>
          <h2>Claims above.<br /><em>Evidence below.</em></h2>
          <p>Actual work and public profile context already supplied with this portfolio.</p>
        </header>

        <div className="evidence-wall">
          {receiptItems.map((item, index) => (
            <figure className={`receipt ${item.className}`} key={item.src} data-reveal style={{ "--delay": `${(index % 3) * 90}ms` } as React.CSSProperties}>
              <div className="receipt-image"><img src={item.src} alt={item.alt} width={1000} height={1951} loading="lazy" data-parallax /></div>
              <figcaption><span>{item.label}</span><p>{item.detail}</p></figcaption>
            </figure>
          ))}
          <article className="receipt-note receipt-note--orange" data-reveal><span>Process receipt</span><strong>Brief → idea → script → shoot → edit → QC → publish</strong></article>
          <article className="receipt-note receipt-note--acid" data-reveal><span>What the range proves</span><strong>Sid can stay with an idea longer than one specialist handoff.</strong></article>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-map" aria-hidden="true"><span>Think</span><i /><span>Make</span><i /><span>Lead</span></div>
        <div className="contact-inner" data-reveal>
          <MapLabel index="06" light>The next node</MapLabel>
          <h2>Have a complex brief?<br /><em>Let’s make it clear.</em></h2>
          <p>Creative strategy, writing and content ownership across finance, technology and ideas that need explaining.</p>
          <div className="contact-links">
            <a href="mailto:sarkar67.official@gmail.com"><span>Email</span>sarkar67.official@gmail.com ↗</a>
            <a href="tel:+919365298790"><span>Mobile</span>+91 93652 98790 ↗</a>
            <div><span>Creator profile</span>@sircar.io</div>
          </div>
        </div>
        <div className="contact-footer"><span>Siddhartha Sarkar</span><span>Creative Strategist × Writer × Creative Generalist</span><span>India / 2026</span></div>
      </footer>
    </main>
  );
}
