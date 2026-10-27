import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  CircleDollarSign,
  Database,
  HandCoins,
  HeartHandshake,
  Leaf,
  LockKeyhole,
  MapPin,
  Recycle,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
  Accessibility,
  AlertTriangle,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Eyebrow, SectionHeading } from '../components/common/Content'

type Effect = {
  dimension: string
  title: string
  description: string
  icon: LucideIcon
}

type EffectStage = {
  name: string
  subtitle: string
  number: string
  effects: Effect[]
}

const effectStages: EffectStage[] = [
  {
    name: 'Immediate Effects',
    subtitle: 'What the service directly introduces',
    number: '01',
    effects: [
      {
        dimension: 'Individual',
        title: 'More Convenient Furniture Returns',
        description: 'Customers could identify eligible end-of-life furniture, view an estimated voucher and plan a return during an existing IKEA visit.',
        icon: Users,
      },
      {
        dimension: 'Economic',
        title: 'Financial Incentive',
        description: 'A proposed voucher would combine estimated recoverable material value, minus estimated recovery costs, plus a Participation Bonus.',
        icon: HandCoins,
      },
      {
        dimension: 'Technical',
        title: 'Digital Service Integration',
        description: 'A digital interface could use available product and material information to estimate recovery value and support a return process. Required data and integrations are not established.',
        icon: Smartphone,
      },
    ],
  },
  {
    name: 'Enabling Effects',
    subtitle: 'What could change as a result',
    number: '02',
    effects: [
      {
        dimension: 'Social',
        title: 'Greater Participation and Shared Responsibility',
        description: 'A more convenient and rewarding process could encourage customers to take part in circular material flows.',
        icon: HeartHandshake,
      },
      {
        dimension: 'Environmental',
        title: 'More Furniture Directed Toward Material Recovery',
        description: 'Additional participation could make suitable end-of-life materials available for recovery rather than disposal or energy recovery. This is only an improvement if it adds useful recovery beyond existing routes.',
        icon: Recycle,
      },
    ],
  },
  {
    name: 'Structural Effects',
    subtitle: 'Potential long-term changes',
    number: '03',
    effects: [
      {
        dimension: 'Environmental',
        title: 'Reduced Demand for Virgin Resources',
        description: 'If quality and processing requirements are met, suitable recovered wood particles could substitute for some virgin wood inputs in new particleboard.',
        icon: Leaf,
      },
      {
        dimension: 'Economic',
        title: 'Additional Secondary Raw Materials',
        description: 'A successful return system could provide IKEA or its suppliers with another source of recovered materials.',
        icon: CircleDollarSign,
      },
      {
        dimension: 'Social',
        title: 'More Established Circular Habits',
        description: 'Repeated participation could help normalize returning products for material recovery.',
        icon: Users,
      },
    ],
  },
]

const tradeOffs = [
  {
    dimension: 'Economic',
    title: 'Voucher, Collection and Processing Costs',
    description: 'Material value may not cover incentives, handling, transportation, storage and processing.',
    icon: CircleDollarSign,
  },
  {
    dimension: 'Environmental',
    title: 'Transport and Processing Emissions',
    description: 'Additional collection journeys, handling and processing have impacts that must be compared with recovery benefits.',
    icon: Truck,
  },
  {
    dimension: 'Individual / Social',
    title: 'Accessibility',
    description: 'Customers without cars or with limited mobility may find returning bulky furniture difficult.',
    icon: Accessibility,
  },
  {
    dimension: 'Technical',
    title: 'Data Accuracy and Material Quality',
    description: 'Incomplete product information, uncertain material quantities and contamination could weaken estimates and recovery outcomes.',
    icon: Database,
  },
]

type Dimension = {
  title: string
  focus: string
  icon: LucideIcon
  benefits: string[]
  risks: string[]
  requirements: string[]
}

