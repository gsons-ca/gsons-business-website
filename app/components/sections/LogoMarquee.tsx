import { logos } from '@/app/data/site';

export default function LogoMarquee() {
  return (
    <section className="py-8 sm:py-10">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted teams by modernisation ERP
        </p>
      </div>
      <div className="container mt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {logos.map(item => (
            <div
              key={item.name}
              className="group flex min-w-[220px] flex-col items-start justify-center gap-1 rounded-2xl border border-border/70 bg-gradient-to-br from-card/90 via-card/80 to-card/60 px-5 py-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-depth"
            >
              <span className="text-sm font-semibold text-foreground transition group-hover:text-foreground">
                {item.name}
              </span>
              <span className="text-xs text-muted-foreground">{item.city}, {item.country}</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {item.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
