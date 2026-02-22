"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Users, ClipboardList, Newspaper, PlayCircle, Info } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const quickLinks = [
  { label: "재단 소개", desc: "설립목적 및 연혁", href: "/about", Icon: Info },
  { label: "장학 사업", desc: "사업 안내 및 종류", href: "/scholarship/overview", Icon: BookOpen },
  { label: "장학 신청", desc: "지원 자격 및 서류", href: "/scholarship/apply", Icon: ClipboardList },
  { label: "장학생 현황", desc: "선발 결과 안내", href: "/scholarship/status", Icon: Users },
  { label: "공지사항", desc: "재단 소식 및 공지", href: "/news/notice", Icon: Newspaper },
  { label: "미디어 센터", desc: "유튜브·포토갤러리", href: "/media/youtube", Icon: PlayCircle },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* 배경 사진 */}
      <Image
        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=85&auto=format&fit=crop"
        alt="장학재단 배경 — 청년 학생들"
        fill
        className="object-cover object-center"
        priority
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-navy-950/55" />

      {/* ── 중앙 콘텐츠 ── */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center text-center max-w-4xl"
        >
          {/* 상단 라벨 */}
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.35em] text-gold/80">
            한영자 희망 장학재단 · Samyang Initiative
          </p>

          {/* 헤드라인 */}
          <h1 className="font-heading text-white leading-[1.18]">
            <span className="block text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight">
              자립준비청년의 미래,
            </span>
            <span className="block text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mt-2 text-gold">
              함께 열어갑니다.
            </span>
          </h1>

          {/* 서브카피 */}
          <p className="mt-6 text-[15px] sm:text-[16.5px] leading-[1.9] text-white/70 max-w-2xl">
            삼양그룹이 설립하는 한영자 희망 장학재단은
            자립준비청년 대학생들이 경제적 어려움 없이
            학업에 집중하고 미래를 설계할 수 있도록 함께합니다.
          </p>

          {/* 핵심 수치 3종 */}
          <div className="mt-9 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-sm sm:max-w-md">
            {[
              { value: "150억원", label: "설립 기본재산" },
              { value: "100명", label: "연간 선발 규모" },
              { value: "400만원", label: "1인 장학금" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-[1.6rem] sm:text-[2rem] font-bold text-gold font-heading leading-none">
                  {s.value}
                </span>
                <span className="mt-1 text-[11px] text-white/45 tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>

          {/* 수여식 배지 */}
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-6 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[13px] font-semibold text-white/90 tracking-wide">
              2026년 4월 30일 · 제1기 장학금 수여식 예정
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full bg-white text-navy-900 text-[14px] font-semibold px-8 py-3.5 hover:bg-white/90 transition-all shadow-lg"
            >
              재단 소개
            </Link>
            <Link
              href="/scholarship/apply"
              className="rounded-full border border-white/45 text-white text-[14px] font-semibold px-8 py-3.5 hover:bg-white/10 transition-all"
            >
              장학 신청 안내
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── 하단 퀵링크 바 ── */}
      <div className="relative z-10 border-t border-white/10 bg-navy-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
            {quickLinks.map(({ label, desc, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 hover:bg-white/10 transition-colors group text-center"
              >
                <Icon className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" strokeWidth={1.8} />
                <span className="text-[12.5px] font-semibold text-white leading-tight">{label}</span>
                <span className="text-[10.5px] text-white/40 leading-tight hidden sm:block">{desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
