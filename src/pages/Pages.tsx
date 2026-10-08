import {
  Armchair,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Box,
  Check,
  CircleDollarSign,
  ClipboardList,
  Factory,
  FileQuestion,
  HandCoins,
  HeartHandshake,
  Leaf,
  Layers,
  LockKeyhole,
  Recycle,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Truck,
  Users,
  Wrench,
} from 'lucide-react'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import chalmersLogo from '../assets/chalmers-logo.png'
import { ikeaSources, sources, teamMembers } from '../data/siteContent'
import { Eyebrow, FlowList, InfoCard, Notice, PageIntro, SectionHeading } from '../components/common/Content'

function Cite({ n }: { n: number }) {
  const source = ikeaSources.find((item) => item.number === n)
  return <sup className="cite"><Link to={`/references#ref-${n}`} aria-label={`Reference ${n}: ${source?.title ?? ''}`}>[{n}]</Link></sup>
}

function SourceLink({ n, children }: { n: number; children: ReactNode }) {
  const source = ikeaSources.find((item) => item.number === n)
  if (!source) return null
  return <a className="source-link" href={source.url} target="_blank" rel="noopener noreferrer">{children} <ArrowUpRight aria-hidden="true" /></a>
}

const steps = [
  { title: 'Identify', text: 'Find or scan an IKEA product.', icon: ScanLine },
  { title: 'Estimate', text: 'Estimate net material value from material types, quantities and recovery costs.', icon: ClipboardList },
  { title: 'Review Offer', text: 'See the estimated voucher, including a proposed return bonus.', icon: HandCoins },
  { title: 'Return', text: 'Bring eligible end-of-life furniture to IKEA.', icon: Truck },
  { title: 'Verify & Reward', text: 'IKEA verifies the return and issues the voucher if accepted.', icon: ShieldCheck },
  { title: 'Recover', text: 'Suitable materials are sorted and processed into potential secondary raw materials.', icon: Recycle },
]

function StepCards() {
  const renderStep = (step: (typeof steps)[number], index: number) => {
    const Icon = step.icon
    return (
      <article className={`step-card solution-step-card solution-step-card-${index + 1}`} role="listitem" key={step.title}>
        <span className="step-number">0{index + 1}</span>
        <span className="card-icon"><Icon size={21} aria-hidden="true" /></span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </article>
    )
  }

  return (
    <div className="solution-journey" role="group" aria-label="Six-step Return and Earn journey">
      <div className="solution-journey-row" role="list" aria-label="Steps 1 to 3">
        {renderStep(steps[0], 0)}
        <svg className="solution-journey-link" viewBox="0 0 36 24" role="presentation" aria-hidden="true"><path d="M0 12h29m-7-7 7 7-7 7" /></svg>
        {renderStep(steps[1], 1)}
        <svg className="solution-journey-link" viewBox="0 0 36 24" role="presentation" aria-hidden="true"><path d="M0 12h29m-7-7 7 7-7 7" /></svg>
        {renderStep(steps[2], 2)}
      </div>
      <svg className="solution-journey-turn" viewBox="0 0 1000 52" preserveAspectRatio="none" role="presentation" aria-hidden="true">
        <path className="solution-journey-turn-desktop" d="M843 0v26H156v26m-7-7 7 7 7-7" />
        <path className="solution-journey-turn-mobile" d="M500 0v45m-7-7 7 7 7-7" />
      </svg>
      <div className="solution-journey-row" role="list" aria-label="Steps 4 to 6">
        {renderStep(steps[3], 3)}
        <svg className="solution-journey-link" viewBox="0 0 36 24" role="presentation" aria-hidden="true"><path d="M0 12h29m-7-7 7 7-7 7" /></svg>
        {renderStep(steps[4], 4)}
        <svg className="solution-journey-link" viewBox="0 0 36 24" role="presentation" aria-hidden="true"><path d="M0 12h29m-7-7 7 7-7 7" /></svg>
        {renderStep(steps[5], 5)}
      </div>
    </div>
  )
}

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <span className="hero-kicker"><span className="pulse-dot" /> A circularity concept</span>
            <h1>Old furniture.<br /><span>New possibilities.</span></h1>
            <p>Return &amp; Earn is a proposed IKEA service that makes recycling end-of-life furniture simple and rewarding. Identify an old item, see an estimated recycling value, and return it for a voucher.</p>
            <div className="hero-actions">
              <Link className="button button-yellow" to="/solution">Explore our solution <ArrowRight size={17} /></Link>
              <Link className="text-link" to="/problem">Why does it matter? <ArrowUpRight size={16} /></Link>
            </div>
            <div className="hero-meta"><span><Leaf size={15} /> End-of-life materials</span><span><span className="meta-divider" />Chalmers capstone concept</span></div>
          </div>
          <div className="hero-art" aria-label="Illustration of furniture returning to material resources">
            <div className="art-glow" />
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="furniture-scene">
              <div className="bookcase">
                <div className="shelf shelf-top"><i /><i /><i /></div>
                <div className="shelf shelf-middle"><i /><i /></div>
                <div className="shelf shelf-bottom"><i /><i /><i /></div>
              </div>
              <div className="scene-label">BILLY · end of life</div>
            </div>
            <div className="material-bubble bubble-wood"><span>▰</span> wood</div>
            <div className="material-bubble bubble-metal"><span>◌</span> metal</div>
            <div className="material-bubble bubble-plastic"><span>◇</span> plastics</div>
            <div className="art-caption"><Recycle size={17} /><span>Useful materials,<br /><strong>back in the loop.</strong></span></div>
            <div className="art-index">01 — 04</div>
          </div>
        </div>
        <div className="hero-bottom container"><span>FROM FURNITURE TO MATERIALS</span><span>Scroll to explore <ArrowDown size={14} /></span></div>
      </section>
      <section className="section section-compact">
        <div className="container">
          <SectionHeading eyebrow="A simple idea" title="Give end-of-life furniture another purpose." description="When repair, reuse and resale are no longer reasonable, materials can still have value." />
          <FlowList items={['Old furniture', 'Return', 'Material recovery', 'New materials']} />
          <div className="home-footnote"><span className="mini-marker" /> A proposed service concept — not an existing IKEA offer.</div>
        </div>
      </section>
      <section className="home-banner">
        <div className="container banner-inner">
          <div><Eyebrow light>Two-sided value</Eyebrow><h2>A small reward for customers.<br />A material opportunity for IKEA.</h2></div>
          <Link to="/ikea" className="button button-outline">See the opportunity <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  )
}

