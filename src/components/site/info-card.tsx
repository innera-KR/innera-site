import type { ReactNode } from "react";

type InfoCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function InfoCard({
  eyebrow,
  title,
  description,
  children,
}: InfoCardProps) {
  return (
    <article className="soft-shadow rounded-[1.5rem] border border-white/55 bg-surface-strong/85 p-6 sm:p-7">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.22em] text-accent-deep/75">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-3 font-serif text-2xl text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
