import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { CtaBand, Empty, Label, PageHead, PersonCard } from '../components/ui';
import { allPeople, founders, members } from '../data/people';
import { divisions } from '../data/divisions';

export default function Network() {
  const [division, setDivision] = useState('all');
  const [country, setCountry] = useState('all');
  const [role, setRole] = useState('all');
  const [q, setQ] = useState('');

  const countries = useMemo(
    () => [...new Set(allPeople.map((p) => p.country))].sort(),
    []
  );
  const roles = useMemo(() => [...new Set(allPeople.map((p) => p.role))].sort(), []);
  const institutions = useMemo(
    () => [...new Set(allPeople.map((p) => p.institution))].sort(),
    []
  );

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return allPeople.filter((p) => {
      if (division !== 'all' && !p.divisions.includes(division)) return false;
      if (country !== 'all' && p.country !== country) return false;
      if (role !== 'all' && p.role !== role) return false;
      if (!term) return true;
      return [p.name, p.institution, p.country, p.role, p.credentials, ...p.interests]
        .join(' ')
        .toLowerCase()
        .includes(term);
    });
  }, [division, country, role, q]);

  const reset = () => {
    setDivision('all');
    setCountry('all');
    setRole('all');
    setQ('');
  };

  const filtered = division !== 'all' || country !== 'all' || role !== 'all' || q.trim();

  return (
    <>
      <Seo
        title="Our research network"
        path="/network"
        description="The MedAtlas researcher directory: search and filter members by name, research division, country, institution and academic role."
      />

      <PageHead
        title="A growing international research community."
        lede="MedAtlas is an expanding network with no cap on membership. Every profile below is published with the researcher’s agreement, and the directory grows as new members join."
        trail={[{ label: 'Home', to: '/' }, { label: 'Network' }]}
      />

      {/* overview */}
      <section className="section section--tight">
        <div className="shell">
          <div className="hero__strip" style={{ borderTopColor: 'var(--line)' }}>
            <div className="hero__stat">
              <b style={{ color: 'var(--ink)' }}>{allPeople.length}</b>
              <span style={{ color: 'var(--grey)' }}>Researchers with a published profile</span>
            </div>
            <div className="hero__stat">
              <b style={{ color: 'var(--ink)' }}>{countries.length}</b>
              <span style={{ color: 'var(--grey)' }}>Countries represented</span>
            </div>
            <div className="hero__stat">
              <b style={{ color: 'var(--ink)' }}>{institutions.length}</b>
              <span style={{ color: 'var(--grey)' }}>Institutional affiliations</span>
            </div>
          </div>
          <p className="form__note mt-sm">
            These counts are generated from the directory below, not stated separately, so they can
            never drift out of date.
          </p>
        </div>
      </section>

      {/* directory */}
      <section className="section section--mist" style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="shell">
          <Reveal>
            <Label>Researcher directory</Label>
            <h2 style={{ fontSize: 'var(--t-h2)', maxWidth: '22ch' }}>
              Search the network by name, interest, institution or country.
            </h2>
          </Reveal>

          <div className="toolbar mt-md">
            <div>
              <label
                htmlFor="dir-search"
                className="form__note"
                style={{ display: 'block', marginBottom: '0.35rem' }}
              >
                Search by name, institution, country or research interest
              </label>
              <input
                id="dir-search"
                className="search-input"
                type="search"
                placeholder="Try “cardiology”, “Ankara” or a researcher’s name"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="dir-country">Country</label>
              <select
                id="dir-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="all">All countries</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filters">
            <button
              type="button"
              className="filter"
              aria-pressed={division === 'all'}
              onClick={() => setDivision('all')}
            >
              All divisions
            </button>
            {divisions.map((d) => {
              const n = allPeople.filter((p) => p.divisions.includes(d.id)).length;
              return (
                <button
                  key={d.id}
                  type="button"
                  className="filter"
                  aria-pressed={division === d.id}
                  onClick={() => setDivision(d.id)}
                  disabled={n === 0}
                  style={n === 0 ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}
                >
                  {d.name} ({n})
                </button>
              );
            })}
          </div>

          <div className="filters">
            <button
              type="button"
              className="filter"
              aria-pressed={role === 'all'}
              onClick={() => setRole('all')}
            >
              Every role
            </button>
            {roles.map((r) => (
              <button
                key={r}
                type="button"
                className="filter"
                aria-pressed={role === r}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
            {filtered && (
              <button type="button" className="filter" onClick={reset}>
                Clear all filters
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <Empty title="No researchers match that combination">
              <p>
                Try a broader search, or clear the filters to see everyone currently listed in the
                directory.
              </p>
              <div className="btn-row mt-md">
                <button type="button" className="btn btn--ghost" onClick={reset}>
                  Clear filters
                </button>
              </div>
            </Empty>
          ) : (
            <>
              <p className="form__note" style={{ marginBottom: '1rem' }}>
                Showing {results.length} of {allPeople.length}{' '}
                {allPeople.length === 1 ? 'researcher' : 'researchers'}.
              </p>
              <div className="grid grid--4">
                {results.map((p) => (
                  <PersonCard
                    key={p.slug}
                    person={p}
                    base={founders.some((f) => f.slug === p.slug) ? '/leadership' : '/network'}
                  />
                ))}
              </div>
            </>
          )}

          {members.length === 0 && (
            <div className="notice mt-md">
              The directory currently lists the founding researchers. Member profiles are added as
              each researcher confirms the details they want published. We do not populate the
              directory with placeholder entries.
            </div>
          )}
        </div>
      </section>

      {/* membership */}
      <section className="section">
        <div className="shell">
          <Reveal className="split split--wide">
            <div>
              <Label>Membership opportunities</Label>
              <h2 style={{ fontSize: 'var(--t-h2)' }}>
                Membership is open and uncapped.
              </h2>
            </div>
            <div>
              <p className="lede">
                MedAtlas has no fixed membership number and no ceiling. Clinicians, academics,
                researchers and medical students are all eligible, from any country and any
                institution.
              </p>
              <p style={{ marginTop: '1.1rem', color: 'var(--grey)' }}>
                Members are matched to a division based on their stated interests and the time they
                can commit. There is no fee, and no requirement to have published before.
              </p>
              <div className="btn-row mt-md">
                <Link to="/join" className="btn">
                  Apply to join
                </Link>
                <Link to="/faq" className="btn btn--ghost">
                  Read the FAQ
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <CtaBand
            title="Add your name to the network."
            body="Applications are read by the co-founders. Tell us what you want to work on and how much time you have."
            primary={{ to: '/join', label: 'Join MedAtlas' }}
            secondary={{ to: '/research-divisions', label: 'Browse the divisions' }}
          />
        </div>
      </section>
    </>
  );
}
