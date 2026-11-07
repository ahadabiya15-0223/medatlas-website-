import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { Chip, CtaBand, Empty, Label, PageHead } from '../components/ui';
import { news, newsCategories } from '../data/content';
import { findPerson } from '../data/people';
import NotFound from './NotFound';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const authorName = (author) => findPerson(author)?.name || author;

export function NewsIndex() {
  const [category, setCategory] = useState('all');

  const results = useMemo(
    () =>
      [...news]
        .filter((n) => category === 'all' || n.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date)),
    [category]
  );

  return (
    <>
      <Seo
        title="News and insights"
        path="/news"
        description="Announcements, research highlights, publication news and scientific perspectives from the MedAtlas network."
      />

      <PageHead
        title="News and insights"
        lede="Announcements, publication news and perspectives from the network. We publish what happened; we do not manufacture news."
        trail={[{ label: 'Home', to: '/' }, { label: 'News' }]}
      />

      <section className="section">
        <div className="shell">
          {news.length === 0 ? (
            <Empty title="No articles published yet">
              <p>
                This section will carry MedAtlas announcements, research highlights, publication
                and conference news, member achievements and scientific perspectives. It is empty
                because nothing has been published here yet, and we would rather show that than
                fill the page.
              </p>
              <p style={{ marginTop: '0.9rem' }}>
                In the meantime, the publication repository is the live record of the network’s
                output.
              </p>
              <div className="btn-row mt-md">
                <Link to="/publications" className="btn">
                  See the publications
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Send us news
                </Link>
              </div>
            </Empty>
          ) : (
            <>
              <div className="filters">
                <button
                  type="button"
                  className="filter"
                  aria-pressed={category === 'all'}
                  onClick={() => setCategory('all')}
                >
                  Everything
                </button>
                {newsCategories.map((c) => {
                  const n = news.filter((a) => a.category === c).length;
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

              <div className="grid grid--3">
                {results.map((a) => (
                  <Link key={a.id} className="card" to={`/news/${a.id}`}>
                    <div className="chips" style={{ marginBottom: '0.7rem' }}>
                      <Chip tone="cyan">{a.category}</Chip>
                    </div>
                    <h3>{a.headline}</h3>
                    <p>{a.excerpt}</p>
                    <div className="card__foot">
                      <span className="form__note">
                        {authorName(a.author)} · {formatDate(a.date)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell">
          <CtaBand
            title="Tell us what the network should know."
            body="Members with an acceptance, a presentation or a result worth sharing can send it to the co-founders for publication here."
            primary={{ to: '/contact', label: 'Send an update' }}
            secondary={{ to: '/publications', label: 'See the record' }}
          />
        </div>
      </section>
    </>
  );
}

export function NewsArticle() {
  const { id } = useParams();
  const article = news.find((a) => a.id === id);
  if (!article) return <NotFound />;

  const related = (article.related || [])
    .map((r) => news.find((n) => n.id === r))
    .filter(Boolean);

  return (
    <>
      <Seo
        title={article.headline}
        path={`/news/${article.id}`}
        description={article.excerpt}
      />

      <PageHead
        title={article.headline}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'News', to: '/news' },
          { label: article.category },
        ]}
      >
        <p className="lede" style={{ marginTop: '1rem' }}>
          {authorName(article.author)} · {formatDate(article.date)}
        </p>
      </PageHead>

      <section className="section">
        <div className="shell shell--narrow">
          <article className="prose">
            {article.body.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </article>

          {related.length > 0 && (
            <>
              <h2 style={{ fontSize: 'var(--t-h4)', margin: '2.5rem 0 1rem' }}>Related articles</h2>
              <div className="grid grid--2">
                {related.map((r) => (
                  <Link key={r.id} className="card" to={`/news/${r.id}`}>
                    <h3>{r.headline}</h3>
                    <p>{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="btn-row mt-lg">
            <Link to="/news" className="btn btn--ghost">
              All news
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
