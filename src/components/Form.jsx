import { useState } from 'react';
import { site } from '../data/site';

/* ============================================================
   FORMS
   ------------------------------------------------------------
   Validation runs in the browser. What happens on submit:

   1. If VITE_FORM_ENDPOINT is set, the form POSTs there and
      reports success. That is the automatic route.
   2. If it is not set (or the POST fails), the form assembles
      the answers into a message and offers two one-tap delivery
      buttons: WhatsApp and email, both going to the addresses in
      site.delivery. Nothing is lost either way.

   Change the destination number and address in src/data/site.js.
   ============================================================ */

export function Field({
  label,
  name,
  as = 'input',
  type = 'text',
  required,
  error,
  hint,
  options = [],
  ...rest
}) {
  const id = `f-${name}`;
  const shared = {
    id,
    name,
    required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : hint ? `${id}-hint` : undefined,
    ...rest,
  };

  return (
    <div className="field" data-invalid={Boolean(error)}>
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>

      {as === 'textarea' && <textarea {...shared} />}

      {as === 'select' && (
        <select {...shared}>
          <option value="">Choose one</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}

      {as === 'file' && <input type="file" {...shared} />}

      {as === 'input' && <input type={type} {...shared} />}

      {hint && !error && (
        <p className="form__note" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URLISH = /^(https?:\/\/|www\.)\S+$/i;

export function useForm({ fields, formName, title }) {
  const keys = Object.keys(fields);
  const [values, setValues] = useState(Object.fromEntries(keys.map((k) => [k, ''])));
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | ready | error

  const set = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const setFileField = (e) => setFile(e.target.files?.[0] || null);

  const validate = () => {
    const next = {};
    for (const [name, rule] of Object.entries(fields)) {
      const value = (values[name] || '').trim();
      if (rule.required && !value) {
        next[name] = `${rule.label} is required.`;
      } else if (value && rule.type === 'email' && !EMAIL.test(value)) {
        next[name] = 'Enter an email address we can reply to.';
      } else if (value && rule.type === 'url' && !URLISH.test(value)) {
        next[name] = 'Enter a full web address, starting with https://';
      } else if (rule.min && value.length < rule.min) {
        next[name] = `Please write at least ${rule.min} characters so we can respond usefully.`;
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /** The answers as a plain-text message, for WhatsApp or email. */
  const buildText = () => {
    const lines = Object.entries(fields)
      .map(([k, rule]) => `${rule.label}: ${(values[k] || '').trim() || '—'}`)
      .join('\n');
    const attachment = file ? `\n\nCV attached separately: ${file.name}` : '';
    return `${title}\n\n${lines}${attachment}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      document
        .querySelector(
          '[data-invalid="true"] input, [data-invalid="true"] textarea, [data-invalid="true"] select'
        )
        ?.focus();
      return;
    }

    if (!site.formEndpoint) {
      setStatus('ready');
      return;
    }

    setStatus('sending');
    const payload = {
      form: formName,
      submittedAt: new Date().toISOString(),
      ...values,
      ...(file ? { attachment: { name: file.name, size: file.size, type: file.type } } : {}),
    };

    try {
      let res;
      if (file) {
        const body = new FormData();
        Object.entries({ form: formName, ...values }).forEach(([k, v]) => body.append(k, v));
        body.append('cv', file);
        res = await fetch(site.formEndpoint, { method: 'POST', body });
      } else {
        res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      setStatus(res.ok ? 'sent' : 'ready');
    } catch {
      setStatus('ready');
    }
  };

  const reset = () => {
    setValues(Object.fromEntries(keys.map((k) => [k, ''])));
    setFile(null);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, file, set, setFileField, submit, reset, buildText, title };
}

/** WhatsApp and email buttons, pre-filled with the completed form. */
export function DeliverPanel({ text, subject, onReset }) {
  const wa = `https://wa.me/${site.delivery.whatsapp}?text=${encodeURIComponent(text)}`;
  const mail = `mailto:${site.delivery.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(text)}`;

  return (
    <div className="notice" role="status">
      <p style={{ fontWeight: 600, marginBottom: '0.4rem' }}>Your answers are ready to send.</p>
      <p style={{ marginBottom: '0.9rem' }}>
        Choose how to send them. Both options open pre-filled, so you only have to press send.
      </p>
      <div className="btn-row">
        <a className="btn btn--cyan" href={wa} target="_blank" rel="noreferrer noopener">
          Send on WhatsApp
        </a>
        <a className="btn" href={mail}>
          Send by email
        </a>
      </div>
      <p className="form__note" style={{ marginTop: '0.9rem' }}>
        Goes to {site.delivery.whatsappDisplay} or {site.delivery.email}.{' '}
        <button
          type="button"
          onClick={onReset}
          style={{
            background: 'none',
            border: 0,
            padding: 0,
            color: 'var(--cyan-ink)',
            textDecoration: 'underline',
            cursor: 'pointer',
            font: 'inherit',
          }}
        >
          Start again
        </button>
      </p>
    </div>
  );
}

export function FormStatus({ status, sentMessage, onReset }) {
  if (status === 'sent') {
    return (
      <div className="notice" role="status">
        {sentMessage}{' '}
        <button
          type="button"
          onClick={onReset}
          style={{
            background: 'none',
            border: 0,
            padding: 0,
            color: 'var(--cyan-ink)',
            textDecoration: 'underline',
            cursor: 'pointer',
            font: 'inherit',
          }}
        >
          Send another
        </button>
      </div>
    );
  }
  return null;
}