export function Problem() {
  return (
    <>
      <PageIntro eyebrow="01 · The challenge" title="Good materials shouldn't end up as a disposal problem." description="Furniture at the end of its useful life can still contain materials with potential value. Yet returning bulky items for recycling is not always easy or rewarding." />
      <section className="section">
        <div className="container">
          <div className="perspective-grid">
            <article className="perspective-card perspective-environment">
              <div className="perspective-top"><span className="card-icon"><Leaf /></span><span className="perspective-number">01 / PLANET</span></div>
              <h2>Materials are lost from useful cycles.</h2>
              <p>End-of-life furniture can contain wood, metals, plastics and textiles. When these materials are not recovered, potential secondary resources are lost and demand for virgin materials may remain higher.</p>
              <div className="furniture-stat">
                <div className="furniture-stat-main"><strong>~10 million tonnes</strong><span>of furniture waste generated in the EU each year</span></div>
                <div className="furniture-stat-context"><strong>80–90%</strong><p>Historically estimated to be incinerated or landfilled within the EU municipal furniture-waste stream.</p></div>
                <p className="furniture-stat-sources">Sources: <a href="https://circulareconomy.europa.eu/platform/sites/default/files/2024-12/JRC138903_01.pdf" target="_blank" rel="noopener noreferrer">European Commission JRC (2024)</a>; <a href="https://eeb.org/en/library/circular-economy-opportunities-in-the-furniture-sector/" target="_blank" rel="noopener noreferrer">EEB/Eunomia (2017)</a>.</p>
              </div>
            </article>
            <article className="perspective-card perspective-individual">
              <div className="perspective-top"><span className="card-icon"><Users /></span><span className="perspective-number">02 / PEOPLE</span></div>
              <h2>Disposal takes effort—with little in return.</h2>
              <p>Getting rid of a bulky item can mean planning, arranging transport and making a separate trip. Customers may pay to dispose of something that has no resale value, with little direct reason to return it for material recycling.</p>
              <ul className="check-list">
                <li><Check /> Finding a suitable disposal option</li>
                <li><Check /> Moving and transporting a bulky item</li>
                <li><Check /> Time and possible disposal costs</li>
                <li><Check /> No obvious reward for material recovery</li>
              </ul>
              <div className="path-illustration"><span>At home</span><ArrowRight /><span className="path-dash" /><span>Recycling centre</span></div>
            </article>
          </div>
          <div className="question-banner"><Sparkles /><p>What if end-of-life furniture could become a valuable resource instead of a disposal problem?</p></div>
        </div>
      </section>
    </>
  )
}

export function Solution() {
  return (
    <>
      <PageIntro eyebrow="02 · Our solution" title="A take-back system designed around material recovery." description="Return & Earn proposes a digital service where customers identify end-of-life IKEA furniture, receive a voucher estimate based on its potential recoverable material value, and return it to IKEA for verification and material recovery." />
      <section className="section section-tight">
        <div className="container">
          <div className="solution-intro">
            <div className="solution-copy"><Eyebrow>How it could work</Eyebrow><h2>Return what has reached its end. Recover what still has value.</h2><p>Return &amp; Earn combines a simple digital return process with a proposed voucher incentive. The estimate considers the type and quantity of recoverable materials, assumed recovery costs, and an additional return bonus to encourage participation. After IKEA verifies and accepts the return, suitable materials could be processed for recovery.</p></div>
            <figure className="value-equation" aria-label="Illustrative BILLY bookcase voucher calculation: potential recoverable materials are primarily wood-based board with smaller metal and plastic components; 12 SEK estimated net material value plus 20 SEK proposed return bonus equals a 32 SEK estimated voucher">
              <figcaption>HOW A VOUCHER COULD BE CALCULATED</figcaption>
              <p className="value-equation-subtitle">Illustrative example · BILLY bookcase</p>
              <div className="value-equation-materials">
                <strong>Potential recoverable materials</strong>
                <span>Primarily wood-based board</span>
                <span>Smaller metal and plastic components</span>
                <small>Conceptual assessment, not a verified recycling specification.</small>
              </div>
              <div className="value-equation-calculation">
                <div className="value-equation-row"><span>Estimated net material value</span><strong>12 SEK</strong></div>
                <div className="value-equation-row"><span>Proposed return bonus</span><strong>+20 SEK</strong></div>
                <div className="value-equation-result"><span>Estimated voucher</span><strong>32 SEK</strong></div>
              </div>
              <p className="value-equation-note">Net material value includes assumed recovery costs.</p>
              <p className="value-equation-disclaimer">Illustrative figures only — not verified pricing or an IKEA offer.</p>
            </figure>
          </div>
          <SectionHeading eyebrow="The proposed journey" title="Six steps from product to recovered material" />
          <StepCards />
          <Notice>The concept focuses on returns at IKEA stores. Collection alongside a new furniture delivery could be explored as a future option.</Notice>
          <div className="solution-recovery-conclusion"><Recycle size={19} aria-hidden="true" /><p>Over time, recovered materials could provide IKEA with a more consistent source of secondary raw materials, potentially reducing the need for virgin resources.</p></div>
        </div>
      </section>
    </>
  )
}

