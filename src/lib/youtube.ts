/**
 * YouTube Data API v3 클라이언트
 *
 * 환경변수 설정 (.env.local):
 *   YOUTUBE_API_KEY=AIza...         ← Google Cloud Console에서 발급
 *   YOUTUBE_CHANNEL_ID=UCxxxxxxxx   ← 채널 페이지 URL에서 확인
 *
 * API 키 발급: https://console.cloud.google.com/
 *   → YouTube Data API v3 활성화 → 사용자 인증 정보 → API 키 생성
 */

export interface YouTubeVideo {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  /** ISO-8601 날짜 ("2025-06-15") */
  publishedDate: string;
  thumbnailUrl: string;
  channelTitle: string;
}

export interface YouTubeApiResult {
  videos: YouTubeVideo[];
  /** API 키 미설정 또는 오류 시 true */
  isMockData: boolean;
  error?: string;
}

/* ── 목 데이터 (API 키 없는 개발 환경용) ── */
const MOCK_VIDEOS: YouTubeVideo[] = [
  {
    videoId: "MOCK_VIDEO_1",
    title: "2025년 상반기 장학증서 수여식 (샘플)",
    description: "실제 YouTube API 키를 .env.local에 설정하면 채널 영상이 표시됩니다.",
    publishedAt: "2025-06-15T00:00:00Z",
    publishedDate: "2025-06-15",
    thumbnailUrl: "",
    channelTitle: "장학재단",
  },
  {
    videoId: "MOCK_VIDEO_2",
    title: "장학재단 30주년 기념 행사 하이라이트 (샘플)",
    description: "YOUTUBE_API_KEY와 YOUTUBE_CHANNEL_ID 환경변수를 설정하세요.",
    publishedAt: "2025-05-10T00:00:00Z",
    publishedDate: "2025-05-10",
    thumbnailUrl: "",
    channelTitle: "장학재단",
  },
  {
    videoId: "MOCK_VIDEO_3",
    title: "장학생 인터뷰: 꿈을 향한 도전 (샘플)",
    description: "API 키 설정 방법: https://console.cloud.google.com/",
    publishedAt: "2025-04-20T00:00:00Z",
    publishedDate: "2025-04-20",
    thumbnailUrl: "",
    channelTitle: "장학재단",
  },
];

/* ── API 응답 타입 ── */
interface YouTubeSearchItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: { medium?: { url: string }; default?: { url: string } };
    channelTitle: string;
  };
}

interface YouTubeSearchResponse {
  items?: YouTubeSearchItem[];
  error?: { message: string; code: number };
}

/**
 * 특정 채널의 최신 영상 목록을 가져옵니다.
 * API 키 미설정 시 목 데이터를 반환합니다.
 *
 * @param maxResults  최대 결과 수 (기본 10)
 */
export async function fetchChannelVideos(maxResults = 10): Promise<YouTubeApiResult> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  // API 키 미설정 → 목 데이터 반환
  if (!apiKey || !channelId) {
    return {
      videos: MOCK_VIDEOS.slice(0, maxResults),
      isMockData: true,
      error: "YOUTUBE_API_KEY 또는 YOUTUBE_CHANNEL_ID 환경변수가 설정되지 않았습니다.",
    };
  }

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("key", apiKey);
    url.searchParams.set("channelId", channelId);
    url.searchParams.set("part", "snippet,id");
    url.searchParams.set("order", "date");
    url.searchParams.set("type", "video");
    url.searchParams.set("maxResults", String(maxResults));

    const res = await fetch(url.toString(), {
      // Next.js 캐싱: 1시간마다 재검증
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`YouTube API responded with ${res.status}`);
    }

    const data: YouTubeSearchResponse = await res.json();

    if (data.error) {
      throw new Error(`YouTube API Error ${data.error.code}: ${data.error.message}`);
    }

    const videos: YouTubeVideo[] = (data.items ?? []).map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      publishedDate: item.snippet.publishedAt.slice(0, 10),
      thumbnailUrl:
        item.snippet.thumbnails.medium?.url ??
        item.snippet.thumbnails.default?.url ??
        "",
      channelTitle: item.snippet.channelTitle,
    }));

    return { videos, isMockData: false };
  } catch (err) {
    const message = err instanceof Error ? err.message : "알 수 없는 오류";
    console.error("[YouTube API Error]", message);
    return {
      videos: MOCK_VIDEOS.slice(0, maxResults),
      isMockData: true,
      error: message,
    };
  }
}

/** 유튜브 영상 URL */
export function videoUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/** 썸네일 URL (없으면 null) */
export function thumbnailUrl(videoId: string, quality: "default" | "medium" | "high" = "medium") {
  if (videoId.startsWith("MOCK_")) return null;
  const qualityMap = { default: "default", medium: "mqdefault", high: "hqdefault" };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

/** nocookie embed URL */
export function embedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
}
