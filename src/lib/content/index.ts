/**
 * 콘텐츠 공개 API
 *
 * ──────────────────────────────────────────────────────────────
 *  Sanity CMS 이전 방법 (이 파일만 수정하면 됩니다):
 *
 *  1단계: src/lib/content/sanity.ts 구현
 *         (ContentSource 인터페이스 준수, @sanity/client 사용)
 *
 *  2단계: 아래 import 경로를 변경
 *         Before: import { filesystemSource } from "./filesystem";
 *         After:  import { sanitySource }     from "./sanity";
 *
 *  3단계: currentSource 변수를 교체
 *         Before: const currentSource = filesystemSource;
 *         After:  const currentSource = sanitySource;
 * ──────────────────────────────────────────────────────────────
 *
 *  Markdown Frontmatter 필드 → Sanity 스키마 필드 매핑:
 *   id           → _id
 *   title        → title (string)
 *   date         → date  (date)
 *   excerpt      → excerpt (text)
 *   isPublished  → isPublished (boolean)
 *   category     → category (string)
 *   isPinned     → isPinned (boolean)
 *   attachments  → attachments[] (file)
 *   meetingNumber → meetingNumber (number)
 *   agenda       → agenda[] (string)
 *   outlet       → outlet (string)
 *   originalUrl  → originalUrl (url)
 */

import { filesystemSource } from "./filesystem";
import type { FetchOptions, Notice, BoardResult, PressArticle } from "./types";

// 🔄 CMS 이전 시 이 한 줄만 교체:
const source = filesystemSource;

export const getNotices = (options?: FetchOptions): Promise<Notice[]> => source.getNotices(options);
export const getNoticeById = (id: string): Promise<Notice | null> => source.getNoticeById(id);

export const getBoardResults = (options?: FetchOptions): Promise<BoardResult[]> => source.getBoardResults(options);
export const getBoardResultById = (id: string): Promise<BoardResult | null> => source.getBoardResultById(id);

export const getPressArticles = (options?: FetchOptions): Promise<PressArticle[]> => source.getPressArticles(options);
export const getPressArticleById = (id: string): Promise<PressArticle | null> => source.getPressArticleById(id);

// 타입 재내보내기 (사용 측에서 별도 import 불필요)
export type { Notice, BoardResult, PressArticle, Attachment, FetchOptions } from "./types";
