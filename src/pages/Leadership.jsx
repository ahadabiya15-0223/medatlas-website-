import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { CtaBand, Empty, Label, PageHead, PersonCard } from '../components/ui';
import { founders } from '../data/people';
import { site } from '../data/site';

export default function Leadership() {
  return (
    <>
      <Seo
        title="Founders and leadership"
        path="/leadership"
        description="The founders of MedAtlas, their affiliations, research interests and how the network is governed."
      />

      <PageHead
        title="Founders and leadership"
        lede="MedAtlas was founded by three researchers working across India and Türkiye. Each profile below carries their verified affiliation, research interests and ORCID."
        trail={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Leadership' }]}
      />

      {/* founder's message */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Founders’ message</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                We built the thing we needed and could not find.
              </h2>
            </div>
            <div>
              <p className="lede">
                Between the three of us we had the question, the clinical access and the
                methodological training, and no structure that let us use all three at once.
                Every collaboration had to be rebuilt from scratch: who writes the protocol, who
                owns the data, whose name goes where.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                MedAtlas settles those questions once, in advance, so the work can start on the
                science. It is open to anyone who will do the work properly, whatever their
                institution and whatever stage they are at. If that describes you, write to us.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                Abiya Ahad, Ghezal Dabiry and Sultan Mujib Dabiry
                <br />
                Co-founders, MedAtlas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* founders */}
      <section className="section section--mist">
        <div className="shell">
          <Reveal>
            <Label>Co-founders</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '20ch' }}>
              Three founders, three specialties, one axis in common.
            </h2>
          </Reveal>
          <div className="grid grid--3 mt-lg">
            {founders.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <PersonCard person={p} base="/leadership" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* governance */}
      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label>Governance</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>How decisions are made.</h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                MedAtlas is currently governed by its three co-founders, who jointly decide
                membership, division structure and which projects the network takes on. Day-to-day
                responsibility for a project sits with its named lead.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--grey)' }}>
                As the network grows, division heads and an advisory board will be appointed from
                the membership, and this page will record who holds each role.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="stack">
                <Empty title="Division heads: appointments in progress">
                  <p>
                    Division heads will be named here as they are appointed from the membership.
                    Until then, each division is overseen by the co-founders.
                  </p>
                </Empty>
                <Empty title="Advisory board: not yet established">
                  <p>
                    MedAtlas does not currently have an advisory board. When one is formed, its
                    members and their affiliations will be listed here.
                  </p>
                </Empty>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <CtaBand
            title="Talk to the people who run the network."
            body={`Enquiries reach the co-founders directly at ${site.contact.email}.`}
            primary={{ to: '/contact', label: 'Contact MedAtlas' }}
            secondary={{ to: '/network', label: 'Researcher directory' }}
          />
        </div>
      </section>
    </>
  );
}
