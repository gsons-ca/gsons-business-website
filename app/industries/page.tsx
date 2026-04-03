import Nav from '@/app/components/Nav';
import Hero from '@/app/components/Hero';
import IndustriesGrid from '@/app/components/IndustriesGrid';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import { calendlyUrl, industriesHero, industriesList, industriesCopy } from '@/app/data/site';

const industryCards = industriesList.map(title => ({ title, description: industriesCopy }));

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={industriesHero.tag}
          title={industriesHero.title}
          copy={industriesHero.copy}
          ctaLabel={industriesHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <IndustriesGrid
          title="Pre-built industry accelerators"
          copy="Preview in a sandbox, adjust with us, then promote only after it fits your numbers."
          items={industryCards}
        />
        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
