import { stats } from '@/app/data/site';
import Reveal from '@/app/components/Reveal';

export default function MetricsSection() {
  return (
    <section className="py-10 sm:py-12">
      <div className="container">
        <div className="grid gap-6 rounded-3xl border border-border bg-card/70 p-8 text-center shadow-soft md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="space-y-2">
                <div className="text-2xl font-semibold text-foreground md:text-3xl">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
