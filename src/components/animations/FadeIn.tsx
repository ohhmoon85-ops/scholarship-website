"use client";

/**
 * 범용 Framer Motion 애니메이션 래퍼 컴포넌트
 *
 * 사용 패턴:
 *   - <FadeInSection>   : 뷰포트 진입 시 페이드인 (하위 섹션용)
 *   - <FadeIn>          : 즉시 재생 페이드인 (Hero 내부 요소용)
 *   - <StaggerSection>  : 자식 요소들을 순차적으로 나타내는 컨테이너
 *   - <StaggerItem>     : StaggerSection의 자식 아이템
 */

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

/* ──────────────────────────────────────────── */
/*  공통 easing                                  */
/* ──────────────────────────────────────────── */

const ease = [0.22, 1, 0.36, 1] as const; // ease-out-quint

/* ──────────────────────────────────────────── */
/*  FadeInSection                                */
/*  뷰포트에 진입할 때 페이드인+슬라이드업        */
/* ──────────────────────────────────────────── */

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** 슬라이드 방향: 기본 up */
  from?: "up" | "down" | "left" | "right" | "none";
  /** 슬라이드 거리 px */
  distance?: number;
}

export function FadeInSection({
  children,
  className,
  delay = 0,
  from = "up",
  distance = 32,
}: FadeInSectionProps) {
  const prefersReduced = useReducedMotion();

  const offset = prefersReduced ? 0 : distance;
  const directionMap = {
    up:    { y: offset },
    down:  { y: -offset },
    left:  { x: offset },
    right: { x: -offset },
    none:  {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────── */
/*  FadeIn                                       */
/*  컴포넌트 마운트 즉시 재생 (Hero용)            */
/* ──────────────────────────────────────────── */

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "down" | "none";
  distance?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  from = "up",
  distance = 20,
}: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const offset = prefersReduced ? 0 : distance;

  return (
    <motion.div
      initial={{ opacity: 0, y: from === "up" ? offset : from === "down" ? -offset : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────── */
/*  StaggerSection + StaggerItem                  */
/*  목록/카드 그룹의 순차 등장 효과               */
/* ──────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface StaggerSectionProps {
  children: ReactNode;
  className?: string;
  /** 뷰포트 진입 시 재생 (기본 true) */
  inView?: boolean;
  delay?: number;
}

export function StaggerSection({
  children,
  className,
  inView = true,
  delay = 0,
}: StaggerSectionProps) {
  const props = inView
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-60px 0px" },
      }
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
      };

  return (
    <motion.div
      {...props}
      variants={{
        ...containerVariants,
        visible: {
          ...containerVariants.visible,
          transition: {
            ...(containerVariants.visible as { transition: object }).transition,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & HTMLMotionProps<"div">) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────── */
/*  CountUp                                      */
/*  숫자 카운트업 효과 (통계 수치용)              */
/* ──────────────────────────────────────────── */

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  target,
  duration = 1.8,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
