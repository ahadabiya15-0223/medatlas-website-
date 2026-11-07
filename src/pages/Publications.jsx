import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import {
  Chip,
  CtaBand,
  DataList,
  Empty,
  Label,
  PageHead,
  PublicationItem,
} from '../components/ui';
import {
  findPublication,
  publications,
  publicationStatus,
  publicationTypes,
} from '../data/publications';
import { divisionName, divisions } from '../data/divisions';
import { site } from '../data/site';
import NotFound from './NotFound';

export function PublicationsIndex() {
  const [type, setType] = useState('all');
  const [division, setDivision] = useState('all');
  const [journal, setJournal] = useState('all');
  const [year, setYear] = useState('all');
  const [order, setOrder] = useState('newest');
  const [q, setQ] = useState('');

  const journals = useMemo(
    () => [...new Set(publications.map((p) => p.journal).filter(Boolean))].sort(),
    []
  );
  const years = useMemo(
    () => [...new Set(publications.map((p) => p.year).filter(Boolean))].sort((a, b) => b - a),
    []
  );

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = publications.filter((p) => {
      if (type !== 'all' && p.type !== type) return false;
      if (division !== 'all' && !p.divisions.includes(division)) return false;
      if (journal !== 'all' && p.journal !== journal) return false;
      if (year !== 'all' && String(p.year) !== year) return false;
      if (!term) return true;
      return `${p.title} ${p.authors} ${p.journal} ${p.publisher}`.toLowerCase().includes(term);
    });
    return list.sort((a, b) => {
      const ay = a.year || 0;
      const by = b.year || 0;
      return order === 'newest' ? by - ay : (ay || 9999) - (by || 9999);
    });
  }, [type, division, journal, year, order, q]);

  const grouped = useMemo(() => {
    const map = new Map();
    results.forEach((p) => {
      const key = p.year || 'Year to confirm';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(p);
    });
    return [...map.entries()];
  }, [results]);

  const reset = () => {
    setType('all');
    setDivision('all');
    setJournal('all');
    setYear('all');
    setQ('');
  };

  return (
    <>
      <Seo
        title="Publications"
        path="/publications"
        description="The MedAtlas publication repository: peer-reviewed systematic reviews, meta-analyses, narrative reviews and original research, searchable by author, journal, year, division and type."
      />

      <PageHead
        title="Publications and scientific output"
        lede={`${publications.length} records across ${journals.length} journals. Every entry links to the version of record, and publication status is stated rather than implied.`}
        trail={[{ label: 'Home', to: '/' }, { label: 'Publications' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="toolbar">
            <div>
              <label
                htmlFor="pub-search"
                className="form__note"
                style={{ display: 'block', marginBottom: '0.35rem' }}
              >
                Search by title, author, journal or publisher
              </label>
              <input
                id="pub-search"
                className="search-input"
                type="search"
                placeholder="Try “ferroptosis”, “Takotsubo” or “Cardio-Oncology”"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="pub-order">Sort</label>
              <select id="pub-order" value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>
          </div>

          <div className="toolbar" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div className="field">
              <label htmlFor="pub-journal">Journal</label>
              <select id="pub-journal" value={journal} onChange={(e) => setJournal(e.target.value)}>
                <option value="all">All journals</option>
                {journals.map((j) => (
                  <option key={j} value={j}>
                    {j}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="pub-year">Year</label>
              <select id="pub-year" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="all">All years</option>
                {years.map((y) => (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="pub-division">Research division</label>
              <select
                id="pub-division"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
              >
                <option value="all">All divisions</option>
                {divisions.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filters">
            <button
              type="button"
              className="filter"
              aria-pressed={type === 'all'}
              onClick={() => setType('all')}
            >
              Every type ({publications.length})
            </button>
            {publicationTypes.map((t) => {
              const n = publications.filter((p) => p.type === t).length;
              if (!n) return null;
              return (
                <button
                  key={t}
                  type="button"
                  className="filter"
                  aria-pressed={type === t}
                  onClick={() => setType(t)}
                >
                  {t} ({n})
                </button>
              );
            })}
            <button type="button" className="filter" onClick={reset}>
              Clear filters
            </button>
          </div>

          {results.length === 0 ? (
            <Empty title="No publications match those filters">
              <p>Try a different combination, or clear the filters to see the full repository.</p>
              <div className="btn-row mt-md">
                <button type="button" className="btn btn--ghost" onClick={reset}>
                  Clear filters
                </button>
              </div>
            </Empty>
          ) : (
            <>
              <p className="form__note" style={{ marginBottom: '0.5rem' }}>
                Showing {results.length} of {publications.length} records.
              </p>
              {grouped.map(([key, items]) => (
                <section key={key} style={{ marginTop: '2rem' }}>
                  <h2
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 'var(--t-sm)',
                      color: 'var(--grey-light)',
                      paddingBottom: '0.6rem',
                      borderBottom: '1px solid var(--line)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {key} · {items.length} {items.length === 1 ? 'record' : 'records'}
                  </h2>
                  {items.map((p) => (
                    <PublicationItem key={p.id} pub={p} />
                  ))}
                </section>
              ))}
            </>
          )}

        </div>
      </section>

      <section className="section section--mist">
        <div className="shell">
          <div className="split split--wide">
            <Reveal>
              <Label>Requesting a full text</Label>
              <h2 style={{ fontSize: 'var(--t-h3)' }}>
                If an article sits behind a paywall, write to us.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede">
                We will send what the publisher’s licence permits us to share. Protocols, search
                strategies and extraction forms for registered reviews are available on request to
                any group planning related work.
              </p>
              <p className="mt-sm">
                <a className="tlink" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <CtaBand
            title="Co-author the next one."
            body="Most of this output began as a question from outside the network. Bring yours."
            primary={{ to: '/join', label: 'Join MedAtlas' }}
            secondary={{ to: '/partners', label: 'Propose a collaboration' }}
          />
        </div>
      </section>
    </>
  );
}

export function PublicationDetail() {
  const { id } = useParams();
  const pub = findPublication(id);
  if (!pub) return <NotFound />;

  const status = publicationStatus[pub.status] || publicationStatus.published;
  const related = publications
    .filter((p) => p.id !== pub.id && p.divisions.some((d) => pub.divisions.includes(d)))
    .slice(0, 3);

  return (
    <>
      <Seo
        title={pub.title.slice(0, 70)}
        path={`/publications/${pub.id}`}
        description={`${pub.title}. ${pub.journal || 'Journal to confirm'}${pub.year ? `, ${pub.year}` : ''}. ${pub.type} from the MedAtlas ${divisionName(pub.divisions[0])} division.`}
      />

      <PageHead
        title={pub.title}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Publications', to: '/publications' },
          { label: pub.type },
        ]}
      >
        <div className="chips" style={{ marginTop: '1.2rem' }}>
          <Chip tone={status.tone}>{status.label}</Chip>
          <Chip>{pub.type}</Chip>
          {pub.openAccess && <Chip tone="cyan">Open access</Chip>}
        </div>
      </PageHead>

      <section className="section">
        <div className="shell">
          <div className="split split--wide">
            <div>
              <Label>Record</Label>
              <DataList
                rows={[
                  { label: 'Title', value: pub.title },
                  { label: 'Authors', value: pub.authors },
                  { label: 'Journal', value: pub.journal },
                  { label: 'Publisher', value: pub.publisher },
                  { label: 'Year', value: pub.year },
                  { label: 'Article type', value: pub.type },
                  { label: 'Publication status', value: status.label },
                  { label: 'Open access', value: pub.openAccess ? 'Yes' : null },
                  {
                    label: 'Research divisions',
                    value: pub.divisions.map(divisionName).join(', '),
                  },
                  {
                    label: 'DOI',
                    value: pub.doi ? (
                      <a
                        className="tlink"
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {pub.doi}
                      </a>
                    ) : null,
                  },
                  { label: 'PMID', value: pub.pmid },
                ]}
              />

              {!pub.authors && (
                <p className="form__note mt-sm">
                  The author list for this record has not been entered yet.
                </p>
              )}

              {pub.url && (
                <div className="btn-row mt-md">
                  <a
                    className="btn"
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read the full article
                  </a>
                  <Link to="/publications" className="btn btn--ghost">
                    Back to all publications
                  </Link>
                </div>
              )}

              {!pub.url && (
                <div className="notice mt-md" data-tone="warn">
                  No article link was supplied for this record. Its status is shown as “
                  {status.label}” until the publication details are confirmed.
                </div>
              )}
            </div>

            <div>
              <Label>Abstract</Label>
              <Empty title="Abstract not reproduced here">
                <p>
                  Abstracts are the copyright of their publishers, so we link to the version of
                  record rather than reproducing it. Open access articles can be read in full at
                  the link.
                </p>
              </Empty>

              {related.length > 0 && (
                <>
                  <h2 style={{ fontSize: 'var(--t-h4)', margin: '2rem 0 0.75rem' }}>
                    Related work
                  </h2>
                  <div className="stack">
                    {related.map((r) => (
                      <Link key={r.id} className="card" to={`/publications/${r.id}`}>
                        <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: '1rem' }}>
                          {r.title}
                        </h3>
                        <p style={{ marginTop: '0.4rem' }}>
                          {r.journal || 'Journal to confirm'}
                          {r.year ? `, ${r.year}` : ''}
                        </p>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
