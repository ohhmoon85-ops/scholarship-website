import Link from "next/link";
import { BookOpen, Phone, Mail, MapPin, Clock } from "lucide-react";

const footerNav = [
  {
    title: "재단 소개",
    links: [
      { label: "설립목적 및 연혁", href: "/about/history" },
      { label: "이사장 인사말", href: "/about/greeting" },
      { label: "조직 및 임원", href: "/about/organization" },
      { label: "재단 연보", href: "/about/annual-report" },
    ],
  },
  {
    title: "장학 사업",
    links: [
      { label: "장학 사업 안내", href: "/scholarship/overview" },
      { label: "장학금 종류", href: "/scholarship/types" },
      { label: "장학생 현황", href: "/scholarship/status" },
      { label: "장학 신청", href: "/scholarship/apply" },
    ],
  },
  {
    title: "재단 소식",
    links: [
      { label: "공지사항", href: "/news/notice" },
      { label: "이사회 결과", href: "/news/board" },
      { label: "언론보도", href: "/news/press" },
    ],
  },
  {
    title: "미디어 센터",
    links: [
      { label: "유튜브 채널", href: "/media/youtube" },
      { label: "포토갤러리", href: "/media/gallery" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">

      {/* ── 메인 푸터 ── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">

          {/* 왼쪽: 재단 정보 */}
          <div className="space-y-6">
            {/* 로고 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold shadow">
                <BookOpen className="h-5 w-5 text-navy-950" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white font-heading leading-none">
                  한영자 희망 장학재단
                </p>
                <p className="text-[10px] text-white/35 mt-0.5">Hanyoungja Hope Scholarship Foundation</p>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="grid gap-2.5 text-[13px] text-white/50">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-white/30" />
                <span>서울특별시 (주소 확정 후 업데이트 예정)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 flex-shrink-0 text-white/30" />
                <span>대표전화 <span className="text-white/70">추후 안내 예정</span></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 flex-shrink-0 text-white/30" />
                <span>이메일 <span className="text-white/70">추후 안내 예정</span></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-white/30" />
                <span>
                  평일 09:00 ~ 18:00
                  <span className="text-white/30">&nbsp;(토·일·공휴일 휴무)</span>
                </span>
              </div>
            </div>

            {/* 후원 기관 */}
            <div className="pt-5 border-t border-white/8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">
                후원 기관 (삼양그룹)
              </p>
              <div className="flex flex-wrap gap-2">
                {["㈜제오홀딩스", "삼양화학공업㈜", "㈜삼양정밀화학"].map((name) => (
                  <span
                    key={name}
                    className="text-[12px] text-white/45 border border-white/10 rounded-md px-2.5 py-1"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* 법적 정보 */}
            <p className="text-[12px] text-white/20">
              이사장: 전동진 (내정) &nbsp;|&nbsp; 재단법인 등록 절차 진행 중
            </p>
          </div>

          {/* 오른쪽: 사이트맵 */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h4 className="mb-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-gold">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/40 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 하단 바 ── */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <Link href="/privacy" className="text-[12px] font-semibold text-white/50 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/terms" className="text-[12px] text-white/35 hover:text-white/60 transition-colors">
                이용약관
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/community/contact" className="text-[12px] text-white/35 hover:text-white/60 transition-colors">
                문의하기
              </Link>
            </div>
            <p className="text-[12px] text-white/20 flex-shrink-0">
              © {new Date().getFullYear()} 한영자 희망 장학재단. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
