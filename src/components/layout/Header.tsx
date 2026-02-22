"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "재단 소개",
    href: "/about",
    children: [
      { label: "설립목적 및 연혁", href: "/about/history" },
      { label: "이사장 인사말", href: "/about/greeting" },
      { label: "조직 및 임원", href: "/about/organization" },
      { label: "재단 연보", href: "/about/annual-report" },
    ],
  },
  {
    label: "장학 사업",
    href: "/scholarship",
    children: [
      { label: "장학 사업 안내", href: "/scholarship/overview" },
      { label: "장학금 종류", href: "/scholarship/types" },
      { label: "장학생 선발 기준", href: "/scholarship/criteria" },
      { label: "장학생 현황", href: "/scholarship/status" },
      { label: "지원 신청", href: "/scholarship/apply" },
    ],
  },
  {
    label: "재단 소식",
    href: "/news",
    children: [
      { label: "공지사항", href: "/news/notice" },
      { label: "이사회 결과", href: "/news/board" },
      { label: "언론보도", href: "/news/press" },
    ],
  },
  {
    label: "미디어 센터",
    href: "/media",
    children: [
      { label: "유튜브 채널", href: "/media/youtube" },
      { label: "포토갤러리", href: "/media/gallery" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 모바일 열릴 때 body 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleMouseEnter = (href: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(href);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "shadow-lg shadow-navy-950/30" : ""
        )}
      >
        {/* 상단 유틸리티 바 */}
        <div className="bg-navy-950 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-9 items-center justify-end gap-5">
              <Link href="/scholarship/apply" className="text-[11px] text-white/50 hover:text-gold transition-colors">
                장학생 지원
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/news/notice" className="text-[11px] text-white/50 hover:text-gold transition-colors">
                공지사항
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/community/contact" className="text-[11px] text-white/50 hover:text-gold transition-colors">
                문의하기
              </Link>
            </div>
          </div>
        </div>

        {/* 메인 헤더 */}
        <div className="bg-navy-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-[68px] items-center justify-between">
              {/* 로고 */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <div className="bg-white rounded-xl px-3 py-1.5">
                  <Image src="/logo.png" alt="한영자 희망 장학재단" width={180} height={44} className="h-10 w-auto object-contain" />
                </div>
              </Link>

              {/* 데스크탑 GNB */}
              <nav className="hidden lg:flex h-full items-stretch">
                {navItems.map((item) => (
                  <div
                    key={item.href}
                    className="relative flex items-stretch"
                    onMouseEnter={() => handleMouseEnter(item.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-5 text-[15px] font-medium transition-colors",
                        "border-b-2 border-transparent",
                        activeMenu === item.href
                          ? "text-white border-gold"
                          : "text-white/70 hover:text-white hover:border-white/30"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          activeMenu === item.href ? "rotate-180 text-gold" : "text-white/40"
                        )}
                      />
                    </Link>

                    {/* 드롭다운 */}
                    <div
                      className={cn(
                        "absolute top-full left-0 min-w-[168px] pt-px transition-all duration-200 origin-top",
                        activeMenu === item.href
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      )}
                    >
                      <div className="bg-white rounded-b-xl shadow-xl shadow-navy-950/15 border border-navy-100 border-t-2 border-t-gold overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-[13px] text-navy-700 hover:bg-navy-50 hover:text-primary transition-colors border-b border-navy-50 last:border-0"
                            onClick={() => setActiveMenu(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </nav>

              {/* CTA + 모바일 토글 */}
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  variant="gold"
                  size="sm"
                  className="hidden lg:inline-flex rounded-full font-semibold px-5 text-[13px]"
                >
                  <Link href="/scholarship/apply">장학생 지원하기</Link>
                </Button>

                <button
                  className="lg:hidden p-2 text-white/80 hover:text-white"
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  aria-label={isMobileOpen ? "메뉴 닫기" : "메뉴 열기"}
                >
                  {isMobileOpen
                    ? <X className="h-6 w-6" />
                    : <Menu className="h-6 w-6" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* 딤 배경 */}
        <div
          className={cn(
            "absolute inset-0 bg-navy-950/70 transition-opacity duration-300",
            isMobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* 슬라이드 패널 */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-full bg-navy-900 shadow-2xl",
            "transition-transform duration-300",
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 h-[105px] border-b border-navy-700">
            <Link href="/" onClick={() => setIsMobileOpen(false)}>
              <div className="bg-white rounded-xl px-3 py-1.5">
                <Image src="/logo.png" alt="한영자 희망 장학재단" width={150} height={36} className="h-9 w-auto object-contain" />
              </div>
            </Link>
            <button onClick={() => setIsMobileOpen(false)} className="p-1.5 text-white/60 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="overflow-y-auto h-[calc(100%-105px)] pb-8">
            {navItems.map((item) => (
              <div key={item.href} className="border-b border-navy-800">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-[14px] font-medium text-white/80 hover:text-white"
                  onClick={() =>
                    setOpenMobileMenu(openMobileMenu === item.href ? null : item.href)
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-white/40 transition-transform duration-200",
                      openMobileMenu === item.href && "rotate-180 text-gold"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openMobileMenu === item.href ? "max-h-64" : "max-h-0"
                  )}
                >
                  <div className="bg-navy-950/40 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-8 py-2.5 text-[13px] text-white/55 hover:text-gold transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="p-5">
              <Button asChild variant="gold" className="w-full rounded-full font-semibold">
                <Link href="/scholarship/apply" onClick={() => setIsMobileOpen(false)}>
                  장학생 지원하기
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
