import {
  ArrowDown,
  ArrowRight,
  Box,
  CircleDollarSign,
  ClipboardCheck,
  Coins,
  Database,
  Factory,
  HeartHandshake,
  Lightbulb,
  Leaf,
  Recycle,
  Search,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, SectionHeading } from '../components/common/Content'
import PrototypeScreens from '../components/common/PrototypeScreens'

const evolutionStages = [
  {
    title: 'Starting With a Small Idea',
    label: 'An incentive-based return',
    question: 'Could IKEA reward customers for returning broken furniture?',
    icon: Coins,
    summary: 'We began with a simple incentive-based return concept. The potential benefit seemed straightforward: customers could receive something in return, while IKEA might gain access to recoverable materials.',
    promising: 'A return reward could connect a customer benefit with a potential material source.',
    open: 'We had not established why IKEA would want the materials or whether the process would be economically worthwhile. Our early working title was IKEA Material Bounty.',
  },
  {
    title: 'Investigating the Existing Problem',
    label: 'Investigating the existing problem',
    question: 'What problem are we actually trying to solve?',
    icon: Search,
    summary: <>We explored how customers dispose of end-of-life furniture and considered IKEA circular services, including <a href="https://www.ikea.com/se/en/second-hand/sell-to-ikea/" target="_blank" rel="noopener noreferrer">IKEA Sweden's Buyback &amp; Resell service</a>.</>,
    promising: 'This helped narrow the concept toward furniture that can no longer reasonably be repaired, reused or resold.',
    open: 'The challenge is also the inconvenience of returning bulky furniture and limited motivation to do so.',
  },
  {
    title: "Finding Direction in IKEA's Sustainability Goals",
    label: 'Exploring strategic alignment',
    question: 'Why might IKEA benefit from our idea?',
    icon: HeartHandshake,
    summary: <>IKEA has an ambition to reach <strong>80% recycled wood in particleboard by 2030</strong><sup className="development-citation"><Link to="/references#ref-1" aria-label="Reference 1: IKEA Sustainability Strategy 2025–2030">[1]</Link></sup><sup className="development-citation"><Link to="/references#ref-2" aria-label="Reference 2: IKEA Sustainability Report FY24">[2]</Link></sup>. That gave our concept a more specific strategic context.</>,
    promising: 'Could end-of-life IKEA furniture become an additional source of suitable secondary raw materials?',
    open: 'This ambition supports the rationale for exploration; it does not prove that Return & Earn would be economically or environmentally beneficial.',
  },
  {
    title: 'Discovering the Main Challenges',
    label: 'Testing our assumptions',
    question: 'What would make this difficult in practice?',
    icon: CircleDollarSign,
    summary: 'We recognized the digital interface was only one part of the service. The wider challenge includes usable recovery quantities, collection and processing, material value versus total costs, customer participation, and access to IKEA systems and logistics.',
    promising: 'Examining these dependencies helped us shift the question from “Can we design an app?” to “Could the complete service work?”',
    open: 'Each dependency remains uncertain and needs investigation; none has been validated by a pilot.',
  },
  {
    title: 'Refining the Concept',
    label: 'Making the proposal more coherent',
    question: 'How could we make the proposal more realistic?',
    icon: Factory,
    summary: 'We shaped Return & Earn around end-of-life furniture, returns during planned visits, an estimated voucher with a proposed Participation Bonus, acceptance verification, and the physical recovery process.',
    promising: 'These decisions link the customer experience to the potential downstream material pathway.',
    open: 'They also add trade-offs around accessibility, transport, operating costs and whether recovered materials can meet quality requirements.',
  },
  {
    title: 'Our Current Position',
    label: 'Concept and early prototype',
    question: 'What have we achieved, and what remains uncertain?',
    icon: Recycle,
    summary: 'We have a customer-facing concept prototype, a proposed material-recovery pathway and a preliminary sustainability assessment.',
    promising: 'We have developed a clearer argument for potential customer value and alignment with IKEA sustainability ambitions.',
    open: 'Technical and operational feasibility, customer demand, environmental performance and economic viability remain unverified. Next, these assumptions need testing—not a deployment claim.',
  },
]

