import { Reveal } from "./Reveal";
import { DropIcon, LeafIcon, UsersIcon } from "./Icons";

const aboutPoints = [
  {
    icon: DropIcon,
    title: "Water from a natural spring",
    text: "Spring water moves continuously through the pools, keeping it cool, soft and clear without a heavy chlorine feel.",
  },
  {
    icon: LeafIcon,
    title: "Surrounded by green",
    text: "Old trees, garden beds and forest edges frame every pool and cottage, so the grounds stay shaded and unhurried.",
  },
  {
    icon: UsersIcon,
    title: "Made for families and groups",
    text: "Shallow areas for children, open cottages for day trips and bigger huts for reunions and celebrations.",
  },
];

export function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__media">
          <figure className="about__figure about__figure--main">
            <img
              src="/images/about-spring-water.jpg"
              alt="Spring water spilling over a moss-covered rock ledge into a clear freshwater pool"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
            />
            <figcaption>Spring water arriving at the upper pools</figcaption>
          </figure>
          <figure className="about__figure about__figure--inset">
            <img
              src="/images/about-forest.jpg"
              alt="Sunlight filtering through the roots and canopy of a large tree"
              width={900}
              height={1350}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <span className="about__badge" aria-hidden="true">
            <span className="about__badge-ring">
              <DropIcon width={22} height={22} />
            </span>
            <span>
              Natural
              <br />
              spring water
            </span>
          </span>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <p className="eyebrow">About the resort</p>
            <h2 id="about-title" className="section-title">
              Where Nature Meets <em>Relaxation</em>
            </h2>
            <p className="lede">
              Tabina is a small spring resort built around the water that already ran through this
              piece of land.
            </p>
            <p className="body-text">
              Instead of engineering the landscape, the pools were shaped around the rocks and the
              streams that feed them. Paths follow the shade, cottages sit between the trees, and the
              loudest thing you will hear on a weekday is moving water.
            </p>
            <p className="body-text">
              Come for a day tour with the family, rent a cottage for a birthday, or stay the night and
              wake up to mist on the water. Bring your own food, or order from the kitchen — either way,
              the day moves at its own pace.
            </p>
          </Reveal>

          <ul className="about__points">
            {aboutPoints.map((point, index) => {
              const PointIcon = point.icon;
              return (
                <Reveal as="li" className="about__point" key={point.title} delay={index * 90}>
                  <span className="about__point-icon" aria-hidden="true">
                    <PointIcon width={20} height={20} />
                  </span>
                  <span>
                    <strong>{point.title}</strong>
                    <span className="about__point-text">{point.text}</span>
                  </span>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="about__note" delay={120}>
            <p>
              <strong>Placeholder note:</strong> opening year, pool count and visitor capacity will be
              added once the resort owner confirms them.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