function Phone({ title, children, number }: { title: string; children: ReactNode; number: string }) {
  return (
    <article className="phone-wrap">
      <span className="phone-step">{number} / 03</span>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-brand"><span>ikea</span><span>⋯</span></div>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </article>
  )
}

export function Demo() {
  return (
    <>
      <PageIntro eyebrow="03 · Concept demo" title="See Return & Earn in action." description="A first look at how customers could recycle furniture through an IKEA-style app. These screens are static concept mockups." />
      <section className="section demo-section">
        <div className="container">
          <div className="demo-disclaimer"><Smartphone /><span>Illustrative prototype · No IKEA systems are connected</span></div>
          <div className="phones-grid">
            <Phone title="Find your product" number="01">
              <div className="phone-search"><ScanLine size={15} /> Search products</div>
              <div className="phone-product"><div className="mini-bookcase"><i /><i /><i /></div><div><strong>BILLY</strong><small>Bookcase, white<br />80 × 28 × 202 cm</small></div><Check size={16} /></div>
              <div className="phone-tip">Does your furniture need replacing? Check if its materials could be recovered.</div>
              <button className="phone-button" type="button">Check recycling value</button>
            </Phone>
            <Phone title="Your estimate" number="02">
              <div className="estimate-head"><span>Illustrative estimate</span><strong>32 <small>SEK</small></strong></div>
              <div className="estimate-row"><span>Particleboard</span><b>12 SEK</b></div>
              <div className="estimate-row"><span>Metal fittings</span><b>Included</b></div>
              <div className="estimate-row"><span>Plastic components</span><b>Included</b></div>
              <div className="estimate-bonus"><span>Circularity bonus</span><b>+ 20 SEK</b></div>
              <div className="phone-warning">Final value depends on inspection and material recovery.</div>
            </Phone>
            <Phone title="Ready to return" number="03">
              <div className="return-check"><span><Check /></span><b>Your item is ready for review</b><small>Bring your furniture to a participating IKEA returns point.</small></div>
              <div className="qr-placeholder" aria-label="Decorative QR code placeholder"><div /></div>
              <div className="phone-warning">Sample confirmation only. No voucher or QR code is active.</div>
              <button className="phone-button" type="button">View return details</button>
            </Phone>
          </div>
          <Notice tone="yellow">The 12 SEK material score and 20 SEK circularity bonus are fictional examples for this concept. They are not actual IKEA offers.</Notice>
        </div>
      </section>
    </>
  )
}

export function Customers() {
  return (
    <>
      <PageIntro eyebrow="04 · Customer value" title="Meet Emma." description="How could Return & Earn make replacing old furniture easier and more rewarding?" />
      <section className="section section-tight">
        <div className="container">
          <div className="persona-banner">
            <div className="persona-avatar">E<span>✳</span></div>
            <div><Eyebrow>ILLUSTRATIVE PERSONA</Eyebrow><h2>Emma, 22 <span>· University student</span></h2><p>Emma is a 22-year-old university student with a limited budget. Her old BILLY bookcase is broken beyond reasonable repair, and she's planning to visit IKEA to buy a replacement. She can bring the old bookcase along, but wants the trip to be worthwhile.</p></div>
            <div className="persona-item"><div className="mini-bookcase"><i /><i /><i /></div><span>Her old BILLY</span></div>
          </div>
          <div className="before-after">
            <article className="journey-card journey-before">
              <span className="journey-label">WITHOUT RETURN &amp; EARN</span><h3>Two separate errands.</h3>
              <ul><li>Find out where to recycle the broken bookcase</li><li>Arrange a separate trip to the recycling centre, potentially involving transport costs.</li><li>Visit IKEA to buy a replacement bookcase</li><li>Receive no incentive for returning the old furniture</li></ul>
            </article>
            <div className="journey-arrow"><ArrowRight /></div>
            <article className="journey-card journey-after">
              <span className="journey-label">WITH THE CONCEPT</span><h3>One IKEA visit. Two things taken care of.</h3>
              <ul><li>Identify the old BILLY through the app</li><li>See the estimated material value and return instructions</li><li>Bring the old bookcase when visiting IKEA for its replacement</li><li>Return the bookcase and receive a small voucher if IKEA accepts it.</li></ul>
            </article>
          </div>
          <div className="card-grid card-grid-four">
            <InfoCard icon={HeartHandshake} title="Convenience">Emma combines furniture recycling with a planned IKEA shopping trip.</InfoCard>
            <InfoCard icon={CircleDollarSign} title="An Incentive">A small proposed voucher makes returning her old furniture more rewarding.</InfoCard>
            <InfoCard icon={Smartphone} title="Simplicity">The app guides Emma through identifying and returning her bookcase.</InfoCard>
            <InfoCard icon={Box} title="Transparency">An estimate shows the potential material value before she returns it.</InfoCard>
          </div>
          <Notice>Return &amp; Earn is intended for furniture that can no longer reasonably be repaired, reused or resold.</Notice>
        </div>
      </section>
    </>
  )
}

