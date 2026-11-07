# MedAtlas — official website

The website of MedAtlas, an international medical research collective connecting medical
students, clinicians, academics and researchers across institutional and geographical
boundaries.

Twenty-nine routes, a searchable publication repository, a filterable researcher directory,
seven research division pages, three working forms and a global site search.

---

## 1. Technology stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | React 18 | Component reuse across 29 routes |
| Build tool | Vite 5 | Fast builds, small output, zero config |
| Routing | React Router 6, `BrowserRouter` | Real independent routes with clean URLs |
| Styling | Hand-written CSS with custom properties | One token file drives the whole design system; no framework weight |
| Content | Plain JavaScript data modules in `src/data/` | Editable without touching components |
| Fonts | Manrope, Inter, Newsreader via Google Fonts | Matches the logo wordmark; serif for publication titles |
| Hosting | Any static host | `dist/` is plain files |

No database, no backend and no build server are required. The forms are built to post to one
endpoint you configure; everything else is static.

**On TypeScript:** the brief listed TypeScript as preferred. This build is JavaScript. The
content layer is plain data objects with no runtime type coupling, so a migration later is
mechanical: rename `.jsx` to `.tsx`, add interfaces for the five data shapes in `src/data/`,
and nothing else changes.

---

## 2. Install and run

Requires Node.js 18 or newer.

```bash
npm install        # install dependencies
npm run dev        # development server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

---

## 3. Deploying

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. At vercel.com, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Confirm the settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add the environment variable `VITE_FORM_ENDPOINT` (see section 6) under
   **Settings → Environment Variables**.
5. Deploy. Add your custom domain under **Settings → Domains**; Vercel issues the HTTPS
   certificate automatically.

`vercel.json` is already in the project. It rewrites every path to `index.html` so deep links
such as `/publications/cobalt-cardiomyopathy` work, caches hashed assets for a year, and sets
three security headers.

### Netlify

Same flow. `public/_redirects` already contains the SPA rewrite rule. Build command
`npm run build`, publish directory `dist`.

### Any other static host

Run `npm run build` and upload `dist/`. Configure the server to serve `index.html` for any path
it does not recognise, otherwise refreshing a sub-page returns 404. For nginx:

```nginx
location / { try_files $uri $uri/ /index.html; }
```

If your host cannot do that, open `src/main.jsx` and swap `BrowserRouter` for `HashRouter`.
URLs become `/#/publications` and work everywhere with no server configuration.

---

## 4. Updating content

Everything you will change regularly lives in `src/data/`. No component needs editing.

| What you want to change | File |
| --- | --- |
| Organisation name, mission, contact details, social links, navigation, values, objectives | `src/data/site.js` |
| Founders, leadership, researcher directory | `src/data/people.js` |
| Research divisions and their themes | `src/data/divisions.js` |
| Publication repository | `src/data/publications.js` |
| Projects, conferences, news, education resources, FAQ | `src/data/content.js` |
| Privacy policy, terms, cookies, accessibility statement | `src/data/legal.js` |
| Colours, typography, spacing | the `:root` block at the top of `src/styles/global.css` |
| Logo files | `public/brand/` |

Each file opens with a comment explaining its fields.

### Add a researcher

Open `src/data/people.js` and append an object to the `members` array. A filled template sits
in a comment directly above it.

```js
{
  slug: 'firstname-lastname',          // becomes /network/firstname-lastname
  name: 'Firstname Lastname',
  credentials: 'MBBS',
  role: 'Research Member',
  country: 'India',
  institution: 'Institution name',
  divisions: ['cardiovascular-medicine'],   // ids from divisions.js
  interests: ['Heart failure', 'Evidence synthesis'],
  orcid: '0009-0000-0000-0000',
  email: '',
  linkedin: '',
  photo: 'people/filename.jpg',        // optional
  bio: ['One or two paragraphs.'],
  publications: ['cobalt-cardiomyopathy'],  // ids from publications.js
}
```

The directory, its filters, the per-division researcher lists, the site search and the counts
on the network page all update from that one object. Nothing else to touch.

**Photographs:** put the file in `public/people/` and reference it as `'people/filename.jpg'`.
Square or 4:5 portraits around 800px wide work best. Leave `photo` empty and the card renders a
monogram over the brand field, so the grid stays even whether or not everyone has sent a photo.

**Phone numbers** are stored in the data but not displayed. Set `showPhone: true` on a person to
publish theirs. Consider carefully: a mobile number on a public page is scraped within days.

