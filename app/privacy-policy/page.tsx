import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-16">
          <div className="container space-y-8">
            <SectionHeader
              eyebrow="Privacy policy"
              title="How RiverERP handles your data"
              description="We collect only what we need to deliver implementation, support, and product updates."
            />
            <Card className="space-y-6 border-border/70 p-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Information we collect</h2>
                <p>
                  We collect contact details, project requirements, and implementation notes shared during discovery
                  and support.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Business contact information and stakeholder roles.</li>
                  <li>ERP requirements, workflows, and process documentation.</li>
                  <li>Support requests, feedback, and usage notes.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">How we use data</h2>
                <p>
                  We use information to scope implementations, configure modules, and provide ongoing support and
                  improvements.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Sharing and security</h2>
                <p>
                  We do not sell data. We share information only with authorized project stakeholders and trusted
                  service providers needed to deliver the platform.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Your choices</h2>
                <p>
                  You can request updates, corrections, or deletion of your data by contacting our team.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