const perspectives = [
  {
    title: 'Desirability',
    label: 'A clear customer proposition, but untested demand',
    question: 'Would customers want to use it?',
    icon: Users,
    description: 'We believe Return & Earn addresses a recognizable problem: inconvenient disposal of broken furniture. Convenience and a proposed voucher offer a plausible reason to participate, but customer demand has not been validated through interviews or behavioral testing.',
    assessment: 'Promising customer proposition, but actual demand remains untested.',
    questions: [
      'Would the incentive motivate participation?',
      'Is returning furniture alongside a planned visit convenient?',
      'How could the service work for people without suitable transport?',
    ],
  },
  {
    title: 'Feasibility',
    label: 'The biggest unresolved challenge',
    question: 'Could the service be implemented?',
    icon: Wrench,
    description: 'Our frontend prototype can illustrate the digital customer experience. An end-to-end service would also require reliable material information, product verification, integrations, collection logistics and viable recovery processes. These dependencies remain uncertain.',
    assessment: 'The digital concept is demonstrable, but end-to-end feasibility needs substantial investigation.',
    questions: [
      'Can suitable material quantities, quality and recovery yields be established?',
      'How would acceptance, storage, sorting and logistics work?',
      'What systems or partners would be required?',
    ],
  },
  {
    title: 'Viability',
    label: 'Strategic alignment, but unproven economics',
    question: 'Would it make sense for IKEA?',
    icon: Leaf,
    description: 'IKEA’s recycled-material ambitions provide a relevant reason to explore an additional source of secondary raw materials. However, vouchers, collection, sorting, transportation and processing all add costs that may exceed material value.',
    assessment: 'Relevant to IKEA’s sustainability direction, but the economic case is not established.',
    questions: [
      'What are the full costs compared with recovered-material value?',
      'Could existing operations support returns economically?',
      'What evidence would be required before a pilot?',
    ],
  },
]

const designDecisions = [
  {
    decision: 'Focus on furniture beyond repair or resale',
    reason: 'Higher-value circular options should come first.',
    implication: 'Gave the proposal a clearer, narrower purpose.',
    icon: Recycle,
  },
  {
    decision: 'Pair material value with a Participation Bonus',
    reason: 'Material value alone might not motivate a return.',
    implication: 'Made the incentive more plausible, while highlighting a cost that needs validation.',
    icon: Coins,
  },
  {
    decision: 'Consider the recovery system, not just the app',
    reason: 'Collecting furniture does not itself recover useful materials.',
    implication: 'Brought logistics, quality and processing into the feasibility question.',
    icon: Factory,
  },
]

const insights = [
  {
    number: '01',
    title: 'We needed a more specific problem',
    text: 'Our initial return-and-reward idea became more meaningful when we focused on furniture beyond repair or resale.',
  },
  {
    number: '02',
    title: "IKEA's sustainability goals gave us direction",
    text: 'The ambition to increase recycled wood use in particleboard suggested a potential strategic reason to explore additional material recovery.',
  },
  {
    number: '03',
    title: 'The incentive model introduced an economic challenge',
    text: 'A proposed Participation Bonus could encourage customers, but it also increases costs and makes economic validation essential.',
  },
  {
    number: '04',
    title: 'The hardest part lies beyond the interface',
    text: 'Our prototype can communicate the customer journey, but the physical recovery system and its economic and environmental performance remain the greatest uncertainties.',
  },
]

const nextSteps = [
  {
    title: 'Customer Validation',
    text: 'Test whether customers would participate and whether the proposed voucher is sufficiently motivating.',
    icon: Users,
  },
  {
    title: 'Material Recovery Feasibility',
    text: 'Investigate recoverable quantities, material quality, contamination and potential recovery partners.',
    icon: Factory,
  },
  {
    title: 'IKEA Operational Feasibility',
    text: 'Explore acceptance, storage, sorting, logistics and possible integration with existing processes.',
    icon: Truck,
  },
  {
    title: 'Economic and Environmental Assessment',
    text: 'Estimate full costs and compare environmental outcomes with existing alternatives.',
    icon: Leaf,
  },
  {
    title: 'Prototype Refinement',
    text: 'Improve the customer experience based on evidence and stakeholder feedback.',
    icon: Smartphone,
  },
]

const researchSources = [
  {
    title: 'IKEA Sustainability Report FY2024',
    publisher: 'Inter IKEA Systems B.V.',
    url: '',
  },
  {
    title: 'Ecodesign for Sustainable Products Regulation: Study on new product priorities',
    publisher: 'European Commission Joint Research Centre',
    url: 'https://doi.org/10.2760/7400680',
  },
  {
    title: 'BILLY bookcase product information',
    publisher: 'IKEA Sweden',
    url: 'https://www.ikea.com/se/en/p/billy-bookcase-oak-effect-90477385/',
  },
  {
    title: 'Particleboard',
    publisher: 'European Panel Federation',
    url: 'https://europanels.org/the-wood-based-panel-industry/types-of-wood-based-panels-economic-impact/particleboard/',
  },
]