export function Ikea() {
  return (
    <>
      <PageIntro eyebrow="05 · IKEA value" title="Why IKEA?" description="Connecting a broader sustainability problem to IKEA's circularity ambitions." />
      <section className="section section-tight ikea-page">
        <div className="container">
          <section className="ikea-intro">
            <div className="ikea-intro-copy">
              <Eyebrow>Our team's perspective</Eyebrow>
              <h2>Turning end-of-life furniture into an opportunity</h2>
              <p>Even when furniture can no longer be repaired, reused, or resold, it may still contain valuable materials.</p>
              <p>Return &amp; Earn proposes a way for IKEA to encourage customers to return these products, creating opportunities to recover materials for future use.</p>
            </div>
            <div className="ikea-benefit-cards">
              <InfoCard icon={Recycle} title="Material Recovery">Returns could help IKEA build a more consistent supply of recoverable materials. Those meeting quality and processing requirements could become secondary raw materials, potentially reducing virgin-material demand over time.</InfoCard>
              <InfoCard icon={Leaf} title="Circularity Ambitions">Support IKEA's efforts to increase recycled-material use and develop circular services.</InfoCard>
            </div>
          </section>

          <section className="ikea-value-section">
            <SectionHeading
              eyebrow="A two-sided value exchange"
              title="A value exchange built around materials"
              description="Customers have end-of-life furniture. Return &amp; Earn encourages them to return it. IKEA gains an opportunity to recover useful materials."
            />
            <div className="ikea-value-diagram">
              <div className="ikea-model-actors">
                <article className="ikea-model-party">
                  <span className="ikea-actor-icon"><Users size={24} /></span>
                  <h3>Customers</h3>
                  <p>Have end-of-life furniture that may still contain useful materials.</p>
                </article>
                <div className="ikea-model-service">
                  <span className="ikea-service-mark">R<span>&amp;</span>E</span>
                  <b>Return &amp; Earn</b>
                  <small>Makes returning furniture easier and more rewarding.</small>
                </div>
                <article className="ikea-model-party ikea-model-party-ikea">
                  <span className="ikea-actor-icon"><Factory size={24} /></span>
                  <h3>IKEA</h3>
                  <p>Gains access to end-of-life furniture as a potential source of secondary raw materials.</p>
                </article>
              </div>
              <div className="ikea-exchange-flows" aria-label="Proposed return and incentive exchange">
                <div className="ikea-flow-row ikea-flow-return"><span>Customers</span><ArrowRight /><b>End-of-life furniture</b><ArrowRight /><span>IKEA</span></div>
                <div className="ikea-flow-row ikea-flow-incentive"><span>IKEA</span><ArrowLeft /><b>Proposed voucher / incentive</b><ArrowLeft /><span>Customers</span></div>
              </div>
              <div className="ikea-material-outcome">
                <span className="ikea-outcome-label">A POSSIBLE MATERIAL OUTCOME</span>
                <div className="ikea-outcome-flow">
                  <span><Armchair /> Returned furniture</span>
                  <ArrowRight className="ikea-outcome-arrow" />
                  <span><Recycle /> Material recovery</span>
                  <ArrowRight className="ikea-outcome-arrow" />
                  <span className="ikea-outcome-final"><Layers /> Potential secondary raw materials for IKEA</span>
                </div>
              </div>
              <p className="ikea-diagram-note">Materials would only be suitable for future use if they meet relevant quality and processing requirements. Recovery and reintegration are not guaranteed.</p>
            </div>
          </section>

          <section className="ikea-needs">
            <SectionHeading eyebrow="IKEA's published priorities" title="What IKEA says it needs" />
            <p className="ikea-needs-message">IKEA wants access to suitable secondary raw materials.<Cite n={1} /> Return &amp; Earn explores whether incentivized furniture returns can help create an additional source.</p>
            <div className="ikea-needs-grid">
              <article className="ikea-need-card ikea-need-primary">
                <span className="ikea-need-icon"><Layers aria-hidden="true" /></span>
                <span className="ikea-need-focus">Return &amp; Earn's primary opportunity</span>
                <h3>Availability</h3>
                <p>IKEA needs access to suitable secondary raw materials<Cite n={1} />, and notes that recycled feedstock availability is currently insufficient.<Cite n={4} /></p>
                <div className="ikea-need-contribution"><b>Potential contribution</b><span>More returned end-of-life furniture could create an additional possible material stream.</span></div>
              </article>
              <article className="ikea-need-card">
                <span className="ikea-need-icon"><ScanLine aria-hidden="true" /></span>
                <h3>Traceability</h3>
                <p>Recovered materials need information about their origin and composition.<Cite n={1} /></p>
                <div className="ikea-need-contribution"><b>Potential contribution</b><span>Scanning, search or purchase history could help document what is returned, though not provide complete traceability by itself.</span></div>
              </article>
              <article className="ikea-need-card">
                <span className="ikea-need-icon"><CircleDollarSign aria-hidden="true" /></span>
                <h3>Affordability</h3>
                <p>Secondary material sourcing needs to be economically viable.<Cite n={1} /></p>
                <div className="ikea-need-contribution"><b>Potential contribution</b><span>Explore whether recovered material value and circularity benefits can justify incentive, collection and processing costs.</span></div>
              </article>
            </div>
            <p className="source-line">Source: <SourceLink n={1}>IKEA Sustainability Strategy 2025–2030</SourceLink></p>
          </section>

          <section className="ikea-goals-transition">
            <div>
              <Eyebrow>Looking ahead</Eyebrow>
              <h2>How does this connect to IKEA's ambitions?</h2>
              <p>IKEA has established sustainability and circularity ambitions for 2030. Return &amp; Earn explores one possible way to contribute to those ambitions through end-of-life material recovery.</p>
            </div>
            <Link className="button button-primary" to="/sustainability-goals">Explore IKEA's 2030 Goals <ArrowRight size={17} /></Link>
          </section>
        </div>
      </section>
    </>
  )
}

