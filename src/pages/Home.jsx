import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { MARK, NetworkField } from '../components/Brand';
import { CtaBand, Chip, DivisionCard, Empty, Label, PersonCard } from '../components/ui';
import { site, values } from '../data/site';
import { divisions } from '../data/divisions';
import { publications } from '../data/publications';
import { founders } from '../data/people';
import { projects } from '../data/content';

export default function Home() {
  const featured = publications.filter((p) => p.status === 'published').slice(0, 4);
  const journals = new Set(publications.map((p) => p.journal).filter(Boolean)).size;

  return (
    <>
      <Seo
        path="/"
        title={null}
        description="MedAtlas is an international medical research network connecting medical students, clinicians and academics across borders to produce rigorous, evidence-based medical research."
      />

      {/* ---------------- hero ---------------- */}
      <section className="hero">
        <NetworkField className="hero__net" nodes={46} seed={21} />
        <div className="shell">
          <div className="hero__inner">
            <div>
              <p className="hero__kicker">
                <i />
                International medical research network
              </p>
              <h1>
                Connecting minds.
                <br />
                Advancing medicine.
                <br />
                <b>Beyond borders.</b>
              </h1>
              <p className="hero__copy">
                MedAtlas brings medical students, clinicians and academics into shared research
                teams that cross institutions and countries, with one standard of method applied to
                everything we publish.
              </p>
              <div className="btn-row hero__actions">
                <Link to="/publications" className="btn btn--cyan">
                  Explore our research
                </Link>
                <Link to="/join" className="btn btn--onbrand">
                  Join MedAtlas
                </Link>
              </div>
            </div>

            <img
              className="hero__mark"
              src={MARK}
              alt="The MedAtlas mark: a polygonal brain resolving into a network of connected nodes"
              width="700"
              height="604"
            />
          </div>

          <div className="hero__strip">
            <div className="hero__stat">
              <b>{site.networkStats.researchers}</b>
              <span>Researchers, clinicians and medical students in the network</span>
            </div>
            <div className="hero__stat">
              <b>{site.networkStats.countries}</b>
              <span>Countries represented across the collective</span>
            </div>
            <div className="hero__stat">
              <b>{publications.length}</b>
              <span>Peer-reviewed outputs across {journals} journals</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- introduction ---------------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>About MedAtlas</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                A research organisation held together by method, not geography.
              </h2>
            </div>
            <div>
              <p className="lede">{site.mission}</p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>{site.purpose}</p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                Most of what we produce is evidence synthesis and clinical pharmacology, with
                original and translational research where the data allow it. Projects run with a
                registered protocol, an agreed author order and a named person accountable for the
                statistics.
              </p>
              <div className="btn-row mt-md">
                <Link to="/about" className="btn btn--ghost">
                  Read about the organisation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- mission and vision ---------------- */}
      <section className="section section--brand">
        <div className="shell">
          <div className="grid grid--2">
            <Reveal>
              <Label>Our mission</Label>
              <h2 style={{ fontSize: 'var(--t-h3)', color: '#fff' }}>
                To make international, interdisciplinary medical research ordinary rather than
                exceptional.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                We remove the three things that usually stop a good collaboration: no shared
                standard for protocols, no agreed authorship, and nobody accountable for the
                analysis.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <Label>Our vision</Label>
              <h2 style={{ fontSize: 'var(--t-h3)', color: '#fff' }}>
                A network where a student in one country and a consultant in another publish
                together as a matter of routine.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                We measure that by how quickly a new member reaches a real contribution, and by
                whether the work holds up to scrutiny after publication.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- divisions ---------------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Research divisions</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Seven divisions, built to let questions cross between them.
              </h2>
            </div>
            <p className="lede">
              Members join a division rather than a single project. The divisions are deliberately
              adjacent, because the questions we find most interesting sit between specialties.
            </p>
          </Reveal>

          <div className="grid grid--3 mt-lg">
            {divisions.map((d, i) => (
              <Reveal key={d.id} delay={i * 50}>
                <DivisionCard division={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- featured research ---------------- */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Featured research</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>Recent work from the network.</h2>
            </div>
            <p className="lede">
              Every entry links to the version of record. The full repository is searchable and
              filterable by division, type and year.
            </p>
          </Reveal>

          <div className="grid grid--2 mt-lg">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <Link className="card" to={`/publications/${p.id}`}>
                  <div className="chips" style={{ marginBottom: '0.7rem' }}>
                    <Chip tone="cyan">{p.type}</Chip>
                    {p.journal && <Chip>{p.journal}</Chip>}
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <div className="card__foot">
                    <span className="tlink">Read the record</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="btn-row mt-md">
            <Link to="/publications" className="btn">
              All publications
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- projects ---------------- */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <Label>Research projects</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '20ch' }}>
              What the divisions are working on now.
            </h2>
          </Reveal>
          <div className="mt-md">
            {projects.length === 0 ? (
              <Empty title="The project register is being compiled">
                <p>
                  Ongoing and planned projects will be listed here with their research question,
                  methodology, team and registration number. We publish a project once its protocol
                  is agreed, rather than listing intentions.
                </p>
                <div className="btn-row mt-md">
                  <Link to="/publications" className="btn btn--ghost">
                    See completed work instead
                  </Link>
                </div>
              </Empty>
            ) : (
              <div className="grid grid--3">
                {projects.slice(0, 3).map((p) => (
                  <Link key={p.id} className="card" to={`/projects/${p.id}`}>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- global collaboration ---------------- */}
      <section className="section section--brand">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Global collaboration</Label>
              <h2 style={{ fontSize: 'var(--t-h2)', color: '#fff' }}>
                Built to work across institutions from the first meeting.
              </h2>
            </div>
            <div>
              <p className="lede">
                MedAtlas works across India, Türkiye and the countries its members write from.
                Collaboration here means an agreed scope, a shared protocol and authorship settled
                in advance, not an exchange of introductions.
              </p>
              <div className="btn-row mt-md">
                <Link to="/collaborations" className="btn btn--cyan">
                  How we collaborate
                </Link>
                <Link to="/partners" className="btn btn--onbrand">
                  Partner with us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- network ---------------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>The research network</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>The people behind the work.</h2>
            </div>
            <p className="lede">
              MedAtlas was founded by three researchers working across two countries and now spans{' '}
              {site.networkStats.researchers} members in {site.networkStats.countries} countries.
              Individual profiles are published as each member confirms their details.
            </p>
          </Reveal>

          <div className="grid grid--3 mt-lg">
            {founders.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <PersonCard person={p} base="/leadership" />
              </Reveal>
            ))}
          </div>

          <div className="btn-row mt-md">
            <Link to="/network" className="btn btn--ghost">
              Researcher directory
            </Link>
            <Link to="/leadership" className="btn btn--ghost">
              Leadership
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- values ---------------- */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal>
            <Label>What we hold to</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '22ch' }}>
              Six commitments that decide how a MedAtlas project runs.
            </h2>
          </Reveal>
          <div className="grid grid--3 mt-lg">
            {values.map((v, i) => (
              <Reveal key={v.title} className="card" delay={i * 50}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- cta ---------------- */}
      <section className="section">
        <div className="shell">
          <CtaBand
            title="There is room on the next protocol."
            body="Applications are open to clinicians, researchers and medical students. Institutions and research groups can propose a collaboration through the same route."
            primary={{ to: '/join', label: 'Apply to join' }}
            secondary={{ to: '/contact', label: 'Contact MedAtlas' }}
          />
        </div>
      </section>
    </>
  );
}
