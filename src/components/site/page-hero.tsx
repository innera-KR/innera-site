import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <section className="grid gap-8 border-b border-border/80 pb-10 sm:pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <div>
        <p className="text-xs uppercase tracking-[0.26em] text-accent-deep/80 sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.2] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      </div>
      {aside ? (
        <div className="soft-shadow rounded-[1.75rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-7">
          {aside}
        </div>
      ) : null}
    </section>
  );
}
