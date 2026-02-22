import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "미디어 센터 | 한영자 희망 장학재단",
};

export default function YoutubePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Media Center</p>
            <h1 className="text-3xl font-bold text-white font-heading">미디어 센터</h1>
            <p className="mt-2 text-sm text-white/50">
              재단 유튜브 채널과 포토갤러리를 만나보세요.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 space-y-8">

          {/* 유튜브 채널 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-navy-900 font-heading">유튜브 채널</h2>
            </div>

            <div className="rounded-xl bg-navy-50 border border-navy-100 p-10 text-center">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">채널 준비 중</h3>
              <p className="text-[14px] text-navy-500 max-w-sm mx-auto">
                한영자 희망 장학재단 유튜브 채널이 곧 개설됩니다.
                재단 설립 후 장학금 수여식, 멘토링 활동, 장학생 인터뷰 등
                다양한 영상을 제공할 예정입니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center text-[13px] text-navy-400">
                <span className="rounded-full bg-white border border-navy-100 px-3 py-1.5">수여식 영상</span>
                <span className="rounded-full bg-white border border-navy-100 px-3 py-1.5">장학생 인터뷰</span>
                <span className="rounded-full bg-white border border-navy-100 px-3 py-1.5">멘토링 현장</span>
                <span className="rounded-full bg-white border border-navy-100 px-3 py-1.5">재단 소개</span>
              </div>
            </div>
          </div>

          {/* 포토갤러리 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              포토갤러리
            </h2>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-10 text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">사진 자료 준비 중</h3>
              <p className="text-[14px] text-navy-500 max-w-sm mx-auto">
                2026년 재단 출범식 및 장학금 수여식 이후
                사진 자료가 순차적으로 등록될 예정입니다.
              </p>
            </div>
          </div>

          {/* 공지사항 연결 */}
          <div className="flex items-center justify-between bg-white rounded-2xl border border-navy-100 px-6 py-5">
            <div>
              <p className="text-[15px] font-bold text-navy-900">재단 소식 확인하기</p>
              <p className="text-[13px] text-navy-400 mt-0.5">공지사항에서 최신 재단 소식을 확인하세요.</p>
            </div>
            <Link
              href="/news/notice"
              className="flex-shrink-0 rounded-full bg-navy-900 text-white text-[13px] font-semibold px-5 py-2.5 hover:bg-navy-800 transition-colors"
            >
              공지사항 →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
