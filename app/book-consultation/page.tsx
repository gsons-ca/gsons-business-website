import Script from 'next/script';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import CTA from '@/app/components/CTA';
import SectionHeader from '@/app/components/SectionHeader';

export default function BookConsultationPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-16">
          <div className="container space-y-8">
            <SectionHeader
              eyebrow="Book time"
              title="Schedule a migration review"
              description="Pick a time that works for you. We will walk through your ERP risks and map the next steps."
            />
            <div
              id="calendly-inline"
              className="overflow-hidden rounded-3xl border border-border bg-card/70"
            >
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/rivererp/30min"
                style={{ minWidth: '320px', height: '800px' }}
              />
            </div>
          </div>
        </section>
        <CTA label="Book Consultation" href="#calendly-inline" />
      </main>
      <Footer />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}
