import { useEffect, useRef, useState } from "react";
import { brand, navLinks } from "../data/resort";
import { CloseIcon, DropIcon } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}>
      <div className="container site-nav__inner">
        <a className="brand" href="#home" aria-label={`${brand.fullName} — back to top`}>
          <span className="brand__mark" aria-hidden="true">
            <DropIcon width={20} height={20} />
          </span>
          <span className="brand__text">
            <span className="brand__name">{brand.name}</span>
            <span className="brand__tagline">{brand.tagline}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeId === link.id ? "is-active" : undefined}
                  aria-current={activeId === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-nav__actions">
          <a className="btn btn--primary btn--nav" href="#contact">
            Book Now
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeId === link.id ? "is-active" : undefined}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: menuOpen ? `${80 + index * 45}ms` : "0ms" }}
                >
                  <span>{link.label}</span>
                  <span className="mobile-menu__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">
          <a className="btn btn--light" href="#contact" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
          <button type="button" className="mobile-menu__close" onClick={() => setMenuOpen(false)}>
            <CloseIcon width={18} height={18} />
            Close
          </button>
        </div>
      </div>
    </header>
  );
}