export function SustainabilityGoals() {
  const targets = [
    { value: '≥90%', label: 'Recycled or renewable material content', by: 'FY2030' },
    { value: '90%', label: 'Average circular fulfilment score', by: 'FY2030' },
    { value: '≥80%', label: 'IKEA markets offering circular services', by: 'FY2030' },
  ]
  return (
    <>
      <PageIntro eyebrow="06 · Sustainability goals" title="Supporting IKEA's 2030 Sustainability Ambitions" description="Challenge 3 — Turn Circularity into a Scalable and Profitable Business Model — is the challenge IKEA provided to our university project. Return &amp; Earn explores a possible contribution through end-of-life material recovery." />
      <section className="section section-tight goals-page">
        <div className="container">
          <div className="challenge-strip"><span>CHALLENGE 3</span><strong>Turn Circularity into a Scalable and Profitable Business Model</strong><p>Connect circular product design, secondary materials, take-back services, recycling and economically viable customer experiences.</p></div>
          <div className="targets-grid">
            {targets.map((target) => <article className="target-card" key={target.label}><strong>{target.value}</strong><p>{target.label}</p><span>{target.by} ambition</span></article>)}
          </div>
          <p className="source-line source-line-left">Source: <SourceLink n={1}>IKEA Sustainability Strategy 2025–2030</SourceLink> <Cite n={1} /></p>
          <section className="wood-detail">
            <SectionHeading
              eyebrow="Materials in focus"
              title="A closer look: recycled wood and particleboard"
              description="IKEA has also set specific recycled-wood ambitions. These are separate from the broader 90% target, which covers recycled or renewable content."
            />
            <div className="wood-ambitions">
              <article className="target-card">
                <strong>80%</strong>
                <p>Recycled wood content in particleboard</p>
                <span>2030 ambition</span>
              </article>
              <article className="target-card">
                <strong>≥ ⅓</strong>
                <p>At least one-third of IKEA's wood-based range made from recycled wood by 2030.</p>
                <span>Separate range-level ambition</span>
              </article>
            </div>
            <div className="wood-progress" role="group" aria-label="Recycled wood content in particleboard: FY24 reported compared with the 2030 ambition">
              <h3 className="wood-progress-heading">The particleboard ambition</h3>
              <div className="wood-progress-row">
                <div className="wood-progress-label"><b>FY24 reported</b><span>Recycled wood content in particleboard</span></div>
                <div className="wood-progress-track"><i className="wood-progress-fill wood-progress-actual" style={{ width: '30.3%' }} /></div>
                <strong>30.3%</strong>
              </div>
              <div className="wood-progress-row">
                <div className="wood-progress-label"><b>FY30 ambition</b><span>Recycled wood content in particleboard</span></div>
                <div className="wood-progress-track"><i className="wood-progress-fill wood-progress-target" style={{ width: '80%' }} /></div>
                <strong>80%</strong>
              </div>
              <p className="wood-progress-note">In FY24, IKEA reported 30.3% recycled wood content in particleboard<Cite n={2} />, compared with its 80% ambition for 2030<Cite n={1} />. Return &amp; Earn explores whether end-of-life furniture could provide an additional source of suitable recycled wood.</p>
              <p className="wood-progress-caveat">IKEA's recycled wood can include pre- and post-consumer sources<Cite n={3} />; recovered materials must meet quality and processing requirements. Return &amp; Earn is a proposal, not an IKEA service.</p>
            </div>
            <p className="source-line source-line-left">Sources: <SourceLink n={2}>IKEA Sustainability Report FY24</SourceLink> <Cite n={2} /> · <SourceLink n={3}>IKEA Wood and Forestry</SourceLink> <Cite n={3} /></p>
          </section>
          <div className="wood-focus"><span className="wood-icon"><span /><span /><span /></span><div><Eyebrow>Why BILLY?</Eyebrow><h3>Particleboard is widely used in IKEA furniture</h3><p>Particleboard is widely used in IKEA furniture, including products such as BILLY.<Cite n={5} /> Recovering suitable wood-based material from end-of-life furniture could potentially contribute to the supply of recycled material used in future particleboard production. This is a possibility to investigate: not every bookcase can be recycled into new particleboard, and Return &amp; Earn is not an existing IKEA service.</p></div><SourceLink n={5}>IKEA wood design and innovation</SourceLink></div>
          <div className="wood-challenge">
            <h3>The challenge is not only recycling — it is securing suitable materials.</h3>
            <p>IKEA has identified that current availability of recycled feedstock is insufficient.<Cite n={4} /> By encouraging customers to return furniture that has reached the end of its usable life, Return &amp; Earn explores whether more suitable post-consumer material could become available for recovery. The service is intended for furniture that can no longer reasonably be repaired, reused or resold.</p>
            <p className="source-line source-line-left">Source: <SourceLink n={4}>IKEA Recycled Materials</SourceLink> <Cite n={4} /></p>
          </div>
          <SectionHeading
            eyebrow="A proposed material journey"
            title="From old furniture to potential new resources"
            description="An illustrative path showing how returned furniture might lead to useful materials. Each step depends on recovery, quality and feasibility."
          />
          <ol className="goals-journey">
            <li className="goals-journey-step">
              <span className="goals-step-number">01</span>
              <div className="goals-illustration goals-illustration-bookcase" aria-hidden="true">
                <div className="goals-bookcase"><i /><i /><i /><span /><span /></div>
                <span className="goals-wear-mark">···</span>
              </div>
              <h3>End-of-life furniture</h3>
              <p>A bookcase that can no longer reasonably be repaired or reused may still contain recoverable materials.</p>
              <span className="goals-journey-arrow" aria-hidden="true"><ArrowRight /></span>
            </li>
            <li className="goals-journey-step goals-journey-incentive">
              <span className="goals-step-number">02</span>
              <div className="goals-illustration goals-illustration-return" aria-hidden="true"><Truck /><span className="goals-return-token">VOUCHER</span></div>
              <h3>Incentivized Return</h3>
              <p>Return &amp; Earn offers customers a proposed recycling incentive, encouraging them to bring end-of-life furniture back to IKEA.</p>
              <span className="goals-journey-arrow" aria-hidden="true"><ArrowRight /></span>
            </li>
            <li className="goals-journey-step">
              <span className="goals-step-number">03</span>
              <div className="goals-illustration goals-illustration-recovery" aria-hidden="true"><Recycle /><span className="goals-recovered-wood" /><span className="goals-recovered-metal" /></div>
              <h3>Material recovery</h3>
              <p>Suitable materials could be sorted and processed for recycling.</p>
              <span className="goals-journey-arrow" aria-hidden="true"><ArrowRight /></span>
            </li>
            <li className="goals-journey-step">
              <span className="goals-step-number">04</span>
              <div className="goals-illustration goals-illustration-material"><Layers /><span className="goals-board-stack"><i /><i /><i /></span></div>
              <h3>Secondary raw materials</h3>
              <p>Recovered materials could become secondary raw materials, subject to quality and processing requirements.</p>
              <span className="goals-journey-arrow" aria-hidden="true"><ArrowRight /></span>
            </li>
            <li className="goals-journey-step">
              <span className="goals-step-number">05</span>
              <div className="goals-illustration goals-illustration-product" aria-hidden="true"><Factory /><div className="goals-new-cabinet"><i /><i /></div></div>
              <h3>Potential new IKEA products</h3>
              <p>Where technically and economically feasible, recycled materials could potentially replace virgin materials in future products.</p>
            </li>
          </ol>
          <div className="goals-measurement-note"><Recycle size={17} /><span>This is a proposed pathway, not a proven or guaranteed closed material loop.</span></div>
          <div className="goals-ikea-connection">
            <span className="goals-connection-icon"><Leaf size={20} /></span>
            <div><Eyebrow>Why this matters for IKEA</Eyebrow><p>By encouraging more customers to return end-of-life furniture, Return &amp; Earn could increase the amount of material available for recovery. Where suitable materials can be recycled and reused, this could support IKEA's ambitions to increase recycled-material content and reduce reliance on virgin resources.</p></div>
          </div>
          <div className="goals-metrics-heading">
            <SectionHeading eyebrow="Proposed future measurements" title="How could impact be measured?" />
            <span className="tag tag-outline">NOT PROJECT RESULTS</span>
          </div>
          <div className="metric-grid">
            <InfoCard icon={Box} title="Materials Recovered">Tonnes of recovered materials.</InfoCard>
            <InfoCard icon={Recycle} title="Recycling Rate">Percentage of returned material successfully recovered for recycling.</InfoCard>
            <InfoCard icon={Leaf} title="Virgin Materials Replaced">Amount of recovered material actually used instead of virgin inputs.</InfoCard>
            <InfoCard icon={Factory} title="Closed-Loop Rate">Percentage of recovered materials returning to IKEA products or its supply chain.</InfoCard>
          </div>
          <section className="goals-proof">
            <div className="goals-proof-heading">
              <Eyebrow>Research questions</Eyebrow>
              <h2>What still needs to be proven?</h2>
              <p>Recovering materials does not automatically mean they can replace virgin materials in IKEA products. Several technical and economic questions need to be investigated.</p>
            </div>
            <div className="goals-proof-grid">
              <InfoCard icon={Recycle} title="Material Recovery">How much usable material can actually be recovered from returned furniture?</InfoCard>
              <InfoCard icon={ShieldCheck} title="Material Quality">Can the recovered materials meet the requirements for future IKEA products?</InfoCard>
              <InfoCard icon={CircleDollarSign} title="Economic Viability">Can the recovered value justify collection, incentives, sorting, and processing costs?</InfoCard>
              <InfoCard icon={Factory} title="Actual Circular Impact">How much recovered material would genuinely replace virgin inputs rather than simply being collected?</InfoCard>
            </div>
          </section>
          <Notice>Targets shown are IKEA's published ambitions, and reported figures come from the sources cited above; check IKEA's latest reporting before external publication. Impact measures are proposed future measurements—not actual project results.</Notice>
        </div>
      </section>
    </>
  )
}

