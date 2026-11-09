/* ============================================================
   CONTENT COLLECTIONS
   Conferences, news, education resources, certificates,
   collaborators and the FAQ.
   ============================================================ */

/* ------------------------------------------------------------
   CONFERENCES  →  /conferences
   Add an object per accepted abstract or presentation.
   ------------------------------------------------------------ */
export const conferences = [
  {
    id: 'eapci-2027-udmi-reclassification',
    conference: 'EAPCI 2027',
    organiser: 'European Association of Percutaneous Cardiovascular Interventions, ESC',
    location: 'Milan, Italy',
    dates: '18–20 February 2027',
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
    conference: 'EAPCI 2027',
    organiser: 'European Association of Percutaneous Cardiovascular Interventions, ESC',
    location: 'Milan, Italy',
    dates: '18–20 February 2027',
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
    conference: 'EAPCI 2027',
    organiser: 'European Association of Percutaneous Cardiovascular Interventions, ESC',
    location: 'Milan, Italy',
    dates: '18–20 February 2027',
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

   `video` is optional. Put the file in public/media/ and give the
   path relative to the site root, plus a poster image.
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
    id: 'eapci-2027-three-abstracts-accepted',
    headline: 'Three MedAtlas abstracts accepted at EAPCI 2027 in Milan',
    author: 'abiya-ahad',
    date: '2026-11-09',
    category: 'Conference update',
    tone: 'crimson',
    excerpt:
      'All three abstracts submitted to the European Association of Percutaneous Cardiovascular Interventions have been accepted for presentation in Milan this February.',
    video: {
      src: 'media/eapci-2027-announcement.mp4',
      poster: 'media/eapci-2027-poster.jpg',
      caption: 'The MedAtlas announcement reel.',
    },
    body: [
      'Three MedAtlas abstracts have been accepted for presentation at EAPCI 2027, the congress of the European Association of Percutaneous Cardiovascular Interventions, held in Milan from 18 to 20 February 2027.',
      'Two were accepted as moderated poster presentations: a projection of how the Fifth Universal Definition of Myocardial Infarction will change infarct diagnosis rates and downstream demand for coronary angiography and imaging, and a restricted mean survival time analysis of early intervention versus surveillance in asymptomatic severe aortic stenosis, which found no demonstrable time-to-benefit within five years.',
      'The third, accepted as a poster, is a systematic review and pooled analysis of 871 lesions showing that failure after percutaneous coronary intervention of a calcified nodule is device-independent and driven by in-stent nodule recurrence.',
      'All three will be presented by Abiya Ahad. Full abstract records are listed on the conferences page, and members who would like to attend or help present can register their interest there.',
    ],
    related: ['adc-press-release-caffeine-review'],
  },
  {
    id: 'adc-press-release-caffeine-review',
    headline: 'BMJ selects the MedAtlas paediatric caffeine review for a press release',
    author: 'abiya-ahad',
    date: '2026-11-08',
    category: 'Publication announcement',
    tone: 'amber',
    excerpt:
      'Archives of Disease in Childhood will issue a press release for the network’s systematic review of caffeine and energy drinks in children and young people.',
    body: [
      'BMJ has confirmed that the MedAtlas systematic review of caffeine and energy drinks and the cardiovascular system in children and young people has been selected for a press release by Archives of Disease in Childhood.',
      'BMJ press releases are distributed to thousands of journalists across media platforms internationally. The release is drafted by the BMJ media relations team, approved by the journal editor, and sent to authors for review roughly 24 to 48 hours before it is issued.',
      'The article will post online when the press release embargo lifts. Because of the number of journals in the BMJ portfolio, selection for a press release can add up to four weeks to the production schedule, so the publication date is not yet fixed.',
      'Until the embargo lifts we are not discussing the contents of the paper with the media. Any institution wishing to issue its own release will need to coordinate with the BMJ media relations team and respect the embargo date.',
      'The review is listed in the MedAtlas publication repository and the record will be updated with the DOI and the full citation as soon as the article is live.',
    ],
    related: ['eapci-2027-three-abstracts-accepted'],
  },
];

/* ------------------------------------------------------------
   INTERNATIONAL COLLABORATORS  →  /collaborations

   Researchers outside MedAtlas who the network works with.
   Add a name, their institution and the country.
   ------------------------------------------------------------ */