const dimensions: Dimension[] = [
  {
    title: 'Individual',
    focus: 'Usability, agency, accessibility, privacy and safety',
    icon: Users,
    benefits: [
      'More convenient disposal of eligible furniture',
      'Clear estimated voucher information and greater choice in planning a return',
    ],
    risks: [
      'Bulky furniture may be difficult or unsafe to transport; customers without vehicles could be excluded',
      'Unclear conditions could create unrealistic voucher expectations',
    ],
    requirements: [
      'Make eligibility, estimates and acceptance conditions clear',
      'Provide an accessible interface, safe return instructions and minimize unnecessary personal-data collection',
    ],
  },
  {
    title: 'Social',
    focus: 'Participation, trust, inclusion, equity and shared responsibility',
    icon: HeartHandshake,
    benefits: [
      'Could encourage participation in circular practices',
      'A proposed Participation Bonus could recognize customer contributions and raise awareness of material recovery',
    ],
    risks: [
      'Benefits and access may be uneven across customers and locations',
      'Poor communication about voucher eligibility could reduce trust',
    ],
    requirements: [
      'Use transparent acceptance rules and explanations of what happens to returned furniture',
      'Explore inclusive return options where feasible',
    ],
  },
  {
    title: 'Environmental',
    focus: 'Materials, resources, waste, energy and logistics',
    icon: Leaf,
    benefits: [
      'More suitable materials could enter recovery processes',
      'Recovered wood could potentially replace some virgin inputs; returns could also improve knowledge of material flows',
    ],
    risks: [
      'Transport and processing generate impacts',
      'Not all furniture is suitable; some items may already be recycled, while contamination or degradation can limit recovery',
    ],
    requirements: [
      'Prioritize suitable materials and assess net impacts against existing alternatives',
      'Consider transport distances and processing energy; do not claim emissions savings without evidence',
    ],
  },
  {
    title: 'Economic',
    focus: 'Value creation, supply chains, costs and long-term viability',
    icon: CircleDollarSign,
    benefits: [
      'Could provide another source of secondary raw materials',
      'Incentives may encourage participation and support circularity objectives',
    ],
    risks: [
      'Voucher costs may exceed material value',
      'Collection, storage, sorting and processing may be costly; material value and demand can fluctuate',
    ],
    requirements: [
      'Make voucher estimates transparent and evaluate total recovery costs',
      'Assess material value and supply-chain feasibility before scaling',
    ],
  },
  {
    title: 'Technical',
    focus: 'Maintainability, usability, adaptability, security and scalability',
    icon: LockKeyhole,
    benefits: [
      'Could build on available product information',
      'Digital identification may support consistent estimates; modular design could accommodate future material categories',
    ],
    risks: [
      'Material information, quantities and recovery yields may be incomplete or uncertain',
      'IKEA system integration is not established; privacy, security and scalability need investigation',
    ],
    requirements: [
      'Use maintainable, adaptable architecture and reliable product information',
      'Make estimation logic transparent, protect data and revise assumptions as evidence improves',
    ],
  },
]

type AssessedEffect = {
  id: number
  title: string
  dimension: string
  likelihood: number
  impact: number
  direction: 'Positive' | 'Negative'
  explanation: string
  offset: [number, number]
}

