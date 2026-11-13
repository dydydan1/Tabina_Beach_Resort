import { extraAmenities, facilities } from "../data/resort";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";

export function FacilitiesSection() {
  return (
    <section className="section section--mist facilities" id="facilities" aria-labelledby="facilities-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Facilities & amenities</p>
          <h2 id="facilities-title" className="section-title">
            Everything you need for a <em>slow&nbsp;day</em>
          </h2>
          <p className="lede">
            Pools, shade, tables and warm food — the essentials, kept simple and well kept.
          </p>
        </Reveal>

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <Reveal as="article" className="facility-card" key={facility.title} delay={(index % 3) * 80}>
              <div className="facility-card__media">
                <img
                  src={facility.image}
                  alt={facility.alt}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <span className="facility-card__icon" aria-hidden="true">
                  <Icon name={facility.icon} width={20} height={20} />
                </span>
              </div>
              <div className="facility-card__body">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="amenities">
          <p className="amenities__label">Also on the grounds</p>
          <ul className="amenities__list">
            {extraAmenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
          <p className="amenities__note">
            Facility list is provisional — please confirm the final set with the resort owner.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
