export const calendlyUrl = '/book-consultation';
export const navPhone = '+1 (555) 123-4567';

export const navLinks = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Process', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'FAQ', href: '/#faq' }
];

export const logos = [
  { name: 'Global Grocers', href: 'https://example.com/global-grocers', city: 'Penticton', country: 'Canada', industry: 'Retail' },
  { name: 'Shuaiba Industrial', href: 'https://example.com/shuaiba-industrial', city: 'Dubai', country: 'UAE', industry: 'Manufacturing' },
  { name: 'Memor Perfumes', href: 'https://example.com/memor-perfumes', city: 'Bengaluru', country: 'India', industry: 'Retail' },
  { name: 'CNC', href: 'https://example.com/cnc', city: 'Prince George', country: 'Canada', industry: 'Manufacturing' },
  { name: 'Somy Digital', href: 'https://example.com/somy-digital', city: 'Vancouver', country: 'Canada', industry: 'IT Services' }
];

export const hero = {
  title: 'A premium ERP rollout with zero drama and full control.',
  copy:
    'RiverERP moves you from legacy ERP to a modern operating system with a measured plan, sandbox validation, and hands-on enablement. You see every risk, every checkpoint, and the exact numbers before cutover.',
  tagline: 'Ship a modern ERP without the enterprise drag.',
  ctaLabel: 'Request a demo'
};

export const stats = [
  { value: '6-8 weeks', label: 'Average go-live after sign-off' },
  { value: '30+ modules', label: 'Configured for finance, ops, and compliance' },
  { value: '99.95%', label: 'Reconciliation accuracy target' },
  { value: '24/7', label: 'Go-live monitoring with named leads' }
];

export const featureHighlights = [
  {
    title: 'Customised modules',
    description: 'Configure finance, procurement, inventory, and reporting around the way your teams already work.',
    tag: 'Fit'
  },
  {
    title: 'Built for medium to enterprise-level businesses',
    description: 'Multi-entity, multi-location operations with approvals and visibility without enterprise bloat.',
    tag: 'Scale'
  },
  {
    title: 'Compliance-ready governance',
    description: 'Audit trails, role-based approvals, and reporting built for regulatory and industry needs.',
    tag: 'Compliance'
  },
  {
    title: 'Single source of truth',
    description: 'Unify finance, ops, and leadership data so teams stop reconciling in spreadsheets.',
    tag: 'Clarity'
  }
];

export const platformTabs = [
  {
    id: 'implementation',
    label: 'Implementation',
    title: 'Implementation mapped before any data moves.',
    description: 'Define scope, owners, and acceptance criteria so every team knows what goes live and when.',
    bullets: [
      'Discovery workshops and process mapping by department.',
      'Custom module configuration with approvals and roles.',
      'Implementation plan with week-by-week milestones.'
    ],
    panel: {
      eyebrow: 'Implementation cockpit',
      title: 'Build readiness',
      items: [
        { label: 'Process mapping', value: 'Complete', progress: 100 },
        { label: 'Module configuration', value: '68%', progress: 68 },
        { label: 'Stakeholder sign-off', value: 'In review', detail: 'Finance · Ops · IT' }
      ]
    }
  },
  {
    id: 'migration',
    label: 'Migration',
    title: 'Migration rehearsed with your real data.',
    description: 'Validate masters and transactions in waves with reconciliation before cutover.',
    bullets: [
      'Data cleansing and mapping with test loads.',
      'Parallel run until totals match and reports align.',
      'Cutover checklist with rollback options.'
    ],
    panel: {
      eyebrow: 'Migration control',
      title: 'Cutover readiness',
      items: [
        { label: 'Data loads', value: '82%', progress: 82 },
        { label: 'Reconciliation', value: '12 exceptions', detail: 'AP · Inventory · Projects' },
        { label: 'Cutover window', value: 'Confirmed', detail: 'Weekend launch scheduled' }
      ]
    }
  },
  {
    id: 'operations',
    label: 'Operations',
    title: 'Operations that stay stable after go-live.',
    description: 'Dedicated team, monitoring, and optimization after launch.',
    bullets: [
      'Hypercare coverage with named leads.',
      'SLA-based support and ticket triage.',
      'Quarterly optimization for automation and reporting.'
    ],
    panel: {
      eyebrow: 'Operations desk',
      title: 'Post-launch stability',
      items: [
        { label: 'Hypercare coverage', value: '24/7', detail: 'Named leads on rotation' },
        { label: 'Ticket SLAs', value: '2 hrs', detail: 'Priority 1 response' },
        { label: 'Automation wins', value: '8 queued', detail: 'Approvals · Alerts · Reports' }
      ]
    }
  }
];

