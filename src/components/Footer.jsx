import { Link } from 'react-router-dom';
import Brand from './Brand';
import { legalNav, site } from '../data/site';
import { divisions } from '../data/divisions';

export default function Footer() {
  const year = new Date().getFullYear();
  const social = site.social.filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <Brand size={44} />
            <p>{site.mission}</p>
            <p style={{ marginTop: '0.9rem' }}>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
          </div>

          <div>
            <h4>ORGANISATION</h4>
            <ul>
              <li>
                <Link to="/about">About MedAtlas</Link>
              </li>
              <li>
                <Link to="/leadership">Founders and leadership</Link>
              </li>
              <li>
                <Link to="/network">Research network</Link>
              </li>
              <li>
                <Link to="/news">News and insights</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>RESEARCH</h4>
            <ul>
              {divisions.slice(0, 5).map((d) => (
                <li key={d.id}>
                  <Link to={`/research-divisions/${d.id}`}>{d.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/research-divisions">All divisions</Link>
              </li>
              <li>
                <Link to="/publications">Publications</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>GET INVOLVED</h4>
            <ul>
              <li>
                <Link to="/join">Join MedAtlas</Link>
              </li>
              <li>
                <Link to="/partners">Partner with us</Link>
              </li>
              <li>
                <Link to="/collaborations">Global collaborations</Link>
              </li>
              <li>
                <Link to="/conferences">Conferences</Link>
              </li>
              <li>
                <Link to="/education">Education and resources</Link>
              </li>
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>
            © {year} {site.name}. {site.contact.location}.
          </span>
          <span className="footer__legal">
            {legalNav.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