export default function Development() {
  return (
    <>
      <section className="page-intro development-intro">
        <div className="container">
          <Eyebrow>Project status: Early prototype and concept development</Eyebrow>
          <h1>From Idea to Prototype</h1>
          <p className="development-subtitle">The Development Journey of Return &amp; Earn</p>
          <div className="development-intro-copy">
            <p>Return &amp; Earn began with a relatively simple idea: what if IKEA could encourage customers to return broken furniture by offering a reward?</p>
            <p>At first, we focused on the customer experience and the possibility of recovering useful materials. But as we explored the concept, we realized that a promising idea was not necessarily a feasible one.</p>
            <p>Research into IKEA's existing circular services and sustainability ambitions helped us define a clearer purpose for the concept. At the same time, questions about logistics, material recovery and economic viability challenged our early assumptions.</p>
            <p>Our development process has therefore been about more than designing an app. It has been about identifying where the idea creates potential value, where the uncertainties lie, and what would need to be tested before implementation.</p>
          </div>
        </div>
      </section>

      <section className="section development-section">
        <div className="container">
          <SectionHeading
            eyebrow="Concept evolution"
            title="From a Simple Recycling Idea to Return &amp; Earn"
            description="A sequence of questions and shifts in our thinking—not dated milestones or outcomes from formal experiments."
          />
          <div className="evolution-timeline">
            {evolutionStages.map(({ title, label, question, icon: Icon, summary, promising, open }, index) => (
              <article className={`evolution-card${index % 2 ? ' evolution-card-alternate' : ''}`} key={title}>
                <div className="evolution-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="evolution-card-content">
                  <div className="evolution-card-top">
                    <span className="evolution-icon"><Icon size={20} aria-hidden="true" /></span>
                    <div><Eyebrow>{label}</Eyebrow><h3>{title}</h3></div>
                  </div>
                  <p className="evolution-question">{question}</p>
                  <p className="evolution-summary">{summary}</p>
                  <div className="evolution-reflection-grid">
                    <div><span className="reflection-label">What seemed promising</span><p>{promising}</p></div>
                    <div><span className="reflection-label">What remained unclear</span><p>{open}</p></div>
                  </div>
                </div>
                {index < evolutionStages.length - 1 && <ArrowDown className="evolution-down" size={17} aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section development-section design-perspectives-section">
        <div className="container">
          <SectionHeading
            eyebrow="Design Thinking"
            title="Designing for People, Technology and IKEA"
            description="Throughout development we considered three complementary perspectives: whether customers would find the service useful, whether it could be implemented, and whether it could create value for IKEA."
          />
          <div className="perspective-cards">
            {perspectives.map(({ title, label, question, icon: Icon, description, assessment, questions }) => (
              <article className="development-perspective-card" key={title}>
                <div className="perspective-card-top"><span className="development-card-icon"><Icon size={21} aria-hidden="true" /></span><Eyebrow>{label}</Eyebrow></div>
                <h3>{title}</h3>
                <p className="perspective-question">{question}</p>
                <p className="perspective-description">{description}</p>
                <p className="perspective-assessment"><strong>Current assessment:</strong> {assessment}</p>
                <h4>Questions to validate</h4>
                <ul>{questions.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="perspective-balance"><Lightbulb size={19} aria-hidden="true" /><p><strong>A promising concept must balance all three perspectives</strong> rather than optimizing only one.</p></div>
          <aside className="biggest-learning">
            <span className="biggest-learning-icon"><Lightbulb size={21} aria-hidden="true" /></span>
            <div>
              <Eyebrow>Our reflection</Eyebrow>
              <h3>Our Biggest Learning</h3>
              <p>One of our most important realizations is that a concept can be attractive to customers and aligned with sustainability goals without necessarily being feasible or economically viable.</p>
              <p>For Return &amp; Earn, the greatest uncertainty is no longer how to illustrate the customer experience. It is whether the complete return and recovery system can generate enough value to justify its costs and environmental impacts. This is where further research and testing would be most valuable.</p>
              <Link className="text-link" to="/circularity">Explore the detailed sustainability assessment <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section development-section">
        <div className="container">
          <SectionHeading
            eyebrow="Concept decisions"
            title="Three Decisions That Changed Our Concept"
            description="The timeline explains how the idea evolved; these three choices capture the shifts that most changed our thinking."
          />
          <div className="design-decision-grid">
            {designDecisions.map(({ decision, reason, implication, icon: Icon }, index) => (
              <article className="design-decision-card" key={decision}>
                <div className="design-decision-heading"><span className="decision-number">0{index + 1}</span><Icon size={19} aria-hidden="true" /><h3>{decision}</h3></div>
                <dl>
                  <div><dt>Reason</dt><dd>{reason}</dd></div>
                  <div><dt>Implication</dt><dd>{implication}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section development-section prototype-section">
        <div className="container">
          <SectionHeading
            eyebrow="The current prototype"
            title="Turning the Concept Into a Customer Experience"
            description="To make Return &amp; Earn easier to evaluate, we developed an early digital prototype illustrating how a customer could identify an IKEA product, view an estimated voucher and understand the proposed return process. The prototype communicates the concept; it is not connected to IKEA's production systems."
          />
          <div className="prototype-screens-frame">
            <PrototypeScreens />
          </div>
          <Link className="text-link prototype-demo-link" to="/demo">View the concept demo page <ArrowRight size={15} aria-hidden="true" /></Link>
          <div className="prototype-status-grid">
            <article className="prototype-status-card status-implemented">
              <span className="status-icon"><ClipboardCheck size={19} aria-hidden="true" /></span>
              <h3>Implemented in the prototype</h3>
              <ul>
                <li>Three static phone-screen mockups displayed on the Demo page.</li>
                <li>Illustrative product, estimate, return guidance and sample confirmation content.</li>
                <li>Website navigation between the project pages.</li>
              </ul>
            </article>
            <article className="prototype-status-card status-simulated">
              <span className="status-icon"><Box size={19} aria-hidden="true" /></span>
              <h3>Simulated or illustrative</h3>
              <ul>
                <li>The BILLY product example and its listed material components.</li>
                <li>12 SEK estimated material value + 20 SEK proposed Participation Bonus = 32 SEK.</li>
                <li>Search, estimate, QR placeholder and screen buttons are visual only; no calculations or return actions run.</li>
              </ul>
            </article>
            <article className="prototype-status-card status-future">
              <span className="status-icon"><ArrowRight size={19} aria-hidden="true" /></span>
              <h3>Proposed for future implementation</h3>
              <ul>
                <li>IKEA account, catalogue, material data or production-system integration.</li>
                <li>Real material valuation, eligibility checks, physical verification and voucher issuance.</li>
                <li>Collection, sorting, processing, recovery-partner and logistics operations.</li>
              </ul>
            </article>
          </div>

          <div className="technical-overview">
            <div className="technical-overview-copy">
              <Eyebrow>What is actually running</Eyebrow>
              <h3>A frontend-only concept website</h3>
              <p>The repository builds a static-content website with React, TypeScript, Vite and React Router. The phone journey is rendered as presentation markup; it has no separate app state, backend, database or live IKEA connection.</p>
            </div>
            <div className="technical-stack" aria-label="Current implementation components">
              <div><Smartphone size={18} aria-hidden="true" /><span><b>React + TypeScript</b><small>Page and screen components</small></span></div>
              <ArrowRight className="technical-stack-arrow" size={16} aria-hidden="true" />
              <div><ClipboardCheck size={18} aria-hidden="true" /><span><b>Static mockup content</b><small>Hard-coded illustrative values</small></span></div>
              <ArrowRight className="technical-stack-arrow" size={16} aria-hidden="true" />
              <div><Database size={18} aria-hidden="true" /><span><b>No service backend</b><small>No database or IKEA API</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section development-section research-reflection-section">
        <div className="container">
          <SectionHeading
            eyebrow="Looking back"
            title="What Changed in Our Understanding"
            description="Reflections from research and concept development—not validated findings from interviews, surveys, usability studies or a pilot."
          />
          <div className="insight-grid">
            {insights.map(({ number, title, text }) => (
              <article className="insight-card" key={number}>
                <span className="insight-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside className="research-integrity-note"><ShieldCheck size={18} aria-hidden="true" /><p>No user interviews, surveys, usability studies or pilot results are documented in this repository. Emma is an illustrative design persona, not a research participant.</p></aside>
        </div>
      </section>

      <section className="section development-section next-steps-section">
        <div className="container">
          <SectionHeading
            eyebrow="Proposed future work"
            title="Next Steps: From Prototype to Validation"
            description="These are proposed research and development activities, not work completed to date."
          />
          <div className="next-steps-grid">
            {nextSteps.map(({ title, text, icon: Icon }, index) => (
              <article className="next-step-card" key={title}>
                <span className="next-step-number">0{index + 1}</span>
                <span className="development-card-icon"><Icon size={20} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section development-section development-sources-section">
        <div className="container">
          <div className="development-sources">
            <div>
              <Eyebrow>Background sources</Eyebrow>
              <h2>Context for further research</h2>
              <p>These public sources informed background exploration; they do not validate Return &amp; Earn's proposed workflow, voucher economics or sustainability outcomes.</p>
              <Link to="/references" className="text-link">View the project's references <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
            <ul>
              {researchSources.map(({ title, publisher, url }) => (
                <li key={title}>
                  {url
                    ? <a href={url} target="_blank" rel="noopener noreferrer"><span><strong>{title}</strong><small>{publisher}</small></span><ArrowRight size={15} aria-hidden="true" /></a>
                    : <span className="source-unavailable"><strong>{title}</strong><small>{publisher} · Origin, details and claims require manual verification</small></span>}
                </li>
              ))}
            </ul>
          </div>
          <p className="development-final-note">Return &amp; Earn is a university concept—not an existing IKEA service or a commitment by IKEA to implement it.</p>
        </div>
      </section>
    </>
  )
}
