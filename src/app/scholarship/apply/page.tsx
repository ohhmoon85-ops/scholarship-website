import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ApplyUploadForm from "./ApplyUploadForm";

export const metadata: Metadata = {
  title: "장학 신청 | 한영자 희망 장학재단",
};

const eligibility = [
  { label: "지원 대상", value: "자립준비청년 대학생 (전국)" },
  { label: "연령 기준", value: "만 18세 ~ 만 25세 (본인 신청 시 연장 가능)" },
  { label: "학교 제한", value: "국내 4년제 및 2·3년제 대학(교) 재학생" },
  { label: "협력 기관", value: "한국아동복지협회 (협의 중)" },
  { label: "선발 시기", value: "연 1회 (이사회 결의로 확정)" },
  { label: "장학금", value: "1인당 400만원 (일시 지급)" },
];

const process = [
  { step: "1", title: "모집 공고", date: "2026. 03. 10", desc: "재단 홈페이지, 협력 대학, 한국아동복지협회 등을 통해 공고" },
  { step: "2", title: "원서 접수", date: "2026. 03월 중", desc: "재단 홈페이지 온라인 접수 또는 우편 접수 (서류 포함)" },
  { step: "3", title: "1차 서류 심사", date: "2026. 03월 말", desc: "자격 요건 검토 및 서류 심사" },
  { step: "4", title: "2차 면접 심사", date: "2026. 04월 초", desc: "이사회 주관, 외부 전문 심사위원 참여" },
  { step: "5", title: "이사회 최종 의결", date: "2026. 04. 10", desc: "장학생 최종 확정 및 이사회 의결" },
  { step: "6", title: "장학금 수여식", date: "2026. 04. 30", desc: "제1기 장학금 수여식 개최 및 장학금 지급" },
];

const documents = [
  "장학금 지원 신청서 (소정 양식)",
  "자립준비청년 확인서 (관할 지자체 발급)",
  "재학증명서",
  "성적증명서 (최근 학기)",
  "자립생활계획서 또는 생활 계획서 (자유 양식)",
  "기타 재단에서 요청하는 서류",
];

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Apply</p>
            <h1 className="text-3xl font-bold text-white font-heading">장학 신청</h1>
            <p className="mt-2 text-sm text-white/50">
              2026년 제1기 장학생 모집 일정 및 신청 방법 안내입니다.
            </p>
          </div>
        </div>

        {/* 공지 배너 */}
        <div className="bg-gold/10 border-b border-gold/20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-start gap-3 text-[13.5px]">
              <span className="text-gold font-bold flex-shrink-0">📢</span>
              <p className="text-navy-800">
                <strong>2026년 제1기 장학생 모집 예정</strong> — 모집 공고는 2026년 3월 10일에 발표됩니다.
                공고 전 본 페이지를 주기적으로 확인해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">

          {/* 지원 자격 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              지원 자격
            </h2>
            <div className="space-y-3">
              {eligibility.map((item, i) => (
                <div key={i} className="flex gap-4 text-[14.5px] py-3 border-b border-navy-50 last:border-0">
                  <span className="w-28 flex-shrink-0 font-semibold text-navy-900">{item.label}</span>
                  <span className="text-navy-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 신청 절차 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-8 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              신청 절차 (2026년 1기 기준)
            </h2>
            <div className="space-y-4">
              {process.map((p) => (
                <div key={p.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-white text-[12px] font-bold">
                    {p.step}
                  </div>
                  <div className="flex-1 pb-4 border-b border-navy-50 last:border-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="text-[15px] font-bold text-navy-900">{p.title}</p>
                      <span className="text-[11px] font-semibold text-gold bg-gold/10 border border-gold/20 rounded-full px-2 py-0.5">
                        {p.date}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-navy-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 제출 서류 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              제출 서류
            </h2>
            <ul className="space-y-2.5">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-navy-700">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-navy-400 bg-navy-50 rounded-lg p-3">
              ※ 상세 서류 목록은 모집 공고 시 안내됩니다. 서류 양식은 공고문에 첨부됩니다.
            </p>
          </div>

          {/* 온라인 신청 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-2 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              온라인 신청하기
            </h2>
            <p className="text-[13.5px] text-navy-500 mb-8">
              제출 서류를 하나의 ZIP 파일로 압축한 후 아래 양식을 작성하여 제출해 주세요.
            </p>
            <ApplyUploadForm />
          </div>

          {/* 문의 */}
          <div className="bg-navy-900 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-white font-heading mb-2">문의 안내</h2>
            <p className="text-[14px] text-white/60">
              장학 신청과 관련한 문의는 재단 사무국으로 연락해 주세요.
              (2026년 2월 법인 설립 이후 연락처 안내 예정)
            </p>
            <a
              href="/community/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold text-navy-950 text-[13px] font-semibold px-5 py-2.5 hover:bg-gold/90 transition-colors"
            >
              문의하기 →
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
