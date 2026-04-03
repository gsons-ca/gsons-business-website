import SectionHeader from '@/app/components/SectionHeader';
import Reveal from '@/app/components/Reveal';
import { integrationStacks } from '@/app/data/site';
import { Badge } from '@/app/components/ui/badge';

export default function IntegrationStack() {
  return (
    <section className="py-16">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="Integrations"
          title="Connect the tools you already run"
          description="RiverERP connects to your stack with secure connectors and tailored workflows."
        />
        <Reveal>
          <div className="flex flex-wrap gap-3 rounded-3xl border border-border bg-card/70 p-6 shadow-soft">
            {integrationStacks.map(item => (
              <Badge key={item} variant="outline" className="text-xs normal-case">
                {item}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
