"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Youtube, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeInSection, StaggerSection, StaggerItem } from "@/components/animations/FadeIn";

/*
  ⚠️  실제 운영 시 아래 VIDEO_ID들을 채널의 실제 영상 ID로 교체하세요.
      유튜브 URL: https://www.youtube.com/watch?v=VIDEO_ID
      썸네일:    https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg
*/
interface VideoItem {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
}

const FEATURED_VIDEO: VideoItem = {
  id: "REPLACE_MAIN_VIDEO_ID",      // ← 실제 영상 ID로 교체
  title: "2025년 상반기 장학증서 수여식",
  description:
    "2025년 상반기 장학생 수여식 현장을 담았습니다. 꿈을 향해 나아가는 장학생들의 이야기를 함께 나눴습니다.",
  date: "2025.06.15",
  duration: "12:34",
};

const RECENT_VIDEOS: VideoItem[] = [
  {
    id: "REPLACE_VIDEO_ID_1",       // ← 실제 영상 ID로 교체
    title: "장학재단 30주년 기념 행사 하이라이트",
    description: "30주년 창립 기념식 현장",
    date: "2025.05.10",
    duration: "08:22",
  },
  {
    id: "REPLACE_VIDEO_ID_2",       // ← 실제 영상 ID로 교체
    title: "장학생 인터뷰: 꿈을 향한 도전",
    description: "장학생들의 생생한 이야기",
    date: "2025.04.20",
    duration: "15:07",
  },
  {
    id: "REPLACE_VIDEO_ID_3",       // ← 실제 영상 ID로 교체
    title: "2025 장학사업 안내 영상",
    description: "장학금 종류와 지원 방법 안내",
    date: "2025.03.01",
    duration: "05:48",
  },
];

/* ── 유튜브 썸네일 URL 생성 ── */
function thumbUrl(videoId: string) {
  // 실제 VIDEO_ID가 없는 경우 placeholder 반환
  if (videoId.startsWith("REPLACE_")) {
    return null;
  }
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

/* ── 임베드 URL 생성 ── */
function embedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
}

/* ── 피처드 플레이어 ── */
function FeaturedPlayer({ video }: { video: VideoItem }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumb = thumbUrl(video.id);

  return (
    <div className="rounded-2xl overflow-hidden bg-navy-900 shadow-xl">
      {/* 비디오 영역 */}
      <div className="relative aspect-video bg-navy-950">
        {isPlaying ? (
          <iframe
            src={embedUrl(video.id)}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center group"
            onClick={() => setIsPlaying(true)}
            aria-label={`${video.title} 영상 재생`}
          >
            {/* 썸네일 또는 플레이스홀더 */}
            {thumb ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={thumb}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(ellipse at 30% 60%, oklch(0.29 0.09 257 / 0.8) 0%, transparent 60%),
                    radial-gradient(ellipse at 70% 30%, oklch(0.37 0.1 257 / 0.5) 0%, transparent 50%)
                  `,
                }}
              />
            )}
            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/30 transition-colors" />
            {/* 재생 버튼 */}
            <div className="relative z-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-200">
              <Play className="h-7 w-7 sm:h-9 sm:w-9 text-navy-900 ml-1" fill="currentColor" />
            </div>
            {/* 재생시간 배지 */}
            <div className="absolute bottom-3 right-3 bg-navy-950/80 text-white text-[11px] font-medium px-2 py-0.5 rounded">
              {video.duration}
            </div>
          </button>
        )}
      </div>

      {/* 영상 정보 */}
      <div className="p-5">
        <p className="text-xs text-gold mb-1">{video.date}</p>
        <h3 className="text-base font-bold text-white font-heading leading-snug">
          {video.title}
        </h3>
        <p className="mt-2 text-sm text-white/55 leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}

/* ── 최신 영상 썸네일 카드 ── */
function VideoCard({ video, onPlay }: { video: VideoItem; onPlay: (id: string) => void }) {
  const thumb = thumbUrl(video.id);
  return (
    <button
      className="group flex items-start gap-3 text-left w-full"
      onClick={() => onPlay(video.id)}
    >
      {/* 썸네일 */}
      <div className="relative flex-shrink-0 w-28 sm:w-32 aspect-video rounded-lg overflow-hidden bg-navy-700">
        {thumb ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={thumb}
            alt={video.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-800" />
        )}
        <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors flex items-center justify-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/85 group-hover:scale-110 transition-transform">
            <Play className="h-3 w-3 text-navy-900 ml-0.5" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-1 right-1 bg-navy-950/80 text-white text-[10px] px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      {/* 정보 */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white/85 group-hover:text-white transition-colors line-clamp-2 leading-snug">
          {video.title}
        </p>
        <p className="mt-1 text-xs text-white/40">{video.date}</p>
      </div>
    </button>
  );
}

/* ── 메인 섹션 ── */
export default function YoutubeSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // 사이드바에서 영상 클릭 시 피처드 영상을 해당 영상으로 전환
  const featuredVideo = activeVideoId
    ? (RECENT_VIDEOS.find((v) => v.id === activeVideoId) ?? FEATURED_VIDEO)
    : FEATURED_VIDEO;

  return (
    <section className="py-20 bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* 섹션 헤더 */}
        <FadeInSection from="up" className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Media Center
            </p>
            <div className="flex items-center gap-2">
              <Youtube className="h-6 w-6 text-red-500" />
              <h2 className="text-3xl font-bold text-white font-heading">
                미디어 센터
              </h2>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="self-start sm:self-auto rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 gap-2"
          >
            <Link
              href="https://www.youtube.com/@REPLACE_CHANNEL_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-4 w-4 text-red-400" />
              유튜브 채널 방문
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
        </FadeInSection>

        {/* 2열 레이아웃: 피처드 플레이어 | 최신 영상 목록 */}
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">

          {/* 메인 플레이어 */}
          <FadeInSection from="left" delay={0.1}>
            <FeaturedPlayer
              key={featuredVideo.id}          // key 변경으로 상태 리셋
              video={featuredVideo}
            />
          </FadeInSection>

          {/* 최신 영상 목록 */}
          <StaggerSection className="flex flex-col gap-6" delay={0.2}>
            <StaggerItem>
              <p className="text-sm font-medium text-white/50 uppercase tracking-wider">
                최신 영상
              </p>
            </StaggerItem>
            <div className="space-y-5">
              {RECENT_VIDEOS.map((video) => (
                <StaggerItem key={video.id}>
                  <VideoCard
                    video={video}
                    onPlay={(id) => {
                      setActiveVideoId(id);
                      // 모바일에서 플레이어로 스크롤
                      if (typeof window !== "undefined" && window.innerWidth < 1024) {
                        document.getElementById("yt-player")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                  {video !== RECENT_VIDEOS[RECENT_VIDEOS.length - 1] && (
                    <div className="mt-5 h-px bg-white/8" />
                  )}
                </StaggerItem>
              ))}
            </div>

            {/* 채널 구독 유도 */}
            <StaggerItem className="mt-auto rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600">
                <Youtube className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">장학재단 유튜브</p>
                <p className="text-xs text-white/45 mt-0.5">구독하고 최신 소식을 받아보세요</p>
              </div>
              <Button
                asChild
                size="sm"
                className={cn(
                  "flex-shrink-0 rounded-full text-xs bg-red-600 hover:bg-red-700 text-white border-0"
                )}
              >
                <Link
                  href="https://www.youtube.com/@REPLACE_CHANNEL_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  구독
                </Link>
              </Button>
            </StaggerItem>
          </StaggerSection>
        </div>
      </div>
    </section>
  );
}
