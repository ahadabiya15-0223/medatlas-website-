import { useState } from 'react';
import { site } from '../data/site';

/* ============================================================
   FORMS
   ------------------------------------------------------------
   Validation runs in the browser. Submission POSTs JSON to
   site.formEndpoint (set VITE_FORM_ENDPOINT in .env). With no
   endpoint configured the form runs in preview mode: it
   validates, logs the payload to the console and reports
   success, so the interface can be reviewed before a backend
   exists.

   Backend integration notes are in the README.
   ============================================================ */

/**
 * One labelled control.
 *   as: 'input' (default) | 'textarea' | 'select' | 'file'
 *   options: array of strings, for select
 */
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

export function useForm({ fields, formName }) {
  const keys = Object.keys(fields);
  const [values, setValues] = useState(Object.fromEntries(keys.map((k) => [k, ''])));
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

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

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      document
        .querySelector('[data-invalid="true"] input, [data-invalid="true"] textarea, [data-invalid="true"] select')
        ?.focus();
      return;
    }
    setStatus('sending');

    const payload = {
      form: formName,
      submittedAt: new Date().toISOString(),
      ...values,
      ...(file ? { attachment: { name: file.name, size: file.size, type: file.type } } : {}),
    };

    if (!site.formEndpoint) {
      // eslint-disable-next-line no-console
      console.info('[MedAtlas] no VITE_FORM_ENDPOINT set. Payload would have been:', payload);
      await new Promise((r) => setTimeout(r, 650));
      setStatus('sent');
      return;
    }

    try {
      let res;
      if (file) {
        // multipart, so the CV actually reaches the backend
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
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(Object.fromEntries(keys.map((k) => [k, ''])));
    setFile(null);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, file, set, setFileField, submit, reset };
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
  if (status === 'error') {
    return (
      <div className="notice" data-tone="error" role="alert">
        That did not reach us. Try again, or write directly to{' '}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
      </div>
    );
  }
  return null;
}
