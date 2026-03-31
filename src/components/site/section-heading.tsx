type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.24em] text-accent-deep/80 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
