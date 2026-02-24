import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">
              Chairman&apos;s Message
            </p>
            <h1 className="text-3xl font-bold text-white font-heading">이사장 인사말</h1>
          </div>
        </div>

        {/* 본문 */}
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">

            {/* 2단 레이아웃 */}
            <div className="flex flex-col lg:flex-row">

              {/* 왼쪽: 사진 + 이름 */}
              <div className="flex flex-col items-center pt-14 pb-8 px-8 bg-navy-50 lg:w-56 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-navy-100">
                <Image
                  src="/chairman.jpg"
                  alt="전동진 이사장"
                  width={180}
                  height={225}
                  className="rounded-xl object-contain w-full"
                />
                <div className="mt-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">Chairman</p>
                  <p className="text-[15px] font-bold text-navy-900 font-heading">전동진</p>
                  <p className="text-[12px] text-navy-400 mt-0.5">한영자 희망 장학재단 이사장</p>
                </div>
              </div>

              {/* 오른쪽: 인사말 */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center flex-1">

                {/* 헤드라인 */}
                <div className="mb-10">
                  <span className="inline-block w-10 h-1 rounded bg-gold mb-6" />
                  <h2 className="font-heading text-[1.6rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-navy-900 leading-[1.3]">
                    국가가 키운 삼양,<br />
                    이제 대한민국의<br />내일을 키우겠습니다.
                  </h2>
                </div>

                {/* 본문 */}
                <div className="space-y-6 text-[15.5px] leading-[1.95] text-navy-700">
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


              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
