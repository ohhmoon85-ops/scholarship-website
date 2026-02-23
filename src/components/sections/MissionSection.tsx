import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/animations/FadeIn";

export default function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">

          {/* 왼쪽: 텍스트 */}
          <FadeInSection from="left">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
              About Us
            </p>
            <h2 className="font-heading text-navy-900 text-[2rem] sm:text-[2.4rem] font-bold leading-tight tracking-tight">
              어렵고 힘든 청년들에게<br />
              미래 희망 나눔을 실천합니다
            </h2>

            <div className="mt-7 space-y-4 text-[15px] leading-[1.9] text-navy-600">
              <p>
                삼양그룹은 방위산업회사로서 국가의 공공 자금과 국민의 신뢰라는 토대 위에서
                성장한 기업입니다. 이에 그룹 후원의 장학재단 설립을 통해 사회와 국가에
                기여하는 것이 우리의 사명이라 믿습니다.
              </p>
              <p>
                창업회장님의 경영철학인 <strong className="text-navy-900 font-semibold">
                &ldquo;인류의 보편적 가치와 행복증진&rdquo;</strong>을 구현하기 위해,
                사회적 지원이 가장 필요한 곳에 실질적으로 도움을 주는
                한영자 희망 장학재단을 설립합니다.
              </p>
            </div>

            {/* 후원 기관 */}
            <div className="mt-8 pt-8 border-t border-navy-100">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy-400 mb-4">
                후원 기관 (삼양그룹)
              </p>
              <div className="flex flex-wrap gap-3">
                {["㈜제오홀딩스", "삼양화학공업㈜", "㈜삼양정밀화학"].map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center rounded-lg border border-navy-100 bg-navy-50 px-4 py-2 text-[13px] font-semibold text-navy-700"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-navy-700 hover:text-primary transition-colors group"
            >
              자세히 알아보기
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </FadeInSection>

          {/* 오른쪽: 사진 */}
          <FadeInSection from="right">
            <div className="relative">
              {/* 메인 이미지 */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-navy-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=85&auto=format&fit=crop"
                  alt="장학금 수여식"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* 기본재산 배지 */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-navy-100 p-5">
                <p className="text-[11px] font-semibold text-navy-400 uppercase tracking-wide mb-1">
                  설립 기본재산
                </p>
                <p className="text-3xl font-bold text-navy-900 font-heading leading-none">
                  50<span className="text-xl font-semibold text-navy-500">억원</span>
                </p>
                <p className="mt-1 text-[12px] text-navy-400">삼양그룹 계열사 출연</p>
              </div>
              {/* 장식 요소 */}
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gold/10 border border-gold/20" />
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
