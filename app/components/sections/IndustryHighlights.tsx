import SectionHeader from '@/app/components/SectionHeader';
import Reveal from '@/app/components/Reveal';
import { Card } from '@/app/components/ui/card';
import { industryHighlights } from '@/app/data/site';
import { Factory, GraduationCap, HardHat, Laptop2, ShoppingBag, Warehouse } from 'lucide-react';

const icons = [Factory, Warehouse, ShoppingBag, HardHat, GraduationCap, Laptop2];

export default function IndustryHighlights() {
  return (
    <section className="py-12 sm:py-16" id="industries">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="Industries"
          title="Playbooks ready for your domain"
          description="Start with proven workflows and tailor them with your team before production launch."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryHighlights.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="flex items-start gap-5 border-border/70 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
