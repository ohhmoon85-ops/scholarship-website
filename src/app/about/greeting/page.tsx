import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "이사장 인사말 | 한영자 희망 장학재단",
};

export default function GreetingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">
              Chairman&apos;s Message
            </p>
            <h1 className="text-3xl font-bold text-white font-heading">이사장 인사말</h1>
            <p className="mt-2 text-sm text-white/50">한영자 희망 장학재단 이사장 전동진</p>
          </div>
        </div>

        {/* 본문 */}
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-12">

            {/* 프로필 */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pb-10 mb-10 border-b border-navy-100">
              <div className="flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-900 text-white text-2xl font-bold font-heading">
                전
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-1">
                  Chairman&apos;s Message
                </p>
                <h2 className="text-xl font-bold text-navy-900 font-heading">전동진</h2>
                <p className="text-sm text-navy-500 mt-0.5">한영자 희망 장학재단 이사장</p>
              </div>
            </div>

            {/* 메인 인용 헤드라인 */}
            <div className="mb-12">
              <span className="inline-block w-10 h-1 rounded bg-gold mb-6" />
              <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-navy-900 leading-[1.25]">
                국가가 키운 삼양,<br />
                이제 대한민국의 내일을<br className="sm:hidden" /> 키우겠습니다.
              </h2>
            </div>

            {/* 본문 */}
            <div className="space-y-7 text-[16px] leading-[2] text-navy-700">
              <p>
                삼양은 국가의 신뢰를 바탕으로 성장한 방산기업입니다.
                그 소중한 성원을 이제 사회적 책임으로 되돌리려 합니다.
              </p>
              <p>
                우리 한영자 희망 장학재단은 자립준비청년들이 불평등한 출발선을 넘어
                당당히 홀로서기 할 수 있도록 실질적인 성장의 사다리가 되겠습니다.
                기업이 국가에 응답하고, 청년과 함께 내일의 안보와 산업을 이끌어가는
                선순환을 삼양이 시작합니다.
              </p>
            </div>

            {/* 서명 */}
            <div className="mt-12 pt-8 border-t border-navy-100 flex items-center justify-end gap-4">
              <div className="text-right">
                <p className="text-[15px] font-bold text-navy-900 font-heading">전동진</p>
                <p className="text-[13px] text-navy-400 mt-0.5">한영자 희망 장학재단 이사장</p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
