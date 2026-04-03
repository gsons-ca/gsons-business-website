import Nav from '@/app/components/Nav';
import Hero from '@/app/components/Hero';
import TestimonialsGrid from '@/app/components/TestimonialsGrid';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import { calendlyUrl, testimonialsHero, testimonialsPage, testimonialsCopy } from '@/app/data/site';

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={testimonialsHero.tag}
          title={testimonialsHero.title}
          copy={testimonialsHero.copy}
          ctaLabel={testimonialsHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <TestimonialsGrid quotes={testimonialsPage} copy={testimonialsCopy} />
        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
