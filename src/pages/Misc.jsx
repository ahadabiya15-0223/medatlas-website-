import { useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { DeliverPanel, Field, FormStatus, useForm } from '../components/Form';
import { Chip, CtaBand, Empty, Label, PageHead, toneVars } from '../components/ui';
import {
  certificateCategories,
  certificates,
  conferences,
  faqs,
  news,
  resources,
} from '../data/content';
import { findLegal, legalPages } from '../data/legal';
import { allPeople, findPerson } from '../data/people';
import { divisions } from '../data/divisions';
import { publications } from '../data/publications';
import { site } from '../data/site';
import NotFound from './NotFound';

/* ============================================================
   CONFERENCES
   ============================================================ */
const conferenceRoles = [
  'Attend the conference',
  'Co-author on a future abstract',
  'Help prepare an abstract or poster',
  'Present on behalf of MedAtlas',
  'Not sure yet, tell me more',
];

function JoinConferenceForm() {
  const { values, errors, status, set, submit, reset, buildText } = useForm({
    formName: 'conference-interest',
    title: 'MedAtlas conference interest',
    fields: {
      name: { label: 'Full name', required: true },
      email: { label: 'Email address', required: true, type: 'email' },
      country: { label: 'Country', required: true },
      institution: { label: 'Institution', required: true },
      designation: { label: 'Current role', required: true },
      conference: { label: 'Which conference', required: true },
      involvement: { label: 'How you would like to take part', required: true },
      background: { label: 'Relevant background', required: false },
    },
  });

  const upcoming = [...new Set(conferences.map((c) => `${c.conference}, ${c.location}`))];

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field-row">
        <Field
          label="Full name"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          onChange={set('name')}
          error={errors.name}
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={set('email')}
          error={errors.email}
        />
      </div>

      <div className="field-row">
        <Field
          label="Country"
          name="country"
          required
          autoComplete="country-name"
          value={values.country}
          onChange={set('country')}
          error={errors.country}
        />
        <Field
          label="Institution"
          name="institution"
          required
          autoComplete="organization"
          value={values.institution}
          onChange={set('institution')}
          error={errors.institution}
        />
      </div>

      <div className="field-row">
        <Field
          label="Current role"
          name="designation"
          required
          placeholder="e.g. third-year medical student"
          value={values.designation}
          onChange={set('designation')}
          error={errors.designation}
        />
        <Field
          label="Which conference"
          name="conference"
          as="select"
          required
          options={[...upcoming, 'A future conference']}
          value={values.conference}
          onChange={set('conference')}
          error={errors.conference}
        />
      </div>

      <Field
        label="How you would like to take part"
        name="involvement"
        as="select"
        required
        options={conferenceRoles}
        value={values.involvement}
        onChange={set('involvement')}
        error={errors.involvement}
      />

      <Field
        label="Relevant background"
        name="background"
        as="textarea"
        style={{ minHeight: 100 }}
        hint="Any abstracts, posters or presentations you have worked on before. None is fine."
        value={values.background}
        onChange={set('background')}
        error={errors.background}
      />

      <FormStatus
        status={status}
        onReset={reset}
        sentMessage="Thank you. We will be in touch about the next submission round."
      />

      {status === 'ready' && (
        <DeliverPanel
          text={buildText()}
          subject="MedAtlas conference interest"
          onReset={reset}
        />
      )}

      {status !== 'sent' && status !== 'ready' && (
        <div>
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending' : 'Review and send'}
          </button>
        </div>
      )}
    </form>
  );
}

