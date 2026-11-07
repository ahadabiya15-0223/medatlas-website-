import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import {
  Chip,
  CtaBand,
  DivisionCard,
  Empty,
  Label,
  PageHead,
  PersonCard,
  PublicationItem,
} from '../components/ui';
import { divisions, findDivision } from '../data/divisions';
import { allPeople, founders } from '../data/people';
import { publications } from '../data/publications';
import { projects } from '../data/content';
import NotFound from './NotFound';

export function DivisionsIndex() {
  return (
    <>
      <Seo
        title="Research divisions"
        path="/research-divisions"
        description="The seven MedAtlas research divisions: cardiovascular medicine, neurology and neuroscience, oncology, endocrinology and metabolic medicine, clinical pharmacology, public health and epidemiology, and translational and molecular medicine."
      />

      <PageHead
        title="Seven divisions, deliberately adjacent."
        lede="Each division has its own objectives and themes, but the structure is designed so that a question can cross between them. The divisions expand as the network grows."
        trail={[{ label: 'Home', to: '/' }, { label: 'Research divisions' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="grid grid--3">
            {divisions.map((d, i) => (
              <Reveal key={d.id} delay={i * 50}>
                <DivisionCard division={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Where the divisions meet</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                The brain–heart axis runs through most of what we publish.
              </h2>
            </div>
            <div>
              <p className="lede">
                Cerebral injury producing cardiac dysfunction, cardiac disease producing
                neurological consequences, and drugs that act on both: these questions belong to no
                single specialty, which is why they are so often left unanswered.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                Several divisions contribute to that work at once. Cardio-oncology sits the same
                way, between the oncology and cardiovascular divisions.
              </p>
              <div className="btn-row mt-md">
                <Link to="/publications" className="btn btn--ghost">
                  See the cross-division output
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <CtaBand
            title="Join a division."
            body="Tell us which area you want to work in and we will match you to a team in it."
            primary={{ to: '/join', label: 'Apply to join' }}
            secondary={{ to: '/network', label: 'See who is in the network' }}
          />
        </div>
      </section>
    </>
  );
}

export function DivisionDetail() {
  const { id } = useParams();
  const division = findDivision(id);
  if (!division) return <NotFound />;

  const people = allPeople.filter((p) => p.divisions.includes(division.id));
  const pubs = publications.filter((p) => p.divisions.includes(division.id));
  const divProjects = projects.filter((p) => p.division === division.id);
  const others = divisions.filter((d) => d.id !== division.id).slice(0, 3);

  return (
    <>
      <Seo
        title={division.name}
        path={`/research-divisions/${division.id}`}
        description={division.short}
      />

      <PageHead
        title={division.name}
        lede={division.short}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Research divisions', to: '/research-divisions' },
          { label: division.name },
        ]}
      />

      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label>Division overview</Label>
              <p className="lede">{division.overview}</p>

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.7rem' }}>
                Research objectives
              </h2>
              <ul className="prose" style={{ paddingLeft: '1.1rem' }}>
                {division.objectives.map((o) => (
                  <li key={o} style={{ fontSize: 'var(--t-sm)' }}>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <Label>Research themes</Label>
              <div className="chips">
                {division.themes.map((t) => (
                  <Chip key={t} tone="cyan">
                    {t}
                  </Chip>
                ))}
              </div>

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.7rem' }}>
                Collaboration opportunities
              </h2>
              <p style={{ color: 'var(--grey)', fontSize: 'var(--t-sm)' }}>
                This division takes collaboration enquiries from research groups, clinical
                departments and individual investigators working in these themes. We are
                particularly interested in questions that need evidence synthesis before a primary
                study can be designed.
              </p>
              <div className="btn-row mt-md">
                <Link to="/partners" className="btn btn--ghost">
                  Propose a collaboration
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* researchers */}
      <section className="section section--mist">
        <div className="shell">
          <Label>Researchers in this division</Label>
          {people.length > 0 ? (
            <div className="grid grid--4 mt-sm">
              {people.map((p) => (
                <PersonCard
                  key={p.slug}
                  person={p}
                  base={founders.some((f) => f.slug === p.slug) ? '/leadership' : '/network'}
                />
              ))}
            </div>
          ) : (
            <Empty title="No profiles published in this division yet">
              <p>
                Researchers appear here once they join the division and confirm their profile.
                Applications to work in this area are open.
              </p>
              <div className="btn-row mt-md">
                <Link to="/join" className="btn btn--ghost">
                  Apply to this division
                </Link>
              </div>
            </Empty>
          )}
        </div>
      </section>

      {/* projects */}
      <section className="section">
        <div className="shell">
          <Label>Ongoing projects</Label>
          {divProjects.length > 0 ? (
            <div className="grid grid--3 mt-sm">
              {divProjects.map((p) => (
                <Link key={p.id} className="card" to={`/projects/${p.id}`}>
                  <div className="chips" style={{ marginBottom: '0.6rem' }}>
                    <Chip tone="cyan">{p.status}</Chip>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </Link>
              ))}
            </div>
          ) : (
            <Empty title="Project register in preparation">
              <p>
                Projects in this division will be listed here with their research question,
                methodology, registration and team once their protocols are agreed.
              </p>
            </Empty>
          )}
        </div>
      </section>

      {/* publications */}
      <section className="section section--mist">
        <div className="shell">
          <Label>Selected publications from this division</Label>
          {pubs.length > 0 ? (
            <>
              <div className="rows mt-sm" style={{ borderTopColor: 'var(--line)' }}>
                {pubs.slice(0, 6).map((p) => (
                  <PublicationItem key={p.id} pub={p} />
                ))}
              </div>
              {pubs.length > 6 && (
                <div className="btn-row mt-md">
                  <Link to="/publications" className="btn btn--ghost">
                    All {pubs.length} publications in this division
                  </Link>
                </div>
              )}
            </>
          ) : (
            <Empty title="No publications recorded in this division yet">
              <p>Published work from this division will be listed here as it appears.</p>
            </Empty>
          )}
        </div>
      </section>

      {/* other divisions */}
      <section className="section">
        <div className="shell">
          <Label>Other divisions</Label>
          <div className="grid grid--3 mt-sm">
            {others.map((d) => (
              <DivisionCard key={d.id} division={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
