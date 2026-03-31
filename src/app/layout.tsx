import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innera | 내면의 방향을 세우는 마인드셋 코칭 브랜드",
  description:
    "Innera는 감정의 중심을 회복하고 삶의 방향을 다시 세우도록 돕는 한국어 기반 마인드셋 코칭 브랜드입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="grain flex min-h-full flex-col">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(255,245,233,0.95),_transparent_42%)]" />
          <div className="pointer-events-none absolute left-[-8rem] top-56 -z-10 h-72 w-72 rounded-full bg-[rgba(211,177,146,0.14)] blur-3xl" />
          <div className="pointer-events-none absolute right-[-8rem] top-24 -z-10 h-80 w-80 rounded-full bg-[rgba(162,126,102,0.12)] blur-3xl" />
          <a href="#main-content" className="skip-link">
            본문으로 바로가기
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
