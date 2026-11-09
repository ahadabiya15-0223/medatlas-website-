import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { CtaBand, Label, PageHead, toneVars } from '../components/ui';
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
        lede="The methodology the network runs on, written down. These are the teaching materials used inside MedAtlas projects, and they form the basis of the modules and courses we are building."
        trail={[{ label: 'Home', to: '/' }, { label: 'Education' }]}
      />

      <section className="section">
        <div className="shell">
          <Label tone="cyan">Resource library</Label>
          <div className="grid grid--3">
            {resources.map((r, i) => (
              <Reveal key={r.id} delay={i * 35}>
                <Link className="card card--tone" to={`/education/${r.id}`} style={toneVars(r.tone)}>
                  <h3>{r.title}</h3>
                  <p>{r.summary}</p>
                  <div className="card__foot">
                    <span className="tlink">Open the guide</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label tone="amber">How members learn here</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Methodology is taught inside live projects, not beside them.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede">
                A member learning to screen does it on a real review, paired with someone
                experienced, with their decisions checked. The written resources support that work.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                Structured modules and courses are in development, alongside worked examples,
                recorded sessions and downloadable templates: extraction forms, risk-of-bias sheets
                and search string logs. Certificates awarded for completed MedAtlas modules will be
                listed on the certificates page.
              </p>
              <div className="btn-row mt-md">
                <Link to="/certificates" className="btn btn--ghost">
                  See certificates
                </Link>
              </div>
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
    <div style={toneVars(resource.tone)}>
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
      />

      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <div>
              <Label tone={resource.tone}>What this guide covers</Label>
              <ul className="prose" style={{ paddingLeft: '1.1rem' }}>
                {resource.outline.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <p className="mt-md" style={{ color: 'var(--grey)', fontSize: 'var(--t-sm)' }}>
                This guide is being expanded into a full module with worked examples and
                downloadable templates. If you need the material now for a project you are working
                on, write to us and we will share what the network currently uses internally.
              </p>
              <div className="btn-row mt-md">
                <Link to="/contact" className="btn btn--ghost">
                  Ask for the current material
                </Link>
              </div>
            </div>

            <div>
              <Label tone={resource.tone}>Other resources</Label>
              <div className="stack">
                {others.map((r) => (
                  <Link
                    key={r.id}
                    className="card card--tone"
                    to={`/education/${r.id}`}
                    style={toneVars(r.tone)}
                  >
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
    </div>
  );
}
