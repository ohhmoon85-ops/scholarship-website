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
                  className="rounded-xl object-contain w-full max-w-[110px] lg:max-w-[180px]"
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
                  <h2 className="font-heading text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-bold text-navy-900 leading-[1.3]">
                    숭고한 헌신을 이어,<br />내일의 희망을 세웁니다.
                  </h2>
                </div>

                {/* 본문 */}
                <div className="space-y-6 text-[15.5px] leading-[1.95] text-navy-700">
                  <p>
                    방산기업 삼양의 뿌리에는 한영자 창업회장님의 헌신적인 삶과 기업가
                    정신이 흐르고 있습니다. 그 고귀한 이름을 영원히 기리고자 한영자
                    창업회장님과 박재준 회장님께서 뜻을 모아 직접 재단을 설립하셨으며,
                    미래 인재 양성을 위한 든든한 토대를 함께 마련하셨습니다.
                  </p>
                  <p>
                    &lsquo;한영자 희망 장학재단&rsquo;은 두 분의 숭고한 신념을 가슴에 새기고,
                    자립준비청년들이 저마다의 출발점에서 힘차게 꿈을 향해 나아가는
                    여정에 든든한 동반자가 되어 드릴 것을 약속드립니다.
                  </p>
                  <p>
                    <strong className="font-bold text-navy-900">
                      실질적인 성장의 디딤돌이 되겠습니다.
                    </strong>
                  </p>
                  <p>
                    우리는 자립준비청년들이 겪는 현실적인 어려움을 깊이 공감합니다.
                    단순히 경제적인 도움을 넘어, 학업의 부담을 함께 나누고 성장의
                    과정마다 곁에서 응원하는 &lsquo;실질적인 성장의 디딤돌&rsquo;이 되겠습니다.
                    여러분이 사회라는 너른 들판에 당당히 뿌리 내릴 수 있도록
                    한 걸음 한 걸음을 성심으로 함께하겠습니다.
                  </p>
                  <p>
                    <strong className="font-bold text-navy-900">
                      기업의 응답, 청년의 내일, 국가의 미래.
                    </strong>
                  </p>
                  <p>
                    기업이 국가의 부름에 응답하고, 청년이 내일의 안보와 산업을
                    이끌어가는 선순환의 가치는 삼양이 추구하는 최고의 지향점입니다.
                    그 첫 번째 출발점을 삼양과 한영자 희망 장학재단이 함께
                    만들어 가겠습니다.
                  </p>
                  <p>
                    여러분의 무한한 가능성과 멈추지 않는 도전을 진심으로 믿습니다.
                    한 분 한 분의 빛나는 여정, 그 곁에 언제나 함께하겠습니다.
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
