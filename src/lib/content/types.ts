/**
 * 콘텐츠 타입 정의
 *
 * 추후 Sanity CMS로 이전 시:
 *  - 이 인터페이스는 그대로 유지
 *  - filesystem.ts 대신 sanity.ts 어댑터 구현
 *  - content/index.ts 에서 어댑터만 교체
 */

/** 공통 첨부파일 */
export interface Attachment {
  name: string;
  url: string;
  /** 'pdf' | 'hwp' | 'docx' | 'xlsx' | 'zip' ... */
  fileType: string;
  /** bytes */
  size?: number;
}

/** 모든 콘텐츠 기본 필드 */
export interface BaseContent {
  /** URL 파라미터로 사용되는 고유 식별자 (숫자 문자열 또는 slug) */
  id: string;
  title: string;
  /** ISO-8601 날짜 문자열 (예: "2025-07-01") */
  date: string;
  /** 목록 뷰에 노출되는 요약문 */
  excerpt: string;
  isPublished: boolean;
  /** HTML 문자열 (Markdown → remark 변환 결과) */
  content: string;
  attachments?: Attachment[];
}

/* ──────────────────────────────────────────────────── */
/*  공지사항                                             */
/* ──────────────────────────────────────────────────── */

export type NoticeCategory = "공지" | "모집" | "행사" | "결과";

export interface Notice extends BaseContent {
  category: NoticeCategory;
  isPinned: boolean;
  /** 최근 N일 이내면 true (렌더 시 계산) */
  isNew?: boolean;
}

/* ──────────────────────────────────────────────────── */
/*  이사회 결과                                          */
/* ──────────────────────────────────────────────────── */

export type BoardMeetingType = "정기" | "임시";

export interface BoardResult extends BaseContent {
  meetingNumber: number;
  meetingType: BoardMeetingType;
  /** 의결된 안건 목록 */
  agenda: string[];
}

/* ──────────────────────────────────────────────────── */
/*  언론보도                                             */
/* ──────────────────────────────────────────────────── */

export interface PressArticle extends BaseContent {
  outlet: string;           // 언론사 이름 (예: "한국일보")
  originalUrl?: string;     // 원문 링크
  thumbnailUrl?: string;    // 대표 이미지 URL
}

/* ──────────────────────────────────────────────────── */
/*  공통 조회 옵션                                        */
/* ──────────────────────────────────────────────────── */

export interface FetchOptions {
  /** 결과 개수 제한 */
  limit?: number;
  /** 카테고리 필터 */
  category?: string;
  /** false면 비공개 포함 (관리자 전용) */
  publishedOnly?: boolean;
}
