/**
 * 콘텐츠 소스 추상 인터페이스
 *
 * ┌─────────────────────────────────────────────────┐
 * │  현재: FilesystemSource (content/ 폴더 기반)     │
 * │  이전: SanitySource      (@sanity/client 기반)   │
 * └─────────────────────────────────────────────────┘
 *
 * Sanity 이전 방법:
 *  1. src/lib/content/sanity.ts 를 구현 (이 인터페이스 준수)
 *  2. src/lib/content/index.ts 에서 import 경로만 교체
 *  3. content/ 폴더의 Markdown frontmatter 필드 = Sanity 스키마 필드
 */

import type { Notice, BoardResult, PressArticle, FetchOptions } from "./types";

export interface ContentSource {
  // ── 공지사항 ──
  getNotices(options?: FetchOptions): Promise<Notice[]>;
  getNoticeById(id: string): Promise<Notice | null>;

  // ── 이사회 결과 ──
  getBoardResults(options?: FetchOptions): Promise<BoardResult[]>;
  getBoardResultById(id: string): Promise<BoardResult | null>;

  // ── 언론보도 ──
  getPressArticles(options?: FetchOptions): Promise<PressArticle[]>;
  getPressArticleById(id: string): Promise<PressArticle | null>;
}
