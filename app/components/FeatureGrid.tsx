import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

interface FeatureCard {
  title: string;
  description: string;
  tag?: string;
}

interface FeatureGridProps {
  title: string;
  copy: string;
  items: FeatureCard[];
  id?: string;
  panel?: boolean;
}

export default function FeatureGrid({ title, copy, items, id }: FeatureGridProps) {
  return (
    <section className="py-16" id={id}>
      <div className="container space-y-10">
        <SectionHeader title={title} description={copy} />
        <div className="grid gap-6 md:grid-cols-2">
          {items.map(card => (
            <Card key={card.title} className="border-border/70 p-6">
              {card.tag && (
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {card.tag}
                </span>
              )}
              <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
