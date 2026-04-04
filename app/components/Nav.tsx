'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setActiveSubCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setActiveSubCategory(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const megaMenuContent: Record<string, {
    subCategories: { name: string, links: { title: string, desc: string }[] }[]
  }> = {
    'IT Services': {
      subCategories: [
        { name: 'Managed IT Services', links: [{ title: '24/7 Helpdesk', desc: 'Instant remote technical support for your team.' }, { title: 'NOC Monitoring', desc: 'Proactive 24/7 network and server oversight.' }, { title: 'Patch Management', desc: 'Automated security updates for all endpoints.' }, { title: 'IT Asset Management', desc: 'Inventory tracking and hardware lifecycle planning.' }, { title: 'Technical Support', desc: 'Comprehensive troubleshooting for all business systems.' }, { title: 'Remote IT Support', desc: 'Fast, secure remote assistance for offsite employees.' }] },
        { name: 'Onsite & Field Support', links: [{ title: 'Emergency Dispatch', desc: 'Rapid onsite response for critical failures.' }, { title: 'Hardware Installation', desc: 'Professional setup of workstations and servers.' }, { title: 'Structured Cabling', desc: 'Clean, certified data and fiber installations.' }, { title: 'Onsite IT Support', desc: 'Regularly scheduled in-person technical maintenance.' }] },
        { name: 'IT Consulting', links: [{ title: 'vCIO Strategy', desc: 'Executive-level technology leadership and planning.' }, { title: 'IT Roadmap', desc: 'Strategic multi-year budgeting and growth.' }, { title: 'Digital Transformation', desc: 'Modernizing legacy workflows for efficiency.' }, { title: 'IT Audit', desc: 'In-depth assessment of security and efficiency.' }] },
        { name: 'Network & Connectivity', links: [{ title: 'Managed WiFi', desc: 'Seamless, high-speed wireless across your office.' }, { title: 'SD-WAN Solutions', desc: 'Optimized multi-site business connectivity.' }, { title: 'Fiber Internet', desc: 'High-speed dedicated business-grade internet.' }, { title: 'VoIP Services', desc: 'Cloud-based business phone and communication systems.' }] },
        { name: 'Business Continuity', links: [{ title: 'Disaster Recovery', desc: 'Rapid data restoration after a critical event.' }, { title: 'Cloud Backup', desc: 'Immutable offsite storage for business data.' }, { title: 'Backup & Recovery', desc: 'Ensuring your data is safe and accessible 24/7.' }] },
        { name: 'Procurement Services', links: [{ title: 'Hardware Sourcing', desc: 'Enterprise pricing on laptops, servers, and parts.' }, { title: 'Software Licensing', desc: 'Managing O365, Adobe, and CAD subscriptions.' }, { title: 'IT Procurement', desc: 'Strategic purchasing aligned with business goals.' }] },
        { name: 'Infrastructure Projects', links: [{ title: 'Office Relocation', desc: 'Seamlessly moving your IT to a new location.' }, { title: 'Server Refresh', desc: 'Upgrading aged hardware to modern platforms.' }, { title: 'Co-Location', desc: 'Secure offsite housing for your physical servers.' }] }
      ]
    },
    'Cloud': {
      subCategories: [
        { name: 'Cloud Infrastructure', links: [{ title: 'Azure Management', desc: 'Complete Microsoft cloud administration.' }, { title: 'AWS Solutions', desc: 'Scalable Amazon Web Services environments.' }, { title: 'Managed Cloud Services', desc: 'End-to-end management of your cloud ecosystem.' }] },
        { name: 'Modern Workplace', links: [{ title: 'Microsoft 365', desc: 'Full administration of Teams and Outlook.' }, { title: 'SharePoint Online', desc: 'Centralized cloud document management.' }, { title: 'Google Workspace', desc: 'Cloud-native collaboration and email.' }] },
        { name: 'Virtualization', links: [{ title: 'Azure Virtual Desktop', desc: 'Remote PC access from any device.' }, { title: 'Windows 365', desc: 'Dedicated cloud-based personal computers.' }, { title: 'Cloud Desktop', desc: 'Virtual workstations for high-performance needs.' }] },
        { name: 'Cloud Mobility', links: [{ title: 'Managed Desktop/VDI', desc: 'Scalable virtual desktop infrastructure.' }, { title: 'Cloud Migration', desc: 'Moving your on-premise assets to the cloud.' }] },
        { name: 'Cloud Strategy', links: [{ title: 'Cloud Consulting', desc: 'Strategic planning for cloud adoption.' }, { title: 'Cloud Hosting', desc: 'Reliable hosting for web and business apps.' }] },
        { name: 'Cloud Identity', links: [{ title: 'Cloud Providers', desc: 'Expertise across major cloud platforms.' }, { title: 'Identity Mgmt', desc: 'Secure access control for cloud resources.' }] }
      ]
    },
    'Cybersecurity': {
      subCategories: [
        { name: 'Threat Detection', links: [{ title: 'Managed EDR', desc: '24/7 endpoint detection and response.' }, { title: 'MDR Services', desc: 'Real-time threat hunting and mitigation.' }, { title: 'Managed SOC', desc: 'Security Operations Center as a Service.' }] },
        { name: 'Network Defense', links: [{ title: 'Managed Firewall', desc: 'Perimeter protection and secure VPNs.' }, { title: 'Advanced Firewalls', desc: 'Next-gen protection against modern threats.' }, { title: 'Network Security', desc: 'Comprehensive defense for your local network.' }] },
        { name: 'Compliance & Audit', links: [{ title: 'PIPEDA Compliance', desc: 'Meeting Canadian privacy law standards.' }, { title: 'IT Security Audit', desc: 'In-depth review of your security posture.' }, { title: 'Compliance Mgmt', desc: 'Ensuring you meet industry-specific regulations.' }] },
        { name: 'Security Strategy', links: [{ title: 'VCISO', desc: 'Expert security leadership without the overhead.' }, { title: 'Vendor Audit', desc: 'Assessing the security of your third-party partners.' }, { title: 'Security Awareness', desc: 'Empowering employees to spot cyber threats.' }] },
        { name: 'Technical Assessment', links: [{ title: 'Penetration Testing', desc: 'Ethical hacking to find system weaknesses.' }, { title: 'Security Assessment', desc: 'Identifying risks across your entire infrastructure.' }, { title: 'Vulnerability Mgmt', desc: 'Scanning for and patching security holes.' }] },
        { name: 'Advanced Protection', links: [{ title: 'SIEM', desc: 'Security Information and Event Management.' }, { title: 'Phishing Protection', desc: 'Blocking deceptive email-based attacks.' }, { title: 'Dark Web Monitoring', desc: 'Tracking leaked credentials on the dark web.' }] }
      ]
    },
    'CRM & ERP': {
      subCategories: [
        { name: 'CRM Solutions', links: [
          { title: 'HubSpot CRM', desc: 'The gold standard for scaling marketing and sales teams.' },
          { title: 'Monday CRM', desc: 'Highly visual and customizable sales pipeline management.' },
          { title: 'ClickUp CRM', desc: 'All-in-one productivity platform with native CRM features.' },
          { title: 'Salesforce', desc: 'The world\'s #1 enterprise-grade customer success platform.' },
          { title: 'Zoho CRM', desc: 'Comprehensive, budget-friendly suite for growing businesses.' }
        ]},
        { name: 'ERP Systems', links: [
          { title: 'NetSuite (Oracle)', desc: 'The top cloud ERP used by high-growth Canadian firms.' },
          { title: 'SAP Business One', desc: 'Powerful enterprise resource planning for mid-market scale.' },
          { title: 'Sage Intacct', desc: 'Preferred choice for Canadian finance and accounting teams.' },
          { title: 'ERPNext', desc: 'Flexible, open-source ERP for manufacturing and retail.' }
        ]},
        { name: 'Canadian Compliance', links: [
          { title: 'CRA & Tax Integration', desc: 'Ensuring ERP/CRM data aligns with Canadian tax laws.' },
          { title: 'PIPEDA Data Residency', desc: 'Storing customer data within Canadian borders for privacy.' },
          { title: 'GST/HST Automation', desc: 'Real-time multi-province tax calculations and filing.' }
        ]}
      ]
    },
    'AI & Automations': {
      subCategories: [
        { name: 'Workflow Automation', links: [
          { title: 'Zapier Integration', desc: 'Connecting 5,000+ apps to automate manual data entry.' },
          { title: 'Make (Integromat)', desc: 'Complex, multi-step visual workflow design and automation.' },
          { title: 'Custom API Bridges', desc: 'Bespoke code to link legacy software with modern apps.' },
          { title: 'Microsoft Power Automate', desc: 'Automating tasks within the O365/Azure ecosystem.' },
          { title: 'Business Process Mapping', desc: 'Consulting to identify and eliminate manual bottlenecks.' }
        ]},
        { name: 'AI Implementation', links: [
          { title: 'Custom GPT Development', desc: 'Private, secure AI models trained on your business data.' },
          { title: 'AI Copywriting Tools', desc: 'Automating content, emails, and marketing materials.' },
          { title: 'Cognitive Search', desc: 'AI-powered internal search for company wikis and files.' },
          { title: 'Predictive Analytics', desc: 'Using AI to forecast sales trends and inventory needs.' },
          { title: 'AI Audio/Video Editing', desc: 'Automating media production for internal communications.' }
        ]},
        { name: 'Customer Experience AI', links: [
          { title: 'Intelligent Chatbots', desc: '24/7 AI support agents that handle client inquiries.' },
          { title: 'Sentiment Analysis', desc: 'AI monitoring of client feedback to detect satisfaction.' },
          { title: 'Voice AI & IVR', desc: 'Automated, natural-sounding phone menu systems.' },
          { title: 'Personalization Engines', desc: 'AI-driven product and service recommendations.' },
          { title: 'Automated Appointment', desc: 'AI assistants that handle scheduling and rescheduling.' }
        ]},
        { name: 'Data & Document AI', links: [
          { title: 'OCR Data Extraction', desc: 'AI that automatically reads and enters invoice data.' },
          { title: 'Automated Reporting', desc: 'AI-generated executive summaries of weekly KPIs.' },
          { title: 'Smart Document Audit', desc: 'AI scanning for errors or missing data in legal files.' },
          { title: 'Automated Translation', desc: 'Real-time multi-language translation for global teams.' },
          { title: 'Data Cleaning AI', desc: 'Automated deduplication and formatting of CRM data.' }
        ]},
        { name: 'Advanced AI Operations', links: [
          { title: 'AI Security & Privacy', desc: 'Securing AI prompts and ensuring data isn\'t leaked.' },
          { title: 'Machine Learning Ops', desc: 'Deploying and managing custom business ML models.' },
          { title: 'Edge AI Computing', desc: 'Processing AI data locally on devices for low latency.' },
          { title: 'RPA (Bot Services)', desc: 'Robotic Process Automation for legacy desktop software.' },
          { title: 'AI Ethics & Governance', desc: 'Ensuring unbiased and compliant use of AI tools.' }
        ]}
      ]
    },
    'Industries': {
      subCategories: [
        { name: 'Industrial & Energy', links: [{ title: 'Oil & Gas IT', desc: 'Tech for the Peace Region energy sector.' }, { title: 'Mining Technology', desc: 'Connectivity for remote exploration sites.' }, { title: 'Energy & Utilities', desc: 'Robust IT for the utility sector.' }] },
        { name: 'Construction & EPC', links: [{ title: 'Site Connectivity', desc: 'Rapid deployment internet for jobsites.' }, { title: 'Construction IT', desc: 'Streamlining project and site management.' }, { title: 'Architecture IT', desc: 'High-performance computing for design.' }] },
        { name: 'Healthcare & Life Sciences', links: [{ title: 'Healthcare IT', desc: 'Secure medical record infrastructure.' }, { title: 'Dental Practice IT', desc: 'Specialized support for clinic systems.' }, { title: 'Life Sciences', desc: 'IT for research and biotech organizations.' }, { title: 'Radiology IT', desc: 'Specific tech support for medical imaging.' }] },
        { name: 'Professional Services', links: [{ title: 'Legal Firm IT', desc: 'Secure document and case management.' }, { title: 'Accounting Support', desc: 'Tax and audit software infrastructure.' }, { title: 'Marketing IT', desc: 'Tech for creative and digital agencies.' }] },
        { name: 'Public & Non-Profit', links: [{ title: 'Non-Profit IT', desc: 'Cost-effective community tech solutions.' }, { title: 'Education Support', desc: 'IT systems for schools and learning.' }, { title: 'Municipal IT', desc: 'Local government technology support.' }] },
        { name: 'Finance & Real Estate', links: [{ title: 'Banking & Financial', desc: 'Secure tech for financial institutions.' }, { title: 'Real Estate IT', desc: 'Scalable tech for agents and brokerages.' }, { title: 'Wealth Management', desc: 'Secure data hosting for financial planners.' }] }
      ]
    },
    'Locations': {
      subCategories: [
    { name: 'British Columbia', links: [{ title: 'Vancouver', desc: 'Serving Metro Vancouver and the Lower Mainland.' }, { title: 'Victoria', desc: 'Island-wide managed IT and Public Sector support.' }, { title: 'Abbotsford', desc: 'Fraser Valley regional IT and agricultural tech.' }, { title: 'Kelowna', desc: 'Okanagan Valley technology and business services.' }, { title: 'Kamloops', desc: 'Serving the Thompson-Nicola business community.' }, { title: 'Castlegar', desc: 'Kootenay regional hub for technical field services.' }, { title: 'Prince George', desc: 'Northern BC hub for industrial and logistics IT.' }, { title: 'Terrace', desc: 'Skeena region support for industrial and port tech.' }, { title: 'Fort St. John', desc: 'Local support for the Peace Region and Energy sector.' }] },
{ name: 'Alberta', links: [{ title: 'Calgary', desc: 'Energy and enterprise tech corridor support.' }, { title: 'Lethbridge', desc: 'Southern Alberta agricultural and technical support.' }, { title: 'Red Deer', desc: 'Central Alberta hub for manufacturing and logistics.' }, { title: 'Edmonton', desc: 'Capital region managed IT and public sector services.' }, { title: 'Grande Prairie', desc: 'Serving the Alberta Peace Country and oilfield tech.' }, { title: 'Fort McMurray', desc: 'Specialized IT support for the Wood Buffalo region.' }] },        { name: 'Ontario', links: [{ title: 'Toronto', desc: 'GTA enterprise IT management.' }, { title: 'Ottawa', desc: 'Capital region business services.' }, { title: 'Mississauga', desc: 'Industrial and tech hub support.' }, { title: 'Hamilton', desc: 'Steel city industrial IT.' }, { title: 'London', desc: 'Southwestern ON coverage.' }, { title: 'Brampton', desc: 'Logistics and tech support.' }, { title: 'Kitchener/Waterloo', desc: 'Tech sector managed services.' }, { title: 'Markham', desc: 'Enterprise IT for tech corridors.' }] },
        { name: 'Quebec', links: [{ title: 'Montreal', desc: 'Bilingual managed IT services.' }, { title: 'Quebec City', desc: 'Provincial capital tech support.' }, { title: 'Laval', desc: 'Greater Montreal area coverage.' }, { title: 'Gatineau', desc: 'National Capital Region support.' }, { title: 'Longueuil', desc: 'South shore business IT services.' }, { title: 'Sherbrooke', desc: 'Eastern Townships tech support.' }] },
        { name: 'Saskatchewan', links: [{ title: 'Saskatoon', desc: 'Bridge City managed services.' }, { title: 'Regina', desc: 'Southern SK tech support.' }, { title: 'Prince Albert', desc: 'Northern gateway services.' }, { title: 'Moose Jaw', desc: 'Regional business IT support.' }] },
        { name: 'Manitoba', links: [{ title: 'Winnipeg', desc: 'Central Canada tech hub.' }, { title: 'Brandon', desc: 'Western MB business support.' }, { title: 'Steinbach', desc: 'Local community IT services.' }] },
        { name: 'Atlantic Canada', links: [{ title: 'Halifax, NS', desc: 'Coastal tech and shipping support.' }, { title: 'Moncton, NB', desc: 'Atlantic distribution hub IT.' }, { title: 'St. John\'s, NL', desc: 'Easternmost tech support.' }, { title: 'Charlottetown, PEI', desc: 'Island-wide business tech.' }, { title: 'Fredericton, NB', desc: 'Capital region IT services.' }, { title: 'Saint John, NB', desc: 'Port city industrial IT.' }] },
        { name: 'Territories', links: [{ title: 'Whitehorse, YK', desc: 'Northern hub managed services.' }, { title: 'Yellowknife, NWT', desc: 'Territorial capital tech support.' }, { title: 'Iqaluit, NU', desc: 'Arctic circle remote support.' }] }
      ]
    },
    'About': {
      subCategories: [
        { name: 'Company', links: [{ title: 'Our Story', desc: 'From local roots to national MSP.' }, { title: 'Our Values', desc: 'Reliability, transparency, and trust.' }, { title: 'Leadership', desc: 'Meet the engineers behind GSons.' }, { title: 'Our Vision', desc: 'The future of managed IT services.' }] },
        { name: 'Resources', links: [{ title: 'IT Blog', desc: 'Tech tips for business growth.' }, { title: 'Case Studies', desc: 'Success stories from our partners.' }, { title: 'Whitepapers', desc: 'Deep dives into cybersecurity.' }, { title: 'FAQ', desc: 'Common questions about managed IT.' }] },
        { name: 'Careers', links: [{ title: 'Join the Team', desc: 'Open roles for technical experts.' }, { title: 'Company Culture', desc: 'Why we love what we do.' }, { title: 'Employee Benefits', desc: 'Supporting our team members.' }] },
        { name: 'Partnerships', links: [{ title: 'Microsoft Gold', desc: 'Certified Tier-1 Cloud partner.' }, { title: 'Dell Premier', desc: 'Authorized hardware solutions.' }, { title: 'HubSpot Elite', desc: 'CRM implementation experts.' }] },
        { name: 'Legal', links: [{ title: 'Privacy Policy', desc: 'How we protect your business.' }, { title: 'Terms of Service', desc: 'Transparent service agreements.' }, { title: 'Service Level Agreement', desc: 'Our commitment to uptime and response.' }] }
      ]
    }
  };

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setActiveSubCategory(null);
    } else {
      setActiveMenu(menu);
      const firstSub = megaMenuContent[menu]?.subCategories[0]?.name || null;
      setActiveSubCategory(firstSub);
    }
  };

  return (
    <header ref={navRef} className="relative bg-white border-b border-gray-200 font-sans z-[100]">
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex-shrink-0" onClick={() => setActiveMenu(null)}>
            <img src="/gsons-logo.png" alt="GSons IT Solutions" className="h-14 w-auto object-contain" />
          </Link>
          <div className="hidden lg:flex items-center space-x-4 text-[13px] font-medium text-gray-700">
            {Object.keys(megaMenuContent).map((item) => (
              <button
                key={item}
                onClick={() => toggleMenu(item)}
                className={`hover:text-black pb-1 border-b-2 transition-colors whitespace-nowrap ${
                  activeMenu === item ? 'border-black text-black' : 'border-transparent'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-[13px] font-medium text-gray-700">
          <Link href="/resources" className="hover:text-black">Resources</Link>
          <Link href="/remote-support" className="hover:text-black">Remote Support</Link>
         <a 
  href="https://calendly.com/info-gsons-ca/30min" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="bg-black text-white h-10 px-6 text-sm rounded-full font-semibold hover:bg-gray-800 transition-colors">
    Book Consultation
  </button>
</a>
        </div>

       {/* Mobile Burger Button */}
<button 
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
  className="lg:hidden p-3 -mr-2 text-gray-900 flex items-center justify-center"
  aria-label="Toggle Menu"
>
  <div className="relative w-7 h-5 flex flex-col justify-between">
    <motion.span
      animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-0.5 bg-current rounded-full"
    />
    <motion.span
      animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-0.5 bg-current rounded-full"
    />
    <motion.span
      animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-0.5 bg-current rounded-full"
    />
  </div>
</button>
      </nav>

      <div className="hidden lg:block">
        {activeMenu && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-300 shadow-2xl z-[100]">
            <div className="max-w-[1400px] mx-auto flex min-h-[500px]">
              <div className="w-80 bg-gray-50/50 border-r border-gray-100 py-6 overflow-y-auto max-h-[70vh]">
                <ul className="space-y-1">
                  {megaMenuContent[activeMenu].subCategories.map((sub) => (
                    <li
                      key={sub.name}
                      onMouseEnter={() => setActiveSubCategory(sub.name)}
                      className={`px-6 py-3 cursor-pointer text-[13px] font-bold transition-all border-l-4 ${
                        activeSubCategory === sub.name
                          ? 'bg-white border-black text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-black'
                      }`}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 p-10 bg-white overflow-y-auto max-h-[70vh]">
                <h2 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4 uppercase tracking-tight">{activeSubCategory}</h2>
                <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                  {megaMenuContent[activeMenu].subCategories
                    .find(sub => sub.name === activeSubCategory)
                    ?.links.map((link, idx) => (
                      <div key={idx} className="group">
                        <Link href="#" onClick={() => setActiveMenu(null)}>
                          <h3 className="font-bold text-[15px] mb-1 group-hover:text-blue-600 transition-colors">
                            {link.title} <span className="ml-1 text-gray-400 group-hover:translate-x-1 inline-block transition-transform">›</span>
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed">{link.desc}</p>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-t shadow-xl overflow-y-auto max-h-[calc(100vh-64px)] z-[110]">
          <div className="p-3 space-y-2">
            {Object.keys(megaMenuContent).map((item) => (
              <div key={item} className="border-b last:border-0 pb-2">
                <button
                  onClick={() => toggleMenu(item)}
                  className="w-full flex justify-between items-center py-1 font-bold text-gray-900"
                >
                  {item} <span>{activeMenu === item ? '−' : '+'}</span>
                </button>
                {activeMenu === item && (
                  <div className="pl-4 space-y-6 pt-2 pb-4">
                    {megaMenuContent[item].subCategories.map((sub) => (
                      <div key={sub.name}>
                        <p className="text-[10px] uppercase font-black text-gray-400 mb-3 tracking-widest">{sub.name}</p>
                        <ul className="space-y-4">
                          {sub.links.map((link, idx) => (
                            <li key={idx}>
                              <Link href="#" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                                <p className="font-bold text-sm text-gray-800">{link.title}</p>
                                <p className="text-xs text-gray-500">{link.desc}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
               <Link href="/resources" className="font-bold text-gray-700 py-1 px-1">Resources</Link>
               <Link href="/remote-support" className="font-bold text-gray-700 py-1 px-1">Remote Support</Link>
<a 
  href="https://calendly.com/info-gsons-ca/30min" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block w-full mt-4"
>
  <button className="w-full h-14 bg-black text-white rounded-full font-bold text-base shadow-lg active:scale-95 transition-all uppercase tracking-wide">
    Book Consultation
  </button>
</a>       </div>
          </div>
        </div>
      )}
    </header>
  );
}