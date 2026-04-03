import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

interface PipelineGlobeProps {
  steps: string[];
}

export default function PipelineGlobe({ steps }: PipelineGlobeProps) {
  return (
    <section className="py-16" id="cases">
      <div className="container space-y-10">
        <SectionHeader
          title="From config to global delivery"
          description="We run the same pipeline every time: sandbox, plugins, data, governance, cutover with telemetry you can see."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/70 p-6">
            <h4 className="text-lg font-semibold">Pipeline</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {steps.map(step => (
                <li key={step}>- {step}</li>
              ))}
            </ul>
          </Card>
          <Card className="relative overflow-hidden border-border/70 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#d1d5db,transparent_65%)] opacity-40" />
            <div className="relative flex h-full items-center justify-center rounded-2xl border border-dashed border-border">
              <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
                Global rollouts
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
