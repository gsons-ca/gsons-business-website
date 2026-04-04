export const calendlyUrl = '/book-consultation';
export const navPhone = '+1 (403) 555-0123';

export const navLinks = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Process', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'FAQ', href: '/#faq' }
];

export const logos = [
  { name: 'HiTech Advisors', href: '#', city: 'Seattle', country: 'USA', industry: 'Cybersecurity' },
  { name: 'Net Solutions', href: 'https://www.netsolutions.com/', city: 'Toronto', country: 'Canada', industry: 'Managed IT' },
  { name: 'Territorial Auto', href: 'https://www.territorialauto.ca/', city: 'Whitehorse', country: 'Canada', industry: 'Cloud' },
  { name: 'Minuteman Press', href: 'https://minuteman.com/', city: 'Calgary', country: 'Canada', industry: 'Automation' },
  { name: 'Global Grocers', href: 'https://www.facebook.com/globalgrocers/', city: 'Penticton', country: 'Canada', industry: 'Managed IT' }
];

export const hero = {
  title: 'Managed IT services built for reliability and growth.',
  copy:
    'GSons IT Solutions delivers 24/7 IT infrastructure management, security operations, and helpdesk support with transparent SLAs and proactive improvement cycles.',
  tagline: 'Trusted IT partner for Canadian Businesses. ',
  ctaLabel: 'Get a custom plan'
};

export const stats = [
  { value: '99.99%', label: 'Targeted uptime with SRE-grade monitoring' },
  { value: '15 mins', label: 'Average priority incident response' },
  { value: '100%', label: 'Endpoint patch compliance or remediation' },
  { value: '24/7', label: 'Monitoring, NOC, and security operations' }
];

export const featureHighlights = [
  {
    title: 'Proactive infrastructure ops',
    description: 'Cloud and on-prem systems monitored, patched, and scaled automatically before issues affect users.',
    tag: 'Reliability'
  },
  {
    title: 'Security-first posture',
    description: 'Firewall, endpoint detection, identity management, and threat response in a single managed stack.',
    tag: 'Security'
  },
  {
    title: 'Service desk with SLAs',
    description: 'Helpdesk, incident triage, and problem management with clear priority, status, and real-time updates.',
    tag: 'Support'
  },
  {
    title: 'Cost and cloud optimization',
    description: 'Regular platform tuning and continued architecture reviews to reduce waste and improve performance.',
    tag: 'Efficiency'
  }
];

export const platformTabs = [
  {
    id: 'onboarding',
    label: 'Onboarding',
    title: 'Fast onboarding with full environment audits.',
    description: 'Discovery, risk assessment, and road map with security baseline in place day one.',
    bullets: [
      'Infrastructure and security posture audit.',
      'Custom operations playbook and runbook creation.',
      'Quarterly roadmap with cost and performance targets.'
    ],
    panel: {
      eyebrow: 'Onboarding portal',
      title: 'Launch readiness',
      items: [
        { label: 'Audit complete', value: '100%', progress: 100 },
        { label: 'Identity and access controls', value: 'Configured', progress: 100 },
        { label: 'Alerting thresholds', value: 'Set', detail: 'Network · Systems · Applications' }
      ]
    }
  },
  {
    id: 'management',
    label: 'Management',
    title: '24/7 operations and security monitoring.',
    description: 'Live visibility, proactive patching, and incident response in one managed service.',
    bullets: [
      'Event-driven monitoring and automated remediation.',
      'Patch and vulnerability management across endpoints.',
      'Support desk with workflow and SLA tracking.'
    ],
    panel: {
      eyebrow: 'Operations command',
      title: 'Service delivery',
      items: [
        { label: 'Incident response', value: '15 mins', detail: 'P1 average' },
        { label: 'Patch compliance', value: '100%', detail: 'Windows/macOS/Linux' },
        { label: 'Change approvals', value: 'Enabled', detail: 'Change advisory board' }
      ]
    }
  },
  {
    id: 'optimization',
    label: 'Optimization',
    title: 'Continuous improvement through reviews and automation.',
    description: 'Monthly scorecards, cost optimization, and next-level automation adoption.',
    bullets: [
      'Weekly service reviews and remediation tickets.',
      'Cloud cost and performance tuning.',
      'Automation for routine ops and ticket closure.'
    ],
    panel: {
      eyebrow: 'Optimization desk',
      title: 'Mature operations',
      items: [
        { label: 'Service reviews', value: 'Monthly', detail: 'Action plans issued' },
        { label: 'Cost savings', value: '15%', detail: 'Average first year' },
        { label: 'Automation tasks', value: '23 active', detail: 'Quarterly growth' }
      ]
    }
  }
];

