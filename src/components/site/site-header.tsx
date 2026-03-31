import Link from "next/link";
import { navigationItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex items-start justify-between gap-4 sm:items-center">
          <Link
            href="/"
            className="font-brand text-xl tracking-[0.2em] text-accent-deep sm:text-2xl"
          >
            INNERA
          </Link>
          <p className="max-w-[12rem] text-right text-xs leading-5 text-muted sm:max-w-none sm:text-sm">
            내면의 방향을 세우는 마인드셋 브랜드
          </p>
        </div>

        <nav aria-label="주요 메뉴" className="-mx-1 overflow-x-auto">
          <ul className="flex min-w-max gap-2 px-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-border bg-white/45 px-4 py-2 text-sm text-foreground transition-colors hover:bg-white/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
