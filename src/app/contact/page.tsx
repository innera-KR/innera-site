import { InfoCard } from "@/components/site/info-card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";

const contactItems = [
  {
    title: "코칭 문의",
    description:
      "향후 1:1 코칭이나 프로그램 안내가 준비되면, 관심 있는 분들이 자연스럽게 연결될 수 있는 창구가 됩니다.",
  },
  {
    title: "브랜드 협업",
    description:
      "콘텐츠 협업, 인터뷰, 강연, 브랜디드 프로젝트 등 Innera의 결에 맞는 제안을 받을 수 있는 영역입니다.",
  },
  {
    title: "일반 문의",
    description:
      "사이트, 콘텐츠, 브랜드 방향에 관한 일반적인 질문을 부담 없이 남길 수 있도록 안내합니다.",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            부담 없이,
            <br />
            편안한 연결을 남길 수 있도록
          </>
        }
        description="Contact 페이지는 강한 세일즈보다 신뢰감 있는 연결을 만드는 역할을 합니다. 방문자가 어떤 이유로 찾아왔든, 분명하고 따뜻한 안내를 받는 경험이 중요합니다."
        aside={
          <div className="space-y-4">
            <p className="font-serif text-2xl text-foreground">Recommended Setup</p>
            <ul className="space-y-2 text-sm leading-7 text-muted">
              <li>이메일 주소 노출</li>
              <li>간단한 문의 폼</li>
              <li>응답 예상 시간 안내</li>
            </ul>
          </div>
        }
      />

      <section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Inquiry Types"
          title="이 페이지에서 다루게 될 연결 유형"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {contactItems.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="pt-14 sm:pt-18">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="soft-shadow rounded-[1.5rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-7">
            <p className="font-serif text-2xl text-foreground">권장 안내 문구</p>
            <p className="mt-4 text-sm leading-8 text-muted">
              Innera에 대한 문의나 협업 제안이 있으시다면 편하게 남겨주세요. 확인 후
              가능한 한 차분하고 성실하게 답변드리겠습니다.
            </p>
          </div>
          <div className="soft-shadow rounded-[1.5rem] border border-white/55 bg-surface-strong/90 p-6 sm:p-7">
            <p className="font-serif text-2xl text-foreground">향후 확장 방향</p>
            <p className="mt-4 text-sm leading-8 text-muted">
              추후 실제 연락 수단이 정해지면 이메일, 구글 폼, 일정 예약 링크, SNS DM
              안내 중 브랜드 톤에 맞는 한두 가지 방식만 정돈해서 노출하는 편이 좋습니다.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
