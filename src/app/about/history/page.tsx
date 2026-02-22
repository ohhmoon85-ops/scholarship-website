import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "설립목적 및 연혁 | 한영자 희망 장학재단",
};

const timeline = [
  { date: "2025. 11월", label: "설립 준비", desc: "정관 확정, 설립취지서 및 사업계획서 작성, 출연금 납입증명서, 임원명단 등 서류 준비" },
  { date: "2025. 12월", label: "설립 허가 신청", desc: "감독청(교육청)에 공의법인 설립허가 신청 및 이사회 개최" },
  { date: "2026. 02월", label: "법인 설립 등기", desc: "설립허가증 수령 후 등기소에 재단법인 등기 완료, 고유번호증 발급" },
  { date: "2026. 02~03월", label: "세무 등록 및 계좌 개설", desc: "고유번호증 등록, 인감 등록, 통장 개설, 홈페이지 개설" },
  { date: "2026. 03. 10", label: "장학생 모집 공고", desc: "재단 홈페이지, 언론, 협력 대학을 통한 1기 장학생 모집 공고" },
  { date: "2026. 04. 10", label: "장학생 선발 완료", desc: "1차 서류 심사, 2차 면접 및 외부 심사위원 평가, 이사회 의결로 최종 확정" },
  { date: "2026. 04. 30", label: "제1기 장학금 수여식", desc: "창립기념식 연계, 제1기 장학생 장학금 수여 및 발표" },
  { date: "2026. 07월~", label: "사업 보고 및 공시", desc: "이사회 회의록 작성, 회계감사, 기부금단체 국세청 공시" },
];

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">About Us</p>
            <h1 className="text-3xl font-bold text-white font-heading">설립목적 및 연혁</h1>
            <p className="mt-2 text-sm text-white/50">한영자 희망 장학재단의 설립 취지와 주요 연혁입니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">

          {/* 설립 취지 */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              설립 취지
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.9] text-navy-700">
              <p>
                창업회장님의 경영철학인 <strong className="text-navy-900">&ldquo;인류의 보편적 가치와 행복 증진&rdquo;</strong>을
                구현하기 위해, 어렵고 힘든 청년들에게 미래 희망 나눔을 실천하고,
                사회적 지원이 반드시 필요한 곳에 실질적 효과가 큰 장학재단을 운영합니다.
              </p>
              <p>
                삼양그룹은 국가 안보의 한 축을 담당하는 방위산업 기업으로서, 국가로부터 받은
                공공 자금과 국민의 신뢰에 보답하고 사회와 나누는 것이 우리의 의무라 믿습니다.
              </p>
            </div>
          </div>

          {/* 재단 목적 & 사업 */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8">
              <h2 className="text-lg font-bold text-navy-900 font-heading mb-4 flex items-center gap-2">
                <span className="h-1 w-5 rounded bg-gold inline-block" />
                재단 목적
              </h2>
              <p className="text-[14.5px] leading-[1.85] text-navy-700">
                이 법인은 사회일반의 이익에 공여하기 위하여 자립준비청년의 대학 장학금 지원 및
                자립지원 사업을 수행함으로써 인재양성과 사회통합에 기여함을 목적으로 합니다.
              </p>
              <div className="mt-4 text-[12px] text-navy-400 bg-navy-50 rounded-lg px-3 py-2">
                재단법인 정관 제1조
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8">
              <h2 className="text-lg font-bold text-navy-900 font-heading mb-4 flex items-center gap-2">
                <span className="h-1 w-5 rounded bg-gold inline-block" />
                주요 사업
              </h2>
              <ul className="space-y-3">
                {[
                  "자립준비청년 대학생 장학사업",
                  "자립준비청년 대학생 생활지원 및 멘토링 사업",
                  "자립준비청년 대학생 진로 및 취업지원 프로그램",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-navy-700">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-[12px] text-navy-400 bg-navy-50 rounded-lg px-3 py-2">
                재단법인 정관 제4조
              </div>
            </div>
          </div>

          {/* 연혁 타임라인 */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-8 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              설립 로드맵
            </h2>
            <div className="relative">
              {/* 세로선 */}
              <div className="absolute left-[90px] sm:left-[110px] top-0 bottom-0 w-px bg-navy-100" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 sm:gap-8 relative">
                    <div className="w-[90px] sm:w-[110px] flex-shrink-0 text-right">
                      <span className="text-[12px] font-semibold text-navy-500 leading-tight">{item.date}</span>
                    </div>
                    {/* 점 */}
                    <div className="relative flex-shrink-0 flex items-start justify-center w-0">
                      <div className={`absolute -left-[5px] top-[5px] h-2.5 w-2.5 rounded-full border-2 ${i === 6 ? "bg-gold border-gold" : "bg-white border-navy-300"}`} />
                    </div>
                    <div className="flex-1 pb-2">
                      <p className={`text-[14px] font-bold mb-1 ${i === 6 ? "text-gold" : "text-navy-900"}`}>
                        {item.label}
                        {i === 6 && <span className="ml-2 text-[11px] bg-gold/10 text-gold border border-gold/30 rounded-full px-2 py-0.5">목표</span>}
                      </p>
                      <p className="text-[13px] text-navy-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
