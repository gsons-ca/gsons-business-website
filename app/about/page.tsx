import Nav from '@/app/components/Nav';
import Hero from '@/app/components/Hero';
import FeatureGrid from '@/app/components/FeatureGrid';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import { aboutHero, aboutFeatures, aboutCopy, calendlyUrl } from '@/app/data/site';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={aboutHero.tag}
          title={aboutHero.title}
          copy={aboutHero.copy}
          ctaLabel={aboutHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <FeatureGrid title="What we handle" copy={aboutCopy} items={aboutFeatures} />
        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
