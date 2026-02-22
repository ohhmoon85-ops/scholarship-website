import { FadeInSection, StaggerSection, StaggerItem } from "@/components/animations/FadeIn";

/* PDF 취지문에서 발췌한 핵심 메시지 3개 */
const quotes = [
  {
    text: "우리 장학재단은 단순한 기부가 아닙니다. 국가가 우리에게 맡긴 역할에 대해 기업이 정당하게 응답하는 방식이며, 미래 대한민국을 책임질 인재를 키우는 가장 근본적인 사회 환원입니다.",
    author: "전동진",
    role: "이사장 내정자",
  },
  {
    text: "보육원에서 자라 자립을 준비하는 청년들은, 누구보다 큰 잠재력을 지니고 있음에도 불구하고, 출발선에서부터 이미 불평등을 마주하고 있습니다. 우리는 이 간극을 외면하지 않겠습니다.",
    author: "한영자장학재단",
    role: "설립 취지문",
  },
  {
    text: "국가의 지원으로 성장한 기업이 다시 국가와 사회에 기여하는 이 순환, 그 책임의 출발점을 오늘 이 장학재단으로 세우고자 합니다.",
    author: "창업회장",
    role: "경영 철학",
  },
];

export default function QuotesSection() {
  return (
    <section className="py-20 lg:py-24 bg-navy-50/80">
      {/* 상단 웨이브 */}
      <div className="-mt-20 mb-14">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
          <path d="M0,28 Q360,0 720,28 Q1080,56 1440,28 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            Foundation Voice
          </p>
          <h2 className="font-heading text-navy-900 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">
            재단의 목소리
          </h2>
        </FadeInSection>

        <StaggerSection className="grid gap-6 sm:grid-cols-3">
          {quotes.map((q, i) => (
            <StaggerItem key={i}>
              <div className="h-full rounded-2xl bg-white border border-navy-100 p-8 shadow-sm flex flex-col">
                {/* 따옴표 */}
                <span className="text-5xl font-serif text-gold/40 leading-none mb-4 select-none">
                  &ldquo;
                </span>
                {/* 인용문 */}
                <p className="flex-1 text-[14.5px] leading-[1.85] text-navy-700 font-heading italic">
                  {q.text}
                </p>
                {/* 출처 */}
                <div className="mt-6 pt-5 border-t border-navy-100">
                  <p className="text-[13px] font-semibold text-navy-900">{q.author}</p>
                  <p className="text-[12px] text-navy-400 mt-0.5">{q.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerSection>
      </div>
    </section>
  );
}
