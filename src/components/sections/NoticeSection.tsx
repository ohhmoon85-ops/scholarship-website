import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const notices = [
  {
    id: 1,
    category: "모집공고",
    title: "2025년 하반기 장학생 모집 공고",
    date: "2025.07.01",
    isNew: true,
    isPinned: true,
  },
  {
    id: 2,
    category: "공지사항",
    title: "장학금 지급일 안내 (2025년 2학기)",
    date: "2025.06.28",
    isNew: true,
    isPinned: false,
  },
  {
    id: 3,
    category: "공지사항",
    title: "2025년 상반기 장학생 선정 결과 발표",
    date: "2025.06.15",
    isNew: false,
    isPinned: false,
  },
  {
    id: 4,
    category: "행사",
    title: "제30회 장학재단 장학증서 수여식 개최 안내",
    date: "2025.06.01",
    isNew: false,
    isPinned: false,
  },
  {
    id: 5,
    category: "공지사항",
    title: "홈페이지 개편 안내",
    date: "2025.05.20",
    isNew: false,
    isPinned: false,
  },
];

const categoryColors: Record<string, "default" | "gold" | "navy" | "outline"> = {
  모집공고: "gold",
  공지사항: "navy",
  행사: "outline",
};

export default function NoticeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* 공지사항 */}
          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mb-1 text-sm font-medium text-gold uppercase tracking-wider">
                  Notice
                </p>
                <h2 className="text-2xl font-bold text-navy-900 font-heading">
                  공지사항
                </h2>
              </div>
              <Button asChild variant="ghost" size="sm" className="text-navy-600">
                <Link href="/news/notice">
                  전체보기 →
                </Link>
              </Button>
            </div>

            <ul className="divide-y divide-navy-100">
              {notices.map((notice) => (
                <li key={notice.id}>
                  <Link
                    href={`/news/notice/${notice.id}`}
                    className="flex items-center gap-3 py-4 group transition-colors hover:text-primary"
                  >
                    <Badge
                      variant={categoryColors[notice.category] || "navy"}
                      className="flex-shrink-0 text-xs"
                    >
                      {notice.category}
                    </Badge>
                    <span className="flex-1 text-sm text-navy-800 group-hover:text-primary transition-colors line-clamp-1">
                      {notice.title}
                    </span>
                    {notice.isNew && (
                      <span className="flex-shrink-0 text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                        NEW
                      </span>
                    )}
                    <span className="flex-shrink-0 text-xs text-navy-400">
                      {notice.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 장학생 모집 배너 */}
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 flex flex-col justify-between">
            {/* 배경 장식 */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-navy-800 opacity-50" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gold/10" />

            <div className="relative">
              <Badge variant="gold" className="mb-4">
                2025년 하반기 모집
              </Badge>
              <h3 className="mb-3 text-2xl font-bold text-white font-heading leading-tight">
                장학생 모집
                <br />
                지원하세요
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-navy-100/70">
                경제적 어려움에도 불구하고 학업에 열중하는
                우수 인재를 모집합니다.
                <br />
                <strong className="text-gold">마감: 2025년 8월 31일</strong>
              </p>

              <div className="space-y-2 text-sm">
                {[
                  "대학생 (2~4학년)",
                  "성적 기준: 직전 학기 평점 3.0 이상",
                  "가구 소득분위 4분위 이하",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-navy-100/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8">
              <Button asChild variant="gold" className="w-full rounded-full font-semibold">
                <Link href="/apply">지금 지원하기</Link>
              </Button>
              <p className="mt-3 text-center text-xs text-navy-100/40">
                서류 제출 마감: 2025년 8월 31일
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
