/**
 * 파일시스템 기반 콘텐츠 어댑터
 *
 * content/{notices,board,press}/ 폴더의 .md 파일을 읽습니다.
 *
 * 파일 명명 규칙: NNN-slug.md (예: 001-recruitment.md)
 * Frontmatter 필드 = Sanity 스키마 필드와 1:1 대응 (이전 용이)
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml, isRecentDate } from "./markdown";
import type { ContentSource } from "./adapter";
import type {
  FetchOptions,
  Notice,
  BoardResult,
  PressArticle,
  Attachment,
} from "./types";

/* ── 경로 설정 ── */
const CONTENT_ROOT = path.join(process.cwd(), "content");

const DIRS = {
  notices: path.join(CONTENT_ROOT, "notices"),
  board: path.join(CONTENT_ROOT, "board"),
  press: path.join(CONTENT_ROOT, "press"),
} as const;

/* ── 파일 목록 읽기 헬퍼 ── */
function getMdFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse(); // 최신 순 (파일명 숫자 prefix 기준)
}

/* ── Frontmatter 공통 파싱 ── */
function parseBase(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, rawContent: content };
}

/* ── 첨부파일 타입 정규화 ── */
function normalizeAttachments(attachments?: unknown[]): Attachment[] {
  if (!attachments) return [];
  return (attachments as Attachment[]).filter((a) => a?.name && a?.url);
}

/* ────────────────────────────────────────────── */
/*  공지사항                                       */
/* ────────────────────────────────────────────── */

async function getNotices(options: FetchOptions = {}): Promise<Notice[]> {
  const { limit, category, publishedOnly = true } = options;
  const files = getMdFiles(DIRS.notices);

  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(DIRS.notices, file);
      const { data, rawContent } = parseBase(filePath);
      const content = await markdownToHtml(rawContent);

      return {
        id: String(data.id ?? file.replace(/\.md$/, "")),
        title: data.title ?? "제목 없음",
        date: data.date ?? "",
        excerpt: data.excerpt ?? rawContent.slice(0, 100).replace(/\n/g, " "),
        isPublished: data.isPublished ?? true,
        content,
        category: data.category ?? "공지",
        isPinned: data.isPinned ?? false,
        isNew: isRecentDate(data.date),
        attachments: normalizeAttachments(data.attachments),
      } satisfies Notice;
    })
  );

  return items
    .filter((n) => (publishedOnly ? n.isPublished : true))
    .filter((n) => (category ? n.category === category : true))
    .slice(0, limit ?? items.length);
}

async function getNoticeById(id: string): Promise<Notice | null> {
  const all = await getNotices({ publishedOnly: false });
  return all.find((n) => n.id === id) ?? null;
}

/* ────────────────────────────────────────────── */
/*  이사회 결과                                    */
/* ────────────────────────────────────────────── */

async function getBoardResults(options: FetchOptions = {}): Promise<BoardResult[]> {
  const { limit, publishedOnly = true } = options;
  const files = getMdFiles(DIRS.board);

  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(DIRS.board, file);
      const { data, rawContent } = parseBase(filePath);
      const content = await markdownToHtml(rawContent);

      return {
        id: String(data.id ?? file.replace(/\.md$/, "")),
        title: data.title ?? "제목 없음",
        date: data.date ?? "",
        excerpt: data.excerpt ?? rawContent.slice(0, 100).replace(/\n/g, " "),
        isPublished: data.isPublished ?? true,
        content,
        meetingNumber: data.meetingNumber ?? 0,
        meetingType: data.meetingType ?? "정기",
        agenda: data.agenda ?? [],
        attachments: normalizeAttachments(data.attachments),
      } satisfies BoardResult;
    })
  );

  return items
    .filter((b) => (publishedOnly ? b.isPublished : true))
    .slice(0, limit ?? items.length);
}

async function getBoardResultById(id: string): Promise<BoardResult | null> {
  const all = await getBoardResults({ publishedOnly: false });
  return all.find((b) => b.id === id) ?? null;
}

/* ────────────────────────────────────────────── */
/*  언론보도                                       */
/* ────────────────────────────────────────────── */

async function getPressArticles(options: FetchOptions = {}): Promise<PressArticle[]> {
  const { limit, publishedOnly = true } = options;
  const files = getMdFiles(DIRS.press);

  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(DIRS.press, file);
      const { data, rawContent } = parseBase(filePath);
      const content = await markdownToHtml(rawContent);

      return {
        id: String(data.id ?? file.replace(/\.md$/, "")),
        title: data.title ?? "제목 없음",
        date: data.date ?? "",
        excerpt: data.excerpt ?? rawContent.slice(0, 100).replace(/\n/g, " "),
        isPublished: data.isPublished ?? true,
        content,
        outlet: data.outlet ?? "",
        originalUrl: data.originalUrl,
        thumbnailUrl: data.thumbnailUrl,
        attachments: normalizeAttachments(data.attachments),
      } satisfies PressArticle;
    })
  );

  return items
    .filter((p) => (publishedOnly ? p.isPublished : true))
    .slice(0, limit ?? items.length);
}

async function getPressArticleById(id: string): Promise<PressArticle | null> {
  const all = await getPressArticles({ publishedOnly: false });
  return all.find((p) => p.id === id) ?? null;
}

/* ── 어댑터 인스턴스 ── */
export const filesystemSource: ContentSource = {
  getNotices,
  getNoticeById,
  getBoardResults,
  getBoardResultById,
  getPressArticles,
  getPressArticleById,
};
