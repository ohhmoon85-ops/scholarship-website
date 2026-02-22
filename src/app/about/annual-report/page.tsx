import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "재단 연보 | 한영자 희망 장학재단",
};

export default function AnnualReportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">About Us</p>
            <h1 className="text-3xl font-bold text-white font-heading">재단 연보</h1>
            <p className="mt-2 text-sm text-white/50">연도별 사업 보고 및 공시 자료입니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-10 text-center">
            <div className="text-4xl mb-4">📄</div>
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-3">연보 자료 준비 중</h2>
            <p className="text-[14.5px] leading-[1.85] text-navy-500 max-w-sm mx-auto">
              한영자 희망 장학재단은 2026년 4월 30일 제1기 장학금 수여식을 시작으로
              본격적인 사업 운영에 돌입합니다.
              사업 보고서 및 연보는 이사회 회계감사 완료 후 순차적으로 공시됩니다.
            </p>
            <div className="mt-6 text-[13px] text-navy-400 bg-navy-50 rounded-xl px-6 py-4 inline-block">
              공의법인 공시: 국세청 공익법인 공시 시스템을 통해 투명하게 공개됩니다.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
