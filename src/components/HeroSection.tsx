import { ArrowIcon, DropIcon } from "./Icons";

const heroFacts = [
  { label: "Spring-fed pools", value: "Cool, clear, always flowing" },
  { label: "Cottages", value: "Open, family & group huts" },
  { label: "Open", value: "Day tours & overnight stays" },
];

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/hero-spring-pool.jpg"
          alt=""
          width={1800}
          height={1201}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true">
              <DropIcon width={14} height={14} />
            </span>
            Natural spring resort · Placeholder location
          </p>

          <h1 id="hero-title" className="hero__title">
            Escape to Nature.{" "}
            <span className="hero__title-line">Refresh Your Soul.</span>
          </h1>

          <p className="hero__lede">
            Discover the beauty of nature, experience refreshing spring waters, and create unforgettable
            memories with family and friends.
          </p>

          <div className="hero__actions">
            <a className="btn btn--light" href="#about">
              Explore Our Resort
              <ArrowIcon width={17} height={17} />
            </a>
            <a className="btn btn--ghost" href="#cottages">
              View Cottage Rates
            </a>
          </div>
        </div>

        <dl className="hero__facts">
          {heroFacts.map((fact) => (
            <div className="hero__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <a className="hero__scroll" href="#about" aria-label="Scroll to the about section">
          <span className="hero__scroll-line" aria-hidden="true" />
          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
}
