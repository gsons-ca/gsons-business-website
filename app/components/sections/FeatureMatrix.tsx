import { featureHighlights } from '@/app/data/site';
import Reveal from '@/app/components/Reveal';
import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Layers, ShieldCheck, Sparkles, Users } from 'lucide-react';

const icons = [Sparkles, Layers, ShieldCheck, Users];

export default function FeatureMatrix() {
  return (
    <section className="py-12 sm:py-16" id="platform">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="Platform"
          title="Four reasons enterprise teams choose RiverERP"
          description="Custom modules, scale, compliance, and a single source of truth for finance and ops."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featureHighlights.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <Card className="group h-full border-border/70 bg-card/80 p-6 transition-all hover:-translate-y-1 hover:shadow-depth">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{feature.tag}</Badge>
                  </div>
                  <div className="mt-5 space-y-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
