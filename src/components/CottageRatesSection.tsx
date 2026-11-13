import { cottages } from "../data/resort";
import { ArrowIcon, CheckIcon } from "./Icons";
import { Reveal } from "./Reveal";

type CottageRatesSectionProps = {
  onInquire: (cottageName: string) => void;
};

export function CottageRatesSection({ onInquire }: CottageRatesSectionProps) {
  return (
    <section className="section cottage-rates" id="cottages" aria-labelledby="cottages-title">
      <div className="container">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="eyebrow">Cottages & rates</p>
            <h2 id="cottages-title" className="section-title">
              Pick the shade that <em>fits your group</em>
            </h2>
          </Reveal>
          <Reveal className="section-head__aside" delay={80}>
            <p className="lede">
              Every cottage comes with a table, seats and a place to leave your things. Rates depend on
              the cottage and the season.
            </p>
            <p className="placeholder-tag">Prices & capacities shown as placeholders</p>
          </Reveal>
        </div>

        <div className="rate-grid">
          {cottages.map((cottage, index) => (
            <Reveal
              as="article"
              className="rate-card"
              key={cottage.id}
              delay={(index % 4) * 70}
            >
              <div className="rate-card__media">
                <img
                  src={cottage.image}
                  alt={cottage.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  decoding="async"
                />
                <span className="rate-card__capacity">{cottage.capacity}</span>
              </div>

              <div className="rate-card__body">
                <div className="rate-card__head">
                  <h3>{cottage.name}</h3>
                  <p className="rate-card__price">
                    <span className="rate-card__amount">{cottage.price}</span>
                    <span className="rate-card__unit">/ day</span>
                  </p>
                </div>

                <p className="rate-card__description">{cottage.description}</p>

                <ul className="rate-card__inclusions">
                  {cottage.inclusions.map((item) => (
                    <li key={item}>
                      <CheckIcon width={15} height={15} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="btn btn--outline rate-card__cta"
                  onClick={() => onInquire(cottage.name)}
                >
                  Inquire Now
                  <ArrowIcon width={16} height={16} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="rate-footnote">
          <p>
            <strong>Before launch:</strong> replace the ₱ — placeholders, capacities and inclusions with
            the resort owner's confirmed rates. Day-tour and overnight pricing can be listed separately.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
