import { brand, contactDetails, imageCredits, navLinks } from "../data/resort";
import { DropIcon, FacebookIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand brand--footer" href="#home" aria-label={`${brand.fullName} — back to top`}>
              <span className="brand__mark" aria-hidden="true">
                <DropIcon width={20} height={20} />
              </span>
              <span className="brand__text">
                <span className="brand__name">{brand.name}</span>
                <span className="brand__tagline">{brand.tagline}</span>
              </span>
            </a>
            <p className="footer__description">{brand.description}</p>
            <a
              className="footer__social"
              href={contactDetails.facebookHref}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FacebookIcon width={18} height={18} />
              Follow us on Facebook
            </a>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2>Contact</h2>
            <ul className="footer__contact">
              <li>
                <PinIcon width={16} height={16} />
                <span>
                  {contactDetails.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              </li>
              <li>
                <PhoneIcon width={16} height={16} />
                <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
              </li>
              <li>
                <MailIcon width={16} height={16} />
                <a href={contactDetails.emailHref}>{contactDetails.email}</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h2>Visiting hours</h2>
            <ul className="footer__hours">
              {contactDetails.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a className="btn btn--light footer__cta" href="#contact">
              Book Now
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {brand.fullName}. All rights reserved.
          </p>
          <p className="footer__placeholder">
            Placeholder details — address, contacts and hours to be confirmed by the resort owner.
          </p>

          <details className="footer__credits">
            <summary>Photography credits</summary>
            <ul>
              {imageCredits.map((credit) => (
                <li key={credit.title}>
                  {credit.file}: “{credit.title}” by {credit.creator} — {credit.license} ·{" "}
                  <a href={credit.href} target="_blank" rel="noreferrer noopener">
                    Wikimedia Commons
                  </a>
                </li>
              ))}
              <li>
                Forest, garden, dining and cottage-interior photographs: Unsplash contributors, used
                under the Unsplash License.
              </li>
            </ul>
          </details>
        </div>
      </div>
    </footer>
  );
}
