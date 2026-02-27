"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Trash2, Plus, Loader2, ImageIcon } from "lucide-react";
import Image from "next/image";

interface CmsGalleryPhoto {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  filename: string;
  createdAt: string;
}

function GalleryManager({ password }: { password: string }) {
  const [photos, setPhotos] = useState<CmsGalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState("");

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/gallery", {
        headers: { "x-admin-password": password },
      });
      if (res.ok) {
        const data = await res.json();
        setPhotos(data.photos ?? []);
      }
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setMsg("이미지 파일을 선택해 주세요.");
      return;
    }

    setSubmitting(true);
    setMsg("");
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("date", date);
      fd.append("description", description);
      fd.append("image", file);

      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "x-admin-password": password },
        body: fd,
      });
      if (res.ok) {
        setMsg("✓ 사진이 등록되었습니다.");
        setTitle("");
        setDate(new Date().toISOString().slice(0, 10));
        setDescription("");
        setPreview(null);
        if (fileRef.current) fileRef.current.value = "";
        fetchPhotos();
      } else {
        const err = await res.json();
        setMsg(`오류: ${err.error}`);
      }
    } catch {
      setMsg("서버 오류가 발생했습니다.");
    }
    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("이 사진을 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/admin/gallery/${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password },
    });
    if (res.ok) fetchPhotos();
  };

  const formatDate = (d: string) => d.replace(/-/g, ".");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-1">Admin</p>
        <h1 className="text-2xl font-bold text-navy-900">포토갤러리 관리</h1>
        <p className="text-[13px] text-navy-500 mt-1">행사 사진을 업로드하거나 삭제할 수 있습니다.</p>
      </div>

      {/* 등록 폼 */}
      <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-[15px] font-bold text-navy-900 mb-5 flex items-center gap-2">
          <Plus className="h-4 w-4 text-gold" />
          사진 등록
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-[12px] font-semibold text-navy-600 mb-1.5">제목 *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="예: 2026 제1기 장학금 수여식"
                required
                className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-navy-600 mb-1.5">날짜 *</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14px] text-navy-900 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-navy-600 mb-1.5">설명</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="사진에 대한 간단한 설명"
              className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>

          {/* 이미지 업로드 */}
          <div>
            <label className="block text-[12px] font-semibold text-navy-600 mb-1.5">
              이미지 파일 * <span className="text-navy-400 font-normal">(JPG, PNG, WEBP, GIF)</span>
            </label>
            <div className="flex gap-4 items-start">
              <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-navy-200 rounded-xl py-8 cursor-pointer hover:border-gold hover:bg-gold/5 transition-colors">
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {preview ? (
                  <Image src={preview} alt="미리보기" width={200} height={120} className="h-32 w-auto object-contain rounded-lg" unoptimized />
                ) : (
                  <>
                    <ImageIcon className="h-8 w-8 text-navy-300 mb-2" />
                    <p className="text-[13px] text-navy-400">클릭하여 이미지 선택</p>
                  </>
                )}
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {msg && (
              <p className={`text-[13px] ${msg.startsWith("✓") ? "text-green-600" : "text-red-600"}`}>
                {msg}
              </p>
            )}
            <div className="ml-auto">
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 rounded-xl bg-navy-900 text-white text-[14px] font-semibold px-6 py-2.5 hover:bg-navy-700 disabled:opacity-50 transition-colors"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                업로드
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* 사진 목록 */}
      <div className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-navy-100 flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-navy-900">등록된 사진</h2>
          <span className="text-[13px] text-navy-400">총 {photos.length}장</span>
        </div>

        {loading ? (
          <div className="py-16 flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-navy-300" />
          </div>
        ) : photos.length === 0 ? (
          <div className="py-16 text-center text-[14px] text-navy-400">
            등록된 사진이 없습니다.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative rounded-xl overflow-hidden border border-navy-100">
                <div className="aspect-[4/3] bg-navy-50 relative">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-3">
                  <p className="text-[13px] font-medium text-navy-800 line-clamp-1">{photo.title}</p>
                  <p className="text-[11px] text-navy-400 mt-0.5">{formatDate(photo.date)}</p>
                  {photo.description && (
                    <p className="text-[11px] text-navy-500 mt-0.5 line-clamp-1">{photo.description}</p>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="absolute top-2 right-2 flex items-center gap-1 text-[11px] bg-red-500 text-white px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-3 w-3" />
                  삭제
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminGalleryPage() {
  return (
    <AdminShell>
      {(password) => <GalleryManager password={password} />}
    </AdminShell>
  );
}
