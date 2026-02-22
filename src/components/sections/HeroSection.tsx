"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};
const photoVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease, delay: 0.25 } },
};

const stats = [
  { value: "2,500+", label: "누적 장학생" },
  { value: "50억+",  label: "누적 지급 장학금" },
  { value: "30년",   label: "재단 운영 역사" },
  { value: "98%",    label: "장학생 졸업률" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* 배경 — 왼쪽 미세한 그라데이션 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 80% at 0% 50%, oklch(0.96 0.015 258 / 0.8) 0%, transparent 70%)",
        }}
      />
      {/* Gold 세로 강조선 */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[oklch(0.70_0.13_84_/_0.55)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-104px)] items-center gap-10 lg:grid-cols-2 lg:gap-16 py-16 lg:py-0">

          {/* ── 왼쪽: 텍스트 콘텐츠 ── */}
          <motion.div
            className="max-w-[580px]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* 모집 배지 */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.70_0.13_84_/_0.3)] bg-[oklch(0.70_0.13_84_/_0.08)] px-4 py-2">
                <GraduationCap className="h-4 w-4 text-gold" />
                <span className="text-[13px] font-semibold text-gold tracking-tight">
                  2026년 상반기 장학생 모집 중
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              </span>
            </motion.div>

            {/* 라벨 */}
            <motion.p variants={item} className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-navy-400">
              신뢰와 소통의 디지털 플랫폼
            </motion.p>

            {/* 메인 카피 */}
            <motion.h1 variants={item} className="font-heading text-navy-900 leading-[1.13]">
              <span className="block text-[2.5rem] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]">
                당신의 꿈이
              </span>
              <span className="block text-[2.5rem] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] mt-1">
                멈추지 않도록,
              </span>
              <span className="block text-[1.95rem] font-semibold tracking-tight sm:text-4xl lg:text-[2.7rem] mt-3 text-gold">
                우리가 곁에 서겠습니다.
              </span>
            </motion.h1>

            {/* 서브카피 */}
            <motion.p
              variants={item}
              className="mt-7 max-w-[460px] text-[15px] leading-[1.9] text-navy-500"
            >
              오늘의 배움이 내일의 희망이 되는 곳, 장학재단이 함께합니다.<br />
              꿈을 향한 열정만 있다면 경제적 문턱을 넘을 수 있도록<br />
              든든한 사다리가 되겠습니다.
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                variant="gold"
                size="lg"
                className="rounded-full font-semibold gap-2 shadow-lg shadow-[oklch(0.70_0.13_84_/_0.25)]"
              >
                <Link href="/scholarship/apply">
                  장학생 지원하기 <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-navy-200 text-navy-700 hover:bg-navy-50 hover:border-navy-300 hover:text-navy-900"
              >
                <Link href="/about">재단 소개</Link>
              </Button>
            </motion.div>

            {/* 구분선 + 통계 */}
            <motion.div variants={item} className="mt-14 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
            <motion.div
              className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-4"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.65 } },
              }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                  }}
                >
                  <p className="text-[1.6rem] font-bold text-navy-900 font-heading leading-none tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[12px] text-navy-400 tracking-wide">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── 오른쪽: 사진 ── */}
          <motion.div
            className="hidden lg:block relative"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 장식 원 */}
            <div className="absolute -top-6 -right-6 h-64 w-64 rounded-full bg-navy-50 border border-navy-100" />
            <div className="absolute -bottom-4 -right-2 h-40 w-40 rounded-full bg-gold/8 border border-gold/15" />

            {/* 메인 사진 프레임 */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/15 aspect-[3/4] max-w-[440px] ml-auto border border-navy-100/50">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=880&q=85&auto=format&fit=crop"
                alt="장학재단 장학생 - 꿈을 향한 도전"
                fill
                className="object-cover object-top"
                priority
              />
              {/* 하단 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/35 via-transparent to-transparent" />

              {/* 하단 정보 카드 */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg border border-white/60">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    2026년 상반기 모집
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-navy-900">
                    장학금 신청 접수 중
                  </p>
                  <p className="mt-0.5 text-[12px] text-navy-500">
                    온라인 서류 접수 · 결과 조회
                  </p>
                </div>
              </div>
            </div>

            {/* 왼쪽 하단 작은 사진 카드 */}
            <motion.div
              className="absolute -left-10 bottom-24 z-20"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy-900/20 w-32 h-24 border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=260&q=80&auto=format&fit=crop"
                  alt="장학금 수여식"
                  width={260}
                  height={190}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="mt-1.5 bg-white rounded-lg px-2.5 py-1.5 shadow-sm border border-navy-100 text-center">
                <p className="text-[10px] text-navy-500 font-medium">장학금 수여식</p>
              </div>
            </motion.div>

            {/* Gold 배지 */}
            <motion.div
              className="absolute -right-4 top-20 z-20 bg-gold rounded-2xl px-4 py-3 shadow-lg shadow-gold/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0, ease }}
            >
              <p className="text-[11px] font-bold text-navy-900 uppercase tracking-wide">
                창립
              </p>
              <p className="text-2xl font-bold text-navy-900 font-heading leading-none">
                30주년
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[9px] uppercase tracking-[0.2em] text-navy-600">Scroll</span>
        <div className="h-7 w-4 rounded-full border border-navy-400 flex justify-center pt-1.5">
          <div className="h-1.5 w-0.5 rounded-full bg-navy-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
