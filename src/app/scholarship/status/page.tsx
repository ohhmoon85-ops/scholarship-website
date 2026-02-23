import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "장학생 현황 | 한영자 희망 장학재단",
};

export default function StatusPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Scholarship Status</p>
            <h1 className="text-3xl font-bold text-white font-heading">장학생 현황</h1>
            <p className="mt-2 text-sm text-white/50">연도별 장학생 선발 현황 및 통계입니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-8">

          {/* D-day 카운트다운 카드 */}
          <div className="bg-navy-900 rounded-2xl p-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold/80 mb-4">
              제1기 장학금 수여식까지
            </p>
            <div className="text-[4rem] sm:text-[5rem] font-bold text-white font-heading leading-none">
              2026. 04. 30
            </div>
            <p className="mt-4 text-[15px] text-white/50">
              제1기 장학생 수여식이 예정되어 있습니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
              {[
                { value: "50명", label: "선발 예정" },
                { value: "400만원", label: "1인 장학금" },
                { value: "전국", label: "모집 지역" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[2rem] font-bold text-gold font-heading leading-none">{s.value}</p>
                  <p className="mt-1 text-[12px] text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 현황 안내 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10 text-center">
            <div className="mx-auto max-w-md">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-navy-50 border-2 border-navy-100">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-xl font-bold text-navy-900 font-heading mb-3">
                선발 결과 발표 예정
              </h2>
              <p className="text-[14.5px] leading-[1.85] text-navy-500">
                한영자 희망 장학재단은 2026년 4월 최초 장학생을 선발합니다.
                선발 결과는 이사회 의결 후 본 페이지 및 공지사항을 통해 안내드립니다.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/scholarship/apply"
                  className="rounded-full bg-navy-900 text-white text-[14px] font-semibold px-7 py-3 hover:bg-navy-800 transition-colors"
                >
                  장학 신청 안내
                </Link>
                <Link
                  href="/news/notice"
                  className="rounded-full border border-navy-200 text-navy-700 text-[14px] font-semibold px-7 py-3 hover:bg-navy-50 transition-colors"
                >
                  공지사항 확인
                </Link>
              </div>
            </div>
          </div>

          {/* 모집 일정 요약 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              2026년 1기 모집 일정
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b-2 border-navy-100 text-left">
                    <th className="pb-3 font-semibold text-navy-500 pr-6">일정</th>
                    <th className="pb-3 font-semibold text-navy-500 pr-6">내용</th>
                    <th className="pb-3 font-semibold text-navy-500">상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-50">
                  {[
                    { date: "2026. 03. 10", label: "모집 공고", status: "예정" },
                    { date: "2026. 03월 중", label: "원서 접수", status: "예정" },
                    { date: "2026. 03월 말", label: "1차 서류 심사", status: "예정" },
                    { date: "2026. 04월 초", label: "2차 면접 심사", status: "예정" },
                    { date: "2026. 04. 10", label: "최종 발표", status: "예정" },
                    { date: "2026. 04. 30", label: "장학금 수여식", status: "목표" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-3.5 pr-6 text-navy-500 font-medium whitespace-nowrap">{row.date}</td>
                      <td className="py-3.5 pr-6 text-navy-800 font-semibold">{row.label}</td>
                      <td className="py-3.5">
                        <span className={`text-[11px] font-semibold rounded-full px-2.5 py-1 ${row.status === "목표" ? "bg-gold/10 text-gold border border-gold/30" : "bg-navy-50 text-navy-400 border border-navy-100"}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
