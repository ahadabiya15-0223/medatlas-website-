/* ============================================================
   SITE CONFIGURATION
   Organisation identity, navigation, contact details.
   Edit here and it changes across every page.
   ============================================================ */

export const site = {
  name: 'MedAtlas',
  sub: 'Research Network',
  tagline: 'International Medical Research Network',

  // Not published anywhere until you confirm it. Set a year to show it.
  foundedYear: null,

  mission:
    'MedAtlas is an international medical research collective connecting medical students, clinicians, academics and researchers across geographical and institutional boundaries.',

  purpose:
    'We exist to facilitate scientific collaboration, encourage interdisciplinary research, advance evidence-based medicine and contribute to the global medical literature.',

  contact: {
    email: 'Medatlas1521@gmail.com',
    location: 'India · Türkiye · distributed internationally',
    responseTime: 'We aim to answer every enquiry within five working days.',
  },

  social: [
    { label: 'LinkedIn', href: '', note: 'Add the MedAtlas company page URL' },
    { label: 'Instagram', href: '', note: 'Add the MedAtlas handle' },
    { label: 'ResearchGate', href: '', note: 'Add the MedAtlas profile URL' },
  ],

  /* POST target for every form on the site. Set VITE_FORM_ENDPOINT in .env
     (Formspree, a Vercel function, your own API). Empty means preview mode:
     forms validate, log the payload and confirm, but send nothing. */
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};

/* Primary navigation. `children` renders a dropdown on desktop and a
   grouped section in the mobile drawer. */
export const nav = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About MedAtlas', to: '/about', note: 'Who we are, what we stand for' },
      { label: 'Founders and leadership', to: '/leadership', note: 'The people who run the network' },
      { label: 'Frequently asked questions', to: '/faq', note: 'Membership, research, collaboration' },
    ],
  },
  {
    label: 'Research',
    to: '/research-divisions',
    children: [
      { label: 'Research divisions', to: '/research-divisions', note: 'Seven areas of work' },
      { label: 'Research projects', to: '/projects', note: 'Ongoing, completed and planned' },
      { label: 'Education and resources', to: '/education', note: 'Methodology and research skills' },
    ],
  },
  { label: 'Publications', to: '/publications' },
  { label: 'Network', to: '/network' },
  {
    label: 'Collaborate',
    to: '/collaborations',
    children: [
      { label: 'Global collaborations', to: '/collaborations', note: 'How we work with others' },
      { label: 'Partner with us', to: '/partners', note: 'For institutions and organisations' },
      { label: 'Conferences', to: '/conferences', note: 'Abstracts and presentations' },
    ],
  },
  { label: 'News', to: '/news' },
  { label: 'Join us', to: '/join' },
];

export const legalNav = [
  { label: 'Privacy policy', to: '/privacy-policy' },
  { label: 'Terms of use', to: '/terms' },
  { label: 'Cookie policy', to: '/cookies' },
  { label: 'Accessibility', to: '/accessibility' },
];

/* Values and objectives. Written from the brief, not invented credentials. */
export const values = [
  {
    title: 'Scientific integrity first',
    body: 'Protocols before results. Methods are agreed and registered in advance, limitations are stated plainly, and nothing is reported as more certain than the evidence allows.',
  },
  {
    title: 'Collaboration without borders',
    body: 'Where a researcher is based should not determine whether they can contribute. The network is built so that a student in one country and a clinician in another can work on the same manuscript.',
  },
  {
    title: 'Interdisciplinary by design',
    body: 'The questions we find most interesting sit between specialties. Cardiology meets neurology, oncology meets pharmacology, and the divisions are structured to make those crossings easy.',
  },
  {
    title: 'Credit where it is earned',
    body: 'Authorship follows contribution. Roles are agreed at the start of a project and recorded against recognised contributorship criteria.',
  },
  {
    title: 'Open to early-career researchers',
    body: 'Medical students and junior doctors work alongside experienced academics on real projects. Supervision is structured; credit is not reserved for seniority.',
  },
  {
    title: 'Transparency about what we are',
    body: 'We publish what is verified and label what is not. No invented partnerships, no borrowed institutional authority, no claims the record does not support.',
  },
];

export const objectives = [
  'Build an international, interdisciplinary research community spanning medical students, clinicians and academics.',
  'Produce rigorous evidence synthesis: systematic reviews, meta-analyses and scoping reviews that meet current reporting standards.',
  'Support original and translational research across the network’s divisions.',
  'Give early-career researchers supervised, substantive roles on publishable work.',
  'Develop and share research methodology resources openly.',
  'Establish durable academic relationships with universities, hospitals and research groups internationally.',
];
