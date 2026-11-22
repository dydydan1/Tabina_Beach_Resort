import { useState } from "react";
import { owners } from "../data/resort";
import { ArrowIcon, ChevronRightIcon, LeafIcon } from "./Icons";
import { Reveal } from "./Reveal";

function OwnerCard({ owner, index }: { owner: (typeof owners)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cardId = `owner-story-${index}`;

  return (
    <Reveal as="article" className="owner-card" delay={index * 100}>
      {/* Photo */}
      <div className="owner-card__media">
        <img
          src={owner.photo}
          alt={owner.photoAlt}
          width={600}
          height={720}
          loading="lazy"
          decoding="async"
        />
        <span className="owner-card__role-badge">
          <LeafIcon width={12} height={12} />
          {owner.role}
        </span>
      </div>

      {/* Always-visible body */}
      <div className="owner-card__body">
        <h3 className="owner-card__name">{owner.name}</h3>

        <blockquote className="owner-card__quote">
          "{owner.quote}"
        </blockquote>

        {/* Collapsible story */}
        <div
          id={cardId}
          className={`owner-card__expandable${expanded ? " is-expanded" : ""}`}
          aria-hidden={!expanded}
        >
          {/* Inner div required for grid-template-rows height animation */}
          <div>
            <div className="owner-card__story">
              {owner.story.map((paragraph, pIndex) => (
                <p key={pIndex} className="body-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {owner.highlights && (
              <ul className="owner-card__highlights">
                {owner.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span className="owner-card__highlight-dot" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Toggle button */}
        <button
          type="button"
          className={`owner-card__toggle${expanded ? " is-open" : ""}`}
          aria-expanded={expanded}
          aria-controls={cardId}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="owner-card__toggle-icon" aria-hidden="true">
            <ChevronRightIcon width={14} height={14} />
          </span>
          <span>{expanded ? "Show less" : "Read their story"}</span>
        </button>
      </div>
    </Reveal>
  );
}

export function OwnerSection() {
  return (
    <section className="section section--sand owners" id="owners" aria-labelledby="owners-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">The family behind the resort</p>
          <h2 id="owners-title" className="section-title">
            Built by <em>people who love this land</em>
          </h2>
          <p className="lede">
            Tabina Spring Resort was not built by a corporation — it was shaped by a family
            with deep roots in this land, and a simple belief that good water and good shade
            are worth sharing.
          </p>
        </Reveal>

        <div className="owner-grid">
          {owners.map((owner, index) => (
            <OwnerCard key={owner.name} owner={owner} index={index} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal className="owners__cta-strip" delay={120}>
          <p className="owners__cta-text">
            Come meet the family in person — the spring is always worth the drive.
          </p>
          <a className="btn btn--primary" href="#contact">
            Plan your visit
            <ArrowIcon width={17} height={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
