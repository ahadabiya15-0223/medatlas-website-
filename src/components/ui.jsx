import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { NetworkField } from './Brand';
import { divisionName, divisionTone } from '../data/divisions';
import { publicationStatus } from '../data/publications';

/** Inline style that rebinds the accent tokens to one hue. */
export const toneVars = (tone) =>
  tone
    ? {
        '--tone': `var(--${tone})`,
        '--tone-ink': `var(--${tone}-ink)`,
        '--tone-wash': `var(--${tone}-wash)`,
        '--accent': `var(--${tone})`,
        '--accent-ink': `var(--${tone}-ink)`,
        '--accent-wash': `var(--${tone}-wash)`,
      }
    : undefined;

export function Label({ tone, children }) {
  return (
    <p className="label" style={toneVars(tone)}>
      {children}
    </p>
  );
}

export function Chip({ tone = '', children }) {
  return <span className={`chip${tone ? ` chip--${tone}` : ''}`}>{children}</span>;
}

export function Crumbs({ trail }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {trail.map((t, i) => (
        <span key={t.to || t.label}>
          {t.to ? <Link to={t.to}>{t.label}</Link> : <span>{t.label}</span>}
          {i < trail.length - 1 && <span aria-hidden="true"> / </span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHead({ title, lede, trail, children }) {
  return (
    <section className="pagehead">
      <NetworkField className="pagehead__net" seed={title.length + 3} nodes={30} />
      <div className="shell">
        {trail && <Crumbs trail={trail} />}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}

export function Portrait({ person }) {
  const initials = person.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  if (person.photo) {
    const src = person.photo.startsWith('http')
      ? person.photo
      : `${import.meta.env.BASE_URL}${person.photo.replace(/^\//, '')}`;
    return (
      <div className="portrait">
        <img src={src} alt={person.name} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className="portrait">
      <div className="portrait__mono" aria-hidden="true">
        <NetworkField className="portrait__net" seed={person.name.length * 5 + 1} nodes={18} />
        <span style={{ position: 'relative' }}>{initials}</span>
      </div>
    </div>
  );
}

export function PersonCard({ person, base = '/network' }) {
  const tone = divisionTone(person.divisions?.[0]);
  return (
    <Link className="person" to={`${base}/${person.slug}`} style={toneVars(tone)}>
      <Portrait person={person} />
      <div className="person__body">
        <h3 className="person__name">
          {person.name}
          {person.credentials ? `, ${person.credentials}` : ''}
        </h3>
        <p className="person__role">{person.role}</p>
        <p className="person__meta">
          {person.institution}
          <br />
          {person.country}
        </p>
        <div className="chips">
          {person.interests.slice(0, 3).map((i) => (
            <Chip key={i}>{i}</Chip>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function PublicationItem({ pub }) {
  const status = publicationStatus[pub.status] || publicationStatus.published;
  return (
    <article className="pub">
      <div className="pub__side">
        <Chip tone={status.tone}>{status.label}</Chip>
        <Chip>{pub.type}</Chip>
        {pub.openAccess && <Chip tone="cyan">Open access</Chip>}
      </div>
      <div>
        <Link to={`/publications/${pub.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="pub__title">{pub.title}</h3>
        </Link>
        {pub.authors && <p className="pub__journal">{pub.authors}</p>}
        <p className="pub__journal">
          {pub.journal ? <em>{pub.journal}</em> : <em>Journal to confirm</em>}
          {pub.year ? `, ${pub.year}` : ''}
          {pub.publisher ? `. ${pub.publisher}.` : '.'}
        </p>
        <div className="pub__links">
          <Link className="tlink" to={`/publications/${pub.id}`}>
            Record
          </Link>
          {pub.doi && (
            <a
              className="tlink"
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              doi.org/{pub.doi}
            </a>
          )}
          {!pub.doi && pub.url && (
            <a className="tlink" href={pub.url} target="_blank" rel="noreferrer noopener">
              Full text
            </a>
          )}
          {pub.pmid && <span className="form__note">PMID {pub.pmid}</span>}
        </div>
        <div className="chips" style={{ marginTop: '0.6rem' }}>
          {pub.divisions.map((d) => (
            <Chip key={d} tone={divisionTone(d)}>
              {divisionName(d)}
            </Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

export function DivisionCard({ division }) {
  return (
    <Link
      className="card card--tone"
      to={`/research-divisions/${division.id}`}
      style={toneVars(division.tone)}
    >
      <span className="card__icon" aria-hidden="true">
        {division.initials}
      </span>
      <h3>{division.name}</h3>
      <p>{division.short}</p>
      <div className="card__foot">
        <span className="tlink">Explore division</span>
      </div>
    </Link>
  );
}

/** The open invitation card that closes the divisions grid. */
export function ProposeDivisionCard() {
  return (
    <Link className="card card--tone" to="/contact" style={toneVars('gold')}>
      <span className="card__icon" aria-hidden="true">
        +
      </span>
      <h3>Another specialty?</h3>
      <p>
        If your field is not listed, tell us what you work on. Where there is a real question and
        someone to lead it, we will open a division for it.
      </p>
      <div className="card__foot">
        <span className="tlink">Contact us and we will try to make it happen</span>
      </div>
    </Link>
  );
}

export function Empty({ title, children }) {
  return (
    <div className="empty">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export function CtaBand({ title, body, primary, secondary }) {
  return (
    <Reveal className="band">
      <NetworkField className="band__net" seed={title.length * 2} nodes={32} />
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="btn-row mt-md">
        <Link to={primary.to} className="btn btn--cyan">
          {primary.label}
        </Link>
        {secondary && (
          <Link to={secondary.to} className="btn btn--onbrand">
            {secondary.label}
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export function DataList({ rows }) {
  return (
    <dl className="datalist">
      {rows
        .filter((r) => r.value)
        .map((r) => (
          <div key={r.label}>
            <dt>{r.label}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
    </dl>
  );
}

/** A numbered sequence. Only for content that really is ordered. */
export function Steps({ items, tone }) {
  return (
    <div className="steps" style={toneVars(tone)}>
      {items.map(([h, p]) => (
        <div className="step" key={h}>
          <div>
            <h3>{h}</h3>
          </div>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}
