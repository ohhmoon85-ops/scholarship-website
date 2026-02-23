import Image from "next/image";
import Link from "next/link";
import { FadeInSection, StaggerSection, StaggerItem } from "@/components/animations/FadeIn";

const highlights = [
  { value: "50명", label: "연간 선발 규모" },
  { value: "400만원", label: "1인 장학금" },
  { value: "2억원", label: "연간 지급 예정액" },
  { value: "전국", label: "지원 대상 지역" },
];

export default function ProgramSection() {
  return (
    <>
      {/* ── 장학 사업 소개 ── */}
      <section className="py-20 lg:py-28 bg-navy-50/70">
        {/* 상단 웨이브 */}
        <div className="-mt-20 mb-12 -mx-0">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
            <path d="M0,28 Q360,56 720,28 Q1080,0 1440,28 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">

            {/* 왼쪽: 사진 */}
            <FadeInSection from="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-navy-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=85&auto=format&fit=crop"
                  alt="장학 사업 현장"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
              </div>
            </FadeInSection>

            {/* 오른쪽: 텍스트 */}
            <FadeInSection from="right">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                Scholarship Program
              </p>
              <h2 className="font-heading text-navy-900 text-[2rem] sm:text-[2.4rem] font-bold leading-tight tracking-tight">
                꿈을 향한 든든한<br />
                장학 사업을 운영합니다
              </h2>

              <div className="mt-6 space-y-3.5 text-[15px] leading-[1.85] text-navy-600">
                <p>
                  한영자 희망 장학재단은 <strong className="text-navy-900 font-semibold">자립준비청년 대학생</strong>을
                  대상으로 연 1회 장학생을 선발하여 1인당 400만원의 장학금을 지급합니다.
                </p>
                <p>
                  단순한 금전 지원을 넘어, 생활지원 및 멘토링 사업, 진로 및 취업지원
                  프로그램을 함께 운영하여 장학생들이 사회에서 성공적으로 자립할 수
                  있도록 지속적으로 돕습니다.
                </p>
              </div>

              {/* 장학사업 3가지 */}
              <ul className="mt-6 space-y-2.5">
                {[
                  "자립준비청년 대학생 장학금 지원",
                  "생활지원 및 멘토링 사업",
                  "진로 및 취업지원 프로그램",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-navy-700">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/scholarship/overview"
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-navy-700 hover:text-primary transition-colors group"
              >
                장학 사업 자세히 보기
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── 핵심 수치 ── */}
      <section className="py-16 bg-navy-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerSection className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {highlights.map((h) => (
              <StaggerItem key={h.label} className="text-center">
                <p className="text-[2.4rem] font-bold text-gold font-heading leading-none">
                  {h.value}
                </p>
                <p className="mt-2 text-[13px] text-white/55 tracking-wide">{h.label}</p>
              </StaggerItem>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ── 수혜 대상 ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">

            {/* 왼쪽: 텍스트 */}
            <FadeInSection from="left">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                Who We Support
              </p>
              <h2 className="font-heading text-navy-900 text-[2rem] sm:text-[2.4rem] font-bold leading-tight tracking-tight">
                자립준비청년<br />
                대학생
              </h2>

              <p className="mt-6 text-[15px] leading-[1.9] text-navy-600">
                자립준비청년들은 누구보다 큰 잠재력을 지니고 있습니다.
                그러나 출발선에서부터 이미 불평등을 마주하고 있습니다.
                한영자 희망 장학재단은 이 간극을 외면하지 않겠습니다.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  { title: "지원 대상", desc: "자립준비청년 대학생 (전국)" },
                  { title: "연령 기준", desc: "만 18세 ~ 만 25세 (본인 신청 시 연장 가능)" },
                  { title: "선발 시기", desc: "연 1회 (이사회 결의로 확정)" },
                  { title: "협력 기관", desc: "한국아동복지협회 (협의 중)" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 text-[14px]">
                    <span className="flex-shrink-0 font-semibold text-navy-900 w-24">{item.title}</span>
                    <span className="text-navy-500">{item.desc}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/scholarship/criteria"
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-navy-700 hover:text-primary transition-colors group"
              >
                지원 자격 자세히 보기
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeInSection>

            {/* 오른쪽: 사진 */}
            <FadeInSection from="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-navy-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=85&auto=format&fit=crop"
                  alt="자립준비청년 대학생"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
