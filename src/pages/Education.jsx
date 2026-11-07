import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { Chip, CtaBand, Empty, Label, PageHead } from '../components/ui';
import { findResource, resources } from '../data/content';
import NotFound from './NotFound';

export function EducationIndex() {
  return (
    <>
      <Seo
        title="Education and research resources"
        path="/education"
        description="MedAtlas research methodology resources: systematic review methodology, meta-analysis, biostatistics, epidemiology, scientific writing, publication ethics, literature searching and evidence-based medicine."
      />

      <PageHead
        title="Education and research resources"
        lede="The methodology the network runs on, written down. These guides are being built as the teaching material used inside MedAtlas projects, and published openly as each is finished."
        trail={[{ label: 'Home', to: '/' }, { label: 'Education' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="notice" style={{ marginBottom: '2rem' }}>
            MedAtlas does not offer accredited courses, certificates or qualifications. These are
            open research resources, not a training programme, and nothing here carries academic
            credit.
          </div>

          <Label>Resource library</Label>
          <div className="grid grid--3">
            {resources.map((r, i) => (
              <Reveal key={r.id} delay={i * 40}>
                <Link className="card" to={`/education/${r.id}`}>
                  <div className="chips" style={{ marginBottom: '0.7rem' }}>
                    <Chip tone={r.status === 'available' ? 'cyan' : 'amber'}>
                      {r.status === 'available' ? 'Available' : 'In preparation'}
                    </Chip>
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.summary}</p>
                  <div className="card__foot">
                    <span className="tlink">See the outline</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label>How members learn here</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Methodology is taught inside live projects, not beside them.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede">
                A member learning to screen does it on a real review, paired with someone
                experienced, with their decisions checked. The written resources exist to support
                that work rather than to replace it.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                Future additions will include worked examples, recorded sessions and downloadable
                templates: extraction forms, risk-of-bias sheets and search string logs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <CtaBand
            title="Learn it by doing it."
            body="Members join a project within the first weeks and learn the methods on work that will be published."
            primary={{ to: '/join', label: 'Apply to join' }}
            secondary={{ to: '/research-divisions', label: 'Choose a division' }}
          />
        </div>
      </section>
    </>
  );
}

export function ResourceDetail() {
  const { id } = useParams();
  const resource = findResource(id);
  if (!resource) return <NotFound />;

  const others = resources.filter((r) => r.id !== resource.id).slice(0, 3);

  return (
    <>
      <Seo
        title={resource.title}
        path={`/education/${resource.id}`}
        description={resource.summary}
      />

      <PageHead
        title={resource.title}
        lede={resource.summary}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Education', to: '/education' },
          { label: resource.title },
        ]}
      >
        <div className="chips" style={{ marginTop: '1.2rem' }}>
          <Chip tone={resource.status === 'available' ? 'cyan' : 'amber'}>
            {resource.status === 'available' ? 'Available' : 'In preparation'}
          </Chip>
        </div>
      </PageHead>

      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <div>
              <Label>What this guide covers</Label>
              <ul className="prose" style={{ paddingLeft: '1.1rem' }}>
                {resource.outline.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>

              {resource.status !== 'available' && (
                <Empty title="This guide is still being written">
                  <p>
                    The outline above is the structure it will follow. We publish a resource when
                    it is finished rather than posting a stub, so there is nothing to download
                    yet.
                  </p>
                  <p style={{ marginTop: '0.8rem' }}>
                    If you need this material now for a project you are working on, write to us and
                    we will share what the network currently uses internally.
                  </p>
                  <div className="btn-row mt-md">
                    <Link to="/contact" className="btn btn--ghost">
                      Ask for the current material
                    </Link>
                  </div>
                </Empty>
              )}
            </div>

            <div>
              <Label>Other resources</Label>
              <div className="stack">
                {others.map((r) => (
                  <Link key={r.id} className="card" to={`/education/${r.id}`}>
                    <h3 style={{ fontSize: '1rem' }}>{r.title}</h3>
                    <p style={{ marginTop: '0.35rem' }}>{r.summary}</p>
                  </Link>
                ))}
              </div>
              <div className="btn-row mt-md">
                <Link to="/education" className="btn btn--ghost">
                  All resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
