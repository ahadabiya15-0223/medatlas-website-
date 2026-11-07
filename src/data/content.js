/* ============================================================
   REMAINING CONTENT COLLECTIONS
   Projects, conferences, news, education resources, FAQ.

   Projects, conferences and news ship EMPTY on purpose: nothing
   verified was supplied for them, and the site shows a designed
   empty state rather than invented entries. Each array below has
   a filled-in template in a comment. Uncomment, edit, done.
   ============================================================ */

/* ------------------------------------------------------------
   RESEARCH PROJECTS  →  /projects and /projects/<id>

   {
     id: 'project-slug',
     title: 'Project title',
     division: 'cardiovascular-medicine',
     category: 'Systematic review',      // see projectCategories
     status: 'Ongoing',                  // see projectStatuses
     summary: 'One or two sentences for the card.',
     background: 'Why this question matters.',
     question: 'The research question in one sentence.',
     objectives: ['Objective one', 'Objective two'],
     methodology: 'Search strategy, screening, extraction, appraisal.',
     design: 'PRISMA-compliant systematic review',
     registration: 'PROSPERO CRD4202XXXXXXX',
     team: ['abiya-ahad'],              // slugs from people.js
     collaborators: [],                 // only verified ones
     publications: [],                  // ids from publications.js
   },
   ------------------------------------------------------------ */
export const projectCategories = [
  'Systematic review',
  'Meta-analysis',
  'Scoping review',
  'Original research',
  'Translational research',
  'Collaborative research',
];

export const projectStatuses = [
  'Planned',
  'Protocol registered',
  'Ongoing',
  'In analysis',
  'Under review',
  'Completed',
];

export const projects = [];

/* ------------------------------------------------------------
   CONFERENCES  →  /conferences

   {
     id: 'conference-slug',
     conference: 'Conference name',
     organiser: 'Organising society',
     location: 'City, Country',
     year: 2027,
     abstractTitle: 'Abstract title',
     presenters: ['abiya-ahad'],
     presentationType: 'Oral presentation',   // or Poster presentation
     acceptanceStatus: 'Accepted',            // Accepted / Submitted / Presented
     link: '',
   },
   ------------------------------------------------------------ */
export const conferences = [
  {
    id: 'eapci-2027-udmi-reclassification',
    conference: 'EuroPCR / EAPCI 2027',
    organiser: 'European Association of Percutaneous Cardiovascular Interventions, ESC',
    location: '',
    year: 2027,
    abstractTitle:
      'Fifth universal definition of myocardial infarction: projected fall in infarct diagnoses and rise in coronary angiography and imaging demand',
    presenters: ['abiya-ahad'],
    presentationType: 'Moderated poster presentation',
    acceptanceStatus: 'Accepted',
    reference: 'Abstract 7118',
    link: '',
  },
  {
    id: 'eapci-2027-calcified-nodule',
    conference: 'EuroPCR / EAPCI 2027',
    organiser: 'European Association of Percutaneous Cardiovascular Interventions, ESC',
    location: '',
    year: 2027,
    abstractTitle:
      'Failure after PCI of a calcified nodule is device-independent and driven by in-stent nodule recurrence: a systematic review and pooled analysis of 871 lesions',
    presenters: ['abiya-ahad'],
    presentationType: 'Poster presentation',
    acceptanceStatus: 'Accepted',
    reference: 'Abstract 7114',
    link: '',
  },
  {
    id: 'eapci-2027-aortic-stenosis-rmst',
    conference: 'EuroPCR / EAPCI 2027',
    organiser: 'European Association of Percutaneous Cardiovascular Interventions, ESC',
    location: '',
    year: 2027,
    abstractTitle:
      'Restricted mean survival time analysis of early intervention versus surveillance in asymptomatic severe aortic stenosis: no demonstrable time-to-benefit within five years',
    presenters: ['abiya-ahad'],
    presentationType: 'Moderated poster presentation',
    acceptanceStatus: 'Accepted',
    reference: 'Abstract 7082',
    link: '',
  },
];

/* ------------------------------------------------------------
   NEWS AND INSIGHTS  →  /news and /news/<id>

   {
     id: 'article-slug',
     headline: 'Headline',
     author: 'abiya-ahad',          // slug, or a plain name string
     date: '2026-11-07',
     category: 'Publication announcement',
     excerpt: 'One or two sentences.',
     body: ['Paragraph one.', 'Paragraph two.'],
     related: [],                   // other article ids
   },
   ------------------------------------------------------------ */
export const newsCategories = [
  'Announcement',
  'Research highlight',
  'Publication announcement',
  'Conference update',
  'Member achievement',
  'Scientific perspective',
  'Collaboration announcement',
];

