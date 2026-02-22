import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "조직 및 임원 | 한영자 희망 장학재단",
};

const executives = [
  { role: "이사장", name: "전동진", note: "내정", org: "삼양그룹" },
  { role: "사무국장", name: "임재영", note: "내정", org: "" },
  { role: "재무담당", name: "김영만", note: "", org: "" },
  { role: "장학사업팀장", name: "강정호", note: "", org: "" },
  { role: "재무회계팀장", name: "정호기", note: "", org: "" },
  { role: "지원팀장", name: "조종학", note: "", org: "" },
];

const boardInfo = [
  { label: "이사 구성", value: "5인 ~ 15인 (후원사 1명, 외부인사 4명 이상)" },
  { label: "외부 이사", value: "교육계, 법조계, 교수 등 각 분야 전문가" },
  { label: "감사", value: "2인 (공인회계사 또는 세무사 필수 1명 포함)" },
  { label: "보수 정책", value: "이사 및 감사 무보수 (회의수당 1회 30만원)" },
];

const supporters = [
  { name: "㈜제오홀딩스", amount: "출연 주식 100억원", role: "주요 출연사" },
  { name: "삼양화학공업㈜", amount: "현금 32.7억원", role: "출연사" },
  { name: "㈜삼양정밀화학", amount: "현금 10.9억원", role: "출연사" },
];

export default function OrganizationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">About Us</p>
            <h1 className="text-3xl font-bold text-white font-heading">조직 및 임원</h1>
            <p className="mt-2 text-sm text-white/50">한영자 희망 장학재단의 조직 구성 및 임원 현황입니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">

          {/* 조직도 */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-8 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              조직도
            </h2>
            {/* 간단 조직도 */}
            <div className="flex flex-col items-center gap-0 text-center overflow-x-auto">
              {/* 이사장 */}
              <div className="bg-navy-900 text-white rounded-xl px-8 py-3 text-[14px] font-bold font-heading min-w-[120px]">
                이사장
              </div>
              <div className="w-px h-6 bg-navy-200" />
              {/* 이사회 + 감사 */}
              <div className="flex items-start gap-12 sm:gap-20">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-navy-200" />
                  <div className="bg-navy-100 text-navy-800 rounded-xl px-6 py-2.5 text-[13px] font-semibold min-w-[100px]">
                    이사회
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-navy-200" />
                  <div className="bg-navy-100 text-navy-800 rounded-xl px-6 py-2.5 text-[13px] font-semibold min-w-[100px]">
                    감사
                  </div>
                </div>
              </div>
              <div className="w-px h-6 bg-navy-200" />
              {/* 사무국장 */}
              <div className="bg-gold text-navy-950 rounded-xl px-8 py-3 text-[14px] font-bold min-w-[120px]">
                사무국장
              </div>
              <div className="w-px h-6 bg-navy-200" />
              {/* 팀 */}
              <div className="flex items-start gap-3 sm:gap-6 flex-wrap justify-center">
                {["장학사업팀", "재무회계팀", "지원팀"].map((team) => (
                  <div key={team} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-navy-200" />
                    <div className="bg-navy-50 border border-navy-200 text-navy-700 rounded-xl px-4 py-2 text-[12px] font-semibold min-w-[90px]">
                      {team}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 임원 현황 */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              임원 현황
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b-2 border-navy-100">
                    <th className="pb-3 text-left font-semibold text-navy-500 pr-6">직책</th>
                    <th className="pb-3 text-left font-semibold text-navy-500 pr-6">성명</th>
                    <th className="pb-3 text-left font-semibold text-navy-500">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-50">
                  {executives.map((e, i) => (
                    <tr key={i}>
                      <td className="py-3.5 pr-6 font-semibold text-navy-900">{e.role}</td>
                      <td className="py-3.5 pr-6 text-navy-700">{e.name}</td>
                      <td className="py-3.5 text-navy-400">
                        {e.note && <span className="text-[11px] bg-gold/10 text-gold border border-gold/30 rounded-full px-2 py-0.5 mr-2">{e.note}</span>}
                        {e.org}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 이사회 구성 */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              이사회 구성 기준
            </h2>
            <div className="space-y-3">
              {boardInfo.map((item, i) => (
                <div key={i} className="flex gap-4 text-[14px] py-3 border-b border-navy-50 last:border-0">
                  <span className="w-32 flex-shrink-0 font-semibold text-navy-900">{item.label}</span>
                  <span className="text-navy-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 후원 기관 */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              후원 기관 (삼양그룹)
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {supporters.map((s) => (
                <div key={s.name} className="rounded-xl border border-navy-100 bg-navy-50 p-5">
                  <p className="text-[13px] font-bold text-navy-900 mb-1">{s.name}</p>
                  <p className="text-[13px] text-gold font-semibold">{s.amount}</p>
                  <p className="text-[12px] text-navy-400 mt-1">{s.role}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-navy-400">
              * 출연 재산 합계: 기본재산 150억원 + 보통운영재산 45억원 (총 195억원)
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
