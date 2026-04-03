import Link from 'next/link';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { calendlyUrl } from '@/app/data/site';

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-16">
          <div className="container space-y-8">
            <SectionHeader
              eyebrow="Contact"
              title="Talk to the RiverERP team"
              description="Reach out for implementation questions, demos, or support planning."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="space-y-4 border-border/70 p-6 text-sm text-muted-foreground">
                <div>
                  <h2 className="text-base font-semibold text-foreground">Email</h2>
                  <p className="mt-2">
                    <Link href="mailto:rivererp@gmail.com" className="text-foreground underline underline-offset-4">
                      rivererp@gmail.com
                    </Link>
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground">What to include</h2>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Business size and locations</li>
                    <li>Current ERP or accounting system</li>
                    <li>Primary goals for the migration</li>
                  </ul>
                </div>
              </Card>
              <Card className="flex flex-col justify-between gap-6 border-border/70 p-6">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-foreground">Book a consultation</h2>
                  <p className="text-sm text-muted-foreground">
                    Schedule a call and we will map scope, risks, and a realistic implementation window.
                  </p>
                </div>
                <Button variant="glow" asChild>
                  <Link href={calendlyUrl}>Book Consultation</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
