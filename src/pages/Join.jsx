import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { DeliverPanel, Field, FormStatus, useForm } from '../components/Form';
import { Label, PageHead } from '../components/ui';
import { divisions } from '../data/divisions';
import { faqs } from '../data/content';
import { site } from '../data/site';

const designations = [
  'Medical student',
  'Intern or house officer',
  'Resident or registrar',
  'Consultant or attending',
  'Academic researcher',
  'Postgraduate student',
  'Other',
];

export default function Join() {
  const { values, errors, status, file, set, setFileField, submit, reset, buildText } = useForm({
    formName: 'membership-application',
    title: 'MedAtlas membership application',
    fields: {
      name: { label: 'Full name', required: true },
      email: { label: 'Email address', required: true, type: 'email' },
      country: { label: 'Country', required: true },
      institution: { label: 'Current institution', required: true },
      qualification: { label: 'Academic qualification', required: true },
      designation: { label: 'Current designation', required: true },
      division: { label: 'Preferred research division', required: true },
      interests: { label: 'Research interests', required: true },
      experience: { label: 'Research experience', required: false },
      publications: { label: 'Previous publications', required: false },
      profile: { label: 'Professional profile link', required: false },
      motivation: { label: 'Motivation statement', required: true, min: 60 },
    },
  });

  const membershipFaqs = faqs.find((g) => g.group === 'Membership')?.items || [];

  return (
    <>
      <Seo
        title="Join MedAtlas"
        path="/join"
        description="Apply to join the MedAtlas international medical research network. Open to medical students, clinicians, academics and researchers. No fee, no membership cap."
      />

      <PageHead
        title="Join MedAtlas"
        lede="Membership is open to medical students, clinicians, academics and researchers, from any country and any institution. There is no fee and no cap on numbers."
        trail={[{ label: 'Home', to: '/' }, { label: 'Join us' }]}
      />

      {/* why join */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <Label>Why join</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '22ch' }}>
              What membership actually gives you.
            </h2>
          </Reveal>
          <div className="grid grid--3 mt-lg">
            {[
              [
                'A role on real research',
                'Members work on live projects with registered protocols, not practice exercises. The output is intended for peer-reviewed publication.',
              ],
              [
                'Methodology taught in context',
                'You learn screening, extraction, appraisal and synthesis while doing them, supervised, on work that will be submitted.',
              ],
              [
                'International collaborators',
                'Projects are staffed across countries and specialties, so your co-authors are rarely from your own department.',
              ],
              [
                'Authorship you have earned',
                'Roles and expected author order are agreed at the start, against recognised contributorship criteria.',
              ],
              [
                'A route in without a research department',
                'No requirement to be at a research-active institution and no requirement to have published before.',
              ],
              [
                'Academic development',
                'Support with scientific writing, responding to peer review and understanding where a piece of work should be submitted.',
              ],
            ].map(([h, p], i) => (
              <Reveal key={h} className="card" delay={i * 45}>
                <h3>{h}</h3>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* who / expectations / process */}
      <section className="section section--mist">
        <div className="shell">
          <div className="split">
            <Reveal>
              <Label>Who can apply</Label>
              <ul className="prose" style={{ paddingLeft: '1.1rem' }}>
                <li>Medical and dental students at any year of study.</li>
                <li>Interns, residents and registrars in any specialty.</li>
                <li>Consultants and attending physicians.</li>
                <li>Academic researchers and postgraduate students in related sciences.</li>
                <li>Statisticians, epidemiologists and methodologists.</li>
              </ul>

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.6rem' }}>
                What is expected of members
              </h2>
              <ul className="prose" style={{ paddingLeft: '1.1rem' }}>
                <li>Deliver the part of the project you agreed to, by the date you agreed.</li>
                <li>Tell your project lead early when circumstances change.</li>
                <li>Work to the network’s methodological standards, including duplicate screening.</li>
                <li>Declare conflicts of interest and respect publication ethics.</li>
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <Label>Application process</Label>
              <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                {[
                  ['You apply', 'Complete the form on this page. It takes about ten minutes.'],
                  [
                    'We read it',
                    'Applications are read by the co-founders. We look at your interests, your chosen division and the time you can commit.',
                  ],
                  [
                    'We reply',
                    `We aim to respond within five working days, whether the answer is yes or no.`,
                  ],
                  [
                    'You are matched to a project',
                    'Successful applicants are introduced to a division and placed on a project with a defined role.',
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
              <div className="notice mt-md">
                Applying does not guarantee acceptance. We would rather say no than take on a
                member we cannot supervise properly.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* form */}
      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label>Membership application</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>One form, read by a person.</h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Tell us what you want to work on and how much time you realistically have. A clear
                question matters more to us than a long CV.
              </p>
              <p className="form__note mt-md">
                Information you submit is used to assess your application and to match you to a
                division. It is not shared outside the network. See the{' '}
                <Link className="tlink" to="/privacy-policy">
                  privacy policy
                </Link>
                .
              </p>
              <p className="form__note mt-sm">
                Completed applications go to the co-founders on WhatsApp at{' '}
                <a
                  className="tlink"
                  href={`https://wa.me/${site.delivery.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {site.delivery.whatsappDisplay}
                </a>{' '}
                or by email to{' '}
                <a className="tlink" href={`mailto:${site.delivery.email}`}>
                  {site.delivery.email}
                </a>
                . You choose which when you send.
              </p>
            </Reveal>

            <Reveal delay={80}>
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
                    label="Country"
                    name="country"
                    required
                    autoComplete="country-name"
                    value={values.country}
                    onChange={set('country')}
                    error={errors.country}
                  />
                  <Field
                    label="Current institution"
                    name="institution"
                    required
                    autoComplete="organization"
                    value={values.institution}
                    onChange={set('institution')}
                    error={errors.institution}
                  />
                </div>

                <div className="field-row">
                  <Field
                    label="Academic qualification"
                    name="qualification"
                    required
                    placeholder="MBBS, MD, PhD, or in progress"
                    value={values.qualification}
                    onChange={set('qualification')}
                    error={errors.qualification}
                  />
                  <Field
                    label="Current designation"
                    name="designation"
                    as="select"
                    required
                    options={designations}
                    value={values.designation}
                    onChange={set('designation')}
                    error={errors.designation}
                  />
                </div>

                <Field
                  label="Preferred research division"
                  name="division"
                  as="select"
                  required
                  options={divisions.map((d) => d.name)}
                  value={values.division}
                  onChange={set('division')}
                  error={errors.division}
                />

                <Field
                  label="Research interests"
                  name="interests"
                  required
                  placeholder="Two or three topics you would want to work on"
                  value={values.interests}
                  onChange={set('interests')}
                  error={errors.interests}
                />

                <Field
                  label="Research experience"
                  name="experience"
                  as="textarea"
                  hint="Projects, posters, audits, or none yet. All answers are fine."
                  value={values.experience}
                  onChange={set('experience')}
                  error={errors.experience}
                  style={{ minHeight: 90 }}
                />

                <div className="field-row">
                  <Field
                    label="Previous publications"
                    name="publications"
                    placeholder="Number, or a link to your ORCID record"
                    value={values.publications}
                    onChange={set('publications')}
                    error={errors.publications}
                  />
                  <Field
                    label="Professional profile link"
                    name="profile"
                    type="url"
                    placeholder="ORCID, LinkedIn or ResearchGate"
                    value={values.profile}
                    onChange={set('profile')}
                    error={errors.profile}
                  />
                </div>

                <Field
                  label="CV"
                  name="cv"
                  as="file"
                  accept=".pdf,.doc,.docx"
                  onChange={setFileField}
                  hint={
                    file
                      ? `Attached: ${file.name}`
                      : 'Optional. PDF or Word, up to about 5 MB.'
                  }
                />

                <Field
                  label="Motivation statement"
                  name="motivation"
                  as="textarea"
                  required
                  hint="Why you want to join, what you want to work on, and how much time you can give each week."
                  value={values.motivation}
                  onChange={set('motivation')}
                  error={errors.motivation}
                />

                <FormStatus
                  status={status}
                  onReset={reset}
                  sentMessage="Application received. You will hear from the co-founders within five working days."
                />

                {status === 'ready' && (
                  <DeliverPanel
                    text={buildText()}
                    subject="MedAtlas membership application"
                    onReset={reset}
                  />
                )}

                {status !== 'sent' && status !== 'ready' && (
                  <div>
                    <button type="submit" className="btn" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending' : 'Review and send'}
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--mist">
        <div className="shell shell--narrow">
          <Label>Questions about membership</Label>
          <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
            {membershipFaqs.map((f) => (
              <details key={f.q} className="row" style={{ display: 'block' }}>
                <summary
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    fontSize: 'var(--t-h4)',
                  }}
                >
                  {f.q}
                </summary>
                <p className="row__desc" style={{ marginTop: '0.6rem' }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <div className="btn-row mt-md">
            <Link to="/faq" className="btn btn--ghost">
              All frequently asked questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
