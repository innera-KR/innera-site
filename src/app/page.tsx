import Link from "next/link";
import { InfoCard } from "@/components/site/info-card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { novaSteps } from "@/lib/site-data";

const summaryItems = [
  {
    title: "한국어 기반 마인드셋 브랜드",
    description:
      "Innera는 한국어 사용자에게 더 자연스럽고 정서적으로 닿는 방식으로 자기이해와 마인드셋을 이야기합니다.",
  },
  {
    title: "브랜드 소개와 신뢰 형성 중심",
    description:
      "이 사이트는 강한 판매보다 브랜드의 결을 전달하고, 차분한 신뢰를 쌓도록 설계된 첫 인상 공간입니다.",
  },
];

const whyInneraItems = [
  {
    title: "과한 동기부여 대신 차분한 통찰",
    description:
      "Innera는 더 세게 밀어붙이는 메시지보다, 자신을 이해하고 삶의 중심을 회복하는 관점을 제안합니다.",
  },
  {
    title: "내면의 방향을 먼저 세우는 접근",
    description:
      "무엇을 할지 이전에 어떤 태도로 살아갈지를 정리하는 것이 더 오래가는 변화로 이어진다고 믿습니다.",
  },
  {
    title: "콘텐츠를 통한 장기적 관계 형성",
    description:
      "블로그, 유튜브, SNS에 축적되는 콘텐츠를 통해 방문자는 부담 없이 브랜드를 깊게 경험할 수 있습니다.",
  },
];

const trustItems = [
  "자기이해를 돕는 분명한 브랜드 메시지",
  "블로그와 소셜 채널로 이어지는 일관된 콘텐츠 흐름",
  "향후 코칭과 협업으로 자연스럽게 확장 가능한 구조",
];

const channelLinks = [
  {
    title: "블로그",
    description: "깊이 있는 글과 브랜드 철학, 성찰 중심 콘텐츠를 담는 채널",
    href: "/content-hub",
    cta: "블로그 방향 보기",
  },
  {
    title: "YouTube",
    description: "조금 더 긴 호흡으로 생각의 프레임과 삶의 태도를 전하는 채널",
    href: "/content-hub",
    cta: "유튜브 방향 보기",
  },
  {
    title: "SNS",
    description: "짧지만 선명한 문장과 일상형 메시지로 자주 만나는 채널",
    href: "/content-hub",
    cta: "SNS 방향 보기",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hero"
        title={
          <>
            내면의 방향을 세울 때,
            <br />
            삶의 태도는 더 단단해집니다.
          </>
        }
        description="Innera는 자기이해와 정서적 균형, 그리고 지속 가능한 마인드셋을 돕는 한국어 기반 코칭 브랜드입니다. 조용하지만 분명한 메시지로 신뢰를 쌓고, 콘텐츠를 통해 오래 남는 변화를 제안합니다."
        aside={
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted">Core Message</p>
              <p className="mt-2 font-serif text-3xl leading-tight text-foreground">
                Understand deeply.
                <br />
                Live gently.
              </p>
            </div>
            <div className="grid gap-3 border-t border-border pt-5 text-sm text-muted">
              <div className="flex items-center justify-between gap-4">
                <span>브랜드 무드</span>
                <span className="text-foreground">Minimal / Warm / Premium</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>핵심 목적</span>
                <span className="text-foreground">브랜드 소개 / 신뢰 형성</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>연결 채널</span>
                <span className="text-foreground">Blog / YouTube / SNS</span>
              </div>
            </div>
          </div>
        }
      />

      <section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Brand Summary"
          title="Innera를 한눈에 이해할 수 있도록"
          description="홈페이지는 브랜드의 첫인상과 방향성을 빠르게 전달하면서도, 과장 없이 편안한 신뢰를 쌓는 역할을 합니다."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {summaryItems.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <SectionHeading
          eyebrow="Why Innera"
          title="왜 Innera여야 하는가"
          description="Innera는 단순한 자기계발 메시지가 아니라, 삶의 기준과 감정의 중심을 다시 세우는 브랜드 경험을 지향합니다."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {whyInneraItems.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <SectionHeading
          eyebrow="NOVA Steps Preview"
          title="Innera의 변화 프레임 미리보기"
          description="NOVA Steps는 알아차림에서 실천까지 이어지는 Innera의 핵심 사고 흐름입니다."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {novaSteps.map((step) => (
            <InfoCard
              key={step.key}
              eyebrow={step.key}
              title={`${step.koreanTitle} · ${step.title}`}
              description={step.description}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/philosophy"
            className="inline-flex rounded-full border border-border bg-white/70 px-5 py-3 text-sm hover:bg-white"
          >
            철학 / NOVA Steps 전체 보기
          </Link>
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <SectionHeading
          eyebrow="Trust"
          title="신뢰는 메시지보다 축적으로 만들어집니다"
          description="브랜드의 신뢰는 한 문장보다 반복되는 태도와 꾸준한 콘텐츠에서 형성됩니다."
        />
        <div className="mt-8 rounded-[1.75rem] border border-border bg-white/55 p-6 sm:p-8">
          <div className="grid gap-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-border bg-surface-strong/85 px-5 py-4 text-sm leading-7 text-muted sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <SectionHeading
          eyebrow="Content Channel Links"
          title="콘텐츠 채널로 자연스럽게 이어집니다"
          description="방문자는 자신에게 편한 형식의 콘텐츠를 선택해 Innera를 더 가까이 경험할 수 있습니다."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {channelLinks.map((channel) => (
            <InfoCard
              key={channel.title}
              title={channel.title}
              description={channel.description}
            >
              <Link
                href={channel.href}
                className="inline-flex rounded-full border border-border bg-white/65 px-4 py-2 text-sm text-foreground hover:bg-white/85"
              >
                {channel.cta}
              </Link>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <div className="soft-shadow rounded-[1.75rem] border border-border bg-accent-deep px-6 py-8 text-[#fffaf4] sm:px-8 sm:py-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#f2ded2] sm:text-sm">
            Contact CTA
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            브랜드와 더 깊이 연결하고 싶다면
            <br />
            편안한 방식으로 문의해 주세요.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#f5e6da] sm:text-base">
            코칭 문의, 콘텐츠 협업, 브랜드 관련 질문까지 차분하고 분명한 연결을 위해
            Contact 페이지를 준비해 두었습니다.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm"
            >
              문의 페이지로 이동
            </Link>
            <Link
              href="/about"
              className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm"
            >
              브랜드 소개 더 보기
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
