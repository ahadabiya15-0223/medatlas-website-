import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Brand from './Brand';
import { nav } from '../data/site';

function Caret() {
  return (
    <svg className="nav__caret" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const [searching, setSearching] = useState(false);
  const [q, setQ] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setSearching(false);
  }, [pathname]);

  useEffect(() => {
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenu(null);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenu(null);
        setSearching(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (searching) searchRef.current?.focus();
  }, [searching]);

  const submitSearch = (e) => {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setQ('');
  };

  const isActive = (item) =>
    pathname === item.to ||
    (item.children || []).some((c) => pathname.startsWith(c.to) && c.to !== '/');

  return (
    <header className="masthead">
      <div className="shell masthead__inner">
        <Brand />

        <nav className="nav" aria-label="Primary" ref={navRef}>
          {nav.map((item) =>
            item.children ? (
              <div className="nav__item" key={item.label}>
                <button
                  type="button"
                  className={`nav__link${isActive(item) ? ' is-active' : ''}`}
                  aria-expanded={menu === item.label}
                  onClick={() => setMenu(menu === item.label ? null : item.label)}
                >
                  {item.label}
                  <Caret />
                </button>
                {menu === item.label && (
                  <div className="menu">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to}>
                        <strong>{c.label}</strong>
                        <span>{c.note}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="nav__item" key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive: a }) => `nav__link${a ? ' is-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </div>
            )
          )}
        </nav>

        <div className="masthead__tools">
          <button
            type="button"
            className="iconbtn"
            aria-label={searching ? 'Close search' : 'Search the site'}
            aria-expanded={searching}
            onClick={() => setSearching((v) => !v)}
          >
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.6" cy="8.6" r="5.6" stroke="currentColor" strokeWidth="1.7" />
              <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>

          <Link to="/join" className="btn btn--cyan">
            Join MedAtlas
          </Link>

          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {searching && (
        <div className="searchpanel">
          <form className="shell" onSubmit={submitSearch} role="search">
            <label htmlFor="site-search" className="form__note" style={{ display: 'block', marginBottom: '0.4rem' }}>
              Search researchers, publications, projects, divisions and news
            </label>
            <div className="searchbar">
              <input
                id="site-search"
                ref={searchRef}
                className="search-input"
                type="search"
                placeholder="Try “cardio-oncology”, “ferroptosis” or a researcher’s name"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button type="submit" className="btn">
                Search
              </button>
            </div>
          </form>
        </div>
      )}

      {open && (
        <div className="drawer" id="mobile-nav">
          <div className="shell">
            {nav.map((item) => (
              <div className="drawer__group" key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive: a }) => (a ? 'is-active' : undefined)}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="drawer__sub">
                    {item.children
                      .filter((c) => c.to !== item.to)
                      .map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          className={({ isActive: a }) => (a ? 'is-active' : undefined)}
                        >
                          {c.label}
                        </NavLink>
                      ))}
                  </div>
                )}
              </div>
            ))}
            <div className="drawer__group" style={{ borderBottom: 0 }}>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
