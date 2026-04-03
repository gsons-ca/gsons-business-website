export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f3f4f6,transparent_55%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.2]" />
      <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle,#e5e7eb,transparent_70%)] blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,#d1d5db,transparent_70%)] blur-3xl opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-[0.12]" />
    </div>
  );
}
