/**
 * 재단 소식 섹션 (서버 컴포넌트)
 * — content/ 폴더 Markdown에서 실시간 데이터를 읽습니다.
 * — FadeInSection / StaggerSection으로 뷰포트 진입 시 부드럽게 나타납니다.
 */

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Megaphone, FileText, Newspaper, FileDown, Paperclip,
} from "lucide-react";
import { getNotices, getBoardResults, getPressArticles } from "@/lib/content";
import { formatDate } from "@/lib/content/markdown";
import type { Notice, BoardResult, PressArticle, Attachment } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  FadeInSection, StaggerSection, StaggerItem,
} from "@/components/animations/FadeIn";

const noticeBadge: Record<string, "gold" | "navy" | "outline"> = {
  모집: "gold", 공지: "navy", 결과: "navy", 행사: "outline",
};

/* ── 공지 행 ── */
function NoticeRow({ item }: { item: Notice }) {
  return (
    <Link
      href={`/news/notice/${item.id}`}
      className="group flex items-start gap-3 py-[14px] border-b border-navy-100 last:border-0 hover:bg-navy-50/60 -mx-4 px-4 rounded-lg transition-colors"
    >
      <Badge
        variant={noticeBadge[item.category] ?? "navy"}
        className="mt-0.5 flex-shrink-0 text-[11px] px-2 py-0.5 font-medium"
      >
        {item.category}
      </Badge>
      <div className="flex-1 min-w-0">
        <p className="text-[13.5px] font-medium text-navy-800 group-hover:text-primary transition-colors line-clamp-1 tracking-tight">
          {item.title}
          {item.isNew && (
            <span className="ml-1.5 inline-block text-[9px] font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-full align-middle">
              NEW
            </span>
          )}
          {item.attachments && item.attachments.length > 0 && (
            <Paperclip className="ml-1 inline h-3 w-3 text-navy-300 align-middle" />
          )}
        </p>
        <p className="mt-0.5 text-[11.5px] text-navy-400 tabular-nums">{formatDate(item.date)}</p>
      </div>
      <ArrowRight className="h-3.5 w-3.5 text-navy-300 group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
    </Link>
  );
}

/* ── PDF 다운로드 버튼 ── */
function PdfButton({ attachment, compact = false }: { attachment: Attachment; compact?: boolean }) {
  if (compact) {
    return (
      <a
        href={attachment.url}
        download={attachment.name}
        title="공문 PDF 다운로드"
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-navy-200 hover:border-gold hover:bg-gold/10 transition-all group/pdf"
      >
        <FileDown className="h-3.5 w-3.5 text-navy-400 group-hover/pdf:text-gold transition-colors" />
      </a>
    );
  }
  return (
    <a
      href={attachment.url}
      download={attachment.name}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 flex-shrink-0",
        "border border-gold/40 bg-gold/10 text-[12px] font-semibold text-gold",
        "hover:bg-gold/20 hover:border-gold/70 transition-all"
      )}
      title={`${attachment.name} 다운로드`}
    >
      <FileDown className="h-3.5 w-3.5" />
      공문 다운로드
    </a>
  );
}