### Add a publication

Append an object to `publications` in `src/data/publications.js`. The page groups by year,
builds the DOI link and populates every filter on its own.

```js
{
  id: 'short-slug',                    // becomes /publications/short-slug
  title: 'Full article title',
  authors: '*A Ahad*, G Dabiry, S M Dabiry',   // *asterisks* mark MedAtlas members
  journal: 'Journal name',
  publisher: 'Springer',
  year: 2026,
  type: 'Systematic review',           // from publicationTypes
  status: 'published',                 // published | accepted | in-review | submitted | in-preparation
  openAccess: true,
  doi: '10.1007/s12012-026-10099-7',   // bare DOI, no https://
  pmid: '',
  url: 'https://link.springer.com/article/...',
  divisions: ['cardiovascular-medicine'],
}
```

Abstracts are deliberately not reproduced: they are the publisher's copyright, so the record
links to the version of record instead.

### Add a project

Append to `projects` in `src/data/content.js`, using the commented template. The projects index,
the division pages and the search all pick it up, and the detail page at `/projects/<id>` is
generated.

### Add a news article or a conference record

Same pattern, in `src/data/content.js`. Both arrays ship empty with a template in a comment.

### Add a research division

Append to `divisions` in `src/data/divisions.js`. The new division appears in the navigation
dropdown, the division index, the directory filters, the publication filters and gets its own
page at `/research-divisions/<id>`.

---

## 5. Route map

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About MedAtlas |
| `/leadership` | Founders and leadership |
| `/leadership/:slug` | Individual leadership profile |
| `/network` | Researcher directory, searchable and filterable |
| `/network/:slug` | Individual researcher profile |
| `/research-divisions` | Division index |
| `/research-divisions/:id` | Division detail (7 pages) |
| `/projects` | Project register |
| `/projects/:id` | Project detail |
| `/publications` | Publication repository |
| `/publications/:id` | Publication record |
| `/conferences` | Conferences and presentations |
| `/collaborations` | Global collaborations |
| `/partners` | Partner with us, with enquiry form |
| `/education` | Research resources |
| `/education/:id` | Resource detail |
| `/news` | News and insights |
| `/news/:id` | Article |
| `/join` | Membership application form |
| `/contact` | Contact form and details |
| `/faq` | Frequently asked questions |
| `/search` | Global site search |
| `/privacy-policy`, `/terms`, `/cookies`, `/accessibility` | Legal and policy pages |
| `/500` | Server error page |
| anything else | 404 |

---

## 6. Forms and backend integration

Three forms: membership application (`/join`), partnership enquiry (`/partners`) and general
contact (`/contact`). All three validate in the browser, announce errors to assistive
technology, and show sending, success and failure states.

### Preview mode

With no endpoint configured the forms validate, log the payload to the browser console and
report success. The interface is fully reviewable before any backend exists.

### Connecting a backend

Create a `.env` file in the project root:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Anything that accepts a POST will work: Formspree, Netlify Forms, a Vercel serverless function,
or your own API. Rebuild after changing `.env`.

### Payload shape

Forms without a file attachment send JSON:

```json
{
  "form": "membership-application",
  "submittedAt": "2026-11-07T18:30:00.000Z",
  "name": "...", "email": "...", "country": "...", "institution": "...",
  "qualification": "...", "designation": "...", "division": "...",
  "interests": "...", "experience": "...", "publications": "...",
  "profile": "...", "motivation": "..."
}
```

The membership form sends `multipart/form-data` instead when a CV is attached, with the file
under the field name `cv`.

`form` is one of `membership-application`, `partnership-enquiry` or `contact`, so a single
endpoint can route all three.

### Writing your own endpoint

A Vercel serverless function would live at `api/submit.js`:

```js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const data = req.body;
  // store it, email it, push it to a sheet — your choice
  return res.status(200).json({ ok: true });
}
```

Then set `VITE_FORM_ENDPOINT=/api/submit`.

### Handling personal data

Applications contain names, emails, institutions and CVs. Keep the endpoint private, do not log
payloads to a public service, and keep the retention periods in `src/data/legal.js` aligned with
what you actually do.

---

## 7. A future admin dashboard

The site is architected for one without being written around a fake login.

