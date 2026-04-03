import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import SectionHeader from '@/app/components/SectionHeader';
import { Card } from '@/app/components/ui/card';

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-16">
          <div className="container space-y-8">
            <SectionHeader
              eyebrow="Terms & conditions"
              title="Terms for using RiverERP"
              description="These terms outline how RiverERP services are delivered and supported."
            />
            <Card className="space-y-6 border-border/70 p-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Acceptance</h2>
                <p>
                  By engaging RiverERP services, you agree to these terms and any project-specific statements of work.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Services</h2>
                <p>
                  Services include implementation planning, configuration, migration support, training, and
                  post-launch assistance as agreed in your engagement scope.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Responsibilities</h2>
                <p>
                  Clients provide timely access to data, stakeholders, and approvals required to complete delivery
                  milestones.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-foreground">Support and updates</h2>
                <p>
                  Post-launch support and optimization are provided according to the agreed service level.
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