/* ── 이사회 결과 피처드 카드 ── */
function BoardCard({ item }: { item: BoardResult }) {
  const pdf = item.attachments?.find((a) => a.fileType.toLowerCase() === "pdf");

  return (
    <div className="group rounded-2xl border border-navy-100 bg-white p-6 hover:border-navy-300 hover:shadow-[0_4px_24px_oklch(0.22_0.068_258_/_0.08)] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-navy-100">
          <FileText className="h-5 w-5 text-navy-600" />
        </div>
        <Badge variant="gold" className="text-[11px] font-semibold">이사회 결과</Badge>
      </div>

      <Link href={`/news/board/${item.id}`} className="group/title block">
        <h3 className="text-[15px] font-semibold text-navy-900 font-heading group-hover/title:text-primary transition-colors line-clamp-2 leading-snug tracking-tight">
          {item.title}
        </h3>
      </Link>

      <p className="mt-2 text-[13px] text-navy-500 leading-relaxed line-clamp-2 tracking-tight">
        {item.excerpt}
      </p>

      {item.agenda && item.agenda.length > 0 && (
        <ul className="mt-3 space-y-1">
          {item.agenda.slice(0, 2).map((ag, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[12px] text-navy-500">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
              <span className="line-clamp-1">{ag}</span>
            </li>
          ))}
          {item.agenda.length > 2 && (
            <li className="text-[11px] text-navy-400 pl-3">외 {item.agenda.length - 2}건</li>
          )}
        </ul>
      )}

      <div className="mt-5 pt-4 border-t border-navy-100 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[12px] text-navy-400 tabular-nums">{formatDate(item.date)}</span>
        <div className="flex items-center gap-2">
          {pdf && <PdfButton attachment={pdf} />}
          <Link
            href={`/news/board/${item.id}`}
            className="text-[12px] font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all"
          >
            자세히 보기 <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── 이전 이사회 결과 컴팩트 행 ── */
function BoardRow({ item }: { item: BoardResult }) {
  const pdf = item.attachments?.find((a) => a.fileType.toLowerCase() === "pdf");
  return (
    <div className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3.5 hover:border-navy-200 transition-all">
      <FileText className="h-4 w-4 text-navy-400 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <Link href={`/news/board/${item.id}`} className="group/row">
          <p className="text-[13px] font-medium text-navy-700 group-hover/row:text-primary transition-colors line-clamp-1 tracking-tight">
            {item.title}
          </p>
        </Link>
        <p className="mt-0.5 text-[11px] text-navy-400 tabular-nums">{formatDate(item.date)}</p>
      </div>
      {pdf && <PdfButton attachment={pdf} compact />}
    </div>
  );
}

/* ── 메인 섹션 ── */
export default async function NewsSection() {
  const [notices, boardResults, pressArticles] = await Promise.all([
    getNotices({ limit: 5 }),
    getBoardResults({ limit: 2 }),
    getPressArticles({ limit: 2 }),
  ]);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* 헤더 */}
        <FadeInSection className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              Foundation News
            </p>
            <h2 className="text-[1.85rem] font-bold text-navy-900 font-heading tracking-tight">
              재단 소식
            </h2>
          </div>
          <Button asChild variant="outline" size="sm" className="self-start sm:self-auto rounded-full text-[13px]">
            <Link href="/news">전체 소식 보기</Link>
          </Button>
        </FadeInSection>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">

          {/* 공지사항 */}
          <FadeInSection delay={0.05}>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Megaphone className="h-4 w-4 text-navy-500" />
                  <h3 className="text-[14px] font-bold text-navy-800 font-heading tracking-tight">공지사항</h3>
                </div>
                <Button asChild variant="ghost" size="sm" className="text-[12px] text-navy-400 hover:text-primary h-7 px-2">
                  <Link href="/news/notice">더보기 <ArrowRight className="ml-0.5 h-3 w-3" /></Link>
                </Button>
              </div>
              {notices.length > 0
                ? notices.map((n: Notice) => <NoticeRow key={n.id} item={n} />)
                : <p className="py-8 text-center text-sm text-navy-400">등록된 공지사항이 없습니다.</p>
              }
            </div>
          </FadeInSection>

          {/* 이사회 + 언론보도 */}
          <StaggerSection className="flex flex-col gap-4" delay={0.12}>
            {boardResults[0] && (
              <StaggerItem><BoardCard item={boardResults[0]} /></StaggerItem>
            )}
            {boardResults[1] && (
              <StaggerItem><BoardRow item={boardResults[1]} /></StaggerItem>
            )}
            {pressArticles.length > 0 && (
              <StaggerItem>
                <div className="rounded-2xl border border-navy-100 bg-navy-50 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Newspaper className="h-4 w-4 text-navy-500" />
                    <h3 className="text-[13px] font-bold text-navy-700 font-heading tracking-tight">언론보도</h3>
                    <Button asChild variant="ghost" size="sm" className="ml-auto text-[11px] text-navy-400 hover:text-primary h-6 px-2">
                      <Link href="/news/press">더보기</Link>
                    </Button>
                  </div>
                  {pressArticles.map((item: PressArticle) => (
                    <Link
                      key={item.id}
                      href={`/news/press/${item.id}`}
                      className="group flex items-start gap-2 py-2.5 border-b border-navy-100 last:border-0"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] text-navy-700 group-hover:text-primary transition-colors line-clamp-1 font-medium tracking-tight">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-navy-400 mt-0.5 tabular-nums">{formatDate(item.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </StaggerItem>
            )}
          </StaggerSection>
        </div>
      </div>
    </section>
  );
}