export function Circularity() {
  const dimensions = [
    { icon: Users, title: 'Individual', items: 'Convenience · Affordability · Agency · Accessibility', note: 'Trade-off: voucher values may be modest or vary between products.' },
    { icon: HeartHandshake, title: 'Social', items: 'Participation · Inclusiveness · Trust · Transparency', note: 'Trade-off: unclear eligibility or verification could reduce trust.' },
    { icon: Leaf, title: 'Environmental', items: 'Material recovery · Waste reduction · Logistics · Energy', note: 'Trade-off: extra transport and sorting consume resources.' },
    { icon: CircleDollarSign, title: 'Economic', items: 'Incentives · Material value · Processing costs · Scale', note: 'Trade-off: rewards may exceed the recovered material value.' },
    { icon: LockKeyhole, title: 'Technical', items: 'Usability · Maintainability · Adaptability · Privacy', note: 'Trade-off: product data and return verification add system complexity.' },
  ]
  return (
    <>
      <PageIntro eyebrow="07 · Circularity & sustainable software" title="Beyond recycling—building a circular system." description="A responsible take-back service starts by keeping useful products in use. It also considers the wider social, environmental, economic and technical consequences of the software." />
      <section className="section section-tight">
        <div className="container">
          <SectionHeading eyebrow="Circularity hierarchy" title="Recycle only when better options no longer fit." description="Return & Earn focuses on end-of-life furniture. It should not encourage customers to recycle something that remains useful." />
          <div className="hierarchy">
            {[
              { name: 'Maintain', icon: Wrench },
              { name: 'Repair', icon: Wrench },
              { name: 'Reuse', icon: HeartHandshake },
              { name: 'Resell', icon: CircleDollarSign },
              { name: 'Recycle', icon: Recycle },
            ].map(({ name, icon: Icon }, index) => <div className={`hierarchy-step${index === 4 ? ' hierarchy-focus' : ''}`} key={name}><span className="hierarchy-icon"><Icon /></span><b>{name}</b><small>{index === 4 ? 'Project focus' : `Priority ${index + 1}`}</small></div>)}
          </div>
          <SectionHeading eyebrow="Sustainable requirements framework" title="Five dimensions to design for" description="A working framework for evaluating potential benefits alongside risks and trade-offs." />
          <div className="dimension-list">
            {dimensions.map(({ icon: Icon, title, items, note }, i) => <article className="dimension-card" key={title}><span className="dimension-num">0{i + 1}</span><span className="card-icon"><Icon /></span><div><h3>{title}</h3><p>{items}</p><small>{note}</small></div></article>)}
          </div>
          <div className="diagram-grid">
            <article className="diagram-placeholder"><span><FileQuestion /></span><div><Eyebrow>Placeholder · To be completed</Eyebrow><h3>Diagram 1 — Immediate, Enabling, and Structural Effects</h3><p>To be developed as part of the course sustainability analysis. No research diagram is represented as completed.</p></div></article>
            <article className="diagram-placeholder"><span><FileQuestion /></span><div><Eyebrow>Placeholder · To be completed</Eyebrow><h3>Diagram 2 — Likelihood and Sustainability Impact</h3><p>To be completed by the project team after documenting assumptions and evidence.</p></div></article>
          </div>
        </div>
      </section>
    </>
  )
}

