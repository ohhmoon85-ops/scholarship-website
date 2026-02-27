import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { readCollection } from "@/lib/cms-storage";
import type { CmsGalleryPhoto } from "@/lib/cms-storage";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "포토갤러리 | 한영자 희망 장학재단",
};

export const revalidate = 60;

function formatDate(d: string) {
  return d.replace(/-/g, ".");
}

export default async function GalleryPage() {
  const photos = await readCollection<CmsGalleryPhoto>("gallery");
  const sorted = [...photos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Photo Gallery</p>
            <h1 className="text-3xl font-bold text-white font-heading">포토갤러리</h1>
            <p className="mt-2 text-sm text-white/50">재단 행사 및 활동 사진을 공유합니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          {sorted.length === 0 ? (
            <div className="flex flex-col items-center text-center py-20">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-100 mb-6">
                <Camera className="h-9 w-9 text-navy-400" />
              </div>
              <h2 className="text-xl font-bold text-navy-900 font-heading mb-3">사진을 준비 중입니다</h2>
              <p className="text-[15px] text-navy-500 leading-relaxed max-w-sm">
                2026년 재단 출범식 및 장학금 수여식 이후<br />
                사진 자료가 순차적으로 등록될 예정입니다.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {sorted.map((photo) => (
                  <div
                    key={photo.id}
                    className="group bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[4/3] bg-navy-100 relative overflow-hidden">
                      <Image
                        src={photo.imageUrl}
                        alt={photo.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-[13px] font-semibold text-navy-900 line-clamp-1">{photo.title}</p>
                      <p className="text-[11px] text-navy-400 mt-0.5">{formatDate(photo.date)}</p>
                      {photo.description && (
                        <p className="text-[11px] text-navy-500 mt-1 line-clamp-2">{photo.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-navy-400 text-right">총 {sorted.length}장</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
