"use client";

import { useState, useEffect, useCallback } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Trash2, Plus, Pin, Loader2 } from "lucide-react";

interface CmsNotice {
  id: string;
  title: string;
  date: string;
  category: "공지" | "모집" | "행사" | "결과";
  isPinned: boolean;
  content: string;
  createdAt: string;
}

function NoticesManager({ password }: { password: string }) {
  const [notices, setNotices] = useState<CmsNotice[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  // 폼 상태
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [category, setCategory] = useState<CmsNotice["category"]>("공지");
  const [isPinned, setIsPinned] = useState(false);
  const [content, setContent] = useState("");

  const fetchNotices = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/notices", {
        headers: { "x-admin-password": password },
      });
      if (res.ok) {
        const data = await res.json();
        setNotices(data.notices ?? []);
      }
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSubmitting(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/notices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ title, date, category, isPinned, content }),
      });
      if (res.ok) {
        setMsg("✓ 공지사항이 등록되었습니다.");
        setTitle("");
        setDate(new Date().toISOString().slice(0, 10));
        setCategory("공지");
        setIsPinned(false);
        setContent("");
        fetchNotices();
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
    if (!confirm("이 공지사항을 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/admin/notices/${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password },
    });
    if (res.ok) fetchNotices();
  };

  const formatDate = (d: string) => d.replace(/-/g, ".");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* 헤더 */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-1">Admin</p>
        <h1 className="text-2xl font-bold text-navy-900">공지사항 관리</h1>
        <p className="text-[13px] text-navy-500 mt-1">공지사항을 등록하거나 삭제할 수 있습니다.</p>
      </div>

      {/* 등록 폼 */}
      <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-[15px] font-bold text-navy-900 mb-5 flex items-center gap-2">
          <Plus className="h-4 w-4 text-gold" />
          새 공지 등록
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-[12px] font-semibold text-navy-600 mb-1.5">제목 *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="공지사항 제목"
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

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-semibold text-navy-600 mb-1.5">카테고리</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CmsNotice["category"])}
                className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14px] text-navy-900 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
              >
                <option value="공지">공지</option>
                <option value="모집">모집</option>
                <option value="행사">행사</option>
                <option value="결과">결과</option>
              </select>
            </div>
            <div className="flex items-end pb-0.5">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPinned}
                  onChange={(e) => setIsPinned(e.target.checked)}
                  className="h-4 w-4 rounded accent-gold"
                />
                <span className="text-[14px] text-navy-700 font-medium">상단 고정 공지</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-navy-600 mb-1.5">
              내용 <span className="text-navy-400 font-normal">(HTML 또는 일반 텍스트)</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="공지 내용을 입력하세요. 줄바꿈은 그대로 표시됩니다."
              rows={8}
              className="w-full rounded-xl border border-navy-200 px-4 py-3 text-[14px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-y"
            />
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
                등록
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* 목록 */}
      <div className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-navy-100 flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-navy-900">등록된 공지사항</h2>
          <span className="text-[13px] text-navy-400">총 {notices.length}건</span>
        </div>

        {loading ? (
          <div className="py-16 flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-navy-300" />
          </div>
        ) : notices.length === 0 ? (
          <div className="py-16 text-center text-[14px] text-navy-400">
            등록된 공지사항이 없습니다.
          </div>
        ) : (
          <ul className="divide-y divide-navy-50">
            {notices.map((notice) => (
              <li
                key={notice.id}
                className="flex items-start gap-4 px-6 py-4 hover:bg-navy-50/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      notice.category === "모집"
                        ? "bg-gold/15 text-gold border border-gold/30"
                        : "bg-navy-100 text-navy-600 border border-navy-200"
                    }`}>
                      {notice.category}
                    </span>
                    {notice.isPinned && (
                      <span className="flex items-center gap-1 text-[11px] text-gold">
                        <Pin className="h-3 w-3" /> 고정
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] font-medium text-navy-800 line-clamp-1">{notice.title}</p>
                  <p className="text-[12px] text-navy-400 mt-0.5">{formatDate(notice.date)}</p>
                </div>
                <button
                  onClick={() => handleDelete(notice.id)}
                  className="flex-shrink-0 flex items-center gap-1.5 text-[12px] text-navy-400 hover:text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function AdminNoticesPage() {
  return (
    <AdminShell>
      {(password) => <NoticesManager password={password} />}
    </AdminShell>
  );
}
