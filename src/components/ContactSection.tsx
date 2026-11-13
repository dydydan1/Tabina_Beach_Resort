import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { contactDetails, inquiryTypes } from "../data/resort";
import {
  CheckIcon,
  ClockIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./Icons";
import { Reveal } from "./Reveal";

export type InquiryPreset = { type: string; cottage: string; nonce: number } | null;

type ContactSectionProps = {
  preset: InquiryPreset;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  inquiryType: inquiryTypes[0],
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a contact number with at least 7 digits.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Tell us a little more — at least 10 characters.";
  }

  return errors;
}

export function ContactSection({ preset }: ContactSectionProps) {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formId = useId();

  useEffect(() => {
    if (!preset) return;
    setValues((current) => ({
      ...current,
      inquiryType: preset.type,
      message: `Hi! I'd like to ask about the ${preset.cottage} — availability, rates and what's included.`,
    }));
    setSubmitted(false);
    setErrors({});
    messageRef.current?.focus({ preventScroll: true });
  }, [preset]);

  const update = (field: keyof FormState) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      const field = event.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`);
      field?.focus();
      return;
    }

    setSubmitted(true);
  };

  const fieldError = (field: keyof FormState) =>
    errors[field] ? (
      <span className="field__error" id={`${formId}-${field}-error`} role="alert">
        {errors[field]}
      </span>
    ) : null;

  const describedBy = (field: keyof FormState) =>
    errors[field] ? `${formId}-${field}-error` : undefined;

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Contact & location</p>
          <h2 id="contact-title" className="section-title">
            Come visit — or just <em>ask us first</em>
          </h2>
          <p className="lede">
            Tell us your date, group size and preferred cottage, and we will get back to you with
            availability.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <ul className="info-list">
              <li>
                <span className="info-list__icon" aria-hidden="true">
                  <PinIcon width={19} height={19} />
                </span>
                <div>
                  <h3>Address</h3>
                  <p>
                    {contactDetails.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
              </li>
              <li>
                <span className="info-list__icon" aria-hidden="true">
                  <PhoneIcon width={19} height={19} />
                </span>
                <div>
                  <h3>Contact number</h3>
                  <p>
                    <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="info-list__icon" aria-hidden="true">
                  <MailIcon width={19} height={19} />
                </span>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={contactDetails.emailHref}>{contactDetails.email}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="info-list__icon" aria-hidden="true">
                  <FacebookIcon width={19} height={19} />
                </span>
                <div>
                  <h3>Facebook page</h3>
                  <p>
                    <a href={contactDetails.facebookHref} target="_blank" rel="noreferrer noopener">
                      {contactDetails.facebookLabel}
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <span className="info-list__icon" aria-hidden="true">
                  <ClockIcon width={19} height={19} />
                </span>
                <div>
                  <h3>Operating hours</h3>
                  <p>
                    {contactDetails.hours.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
              </li>
            </ul>

            <div className="map-card">
              <div className="map-card__art" aria-hidden="true">
                <span className="map-card__road map-card__road--one" />
                <span className="map-card__road map-card__road--two" />
                <span className="map-card__water" />
                <span className="map-card__pin">
                  <PinIcon width={18} height={18} />
                </span>
              </div>
              <div className="map-card__body">
                <h3>Find us on the map</h3>
                <p>{contactDetails.mapsNote}</p>
                <a className="link-arrow" href={contactDetails.mapsHref} target="_blank" rel="noreferrer noopener">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={90}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact-form__title">Send an inquiry</h3>

              <div className="form-row">
                <div className="field">
                  <label htmlFor={`${formId}-name`}>Full name</label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Juan Dela Cruz"
                    value={values.name}
                    onChange={(event) => update("name")(event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={describedBy("name")}
                  />
                  {fieldError("name")}
                </div>

                <div className="field">
                  <label htmlFor={`${formId}-email`}>Email address</label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={(event) => update("email")(event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={describedBy("email")}
                  />
                  {fieldError("email")}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor={`${formId}-phone`}>Contact number</label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+63 900 000 0000"
                    value={values.phone}
                    onChange={(event) => update("phone")(event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={describedBy("phone")}
                  />
                  {fieldError("phone")}
                </div>

                <div className="field">
                  <label htmlFor={`${formId}-inquiryType`}>Inquiry type</label>
                  <select
                    id={`${formId}-inquiryType`}
                    name="inquiryType"
                    value={values.inquiryType}
                    onChange={(event) => update("inquiryType")(event.target.value)}
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor={`${formId}-message`}>Message</label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  ref={messageRef}
                  rows={5}
                  placeholder="Preferred date, number of guests, and anything else we should know."
                  value={values.message}
                  onChange={(event) => update("message")(event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={describedBy("message")}
                />
                {fieldError("message")}
              </div>

              <button type="submit" className="btn btn--primary contact-form__submit">
                Submit Inquiry
              </button>

              <p className="contact-form__note">
                This form validates your details in the browser only. It is not connected to an email
                service yet, so nothing is sent — please call or email the resort until a backend is
                added.
              </p>

              {submitted && (
                <div className="form-success" role="status">
                  <span className="form-success__icon" aria-hidden="true">
                    <CheckIcon width={18} height={18} />
                  </span>
                  <div>
                    <strong>Your details look good.</strong>
                    <p>
                      Demo form only — no message was delivered. Connect an email service or backend
                      before launch so inquiries reach the resort.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
