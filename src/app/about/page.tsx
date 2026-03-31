import Link from "next/link";
import { InfoCard } from "@/components/site/info-card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";

const beliefs = [
  {
    title: "사람은 더 몰아붙인다고 단단해지지 않습니다",
    description:
      "지친 마음에는 더 강한 자극보다, 지금의 상태를 이해하고 받아들일 수 있는 언어가 먼저 필요하다고 믿습니다.",
  },
  {
    title: "삶의 방향은 바깥의 기준보다 내면의 감각에서 시작됩니다",
    description:
      "무엇을 해야 하는지보다 어떤 사람으로 살아가고 싶은지를 먼저 묻는 일이 더 본질적인 변화로 이어집니다.",
  },
  {
    title: "변화는 작고 일관된 태도에서 오래 남습니다",
    description:
      "한 번의 각성보다, 반복 가능한 시선과 습관이 결국 삶을 바꾼다고 믿습니다.",
  },
];

const supportWays = [
  {
    title: "감정의 혼란을 언어로 정리하도록 돕습니다",
    description:
      "막연한 불안과 답답함을 그대로 두지 않고, 지금 무엇이 나를 흔드는지 차분히 바라볼 수 있도록 돕습니다.",
  },
  {
    title: "삶의 방향을 다시 묻는 시간을 만듭니다",
    description:
      "멈춰 서서 나에게 중요한 가치와 원하는 삶의 태도를 다시 확인할 수 있게 안내합니다.",
  },
  {
    title: "콘텐츠를 통해 지속적으로 연결됩니다",
    description:
      "블로그, 유튜브, SNS를 통해 가볍지만 깊이 있는 접점을 반복적으로 제공하며 신뢰를 쌓아갑니다.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={
          <>
            Innera는 방향을 잃은 마음에
            <br />
            다시 중심을 세우기 위해 존재합니다.
          </>
        }
        description="살아가다 보면 누구나 한 번쯤은 어디로 가야 할지, 지금 잘 가고 있는지, 왜 이렇게 마음이 흔들리는지 알 수 없는 시간을 지나게 됩니다. Innera는 바로 그런 순간에 스스로를 더 깊이 이해하고 삶의 방향을 다시 세울 수 있도록 돕는 브랜드입니다."
        aside={
          <div className="space-y-4">
            <p className="font-serif text-2xl text-foreground">Why Innera Exists</p>
            <p className="text-sm leading-8 text-muted">
              Innera는 사람들에게 더 빨리 달리라고 말하기보다, 잠시 멈춰 자신의
              마음을 들여다보고 삶의 기준을 다시 세울 수 있는 조용한 공간과 언어를
              전하고자 시작되었습니다.
            </p>
          </div>
        }
      />

      <section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Why"
          title="왜 Innera가 필요한가"
          description="많은 사람이 바쁘게 살아가지만, 정작 어디를 향해 가고 있는지는 점점 흐려집니다. Innera는 그 흐려진 방향 감각을 다시 회복하도록 돕기 위해 존재합니다."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="soft-shadow rounded-[1.5rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-7">
            <p className="text-sm leading-8 text-muted">
              우리는 종종 더 열심히 하면 괜찮아질 거라고 배웁니다. 하지만 방향 없이
              애쓰는 삶은 쉽게 지치고, 마음은 더 혼란스러워지기도 합니다. Innera는
              이 지점에서 출발합니다. 먼저 마음의 상태를 이해하고, 나에게 중요한 것이
              무엇인지 다시 확인하는 과정이 필요하다고 보기 때문입니다.
            </p>
          </div>
          <div className="soft-shadow rounded-[1.5rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-7">
            <p className="text-sm leading-8 text-muted">
              그래서 Innera는 성과를 압박하는 브랜드가 아니라, 삶의 방향과 태도를 함께
              정돈하는 브랜드가 되고자 합니다. 조용하지만 분명한 메시지로 스스로를
              돌아볼 수 있게 돕고, 흔들리는 시기에도 다시 중심을 찾도록 안내합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <SectionHeading
          eyebrow="Belief"
          title="Innera가 믿는 것"
          description="이 브랜드는 사람을 바꾸려 하기보다, 스스로를 이해하고 다시 선택할 힘을 회복하도록 돕는 관점을 중요하게 생각합니다."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {beliefs.map((belief) => (
            <InfoCard
              key={belief.title}
              title={belief.title}
              description={belief.description}
            />
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <SectionHeading
          eyebrow="How Innera Helps"
          title="삶의 방향을 잃었다고 느끼는 사람에게 Innera가 하는 일"
          description="Innera는 정답을 대신 주기보다, 스스로 자신의 마음과 삶을 더 명확하게 읽을 수 있도록 돕습니다."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {supportWays.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <div className="rounded-[1.75rem] border border-border bg-white/60 px-6 py-8 sm:px-8 sm:py-10">
          <SectionHeading
            eyebrow="Next"
            title="Innera의 철학과 NOVA Steps를 이어서 살펴보세요"
            description="브랜드가 실제로 어떤 흐름으로 변화를 바라보는지 궁금하다면, 다음 페이지에서 Innera의 핵심 프레임을 확인할 수 있습니다."
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/philosophy"
              className="inline-flex justify-center rounded-full border border-border bg-white/75 px-5 py-3 text-sm hover:bg-white"
            >
              철학 / NOVA Steps 보기
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full border border-border bg-white/75 px-5 py-3 text-sm hover:bg-white"
            >
              문의 페이지 보기
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
