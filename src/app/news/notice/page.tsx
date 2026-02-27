import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/news/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { readCollection } from "@/lib/cms-storage";
import type { CmsNotice } from "@/lib/cms-storage";
import { Pin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "공지사항 | 한영자 희망 장학재단",
  description: "장학재단 공지사항",
};

export const revalidate = 60;

const categoryBadgeMap: Record<string, "gold" | "navy" | "outline"> = {
  모집: "gold",
  공지: "navy",
  결과: "navy",
  행사: "outline",
};

function isNew(dateStr: string, withinDays = 14): boolean {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= withinDays;
}

function formatDate(d: string) {
  return d.replace(/-/g, ".");
}

export default async function NoticeListPage() {
  const notices = await readCollection<CmsNotice>("notices");
  const sorted = [...notices].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const pinned = sorted.filter((n) => n.isPinned);
  const regular = sorted.filter((n) => !n.isPinned);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "재단 소식", href: "/news" },
                { label: "공지사항" },
              ]}
            />
            <h1 className="mt-4 text-3xl font-bold text-white font-heading">공지사항</h1>
            <p className="mt-2 text-sm text-white/50">
              장학재단의 주요 공지사항을 확인하세요.
            </p>
          </div>
        </div>

        {/* 목록 */}
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">

            {/* 고정 공지 */}
            {pinned.length > 0 && (
              <div className="border-b-2 border-navy-100">
                {pinned.map((notice) => (
                  <Link
                    key={notice.id}
                    href={`/news/notice/${notice.id}`}
                    className="group flex items-start gap-4 bg-navy-50/70 px-6 py-4 hover:bg-navy-100/50 transition-colors border-b border-navy-100 last:border-0"
                  >
                    <Pin className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge variant={categoryBadgeMap[notice.category] ?? "navy"} className="text-[11px]">
                          {notice.category}
                        </Badge>
                        {isNew(notice.date) && (
                          <span className="text-[10px] font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-navy-800 group-hover:text-primary transition-colors line-clamp-1">
                        {notice.title}
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2 mt-1">
                      <span className="text-xs text-navy-400">{formatDate(notice.date)}</span>
                      <ChevronRight className="h-4 w-4 text-navy-300" />
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* 일반 공지 */}
            {regular.length > 0 ? (
              regular.map((notice, idx) => (
                <Link
                  key={notice.id}
                  href={`/news/notice/${notice.id}`}
                  className={cn(
                    "group flex items-start gap-4 px-6 py-4 hover:bg-navy-50 transition-colors",
                    idx < regular.length - 1 && "border-b border-navy-100"
                  )}
                >
                  <span className="mt-1 flex-shrink-0 w-8 text-center text-sm text-navy-300">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Badge variant={categoryBadgeMap[notice.category] ?? "navy"} className="text-[11px]">
                        {notice.category}
                      </Badge>
                      {isNew(notice.date) && (
                        <span className="text-[10px] font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-navy-700 group-hover:text-primary transition-colors line-clamp-1">
                      {notice.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 mt-1">
                    <span className="text-xs text-navy-400">{formatDate(notice.date)}</span>
                    <ChevronRight className="h-4 w-4 text-navy-300" />
                  </div>
                </Link>
              ))
            ) : pinned.length === 0 ? (
              <div className="py-16 text-center text-sm text-navy-400">
                등록된 공지사항이 없습니다.
              </div>
            ) : null}
          </div>

          {/* 총 건수 */}
          <p className="mt-4 text-xs text-navy-400 text-right">
            총 {notices.length}건
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
