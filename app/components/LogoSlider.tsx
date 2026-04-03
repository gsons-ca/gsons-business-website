interface LogoItem {
  name: string;
  href: string;
  city: string;
  country: string;
  industry: string;
}

interface LogoSliderProps {
  logos: LogoItem[];
}

export default function LogoSlider({ logos }: LogoSliderProps) {
  return (
    <section className="py-10">
      <div className="container">
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
