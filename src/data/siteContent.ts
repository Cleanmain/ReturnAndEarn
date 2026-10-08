export const teamMembers = [
  { name: 'Filip Helin', initials: 'FH' },
  { name: 'Erik Mörck', initials: 'EM' },
  { name: 'Viktor Waller', initials: 'VW' },
  { name: 'Hanna Bailu', initials: 'HB' },
  { name: 'Filip Larsen', initials: 'FL' },
]

export type Source = {
  title: string
  publisher: string
  year: string
  url: string
  id?: string
  number?: number
  used?: string
  location?: string
}

export const ikeaSources: Source[] = [
  {
    id: 'ref-1',
    number: 1,
    title: 'IKEA Sustainability Strategy 2025–2030',
    publisher: 'Inter IKEA Systems B.V.',
    year: '2025',
    url: 'https://www.ikea.com/global/en/images/IKEA_Sustainability_Strategy_2025_2030_v3_251013_f76f0e6498.pdf',
    used: 'The 2030 ambitions for recycled and renewable content, circular fulfilment score and circular services, and the stated action to secure availability, traceability and affordability of responsibly sourced secondary raw materials.',
    location: 'PDF pp. 21 and 26',
  },
  {
    id: 'ref-2',
    number: 2,
    title: 'IKEA Sustainability Report FY24',
    publisher: 'Inter IKEA Systems B.V.',
    year: 'FY24 (published February 2025)',
    url: 'https://www.ikea.com/global/en/images/IKEA_Sustainability_Report_FY_24_2025_02_06_0aaa025249.pdf',
    used: 'The 2030 recycled-wood goal, the FY24 recycled content in particleboard (30.3%) and progress examples including IKEA Industry in Hultsfred, Sweden.',
    location: 'PDF pp. 23 and 34',
  },
  {
    id: 'ref-3',
    number: 3,
    title: 'Wood and forestry',
    publisher: 'Inter IKEA Group',
    year: 'Webpage, viewed 8 October 2026 (reports FY25)',
    url: 'https://www.ikea.com/global/en/our-business/sustainability/wood-forestry/',
    used: 'IKEA\'s work to increase recycled wood in its products and the FY25 figure that 19% of the wood used was recycled (pre- and post-consumer content).',
    location: 'Section "Efficiently used"',
  },
  {
    id: 'ref-4',
    number: 4,
    title: 'Recycled materials',
    publisher: 'Inter IKEA Group',
    year: 'Webpage, viewed 8 October 2026',
    url: 'https://www.ikea.com/global/en/our-business/sustainability/recycled-materials/',
    used: 'IKEA\'s statement that current availability of recycled feedstock is insufficient, its focus on traceability, and its definitions of pre- and post-consumer material.',
    location: 'Sections "Building scalability, availability and affordability of recycled materials" and "Fast facts"',
  },
  {
    id: 'ref-5',
    number: 5,
    title: 'Wood design and innovation',
    publisher: 'Inter IKEA Group',
    year: 'Webpage, viewed 8 October 2026 (reports FY25)',
    url: 'https://www.ikea.com/global/en/our-business/sustainability/wood-design-and-innovation/',
    used: 'Particleboard as a major wood-based material, products such as BILLY, PAX and MALM, and the recovery of suitable end-of-life material for new particleboard.',
    location: 'Section "The case for particle board"',
  },
]

export const sources: { group: string; entries: Source[] }[] = [
  {
    group: 'Additional IKEA Sources',
    entries: [
      { title: 'Our circular agenda', publisher: 'Inter IKEA Group', year: 'Ongoing', url: 'https://www.ikea.com/global/en/our-business/sustainability/our-circular-agenda/' },
      { title: 'IWAY — supplier code of conduct', publisher: 'Inter IKEA Group', year: 'Ongoing', url: 'https://www.ikea.com/global/en/our-business/how-we-work/iway-our-supplier-code-of-conduct/' },
    ],
  },
  {
    group: 'IKEA Existing Services',
    entries: [
      { title: 'Buy Back, resale, removal and recycling services (verify by market)', publisher: 'IKEA country websites', year: 'To verify', url: '' },
    ],
  },
  {
    group: 'Furniture Waste Research',
    entries: [
      { title: 'European furniture waste statistic', publisher: 'Source to be verified by project team', year: 'Pending', url: '' },
      { title: 'Furniture material recovery evidence', publisher: 'Source to be added after literature review', year: 'Pending', url: '' },
    ],
  },
  {
    group: 'Academic & Technical Sources',
    entries: [
      { title: 'Design Thinking research', publisher: 'Academic source to be selected by project team', year: 'Pending', url: '' },
      { title: 'React documentation', publisher: 'Meta Open Source', year: 'Ongoing', url: 'https://react.dev/learn' },
      { title: 'TypeScript documentation', publisher: 'Microsoft', year: 'Ongoing', url: 'https://www.typescriptlang.org/docs/' },
      { title: 'Vite documentation', publisher: 'Vite contributors', year: 'Ongoing', url: 'https://vite.dev/guide/' },
      { title: 'React Router documentation', publisher: 'React Router', year: 'Ongoing', url: 'https://reactrouter.com/start/library/installation' },
      { title: 'Lucide React documentation', publisher: 'Lucide contributors', year: 'Ongoing', url: 'https://lucide.dev/guide/packages/lucide-react' },
    ],
  },
]
