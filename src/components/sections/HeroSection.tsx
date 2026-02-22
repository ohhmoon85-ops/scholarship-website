"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stats = [
  { value: "2,500+", label: "누적 장학생" },
  { value: "50억+",  label: "누적 지급 장학금" },
  { value: "30년",   label: "재단 운영 역사" },
  { value: "98%",    label: "장학생 졸업률" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 배경 — 실제 운영 시 bg-[url('/hero-bg.jpg')] bg-cover bg-center 추가 */}
      <div className="absolute inset-0 bg-navy-950" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 75% 55% at 55% 38%, oklch(0.28 0.085 258 / 0.65) 0%, transparent 70%),
            radial-gradient(ellipse 45% 70% at 88% 75%, oklch(0.35 0.095 258 / 0.4) 0%, transparent 65%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right,white 1px,transparent 1px)," +
            "linear-gradient(to bottom,white 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[oklch(0.70_0.13_84_/_0.7)] to-transparent" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[640px] w-[640px] rounded-full border border-white/[0.04]" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto max-w-7xl w-full px-4 py-32 sm:px-6 lg:px-8">
        <motion.div className="max-w-[640px]" variants={container} initial="hidden" animate="visible">
          {/* 모집 배지 */}
          <motion.div variants={item} className="mb-9">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[oklch(0.70_0.13_84_/_0.3)] bg-[oklch(0.70_0.13_84_/_0.1)] px-4 py-2 backdrop-blur-sm">
              <GraduationCap className="h-4 w-4 text-gold" />
              <span className="text-[13px] font-medium tracking-tight text-gold">
                2025년 하반기 장학생 모집 중
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            </span>
          </motion.div>

          {/* 메인 카피 */}
          <motion.h1 variants={item} className="font-heading text-white leading-[1.14]">
            <span className="block text-[2.6rem] font-bold tracking-tight sm:text-5xl lg:text-[3.5rem]">당신의 꿈이</span>
            <span className="block text-[2.6rem] font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] mt-1">멈추지 않도록,</span>
            <span className="block text-[2rem] font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] mt-3 text-gold">우리가 곁에 서겠습니다</span>
          </motion.h1>

          {/* 서브카피 */}
          <motion.p variants={item} className="mt-8 max-w-[480px] text-[15px] leading-[1.9] text-white/60 tracking-tight">
            경제적 어려움이 꿈을 막아서는 안 됩니다.<br />
            장학재단은 열정과 의지를 가진 학생 곁에서 든든한 버팀목이 되겠습니다.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg" className="rounded-full font-semibold gap-2 text-[14px] shadow-lg shadow-[oklch(0.70_0.13_84_/_0.3)]">
              <Link href="/scholarship/apply">장학생 지원하기 <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-[14px] border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30">
              <Link href="/about">재단 소개</Link>
            </Button>
          </motion.div>

          {/* 구분선 + 통계 */}
          <motion.div variants={item} className="mt-16 h-px w-20 bg-gradient-to-r from-gold/50 to-transparent" />
          <motion.div
            className="mt-8 grid grid-cols-2 gap-y-7 gap-x-10 sm:grid-cols-4"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.65 } } }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}>
                <p className="text-[1.65rem] font-bold text-gold font-heading leading-none tracking-tight">{s.value}</p>
                <p className="mt-2 text-[12px] text-white/40 tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <span className="text-[9px] uppercase tracking-[0.2em] text-white">Scroll</span>
        <div className="h-8 w-4 rounded-full border border-white/30 flex justify-center pt-1.5">
          <div className="h-1.5 w-0.5 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
