'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setActiveSubCategory(null);
    } else {
      setActiveMenu(menu);
      setActiveSubCategory(megaMenuContent[menu].subCategories[0].name);
    }
  };

  const megaMenuContent: Record<string, {
    subCategories: { name: string, links: { title: string, desc: string }[] }[]
  }> = {
    'IT Services': {
      subCategories: [
        {
          name: 'Managed Services',
          links: [
            { title: '24/7 Helpdesk', desc: 'Remote support for your entire team.' },
            { title: 'Network Monitoring', desc: 'Real-time infrastructure oversight.' },
            { title: 'Backup & Recovery', desc: 'Disaster proofing your business data.' }
          ]
        },
        {
          name: 'Consulting',
          links: [
            { title: 'IT Roadmap', desc: 'Strategic planning for the next 5 years.' },
            { title: 'vCISO Services', desc: 'Executive level security leadership.' }
          ]
        },
        {
          name: 'Saksham',
          links: [
            { title: 'IT Roadmap', desc: 'Strategic planning for the next 5 years.' },
            { title: 'vCISO Services', desc: 'Executive level security leadership.' }
          ]
        }
      ]
    },
    'Cybersecurity': {
      subCategories: [
        {
          name: 'Security Stack',
          links: [
            { title: 'Threat Detection', desc: 'AI-driven monitoring and real-time alerts.' },
            { title: 'Compliance', desc: 'Meeting PIPEDA and industry standards.' },
            { title: 'Penetration Testing', desc: 'Finding vulnerabilities proactively.' }
          ]
        },
        {
          name: 'Identity',
          links: [
            { title: 'MFA Setup', desc: 'Multi-factor authentication deployment.' },
            { title: 'Zero Trust', desc: 'Modern security architecture.' }
          ]
        }
      ]
    },
    'Industries': {
      subCategories: [
        {
          name: 'Healthcare',
          links: [
            { title: 'Clinic IT', desc: 'Specialized support for medical software.' },
            { title: 'HIPAA/PIPEDA', desc: 'Strict patient data compliance.' }
          ]
        },
        {
          name: 'Real Estate',
          links: [
            { title: 'Property Tech', desc: 'Automation for management firms.' },
            { title: 'Mobile Office', desc: 'Secure access for agents in the field.' }
          ]
        }
      ]
    }
  };

  return (
    <header className="relative bg-white border-b border-gray-200 font-sans z-50">
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">

        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/gsons-logo.png"
              alt="GSons IT Solutions"
              className="h-16 w-auto bg-transparent object-contain sm:h-18"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 text-[15px] font-medium text-gray-700 mt-2">
            {Object.keys(megaMenuContent).map((item) => (
              <button
                key={item}
                onClick={() => toggleMenu(item)}
                className={`hover:text-black pb-1 border-b-2 transition-colors ${
                  activeMenu === item ? 'border-black text-black' : 'border-transparent'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Right Links */}
        <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-gray-700">
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <Link href="/drivers" className="hover:text-black">Drivers</Link>
          <Link href="/about" className="hover:text-black">Support</Link>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 h-12 px-8 text-base">
            Book Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-64px)]">
          <div className="p-4 space-y-4">
            {Object.keys(megaMenuContent).map((item) => (
              <div key={item} className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMenu(item)}
                  className="w-full text-left font-bold text-gray-900 py-2 flex justify-between"
                >
                  {item} <span>{activeMenu === item ? '−' : '+'}</span>
                </button>
                {activeMenu === item && (
                  <div className="pl-4 space-y-4 pt-2">
                    {megaMenuContent[item].subCategories.map((sub) => (
                      <div key={sub.name}>
                        <p className="text-black font-bold text-xs uppercase mb-2">{sub.name}</p>
                        <ul className="space-y-2">
                          {sub.links.map((link, idx) => (
                            <li key={idx}>
                              <Link href="#" className="block group">
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
            <div className="pt-4 space-y-4">
              <Link href="/shop" className="block font-medium text-gray-700">Shop</Link>
              <Link href="/drivers" className="block font-medium text-gray-700">Drivers</Link>
              <Link href="/about" className="block font-medium text-gray-700">Support</Link>
              <button className="w-full bg-black text-white py-3 rounded-sm font-bold">BOOK A CALL</button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Mega Menu Panel */}
      <div className="hidden lg:block">
        {activeMenu && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-300 z-50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-[1400px] mx-auto flex min-h-[400px]">
              <div className="w-64 bg-white border-r border-gray-100 py-6">
                <ul className="space-y-1">
                  {megaMenuContent[activeMenu].subCategories.map((sub) => (
                    <li
                      key={sub.name}
                      onClick={() => setActiveSubCategory(sub.name)}
                      className={`px-6 py-3 cursor-pointer text-sm font-bold transition-all border-l-4 ${
                        activeSubCategory === sub.name
                        ? 'bg-gray-50 border-black text-gray-900' 
                        : 'border-transparent text-gray-500 hover:text-black'
                      }`}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 p-10 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{activeSubCategory}</h2>
                <div className="grid grid-cols-3 gap-10">
                  {megaMenuContent[activeMenu].subCategories
                    .find(sub => sub.name === activeSubCategory)
                    ?.links.map((link, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <h3 className="font-bold text-[17px] mb-2 flex items-center group-hover:text-black transition-colors">
                          {link.title} 
                          <span className="ml-2 text-black group-hover:translate-x-1 transition-transform">›</span>
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{link.desc}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