export const news = [
  {
    id: 'adc-press-release-caffeine-review',
    headline:
      'BMJ selects the MedAtlas paediatric caffeine review for a press release',
    author: 'abiya-ahad',
    date: '2026-11-08',
    category: 'Publication announcement',
    excerpt:
      'Archives of Disease in Childhood will issue a press release for the network’s systematic review of caffeine and energy drinks in children and young people.',
    body: [
      'BMJ has confirmed that the MedAtlas systematic review of caffeine and energy drinks and the cardiovascular system in children and young people has been selected for a press release by Archives of Disease in Childhood.',
      'BMJ press releases are distributed to thousands of journalists across media platforms internationally. The release is drafted by the BMJ media relations team, approved by the journal editor, and sent to authors for review roughly 24 to 48 hours before it is issued.',
      'The article will post online when the press release embargo lifts. Because of the number of journals in the BMJ portfolio, selection for a press release can add up to four weeks to the production schedule, so the publication date is not yet fixed.',
      'Until the embargo lifts we are not discussing the contents of the paper with the media. Any institution wishing to issue its own release will need to coordinate with the BMJ media relations team and respect the embargo date.',
      'The review is listed in the MedAtlas publication repository and the record will be updated with the DOI and the full citation as soon as the article is live.',
    ],
    related: [],
  },
];

/* ------------------------------------------------------------
   EDUCATION AND RESEARCH RESOURCES  →  /education and /education/<id>

   `status` is 'available' or 'in-preparation'. Resources marked
   in-preparation show their outline and say so plainly rather
   than pretending to be finished guides.
   ------------------------------------------------------------ */
export const resources = [
  {
    id: 'research-methodology',
    title: 'Research methodology',
    status: 'in-preparation',
    summary:
      'How a question becomes a protocol: framing, feasibility, choosing a study design, and deciding what would count as an answer.',
    outline: [
      'Turning a clinical observation into an answerable question',
      'PICO, PECO and when neither fits',
      'Choosing between synthesis and primary research',
      'Writing a protocol you can defend to a reviewer',
    ],
  },
  {
    id: 'systematic-review-methodology',
    title: 'Systematic review methodology',
    status: 'in-preparation',
    summary:
      'The full sequence: protocol registration, search architecture, screening, extraction, risk of bias and reporting against PRISMA.',
    outline: [
      'Registering on PROSPERO before the first search',
      'Building and documenting a reproducible search string',
      'Dual screening and resolving disagreement',
      'Extraction forms that survive contact with the literature',
      'Risk of bias: choosing the right tool for the design',
      'Reporting to PRISMA 2020',
    ],
  },
  {
    id: 'meta-analysis',
    title: 'Meta-analysis',
    status: 'in-preparation',
    summary:
      'When pooling is justified, which model to use, how to read heterogeneity honestly, and what subgroup analysis can and cannot tell you.',
    outline: [
      'Deciding whether to pool at all',
      'Fixed versus random effects, and what each assumes',
      'Heterogeneity beyond the I² number',
      'Subgroup analysis, meta-regression and their limits',
      'Publication bias: funnel plots and what they miss',
    ],
  },
  {
    id: 'statistical-analysis',
    title: 'Statistical analysis',
    status: 'in-preparation',
    summary:
      'Applied statistics for clinical research: effect measures, confidence intervals, model choice and the errors that reach print most often.',
    outline: [
      'Effect measures and when each is appropriate',
      'Confidence intervals as the primary result',
      'Regression model selection and diagnostics',
      'Handling missing data without pretending it is absent',
    ],
  },
  {
    id: 'biostatistics',
    title: 'Biostatistics',
    status: 'in-preparation',
    summary:
      'The statistical foundations the rest of the network depends on, taught from examples in the published literature.',
    outline: [
      'Distributions, estimation and inference',
      'Survival analysis and time-to-event data',
      'Diagnostic accuracy and agreement',
      'Sample size and power, calculated before the study',
    ],
  },
  {
    id: 'epidemiology',
    title: 'Epidemiology',
    status: 'in-preparation',
    summary:
      'Study designs, bias, confounding and causal reasoning in observational research.',
    outline: [
      'Cohort, case-control and cross-sectional designs',
      'Selection bias, information bias and confounding',
      'Causal diagrams as a planning tool',
      'Target trial emulation when randomisation is impossible',
    ],
  },
  {
    id: 'scientific-writing',
    title: 'Scientific writing',
    status: 'in-preparation',
    summary:
      'Writing a manuscript a reviewer can follow: structure, argument, figures, and the common reasons papers are rejected before review.',
    outline: [
      'Structuring IMRaD so the argument carries',
      'Writing an abstract that reports rather than advertises',
      'Figures and tables that do work the text cannot',
      'Responding to peer review without conceding the point',
    ],
  },
  {
    id: 'publication-ethics',
    title: 'Publication ethics',
    status: 'in-preparation',
    summary:
      'Authorship criteria, contributorship, conflicts of interest, duplicate submission and predatory publishing.',
    outline: [
      'ICMJE authorship criteria and CRediT roles',
      'Agreeing author order before the work starts',
      'Declaring conflicts and funding',
      'Recognising predatory journals and fake metrics',
    ],
  },
  {
    id: 'literature-searching',
    title: 'Literature searching',
    status: 'in-preparation',
    summary:
      'Database selection, controlled vocabulary, search string construction and documenting a search so someone else can rerun it.',
    outline: [
      'Choosing databases for the question',
      'MeSH, Emtree and free-text terms together',
      'Boolean logic, proximity and filters',
      'Grey literature and citation chasing',
      'Recording the search for the PRISMA flow diagram',
    ],
  },
  {
    id: 'research-software',
    title: 'Research software and tools',
    status: 'in-preparation',
    summary:
      'The software the network uses day to day for screening, extraction, analysis and reference management.',
    outline: [
      'Screening and deduplication tools',
      'Extraction and data management',
      'R and other analysis environments',
      'Reference managers and citation hygiene',
    ],
  },
  {
    id: 'evidence-based-medicine',
    title: 'Evidence-based medicine',
    status: 'in-preparation',
    summary:
      'Appraising evidence and grading certainty, including GRADE and how to apply it without reducing it to a checklist.',
    outline: [
      'Critical appraisal by study design',
      'The five GRADE domains that lower certainty',
      'The three that raise it, and when they apply',
      'Writing a summary of findings table',
    ],
  },
];

