import { testimonials } from "../data/resort";
import { StarIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function TestimonialsSection() {
  return (
    <section
      className="section section--sand testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Guest stories</p>
          <h2 id="testimonials-title" className="section-title">
            What a day here <em>feels like</em>
          </h2>
          <p className="lede">
            Sample testimonials are shown below to demonstrate the layout. Replace them with verified
            guest feedback before the site goes live.
          </p>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal as="figure" className="testimonial-card" key={index} delay={index * 90}>
              <span className="testimonial-card__badge">Sample</span>
              <div className="testimonial-card__stars" aria-label="Sample rating: 5 out of 5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} width={14} height={14} />
                ))}
              </div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-card__avatar" aria-hidden="true">
                  {testimonial.initials}
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <span className="testimonial-card__meta">{testimonial.meta}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
