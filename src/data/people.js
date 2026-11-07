/* ============================================================
   PEOPLE — founders, leadership and the researcher directory
   ------------------------------------------------------------
   HOW TO EDIT
   • Every person needs a unique `slug`; it becomes their page URL
     (/leadership/<slug> or /network/<slug>).
   • `photo`: drop the image in public/people/ and write
     'people/filename.jpg'. Leave empty and the card shows a
     monogram over the brand field instead.
   • `divisions`: ids from src/data/divisions.js. They drive the
     directory filters and the "researchers in this division"
     list on each division page.
   • `phone` is stored but NOT displayed. Set `showPhone: true` on a
     person to publish their number. Think before you do: a mobile
     number on a public page is scraped within days.
   • Only add people whose details you have confirmed with them.
     Do not fill the directory with placeholder identities.
   ============================================================ */

export const founders = [
  {
    slug: 'abiya-ahad',
    name: 'Abiya Ahad',
    credentials: 'MBBS',
    role: 'Co-Founder',
    country: 'India',
    institution: 'Ananta Institute of Medical Sciences and Research Centre',
    divisions: ['cardiovascular-medicine', 'oncology', 'neurology'],
    interests: [
      'Cardiovascular toxicology',
      'Cardio-oncology',
      'Brain–heart axis',
      'Evidence synthesis',
    ],
    orcid: '0009-0008-5767-0722',
    email: 'ahadabiya15@gmail.com',
    phone: '+91 8003735362',
    whatsapp: '918003735362',
    showPhone: true,
    linkedin: '',
    instagram: 'abiya_0223',
    photo: 'people/abiya-ahad.jpg',
    bio: [
      'Abiya Ahad is a co-founder of MedAtlas and works primarily in cardiovascular medicine, with a focus on cardiovascular toxicology, cardio-oncology and the brain–heart axis.',
      'Her published work spans drug-induced cardiac injury, trace element and metallomic contributions to heart failure risk, ferroptosis and mitochondrial mechanisms of cardiomyocyte death, and the cardiovascular consequences of newer oncology agents. A substantial part of her output is evidence synthesis: systematic reviews, scoping reviews and meta-analyses.',
    ],
    credentialsList: [
      'Basic Life Support (BLS) provider certification, American Heart Association',
      'Advanced Cardiovascular Life Support (ACLS) provider certification, American Heart Association',
      'Principles of Clinical Pharmacology, National Institutes of Health',
      'Introduction to the Principles and Practice of Clinical Research, National Institutes of Health',
      'Workshop on soft embalming of human cadavers for preservation of visceral structures, Rajasthan University of Health Sciences, Jaipur',
    ],
  },
  {
    slug: 'ghezal-dabiry',
    name: 'Ghezal Dabiry',
    credentials: 'MD',
    role: 'Co-Founder',
    country: 'Türkiye',
    institution: 'Ankara Yıldırım Beyazıt University',
    divisions: ['neurology', 'cardiovascular-medicine'],
    interests: ['Neurology', 'Cardiology', 'Brain–heart axis'],
    orcid: '0009-0000-2943-1224',
    email: 'ghezal.dabiry@gmail.com',
    phone: '+90 537 918 82 69',
    showPhone: false,
    linkedin: '',
    instagram: 'ghezall_01',
    photo: 'people/ghezal-dabiry.jpg',
    bio: [
      'Ghezal Dabiry is a co-founder of MedAtlas, based at Ankara Yıldırım Beyazıt University in Türkiye.',
      'Her research interests sit across neurology and cardiology, with a particular focus on the brain–heart axis and the mechanisms that link cerebral injury to cardiovascular dysfunction.',
    ],
    credentialsList: [],
  },
  {
    slug: 'sultan-mujib-dabiry',
    name: 'Sultan Mujib Dabiry',
    credentials: 'MD',
    role: 'Co-Founder',
    country: 'Türkiye',
    institution: 'Medical Park Ankara Hospital',
    divisions: ['cardiovascular-medicine', 'neurology', 'translational-medicine'],
    interests: ['Orthopaedics', 'Cardiology', 'Neurology', 'Brain–heart axis'],
    orcid: '0009-0007-6824-0907',
    email: 'drdabirysm@gmail.com',
    phone: '+90 531 862 45 36',
    showPhone: false,
    linkedin: '',
    instagram: 'dabirysm',
    photo: 'people/sultan-mujib-dabiry.jpg',
    bio: [
      'Sultan Mujib Dabiry is a co-founder of MedAtlas, based at Medical Park Ankara Hospital in Türkiye.',
      'He works across orthopaedics, cardiology and neurology, with a shared interest in the brain–heart axis and in questions that cross the boundary between musculoskeletal and cardiovascular medicine.',
    ],
    credentialsList: [],
  },
];

/* ------------------------------------------------------------
   RESEARCHER DIRECTORY
   Add confirmed members here. The directory, its filters and the
   per-division researcher lists all read from this array, so a
   new entry needs no changes anywhere else.

   Template — copy, paste, fill in:

   {
     slug: 'firstname-lastname',
     name: 'Firstname Lastname',
     credentials: 'MBBS',
     role: 'Research Member',          // or Research Fellow, Division Head…
     country: 'Country',
     institution: 'Institution',
     divisions: ['cardiovascular-medicine'],
     interests: ['Interest one', 'Interest two'],
     orcid: '',
     email: '',
     linkedin: '',
     photo: '',
     bio: ['One or two paragraphs.'],
     publications: [],                 // publication ids from publications.js
   },
   ------------------------------------------------------------ */
export const members = [];

export const allPeople = [...founders, ...members];

export const findPerson = (slug) => allPeople.find((p) => p.slug === slug);
