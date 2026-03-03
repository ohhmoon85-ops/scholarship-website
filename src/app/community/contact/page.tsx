import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "문의하기 | 한영자 희망 장학재단",
};

const contactItems = [
  {
    Icon: MapPin,
    label: "주소",
    value: "서울특별시 서초구 반포대로27길 16, 박빌딩 9층 (우편번호: 06655)",
  },
  {
    Icon: Phone,
    label: "대표전화",
    value: "02-3488-5551  |  팩스 02-521-3107",
  },
  {
    Icon: Mail,
    label: "이메일",
    value: "dongjin6445@gmail.com",
  },
  {
    Icon: Clock,
    label: "운영시간",
    value: "평일 09:00 ~ 18:00 (토·일·공휴일 휴무)",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Contact</p>
            <h1 className="text-3xl font-bold text-white font-heading">문의하기</h1>
            <p className="mt-2 text-sm text-white/50">재단에 궁금한 점을 문의해 주세요.</p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 space-y-8">

          {/* 연락처 안내 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              연락처 안내
            </h2>
            <div className="space-y-4">
              {contactItems.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 py-4 border-b border-navy-50 last:border-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-50 flex-shrink-0">
                    <Icon className="h-4 w-4 text-navy-500" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-navy-400 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-[15px] text-navy-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-gold/5 border border-gold/20 px-5 py-4 text-[13.5px] text-navy-700">
              <strong className="text-navy-900">※ 안내</strong> — 장학 신청과 관련한 문의는 위 연락처로 평일 업무시간 내에 연락해 주시기 바랍니다.
            </div>
          </div>

          {/* 자주 묻는 질문 링크 */}
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-navy-900 font-heading mb-5 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-gold inline-block" />
              문의 전 확인해 보세요
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "장학 사업 안내", href: "/scholarship/overview", desc: "사업 목적 및 지원 규모" },
                { label: "장학 신청 안내", href: "/scholarship/apply", desc: "신청 자격 및 절차" },
                { label: "선발 기준", href: "/scholarship/criteria", desc: "심사 기준 및 원칙" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-navy-100 bg-navy-50 px-5 py-4 hover:border-gold/40 hover:bg-white transition-all group"
                >
                  <p className="text-[14px] font-bold text-navy-900 group-hover:text-primary transition-colors">{item.label}</p>
                  <p className="text-[12px] text-navy-400 mt-0.5">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
