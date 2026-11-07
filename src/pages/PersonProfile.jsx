import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { Chip, Crumbs, DataList, Portrait, PublicationItem } from '../components/ui';
import { founders, findPerson } from '../data/people';
import { divisionName } from '../data/divisions';
import { publications } from '../data/publications';
import NotFound from './NotFound';

/** One profile page, used for both /leadership/:slug and /network/:slug. */
export default function PersonProfile({ base = '/network' }) {
  const { slug } = useParams();
  const person = findPerson(slug);

  if (!person) return <NotFound />;

  const isFounder = founders.some((f) => f.slug === slug);
  const sectionLabel = isFounder ? 'Leadership' : 'Network';
  const sectionPath = isFounder ? '/leadership' : '/network';

  // Publications explicitly linked to this person, by id.
  const linked = (person.publications || [])
    .map((id) => publications.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <>
      <Seo
        title={`${person.name}, ${person.credentials}`}
        path={`${base}/${person.slug}`}
        description={`${person.name}, ${person.role} at MedAtlas. ${person.institution}, ${person.country}. Research interests: ${person.interests.join(', ')}.`}
      />

      <section className="section section--tight" style={{ paddingTop: 'clamp(1.75rem, 4vw, 3rem)' }}>
        <div className="shell">
          <Crumbs
            trail={[
              { label: 'Home', to: '/' },
              { label: sectionLabel, to: sectionPath },
              { label: person.name },
            ]}
          />

          <div className="profile">
            <div>
              <Portrait person={person} />
              <div className="chips" style={{ marginTop: '1rem' }}>
                {person.divisions.map((d) => (
                  <Link
                    key={d}
                    to={`/research-divisions/${d}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Chip tone="cyan">{divisionName(d)}</Chip>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                {person.name}
                {person.credentials ? `, ${person.credentials}` : ''}
              </h1>
              <p
                style={{
                  color: 'var(--cyan-ink)',
                  fontWeight: 600,
                  fontFamily: 'var(--display)',
                  marginTop: '0.4rem',
                }}
              >
                {person.role}, MedAtlas
              </p>

              {person.bio?.map((para) => (
                <p key={para.slice(0, 32)} style={{ color: 'var(--grey)', marginTop: '1rem' }}>
                  {para}
                </p>
              ))}

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.5rem' }}>Profile</h2>
              <DataList
                rows={[
                  { label: 'Designation', value: `${person.role}, MedAtlas` },
                  { label: 'Qualification', value: person.credentials },
                  { label: 'Institution', value: person.institution },
                  { label: 'Country', value: person.country },
                  {
                    label: 'Research divisions',
                    value: person.divisions.map(divisionName).join(', '),
                  },
                  { label: 'Research interests', value: person.interests.join(', ') },
                  {
                    label: 'ORCID',
                    value: person.orcid ? (
                      <a
                        className="tlink"
                        href={`https://orcid.org/${person.orcid}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {person.orcid}
                      </a>
                    ) : null,
                  },
                  {
                    label: 'Email',
                    value: person.email ? (
                      <a className="tlink" href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                    ) : null,
                  },
                  {
                    label: 'Telephone',
                    value: person.showPhone ? person.phone : null,
                  },
                  {
                    label: 'LinkedIn',
                    value: person.linkedin ? (
                      <a
                        className="tlink"
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        View profile
                      </a>
                    ) : null,
                  },
                  {
                    label: 'Instagram',
                    value: person.instagram ? `@${person.instagram}` : null,
                  },
                ]}
              />

              {person.credentialsList?.length > 0 && (
                <>
                  <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.5rem' }}>
                    Certifications and training
                  </h2>
                  <ul className="prose" style={{ paddingLeft: '1.1rem' }}>
                    {person.credentialsList.map((c) => (
                      <li key={c} style={{ fontSize: 'var(--t-sm)' }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.5rem' }}>
                Selected publications
              </h2>
              {linked.length > 0 ? (
                <div className="rows">
                  {linked.map((p) => (
                    <PublicationItem key={p.id} pub={p} />
                  ))}
                </div>
              ) : (
                <p className="form__note">
                  Individual author attributions are being added to the publication records. Until
                  then, the full repository is on the{' '}
                  <Link className="tlink" to="/publications">
                    publications page
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
