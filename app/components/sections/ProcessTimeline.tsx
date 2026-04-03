import SectionHeader from '@/app/components/SectionHeader';
import Reveal from '@/app/components/Reveal';
import { Card } from '@/app/components/ui/card';
import { timeline } from '@/app/data/site';

export default function ProcessTimeline() {
  return (
    <section className="py-12 sm:py-16" id="process">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          title="Step-by-step ERP implementation"
          description="Five clear stages from discovery to hypercare so teams are never guessing."
        />
        <div className="space-y-4">
          {timeline.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <Card className="flex gap-5 border-border/70 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
