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
              About Us
            </p>
            <h1 className="text-3xl font-bold text-white font-heading">이사장 인사말</h1>
            <p className="mt-2 text-sm text-white/50">한영자 희망 장학재단 이사장 전동진</p>
          </div>
        </div>

        {/* 본문 */}
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-12">
            {/* 프로필 카드 */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pb-10 mb-10 border-b border-navy-100">
              <div className="flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-900 text-white text-2xl font-bold font-heading">
                전
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-1">
                  Chairman&apos;s Message
                </p>
                <h2 className="text-xl font-bold text-navy-900 font-heading">전동진</h2>
                <p className="text-sm text-navy-500 mt-0.5">한영자 희망 장학재단 이사장 (내정)</p>
              </div>
            </div>

            {/* 인사말 본문 */}
            <div className="space-y-6 text-[15.5px] leading-[2] text-navy-700">
              <p>
                삼양은 국가 안보의 한 축을 담당하고 있는 방위산업 회사로서, 현재의 삼양이 있기까지
                국가의 공공 자금과 국민의 신뢰라는 토대 위에서 사업 추진 등 다양한 형태로 혜택을
                받아온 방산기업입니다. 우리 삼양은 이 사실을 결코 잊지 않고 있습니다.
              </p>
              <p>
                그러하기에, 그룹 후원의 장학재단 설립은 이 시점에서 우리가 사명감을 가지고 반드시
                추진해야 할 책무라고 생각합니다. 방산기업으로서 국가 안보를 지키는 일을 넘어,
                그동안 국가로부터 받은 지원을 사회와 나누는 것이 우리의 의무라고 믿기 때문입니다.
              </p>
              <p>
                이에 창업회장님께서는 경영 철학인 <strong className="text-navy-900">&ldquo;인류의 보편적 가치와 행복 증진&rdquo;</strong>을
                구현하기 위해 어렵고 힘든 청년들에게 미래 희망과 나눔을 실천하고, 사회적 지원이
                반드시 필요한 곳에 실질적으로 도움을 주는 장학재단을 운영하겠다는 의지를 밝히셨습니다.
              </p>
              <p>
                회장님께서도 이러한 정신을 더욱 발전시켜, 기업이 국가와 사회에 실질적으로 기여해야
                한다는 강한 의지를 가지고 계십니다. 특히, 미래세대에 대한 지원이야말로 기업이
                실천해야 할 가장 지속가능한 사회적 책임임을 강조하시면서, 도움이 필요한 청년들에게
                실질적 힘이 되는 장학재단의 설립을 적극 추진해 왔습니다.
              </p>

              {/* 구분선 */}
              <div className="my-8 border-t border-navy-100" />

              <p>
                이러한 설립 취지에서 재단의 수혜자는 우리 사회에서 도움이 가장 절실한 곳으로 정했습니다.
                자립준비청년들은 누구보다 큰 잠재력을 지니고 있음에도 불구하고 출발선에서부터
                이미 불평등을 마주하고 있습니다. 우리는 이 간극을 외면하지 않겠습니다.
              </p>
              <p>
                우리 장학재단은 단순한 기부가 아닙니다. 국가가 우리에게 맡긴 역할에 대해 기업이
                정당하게 응답하는 방식이며, 미래 대한민국을 책임질 인재를 키우는 가장 근본적인
                사회 환원입니다. 우리는 이 재단을 통해 그들의 학업을 지원하고, 자립의 길을 열어주며,
                미래의 안보와 산업을 이끌어갈 인재들을 함께 키워 나가겠습니다.
              </p>

              {/* 마무리 인용 */}
              <div className="mt-10 rounded-xl bg-navy-50 border-l-4 border-gold px-6 py-5">
                <p className="text-[15px] leading-[1.9] text-navy-700 italic">
                  &ldquo;국가의 지원으로 성장한 기업이 다시 국가와 사회에 기여하는 이 순환,
                  그 책임의 출발점을 오늘 이 장학재단으로 세우고자 합니다.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-navy-900">전동진</p>
                <p className="text-xs text-navy-400">한영자 희망 장학재단 이사장 (내정)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
