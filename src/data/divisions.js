/* ============================================================
   RESEARCH DIVISIONS
   ------------------------------------------------------------
   Add a division by appending an object. Its page appears at
   /research-divisions/<id> automatically, it joins the navigation
   dropdown, the directory filters and the publication filters.
   `accent` is a token name from global.css and colours the spine
   on the division card.
   ============================================================ */

export const divisions = [
  {
    id: 'cardiovascular-medicine',
    name: 'Cardiovascular Medicine',
    accent: '--coral',
    short: 'Clinical cardiology, heart failure, electrophysiology and the pharmacology and toxicology that shape cardiac risk.',
    overview:
      'The cardiovascular division is the largest area of work in the network. It covers clinical cardiology and heart failure, the electrophysiological consequences of systemic disease and drug exposure, and the growing body of evidence on how therapeutic agents injure or protect the myocardium.',
    objectives: [
      'Synthesise the evidence on drug-induced cardiac injury across old and newly approved agents.',
      'Characterise mechanisms of cardiomyocyte death, including ferroptosis and mitochondrial pathways.',
      'Clarify how trace element status and environmental exposure contribute to heart failure risk.',
      'Support preventive cardiology work that reaches populations before events occur.',
    ],
    themes: [
      'Clinical cardiology',
      'Heart failure',
      'Electrophysiology',
      'Vascular medicine',
      'Cardiovascular pharmacology',
      'Cardio-oncology',
      'Preventive cardiology',
      'Cardiovascular toxicology',
    ],
  },
  {
    id: 'neurology',
    name: 'Neurology and Neuroscience',
    accent: '--cyan',
    short: 'Cerebrovascular disease, stroke, neurocardiology and the two-way traffic between brain and heart.',
    overview:
      'This division studies the nervous system in its own right and in its relationship with the cardiovascular system. The brain–heart axis runs through much of the network’s work: cerebral injury producing cardiac dysfunction, and cardiac disease producing neurological consequences.',
    objectives: [
      'Build a translational account of stroke–heart syndrome from cerebral injury to cardiac outcome.',
      'Evaluate neuroimaging biomarkers that claim to index the brain–heart axis.',
      'Describe the arrhythmic consequences of intracranial pathology.',
      'Connect neurological and cardiological evidence that is usually synthesised separately.',
    ],
    themes: [
      'Cerebrovascular disease',
      'Stroke research',
      'Neurocardiology',
      'Neuroimaging',
      'Neurovascular interactions',
      'Neurological disorders',
    ],
  },
  {
    id: 'oncology',
    name: 'Oncology',
    accent: '--amber',
    short: 'Clinical and molecular oncology, immunotherapy, and the cardiovascular cost of cancer treatment.',
    overview:
      'Oncology work in the network concentrates on where cancer therapy meets the rest of medicine. New classes of agent reach approval faster than their long-term organ toxicity is characterised, and that gap is where most of this division’s output sits.',
    objectives: [
      'Characterise the cardiovascular safety profile of newly approved oncology agents.',
      'Review immunotherapy and bispecific antibody toxicity as the evidence accumulates.',
      'Support translational cancer research arising from the network.',
      'Connect oncology and cardiology evidence for clinicians who have to manage both.',
    ],
    themes: [
      'Clinical oncology',
      'Cardio-oncology',
      'Immunotherapy',
      'Molecular oncology',
      'Translational cancer research',
      'Cancer therapeutics',
    ],
  },
  {
    id: 'endocrinology',
    name: 'Endocrinology and Metabolic Medicine',
    accent: '--steel',
    short: 'Diabetes, obesity, cardiometabolic disease and the hormonal pathways that connect them.',
    overview:
      'Metabolic disease is rarely confined to metabolism. This division studies diabetes, obesity and the metabolic syndrome through their cardiovascular consequences, and examines the newer metabolic and hormonal therapies now being used at scale.',
    objectives: [
      'Review emerging metabolic hormone pathway modulators in cardiometabolic disease.',
      'Examine the cardiovascular implications of changing insulin regimens.',
      'Study micronutrient and electrolyte disturbance in treated type 2 diabetes.',
      'Support cardiometabolic evidence synthesis across drug classes.',
    ],
    themes: [
      'Diabetes',
      'Obesity',
      'Metabolic syndrome',
      'Cardiometabolic disease',
      'Hormonal pathways',
      'Metabolic pharmacology',
    ],
  },
  {
    id: 'clinical-pharmacology',
    name: 'Clinical Pharmacology and Therapeutics',
    accent: '--cyan-ink',
    short: 'Drug safety, pharmacovigilance, drug interactions and the evidence synthesis that underpins them.',
    overview:
      'A large share of the network’s published output is pharmacological. This division handles drug safety signals, interactions between commonly co-prescribed agents, and the methodological work needed to synthesise safety evidence that is scattered across small studies and case reports.',
    objectives: [
      'Identify and characterise drug safety signals from the published record.',
      'Examine opposing and interacting effects of commonly co-prescribed drugs.',
      'Appraise therapeutic interventions against current evidence standards.',
      'Keep the network’s synthesis methods current with reporting guidance.',
    ],
    themes: [
      'Drug safety',
      'Pharmacovigilance',
      'Therapeutic interventions',
      'Clinical pharmacology',
      'Drug interactions',
      'Evidence synthesis',
    ],
  },
  {
    id: 'public-health',
    name: 'Public Health and Epidemiology',
    accent: '--grey',
    short: 'Clinical epidemiology, population health, outcomes research and biostatistics.',
    overview:
      'This division supplies the epidemiological and statistical backbone for the rest of the network, and runs work of its own on population health, preventive medicine and health outcomes, including questions of access and cost.',
    objectives: [
      'Provide statistical and epidemiological review for projects across the network.',
      'Study health outcomes and cost-effectiveness where the evidence allows.',
      'Support preventive medicine and population health research.',
      'Develop biostatistics capability among early-career members.',
    ],
    themes: [
      'Clinical epidemiology',
      'Population health',
      'Preventive medicine',
      'Health outcomes',
      'Global health',
      'Biostatistics',
    ],
  },
  {
    id: 'translational-medicine',
    name: 'Translational and Molecular Medicine',
    accent: '--brand',
    short: 'Molecular mechanisms, genetic medicine, CRISPR-based research and regenerative therapeutics.',
    overview:
      'Translational work in the network starts from mechanism. This division covers molecular pathways of cell death and repair, gene editing applied to vascular and cardiac disease, and the laboratory evidence that underpins clinical questions elsewhere in the organisation.',
    objectives: [
      'Review gene editing approaches applied to vascular and cardiac disease.',
      'Build testable mechanistic frameworks from fragmented molecular evidence.',
      'Connect laboratory findings to the clinical questions the network is already asking.',
      'Support members moving between bench and clinical research.',
    ],
    themes: [
      'Molecular mechanisms',
      'Genetic medicine',
      'CRISPR-based research',
      'Regenerative medicine',
      'Cellular biology',
      'Translational therapeutics',
    ],
  },
];

export const findDivision = (id) => divisions.find((d) => d.id === id);
export const divisionName = (id) => findDivision(id)?.name || id;
