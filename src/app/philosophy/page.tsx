import Link from "next/link";
import { InfoCard } from "@/components/site/info-card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { novaSteps } from "@/lib/site-data";

export default function PhilosophyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Philosophy / NOVA Steps"
        title={
          <>
            Innera의 철학은
            <br />
            알아차림에서 실천까지 이어집니다.
          </>
        }
        description="NOVA Steps는 감정의 소음 속에서도 나를 잃지 않고, 다시 삶의 방향과 태도를 세워가는 Innera의 기본 프레임입니다."
        aside={
          <div className="space-y-4">
            <p className="text-sm text-muted">Framework Summary</p>
            <p className="font-serif text-3xl leading-tight text-foreground">
              Notice
              <br />
              Organize
              <br />
              Visualize
              <br />
              Act
            </p>
          </div>
        }
      />

      <section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Why NOVA"
          title="변화는 더 몰아붙이는 것보다 더 정확히 이해하는 것에서 시작됩니다"
          description="Innera는 마음의 상태를 섬세하게 읽고 정리한 뒤, 의미 있는 방향을 다시 연결하고 작은 실천으로 옮기는 흐름을 중요하게 생각합니다."
        />
      </section>

      <section className="pt-10 sm:pt-12">
        <div className="grid gap-5 lg:grid-cols-2">
          {novaSteps.map((step) => (
            <InfoCard
              key={step.key}
              eyebrow={step.key}
              title={`${step.koreanTitle} · ${step.title}`}
              description={step.description}
            />
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="soft-shadow rounded-[1.5rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-7">
            <p className="font-serif text-2xl text-foreground">이 프레임이 필요한 사람</p>
            <p className="mt-4 text-sm leading-8 text-muted">
              마음이 자주 흔들리거나 삶의 방향이 흐릿해졌을 때, 그리고 자기계발의
              피로감 속에서 더 본질적인 기준을 찾고 싶을 때 도움이 되는 구조입니다.
            </p>
          </div>
          <div className="soft-shadow rounded-[1.5rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-7">
            <p className="font-serif text-2xl text-foreground">어떻게 연결되는가</p>
            <p className="mt-4 text-sm leading-8 text-muted">
              NOVA Steps는 콘텐츠를 읽고 보는 방식에도 적용되며, 앞으로 코칭 경험의
              뼈대가 되는 공통 언어로 자연스럽게 확장될 수 있습니다.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/content-hub"
            className="inline-flex rounded-full border border-border bg-white/70 px-5 py-3 text-sm hover:bg-white"
          >
            관련 콘텐츠 보러 가기
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
