import SectionHeader from '@/app/components/SectionHeader';
import Reveal from '@/app/components/Reveal';
import { Card } from '@/app/components/ui/card';
import { caseStudies } from '@/app/data/site';

export default function CaseStudies() {
  return (
    <section className="py-16" id="outcomes">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="Outcomes"
          title="Migration wins you can show the board"
          description="Real results from teams that moved to RiverERP."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.08}>
              <Card className="flex h-full flex-col border-border/70 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Case study
                </div>
                <h3 className="mt-3 text-lg font-semibold">{study.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{study.summary}</p>
                <div className="mt-auto pt-6 text-base font-semibold text-foreground">
                  {study.metric}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
