'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import SectionHeader from '@/app/components/SectionHeader';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQListProps {
  items: FAQItem[];
}

export default function FAQList({ items }: FAQListProps) {
  return (
    <section className="py-12 sm:py-16" id="faq">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Clear answers before you move"
          description="Everything you need to know before starting a migration."
        />
        <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card/70 px-6">
          {items.map(item => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
