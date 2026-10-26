import { useRef, useState, type FormEvent } from 'react';
import { contact, whatsappUrl } from '../data/site';
import type { Dictionary } from '../i18n/dictionary';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import './Contact.css';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const EMPTY_FORM: FormValues = { name: '', phone: '', email: '', interest: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS = /^[+\d\s().-]+$/;

function validate(values: FormValues, form: Dictionary['contact']['form']): FormErrors {
  const errors: FormErrors = {};
  const digits = values.phone.replace(/\D/g, '');

  if (values.name.trim().length < 2) {
    errors.name = form.errors.name;
  }

  if (!values.phone.trim()) {
    errors.phone = form.errors.phone;
  } else if (!PHONE_CHARS.test(values.phone.trim()) || digits.length < 7 || digits.length > 15) {
    errors.phone = form.errors.phoneInvalid;
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = form.errors.email;
  }

  if (values.interest === '') {
    errors.interest = form.errors.interest;
  }

  if (values.message.trim().length < 10) {
    errors.message = form.errors.message;
  }

  return errors;
}

function buildWhatsappMessage(
  values: FormValues,
  form: Dictionary['contact']['form'],
): string {
  const labels = form.whatsappMessage;
  const interest = form.interest.options[Number(values.interest)] ?? '';

  return [
    labels.heading,
    '',
    `${labels.name}: ${values.name.trim()}`,
    `${labels.phone}: ${values.phone.trim()}`,
    `${labels.email}: ${values.email.trim()}`,
    `${labels.interest}: ${interest}`,
    '',
    `${labels.message}:`,
    values.message.trim(),
  ].join('\n');
}

export function Contact() {
  const { t } = useLanguage();
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [lastUrl, setLastUrl] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const formCopy = t.contact.form;
  const whatsappHref = whatsappUrl(t.common.whatsappMessage);

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

    const nextErrors = validate(values, formCopy);
    setErrors(nextErrors);

    const firstError = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`#field-${firstError}`)?.focus();
      return;
    }

    const url = whatsappUrl(buildWhatsappMessage(values, formCopy));
    setLastUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const methods = [
    {
      key: 'whatsapp',
      icon: <WhatsAppIcon className="contact-card__icon" />,
      label: t.contact.methods.whatsapp.label,
      value: contact.phoneDisplay,
      href: whatsappHref,
      action: t.contact.methods.whatsapp.action,
      hint: t.contact.methods.whatsapp.hint,
      external: true,
    },
    {
      key: 'phone',
      icon: <PhoneIcon className="contact-card__icon" />,
      label: t.contact.methods.phone.label,
      value: contact.phoneDisplay,
      href: contact.phoneHref,
      action: t.contact.methods.phone.action,
      hint: t.contact.methods.phone.hint,
      external: false,
    },
    {
      key: 'location',
      icon: <MapPinIcon className="contact-card__icon" />,
      label: t.contact.methods.location.label,
      value: t.brand.location,
      href: contact.mapsUrl,
      action: t.contact.methods.location.action,
      hint: t.contact.methods.location.hint,
      external: true,
    },
    {
      key: 'email',
      icon: <MailIcon className="contact-card__icon" />,
      label: t.contact.methods.email.label,
      value: contact.email,
      href: contact.emailHref,
      action: t.contact.methods.email.action,
      hint: t.contact.methods.email.hint,
      external: false,
    },
  ];

  return (
    <section className="contact section section--white" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__head">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title contact__title" id="contact-title">
            {t.contact.title}
          </h2>
          <p className="contact__lead">{t.contact.lead}</p>
        </Reveal>

        <div className="contact__inner">
          <Reveal className="contact__info">
            <ul className="contact__methods">
              {methods.map((method) => (
                <li className="contact-card" key={method.key}>
                  <span className="contact-card__icon-wrap" aria-hidden="true">
                    {method.icon}
                  </span>

                  <div className="contact-card__body">
                    <p className="contact-card__label">{method.label}</p>
                    <p
                      className="contact-card__value"
                      dir={method.key === 'location' ? undefined : 'ltr'}
                    >
                      {method.value}
                    </p>
                    <p className="contact-card__hint">{method.hint}</p>
                  </div>

                  <a
                    className="contact-card__action"
                    href={method.href}
                    {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {method.action}
                    <ArrowIcon className="contact-card__arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact__form" delay={90}>
            <div className="contact__form-card">
              <div className="contact__form-head">
                <h3 className="contact__form-title">{formCopy.title}</h3>
                <span className="contact__form-badge">{formCopy.badge}</span>
              </div>
              <p className="contact__required">{t.common.requiredFields}</p>

              <form className="form" ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="form__row">
                  <div className={`field${errors.name ? ' field--error' : ''}`}>
                    <label className="field__label" htmlFor="field-name">
                      {formCopy.name.label}
                      <span className="field__req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="field-name"
                      name="name"
                      className="field__control"
                      type="text"
                      autoComplete="name"
                      placeholder={formCopy.name.placeholder}
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

                  <div className={`field${errors.phone ? ' field--error' : ''}`}>
                    <label className="field__label" htmlFor="field-phone">
                      {formCopy.phone.label}
                      <span className="field__req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="field-phone"
                      name="phone"
                      className="field__control"
                      type="tel"
                      inputMode="tel"
                      dir="ltr"
                      autoComplete="tel"
                      placeholder={formCopy.phone.placeholder}
                      value={values.phone}
                      onChange={updateField('phone')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                    />
                    {errors.phone && (
                      <p className="field__error" id="error-phone" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form__row">
                  <div className={`field${errors.email ? ' field--error' : ''}`}>
                    <label className="field__label" htmlFor="field-email">
                      {formCopy.email.label}
                      <span className="field__req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      className="field__control"
                      type="email"
                      dir="ltr"
                      autoComplete="email"
                      placeholder={formCopy.email.placeholder}
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

                  <div className={`field${errors.interest ? ' field--error' : ''}`}>
                    <label className="field__label" htmlFor="field-interest">
                      {formCopy.interest.label}
                      <span className="field__req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="field-interest"
                      name="interest"
                      className="field__control field__control--select"
                      value={values.interest}
                      onChange={updateField('interest')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.interest)}
                      aria-describedby={errors.interest ? 'error-interest' : undefined}
                    >
                      <option value="">{formCopy.interest.placeholder}</option>
                      {formCopy.interest.options.map((option, index) => (
                        <option value={String(index)} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="field__error" id="error-interest" role="alert">
                        {errors.interest}
                      </p>
                    )}
                  </div>
                </div>

                <div className={`field${errors.message ? ' field--error' : ''}`}>
                  <label className="field__label" htmlFor="field-message">
                    {formCopy.message.label}
                    <span className="field__req" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    className="field__control field__control--textarea"
                    rows={4}
                    placeholder={formCopy.message.placeholder}
                    value={values.message}
                    onChange={updateField('message')}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                  />
                  {errors.message && (
                    <p className="field__error" id="error-message" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn btn--primary btn--block form__submit">
                  <WhatsAppIcon className="btn__icon" />
                  {formCopy.submit}
                </button>

                <p className="form__note">{formCopy.note}</p>

                {lastUrl && (
                  <p className="form__status" role="status">
                    {formCopy.opened}{' '}
                    <a href={lastUrl} target="_blank" rel="noopener noreferrer">
                      {t.contact.methods.whatsapp.action}
                    </a>
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

