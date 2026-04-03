import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  href?: string;
}

interface TestimonialsGridProps {
  quotes: Testimonial[];
  copy?: string;
}

export default function TestimonialsGrid({ quotes, copy }: TestimonialsGridProps) {
  return (
    <section className="py-16" id="testimonials">
      <div className="container space-y-10">
        <SectionHeader title="Testimonials" description={copy} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map(item => (
            <Card key={item.quote} className="border-border/70 p-6">
              <p className="text-sm text-muted-foreground">{item.quote}</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {item.name} - {item.title}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {item.company}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
