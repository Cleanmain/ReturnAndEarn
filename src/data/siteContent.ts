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
  accessLabel?: string
  accessDescription?: string
}

export const ikeaSources: Source[] = [
  {
    id: 'ref-1',
    number: 1,
    title: 'IKEA Sustainability Strategy 2025–2030',
    publisher: 'Origin and publisher not independently verified',
    year: 'Reported as 2025; verify',
    url: '',
    used: 'Existing project content attributes the 2030 ambitions for recycled and renewable content, circular fulfilment score, circular services, and secondary raw material availability, traceability and affordability to this source. Verify these claims against the document before submission.',
    location: 'Existing project notes cite PDF pp. 21 and 26; page references not independently verified.',
    accessLabel: 'Source origin and bibliographic details require manual verification',
    accessDescription: 'The PDF was not found in the repository or available project documentation, and the broken public URL has no verified replacement. The claimed IKEA-provided origin, document title, publisher, year, page references and attributed claims must be confirmed by the team. Do not treat this citation as verified.',
  },
  {
    id: 'ref-2',
    number: 2,
    title: 'IKEA Sustainability Report FY24',
    publisher: 'Origin and publisher not independently verified',
    year: 'Reported as FY24 (published February 2025); verify',
    url: '',
    used: 'Existing project content attributes the 80% recycled wood content in particleboard ambition and FY24 reported figure of 30.3% to this source. Verify these claims against the document before submission.',
    location: 'Existing project notes cite PDF pp. 23 and 34; page references not independently verified.',
    accessLabel: 'Source origin and bibliographic details require manual verification',
    accessDescription: 'The PDF was not found in the repository or available project documentation, and the broken public URL has no verified replacement. The claimed IKEA-provided origin, document title, publisher, year, page references and attributed claims must be confirmed by the team. Do not treat this citation as verified.',
  },
  {
    id: 'ref-3',
    number: 3,
    title: 'Wood and forestry',
    publisher: 'Inter IKEA Group',
    year: 'FY25 data; undated webpage, viewed 27 October 2026',
    url: 'https://www.ikea.com/global/en/our-business/sustainability/wood-forestry/',
    used: 'The FY25 figure that approximately 19% of total wood used was recycled, including pre- and post-consumer content. This is not a particleboard-specific figure.',
    location: 'Section "Efficiently used"',
  },
  {
    id: 'ref-4',
    number: 4,
    title: 'Recycled materials',
    publisher: 'Inter IKEA Group',
    year: 'Undated webpage, viewed 27 October 2026',
    url: 'https://www.ikea.com/global/en/our-business/sustainability/recycled-materials/',
    used: 'IKEA\'s statements about availability, traceability and affordability constraints for recycled materials, and definitions of pre- and post-consumer material.',
    location: 'Sections "Building scalability, availability and affordability of recycled materials" and "Fast facts"',
  },
  {
    id: 'ref-5',
    number: 5,
    title: 'Wood design and innovation',
    publisher: 'Inter IKEA Group',
    year: 'Undated webpage, viewed 27 October 2026',
    url: 'https://www.ikea.com/global/en/our-business/sustainability/wood-design-and-innovation/',
    used: 'IKEA\'s discussion of wood-based product design and the recovery of suitable end-of-life particleboard material for use in new particleboard. This does not establish the feasibility of Return & Earn.',
    location: 'Section "The case for particleboard"',
  },
]

export const sources: { group: string; entries: Source[] }[] = [
  {
    group: 'Additional IKEA Sources',
    entries: [
      {
        title: 'Our circular agenda',
        publisher: 'Inter IKEA Group',
        year: 'Undated webpage, viewed 27 October 2026',
        url: 'https://www.ikea.com/global/en/our-business/sustainability/our-circular-agenda/',
        used: 'Background on IKEA circular design principles, including reuse, repair, refurbishment and recycling.',
      },
    ],
  },
  {
    group: 'IKEA Existing Services',
    entries: [
      {
        title: 'Sell to IKEA (Buyback & Resell, Sweden)',
        publisher: 'IKEA Sweden',
        year: 'Undated webpage, viewed 27 October 2026',
        url: 'https://www.ikea.com/se/en/second-hand/sell-to-ikea/',
        used: 'IKEA Sweden explains online product estimation, bringing an item to IKEA, receiving an IKEA refund card and resale in As-Is stores. Service terms and availability are market-specific.',
      },
    ],
  },
  {
    group: 'Furniture Waste Research',
    entries: [
      {
        title: 'Ecodesign for Sustainable Products Regulation: Study on new product priorities',
        publisher: 'European Commission Joint Research Centre',
        year: '2024',
        url: 'https://doi.org/10.2760/7400680',
        used: 'Assesses product categories for potential ESPR priorities; furniture is one of the assessed categories. It is not the source for the furniture waste-generation or treatment figures on The Challenge page.',
      },
      {
        title: 'Circular economy opportunities in the furniture sector',
        publisher: 'European Environmental Bureau (EEB), prepared by Eunomia Research & Consulting',
        year: '2017',
        url: 'https://eeb.org/en/library/circular-economy-opportunities-in-the-furniture-sector/',
        used: 'Historical estimates of 10 million tonnes of furniture discarded annually in EU countries and 80–90% of EU furniture waste in municipal solid waste being incinerated or landfilled; the latter is attributed in the report to UEA statistics.',
        location: 'PDF pp. 3 and 12',
      },
    ],
  },
  {
    group: 'Product and Material Background',
    entries: [
      {
        title: 'BILLY bookcase product information',
        publisher: 'IKEA Sweden',
        year: 'Undated product page, viewed 27 October 2026',
        url: 'https://www.ikea.com/se/en/p/billy-bookcase-oak-effect-90477385/',
        used: 'A market-specific IKEA product example used in background exploration; it does not establish material-recovery feasibility.',
      },
      {
        title: 'Particleboard',
        publisher: 'European Panel Federation',
        year: 'Undated webpage, viewed 27 October 2026',
        url: 'https://europanels.org/the-wood-based-panel-industry/types-of-wood-based-panels-economic-impact/particleboard/',
        used: 'Background on particleboard composition and the use of recycled sources in particleboard production.',
      },
    ],
  },
  {
    group: 'Technical Documentation',
    entries: [
      {
        title: 'React documentation: Quick Start',
        publisher: 'Meta Open Source',
        year: 'Living documentation, viewed 27 October 2026',
        url: 'https://react.dev/learn',
        used: 'Technical documentation for the React interface used in this website.',
      },
      {
        title: 'TypeScript documentation',
        publisher: 'Microsoft',
        year: 'Living documentation, viewed 27 October 2026',
        url: 'https://www.typescriptlang.org/docs/',
        used: 'Technical documentation for the TypeScript codebase.',
      },
      {
        title: 'Vite Guide',
        publisher: 'Vite contributors',
        year: 'Living documentation, viewed 27 October 2026',
        url: 'https://vite.dev/guide/',
        used: 'Technical documentation for the website build and development tooling.',
      },
      {
        title: 'React Router: Declarative Installation',
        publisher: 'React Router',
        year: 'Living documentation, viewed 27 October 2026',
        url: 'https://reactrouter.com/start/declarative/installation',
        used: 'Technical documentation for client-side routing in this website.',
      },
    ],
  },
]
