import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

/**
 * Markdown 문자열을 HTML로 변환합니다.
 * GFM(GitHub Flavored Markdown) 지원: 표, 체크박스, 취소선 등
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);

  return result.toString();
}

/**
 * ISO 날짜 문자열을 한국식으로 포맷합니다.
 * "2025-07-01" → "2025.07.01"
 */
export function formatDate(isoDate: string): string {
  return isoDate.replace(/-/g, ".");
}

/**
 * 날짜가 최근 N일 이내인지 확인합니다.
 */
export function isRecentDate(isoDate: string, withinDays = 14): boolean {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= withinDays;
}