export const collaborators = [
  {
    region: 'Brazil',
    tone: 'amber',
    people: [
      { name: 'Pedro Ian Gualberto', institution: 'Federal University of Juiz de Fora' },
      { name: 'Luis F Deresz', institution: 'Federal University of Juiz de Fora' },
      { name: 'Gustavo Waclawovsky', institution: 'Instituto de Cardiologia de Porto Alegre' },
    ],
  },
  {
    region: 'Germany',
    tone: 'crimson',
    people: [
      { name: 'Ute Seeland', institution: 'University of Magdeburg' },
      { name: 'Felix Oberhoffer', institution: 'LMU Munich' },
      { name: 'Nikolaus A Haas', institution: 'LMU Munich' },
      { name: 'Meike Schrader', institution: 'LMU Munich' },
    ],
  },
  {
    region: 'Sweden and Australia',
    tone: 'cyan',
    people: [
      {
        name: 'Martin Ugander',
        institution: 'Karolinska Institutet and the University of Sydney',
      },
    ],
  },
  {
    region: 'Italy',
    tone: 'teal',
    people: [
      { name: 'Pierfrancesco Siena', institution: 'SISSA, Trieste' },
      { name: 'Gianluigi Rozza', institution: 'SISSA, Trieste' },
    ],
  },
];

export const collaboratorCount = collaborators.reduce((n, g) => n + g.people.length, 0);

/* ------------------------------------------------------------
   EDUCATION AND RESEARCH RESOURCES  →  /education
   ------------------------------------------------------------ */
