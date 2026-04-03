import Nav from '@/app/components/Nav';
import Hero from '@/app/components/Hero';
import FAQList from '@/app/components/FAQList';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import LogoMarquee from '@/app/components/sections/LogoMarquee';
import MetricsSection from '@/app/components/sections/MetricsSection';
import FeatureMatrix from '@/app/components/sections/FeatureMatrix';
import ControlCenter from '@/app/components/sections/ControlCenter';
import ProcessTimeline from '@/app/components/sections/ProcessTimeline';
import IndustryHighlights from '@/app/components/sections/IndustryHighlights';
import { calendlyUrl, faqs, hero } from '@/app/data/site';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          title={hero.title}
          copy={hero.copy}
          tagline={hero.tagline}
          ctaLabel={hero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <LogoMarquee />
        <MetricsSection />
        <FeatureMatrix />
        <ControlCenter />
        <ProcessTimeline />
        <IndustryHighlights />
        <FAQList items={faqs} />
        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
