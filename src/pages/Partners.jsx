import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { Field, FormStatus, useForm } from '../components/Form';
import { Label, PageHead } from '../components/ui';
import { site } from '../data/site';

const partnershipCategories = [
  'Academic partnership (university or medical college)',
  'Hospital or clinical research collaboration',
  'Joint research project',
  'Research mentorship for students',
  'Pharmaceutical or biotechnology collaboration',
  'Scientific society or international initiative',
  'Other',
];

export default function Partners() {
  const { values, errors, status, set, submit, reset } = useForm({
    formName: 'partnership-enquiry',
    fields: {
      name: { label: 'Name', required: true },
      organisation: { label: 'Organisation', required: true },
      designation: { label: 'Designation', required: true },
      email: { label: 'Institutional email', required: true, type: 'email' },
      country: { label: 'Country', required: true },
      category: { label: 'Partnership category', required: true },
      proposal: { label: 'Proposal description', required: true, min: 80 },
      additional: { label: 'Additional information', required: false },
    },
  });

  return (
    <>
      <Seo
        title="Partner with us"
        path="/partners"
        description="Institutional partnership opportunities with MedAtlas: university collaborations, hospital partnerships, clinical research, mentorship and international scientific initiatives."
      />

      <PageHead
        title="Partner with MedAtlas"
        lede="For universities, hospitals, research groups, scientific societies and industry. Tell us the question and what you have; we will tell you honestly whether we can help."
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Collaborate', to: '/collaborations' },
          { label: 'Partner with us' },
        ]}
      />

      <section className="section">
        <div className="shell">
          <Reveal>
            <Label>Partnership opportunities</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '24ch' }}>
              What a partnership with the network can cover.
            </h2>
          </Reveal>
          <div className="grid grid--3 mt-lg">
            {[
              [
                'Academic partnerships',
                'A standing agreement covering shared protocols, reciprocal authorship and a named contact on each side.',
              ],
              [
                'University collaborations',
                'Joint supervision of student research, with the network supplying synthesis capacity and methodological review.',
              ],
              [
                'Hospital partnerships',
                'Clinical questions arising from practice, taken through a registered protocol by a dedicated team.',
              ],
              [
                'Clinical research collaborations',
                'Second-site participation, data analysis support, or synthesis work preceding a primary study.',
              ],
              [
                'Pharmaceutical and biotechnology',
                'Enquiries are considered. Any relationship is declared on the output, and no partner has editorial control over findings.',
              ],
              [
                'Research mentorship',
                'Structured supervision for students at institutions without a research department, arranged as a standing programme.',
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

      <section className="section section--mist">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label>Enquiry</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Send us a proposal and we will respond with what it would involve.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Our reply will set out scope, the likely team, what we would need from you, how
                authorship would work and a realistic timeline. If we are not the right group for
                the work, we will say so.
              </p>
              <p className="form__note mt-md">
                Enquiries go to the co-founders at{' '}
                <a className="tlink" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
                . {site.contact.responseTime}
              </p>
              <p className="form__note mt-sm">
                Information you send is used to answer your enquiry. See the{' '}
                <Link className="tlink" to="/privacy-policy">
                  privacy policy
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delay={80}>
              <form className="form" onSubmit={submit} noValidate>
                <div className="field-row">
                  <Field
                    label="Name"
                    name="name"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    error={errors.name}
                  />
                  <Field
                    label="Designation"
                    name="designation"
                    required
                    placeholder="Your role at the organisation"
                    value={values.designation}
                    onChange={set('designation')}
                    error={errors.designation}
                  />
                </div>

                <div className="field-row">
                  <Field
                    label="Organisation"
                    name="organisation"
                    required
                    autoComplete="organization"
                    value={values.organisation}
                    onChange={set('organisation')}
                    error={errors.organisation}
                  />
                  <Field
                    label="Country"
                    name="country"
                    required
                    autoComplete="country-name"
                    value={values.country}
                    onChange={set('country')}
                    error={errors.country}
                  />
                </div>

                <Field
                  label="Institutional email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  hint="An institutional address helps us verify the enquiry."
                  value={values.email}
                  onChange={set('email')}
                  error={errors.email}
                />

                <Field
                  label="Partnership category"
                  name="category"
                  as="select"
                  required
                  options={partnershipCategories}
                  value={values.category}
                  onChange={set('category')}
                  error={errors.category}
                />

                <Field
                  label="Proposal description"
                  name="proposal"
                  as="textarea"
                  required
                  hint="The question or the problem, what data or access exists, and what you would want from MedAtlas."
                  value={values.proposal}
                  onChange={set('proposal')}
                  error={errors.proposal}
                />

                <Field
                  label="Additional information"
                  name="additional"
                  as="textarea"
                  style={{ minHeight: 90 }}
                  hint="Timelines, funding, ethical approvals already in place, anything else relevant."
                  value={values.additional}
                  onChange={set('additional')}
                  error={errors.additional}
                />

                <FormStatus
                  status={status}
                  onReset={reset}
                  sentMessage="Enquiry received. One of the co-founders will reply within five working days."
                />

                {status !== 'sent' && (
                  <div>
                    <button type="submit" className="btn" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending' : 'Send enquiry'}
                    </button>
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