export const timeline = [
  {
    title: 'Discovery and process mapping',
    detail: 'Capture current workflows, bottlenecks, and success metrics across teams.'
  },
  {
    title: 'Solution design and module configuration',
    detail: 'Configure custom modules, approvals, and roles to match how you operate.'
  },
  {
    title: 'Data cleanup and migration testing',
    detail: 'Clean master data, run test loads, and reconcile reports before cutover.'
  },
  {
    title: 'Training and user acceptance',
    detail: 'Onboarding and training with sign-off from finance, ops, and leadership.'
  },
  {
    title: 'Go-live and hypercare',
    detail: 'Cutover, monitoring, and dedicated support to stabilise operations.'
  }
];

export const industryHighlights = [
  { title: 'Manufacturing', detail: 'Production planning, QC, and traceability with live dashboards.' },
  { title: 'Wholesale & Trading', detail: 'Vendor portals, pricing controls, and automated replenishment.' },
  { title: 'Retail & Ecommerce', detail: 'Unified inventory, order orchestration, and margin visibility.' },
  { title: 'Engineering & Construction', detail: 'Project costing, procurement, and site-level approvals.' },
  { title: 'Education', detail: 'Admissions, fees, attendance, and student lifecycle workflows.' },
  { title: 'IT Services', detail: 'Resource planning, SLAs, and service delivery reporting.' }
];

export const caseStudies = [
  {
    title: 'Multi-entity rollout',
    summary: 'Unified finance and inventory across 12 locations with zero downtime.',
    metric: '42% faster month-end close'
  },
  {
    title: 'Education platform',
    summary: 'Migrated admissions and fee systems with structured approvals.',
    metric: '98% reduction in manual reconciliation'
  },
  {
    title: 'Commerce and ops',
    summary: 'Connected storefront, warehouse, and finance with real-time insights.',
    metric: '3x faster fulfillment reporting'
  }
];

export const integrationStacks = [
  'G Suite and Outlook',
  'Stripe, PayPal, and ACH',
  'Shopify, WooCommerce, and custom storefronts',
  'BI exports to Looker and PowerBI',
  'SSO, audit logs, and compliance packs'
];

export const faqs = [
  { q: 'Is this a demo or production?', a: 'Both. Start in demo, promote to production with the same implementation plan after sign-off.' },
  { q: 'Do you support custom apps and integrations?', a: 'Yes. RiverERP Core plus plugins; we add custom apps, fields, scripts, and integrations.' },
  { q: 'How long to go live?', a: 'Typical go-live is 6-8 weeks after sign-off, including migration and enablement.' },
  { q: 'What accounts are used?', a: 'Setup uses info.somydigital@gmail.com; demos use rivererp@gmail.com; booking via Calendly only.' },
  { q: 'Do you offer onboarding and training?', a: 'Yes. We deliver role-based onboarding, team training, and administrator handoffs.' },
  { q: 'Can you migrate from our current ERP?', a: 'Yes. We handle data mapping, cleansing, test migrations, and parallel runs.' },
  { q: 'What size businesses do you support?', a: 'We support medium to enterprise-level businesses with multi-entity needs.' },
  { q: 'Is support included after go-live?', a: 'Yes. Hypercare, SLA-based support, and optimisation are included post-launch.' }
];

export const aboutHero = {
  tag: 'About RiverERP',
  title: 'Why teams switch to RiverERP',
  copy:
    'You already have an ERP. You need clarity, not hype. We design a migration you can see, test with your data, and approve only when it works for finance, ops, and your frontline teams.',
  ctaLabel: 'Request a demo'
};
export const aboutCopy =
  'We focus on the pains you feel: high costs, slow changes, weak support, and data you cannot trust. We fix those first, then migrate with controls, parallel runs, and clear ownership after go-live.';
