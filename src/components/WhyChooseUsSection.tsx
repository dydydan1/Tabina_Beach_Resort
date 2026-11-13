import { whyChooseUs } from "../data/resort";
import { ArrowIcon, Icon } from "./Icons";
import { Reveal } from "./Reveal";

export function WhyChooseUsSection() {
  return (
    <section className="section why" id="why" aria-labelledby="why-title">
      <div className="container why__grid">
        <Reveal className="why__media">
          <img
            src="/images/why-choose-spring.jpg"
            alt="Clear turquoise spring pool edged with pale rock and green plants"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <div className="why__media-panel">
            <p className="why__media-quote">
              “The quietest part of the day is early morning, when the water is still and the mist sits
              on the pools.”
            </p>
            <p className="why__media-meta">Placeholder copy — replace with the owner's own words</p>
          </div>
        </Reveal>

        <div className="why__content">
          <Reveal>
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-title" className="section-title">
              A resort that feels like <em>someone's garden</em>
            </h2>
            <p className="lede">
              No loud music, no crowded decks — just spring water, shade and enough space to spread out
              a picnic.
            </p>
          </Reveal>

          <ul className="why__list">
            {whyChooseUs.map((item, index) => (
              <Reveal as="li" className="why__item" key={item.title} delay={index * 80}>
                <span className="why__icon" aria-hidden="true">
                  <Icon name={item.icon} width={21} height={21} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <a className="link-arrow" href="#contact">
              Plan your visit
              <ArrowIcon width={17} height={17} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