export function Development() {
  const architecture = ['Customer interface', 'Product identification', 'Material value estimate', 'Return management', 'IKEA verification', 'Recycling tracking']
  const timeline = ['Idea', 'Research', 'Prototype', 'User testing', 'Pilot', 'Evaluation', 'Scale']
  const questions = [
    'What recycling incentives would motivate customers?',
    'How accurately can product material values be estimated?',
    'What are the costs of collection and sorting?',
    'Which recovered materials could IKEA reuse?',
    'How could IKEA integrate this service with existing operations?',
    'Could the business model become economically viable at scale?',
  ]
  return (
    <>
      <PageIntro eyebrow="08 · Development & research" title="From concept to reality." description="This living project space will document how the idea develops. We are currently at an early concept and prototype stage." />
      <section className="section section-tight">
        <div className="container">
          <div className="architecture-panel">
            <div className="architecture-heading"><div><Eyebrow>Proposed architecture</Eyebrow><h2>One return journey, connected end to end.</h2></div><span className="tag tag-outline">CONCEPT ONLY</span></div>
            <div className="architecture-flow">{architecture.map((item, index) => <div className="architecture-node" key={item}><span className="architecture-number">0{index + 1}</span><b>{item}</b>{index < architecture.length - 1 && <ArrowRight className="architecture-arrow" />}</div>)}</div>
            <p className="source-note">Possible future components—not existing IKEA integrations. Any implementation would require operational, data and security validation.</p>
          </div>
          <SectionHeading eyebrow="Project journey" title="A path from idea to evidence" />
          <div className="timeline">{timeline.map((item, index) => <div className={`timeline-step${index === 0 ? ' timeline-done' : ''}${index === 1 || index === 2 ? ' timeline-current' : ''}`} key={item}><span>{index === 0 ? <Check /> : `0${index + 1}`}</span><b>{item}</b>{(index === 1 || index === 2) && <small>{index === 2 ? 'Current focus' : 'Active'}</small>}</div>)}</div>
          <div className="design-thinking">
            <div><Eyebrow>Design Thinking</Eyebrow><h2>Learn with people. Build from evidence.</h2><p>Our intended approach is iterative: understand customer and material-system needs, define the right problem, explore possible service flows, prototype, then test and learn.</p></div>
            <FlowList items={['Empathize', 'Define', 'Ideate', 'Prototype', 'Test']} />
            <span className="source-note">Planned process—not a claim that interviews or user testing have already taken place.</span>
          </div>
          <div className="research-layout">
            <div><Eyebrow>What we still need to learn</Eyebrow><h2>Open research questions</h2><p>These questions will guide future research, prototyping and evaluation.</p></div>
            <ul className="question-list">{questions.map((question) => <li key={question}><span><FileQuestion /></span>{question}</li>)}</ul>
          </div>
          <div className="updates-placeholder"><span className="updates-icon"><ClipboardList /></span><div><Eyebrow>Living project log</Eyebrow><h3>Research findings and updates will appear here.</h3><p>Add interview learnings, prototype iterations, diagrams and decisions as the project progresses.</p></div><span className="tag tag-outline">UPDATES COMING SOON</span></div>
        </div>
      </section>
    </>
  )
}

