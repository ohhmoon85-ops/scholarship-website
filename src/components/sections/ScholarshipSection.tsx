import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const scholarships = [
  {
    type: "성적 우수 장학금",
    badge: "성적",
    amount: "연 500만원",
    description: "탁월한 학업 성과를 보인 학생을 대상으로 지급하는 장학금입니다.",
    criteria: ["직전 학기 평점 4.0 이상", "학과 내 성적 상위 5%", "품행이 바른 학생"],
    color: "gold" as const,
  },
  {
    type: "사회적 배려 장학금",
    badge: "지원",
    amount: "연 300만원",
    description: "경제적 어려움에도 열심히 공부하는 학생을 지원합니다.",
    criteria: ["소득분위 4분위 이하", "직전 학기 평점 2.5 이상", "학업 의지 우수"],
    color: "navy" as const,
  },
  {
    type: "지역 인재 장학금",
    badge: "지역",
    amount: "연 200만원",
    description: "지방 출신의 우수한 인재가 서울에서 공부할 수 있도록 지원합니다.",
    criteria: ["지방 고교 졸업", "서울 소재 대학 재학", "직전 학기 평점 3.0 이상"],
    color: "outline" as const,
  },
];

export default function ScholarshipSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium text-gold uppercase tracking-wider">
            Scholarship Programs
          </p>
          <h2 className="text-3xl font-bold text-navy-900 font-heading md:text-4xl">
            장학금 종류
          </h2>
          <p className="mt-4 text-base text-navy-500 max-w-xl mx-auto">
            다양한 유형의 장학금을 통해 더 많은 학생들에게
            기회를 제공하고 있습니다.
          </p>
        </div>

        {/* 장학금 카드 */}
        <div className="grid gap-6 md:grid-cols-3">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-navy-100 bg-white p-6 hover:border-navy-300 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant={scholarship.color} className="text-xs">
                  {scholarship.badge}
                </Badge>
                <span className="text-xl font-bold text-gold font-heading">
                  {scholarship.amount}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-bold text-navy-900 font-heading">
                {scholarship.type}
              </h3>

              <p className="mb-4 text-sm text-navy-500 leading-relaxed flex-1">
                {scholarship.description}
              </p>

              <div className="space-y-2 mb-6">
                {scholarship.criteria.map((criterion, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-navy-600">
                    <span className="h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                    {criterion}
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full rounded-full mt-auto"
              >
                <Link href="/scholarship/types">자세히 보기</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* 지원 안내 배너 */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-navy-500">
            어떤 장학금이 나에게 맞는지 모르겠나요?
          </p>
          <Button asChild variant="default" size="lg" className="rounded-full">
            <Link href="/apply/qualification">지원 자격 확인하기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