export function Conferences() {
  const upcoming = conferences.filter((c) => c.year >= new Date().getFullYear());

  return (
    <>
      <Seo
        title="Conferences and scientific presentations"
        path="/conferences"
        description="MedAtlas conference participation: accepted abstracts, oral and poster presentations, and how members can join upcoming conferences."
      />
      <PageHead
        title="Conferences and scientific presentations"
        lede="Abstracts, presentations and scientific meetings involving the network. Entries appear once acceptance is confirmed."
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Collaborate', to: '/collaborations' },
          { label: 'Conferences' },
        ]}
      />

      <section className="section">
        <div className="shell">
          {conferences.length === 0 ? (
            <Empty title="No conference records published yet">
              <p>
                Accepted abstracts, oral and poster presentations and academic recognitions will be
                listed here once acceptance is confirmed in writing.
              </p>
            </Empty>
          ) : (
            <>
              <Label tone="crimson">Accepted abstracts</Label>
              <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                {conferences.map((c) => (
                  <article className="row row--split" key={c.id} style={toneVars('crimson')}>
                    <div>
                      <span className="row__title">
                        <i />
                        {c.conference}
                      </span>
                      <p className="form__note" style={{ marginTop: '0.4rem' }}>
                        {[c.location, c.dates, c.reference].filter(Boolean).join(' · ')}
                      </p>
                    </div>
                    <div>
                      <p className="row__desc" style={{ color: 'var(--ink)', fontWeight: 500 }}>
                        {c.abstractTitle}
                      </p>
                      {c.presenters?.length > 0 && (
                        <p className="form__note" style={{ marginTop: '0.4rem' }}>
                          Presenting: {c.presenters.map((s) => findPerson(s)?.name || s).join(', ')}
                        </p>
                      )}
                      <div className="chips" style={{ marginTop: '0.6rem' }}>
                        <Chip tone="crimson">{c.acceptanceStatus}</Chip>
                        <Chip>{c.presentationType}</Chip>
                        {c.organiser && <Chip>{c.organiser}</Chip>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ---- join the conference ---- */}
      <section className="section section--mist" id="join-the-conference">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label tone="amber">Join the conference</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Members can join upcoming conference submissions.
              </h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                {upcoming.length > 0
                  ? `The next MedAtlas presentations are at ${upcoming[0].conference} in ${upcoming[0].location}, ${upcoming[0].dates}.`
                  : 'The next submission round will be announced here.'}{' '}
                If you would like to attend, co-author a future abstract, help prepare a poster or
                present on behalf of the network, register your interest and we will contact you
                when the next round opens.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                Travel, registration and accommodation are arranged by each attendee. MedAtlas does
                not currently fund conference attendance, and we say so plainly rather than let
                anyone assume otherwise.
              </p>
              <p className="form__note mt-md">
                Submissions reach the co-founders on WhatsApp at{' '}
                <a
                  className="tlink"
                  href={`https://wa.me/${site.delivery.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {site.delivery.whatsappDisplay}
                </a>{' '}
                or by email at{' '}
                <a className="tlink" href={`mailto:${site.delivery.email}`}>
                  {site.delivery.email}
                </a>
                .
              </p>
            </Reveal>

            <Reveal delay={80}>
              <JoinConferenceForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   CERTIFICATES
   ============================================================ */
export function Certificates() {
  const [category, setCategory] = useState('all');
  const [holder, setHolder] = useState('all');

  const holders = useMemo(
    () => [...new Set(certificates.map((c) => c.holder))],
    []
  );

  const results = useMemo(
    () =>
      certificates.filter(
        (c) =>
          (category === 'all' || c.category === category) &&
          (holder === 'all' || c.holder === holder)
      ),
    [category, holder]
  );

  const reset = () => {
    setCategory('all');
    setHolder('all');
  };

  return (
    <>
      <Seo
        title="Certificates"
        path="/certificates"
        description="Clinical certifications, continuing medical education, research training and professional development held by members of the MedAtlas network."
      />
      <PageHead
        title="Certificates and training"
        lede={`${certificates.length} credentials held by members of the network: clinical certifications, continuing medical education, research training and professional development.`}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Research', to: '/research-divisions' },
          { label: 'Certificates' },
        ]}
      />

      <section className="section">
        <div className="shell">
          <div className="filters">
            <button
              type="button"
              className="filter"
              aria-pressed={holder === 'all'}
              onClick={() => setHolder('all')}
            >
              Everyone ({certificates.length})
            </button>
            {holders.map((h) => {
              const person = findPerson(h);
              const n = certificates.filter((c) => c.holder === h).length;
              return (
                <button
                  key={h}
                  type="button"
                  className="filter"
                  aria-pressed={holder === h}
                  onClick={() => setHolder(h)}
                >
                  {person ? person.name : h} ({n})
                </button>
              );
            })}
          </div>

          <div className="filters">
            <button
              type="button"
              className="filter"
              aria-pressed={category === 'all'}
              onClick={() => setCategory('all')}
            >
              Every category
            </button>
            {certificateCategories.map((c) => {
              const n = certificates.filter((x) => x.category === c).length;
              if (!n) return null;
              return (
                <button
                  key={c}
                  type="button"
                  className="filter"
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                >
                  {c} ({n})
                </button>
              );
            })}
          </div>

          {results.length === 0 ? (
            <Empty title="Nothing matches that combination">
              <p>Clear the filters to see every certificate in the network.</p>
              <div className="btn-row mt-md">
                <button type="button" className="btn btn--ghost" onClick={reset}>
                  Clear filters
                </button>
              </div>
            </Empty>
          ) : (
            <>
              <p className="form__note" style={{ marginBottom: '1rem' }}>
                Showing {results.length} of {certificates.length}.
              </p>
              <div className="certgrid">
                {results.map((c, i) => {
                  const person = findPerson(c.holder);
                  return (
                    <Reveal key={c.id} delay={Math.min(i, 8) * 35}>
                      <article className="cert" style={toneVars(c.tone)}>
                        {c.file && (
                          <a
                            className="cert__shot"
                            href={`${import.meta.env.BASE_URL}${c.file}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`View the ${c.title} certificate at full size`}
                          >
                            <img
                              src={`${import.meta.env.BASE_URL}${c.file}`}
                              alt={`${c.title}, issued by ${c.issuer}`}
                              loading="lazy"
                              decoding="async"
                            />
                          </a>
                        )}
                        <div className="cert__body">
                          <h3>{c.title}</h3>
                          <p className="cert__issuer">{c.issuer}</p>
                          {c.detail && <p className="cert__detail">{c.detail}</p>}
                          <div className="cert__foot">
                            <div className="chips">
                              <Chip tone={c.tone}>{c.category}</Chip>
                              {c.year && <Chip>{c.year}</Chip>}
                            </div>
                            {person && (
                              <p className="form__note" style={{ marginTop: '0.55rem' }}>
                                Held by{' '}
                                <Link className="tlink" to={`/leadership/${person.slug}`}>
                                  {person.name}
                                </Link>
                              </p>
                            )}
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section section--sand">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label tone="teal">MedAtlas modules</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Certificates for our own modules are coming.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede">
                The resource library is being built into structured modules on evidence synthesis,
                biostatistics and scientific writing. Members who complete one will receive a
                MedAtlas certificate, which will be listed here alongside these.
              </p>
              <div className="btn-row mt-md">
                <Link to="/education" className="btn btn--ghost">
                  See the resource library
                </Link>
                <Link to="/join" className="btn btn--ghost">
                  Join the network
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
export function Faq() {
  const tones = ['crimson', 'cyan', 'amber', 'plum'];
  return (
    <>
      <Seo
        title="Frequently asked questions"
        path="/faq"
        description="Answers to common questions about MedAtlas, membership, research collaboration, publication involvement and institutional partnerships."
      />
      <PageHead
        title="Frequently asked questions"
        lede="If your question is not answered here, write to us and we will add it."
        trail={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'FAQ' }]}
      />

      <section className="section">
        <div className="shell shell--narrow">
          {faqs.map((group, gi) => (
            <section key={group.group} style={{ marginBottom: '2.5rem' }}>
              <Label tone={tones[gi % tones.length]}>{group.group}</Label>
              <div
                className="rows"
                style={{ borderTopColor: 'var(--line)', ...toneVars(tones[gi % tones.length]) }}
              >
                {group.items.map((item) => (
                  <details key={item.q} className="row" style={{ display: 'block' }}>
                    <summary
                      style={{
                        cursor: 'pointer',
                        fontFamily: 'var(--display)',
                        fontWeight: 700,
                        fontSize: 'var(--t-h4)',
                      }}
                    >
                      {item.q}
                    </summary>
                    <p className="row__desc" style={{ marginTop: '0.6rem' }}>
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <CtaBand
            title="Still unanswered?"
            body={`Write to ${site.contact.email} and we will reply, then add the answer to this page.`}
            primary={{ to: '/contact', label: 'Ask us' }}
            secondary={{ to: '/join', label: 'Apply to join' }}
          />
        </div>
      </section>
    </>
  );
}

/* ============================================================
   LEGAL
   ============================================================ */
export function LegalPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const page = findLegal(slug);
  if (!page) return <NotFound />;

  return (
    <>
      <Seo title={page.title} path={`/${slug}`} description={page.lede} />
      <PageHead
        title={page.title}
        lede={page.lede}
        trail={[{ label: 'Home', to: '/' }, { label: page.title }]}
      />

      <section className="section">
        <div className="shell shell--narrow">
          <p className="form__note" style={{ marginBottom: '1.5rem' }}>
            Last updated {page.lastUpdated}
          </p>

          {page.underReview && (
            <div className="notice" data-tone="warn" style={{ marginBottom: '2rem' }}>
              This document is a drafting template prepared for MedAtlas. It has not yet been
              reviewed by a qualified legal adviser and should be checked before the site goes
              live. It is not legal advice.
            </div>
          )}

          <div className="prose">
            {page.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p?.map((para) => (
                  <p key={para.slice(0, 30)}>{para}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="btn-row mt-lg">
            {Object.entries(legalPages)
              .filter(([k]) => k !== slug)
              .map(([k, v]) => (
                <Link key={k} to={`/${k}`} className="btn btn--ghost">
                  {v.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   SEARCH
   ============================================================ */
export function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return null;
    const hit = (s) => String(s || '').toLowerCase().includes(term);

    return {
      people: allPeople.filter(
        (p) => hit(p.name) || hit(p.institution) || hit(p.country) || p.interests.some(hit)
      ),
      publications: publications.filter(
        (p) => hit(p.title) || hit(p.journal) || hit(p.authors) || hit(p.type)
      ),
      divisions: divisions.filter((d) => hit(d.name) || hit(d.short) || d.themes.some(hit)),
      news: news.filter((n) => hit(n.headline) || hit(n.excerpt)),
      resources: resources.filter((r) => hit(r.title) || hit(r.summary)),
      certificates: certificates.filter((c) => hit(c.title) || hit(c.issuer)),
    };
  }, [q]);

  const total = results ? Object.values(results).reduce((n, arr) => n + arr.length, 0) : 0;

  return (
    <>
      <Seo title="Search" path="/search" description="Search the MedAtlas website." />
      <PageHead
        title={q ? `Search: ${q}` : 'Search MedAtlas'}
        lede={
          q
            ? `${total} ${total === 1 ? 'result' : 'results'} across researchers, publications, divisions, news, resources and certificates.`
            : 'Search researchers, publications, research divisions, news, education resources and certificates.'
        }
        trail={[{ label: 'Home', to: '/' }, { label: 'Search' }]}
      />

      <section className="section">
        <div className="shell">
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              const value = new FormData(e.currentTarget).get('q');
              setParams(value ? { q: value } : {});
            }}
            style={{ marginBottom: '2rem' }}
          >
            <label
              htmlFor="page-search"
              className="form__note"
              style={{ display: 'block', marginBottom: '0.4rem' }}
            >
              Search term
            </label>
            <div className="searchbar">
              <input
                id="page-search"
                name="q"
                className="search-input"
                type="search"
                defaultValue={q}
                placeholder="Try “cardio-oncology”, “ferroptosis” or a researcher’s name"
              />
              <button type="submit" className="btn">
                Search
              </button>
            </div>
          </form>

          {!q && (
            <Empty title="Type something to begin">
              <p>
                The search covers every researcher profile, publication record, research division,
                news article, education resource and certificate on this site.
              </p>
            </Empty>
          )}

          {q && total === 0 && (
            <Empty title={`Nothing matches “${q}”`}>
              <p>Try a broader term, a different spelling, or browse the sections directly.</p>
              <div className="btn-row mt-md">
                <Link to="/publications" className="btn btn--ghost">
                  Publications
                </Link>
                <Link to="/network" className="btn btn--ghost">
                  Researchers
                </Link>
                <Link to="/research-divisions" className="btn btn--ghost">
                  Divisions
                </Link>
              </div>
            </Empty>
          )}

          {q && total > 0 && (
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              {results.publications.length > 0 && (
                <section>
                  <Label tone="teal">Publications ({results.publications.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.publications.map((p) => (
                      <Link key={p.id} className="row" to={`/publications/${p.id}`}>
                        <span
                          className="row__title"
                          style={{ fontFamily: 'var(--serif)', fontWeight: 500 }}
                        >
                          <i />
                          {p.title}
                        </span>
                        <p className="row__desc">
                          {p.journal || 'Journal to confirm'}
                          {p.year ? `, ${p.year}` : ''} · {p.type}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {results.people.length > 0 && (
                <section>
                  <Label tone="rose">Researchers ({results.people.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.people.map((p) => (
                      <Link key={p.slug} className="row row--split" to={`/network/${p.slug}`}>
                        <span className="row__title">
                          <i />
                          {p.name}, {p.credentials}
                        </span>
                        <p className="row__desc">
                          {p.role} · {p.institution}, {p.country}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {results.divisions.length > 0 && (
                <section>
                  <Label tone="plum">Research divisions ({results.divisions.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.divisions.map((d) => (
                      <Link
                        key={d.id}
                        className="row row--split"
                        to={`/research-divisions/${d.id}`}
                        style={toneVars(d.tone)}
                      >
                        <span className="row__title">
                          <i />
                          {d.name}
                        </span>
                        <p className="row__desc">{d.short}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {results.resources.length > 0 && (
                <section>
                  <Label tone="cyan">Education resources ({results.resources.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.resources.map((r) => (
                      <Link key={r.id} className="row row--split" to={`/education/${r.id}`}>
                        <span className="row__title">
                          <i />
                          {r.title}
                        </span>
                        <p className="row__desc">{r.summary}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {results.certificates.length > 0 && (
                <section>
                  <Label tone="amber">Certificates ({results.certificates.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.certificates.map((c) => (
                      <Link key={c.id} className="row row--split" to="/certificates">
                        <span className="row__title">
                          <i />
                          {c.title}
                        </span>
                        <p className="row__desc">{c.issuer}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {results.news.length > 0 && (
                <section>
                  <Label tone="coral">News ({results.news.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.news.map((n) => (
                      <Link key={n.id} className="row row--split" to={`/news/${n.id}`}>
                        <span className="row__title">
                          <i />
                          {n.headline}
                        </span>
                        <p className="row__desc">{n.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ============================================================
   500
   ============================================================ */
export function ServerError() {
  return (
    <>
      <Seo title="Something went wrong" path="/500" description="An error occurred." />
      <PageHead
        title="Something went wrong at our end."
        lede="The page could not be loaded. This is a problem with the site, not with what you did."
        trail={[{ label: 'Home', to: '/' }, { label: 'Error' }]}
      />
      <section className="section">
        <div className="shell shell--narrow">
          <Empty title="What to try">
            <p>
              Reload the page. If it keeps failing, tell us what you were trying to reach and we
              will fix it.
            </p>
            <div className="btn-row mt-md">
              <Link to="/" className="btn">
                Back to the homepage
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Report the problem
              </Link>
            </div>
          </Empty>
        </div>
      </section>
    </>
  );
}
