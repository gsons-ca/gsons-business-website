import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

interface IndustryCard {
  title: string;
  description?: string;
}

interface IndustriesGridProps {
  title: string;
  copy: string;
  items: IndustryCard[];
  id?: string;
  panel?: boolean;
}

export default function IndustriesGrid({ title, copy, items, id }: IndustriesGridProps) {
  return (
    <section className="py-16" id={id}>
      <div className="container space-y-10">
        <SectionHeader title={title} description={copy} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <Card key={item.title} className="border-border/70 p-6 text-center">
              <h3 className="text-base font-semibold">{item.title}</h3>
              {item.description && <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
