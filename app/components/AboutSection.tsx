import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

interface Item {
  title: string;
  description: string;
}

interface AboutSectionProps {
  title: string;
  copy: string;
  items: Item[];
  reasons: string[];
}

export default function AboutSection({ title, copy, items, reasons }: AboutSectionProps) {
  return (
    <section className="py-16" id="about">
      <div className="container space-y-10">
        <SectionHeader title={title} description={copy} />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {items.map((item, index) => (
              <Card key={item.title} className="flex gap-4 border-border/70 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="border-border/70 p-6">
            <h3 className="text-lg font-semibold">Why teams consider switching to RiverERP</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Themes we hear from finance, ops, and IT leaders who want a calmer ERP experience.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {reasons.map(reason => (
                <li key={reason}>- {reason}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
