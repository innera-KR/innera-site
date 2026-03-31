import Link from "next/link";
import { InfoCard } from "@/components/site/info-card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";

const channels = [
  {
    id: "blog",
    title: "블로그",
    shortDescription:
      "깊이 있는 글을 통해 브랜드 철학과 자기이해의 흐름을 차분하게 전하는 채널입니다.",
    expectedContent:
      "브랜드 철학, 자기이해, 감정 회복력, 삶의 방향성, 성찰 질문, 코칭 관점을 담은 글을 기대할 수 있습니다.",
    cta: "블로그 내용 보기",
  },
  {
    id: "instagram",
    title: "인스타그램",
    shortDescription:
      "짧지만 선명한 문장과 감각적인 카드형 콘텐츠로 Innera를 가까이 만나는 채널입니다.",
    expectedContent:
      "짧은 인사이트, 공감 문장, 리마인드 메시지, 일상 속 마인드셋 포인트, 저장하고 싶은 짧은 콘텐츠를 기대할 수 있습니다.",
    cta: "인스타그램 내용 보기",
  },
  {
    id: "youtube",
    title: "유튜브",
    shortDescription:
      "조금 더 긴 호흡으로 생각의 프레임과 삶의 태도를 풀어내는 영상 채널입니다.",
    expectedContent:
      "깊이 있는 인사이트 영상, 주제별 해설, 삶의 방향을 다시 점검하는 이야기, 마인드셋 코칭 관점의 영상 콘텐츠를 기대할 수 있습니다.",
    cta: "유튜브 내용 보기",
  },
];

export default function ContentHubPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Content Hub"
        title={
          <>
            Innera의 콘텐츠는
            <br />
            서로 다른 방식으로 마음에 닿습니다.
          </>
        }
        description="콘텐츠 허브는 방문자가 Innera를 어떤 채널에서, 어떤 깊이로 경험할 수 있는지 한눈에 이해하도록 돕는 페이지입니다. 블로그, 인스타그램, 유튜브는 각기 다른 형식이지만 하나의 일관된 브랜드 메시지로 연결됩니다."
      />

      <section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Channels"
          title="채널별로 기대할 수 있는 콘텐츠"
          description="방문자는 자신에게 가장 편한 형식의 채널을 선택해 Innera의 메시지를 더 자연스럽게 경험할 수 있습니다."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {channels.map((channel) => (
            <InfoCard
              key={channel.id}
              title={channel.title}
              description={channel.shortDescription}
            >
              <p className="text-sm leading-7 text-muted">{channel.expectedContent}</p>
              <Link
                href={`#${channel.id}`}
                className="mt-5 inline-flex rounded-full border border-border bg-white/65 px-4 py-2 text-sm text-foreground hover:bg-white/85"
              >
                {channel.cta}
              </Link>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <SectionHeading
          eyebrow="Details"
          title="채널별 콘텐츠 안내"
          description="각 채널은 같은 브랜드 철학을 공유하지만, 전달 방식과 깊이가 다르기 때문에 방문자는 상황에 맞는 접점을 선택할 수 있습니다."
        />

        <div className="mt-8 space-y-5">
          <section
            id="blog"
            className="soft-shadow rounded-[1.75rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-accent-deep/80 sm:text-sm">
              Blog
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground">블로그</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              블로그에서는 한 가지 주제를 조금 더 깊이 있게 풀어냅니다. 감정의 흐름을
              이해하는 글, 삶의 방향을 점검하는 글, 자기이해를 돕는 질문형 콘텐츠,
              Innera의 철학을 담은 에세이형 글을 기대할 수 있습니다.
            </p>
          </section>

          <section
            id="instagram"
            className="soft-shadow rounded-[1.75rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-accent-deep/80 sm:text-sm">
              Instagram
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground">인스타그램</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              인스타그램에서는 짧지만 감정적으로 바로 닿는 문장과 저장하고 싶은 카드형
              메시지를 만날 수 있습니다. 일상 속에서 스스로를 다잡게 하는 리마인드 문장,
              공감 콘텐츠, 짧은 마인드셋 포인트를 기대할 수 있습니다.
            </p>
          </section>

          <section
            id="youtube"
            className="soft-shadow rounded-[1.75rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-accent-deep/80 sm:text-sm">
              YouTube
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground">유튜브</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              유튜브에서는 조금 더 긴 호흡으로 삶의 방향, 자기이해, 감정 회복력,
              마인드셋 전환에 대한 이야기를 전할 수 있습니다. 한 주제를 더 입체적으로
              설명하는 영상, 생각의 프레임을 바꿔주는 해설형 콘텐츠를 기대할 수 있습니다.
            </p>
          </section>
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <div className="rounded-[1.75rem] border border-border bg-accent-deep px-6 py-8 text-[#fffaf4] sm:px-8 sm:py-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#f2ded2] sm:text-sm">
            Next Step
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            콘텐츠를 통해 먼저 만나고,
            <br />
            필요할 때 더 깊은 연결로 이어집니다.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#f5e6da] sm:text-base">
            방문자는 콘텐츠를 통해 Innera의 결을 충분히 경험한 뒤, 브랜드에 대한 문의나
            협업 제안으로 자연스럽게 이어질 수 있습니다.
          </p>
          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm"
            >
              문의 페이지 보기
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
