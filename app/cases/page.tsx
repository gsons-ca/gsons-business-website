import Nav from '@/app/components/Nav';
import Hero from '@/app/components/Hero';
import FeatureGrid from '@/app/components/FeatureGrid';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import { calendlyUrl, casesHero, cases, casesCopy } from '@/app/data/site';

const caseCards = cases.map(item => ({ title: item.title, description: item.detail }));

export default function CasesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={casesHero.tag}
          title={casesHero.title}
          copy={casesHero.copy}
          ctaLabel={casesHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <FeatureGrid title="Recent work" copy={casesCopy} items={caseCards} />
        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
