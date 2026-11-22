import { owners } from "../data/resort";
import { ArrowIcon, LeafIcon } from "./Icons";
import { Reveal } from "./Reveal";

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
            Tabina Spring Resort was not built by a corporation — it was shaped by a family with deep
            roots in this land, and a simple belief that good water and good shade are worth sharing.
          </p>
        </Reveal>

        <div className="owner-grid">
          {owners.map((owner, index) => (
            <Reveal as="article" className="owner-card" key={owner.name} delay={index * 100}>
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
                  <LeafIcon width={13} height={13} />
                  {owner.role}
                </span>
              </div>

              {/* Body */}
              <div className="owner-card__body">
                <h3 className="owner-card__name">{owner.name}</h3>

                <blockquote className="owner-card__quote">
                  "{owner.quote}"
                </blockquote>

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
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal className="owners__cta-strip" delay={120}>
          <div className="owners__cta-left">
            <p className="owners__cta-text">
              Come meet the family in person — the spring is always worth the drive.
            </p>
          </div>
          <a className="btn btn--primary" href="#contact">
            Plan your visit
            <ArrowIcon width={17} height={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
