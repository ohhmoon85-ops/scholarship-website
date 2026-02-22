import Link from "next/link";
import { BookOpen, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

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
      { label: "지원 신청", href: "/scholarship/apply" },
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

      {/* ── 기부/후원 배너 ── */}
      <div className="border-b border-white/5 bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15 border border-gold/30">
                <span className="text-gold text-base font-bold">♥</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">함께 만드는 장학재단</p>
                <p className="text-xs text-white/50 mt-0.5">
                  기부금은 전액 장학금으로 사용되며, 세제 혜택을 받으실 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 rounded-full bg-gold text-navy-950 text-xs font-semibold px-4 py-2 hover:bg-gold-light transition-colors"
              >
                기부·후원하기
              </Link>
              <Link
                href="/donate/receipt"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 text-white text-xs px-4 py-2 hover:bg-white/10 transition-colors"
              >
                기부금 영수증 안내
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

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
                <p className="text-[15px] font-bold text-white font-heading leading-none">장학재단</p>
                <p className="text-[10px] text-white/35 mt-0.5">Scholarship Foundation</p>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="grid gap-2.5 text-[13px] text-white/50">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-white/30" />
                <span>서울특별시 종로구 세종대로 1길 123, 재단빌딩 5층</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 flex-shrink-0 text-white/30" />
                <span>
                  대표전화&nbsp;
                  <Link href="tel:0212345678" className="hover:text-white transition-colors">
                    02-1234-5678
                  </Link>
                  &nbsp;|&nbsp;팩스 02-1234-5679
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 flex-shrink-0 text-white/30" />
                <Link href="mailto:info@scholarship.or.kr" className="hover:text-white transition-colors">
                  info@scholarship.or.kr
                </Link>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-white/30" />
                <span>
                  평일 09:00 ~ 18:00&nbsp;
                  <span className="text-white/30">(점심 12:00 ~ 13:00 · 토·일·공휴일 휴무)</span>
                </span>
              </div>
            </div>

            {/* 법적 정보 */}
            <p className="text-[12px] text-white/25">
              대표이사: 홍길동 &nbsp;|&nbsp; 사업자등록번호: 123-45-67890 &nbsp;|&nbsp;
              고유번호: 101-82-12345
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
                        className="text-[13px] text-white/45 hover:text-white transition-colors"
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
            {/* 정책 링크 */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <Link href="/privacy" className="text-[12px] font-semibold text-white/60 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/terms" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
                이용약관
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/sitemap" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
                사이트맵
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/donate/receipt" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
                기부금 영수증 발급
              </Link>
              <span className="text-white/15 text-xs">|</span>
              <Link href="/community/contact" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
                문의하기
              </Link>
            </div>
            <p className="text-[12px] text-white/25 flex-shrink-0">
              © {new Date().getFullYear()} 장학재단. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
