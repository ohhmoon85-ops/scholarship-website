"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* 배경 사진 */}
      <Image
        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=85&auto=format&fit=crop"
        alt="장학재단 배경 — 청년 학생들"
        fill
        className="object-cover object-center"
        priority
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-navy-950/68" />

      {/* 콘텐츠 */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center"
        >
          {/* 상단 라벨 */}
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.35em] text-gold/80">
            한영자 희망 장학재단
          </p>

          {/* 메인 헤드라인 */}
          <h1 className="font-heading text-white leading-[1.18]">
            <span className="block text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight">
              자립준비청년의 미래,
            </span>
            <span className="block text-[2.25rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mt-2 text-gold">
              함께 열어갑니다.
            </span>
          </h1>

          {/* 서브카피 */}
          <p className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.9] text-white/72 max-w-2xl">
            삼양그룹이 설립하는 한영자 희망 장학재단은<br className="hidden sm:block" />
            자립준비청년 대학생들이 경제적 어려움 없이<br className="hidden sm:block" />
            학업에 집중하고 미래를 설계할 수 있도록 함께합니다.
          </p>

          {/* 핵심 수치 배지 */}
          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-6 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[13px] font-semibold text-white/90 tracking-wide">
              2026년 4월 30일 · 제1기 장학금 수여식 예정
            </span>
          </div>

          {/* CTA 버튼 */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">
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

      {/* 하단 웨이브 구분선 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
          <path d="M0,28 Q360,56 720,28 Q1080,0 1440,28 L1440,56 L0,56 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
