import { Link } from 'react-router-dom';
import { site } from '../data/site';

/* Brand assets live in public/brand/.
   medatlas-mark.png       the brain, background removed (use on the navy field)
   medatlas-logo-full.png  the full supplied lockup
   Swap either file and the whole site updates. */
export const MARK = `${import.meta.env.BASE_URL}brand/medatlas-mark.png`;
export const LOGO_FULL = `${import.meta.env.BASE_URL}brand/medatlas-logo-full.png`;

/** Mark plus wordmark. Designed for the navy masthead and footer. */
export default function Brand({ to = '/', size = 42 }) {
  return (
    <Link to={to} className="logo" aria-label={`${site.name} home`}>
      <img src={MARK} alt="" style={{ height: size }} width="700" height="604" />
      <span className="logo__type">
        <span className="logo__name">MEDATLAS</span>
        <span className="logo__sub">RESEARCH NETWORK</span>
      </span>
    </Link>
  );
}

/**
 * The polygonal node field from the right hemisphere of the logo,
 * used as a backdrop on brand-coloured surfaces. Deterministic, so
 * it renders identically every time.
 */
export function NetworkField({ className = '', nodes = 34, seed = 7 }) {
  let s = seed;
  const rnd = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };

  const pts = Array.from({ length: nodes }, () => ({
    x: +(rnd() * 100).toFixed(2),
    y: +(rnd() * 100).toFixed(2),
    r: +(rnd() * 1.1 + 0.45).toFixed(2),
  }));

  const links = [];
  for (let i = 0; i < pts.length; i++) {
    const near = pts
      .map((p, j) => ({ j, d: Math.hypot(p.x - pts[i].x, (p.y - pts[i].y) * 0.55) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    near.forEach((o) => {
      if (i < o.j) links.push([i, o.j]);
    });
  }

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="#57d9e0" strokeWidth="0.12" opacity="0.5">
        {links.map(([a, b], i) => (
          <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} />
        ))}
      </g>
      <g fill="#8fe6ec">
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r * 0.22} opacity={0.75} />
        ))}
      </g>
    </svg>
  );
}
