/* ============================================================
   LEGAL AND POLICY PAGES
   ------------------------------------------------------------
   These are drafting templates written for MedAtlas, not legal
   advice. Every page carries a visible review notice. Have a
   qualified adviser check them before launch, then set
   `underReview: false` to remove the notice.
   ============================================================ */

const lastUpdated = '7 November 2026';

export const legalPages = {
  'privacy-policy': {
    title: 'Privacy policy',
    lede: 'How MedAtlas collects, uses and protects personal information submitted through this website.',
    underReview: true,
    lastUpdated,
    sections: [
      {
        h: 'Who we are',
        p: [
          'MedAtlas is an international medical research collective. For questions about this policy or about the information we hold, write to the address on our contact page.',
        ],
      },
      {
        h: 'Information we collect',
        p: [
          'We collect information you give us directly through the forms on this website. Depending on the form, that may include your name, email address, country, institution, academic qualification, current role, research experience and interests, professional profile links, an uploaded CV, and the content of your message.',
          'We do not collect special category data, and we ask that you do not include patient-identifiable information or clinical data in any form submission.',
        ],
      },
      {
        h: 'How we use it',
        p: [
          'Membership applications are read to assess suitability and to match applicants to a research division. Partnership and collaboration enquiries are used to respond to the enquiry and to scope the proposed work. General enquiries are used to answer you.',
          'We do not sell personal information, and we do not use it for advertising.',
        ],
      },
      {
        h: 'Legal basis',
        p: [
          'Where the General Data Protection Regulation applies, we process this information on the basis of your consent, given when you submit a form, and on the basis of our legitimate interest in operating a research network.',
        ],
      },
      {
        h: 'Retention',
        p: [
          'Applications from members who join are retained for as long as the person remains in the network. Unsuccessful applications and general enquiries are retained for a limited period and then deleted. The specific retention periods will be stated here once confirmed.',
        ],
      },
      {
        h: 'Sharing',
        p: [
          'Information submitted through this site is accessible to the co-founders and, where relevant, to the head of the division you have applied to. We use third-party services to receive form submissions and to host this website; those providers process data on our instructions.',
          'Member profiles published in the researcher directory contain only information the member has agreed to publish.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You may ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it. Write to the address on the contact page and we will respond within one month.',
        ],
      },
      {
        h: 'Cookies',
        p: [
          'See the cookie policy for what this website stores in your browser.',
        ],
      },
      {
        h: 'Changes',
        p: [
          'If this policy changes we will update the date at the top of this page.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of use',
    lede: 'The terms on which this website is made available.',
    underReview: true,
    lastUpdated,
    sections: [
      {
        h: 'Using this website',
        p: [
          'This website is provided for information about MedAtlas and its research. By using it you agree to these terms. If you do not agree, please do not use the site.',
        ],
      },
      {
        h: 'Not medical advice',
        p: [
          'Research summaries, publication listings and educational material on this site are intended for a professional and academic readership. Nothing here is medical advice and nothing here should be used to guide the care of an individual patient. Clinical decisions must rest on the full published article, current guidelines and clinical judgement.',
        ],
      },
      {
        h: 'Intellectual property',
        p: [
          'The MedAtlas name, logo and the original text and design of this site belong to MedAtlas. You may quote and link to material here with attribution.',
          'Published articles listed in the publications section are the copyright of their publishers. We link to the version of record; we do not host full texts unless they are open access and the licence permits it.',
        ],
      },
      {
        h: 'Third-party links',
        p: [
          'This site links to journals, databases and other external sites. We do not control those sites and are not responsible for their content or their handling of your data.',
        ],
      },
      {
        h: 'Accuracy',
        p: [
          'We take care that information here is accurate at the time of publication. Research status changes, and publication records are updated as articles move through peer review. If you spot an error, tell us and we will correct it.',
        ],
      },
      {
        h: 'Limitation of liability',
        p: [
          'To the extent permitted by law, MedAtlas is not liable for loss arising from use of this website or reliance on its content.',
        ],
      },
      {
        h: 'Governing law',
        p: [
          'The governing law and jurisdiction for these terms will be stated here once confirmed.',
        ],
      },
    ],
  },

  cookies: {
    title: 'Cookie policy',
    lede: 'What this website stores in your browser, and why.',
    underReview: true,
    lastUpdated,
    sections: [
      {
        h: 'What we currently use',
        p: [
          'This website does not use advertising cookies, tracking pixels or third-party analytics. It does not build a profile of you, and it does not share browsing data with advertisers.',
          'The site may store small amounts of data in your browser to remember interface preferences, such as a filter you selected. This stays on your device and is never sent to us.',
        ],
      },
      {
        h: 'Fonts and hosting',
        p: [
          'Typefaces are loaded from Google Fonts, which receives a request from your browser including your IP address. If this matters to you, the typefaces can be self-hosted instead; the site is built so that this is a configuration change.',
        ],
      },
      {
        h: 'If we add analytics',
        p: [
          'If MedAtlas later introduces analytics or any non-essential cookie, a consent banner will be added, consent will be requested before those cookies are set, and this page will be updated to list them.',
        ],
      },
      {
        h: 'Controlling cookies',
        p: [
          'You can clear or block site data through your browser settings. Nothing on this site requires cookies to function.',
        ],
      },
    ],
  },

  accessibility: {
    title: 'Accessibility statement',
    lede: 'What we have done to make this site usable, what we know is imperfect, and how to tell us.',
    underReview: false,
    lastUpdated,
    sections: [
      {
        h: 'Our approach',
        p: [
          'This website was built to be usable with a keyboard, with a screen reader and at a range of text sizes. We aim at the Web Content Accessibility Guidelines version 2.1 at level AA. We have not been independently audited, so we do not claim formal conformance.',
        ],
      },
      {
        h: 'What is in place',
        p: [],
        list: [
          'A skip link to the main content on every page.',
          'Semantic headings, landmarks and lists.',
          'Visible focus styling on every interactive element.',
          'Form fields with associated labels; errors announced to assistive technology.',
          'Text that reflows to a single column at small widths with no horizontal scrolling.',
          'Animation suppressed for visitors whose system requests reduced motion.',
          'Colour contrast checked against the brand palette for body and interface text.',
        ],
      },
      {
        h: 'Known limitations',
        p: [],
        list: [
          'The site has not yet been tested with every combination of screen reader and browser.',
          'Some linked journal articles are on publisher sites whose accessibility we do not control.',
          'Documents supplied by third parties, such as PDFs of published articles, may not be tagged for accessibility.',
        ],
      },
      {
        h: 'Tell us',
        p: [
          'If any part of this site is difficult to use, write to us through the contact page and describe what happened. We will respond and fix what we can.',
        ],
      },
    ],
  },
};

export const findLegal = (slug) => legalPages[slug];
