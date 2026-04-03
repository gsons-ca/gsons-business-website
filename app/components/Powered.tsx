import SectionHeader from '@/app/components/SectionHeader';
import { Badge } from '@/app/components/ui/badge';

interface PoweredProps {
  items: string[];
}

export default function Powered({ items }: PoweredProps) {
  return (
    <section className="py-16" id="about">
      <div className="container space-y-10">
        <SectionHeader
          title="Powered by RiverERP"
          description="Stable foundation with RiverERP implementation speed and proven implementations."
        />
        <div className="flex flex-wrap gap-3 rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
          {items.map(item => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
