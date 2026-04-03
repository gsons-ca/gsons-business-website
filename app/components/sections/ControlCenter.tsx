import { platformTabs } from '@/app/data/site';
import SectionHeader from '@/app/components/SectionHeader';
import Reveal from '@/app/components/Reveal';
import { Card } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';

export default function ControlCenter() {
  return (
    <section className="py-12 sm:py-16" id="approach">
      <div className="container space-y-10">
        <SectionHeader
          title="Implementation, migration, and operations kept in sync"
          description="Every phase is visible, owned, and signed off so teams stay aligned."
        />
        <Reveal>
          <Tabs defaultValue={platformTabs[0].id} className="space-y-8">
            <TabsList className="flex h-auto flex-wrap gap-6 border-b border-border pb-3 text-sm text-muted-foreground">
              {platformTabs.map(tab => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="border-b-2 border-transparent pb-3 text-sm font-semibold data-[state=active]:border-foreground data-[state=active]:text-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {platformTabs.map(tab => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <Card className="p-6">
                    <h3 className="text-2xl font-semibold">{tab.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{tab.description}</p>
                    <ul className="mt-6 space-y-3 text-sm">
                      {tab.bullets.map(item => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="relative overflow-hidden p-6">
                    <div className="absolute -right-20 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,#9ca3af,transparent_70%)] opacity-40" />
                    <div className="relative space-y-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          {tab.panel.eyebrow}
                        </p>
                        <h4 className="mt-2 text-lg font-semibold">{tab.panel.title}</h4>
                      </div>
                      <div className="grid gap-4">
                        {tab.panel.items.map(item => (
                          <div key={item.label} className="rounded-2xl border border-border/70 bg-background/80 p-4">
                            <div className="flex items-center justify-between text-sm font-semibold">
                              <span>{item.label}</span>
                              <span className="text-muted-foreground">{item.value}</span>
                            </div>
                            {item.detail && (
                              <div className="mt-3 text-xs text-muted-foreground">{item.detail}</div>
                            )}
                            {typeof item.progress === 'number' && (
                              <div className="mt-3 h-2 rounded-full bg-muted">
                                <div className="h-2 rounded-full bg-primary" style={{ width: `${item.progress}%` }} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
