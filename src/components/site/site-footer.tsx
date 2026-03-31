import Link from "next/link";
import { navigationItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="font-brand text-xl tracking-[0.18em] text-accent-deep">
              INNERA
            </p>
            <p className="max-w-md text-sm leading-7 text-muted">
              Innera는 자기이해와 정서적 안정, 그리고 삶의 방향성을 다시 세우고 싶은
              사람들을 위한 한국어 기반 마인드셋 코칭 브랜드입니다.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-muted sm:justify-self-end">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/80 pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>서울 기반의 따뜻하고 절제된 마인드셋 코칭 브랜드</p>
          <p>Blog · Instagram · YouTube로 이어지는 콘텐츠 허브</p>
        </div>
      </div>
    </footer>
  );
}
