import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { CtaBand, Empty, Label, PageHead } from '../components/ui';
import { divisions } from '../data/divisions';
import { site } from '../data/site';

const categories = [
  {
    title: 'Universities and medical colleges',
    body: 'Joint supervision of student research, shared protocols and reciprocal authorship on work that neither group would complete alone.',
  },
  {
    title: 'Hospitals and clinical research institutions',
    body: 'Clinical questions arising from practice, taken through a registered protocol with the synthesis and statistical work handled by the network.',
  },
  {
    title: 'Academic researchers',
    body: 'Individual investigators who need a synthesis team, a second site, or methodological review before submission.',
  },
  {
    title: 'International research groups',
    body: 'Multi-country reviews and analyses where the literature or the data span more than one health system.',
  },
  {
    title: 'Pharmaceutical and biotechnology organisations',
    body: 'Enquiries are considered. Any relationship is declared on the resulting publication, and no partner has editorial control over findings.',
  },
  {
    title: 'Scientific societies',
    body: 'Joint statements, methodological guidance and conference collaboration within the divisions we work in.',
  },
];

export default function Collaborations() {
  return (
    <>
      <Seo
        title="Global collaborations"
        path="/collaborations"
        description="How MedAtlas collaborates internationally: academic partnerships, institutional collaboration, co-authored research and mentorship, with an enquiry route for universities, hospitals and research organisations."
      />

      <PageHead
        title="Global collaborations"
        lede="MedAtlas is built to work across institutions. Collaboration here means an agreed scope, a shared protocol and authorship settled before the work starts."
        trail={[{ label: 'Home', to: '/' }, { label: 'Collaborations' }]}
      />

      {/* approach */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Our global approach</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Distance is a logistics problem, not a research problem.
              </h2>
            </div>
            <div>
              <p className="lede">
                The network already operates across India and Türkiye, and its published work draws
                on literature and clinical practice from well beyond those two countries. Nothing
                in how we run a project depends on people sharing a building.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                What a collaboration does depend on is agreement in writing about three things:
                what the question is, who does which part, and whose name appears where. We settle
                those before the first search is run.
              </p>
            </div>
          </Reveal>

          <div className="rows mt-lg">
            {[
              [
                'Scope the question together',
                'A first conversation establishes whether the evidence base can answer the question, and whether synthesis or primary research is the right approach.',
              ],
              [
                'Agree the terms in writing',
                'Data sharing, ethical approvals where relevant, contributorship roles and expected author order are documented before work begins.',
              ],
              [
                'Register and run the protocol',
                'The protocol is registered publicly. Screening and extraction are done in duplicate, with a named person accountable for the analysis.',
              ],
              [
                'Publish and keep the record',
                'The collaboration is named on the output. Protocols and analysis files are retained so the work can be rerun or extended.',
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

      {/* categories */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal>
            <Label>Who we collaborate with</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '24ch' }}>
              Six routes into a working relationship with the network.
            </h2>
          </Reveal>
          <div className="grid grid--3 mt-lg">
            {categories.map((c, i) => (
              <Reveal key={c.title} className="card" delay={i * 45}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* established vs prospective */}
      <section className="section">
        <div className="shell">
          <div className="split">
            <Reveal>
              <Label>Established partnerships</Label>
              <Empty title="No institutional partnerships to declare yet">
                <p>
                  MedAtlas has not yet signed a formal institutional partnership. When one is
                  agreed, the partner institution, the scope of the collaboration and the work
                  arising from it will be listed here.
                </p>
                <p style={{ marginTop: '0.9rem' }}>
                  We do not list prospective partners as established ones, and we do not display
                  institutional logos without written authorisation.
                </p>
              </Empty>
            </Reveal>

            <Reveal delay={80}>
              <Label>Prospective collaboration</Label>
              <h2 style={{ fontSize: 'var(--t-h3)' }}>
                We are actively looking for the first institutional partners.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Across {divisions.length} divisions, the network has capacity for synthesis work
                and methodological support that most clinical departments cannot staff internally.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--grey)' }}>
                If you have a question and no team, that is the gap we were built to close. Write
                to {site.contact.email} or use the enquiry form.
              </p>
              <div className="btn-row mt-md">
                <Link to="/partners" className="btn">
                  Partnership enquiry
                </Link>
                <Link to="/publications" className="btn btn--ghost">
                  Assess our output first
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* mentorship */}
      <section className="section section--brand">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Academic mentorship</Label>
              <h2 style={{ fontSize: 'var(--t-h2)', color: '#fff' }}>
                Supervision that reaches students without a research department.
              </h2>
            </div>
            <div>
              <p className="lede">
                A capable medical student at a hospital with no research infrastructure has no
                route into publishable work. MedAtlas offers one: a supervised role on a live
                project, with the methodology taught as the work proceeds.
              </p>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Institutions that want this for their students can arrange it as a standing
                collaboration rather than individual applications.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <CtaBand
            title="Start a conversation."
            body="Tell us the question and what you have: a dataset, a department, a cohort, or just the problem. We will tell you honestly whether we can help."
            primary={{ to: '/partners', label: 'Partnership enquiry' }}
            secondary={{ to: '/contact', label: 'General contact' }}
          />
        </div>
      </section>
    </>
  );
}
