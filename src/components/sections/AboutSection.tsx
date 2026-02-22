import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInSection, StaggerSection, StaggerItem } from "@/components/animations/FadeIn";

const values = [
  {
    icon: "🎓",
    title: "교육 지원",
    description: "경제적 여건에 관계없이 모든 학생이 질 높은 교육을 받을 수 있도록 지원합니다.",
  },
  {
    icon: "🤝",
    title: "사회적 책임",
    description: "미래 사회를 이끌어갈 인재 양성을 통해 지속 가능한 사회 발전에 기여합니다.",
  },
  {
    icon: "💡",
    title: "혁신과 도전",
    description: "새로운 분야에 도전하는 창의적 인재를 발굴하고 지원합니다.",
  },
  {
    icon: "🌱",
    title: "지속 가능한 성장",
    description: "단순한 금전 지원을 넘어 장기적인 멘토링과 네트워킹을 제공합니다.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-navy-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── 섹션 헤더 ── */}
        <FadeInSection className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              About Us
            </p>
            <h2 className="text-3xl font-bold text-navy-900 font-heading md:text-4xl leading-tight">
              인재를 키우는 재단,<br />
              30년의 역사와 신뢰
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[14.5px] leading-relaxed text-navy-600">
              1995년 설립된 장학재단은 30년 동안 경제적 어려움에도
              학업에 열중하는 우수 학생들을 발굴하고 지원해왔습니다.
            </p>
            <Button asChild variant="outline" className="mt-5 rounded-full border-navy-200">
              <Link href="/about">재단 소개 보기</Link>
            </Button>
          </div>
        </FadeInSection>

        {/* ── 포토 갤러리 + 핵심 가치 (2열) ── */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* 왼쪽: 포토 그리드 (기획서 5페이지 Grid Type Photo Gallery) */}
          <FadeInSection from="left">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[420px]">
              {/* 큰 사진 (왼쪽, 세로 2칸) */}
              <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=560&q=85&auto=format&fit=crop"
                  alt="장학금 수여식"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-navy-900/60 px-2 py-1 rounded-full backdrop-blur-sm">
                  장학금 수여식
                </p>
              </div>

              {/* 오른쪽 위 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80&auto=format&fit=crop"
                  alt="단체 봉사활동"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                <p className="absolute bottom-2 left-2 text-[11px] font-semibold text-white bg-navy-900/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                  봉사활동
                </p>
              </div>

              {/* 오른쪽 아래 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&q=80&auto=format&fit=crop"
                  alt="장학생 학업 현장"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                <p className="absolute bottom-2 left-2 text-[11px] font-semibold text-white bg-navy-900/60 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                  학업 지원
                </p>
              </div>
            </div>

            {/* 포토갤러리 링크 */}
            <div className="mt-4 text-right">
              <Link
                href="/media/gallery"
                className="text-[13px] font-medium text-navy-400 hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                포토갤러리 전체 보기 →
              </Link>
            </div>
          </FadeInSection>

          {/* 오른쪽: 핵심 가치 + 이사장 인사말 */}
          <FadeInSection from="right">
            <StaggerSection inView={false} delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <StaggerItem key={value.title}>
                    <div className="rounded-xl bg-white p-5 shadow-sm border border-navy-100 hover:border-navy-200 hover:shadow-md transition-all duration-300 h-full">
                      <div className="mb-3 text-2xl">{value.icon}</div>
                      <h3 className="mb-1.5 text-[14px] font-semibold text-navy-900 font-heading">
                        {value.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-navy-500">
                        {value.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerSection>

            {/* 이사장 인사말 */}
            <div className="mt-5 rounded-2xl overflow-hidden bg-navy-900 flex">
              <div className="w-1.5 bg-gold flex-shrink-0" />
              <div className="p-6 flex-1">
                <p className="mb-2 text-[10px] font-semibold text-gold uppercase tracking-widest">
                  이사장 인사말
                </p>
                <blockquote className="text-[15px] text-white/85 leading-relaxed font-heading">
                  &ldquo;꿈을 향한 여러분의 도전을 응원합니다.
                  장학재단은 여러분이 미래의 리더로 성장할 수 있도록
                  언제나 함께하겠습니다.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold text-sm">
                    홍
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">홍길동</p>
                    <p className="text-[11px] text-navy-300/60">장학재단 이사장</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
