import { useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { Chip, CtaBand, Empty, Label, PageHead } from '../components/ui';
import { conferences, faqs, news, projects, resources } from '../data/content';
import { findLegal, legalPages } from '../data/legal';
import { allPeople, findPerson } from '../data/people';
import { divisions } from '../data/divisions';
import { publications } from '../data/publications';
import { site } from '../data/site';
import NotFound from './NotFound';

/* ---------------- Conferences ---------------- */
export function Conferences() {
  return (
    <>
      <Seo
        title="Conferences and scientific presentations"
        path="/conferences"
        description="MedAtlas conference participation: accepted abstracts, oral and poster presentations, scientific meetings and upcoming conferences."
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
            <>
              <Empty title="No conference records published yet">
                <p>
                  This page will list international conferences the network has presented at,
                  accepted abstracts, oral and poster presentations and academic recognitions. Each
                  entry carries the conference name, organising institution, location, year,
                  abstract title, presenting authors, presentation type and acceptance status.
                </p>
                <p style={{ marginTop: '0.9rem' }}>
                  Nothing is listed here until acceptance is confirmed in writing, which is why the
                  page is currently empty.
                </p>
                <div className="btn-row mt-md">
                  <Link to="/publications" className="btn">
                    See published work
                  </Link>
                  <Link to="/contact" className="btn btn--ghost">
                    Submit a confirmed acceptance
                  </Link>
                </div>
              </Empty>

              <div className="grid grid--3 mt-lg">
                {[
                  ['International conferences', 'Meetings the network has attended or presented at.'],
                  ['Accepted abstracts', 'Confirmed acceptances with the presenting author named.'],
                  ['Oral presentations', 'Talks delivered by members on network research.'],
                  ['Poster presentations', 'Posters presented at scientific meetings.'],
                  ['Academic recognitions', 'Awards and prizes, listed only when verified.'],
                  ['Upcoming conferences', 'Accepted work scheduled for presentation.'],
                ].map(([h, p]) => (
                  <div className="card" key={h}>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="rows">
              {conferences.map((c) => (
                <article className="row row--split" key={c.id}>
                  <div>
                    <span className="row__title">
                      <i />
                      {c.conference}
                    </span>
                    <p className="form__note" style={{ marginTop: '0.4rem' }}>
                      {[c.location, c.year, c.reference].filter(Boolean).join(' · ')}
                    </p>
                  </div>
                  <div>
                    <p className="row__desc" style={{ color: 'var(--ink)', fontWeight: 500 }}>
                      {c.abstractTitle}
                    </p>
                    {c.presenters?.length > 0 && (
                      <p className="form__note" style={{ marginTop: '0.4rem' }}>
                        Presenting:{' '}
                        {c.presenters.map((s) => findPerson(s)?.name || s).join(', ')}
                      </p>
                    )}
                    <div className="chips" style={{ marginTop: '0.6rem' }}>
                      <Chip tone="cyan">{c.acceptanceStatus}</Chip>
                      <Chip>{c.presentationType}</Chip>
                      {c.organiser && <Chip>{c.organiser}</Chip>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq() {
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
          {faqs.map((group) => (
            <section key={group.group} style={{ marginBottom: '2.5rem' }}>
              <Label>{group.group}</Label>
              <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
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

/* ---------------- Legal pages ---------------- */
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

/* ---------------- Global search ---------------- */
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
      divisions: divisions.filter(
        (d) => hit(d.name) || hit(d.short) || d.themes.some(hit)
      ),
      projects: projects.filter((p) => hit(p.title) || hit(p.summary)),
      news: news.filter((n) => hit(n.headline) || hit(n.excerpt)),
      resources: resources.filter((r) => hit(r.title) || hit(r.summary)),
    };
  }, [q]);

  const total = results
    ? Object.values(results).reduce((n, arr) => n + arr.length, 0)
    : 0;

  return (
    <>
      <Seo title="Search" path="/search" description="Search the MedAtlas website." />
      <PageHead
        title={q ? `Search: ${q}` : 'Search MedAtlas'}
        lede={
          q
            ? `${total} ${total === 1 ? 'result' : 'results'} across researchers, publications, divisions, projects, news and resources.`
            : 'Search researchers, publications, research divisions, projects, news and education resources.'
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
            <label htmlFor="page-search" className="form__note" style={{ display: 'block', marginBottom: '0.4rem' }}>
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
                project, news article and education resource on this site.
              </p>
            </Empty>
          )}

          {q && total === 0 && (
            <Empty title={`Nothing matches “${q}”`}>
              <p>
                Try a broader term, a different spelling, or browse the sections directly.
              </p>
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
            <div className="stack" style={{ display: 'grid', gap: '2.5rem' }}>
              {results.publications.length > 0 && (
                <section>
                  <Label>Publications ({results.publications.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.publications.map((p) => (
                      <Link key={p.id} className="row" to={`/publications/${p.id}`}>
                        <span className="row__title" style={{ fontFamily: 'var(--serif)', fontWeight: 500 }}>
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
                  <Label>Researchers ({results.people.length})</Label>
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
                  <Label>Research divisions ({results.divisions.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.divisions.map((d) => (
                      <Link key={d.id} className="row row--split" to={`/research-divisions/${d.id}`}>
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
                  <Label>Education resources ({results.resources.length})</Label>
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

              {results.projects.length > 0 && (
                <section>
                  <Label>Projects ({results.projects.length})</Label>
                  <div className="rows" style={{ borderTopColor: 'var(--line)' }}>
                    {results.projects.map((p) => (
                      <Link key={p.id} className="row row--split" to={`/projects/${p.id}`}>
                        <span className="row__title">
                          <i />
                          {p.title}
                        </span>
                        <p className="row__desc">{p.summary}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {results.news.length > 0 && (
                <section>
                  <Label>News ({results.news.length})</Label>
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

/* ---------------- 500 ---------------- */
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