export function Team() {
  return (
    <>
      <PageIntro eyebrow="09 · The people behind it" title="A team exploring circular possibilities." description="We are developing Return & Earn as a university capstone project in response to an IKEA innovation challenge." />
      <section className="section section-tight">
        <div className="container">
          <div className="team-overview">
            <img className="chalmers-logo" src={chalmersLogo} alt="Chalmers University of Technology" />
            <div><Eyebrow>Capstone project</Eyebrow><h2>Team <span className="editable">18</span></h2><p>Chalmers University of Technology<br />IKEA innovation challenge · Challenge 3</p></div>
            <div className="team-photo-placeholder" role="img" aria-label="Team photo placeholder">
              <Users size={27} aria-hidden="true" />
              <span>Team photo coming soon</span>
            </div>
          </div>
          <div className="member-grid">{teamMembers.map((member) => <article className="member-card" key={member.initials}><div className="member-avatar">{member.initials}</div><h3>{member.name}</h3></article>)}</div>
          <div id="team-contact" className="contact-placeholder">
            <span><Users /></span>
            <div>
              <b>Project contact</b>
              <p><a href="mailto:erikmorc@chalmers.se">erikmorc@chalmers.se</a><span aria-hidden="true"> · </span><a href="mailto:helinf@chalmers.se">helinf@chalmers.se</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function References() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const timer = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'center', behavior: 'instant' }), 0)
    return () => window.clearTimeout(timer)
  }, [hash])
  return (
    <>
      <PageIntro eyebrow="10 · Sources & transparency" title="Evidence matters." description="This page separates verified public sources from research references still to be added. Verify every claim against its source before publication." />
      <section className="section section-tight">
        <div className="container">
          <Notice>Accessed 8 October 2026 where a source URL is provided. IKEA targets and figures on the Why IKEA? and 2030 Goals pages are numbered and link to the entries below; recheck them against the latest official IKEA reporting before publication.</Notice>
          <div className="references-list">
            <section className="reference-group">
              <div className="reference-group-title"><span className="reference-dot" /><h2>IKEA Official Publications</h2></div>
              <div className="reference-entries">
                {ikeaSources.map((source) => (
                  <article className="reference-entry reference-entry-numbered" id={source.id} key={source.id}>
                    <span className="reference-number">[{source.number}]</span>
                    <div>
                      <h3>{source.title}</h3>
                      <p>{source.publisher} · {source.year}</p>
                      <p className="reference-used"><b>Used for:</b> {source.used}</p>
                      {source.location && <p className="reference-used"><b>Where:</b> {source.location}</p>}
                    </div>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${source.title} in a new tab`}>Open source <ArrowUpRight /></a>
                  </article>
                ))}
              </div>
            </section>
            {sources.map((group) => <section className="reference-group" key={group.group}><div className="reference-group-title"><span className="reference-dot" /><h2>{group.group}</h2></div><div className="reference-entries">{group.entries.map((source) => <article className="reference-entry" key={source.title}><div><h3>{source.title}</h3><p>{source.publisher} · {source.year}</p></div>{source.url ? <a href={source.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${source.title} in a new tab`}>Open source <ArrowUpRight /></a> : <span className="tag tag-outline">TO BE VERIFIED</span>}</article>)}</div></section>)}
          </div>
          <div className="reference-note"><LockKeyhole /><p>Furniture-waste figures on The Challenge page are historical estimates from the cited sources, not current measurements. User research results, business viability findings and completed prototypes are not claimed; placeholders indicate where evidence is still needed.</p></div>
        </div>
      </section>
    </>
  )
}