export const timeline = [
  {
    title: 'Environment discovery and risk assessment',
    detail: 'Inventory assets, identify gaps, and set SLAs with stakeholders.'
  },
  {
    title: 'Plan and secure infrastructure',
    detail: 'Design resilient architecture, identity access controls, and backup strategy.'
  },
  {
    title: 'Deployment and monitoring setup',
    detail: 'Install agents, configure alerts and runbooks, and verify proactive coverage.'
  },
  {
    title: 'Training and process enablement',
    detail: 'Align internal teams to incident playbooks and service desk operations.'
  },
  {
    title: 'Ongoing managed operations',
    detail: 'Continuous monitoring, incident response, and monthly business reviews.'
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
    title: 'Cloud migration and operations',
    summary: 'Shifted workloads to a secure cloud stack and cut incident volume in half.',
    metric: '50% fewer P1 incidents'
  },
  {
    title: 'Security operations uplift',
    summary: 'Added managed detection and response to a distributed engineering firm.',
    metric: '100% patch compliance'
  },
  {
    title: 'Service desk standardization',
    summary: 'Combined support channels and reduced resolution time across 3 offices.',
    metric: '60% faster ticket closure'
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
  { q: 'What does managed IT include?', a: '24/7 monitoring, patching, helpdesk, incident response, security operations, and cloud cost management.' },
  { q: 'Do you support hybrid and cloud environments?', a: 'Yes. We manage on-prem, public cloud, and hybrid stacks with tailored operational runbooks.' },
  { q: 'How fast is incident response?', a: 'Priority incidents are handled within 15 minutes and regular tickets within one business hour.' },
  { q: 'What is required to start?', a: 'We need environment access, asset inventory, and priority services; onboarding often completes in 2-3 weeks.' },
  { q: 'Do you provide security services?', a: 'Yes. Included are endpoint protection, vulnerability scans, SIEM monitoring, and incident investigations.' },
  { q: 'Can you work with our current tools?', a: 'Yes. We integrate with existing ITSM, cloud, and security tooling to avoid duplicate platforms.' },
  { q: 'What size businesses do you support?', a: 'We support SMBs and enterprises with multi-site or distributed teams. Flexible managed services scale with growth.' },
  { q: 'Is support included after onboarding?', a: 'Yes. Ongoing managed operations, continuous improvement, and monthly business reviews are standard.' }
];

export const aboutHero = {
  tag: 'About GSons IT Solutions',
  title: 'Why teams choose our IT operations service',
  copy:
    'You deserve IT that runs quietly and securely. We standardize your environment, remove risk, and continuously improve both performance and cost.',
  ctaLabel: 'Get started'
};
export const aboutCopy =
  'We fix what keeps your teams up: outages, insecure access, slow support, and uncertain cost. Then we lock in repeatable operations, response SLAs, and measurable improvement.';
export const aboutFeatures = [
  {
    title: 'Capture operational risk',
    description: 'We document outages, shadow-IT, compliance gaps, and support bottlenecks so remediation is precise.'
  },
  {
    title: 'Standardize playbooks',
    description: 'Incident response, change control, and onboarding processes are codified and validated before rollout.'
  },
  {
    title: 'Control access and security',
    description: 'Identity management, MFA, and role-based access controls are configured to align with your compliance needs.'
  },
  {
    title: 'Implement with checkpoints',
    description: 'Infrastructure, monitoring, and backup changes are rolled out in stages with rollback paths and test validation.'
  },
  {
    title: 'Run parallel during transition',
    description: 'New managed operations run alongside legacy support while we verify stability and performance.'
  },
  {
    title: 'Handover with clear ownership',
    description: 'Support contacts, SLAs, and service reports are shared with your team before we take full operations responsibility.'
  }
];

export const industriesHero = {
  tag: 'Industries',
  title: 'Managed IT services for Calgary industries',
  copy: 'We align security, infrastructure, and support with industry-specific demands before we take over operations in Calgary.',
  ctaLabel: 'Get a consult'
};
export const industriesList = [
  'Energy & Oil & Gas',
  'Manufacturing',
  'Professional Services',
  'Healthcare',
  'Retail & Ecommerce',
  'Construction'
];
export const industriesCopy =
  'Sector-tailored runbooks, compliance checks, and support SLAs designed to fit Calgary industries and risk profiles.';

export const casesHero = {
  tag: 'Case studies',
  title: 'Demo to production implementations.',
  copy: 'Walk through similar migrations to see how risk, data, and support were handled.',
  ctaLabel: 'Get a demo'
};
export const cases = [
  { title: 'Multi-entity rollout', detail: 'Sandbox to production with shared plugins and governance.' },
  { title: 'Education stack', detail: 'Admissions, fees, attendance, and parent portals with GSons IT Solutions.' },
  { title: 'Commerce and ops', detail: 'Ecommerce storefront to fulfillment with inventory controls.' }
];
export const casesCopy = 'See where operations went smoothly, where they needed reinforcement, and how we corrected course.';

export const testimonials = [
  {
    quote: 'GSons IT Solutions handled setup, onboarding, and training. Our users were supported day one.',
    name: 'Alex Morgan',
    title: 'COO',
    company: 'Global Grocers',
    href: 'https://example.com/global-grocers'
  },
  {
    quote: 'Predictable IT operations, no more firefighting. GSons IT Solutions delivers exactly what businesses need.',
    name: 'Jamie Patel',
    title: 'Operations Director',
    company: 'Shuaiba Industrial Company',
    href: 'https://example.com/shuaiba-industrial'
  },
  {
    quote: 'Professional expertise made all the difference. GSons IT Solutions understands business challenges.',
    name: 'Taylor Chen',
    title: 'Program Lead',
    company: 'Memor Perfumes',
    href: 'https://example.com/memor-perfumes'
  }
];
export const testimonialsCopy = 'Straightforward feedback from businesses about what improved after switching to managed IT operations.';

export const testimonialsHero = {
  tag: 'Testimonials',
  title: 'Proof from teams that operate more reliably.',
  copy: 'Hear what worked and what was hard for teams that moved to managed IT operations.',
  ctaLabel: 'Get in touch'
};
export const testimonialsPage = testimonials;

export const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Managed IT platform', href: '/#platform' },
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

export const footerNote = 'Managed IT services with measurable SLAs, proactive operations, and expert support continuity.';
