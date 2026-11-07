import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { Chip, CtaBand, DataList, Empty, Label, PageHead } from '../components/ui';
import { projectCategories, projects, projectStatuses } from '../data/content';
import { divisionName, divisions } from '../data/divisions';
import { findPerson } from '../data/people';
import { findPublication } from '../data/publications';
import NotFound from './NotFound';

export function ProjectsIndex() {
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');

  const results = useMemo(
    () =>
      projects.filter(
        (p) =>
          (category === 'all' || p.category === category) &&
          (status === 'all' || p.status === status)
      ),
    [category, status]
  );

  return (
    <>
      <Seo
        title="Research projects"
        path="/projects"
        description="Ongoing, completed and planned research projects across the MedAtlas divisions, with research questions, methodology, teams and registration details."
      />

      <PageHead
        title="Research projects"
        lede="Each project is published with its research question, methodology, team and registration number. We list a project once its protocol is agreed, not when it is only an intention."
        trail={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      <section className="section">
        <div className="shell">
          {projects.length === 0 ? (
            <>
              <Label>Project register</Label>
              <Empty title="The project register is being compiled">
                <p>
                  MedAtlas does not list projects before their protocols are agreed, so this page
                  is empty rather than speculative. As each protocol is finalised, the project will
                  appear here with its background, research question, objectives, methodology,
                  study design, team, collaborators and current status, and will link to any
                  publication that arises from it.
                </p>
                <p style={{ marginTop: '0.9rem' }}>
                  Completed work is already in the publication repository.
                </p>
                <div className="btn-row mt-md">
                  <Link to="/publications" className="btn">
                    See published work
                  </Link>
                  <Link to="/research-divisions" className="btn btn--ghost">
                    Browse the divisions
                  </Link>
                </div>
              </Empty>

              <div className="grid grid--3 mt-lg">
                {[
                  ['Ongoing research', 'Projects actively in screening, extraction or analysis.'],
                  ['Completed research', 'Projects that have produced a published output.'],
                  ['Upcoming research', 'Protocols agreed and registered, work not yet begun.'],
                  ['Collaborative research', 'Projects run jointly with an external group.'],
                  ['Systematic reviews and meta-analyses', 'The majority of the network’s output.'],
                  ['Original and translational research', 'Primary data and mechanistic work.'],
                ].map(([h, p]) => (
                  <div className="card" key={h}>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="filters">
                <button
                  type="button"
                  className="filter"
                  aria-pressed={category === 'all'}
                  onClick={() => setCategory('all')}
                >
                  Every category
                </button>
                {projectCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className="filter"
                    aria-pressed={category === c}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="filters">
                <button
                  type="button"
                  className="filter"
                  aria-pressed={status === 'all'}
                  onClick={() => setStatus('all')}
                >
                  Any status
                </button>
                {projectStatuses.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="filter"
                    aria-pressed={status === s}
                    onClick={() => setStatus(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {results.length === 0 ? (
                <Empty title="No projects match those filters">
                  <p>Clear a filter to see the full register.</p>
                </Empty>
              ) : (
                <div className="grid grid--3">
                  {results.map((p) => (
                    <Link key={p.id} className="card" to={`/projects/${p.id}`}>
                      <div className="chips" style={{ marginBottom: '0.7rem' }}>
                        <Chip tone="cyan">{p.status}</Chip>
                        <Chip>{p.category}</Chip>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.summary}</p>
                      <div className="card__foot">
                        <span className="tlink">Project detail</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell">
          <CtaBand
            title="Propose a project."
            body="If you have a question, a dataset or a department that would benefit from a synthesis team, tell us what you are trying to answer."
            primary={{ to: '/partners', label: 'Propose a collaboration' }}
            secondary={{ to: '/join', label: 'Join a project team' }}
          />
        </div>
      </section>
    </>
  );
}

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <NotFound />;

  const team = (project.team || []).map(findPerson).filter(Boolean);
  const outputs = (project.publications || []).map(findPublication).filter(Boolean);

  return (
    <>
      <Seo
        title={project.title}
        path={`/projects/${project.id}`}
        description={project.summary}
      />

      <PageHead
        title={project.title}
        lede={project.summary}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: project.category },
        ]}
      >
        <div className="chips" style={{ marginTop: '1.2rem' }}>
          <Chip tone="cyan">{project.status}</Chip>
          <Chip>{project.category}</Chip>
          <Chip>{divisionName(project.division)}</Chip>
        </div>
      </PageHead>

      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <div className="prose">
              <h2>Research background</h2>
              <p>{project.background}</p>
              <h2>Research question</h2>
              <p>{project.question}</p>
              <h2>Objectives</h2>
              <ul>
                {(project.objectives || []).map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <h2>Methodology</h2>
              <p>{project.methodology}</p>
            </div>

            <div>
              <Label>Project detail</Label>
              <DataList
                rows={[
                  { label: 'Study design', value: project.design },
                  { label: 'Division', value: divisionName(project.division) },
                  { label: 'Category', value: project.category },
                  { label: 'Current status', value: project.status },
                  { label: 'Registration', value: project.registration },
                  {
                    label: 'Collaborators',
                    value: (project.collaborators || []).join(', '),
                  },
                ]}
              />

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.75rem' }}>Research team</h2>
              {team.length > 0 ? (
                <ul className="prose" style={{ paddingLeft: '1.1rem' }}>
                  {team.map((m) => (
                    <li key={m.slug} style={{ fontSize: 'var(--t-sm)' }}>
                      <Link className="tlink" to={`/network/${m.slug}`}>
                        {m.name}
                      </Link>
                      , {m.institution}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="form__note">Team members will be listed here.</p>
              )}

              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.75rem' }}>
                Publications arising
              </h2>
              {outputs.length > 0 ? (
                <div className="stack">
                  {outputs.map((o) => (
                    <Link key={o.id} className="card" to={`/publications/${o.id}`}>
                      <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: '1rem' }}>
                        {o.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="form__note">
                  No publication has arisen from this project yet. Results are not reported here
                  before they are published.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
