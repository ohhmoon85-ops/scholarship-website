/**
 * GET /api/youtube
 *
 * 채널의 최신 YouTube 영상 목록을 반환합니다.
 *
 * Query parameters:
 *   ?limit=10   최대 결과 수 (기본 10, 최대 50)
 *
 * Response:
 *   { videos: YouTubeVideo[], isMockData: boolean, error?: string }
 */

import { NextRequest, NextResponse } from "next/server";
import { fetchChannelVideos } from "@/lib/youtube";

export const dynamic = "force-dynamic"; // 항상 최신 데이터 (서버 캐시 우회)
export const revalidate = 3600;         // ISR: 1시간마다 재검증

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limitParam = searchParams.get("limit");
  const limit = Math.min(Math.max(parseInt(limitParam ?? "10", 10) || 10, 1), 50);

  const result = await fetchChannelVideos(limit);

  return NextResponse.json(result, {
    headers: {
      // 브라우저 캐시: 5분, CDN 캐시: 1시간
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=300",
    },
  });
}
