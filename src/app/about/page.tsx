import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "재단 소개 | 한영자 희망 장학재단",
};

const subPages = [
  { label: "설립목적 및 연혁", href: "/about/history", desc: "재단의 설립 취지, 목적, 주요 사업 및 로드맵" },
  { label: "이사장 인사말", href: "/about/greeting", desc: "이사장 전동진의 재단 설립 인사말" },
  { label: "조직 및 임원", href: "/about/organization", desc: "조직도, 임원 현황 및 후원 기관" },
  { label: "재단 연보", href: "/about/annual-report", desc: "연도별 사업 보고 및 공시 자료" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">About Us</p>
            <h1 className="text-3xl font-bold text-white font-heading">재단 소개</h1>
            <p className="mt-2 text-sm text-white/50">
              삼양그룹이 설립하는 한영자 희망 장학재단을 소개합니다.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">

          {/* 재단 소개 요약 */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Foundation Overview</p>
                <h2 className="text-2xl font-bold text-navy-900 font-heading leading-tight mb-4">
                  어렵고 힘든 청년들에게<br />미래 희망 나눔을 실천합니다
                </h2>
                <p className="text-[15px] leading-[1.9] text-navy-600">
                  삼양그룹은 방위산업회사로서 국가의 공공 자금과 국민의 신뢰라는 토대 위에서
                  성장한 기업입니다. 이에 그룹 후원의 장학재단 설립을 통해 사회와 국가에
                  기여하는 것이 우리의 사명이라 믿습니다.
                </p>
                <p className="mt-3 text-[15px] leading-[1.9] text-navy-600">
                  창업회장님의 경영철학인 <strong className="text-navy-900">&ldquo;인류의 보편적 가치와 행복증진&rdquo;</strong>을
                  구현하기 위해, 사회적 지원이 가장 필요한 곳에 실질적으로 도움을 주는
                  한영자 희망 장학재단을 설립합니다.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "재단 유형", value: "재단법인 비영리 공의법인" },
                  { label: "설립 기본재산", value: "50억원 (삼양그룹 계열사 출연)" },
                  { label: "주요 사업", value: "자립준비청년 대학생 장학 및 자립지원" },
                  { label: "이사장", value: "전동진 (내정)" },
                  { label: "1기 수여식", value: "2026년 4월 30일 예정" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 text-[14px] border-b border-navy-50 pb-4 last:border-0 last:pb-0">
                    <span className="w-28 flex-shrink-0 font-semibold text-navy-900">{item.label}</span>
                    <span className="text-navy-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 하위 페이지 링크 */}
          <div>
            <h2 className="text-lg font-bold text-navy-900 font-heading mb-4 px-1">세부 안내</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {subPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center justify-between bg-white rounded-2xl border border-navy-100 px-6 py-5 hover:border-gold/40 hover:shadow-md transition-all group"
                >
                  <div>
                    <p className="text-[15px] font-bold text-navy-900 group-hover:text-primary transition-colors">
                      {page.label}
                    </p>
                    <p className="text-[13px] text-navy-400 mt-0.5">{page.desc}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-navy-300 group-hover:text-gold transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* 후원 기관 */}
          <div className="bg-navy-900 rounded-2xl p-8 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">후원 기관 (삼양그룹)</p>
            <div className="flex flex-wrap gap-3">
              {["㈜제오홀딩스", "삼양화학공업㈜", "㈜삼양정밀화학"].map((name) => (
                <span key={name} className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/80">
                  {name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