export const findResource = (id) => resources.find((r) => r.id === id);

/* ------------------------------------------------------------
   FREQUENTLY ASKED QUESTIONS  →  /faq
   ------------------------------------------------------------ */
export const faqs = [
  {
    group: 'About MedAtlas',
    items: [
      {
        q: 'What is MedAtlas?',
        a: 'MedAtlas is an international medical research collective. It connects medical students, clinicians, academics and researchers across institutions and countries so that they can plan, conduct and publish research together. It is not a university, a course provider or a commercial company.',
      },
      {
        q: 'Is MedAtlas a registered organisation?',
        a: 'MedAtlas currently operates as a research collective. Details of its legal status will be published here once they are formalised. We do not claim accreditation, affiliation or institutional standing that we do not hold.',
      },
      {
        q: 'Who runs MedAtlas?',
        a: 'The network was founded by three co-founders working across India and Türkiye. Their profiles, affiliations and research interests are on the leadership page.',
      },
    ],
  },
  {
    group: 'Membership',
    items: [
      {
        q: 'Who can join?',
        a: 'Medical students, junior doctors, clinicians, academics and researchers in related sciences. There is no requirement to be at a research-active institution and no requirement to have published before.',
      },
      {
        q: 'Is there a limit on membership?',
        a: 'No. The network is designed to grow. Membership is not capped and new members are added as applications are reviewed.',
      },
      {
        q: 'Is there a fee?',
        a: 'No fee is charged for membership.',
      },
      {
        q: 'How are applications reviewed?',
        a: 'Applications are read by the co-founders. We look at your stated research interests, the division you want to work in and the time you can realistically commit. Submitting an application does not guarantee acceptance.',
      },
      {
        q: 'What is expected of a member?',
        a: 'Members contribute to projects they take on: meeting agreed deadlines, doing the screening or writing they committed to, and communicating when circumstances change. Contribution determines authorship.',
      },
    ],
  },
  {
    group: 'Research and publication',
    items: [
      {
        q: 'Will I be an author on a paper?',
        a: 'Authorship follows contribution, assessed against ICMJE criteria. Roles and expected author order are discussed at the start of a project. Members who complete their agreed contribution are named; members who do not are not.',
      },
      {
        q: 'Can I propose my own project?',
        a: 'Yes. Members are encouraged to bring questions. Proposals are discussed with the relevant division before a protocol is written.',
      },
      {
        q: 'Do I need prior research experience?',
        a: 'No. Several of the network’s members began with no publications. Projects are supervised, and the education section is being built to support members learning methodology as they work.',
      },
    ],
  },
  {
    group: 'Collaboration and partnership',
    items: [
      {
        q: 'How can an institution collaborate with MedAtlas?',
        a: 'Through the partnership enquiry form. We will respond with what a collaboration would involve on both sides, including data sharing, authorship and the scope of the work.',
      },
      {
        q: 'Do you work with industry?',
        a: 'We will consider enquiries from pharmaceutical and biotechnology organisations. Any such relationship would be declared on the resulting publications, and would not involve editorial control over findings.',
      },
    ],
  },
];