const assessedEffects: AssessedEffect[] = [
  { id: 1, title: 'More convenient furniture returns', dimension: 'Individual', likelihood: 4, impact: 3, direction: 'Positive', explanation: 'A guided return process could make an end-of-life return easier to understand and plan.', offset: [-18, 0] },
  { id: 2, title: 'Financial participation incentive', dimension: 'Economic', likelihood: 4, impact: 3, direction: 'Positive', explanation: 'An estimated voucher and proposed bonus could motivate some customers to participate.', offset: [0, -17] },
  { id: 3, title: 'Greater customer participation', dimension: 'Social', likelihood: 3, impact: 3, direction: 'Positive', explanation: 'Convenience and incentives may increase participation, but customer response has not been tested.', offset: [-18, -12] },
  { id: 4, title: 'More materials directed to recovery', dimension: 'Environmental', likelihood: 3, impact: 4, direction: 'Positive', explanation: 'Additional returns could supply suitable materials, provided the service adds recovery beyond existing routes.', offset: [0, 15] },
  { id: 5, title: 'Reduced virgin-resource demand', dimension: 'Environmental', likelihood: 2, impact: 5, direction: 'Positive', explanation: 'Potentially significant if recovered material meets quality requirements and substitutes for virgin inputs.', offset: [0, 0] },
  { id: 6, title: 'Additional secondary-material supply', dimension: 'Economic', likelihood: 2, impact: 4, direction: 'Positive', explanation: 'A return stream could add supply, subject to reliable volume, quality, demand and viable costs.', offset: [0, 0] },
  { id: 7, title: 'More established circular habits', dimension: 'Social', likelihood: 2, impact: 3, direction: 'Positive', explanation: 'Repeated participation could normalize returns for recovery, though long-term behavior is uncertain.', offset: [18, 12] },
  { id: 8, title: 'Voucher and recovery costs', dimension: 'Economic', likelihood: 4, impact: 4, direction: 'Negative', explanation: 'Incentives, collection, handling and processing could outweigh recovered material value.', offset: [0, 0] },
  { id: 9, title: 'Transport and processing emissions', dimension: 'Environmental', likelihood: 4, impact: 3, direction: 'Negative', explanation: 'Additional transport and processing could create emissions; net effects require comparison with current alternatives.', offset: [18, 0] },
  { id: 10, title: 'Accessibility barriers', dimension: 'Individual / Social', likelihood: 3, impact: 3, direction: 'Negative', explanation: 'Bulky returns may be less accessible to people without a car or with limited mobility.', offset: [0, 15] },
  { id: 11, title: 'Material-data and estimation uncertainty', dimension: 'Technical', likelihood: 3, impact: 3, direction: 'Negative', explanation: 'Incomplete product data and unknown material quantities or yields could make estimates unreliable.', offset: [18, -12] },
]

const validationQuestions = [
  { title: 'Customer Participation', question: 'Would customers return broken furniture for the proposed incentive?', icon: Users },
  { title: 'Material Recovery', question: 'How much suitable material can actually be recovered from returned products?', icon: Recycle },
  { title: 'Logistics', question: 'Could returns fit existing visits and distribution processes without excessive additional transport?', icon: MapPin },
  { title: 'Economic Viability', question: 'How do voucher, handling, sorting and processing costs compare with recovered value and other benefits?', icon: CircleDollarSign },
  { title: 'Environmental Performance', question: 'Would the system improve on existing recycling, disposal and energy-recovery alternatives?', icon: Leaf },
  { title: 'Technical Feasibility', question: 'Is sufficiently accurate product and material information available for a reliable service?', icon: ShieldCheck },
]

