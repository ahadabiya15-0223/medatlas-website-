import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { CtaBand, Label, PageHead } from '../components/ui';
import { objectives, site, values } from '../data/site';
import { divisionCountWord, divisions } from '../data/divisions';

export default function About() {
  return (
    <>
      <Seo
        title="About MedAtlas"
        path="/about"
        description="Who MedAtlas is, why it exists, how it approaches research, and what it commits to on scientific integrity."
      />

      <PageHead
        title="An international research collective, organised around how the work gets done."
        lede={site.mission}
        trail={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* story */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Our story</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Three researchers, two countries, one shared document.
              </h2>
            </div>
            <div>
              <p className="lede">
                MedAtlas began between researchers who kept finding each other in the same
                literature and had no institutional route to work together.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                The founding group spans India and Türkiye, and crosses cardiology, neurology and
                orthopaedics. What held it together was a shared interest in the brain–heart axis
                and a shared frustration: the people best placed to answer a question are rarely in
                the same department, and there is usually no mechanism to put them on the same
                author line.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                MedAtlas is that mechanism. It supplies the thing an informal collaboration
                normally lacks: an agreed standard for protocols, a defined division structure, and
                an authorship policy written down before the work starts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* who we are */}
      <section className="section section--mist">
        <div className="shell">
          <div className="grid grid--2">
            <Reveal>
              <Label>Who we are</Label>
              <h2 style={{ fontSize: 'var(--t-h3)' }}>
                Doctors, medical students, clinicians, academics and researchers working as one
                group.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                The network is interdisciplinary by composition, not only by intention. Membership
                spans clinical specialties and research backgrounds, and is not restricted to any
                institution, country or career stage.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--grey)' }}>
                MedAtlas is not a student society, a course provider, a commercial medical company
                or a university. It is a research collective, and it is judged by what it publishes.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <Label>Our objectives</Label>
              <ol className="prose" style={{ paddingLeft: '1.1rem', display: 'grid', gap: '0.65rem' }}>
                {objectives.map((o) => (
                  <li key={o} style={{ color: 'var(--grey)', fontSize: 'var(--t-sm)' }}>
                    {o}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* mission / vision */}
      <section className="section section--brand">
        <div className="shell">
          <div className="grid grid--2">
            <Reveal>
              <Label>Our mission</Label>
              <h2 style={{ fontSize: 'var(--t-h3)', color: '#fff' }}>
                To facilitate scientific collaboration, encourage interdisciplinary research,
                advance evidence-based medicine and contribute to the global medical literature.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Label>Our long-term vision</Label>
              <h2 style={{ fontSize: 'var(--t-h3)', color: '#fff' }}>
                A network whose protocols, search strategies and analysis code are open enough that
                any group can reproduce our work end to end.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Reproducibility is the ambition that shapes the rest: it forces the methods to be
                written down, the decisions to be dated and the data to be kept.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <Label>Our core values</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '24ch' }}>
              What a member can expect, and what is expected of them.
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

      {/* approach */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Our approach to research</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>How a MedAtlas project actually runs.</h2>
            </div>
            <p className="lede">
              The sequence is the same whether the output is a scoping review or a primary analysis.
            </p>
          </Reveal>

          <div className="rows mt-lg">
            {[
              [
                'The question comes first',
                'A member or a collaborator brings a question. It is discussed with the relevant division before anything is written, and rejected at this stage if the evidence base cannot support an answer.',
              ],
              [
                'The protocol is written and registered',
                'Search strategy, inclusion criteria, extraction fields, appraisal tool and analysis plan are specified in advance. Reviews are registered before the first search is run.',
              ],
              [
                'Roles and authorship are agreed',
                'Who screens, who extracts, who analyses and who drafts is settled at the start, against recognised contributorship criteria, along with the expected author order.',
              ],
              [
                'The work is done in pairs',
                'Screening and extraction are done independently by two members with disagreement resolved by a third. This is slower and it is not negotiable.',
              ],
              [
                'Methods review before submission',
                'Before a manuscript leaves the network it is read for search architecture, risk-of-bias handling and statistical reasoning. A reviewer who would reject the paper is better met internally.',
              ],
              [
                'The record is kept',
                'Protocols, searches and analysis files are retained so that the work can be rerun, corrected or extended later.',
              ],
            ].map(([h, p]) => (
              <div className="row row--split" key={h}>
                <span className="row__title">
                  <i />
                  {h}
                </span>
                <p className="row__desc">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* integrity */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Scientific integrity</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                What we will not do, stated plainly.
              </h2>
            </div>
            <div className="prose">
              <ul>
                <li>We do not report a manuscript as published until it is published.</li>
                <li>We do not list collaborations, partnerships or affiliations we have not agreed.</li>
                <li>We do not add authors for access or remove them for seniority.</li>
                <li>We do not claim accreditation, certification or institutional standing we do not hold.</li>
                <li>We do not submit the same work to more than one journal at a time.</li>
                <li>We do not present a proposed project as a completed one.</li>
                <li>We correct the record when we get something wrong, in public.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* why we exist */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Why MedAtlas exists</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Because the barrier to good research is rarely the idea.
              </h2>
            </div>
            <div>
              <p className="lede">
                A capable student at a hospital with no research department, and a busy clinician
                with a question and no time to run a search, are both common. Neither is short of
                ideas. What they lack is a structure.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                MedAtlas supplies that structure across {divisionCountWord} divisions, so the
                question gets answered properly and everyone who did the work is named on it.
              </p>
              <div className="btn-row mt-md">
                <Link to="/leadership" className="btn btn--ghost">
                  Meet the founders
                </Link>
                <Link to="/research-divisions" className="btn btn--ghost">
                  See the divisions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <CtaBand
            title="Work with the collective."
            body="Membership applications, partnership enquiries and collaboration proposals all start in the same place."
            primary={{ to: '/join', label: 'Join MedAtlas' }}
            secondary={{ to: '/publications', label: 'Read the output' }}
          />
        </div>
      </section>
    </>
  );
}
