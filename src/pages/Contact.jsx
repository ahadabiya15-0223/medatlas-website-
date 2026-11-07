import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { DeliverPanel, Field, FormStatus, useForm } from '../components/Form';
import { DataList, Label, PageHead } from '../components/ui';
import { site } from '../data/site';
import { founders } from '../data/people';

const subjects = [
  'General enquiry',
  'Research collaboration',
  'Membership',
  'Institutional partnership',
  'Media or press',
  'Full text or protocol request',
  'Correction to a record on this site',
];

export default function Contact() {
  const { values, errors, status, set, submit, reset, buildText } = useForm({
    formName: 'contact',
    title: 'MedAtlas website enquiry',
    fields: {
      name: { label: 'Full name', required: true },
      email: { label: 'Email address', required: true, type: 'email' },
      organisation: { label: 'Organisation', required: false },
      country: { label: 'Country', required: false },
      subject: { label: 'Subject', required: true },
      message: { label: 'Message', required: true, min: 25 },
    },
  });

  const social = site.social.filter((s) => s.href);

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact MedAtlas: general enquiries, research collaboration, membership, institutional partnerships and media enquiries."
      />

      <PageHead
        title="Contact MedAtlas"
        lede={site.contact.responseTime}
        trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label>Enquiry categories</Label>
              <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                {[
                  [
                    'General enquiries',
                    'Anything that does not fit the categories below. Goes to the co-founders.',
                  ],
                  [
                    'Research collaboration',
                    'Proposing a joint project or asking the network to take on a question.',
                  ],
                  [
                    'Membership',
                    'Questions about applying. The application itself goes through the join page.',
                  ],
                  [
                    'Institutional partnerships',
                    'Universities, hospitals, societies and industry. The partnership form captures more detail.',
                  ],
                  [
                    'Media and press',
                    'Comment, interviews and background on published work.',
                  ],
                  [
                    'Full text or protocol requests',
                    'Ask for a paywalled article, a search strategy or an extraction form.',
                  ],
                ].map(([h, p]) => (
                  <div className="row" key={h}>
                    <span className="row__title">
                      <i />
                      {h}
                    </span>
                    <p className="row__desc">{p}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.6rem' }}>Direct contact</h2>
              <DataList
                rows={[
                  {
                    label: 'Official email',
                    value: (
                      <a className="tlink" href={`mailto:${site.contact.email}`}>
                        {site.contact.email}
                      </a>
                    ),
                  },
                  {
                    label: 'WhatsApp',
                    value: (
                      <a
                        className="tlink"
                        href={`https://wa.me/${site.delivery.whatsapp}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {site.delivery.whatsappDisplay}
                      </a>
                    ),
                  },
                  { label: 'Where we are', value: site.contact.location },
                  {
                    label: 'Social media',
                    value: social.length
                      ? social.map((s) => (
                          <a
                            key={s.label}
                            className="tlink"
                            href={s.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{ marginRight: '1rem' }}
                          >
                            {s.label}
                          </a>
                        ))
                      : null,
                  },
                ]}
              />
              {!social.length && (
                <p className="form__note mt-sm">
                  Official MedAtlas social accounts will be linked here once they are set up. Add
                  them in <code>src/data/site.js</code>.
                </p>
              )}

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.6rem' }}>
                Reaching a co-founder
              </h2>
              <DataList
                rows={founders.map((f) => ({
                  label: f.name,
                  value: (
                    <>
                      <a className="tlink" href={`mailto:${f.email}`}>
                        {f.email}
                      </a>
                      <br />
                      <span className="form__note">
                        {f.institution}, {f.country}
                      </span>
                    </>
                  ),
                }))}
              />
            </Reveal>

            <Reveal delay={80}>
              <Label>Send a message</Label>
              <form className="form" onSubmit={submit} noValidate>
                <div className="field-row">
                  <Field
                    label="Full name"
                    name="name"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    error={errors.name}
                  />
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    error={errors.email}
                  />
                </div>

                <div className="field-row">
                  <Field
                    label="Organisation"
                    name="organisation"
                    autoComplete="organization"
                    value={values.organisation}
                    onChange={set('organisation')}
                    error={errors.organisation}
                  />
                  <Field
                    label="Country"
                    name="country"
                    autoComplete="country-name"
                    value={values.country}
                    onChange={set('country')}
                    error={errors.country}
                  />
                </div>

                <Field
                  label="Subject"
                  name="subject"
                  as="select"
                  required
                  options={subjects}
                  value={values.subject}
                  onChange={set('subject')}
                  error={errors.subject}
                />

                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  required
                  value={values.message}
                  onChange={set('message')}
                  error={errors.message}
                />

                <FormStatus
                  status={status}
                  onReset={reset}
                  sentMessage="Message received. Someone from MedAtlas will reply within five working days."
                />

                {status === 'ready' && (
                  <DeliverPanel
                    text={buildText()}
                    subject="MedAtlas website enquiry"
                    onReset={reset}
                  />
                )}

                {status !== 'sent' && status !== 'ready' && (
                  <div>
                    <button type="submit" className="btn" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending' : 'Review and send'}
                    </button>
                    <p className="form__note" style={{ marginTop: '0.7rem' }}>
                      Please do not include patient-identifiable information. See the{' '}
                      <Link className="tlink" to="/privacy-policy">
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
