import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { MARK, NetworkField } from '../components/Brand';
import {
  Chip,
  CtaBand,
  DivisionCard,
  Label,
  PersonCard,
  ProposeDivisionCard,
  toneVars,
} from '../components/ui';
import { site, values } from '../data/site';
import { divisionCountWord, divisions, divisionTone } from '../data/divisions';
import { publications } from '../data/publications';
import { founders } from '../data/people';
import { collaboratorCount, news } from '../data/content';

export default function Home() {
  const featured = publications.filter((p) => p.status === 'published').slice(0, 4);
  const latest = news[0];

  return (
    <>
      <Seo
        path="/"
        title={null}
        description="MedAtlas is an international medical research network of doctors, medical students, clinicians and academics producing rigorous, evidence-based research across eight research divisions."
      />

      {/* ---------------- hero ---------------- */}
      <section className="hero">
        <NetworkField className="hero__net" nodes={50} seed={21} />
        <div className="shell">
          <div className="hero__inner">
            <div>
              <p className="hero__kicker">
                <i />
                International medical research network
              </p>
              <h1>
                <span className="l1">Connecting minds.</span>
                <br />
                <span className="l2">Advancing medicine.</span>
                <br />
                <span className="l3">Beyond borders.</span>
              </h1>
              <p className="hero__copy">
                MedAtlas brings doctors, medical students, clinicians and academics into shared
                research teams that cross institutions and countries, with one standard of method
                applied to everything we publish.
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

            <div className="hero__markwrap">
              <span className="hero__glow" aria-hidden="true" />
              <span className="hero__ring" aria-hidden="true" />
              <span className="hero__ring" aria-hidden="true" />
              <img
                className="hero__mark"
                src={MARK}
                alt="The MedAtlas mark: a polygonal brain resolving into a network of connected nodes"
                width="1300"
                height="1123"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="hero__strip">
            <div className="hero__stat" style={{ '--tone': 'var(--gold)' }}>
              <b>{site.networkStats.researchers}</b>
              <span>Doctors, medical students and researchers in the network</span>
            </div>
            <div className="hero__stat" style={{ '--tone': 'var(--cyan-bright)' }}>
              <b>{site.networkStats.countries}</b>
              <span>Countries represented across the collective</span>
            </div>
            <div className="hero__stat" style={{ '--tone': '#f2a0a0' }}>
              <b>{publications.length}</b>
              <span>Peer-reviewed outputs across {site.networkStats.journals} journals</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- introduction ---------------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label tone="crimson">About MedAtlas</Label>
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
                We build the scaffolding a good collaboration needs and rarely has: a shared
                standard for protocols, authorship agreed before the work starts, and a named
                person accountable for the analysis. With that in place, the science is free to be
                the hard part.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <Label>Our vision</Label>
              <h2 style={{ fontSize: 'var(--t-h3)', color: '#fff' }}>
                A network where a student in one country and a consultant in another publish
                together as a matter of routine.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                We measure that by how efficiently a new member reaches a real contribution, and by
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
              <Label tone="plum">Research divisions</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                {divisionCountWord.charAt(0).toUpperCase() + divisionCountWord.slice(1)} divisions,
                deliberately adjacent.
              </h2>
            </div>
            <p className="lede">
              Members join a division rather than a single project. The divisions are built to sit
              next to each other, because the questions we find most interesting fall between
              specialties.
            </p>
          </Reveal>

          <div className="grid grid--3 mt-lg">
            {divisions.map((d, i) => (
              <Reveal key={d.id} delay={i * 40}>
                <DivisionCard division={d} />
              </Reveal>
            ))}
            <Reveal delay={divisions.length * 40}>
              <ProposeDivisionCard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- featured research ---------------- */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label tone="teal">Featured research</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>Recent work from the network.</h2>
            </div>
            <p className="lede">
              Every entry links to the version of record. The full repository is searchable and
              filterable by division, type and year.
            </p>
          </Reveal>

          <div className="grid grid--2 mt-lg">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 50}>
                <Link
                  className="card card--tone"
                  to={`/publications/${p.id}`}
                  style={toneVars(divisionTone(p.divisions[0]))}
                >
                  <div className="chips" style={{ marginBottom: '0.7rem' }}>
                    <Chip tone={divisionTone(p.divisions[0])}>{p.type}</Chip>
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

      {/* ---------------- latest news ---------------- */}
      {latest && (
        <section className="section">
          <div className="shell">
            <Reveal className="split split--wide">
              <div>
                <Label tone={latest.tone || 'amber'}>Latest from the network</Label>
                <h2 style={{ fontSize: 'var(--t-h2)' }}>{latest.headline}</h2>
                <p className="lede" style={{ marginTop: '1rem' }}>
                  {latest.excerpt}
                </p>
                <div className="btn-row mt-md">
                  <Link to={`/news/${latest.id}`} className="btn btn--ghost">
                    Read the announcement
                  </Link>
                  <Link to="/news" className="btn btn--ghost">
                    All news
                  </Link>
                </div>
              </div>
              {latest.video && (
                <div className="videoframe">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={`${import.meta.env.BASE_URL}${latest.video.poster}`}
                  >
                    <source
                      src={`${import.meta.env.BASE_URL}${latest.video.src}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- global collaboration ---------------- */}
      <section className="section section--brand">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Global collaboration</Label>
              <h2 style={{ fontSize: 'var(--t-h2)', color: '#fff' }}>
                {collaboratorCount} named collaborators across Brazil, Germany, Sweden, Australia
                and Italy.
              </h2>
            </div>
            <div>
              <p className="lede">
                MedAtlas works with researchers at the Federal University of Juiz de Fora, the
                Instituto de Cardiologia de Porto Alegre, the University of Magdeburg, LMU Munich,
                Karolinska Institutet, the University of Sydney and SISSA in Trieste.
              </p>
              <div className="btn-row mt-md">
                <Link to="/collaborations" className="btn btn--cyan">
                  See our collaborators
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
              <Label tone="rose">The research network</Label>
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
              <Reveal key={p.slug} delay={i * 50}>
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
      <section className="section section--sand">
        <div className="shell">
          <Reveal>
            <Label tone="amber">What we hold to</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '22ch' }}>
              Six commitments that decide how a MedAtlas project runs.
            </h2>
          </Reveal>
          <div className="grid grid--3 mt-lg">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 40}>
                <div className="card card--tone" style={toneVars(v.tone)}>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
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
            body="Applications are open to doctors, clinicians, researchers and medical students. Institutions and research groups can propose a collaboration through the same route."
            primary={{ to: '/join', label: 'Apply to join' }}
            secondary={{ to: '/contact', label: 'Contact MedAtlas' }}
          />
        </div>
      </section>
    </>
  );
}
