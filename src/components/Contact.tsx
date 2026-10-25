import { useRef, useState, type FormEvent } from 'react';
import { brand, serviceOptions } from '../data/site';
import { ArrowIcon, AsteriskMark, WhatsAppIcon } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import './Contact.css';

interface FormValues {
  name: string;
  email: string;
  service: string;
  details: string;
}

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const EMPTY_FORM: FormValues = { name: '', email: '', service: '', details: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.service) {
    errors.service = 'Please choose the service you are interested in.';
  }

  if (values.details.trim().length < 10) {
    errors.details = 'Please add a little more detail (at least 10 characters).';
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappNotice, setWhatsappNotice] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const updateField = (field: FieldName) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * DESIGN-PHASE ONLY.
     * There is no backend here. Nothing is transmitted, stored or emailed.
     * TODO before launch: connect this handler to the client's preferred form
     * service or API, add spam protection, a privacy notice and real
     * confirmation handling. Do not ship this handler as-is.
     */

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`#field-${firstError}`)?.focus();
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <Reveal className="contact__intro">
          <p className="eyebrow">05 / Contact</p>
          <h2
            className="section-title contact__title"
            id="contact-title"
            aria-label="Have a project in mind?"
          >
            Have a project
            <br />
            in <span className="accent-mark">mind?</span>
          </h2>
          <p className="contact__lead">
            Tell us what you are planning — a launch, a print run, a gift kit or something that does not have a name yet.
            This concept site shows how the conversation could start.
          </p>

          <dl className="contact__details">
            <div className="detail">
              <dt>Studio</dt>
              <dd>{brand.name}</dd>
            </div>
            <div className="detail">
              <dt>Phone</dt>
              <dd>{brand.phone}</dd>
            </div>
            <div className="detail">
              <dt>Email</dt>
              <dd>{brand.email}</dd>
            </div>
            <div className="detail">
              <dt>Location</dt>
              <dd>{brand.location}</dd>
            </div>
            <div className="detail">
              <dt>Social</dt>
              <dd>{brand.social}</dd>
            </div>
          </dl>

          <div className="contact__whatsapp">
            <button
              type="button"
              className="whatsapp"
              onClick={() => setWhatsappNotice(true)}
              aria-describedby="whatsapp-note"
            >
              <WhatsAppIcon className="whatsapp__icon" />
              Chat on WhatsApp
            </button>
            <p
              id="whatsapp-note"
              className={`whatsapp__note${whatsappNotice ? ' is-visible' : ''}`}
              role="status"
            >
              {whatsappNotice ? brand.whatsappNote : 'Visual placeholder — not linked to a phone number.'}
            </p>
          </div>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={90}>
          <div className="contact__form">
            <div className="contact__form-head">
              <span>Project brief / 01</span>
              <span className="contact__form-badge">Prototype</span>
            </div>

            {submitted ? (
              <div className="form-success" role="status">
                <span className="form-success__icon" aria-hidden="true">
                  <AsteriskMark />
                </span>
                <h3 className="form-success__title">Your brief stays in the prototype.</h3>
                <p className="form-success__text">
                  This form has no backend. Nothing was sent, stored or emailed — the layout is ready for the real
                  submission flow to be connected.
                </p>
                <button type="button" className="btn btn--ghost" onClick={resetForm}>
                  Send another inquiry
                  <ArrowIcon />
                </button>
              </div>
            ) : (
              <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
                <div className="form__row">
                  <div className={`field${errors.name ? ' field--error' : ''}`}>
                    <label className="field__label" htmlFor="field-name">
                      Name <span className="field__req">*</span>
                    </label>
                    <input
                      id="field-name"
                      name="name"
                      className="field__control"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={updateField('name')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                    />
                    {errors.name && (
                      <p className="field__error" id="error-name" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className={`field${errors.email ? ' field--error' : ''}`}>
                    <label className="field__label" htmlFor="field-email">
                      Email <span className="field__req">*</span>
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      className="field__control"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={updateField('email')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                    />
                    {errors.email && (
                      <p className="field__error" id="error-email" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className={`field${errors.service ? ' field--error' : ''}`}>
                  <label className="field__label" htmlFor="field-service">
                    Service of interest <span className="field__req">*</span>
                  </label>
                  <select
                    id="field-service"
                    name="service"
                    className="field__control field__control--select"
                    value={values.service}
                    onChange={updateField('service')}
                    aria-required="true"
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'error-service' : undefined}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="field__error" id="error-service" role="alert">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className={`field${errors.details ? ' field--error' : ''}`}>
                  <label className="field__label" htmlFor="field-details">
                    Project details <span className="field__req">*</span>
                  </label>
                  <textarea
                    id="field-details"
                    name="details"
                    className="field__control field__control--textarea"
                    rows={4}
                    placeholder="What are you making, who is it for, and when do you need it?"
                    value={values.details}
                    onChange={updateField('details')}
                    aria-required="true"
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? 'error-details' : undefined}
                  />
                  {errors.details && (
                    <p className="field__error" id="error-details" role="alert">
                      {errors.details}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn btn--primary btn--block form__submit">
                  Send Inquiry
                  <ArrowIcon />
                </button>

                <p className="form__note">
                  Design prototype — this form does not send data. Real submission, email routing and spam protection
                  must be configured before launch.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