Every collection in `src/data/` is a flat array of plain objects with a stable `id` or `slug`
and no circular references. Each maps directly to a database table or a CMS collection, and the
components read through accessor functions (`findPerson`, `findPublication`, `findDivision`,
`findResource`) rather than reaching into the arrays. Replacing a static import with a fetch
means changing those accessors and nothing else.

A sensible path when you need it:

1. Move the five data modules into a headless CMS (Sanity, Contentful, Strapi) or a Postgres
   schema that mirrors them one for one.
2. Replace each `import { x } from '../data/x'` with a fetch in the accessor.
3. Build the editing interface behind real authentication.

This project deliberately ships **no** login screen. A dashboard that does not actually
authenticate is worse than no dashboard, and a real one needs a backend that does not exist yet.

A members-only portal would follow the same route: real authentication first, then
member dashboards, project allocation and manuscript tracking on top of the same collections.

---

## 8. Project structure

```
public/
  brand/            logo, mark and favicon
  people/           researcher photographs go here
  robots.txt
  sitemap.xml
  _redirects        Netlify SPA rewrite
src/
  data/             all editable content
    site.js  people.js  divisions.js  publications.js  content.js  legal.js
  components/
    Brand.jsx       logo lockup and the polygonal network motif
    Header.jsx      sticky nav with dropdowns, search and mobile drawer
    Footer.jsx
    Form.jsx        Field, useForm, FormStatus
    Reveal.jsx      one-shot scroll reveal, respects reduced motion
    Seo.jsx         per-page title, description and canonical link
    ui.jsx          shared pieces: cards, chips, portraits, rows, CTA band
  pages/            one file per route group
  styles/global.css design tokens and all styling
index.html          meta tags, Open Graph, JSON-LD organisation schema
vercel.json         SPA rewrite, caching, security headers
```

Pages other than the homepage are code-split and load on navigation. First paint is about 73 kB
of JavaScript gzipped, most of it React itself.

---

## 9. Design system

Every colour is sampled from the MedAtlas logo:

| Token | Value | Role |
| --- | --- | --- |
| `--brand` | `#050254` | The indigo-navy the logo sits on. Masthead, hero, footer. |
| `--brand-deep` | `#030132` | Footer, depth |
| `--cyan` | `#2bb8c8` | The logo's teal network. Accents and primary action. |
| `--cyan-bright` | `#57d9e0` | Cyan on navy |
| `--cyan-ink` | `#0d7584` | Cyan readable on white |
| `--amber` | `#e7ad3e` | From the brain's warm hemisphere. Status only. |
| `--coral` | `#c9473f` | From the brain's warm hemisphere. Errors and required markers. |

Typography: **Manrope** for headings and interface, matching the heavy geometric wordmark in the
logo; **Inter** for body text; **Newsreader** for publication titles and journal names, which
gives the repository its editorial character.

The recurring polygonal node field behind every brand-coloured surface is drawn in code
(`NetworkField` in `src/components/Brand.jsx`), echoing the right hemisphere of the logo. It is
deterministic, so it renders identically on every load.

---

## 10. Accessibility and performance

- Skip link, semantic landmarks, visible focus styling throughout.
- Every form control labelled; errors announced with `role="alert"`.
- Single-column reflow at phone width, no horizontal scrolling.
- Animation suppressed under `prefers-reduced-motion`.
- Images carry alt text; decorative graphics are `aria-hidden`.
- Hashed assets with long cache headers; code-split routes.
- Per-page titles, meta descriptions, canonical URLs, Open Graph tags, `sitemap.xml`,
  `robots.txt` and JSON-LD organisation schema.

The accessibility statement at `/accessibility` lists known limitations honestly. The site has
not been independently audited, and it does not claim formal WCAG conformance.

---

## 11. What still needs you before launch

1. **Author lists.** Every publication record has an empty `authors` field; the source document
   listed titles and links only.
2. **Two publication records** named a journal with no link. They display as "status to confirm"
   until you set their real status.
3. **Three records** have no journal name in the source (one PubMed entry, two NABEA
   publications). Add the journal and year.
4. **Social links** in `src/data/site.js` are empty, so they are not rendered.
5. **Founding year** is `null` and no timeline is shown, because none was supplied.
6. **Legal pages** are drafting templates and carry a visible review notice. Have them checked,
   then set `underReview: false` in `src/data/legal.js`.
7. **Photographs** for the three co-founders.
8. **Projects, conferences and news** are empty by design. Add real entries when they exist.

Nothing on the site invents a date, a partnership, a credential or a researcher. Where
information was missing, the page says so.
