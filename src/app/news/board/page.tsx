import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { readCollection } from "@/lib/cms-storage";
import type { CmsBoardResult } from "@/lib/cms-storage";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "이사회 결과 | 한영자 희망 장학재단",
};

export const revalidate = 60;

function formatDate(d: string) {
  return d.replace(/-/g, ".");
}

export default async function BoardPage() {
  const results = await readCollection<CmsBoardResult>("board");
  const sorted = [...results].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Board Results</p>
            <h1 className="text-3xl font-bold text-white font-heading">이사회 결과</h1>
            <p className="mt-2 text-sm text-white/50">이사회 개최 결과 및 의결 사항을 공개합니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {sorted.length === 0 ? (
            <div className="bg-white rounded-2xl border border-navy-100 shadow-sm py-20 text-center">
              <p className="text-navy-500 text-[15px]">
                이사회 결과 공개 페이지를 준비하고 있습니다.<br />
                재단 법인 설립 및 첫 이사회 개최 후 게시될 예정입니다.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {sorted.map((result) => (
                <details
                  key={result.id}
                  className="group bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden"
                >
                  <summary className="flex items-start gap-4 px-6 py-5 cursor-pointer hover:bg-navy-50/50 transition-colors list-none">
                    <div className="flex-shrink-0 mt-0.5">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-navy-100 text-navy-600 border border-navy-200">
                        제{result.meetingNumber}회 {result.meetingType}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-bold text-navy-900">{result.title}</p>
                      <p className="text-[13px] text-navy-400 mt-1">{formatDate(result.date)}</p>
                      {result.agenda.length > 0 && (
                        <p className="text-[12px] text-navy-500 mt-1">
                          의결 안건 {result.agenda.length}건
                        </p>
                      )}
                    </div>
                    <ChevronDown className="flex-shrink-0 h-5 w-5 text-navy-300 mt-0.5 transition-transform group-open:rotate-180" />
                  </summary>

                  <div className="border-t border-navy-100 px-6 py-6 space-y-5">
                    {result.agenda.length > 0 && (
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-widest text-navy-400 mb-3">
                          의결 안건
                        </p>
                        <ul className="space-y-2">
                          {result.agenda.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-[14px] text-navy-700">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {result.content && (
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-widest text-navy-400 mb-3">
                          회의 결과
                        </p>
                        <div
                          className="text-[14.5px] text-navy-700 leading-relaxed whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{
                            __html:
                              result.content.includes("<") && result.content.includes(">")
                                ? result.content
                                : result.content.replace(/\n/g, "<br />"),
                          }}
                        />
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          )}
          <p className="mt-6 text-xs text-navy-400 text-right">총 {sorted.length}건</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
