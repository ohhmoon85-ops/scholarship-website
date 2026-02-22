import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "장학생 선발 기준 | 한영자 희망 장학재단",
};

const screeningItems = [
  {
    category: "자격 확인",
    weight: null,
    items: [
      { label: "자립준비청년 여부", desc: "관할 지자체 발급 자립준비청년 확인서 제출로 검증" },
      { label: "학적 상태", desc: "국내 4년제 또는 2·3년제 대학(교) 재학 여부" },
      { label: "연령 기준", desc: "만 18세 이상 ~ 만 25세 이하 (사정에 따라 연장 가능)" },
    ],
  },
];

const evaluationCriteria = [
  {
    stage: "1차",
    title: "서류 심사",
    color: "bg-navy-900",
    items: [
      { label: "학업 성실성", weight: "30%", desc: "재학증명서·성적증명서를 기반으로 학업 지속 의지와 성실도를 평가합니다." },
      { label: "자립 계획의 구체성", weight: "40%", desc: "자립생활계획서에 담긴 목표와 계획의 현실성·구체성을 평가합니다." },
      { label: "지원 동기 및 필요성", weight: "30%", desc: "장학금의 필요 사유와 수혜 후 활용 계획의 진정성을 평가합니다." },
    ],
  },
  {
    stage: "2차",
    title: "면접 심사",
    color: "bg-gold",
    items: [
      { label: "학업 의지 및 목표 의식", weight: "30%", desc: "학업을 통해 달성하고자 하는 구체적인 목표와 그 의지를 확인합니다." },
      { label: "자립 의지 및 극복 능력", weight: "35%", desc: "자립준비청년으로서 겪어온 어려움을 극복해 온 경험과 앞으로의 의지를 평가합니다." },
      { label: "사회 기여 가능성", weight: "20%", desc: "장학 수혜 후 사회에 환원하고 기여하고자 하는 의식과 방향성을 봅니다." },
      { label: "태도 및 성실성", weight: "15%", desc: "면접 태도, 표현 능력, 준비성 등 기본 자세를 종합적으로 평가합니다." },
    ],
  },
];

const principles = [
  {
    num: "01",
    title: "기회의 평등",
    desc: "학교 소재지, 전공, 성적 최저 기준을 두지 않습니다. 의지와 가능성이 있다면 누구에게나 동등한 기회를 드립니다.",
  },
  {
    num: "02",
    title: "종합적 평가",
    desc: "성적 하나만으로 판단하지 않습니다. 자립 의지, 학업 열정, 사회 기여 가능성을 종합적으로 보는 심사를 지향합니다.",
  },
  {
    num: "03",
    title: "공정한 심사",
    desc: "이사회가 주관하고 외부 전문 심사위원이 참여합니다. 심사 결과는 이사회 의결로 최종 확정됩니다.",
  },
  {
    num: "04",
    title: "비밀 보호",
    desc: "제출된 서류와 면접 내용은 선발 심사 목적으로만 사용되며, 외부에 공개되지 않습니다.",
  },
];

export default function CriteriaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Selection Criteria</p>
            <h1 className="text-3xl font-bold text-white font-heading">장학생 선발 기준</h1>
            <p className="mt-2 text-sm text-white/50">
              한영자 희망 장학재단의 장학생 선발 원칙과 평가 기준을 안내합니다.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">

          {/* 기본 자격 요건 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              기본 자격 요건
            </h2>
            <p className="text-[14px] text-navy-500 mb-5">
              아래 자격 요건을 모두 충족하는 경우에만 심사 대상이 됩니다.
            </p>
            <div className="space-y-3">
              {screeningItems[0].items.map((item, i) => (
                <div key={i} className="flex gap-4 items-start py-3.5 border-b border-navy-50 last:border-0">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-gold">{i + 1}</span>
                  </span>
                  <div>
                    <p className="text-[14.5px] font-semibold text-navy-900">{item.label}</p>
                    <p className="text-[13px] text-navy-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-gold/5 border border-gold/20 px-5 py-4 text-[13.5px] text-navy-700">
              <strong className="text-navy-900">※ 성적 최저 기준 없음</strong> — 학업 성적 최저선을 두지 않습니다.
              의지와 가능성이 있는 모든 자립준비청년에게 지원 기회를 드립니다.
            </div>
          </div>

          {/* 단계별 심사 기준 */}
          <div>
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              단계별 심사 기준
            </h2>
            <div className="space-y-6">
              {evaluationCriteria.map((stage) => (
                <div key={stage.stage} className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
                  {/* 단계 헤더 */}
                  <div className={`${stage.color} px-8 py-4 flex items-center gap-3`}>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${stage.color === "bg-gold" ? "text-navy-950" : "text-white/60"}`}>
                      {stage.stage} 심사
                    </span>
                    <h3 className={`text-[17px] font-bold ${stage.color === "bg-gold" ? "text-navy-950" : "text-white"}`}>
                      {stage.title}
                    </h3>
                  </div>
                  {/* 항목 */}
                  <div className="divide-y divide-navy-50">
                    {stage.items.map((item, i) => (
                      <div key={i} className="flex gap-5 px-8 py-5 items-start">
                        <div className="flex-shrink-0 w-[60px] text-center">
                          <span className="text-[13px] font-bold text-gold">{item.weight}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-[15px] font-semibold text-navy-900 mb-1">{item.label}</p>
                          <p className="text-[13.5px] text-navy-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 선발 원칙 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-8 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              선발 원칙
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {principles.map((p) => (
                <div key={p.num} className="rounded-xl bg-navy-50 border border-navy-100 p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[2rem] font-bold text-navy-200 font-heading leading-none flex-shrink-0 select-none">
                      {p.num}
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-navy-900 mb-1.5">{p.title}</p>
                      <p className="text-[13.5px] text-navy-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 최종 확정 절차 */}
          <div className="bg-navy-900 rounded-2xl p-8 sm:p-10">
            <h2 className="text-lg font-bold text-white font-heading mb-5">최종 확정 절차</h2>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-0">
              {[
                { step: "1차", label: "서류 심사", sub: "자격 검토 및 서류 평가" },
                { step: "2차", label: "면접 심사", sub: "이사회 + 외부 심사위원" },
                { step: "최종", label: "이사회 의결", sub: "장학생 최종 확정" },
                { step: "발표", label: "결과 안내", sub: "홈페이지 및 개별 통보" },
              ].map((s, i, arr) => (
                <div key={s.step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center text-center flex-1 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold/70 mb-1">{s.step}</span>
                    <p className="text-[14px] font-bold text-white">{s.label}</p>
                    <p className="text-[11px] text-white/45 mt-0.5">{s.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-white/20 text-lg hidden sm:block flex-shrink-0">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 하단 CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/scholarship/apply"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-white text-[14px] font-semibold px-8 py-3.5 hover:bg-navy-800 transition-colors shadow"
            >
              장학 신청 안내 →
            </Link>
            <Link
              href="/scholarship/overview"
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 text-navy-700 text-[14px] font-semibold px-8 py-3.5 hover:bg-white transition-colors"
            >
              장학 사업 안내
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
