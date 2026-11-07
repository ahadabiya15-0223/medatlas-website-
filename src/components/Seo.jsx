import { useEffect } from 'react';
import { site } from '../data/site';

function setMeta(selector, attr, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key) tag.setAttribute(key, val);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
}

/**
 * Per-page title, description and Open Graph tags. Dropped into each page
 * component; no extra dependency needed.
 */
export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const full = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
    document.title = full;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', full);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `https://medatlas-official-abi.vercel.app${path}`;
  }, [title, description, path]);

  return null;
}
