import Link from 'next/link';
import AnchorLink from '@/app/components/AnchorLink';
import { Button } from '@/app/components/ui/button';

interface CTAProps {
  label: string;
  href: string;
}

export default function CTA({ label, href }: CTAProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-8 text-primary-foreground shadow-depth sm:px-8 sm:py-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,#9ca3af,transparent_70%)] opacity-60" />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">Next step</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Talk with the delivery lead about your migration risk.
              </h3>
              <p className="mt-4 text-sm text-primary-foreground/80">
                30 minutes to review your current ERP issues, data concerns, and go-live timing. You leave
                with a draft migration plan.
              </p>
            </div>
            <div className="flex items-center lg:justify-end">
              <Button size="lg" variant="secondary" asChild>
                {href.includes('#') ? (
                  <AnchorLink href={href}>{label}</AnchorLink>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
