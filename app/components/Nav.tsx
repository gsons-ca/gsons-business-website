'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import AnchorLink from '@/app/components/AnchorLink';
import { calendlyUrl, navLinks } from '@/app/data/site';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/lib/utils';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/rivererp-logo.png"
            alt="RiverERP"
            className="h-16 w-auto bg-transparent object-contain sm:h-18"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map(link => (
            <AnchorLink key={link.label} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </AnchorLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="glow" asChild>
            <Link href={calendlyUrl}>Book Consultation</Link>
          </Button>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background md:hidden"
          onClick={() => setOpen(value => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden"
          >
            <div className="container space-y-4 py-4">
              <div className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                {navLinks.map(link => (
                  <AnchorLink
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </AnchorLink>
                ))}
              </div>
              <div className={cn('flex flex-col gap-3')}>
                <Button variant="glow" asChild>
                  <Link href={calendlyUrl}>Book Consultation</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
