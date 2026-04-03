import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

interface Plan {
  name: string;
  price: string;
  setup: string;
  bullets: string[];
  accent?: boolean;
}

interface PricingCardsProps {
  plans: Plan[];
}

export default function PricingCards({ plans }: PricingCardsProps) {
  return (
    <section className="py-16">
      <div className="container space-y-10">
        <SectionHeader
          title="A compute model for every workload"
          description="Usage-based plans with one-time setup fees. Pick the lane that matches your usage and governance needs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map(plan => (
            <Card
              key={plan.name}
              className={`border-border/70 p-6 ${plan.accent ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">{plan.name}</div>
              <div className="mt-3 text-2xl font-semibold">{plan.price}</div>
              <div className="mt-1 text-sm opacity-70">{plan.setup}</div>
              <ul className="mt-5 space-y-2 text-sm opacity-80">
                {plan.bullets.map(item => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
