import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "장학 사업 안내 | 한영자 희망 장학재단",
};

const programs = [
  {
    num: "01",
    title: "자립준비청년 대학생 장학사업",
    desc: "연 1회 전국 자립준비청년 대학생을 선발하여 1인당 400만원의 장학금을 지급합니다. 경제적 부담 없이 학업에 집중하고 미래를 설계할 수 있도록 지원합니다.",
    highlights: ["연 100명 선발", "1인당 400만원", "전국 대상", "이사회 심사"],
  },
  {
    num: "02",
    title: "생활지원 및 멘토링 사업",
    desc: "장학생들이 대학 생활에 안정적으로 적응할 수 있도록 생활 밀착형 지원과 선배 멘토링 프로그램을 운영합니다. 삼양그룹 임직원들도 멘토로 직접 참여합니다.",
    highlights: ["생활비 지원", "1:1 멘토링", "임직원 멘토", "정기 모임"],
  },
  {
    num: "03",
    title: "진로 및 취업지원 프로그램",
    desc: "자립준비청년이 사회에 성공적으로 진출할 수 있도록 진로 탐색, 직무 역량 교육, 취업 연계 프로그램을 운영합니다. 삼양그룹 및 협력사와의 연계 채용 기회도 제공합니다.",
    highlights: ["직무 역량 교육", "진로 상담", "취업 연계", "인턴십 기회"],
  },
];

const stats = [
  { value: "100명", label: "연간 선발 규모" },
  { value: "400만원", label: "1인 장학금" },
  { value: "4억원", label: "연간 지급 예정액" },
  { value: "전국", label: "지원 대상 지역" },
];

export default function OverviewPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Scholarship Program</p>
            <h1 className="text-3xl font-bold text-white font-heading">장학 사업 안내</h1>
            <p className="mt-2 text-sm text-white/50">
              한영자 희망 장학재단의 장학 사업을 소개합니다.
            </p>
          </div>
        </div>

        {/* 핵심 수치 */}
        <div className="bg-navy-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[2rem] font-bold text-gold font-heading leading-none">{s.value}</p>
                  <p className="mt-1.5 text-[12px] text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-8">

          {/* 3대 사업 */}
          <div>
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              3대 장학 사업
            </h2>
            <div className="space-y-6">
              {programs.map((p) => (
                <div key={p.num} className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8">
                  <div className="flex gap-5 items-start">
                    <span className="text-[2.5rem] font-bold text-navy-100 font-heading leading-none flex-shrink-0 select-none">
                      {p.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[17px] font-bold text-navy-900 mb-2">{p.title}</h3>
                      <p className="text-[14.5px] leading-[1.85] text-navy-600 mb-4">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.highlights.map((h) => (
                          <span key={h} className="text-[12px] font-semibold text-navy-700 bg-navy-50 border border-navy-100 rounded-full px-3 py-1">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 장기 비전 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-4 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              장기 비전
            </h2>
            <p className="text-[15px] leading-[1.9] text-navy-600">
              자립준비청년 대학생을 시작으로 불우가정 학생 등 어렵고 힘든 청년으로 지원 대상을 점진적으로 확대해 나갈 계획입니다.
              정부의 자립지원전담기관과 연계하여 프로그램에 참여하고, 독자적인 프로그램도 개발·운영합니다.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 rounded-xl bg-navy-50 border border-navy-100 p-5">
                <p className="text-[12px] font-bold uppercase tracking-wide text-navy-400 mb-1">1단계 (현재)</p>
                <p className="text-[14px] font-semibold text-navy-900">자립준비청년 대학생</p>
                <p className="text-[13px] text-navy-500 mt-0.5">연 100명, 400만원</p>
              </div>
              <div className="flex items-center text-navy-300 text-xl px-2 hidden sm:flex">→</div>
              <div className="flex-1 rounded-xl bg-gold/5 border border-gold/20 p-5">
                <p className="text-[12px] font-bold uppercase tracking-wide text-gold mb-1">2단계 (확대)</p>
                <p className="text-[14px] font-semibold text-navy-900">불우가정 학생 등</p>
                <p className="text-[13px] text-navy-500 mt-0.5">대상 및 규모 확대</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href="/scholarship/apply"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-white text-[14px] font-semibold px-8 py-3.5 hover:bg-navy-800 transition-colors shadow"
            >
              장학 신청 안내 →
            </Link>
            <Link
              href="/scholarship/status"
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 text-navy-700 text-[14px] font-semibold px-8 py-3.5 hover:bg-white transition-colors"
            >
              장학생 현황
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
