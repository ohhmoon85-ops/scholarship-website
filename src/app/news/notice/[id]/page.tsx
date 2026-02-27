import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/news/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { readCollection } from "@/lib/cms-storage";
import type { CmsNotice } from "@/lib/cms-storage";
import { Pin, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const notices = await readCollection<CmsNotice>("notices");
  const notice = notices.find((n) => n.id === id);
  if (!notice) return { title: "공지사항을 찾을 수 없습니다" };
  return { title: `${notice.title} | 한영자 희망 장학재단` };
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notices = await readCollection<CmsNotice>("notices");
  const sorted = [...notices].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const idx = sorted.findIndex((n) => n.id === id);
  if (idx === -1) notFound();

  const notice = sorted[idx];
  const next = idx > 0 ? sorted[idx - 1] : null;
  const prev = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  // HTML 태그 없으면 줄바꿈을 <br>로 변환
  const renderedContent =
    notice.content.includes("<") && notice.content.includes(">")
      ? notice.content
      : notice.content.replace(/\n/g, "<br />");

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
                { label: "공지사항", href: "/news/notice" },
                { label: notice.title },
              ]}
            />
            {/* 카테고리 배지 + 고정 표시 */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Badge
                variant={categoryBadgeMap[notice.category] ?? "navy"}
                className="text-xs"
              >
                {notice.category}
              </Badge>
              {notice.isPinned && (
                <span className="inline-flex items-center gap-1 text-xs text-gold">
                  <Pin className="h-3 w-3" />
                  고정
                </span>
              )}
              {isNew(notice.date) && (
                <span className="text-[10px] font-bold text-red-400 bg-red-900/30 border border-red-500/30 px-1.5 py-0.5 rounded">
                  NEW
                </span>
              )}
            </div>
            {/* 제목 */}
            <h1 className="mt-3 text-2xl font-bold text-white font-heading leading-snug sm:text-3xl">
              {notice.title}
            </h1>
            {/* 날짜 */}
            <p className="mt-3 text-sm text-white/40">{formatDate(notice.date)}</p>
          </div>
        </div>

        {/* 본문 영역 */}
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-navy-100 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            <div
              className={[
                "prose prose-sm sm:prose-base max-w-none",
                "prose-headings:font-heading prose-headings:text-navy-900 prose-headings:font-bold",
                "prose-p:text-navy-700 prose-p:leading-relaxed",
                "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
                "prose-strong:text-navy-800",
                "prose-table:w-full prose-th:bg-navy-50 prose-th:text-navy-700 prose-td:text-navy-600",
                "prose-hr:border-navy-100",
                "prose-blockquote:border-l-gold prose-blockquote:text-navy-500 prose-blockquote:not-italic",
                "prose-li:text-navy-700",
              ].join(" ")}
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />
          </article>

          {/* 이전/다음 공지 네비게이션 */}
          {(prev || next) && (
            <nav className="mt-4 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm divide-y divide-navy-100">
              {next && (
                <Link
                  href={`/news/notice/${next.id}`}
                  className="group flex items-center gap-4 px-6 py-4 hover:bg-navy-50 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 flex-shrink-0 text-navy-300 group-hover:text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-navy-400 mb-0.5">다음 글</p>
                    <p className="text-sm font-medium text-navy-700 group-hover:text-primary transition-colors line-clamp-1">
                      {next.title}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs text-navy-400">{formatDate(next.date)}</span>
                </Link>
              )}
              {prev && (
                <Link
                  href={`/news/notice/${prev.id}`}
                  className="group flex items-center gap-4 px-6 py-4 hover:bg-navy-50 transition-colors"
                >
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-navy-300 group-hover:text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-navy-400 mb-0.5">이전 글</p>
                    <p className="text-sm font-medium text-navy-700 group-hover:text-primary transition-colors line-clamp-1">
                      {prev.title}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs text-navy-400">{formatDate(prev.date)}</span>
                </Link>
              )}
            </nav>
          )}

          {/* 목록으로 돌아가기 */}
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" className="rounded-full gap-2">
              <Link href="/news/notice">
                <ArrowLeft className="h-4 w-4" />
                목록으로
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