export const resources = [
  {
    id: 'research-methodology',
    title: 'Research methodology',
    tone: 'crimson',
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
    tone: 'cyan',
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
    tone: 'amber',
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
    tone: 'plum',
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
    tone: 'teal',
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
    tone: 'steel',
    summary: 'Study designs, bias, confounding and causal reasoning in observational research.',
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
    tone: 'coral',
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
    tone: 'rose',
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
    tone: 'cyan',
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
    tone: 'amber',
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
    tone: 'crimson',
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
   CERTIFICATES  →  /certificates

   Training, courses and credentials held by members.

   HOW TO ADD ONE
   • Append an object below.
   • `holder` is a person's slug from people.js, or a plain name.
   • `file` is the image in public/certificates/. Leave it empty and
     the entry still lists, just without the image and view link.
   • `tone` is any hue from global.css.

   A NOTE ON WHAT IS PUBLISHED
   Four of these images were redacted before publication. The two
   American Heart Association cards had their eCard code and QR code
   removed, because those let anyone look up or claim the card. The
   two Youthpass documents had the holder's date of birth removed.
   Everything else is reproduced as issued.
   ------------------------------------------------------------ */
export const certificates = [
  // ---------- Abiya Ahad ----------
  {
    id: 'abiya-bls',
    title: 'Basic Life Support (BLS) Provider',
    issuer: 'American Heart Association',
    detail: 'Issued 12 July 2025, valid to July 2027. Learnet Skills Limited, Noida.',
    holder: 'abiya-ahad',
    year: 2025,
    category: 'Clinical certification',
    tone: 'crimson',
    file: 'certificates/abiya-bls.jpg',
  },
  {
    id: 'abiya-acls',
    title: 'Advanced Cardiovascular Life Support (ACLS) Provider',
    issuer: 'American Heart Association',
    detail: 'Issued 14 July 2025, valid to July 2027. Learnet Skills Limited, Noida.',
    holder: 'abiya-ahad',
    year: 2025,
    category: 'Clinical certification',
    tone: 'crimson',
    file: 'certificates/abiya-acls.jpg',
  },
  {
    id: 'abiya-nih-clinical-research',
    title: 'Introduction to the Principles and Practice of Clinical Research',
    issuer: 'National Institutes of Health',
    detail: 'Office of Clinical Research Education and Collaboration Outreach, 2025–2026.',
    holder: 'abiya-ahad',
    year: 2026,
    category: 'Research training',
    tone: 'teal',
    file: 'certificates/abiya-nih-clinical-research.jpg',
  },
  {
    id: 'abiya-nih-clinical-pharmacology',
    title: 'Principles of Clinical Pharmacology',
    issuer: 'National Institutes of Health',
    detail: 'Office of Clinical Research Education and Collaboration Outreach, 2025–2026.',
    holder: 'abiya-ahad',
    year: 2026,
    category: 'Research training',
    tone: 'teal',
    file: 'certificates/abiya-nih-clinical-pharmacology.jpg',
  },
  {
    id: 'abiya-sinai-transgender-medicine',
    title: 'Transgender Medicine for General Medical Providers',
    issuer: 'Icahn School of Medicine at Mount Sinai',
    detail: 'Delivered through Coursera, October 2026.',
    holder: 'abiya-ahad',
    year: 2026,
    category: 'Online course',
    tone: 'plum',
    file: 'certificates/abiya-sinai-transgender-medicine.jpg',
  },
  {
    id: 'abiya-nasm-science-diet-exercise',
    title: 'Science of Diet and Exercise Specialization',
    issuer: 'National Academy of Sports Medicine',
    detail: 'Three-course specialization delivered through Coursera, October 2026.',
    holder: 'abiya-ahad',
    year: 2026,
    category: 'Online course',
    tone: 'amber',
    file: 'certificates/abiya-nasm-science-diet-exercise.jpg',
  },
  {
    id: 'abiya-nasm-metabolic-makeover',
    title: 'Metabolic Makeover',
    issuer: 'National Academy of Sports Medicine',
    detail: 'Delivered through Coursera, October 2026.',
    holder: 'abiya-ahad',
    year: 2026,
    category: 'Online course',
    tone: 'amber',
    file: 'certificates/abiya-nasm-metabolic-makeover.jpg',
  },
  {
    id: 'abiya-nasm-fat-metabolism',
    title: 'Science of Fat Metabolism',
    issuer: 'National Academy of Sports Medicine',
    detail: 'Delivered through Coursera, October 2026.',
    holder: 'abiya-ahad',
    year: 2026,
    category: 'Online course',
    tone: 'amber',
    file: 'certificates/abiya-nasm-fat-metabolism.jpg',
  },
  {
    id: 'abiya-nasm-aligning-diet-exercise',
    title: 'Aligning Diet and Exercise',
    issuer: 'National Academy of Sports Medicine',
    detail: 'Delivered through Coursera, October 2026.',
    holder: 'abiya-ahad',
    year: 2026,
    category: 'Online course',
    tone: 'amber',
    file: 'certificates/abiya-nasm-aligning-diet-exercise.jpg',
  },
  {
    id: 'abiya-asr-soft-embalming',
    title: 'Workshop on Soft Embalming',
    issuer: 'Anatomical Society of Rajasthan',
    detail:
      'Department of Anatomy, RNT Medical College, Udaipur, 7 September 2024. Rajasthan Medical Council credit hours granted.',
    holder: 'abiya-ahad',
    year: 2024,
    category: 'Workshop',
    tone: 'coral',
    file: 'certificates/abiya-asr-soft-embalming.jpg',
  },
  {
    id: 'abiya-jgu-wellbeing',
    title: 'Emotional Well-being and Stress Management',
    issuer: 'O.P. Jindal Global University',
    detail: 'Jindal Institute of Behavioural Sciences, Sonipat, 12 August 2023.',
    holder: 'abiya-ahad',
    year: 2023,
    category: 'Workshop',
    tone: 'coral',
    file: 'certificates/abiya-jgu-wellbeing.jpg',
  },

  // ---------- Ghezal Dabiry ----------
  {
    id: 'ghezal-ehra-paths-af',
    title: 'EHRA-PATHS: systematic comorbidity management in atrial fibrillation',
    issuer: 'European Heart Rhythm Association, ESC',
    detail: 'EACCME accredited, 2 European CME credits. 18 August 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Continuing medical education',
    tone: 'cyan',
    file: 'certificates/ghezal-ehra-paths-af.jpg',
  },
  {
    id: 'ghezal-acc-diuretic-resistance',
    title:
      'Diuretic Resistance Risk and the Efficacy of Natriuresis-Guided Diuretic Therapy in Acute Heart Failure',
    issuer: 'American College of Cardiology Foundation',
    detail: 'Journal-based CME, post hoc analysis from the PUSH-AHF trial. 26 July 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Continuing medical education',
    tone: 'crimson',
    file: 'certificates/ghezal-acc-diuretic-resistance.jpg',
  },
  {
    id: 'ghezal-acc-troponin-gen6',
    title: 'High Sensitivity Cardiac Troponin T Gen6 Assay in Suspected Myocardial Infarction',
    issuer: 'American College of Cardiology Foundation',
    detail: 'Journal-based CME on diagnostic accuracy, cutoffs and clinical implications. 25 July 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Continuing medical education',
    tone: 'crimson',
    file: 'certificates/ghezal-acc-troponin-gen6.jpg',
  },
  {
    id: 'ghezal-stanford-antimicrobial',
    title: 'Antimicrobial Stewardship: Improving Clinical Outcomes by Optimization of Antibiotic Practices',
    issuer: 'Stanford University School of Medicine',
    detail: '7.00 AMA PRA Category 1 Credits. 18 August 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Continuing medical education',
    tone: 'steel',
    file: 'certificates/ghezal-stanford-antimicrobial.jpg',
  },
  {
    id: 'ghezal-stanford-migraine',
    title: 'An Evidence-Based Approach to the Diagnosis and Management of Migraines in Adults',
    issuer: 'Stanford University School of Medicine',
    detail: '1.50 AMA PRA Category 1 Credits. Primary care and general neurology setting. 22 August 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Continuing medical education',
    tone: 'steel',
    file: 'certificates/ghezal-stanford-migraine.jpg',
  },
  {
    id: 'ghezal-aha-peripartum-hypertension',
    title: 'Challenges of Hypertension in the Peripartum Period',
    issuer: 'American Heart Association',
    detail: 'Educational activity, 25 July 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Continuing medical education',
    tone: 'crimson',
    file: 'certificates/ghezal-aha-peripartum-hypertension.jpg',
  },
  {
    id: 'ghezal-aha-attr',
    title: 'Future Directions and Areas of Uncertainty for ATTR',
    issuer: 'American Heart Association',
    detail: 'Educational activity on transthyretin amyloidosis, 24 July 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Continuing medical education',
    tone: 'crimson',
    file: 'certificates/ghezal-aha-attr.jpg',
  },
  {
    id: 'ghezal-jhu-r-programming',
    title: 'R Programming',
    issuer: 'Johns Hopkins University',
    detail: 'Bloomberg School of Public Health, Department of Biostatistics. Coursera, October 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Online course',
    tone: 'teal',
    file: 'certificates/ghezal-jhu-r-programming.jpg',
  },
  {
    id: 'ghezal-michigan-python',
    title: 'Python Basics',
    issuer: 'University of Michigan',
    detail: 'Delivered through Coursera, October 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Online course',
    tone: 'teal',
    file: 'certificates/ghezal-michigan-python.jpg',
  },
  {
    id: 'ghezal-unicef-public-health-reporting',
    title: 'Public Health Reporting',
    issuer: 'UNICEF',
    detail: 'Delivered through the Agora platform, 25 July 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Professional development',
    tone: 'rose',
    file: 'certificates/ghezal-unicef-public-health-reporting.jpg',
  },
  {
    id: 'ghezal-unwomen-gender',
    title: 'I Know Gender 1-2-3',
    issuer: 'UN Women Training Centre',
    detail:
      'Gender concepts, international frameworks for gender equality, and promoting gender equality throughout the UN system. 18 August 2026.',
    holder: 'ghezal-dabiry',
    year: 2026,
    category: 'Professional development',
    tone: 'rose',
    file: 'certificates/ghezal-unwomen-gender.jpg',
  },
  {
    id: 'ghezal-intersect-entrepreneurship',
    title: 'Entrepreneurship Training Certificate',
    issuer: 'INTERSECT, METU Migration Research Centre',
    detail:
      'Inclusive Entrepreneurship: Bringing Together Refugee, Immigrant and Host Communities. November 2021.',
    holder: 'ghezal-dabiry',
    year: 2021,
    category: 'Professional development',
    tone: 'plum',
    file: 'certificates/ghezal-intersect-entrepreneurship.jpg',
  },
  {
    id: 'ghezal-youthpass-isave',
    title: 'Strategic Partnerships in the Youth Field',
    issuer: 'Youthpass, Erasmus+, European Commission',
    detail:
      'ISAVE project: Inclusive Self-Advocacy Education and Empowerment for Young Refugees and Asylum Seekers. Dublin, 2021–2023.',
    holder: 'ghezal-dabiry',
    year: 2023,
    category: 'Professional development',
    tone: 'plum',
    file: 'certificates/ghezal-youthpass-isave.jpg',
  },

  // ---------- Sultan Mujib Dabiry ----------
  {
    id: 'mujib-acc-middle-east-2024',
    title: 'ACC Middle East 2024',
    issuer: 'American College of Cardiology',
    detail: 'Certificate of participation, 16–18 October 2024.',
    holder: 'sultan-mujib-dabiry',
    year: 2024,
    category: 'Conference and symposium',
    tone: 'crimson',
    file: 'certificates/mujib-acc-middle-east-2024.jpg',
  },
  {
    id: 'mujib-netis-neuromodulation',
    title: '1st NeTIS Young Neuromodulators Congress',
    issuer: 'NeTIS and NÖROTEK AR-GE',
    detail: 'Participation certificate, 22–23 May 2021.',
    holder: 'sultan-mujib-dabiry',
    year: 2021,
    category: 'Conference and symposium',
    tone: 'cyan',
    file: 'certificates/mujib-netis-neuromodulation.jpg',
  },
  {
    id: 'mujib-covid-symposium',
    title: 'COVID-19 Symposium',
    issuer: 'Yüksek İhtisas and Ufuk Medical Students Associations',
    detail: 'Participation certificate, 27–28 November 2020.',
    holder: 'sultan-mujib-dabiry',
    year: 2020,
    category: 'Conference and symposium',
    tone: 'teal',
    file: 'certificates/mujib-covid-symposium.jpg',
  },
  {
    id: 'mujib-cquni-asthma',
    title: 'Asthma: An Introduction to Management',
    issuer: 'CQUniversity',
    detail: 'Verified digital badge, issued 29 October 2024.',
    holder: 'sultan-mujib-dabiry',
    year: 2024,
    category: 'Continuing medical education',
    tone: 'amber',
    file: 'certificates/mujib-cquni-asthma.jpg',
  },
  {
    id: 'mujib-intersect-entrepreneurship',
    title: 'Entrepreneurship Training Certificate',
    issuer: 'INTERSECT, METU Migration Research Centre',
    detail:
      'Inclusive Entrepreneurship: Bringing Together Refugee, Immigrant and Host Communities. November 2021.',
    holder: 'sultan-mujib-dabiry',
    year: 2021,
    category: 'Professional development',
    tone: 'plum',
    file: 'certificates/mujib-intersect-entrepreneurship.jpg',
  },
  {
    id: 'mujib-youthpass-isave',
    title: 'Strategic Partnerships in the Youth Field',
    issuer: 'Youthpass, Erasmus+, European Commission',
    detail:
      'ISAVE project: Inclusive Self-Advocacy Education and Empowerment for Young Refugees and Asylum Seekers. Dublin, 2021–2023.',
    holder: 'sultan-mujib-dabiry',
    year: 2023,
    category: 'Professional development',
    tone: 'plum',
    file: 'certificates/mujib-youthpass-isave.jpg',
  },
];

export const certificateCategories = [
  'Clinical certification',
  'Continuing medical education',
  'Research training',
  'Online course',
  'Conference and symposium',
  'Workshop',
  'Professional development',
  'MedAtlas module',
];


/* ------------------------------------------------------------
   FREQUENTLY ASKED QUESTIONS  →  /faq
   ------------------------------------------------------------ */
export const faqs = [
  {
    group: 'About MedAtlas',
    items: [
      {
        q: 'What is MedAtlas?',
        a: 'MedAtlas is an international medical research collective. It connects doctors, medical students, clinicians, academics and researchers across institutions and countries so that they can plan, conduct and publish research together. It is not a university or a commercial company.',
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
        a: 'Doctors, medical students, clinicians, academics and researchers in related sciences. There is no requirement to be at a research-active institution and no requirement to have published before.',
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
        a: 'No. Several of the network’s members began with no publications. Projects are supervised, and the education section supports members learning methodology as they work.',
      },
      {
        q: 'Can I present at a conference through MedAtlas?',
        a: 'Yes. Members can join abstract submissions and, where the work is accepted, take part in presenting it. Register your interest through the conferences page.',
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
