import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: "🎓",
    title: "교육 지원",
    description:
      "경제적 여건에 관계없이 모든 학생이 질 높은 교육을 받을 수 있도록 지원합니다.",
  },
  {
    icon: "🤝",
    title: "사회적 책임",
    description:
      "미래 사회를 이끌어갈 인재 양성을 통해 지속 가능한 사회 발전에 기여합니다.",
  },
  {
    icon: "💡",
    title: "혁신과 도전",
    description:
      "새로운 분야에 도전하는 창의적 인재를 발굴하고 지원합니다.",
  },
  {
    icon: "🌱",
    title: "지속 가능한 성장",
    description:
      "단순한 금전 지원을 넘어 장기적인 멘토링과 네트워킹을 제공합니다.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-navy-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-gold uppercase tracking-wider">
              About Us
            </p>
            <h2 className="text-3xl font-bold text-navy-900 font-heading md:text-4xl">
              인재를 키우는 재단,
              <br />
              30년의 역사와 신뢰
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-navy-600">
              1995년 설립된 장학재단은 30년 동안 경제적 어려움에도
              학업에 열중하는 우수 학생들을 발굴하고 지원해왔습니다.
              우리는 단순한 장학금 지원을 넘어, 학생들이 사회에서
              성공적으로 자리잡을 수 있도록 다양한 프로그램을 운영합니다.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <Link href="/about">재단 소개 보기</Link>
            </Button>
          </div>
        </div>

        {/* 핵심 가치 카드 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white p-6 shadow-sm border border-navy-100 hover:border-navy-300 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 text-3xl">{value.icon}</div>
              <h3 className="mb-2 text-base font-semibold text-navy-900 font-heading">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* 이사장 인사말 미리보기 */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-navy-900 flex flex-col md:flex-row">
          {/* 왼쪽 장식 */}
          <div className="w-full md:w-2 bg-gold flex-shrink-0" />

          <div className="p-8 md:p-10 flex-1">
            <p className="mb-2 text-xs font-medium text-gold uppercase tracking-widest">
              이사장 인사말
            </p>
            <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed font-heading mb-6">
              &ldquo;꿈을 향한 여러분의 도전을 응원합니다.
              장학재단은 여러분이 미래의 리더로 성장할 수 있도록
              언제나 함께하겠습니다.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold">
                홍
              </div>
              <div>
                <p className="text-white font-semibold">홍길동</p>
                <p className="text-xs text-navy-100/60">장학재단 이사장</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