export const aboutFeatures = [
  {
    title: 'Document what broke before',
    description: 'Costs, slow changes, bad support, and data quality issues captured so we do not repeat them. You see the list and the mitigation for each.'
  },
  {
    title: 'Prove critical work in a sandbox',
    description: 'Your approval flows, invoices, inventory moves, and reports tested with your sample data before we proceed.'
  },
  {
    title: 'Map roles and controls',
    description: 'Access, approvals, and audit trails set to match how finance, ops, and owners need to govern, including industry-specific compliance needs.'
  },
  {
    title: 'Migrate with checkpoints',
    description: 'Masters and transactions moved in batches with validation, reconciliation, and rollback options.'
  },
  {
    title: 'Run both systems briefly',
    description: 'Parallel run with your current ERP until balances, reports, and day-to-day tasks agree, so teams are never blind.'
  },
  {
    title: 'Cut over with support on-call',
    description: 'Planned go-live window, named contacts, and post-go-live fixes owned by the same team.'
  }
];

export const industriesHero = {
  tag: 'Industries',
  title: 'Configured for the industries we know well.',
  copy: 'Preview RiverERP in a sandbox with your data and flows for your specific industry before any migration decision.',
  ctaLabel: 'Request a demo'
};
export const industriesList = [
  'Manufacturing',
  'Wholesale & Trading',
  'Retail & Ecommerce',
  'Engineering & Construction',
  'Education',
  'IT Services'
];
export const industriesCopy =
  'Industry implementation plans for approvals, billing, inventory, and reporting trialed in a sandbox with your sample data, adjusted together, then promoted only when numbers align.';

export const casesHero = {
  tag: 'Case studies',
  title: 'Demo to production implementations.',
  copy: 'Walk through similar migrations to see how risk, data, and support were handled.',
  ctaLabel: 'Request a demo'
};
export const cases = [
  { title: 'Multi-entity rollout', detail: 'Sandbox to production with shared plugins and governance.' },
  { title: 'Education stack', detail: 'Admissions, fees, attendance, and parent portals with RiverERP.' },
  { title: 'Commerce and ops', detail: 'Ecommerce storefront to fulfillment with inventory controls.' }
];
export const casesCopy = 'See where migrations went smoothly, where they did not, and how we corrected course.';

export const testimonials = [
  {
    quote: 'RiverERP handled setup, plugins, and training. Our teams used it day one.',
    name: 'Alex Morgan',
    title: 'COO',
    company: 'Global Grocers',
    href: 'https://example.com/global-grocers'
  },
  {
    quote: 'Predictable rollout, no enterprise bloat. Demo to production in weeks.',
    name: 'Jamie Patel',
    title: 'Operations Director',
    company: 'Shuaiba Industrial Company',
    href: 'https://example.com/shuaiba-industrial'
  },
  {
    quote: 'Single CTA via Calendly made stakeholder engagement easy.',
    name: 'Taylor Chen',
    title: 'Program Lead',
    company: 'Memor Perfumes',
    href: 'https://example.com/memor-perfumes'
  }
];
export const testimonialsCopy = 'Straightforward notes from teams about what improved after switching and what took work.';

export const testimonialsHero = {
  tag: 'Testimonials',
  title: 'Proof from teams that shipped faster.',
  copy: 'Hear what worked and what was hard for teams that switched to RiverERP.',
  ctaLabel: 'Request a demo'
};
export const testimonialsPage = testimonials;

export const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'RiverERP platform', href: '/#platform' },
      { label: 'Approach', href: '/#approach' },
      { label: 'Process', href: '/#process' },
      { label: 'Book Consultation', href: '/book-consultation' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case studies', href: '/cases' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    heading: 'Resources',
    links: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms & conditions', href: '/terms' }
    ]
  }
];

export const footerNote = 'ERP implementations with clear milestones, clean data, and confident go-live support.';