const references = [
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

const circularityPriorities = [
  { title: 'Maintain', note: 'Priority 1', icon: Wrench },
  { title: 'Repair', note: 'Priority 2', icon: Wrench },
  { title: 'Reuse', note: 'Priority 3', icon: HeartHandshake },
  { title: 'Resell', note: 'Priority 4', icon: CircleDollarSign },
  { title: 'Recycle', note: 'Return & Earn focus', icon: Recycle },
]

function AwarenessDiagram() {
  return (
    <div className="awareness-diagram" aria-label="Sustainability awareness diagram">
      {effectStages.map((stage, stageIndex) => (
        <div className="awareness-stage-wrap" key={stage.name}>
          <section className={`awareness-stage awareness-stage-${stageIndex + 1}`} aria-labelledby={`stage-${stage.number}`}>
            <header className="awareness-stage-header">
              <span className="awareness-stage-number">{stage.number}</span>
              <div>
                <h3 id={`stage-${stage.number}`}>{stage.name}</h3>
                <p>{stage.subtitle}</p>
              </div>
            </header>
            <div className="awareness-effects">
              {stage.effects.map(({ dimension, title, description, icon: Icon }) => (
                <article className="awareness-effect" key={title}>
                  <span className="awareness-effect-icon"><Icon size={19} aria-hidden="true" /></span>
                  <div>
                    <span className="dimension-label">{dimension}</span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          {stageIndex < effectStages.length - 1 && <ArrowRight className="awareness-connector" size={23} aria-hidden="true" />}
          {stageIndex < effectStages.length - 1 && <ArrowDown className="awareness-connector-mobile" size={21} aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}

function ImpactDiagram() {
  const [selectedId, setSelectedId] = useState(1)
  const selectedEffect = assessedEffects.find((effect) => effect.id === selectedId) ?? assessedEffects[0]
  const left = 87
  const right = 704
  const top = 56
  const bottom = 350
  const x = (likelihood: number) => left + ((likelihood - 1) / 4) * (right - left)
  const y = (impact: number) => bottom - ((impact - 1) / 4) * (bottom - top)

  const selectFromKeyboard = (event: React.KeyboardEvent<SVGGElement>, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setSelectedId(id)
    }
  }

  return (
    <div className="impact-visualization">
      <div className="impact-legend" aria-label="Diagram legend">
        <span><i className="impact-legend-positive" aria-hidden="true" />Positive potential effect</span>
        <span><i className="impact-legend-negative" aria-hidden="true" />Negative effect or risk</span>
        <span className="impact-legend-instruction">Select a numbered point for details</span>
      </div>
      <div className="impact-chart-scroll" role="region" aria-label="Scrollable likelihood versus potential sustainability impact chart" tabIndex={0}>
        <svg className="impact-chart" viewBox="0 0 760 425" role="group" aria-labelledby="impact-chart-title impact-chart-description">
          <title id="impact-chart-title">Preliminary likelihood versus sustainability impact assessment</title>
          <desc id="impact-chart-description">An interactive scatter plot with likelihood from 1, low, to 5, high, on the horizontal axis and potential sustainability impact magnitude from 1, low, to 5, high, on the vertical axis. Green circles indicate positive potential effects and rust triangles indicate negative effects or risks. Points sharing ratings are slightly offset for legibility; their exact ratings are shown when selected.</desc>
          {[1, 2, 3, 4, 5].map((rating) => (
            <g key={rating}>
              <line className="impact-gridline" x1={x(rating)} y1={top} x2={x(rating)} y2={bottom} />
              <line className="impact-gridline" x1={left} y1={y(rating)} x2={right} y2={y(rating)} />
              <text className="impact-tick" x={x(rating)} y={bottom + 24} textAnchor="middle">{rating}</text>
              <text className="impact-tick" x={left - 17} y={y(rating) + 4} textAnchor="middle">{rating}</text>
            </g>
          ))}
          <line className="impact-axis" x1={left} y1={bottom} x2={right} y2={bottom} />
          <line className="impact-axis" x1={left} y1={top} x2={left} y2={bottom} />
          <text className="impact-axis-title" x={(left + right) / 2} y="411" textAnchor="middle">Likelihood</text>
          <text className="impact-axis-end" x={left} y={bottom + 42} textAnchor="start">Low</text>
          <text className="impact-axis-end" x={right} y={bottom + 42} textAnchor="end">High</text>
          <text className="impact-axis-title" transform={`translate(19 ${(top + bottom) / 2}) rotate(-90)`} textAnchor="middle">Potential sustainability impact magnitude</text>
          <text className="impact-axis-end" x={left - 30} y={bottom} textAnchor="end">Low</text>
          <text className="impact-axis-end" x={left - 30} y={top + 4} textAnchor="end">High</text>
          {assessedEffects.map((effect) => {
            const pointX = x(effect.likelihood) + effect.offset[0]
            const pointY = y(effect.impact) + effect.offset[1]
            const isSelected = selectedId === effect.id
            return (
              <g
                className={`impact-point impact-point-${effect.direction.toLowerCase()}${isSelected ? ' is-selected' : ''}`}
                key={effect.id}
                role="button"
                tabIndex={0}
                aria-label={`Point ${effect.id}: ${effect.title}. ${effect.direction}. ${effect.dimension}. Likelihood ${effect.likelihood} out of 5; impact magnitude ${effect.impact} out of 5.`}
                aria-pressed={isSelected}
                onClick={() => setSelectedId(effect.id)}
                onKeyDown={(event) => selectFromKeyboard(event, effect.id)}
              >
                {effect.direction === 'Positive'
                  ? <circle cx={pointX} cy={pointY} r="15" />
                  : <polygon points={`${pointX},${pointY - 17} ${pointX + 16},${pointY + 13} ${pointX - 16},${pointY + 13}`} />}
                <text x={pointX} y={pointY + 4} textAnchor="middle" aria-hidden="true">{effect.id}</text>
              </g>
            )
          })}
        </svg>
      </div>
      <p className="impact-offset-note">Points with identical ratings are separated slightly to make each one selectable; the detail panel shows exact values.</p>
      <article className={`impact-detail impact-detail-${selectedEffect.direction.toLowerCase()}`} aria-live="polite" aria-atomic="true">
        <div className="impact-detail-number">{String(selectedEffect.id).padStart(2, '0')}</div>
        <div className="impact-detail-copy">
          <span className="impact-direction">{selectedEffect.direction} {selectedEffect.direction === 'Positive' ? 'potential effect' : 'effect / risk'}</span>
          <h3>{selectedEffect.title}</h3>
          <p>{selectedEffect.explanation}</p>
          <div className="impact-ratings">
            <span>{selectedEffect.dimension}</span>
            <span>Likelihood <b>{selectedEffect.likelihood}/5</b></span>
            <span>Impact magnitude <b>{selectedEffect.impact}/5</b></span>
          </div>
        </div>
      </article>
      <div className="impact-effect-list" aria-label="Select an effect to inspect">
        {assessedEffects.map((effect) => (
          <button
            className={`impact-effect-option${selectedId === effect.id ? ' is-selected' : ''}`}
            key={effect.id}
            type="button"
            aria-pressed={selectedId === effect.id}
            onClick={() => setSelectedId(effect.id)}
          >
            <span className={`impact-option-marker impact-option-${effect.direction.toLowerCase()}`} aria-hidden="true">{String(effect.id).padStart(2, '0')}</span>
            <span>{effect.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Circularity() {
  return (
    <>
      <section className="page-intro circularity-intro">
        <div className="container">
          <Eyebrow>Preliminary sustainability assessment — concept stage</Eyebrow>
          <h1>Circularity &amp; Sustainability</h1>
          <p className="circularity-subtitle">From Individual Action to Systemic Change</p>
          <div className="circularity-intro-copy">
            <p>Return &amp; Earn explores how a simple customer action — returning end-of-life IKEA furniture — could contribute to a more circular material supply chain.</p>
            <p>By combining convenient returns, financial incentives and information about recoverable materials, the service aims to connect individual participation with broader sustainability opportunities.</p>
            <p>However, collecting furniture does not automatically make a system sustainable. Its actual impact depends on customer participation, material quality, logistics, processing costs and whether recovered materials can meaningfully replace virgin resources.</p>
            <p>Our sustainability assessment therefore considers both potential benefits and possible trade-offs.</p>
          </div>
        </div>
      </section>

      <section className="circularity-priority-section" aria-labelledby="circularity-priority-title">
        <div className="container">
          <div className="circularity-priority-heading">
            <Eyebrow>Circularity hierarchy</Eyebrow>
            <h2 id="circularity-priority-title">Recycle only when better options no longer fit.</h2>
            <p>Return &amp; Earn focuses on furniture that can no longer reasonably be maintained, repaired, reused or resold.</p>
          </div>
          <div className="circularity-priorities">
            {circularityPriorities.map(({ title, note, icon: Icon }, index) => (
              <div className={`circularity-priority${index === circularityPriorities.length - 1 ? ' is-focus' : ''}`} key={title}>
                <span className="circularity-priority-icon"><Icon size={19} aria-hidden="true" /></span>
                <strong>{title}</strong>
                <small>{note}</small>
                {index < circularityPriorities.length - 1 && <ArrowRight className="circularity-priority-arrow" size={16} aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section circularity-section">
        <div className="container">
          <SectionHeading
            eyebrow="Sustainability awareness diagram"
            title="From Individual Action to Systemic Change"
            description="The sustainability effects of Return & Earn can be understood as a chain. Immediate changes introduced by the service could enable new behaviors and operational practices, which may eventually contribute to broader structural changes."
          />
          <AwarenessDiagram />
          <div className="tradeoff-panel">
            <div className="tradeoff-heading">
              <span className="tradeoff-warning-icon"><AlertTriangle size={21} aria-hidden="true" /></span>
              <div>
                <Eyebrow>Constraints across the effect chain</Eyebrow>
                <h3>Trade-offs That May Limit Long-Term Benefits</h3>
                <p>These risks could weaken or interrupt the links between participation, recovery and wider change.</p>
              </div>
            </div>
            <div className="tradeoff-grid">
              {tradeOffs.map(({ dimension, title, description, icon: Icon }) => (
                <article className="tradeoff-item" key={title}>
                  <Icon size={18} aria-hidden="true" />
                  <div><span className="dimension-label">{dimension}</span><h4>{title}</h4><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section circularity-section circularity-dimensions">
        <div className="container">
          <SectionHeading
            eyebrow="Sustainable Requirements Framework"
            title="Evaluating Sustainability Across Five Dimensions"
            description="Sustainability is more than environmental impact. We evaluate how Return & Earn could affect individuals, society, the environment, economic systems and the technology required to operate the service."
          />
          <div className="sustainability-dimensions">
            {dimensions.map(({ title, focus, icon: Icon, benefits, risks, requirements }, index) => (
              <article className="sustainability-dimension-card" key={title}>
                <header className="sustainability-dimension-header">
                  <span className="dimension-card-number">0{index + 1}</span>
                  <span className="dimension-card-icon"><Icon size={21} aria-hidden="true" /></span>
                  <div><h3>{title}</h3><p>{focus}</p></div>
                </header>
                <div className="dimension-content-grid">
                  <div className="dimension-content dimension-potential">
                    <h4>Potential benefits</h4>
                    <ul>{benefits.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="dimension-content dimension-risks">
                    <h4>Risks and limitations</h4>
                    <ul>{risks.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="dimension-content dimension-requirements">
                    <h4>Requirements and questions to validate</h4>
                    <ul>{requirements.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section circularity-section impact-section">
        <div className="container">
          <SectionHeading
            eyebrow="Likelihood vs. sustainability impact diagram"
            title="How Likely Are These Effects — and How Significant Could They Be?"
            description="Not all potential sustainability effects are equally likely or equally significant. The following assessment illustrates our team's current expectations. These ratings are qualitative, preliminary and should be revisited as we collect evidence."
          />
          <div className="impact-scale-note"><strong>Qualitative scale:</strong> 1 = low, 5 = high. Impact is magnitude, not desirability—high-magnitude negative risks remain negative.</div>
          <ImpactDiagram />
          <aside className="interpretation-panel">
            <span><ShieldCheck size={20} aria-hidden="true" /></span>
            <div>
              <h3>How to interpret this assessment</h3>
              <p>Effects with high potential impact but low likelihood represent important opportunities or uncertainties. High-likelihood negative effects indicate trade-offs that need early attention. The purpose of this assessment is to guide research and design decisions, not to predict measured sustainability outcomes.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section circularity-section validation-section">
        <div className="container">
          <SectionHeading
            eyebrow="Open questions"
            title="From Concept to Evidence"
            description="Return &amp; Earn is still a proposed service. Before concluding that it delivers net sustainability benefits, several assumptions need to be tested."
          />
          <div className="validation-grid">
            {validationQuestions.map(({ title, question, icon: Icon }, index) => (
              <article className="validation-card" key={title}>
                <span className="validation-icon"><Icon size={19} aria-hidden="true" /></span>
                <span className="validation-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{question}</p>
              </article>
            ))}
          </div>
          <div className="circularity-sources">
            <div>
              <Eyebrow>Context for further research</Eyebrow>
              <h3>Sources and references</h3>
              <p>These sources provide background on IKEA sustainability, furniture, product materials and particleboard. They do not validate the proposed service's impact or the preliminary ratings above.</p>
            </div>
            <ul>
              {references.map((reference) => (
                <li key={reference.title}>
                  {reference.url
                    ? <a href={reference.url} target="_blank" rel="noopener noreferrer"><span><strong>{reference.title}</strong><small>{reference.publisher}</small></span><ArrowRight size={16} aria-hidden="true" /></a>
                    : <span className="source-unavailable"><strong>{reference.title}</strong><small>{reference.publisher} · Origin, details and claims require manual verification</small></span>}
                </li>
              ))}
            </ul>
          </div>
          <p className="framework-note">The three orders of effects and five sustainability dimensions are applied here using the course framework terminology provided to the project team. All effects, likelihood ratings and impact ratings are preliminary team judgments—not measured outcomes or externally validated findings.</p>
        </div>
      </section>
    </>
  )
}
