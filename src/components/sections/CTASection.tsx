import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  { step: "01", title: "자격 확인", desc: "지원 자격 및 서류 확인" },
  { step: "02", title: "서류 준비", desc: "필요 서류 준비 및 작성" },
  { step: "03", title: "온라인 지원", desc: "홈페이지를 통한 지원서 제출" },
  { step: "04", title: "심사 및 발표", desc: "서류·면접 심사 후 결과 발표" },
];

export default function CTASection() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 지원 프로세스 */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="mb-2 text-sm font-medium text-gold uppercase tracking-wider">
              How to Apply
            </p>
            <h2 className="text-3xl font-bold text-white font-heading">
              지원 절차
            </h2>
          </div>

          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
            {/* 연결선 (데스크탑) */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-navy-700 hidden md:block" />

            {steps.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy-800 border-2 border-navy-600 text-gold">
                  <span className="text-lg font-bold font-heading">{item.step}</span>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-white font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-navy-100/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 박스 */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 p-8 md:p-12 text-center">
          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-navy-600/50 translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold text-white font-heading">
              꿈을 향한 도전,<br />지금 시작하세요
            </h2>
            <p className="mb-8 text-navy-100/70 max-w-md mx-auto">
              2025년 하반기 장학생 모집이 진행 중입니다.
              마감 기한 내에 지원서를 제출하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="lg" className="rounded-full font-semibold">
                <Link href="/apply">지원서 제출하기</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/apply/documents">제출 서류 확인</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-navy-100/40">
              문의사항은 02-1234-5678로 전화 주시거나 온라인 문의를 이용해 주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
