"use client";

import { useState } from "react";
import { Download, Search, FileArchive, LogIn, Calendar, MapPin, PackageOpen } from "lucide-react";

interface Application {
  region: string;
  originalFilename: string;
  savedFilename: string;
  fileSize: number;
  uploadedAt: string;
}

const BATCH_SIZE = 10;

export default function AdminApplicationsPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setLoading(true);
    setAuthError("");

    try {
      const res = await fetch(`/api/apply/list?password=${encodeURIComponent(password)}`);
      if (res.status === 401) {
        setAuthError("비밀번호가 올바르지 않습니다.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setApplications(data.applications ?? []);
      setAuthed(true);
    } catch {
      setAuthError("서버 연결 오류가 발생했습니다.");
    }
    setLoading(false);
  };

  // 개별 파일 다운로드
  const handleDownload = (filename: string) => {
    const url = `/api/apply/download?password=${encodeURIComponent(password)}&filename=${encodeURIComponent(filename)}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // 묶음(ZIP) 다운로드
  const handleBatchDownload = (batchIndex: number) => {
    const url = `/api/apply/download-zip?password=${encodeURIComponent(password)}&batch=${batchIndex}`;
    const a = document.createElement("a");
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatSize = (bytes: number) =>
    bytes >= 1024 * 1024
      ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
      : `${(bytes / 1024).toFixed(0)} KB`;

  // 10개 단위로 배치 분할
  const batchCount = Math.ceil(applications.length / BATCH_SIZE);
  const batches = Array.from({ length: batchCount }, (_, i) => ({
    index: i,
    start: i * BATCH_SIZE + 1,
    end: Math.min((i + 1) * BATCH_SIZE, applications.length),
  }));

  if (!authed) {
    return (
      <main className="min-h-screen bg-navy-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-8">
            <div className="flex justify-center mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900">
                <LogIn className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-center text-xl font-bold text-navy-900 mb-1">관리자 로그인</h1>
            <p className="text-center text-[13px] text-navy-400 mb-6">
              장학 신청서 관리 페이지입니다.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="관리자 비밀번호"
                required
                className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14.5px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
              />
              {authError && (
                <p className="text-[13px] text-red-600">{authError}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-navy-900 text-white font-semibold text-[14px] py-2.5 hover:bg-navy-700 disabled:opacity-50 transition-colors"
              >
                {loading ? "확인 중..." : "로그인"}
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-navy-50">
      <div className="bg-navy-900 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-1">Admin</p>
            <h1 className="text-2xl font-bold text-white">장학 신청서 관리</h1>
          </div>
          <span className="text-[13px] text-white/50">총 {applications.length}건</span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">

        {/* 묶음 다운로드 섹션 */}
        {applications.length > 0 && (
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <PackageOpen className="h-5 w-5 text-navy-400" />
              <h2 className="text-[15px] font-bold text-navy-900">묶음 다운로드</h2>
              <span className="text-[12px] text-navy-400">(10개 단위)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {batches.map((b) => (
                <button
                  key={b.index}
                  onClick={() => handleBatchDownload(b.index)}
                  className="flex items-center gap-2 rounded-xl bg-navy-900 text-white text-[13px] font-semibold px-4 py-2.5 hover:bg-navy-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  {b.start}~{b.end}번 묶음 ZIP
                </button>
              ))}
            </div>
            <p className="mt-3 text-[12px] text-navy-400">
              각 버튼을 클릭하면 해당 범위의 신청서 ZIP 파일이 하나의 ZIP으로 묶여서 다운로드됩니다.
            </p>
          </div>
        )}

        {/* 개별 신청서 목록 */}
        {applications.length === 0 ? (
          <div className="bg-white rounded-2xl border border-navy-100 shadow-sm p-16 text-center">
            <Search className="h-10 w-10 text-navy-200 mx-auto mb-4" />
            <p className="text-navy-500 text-[15px]">접수된 신청서가 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {applications.map((app, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-navy-100 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                {/* 번호 */}
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy-100 text-navy-500 text-[12px] font-bold">
                  {i + 1}
                </div>

                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50">
                  <FileArchive className="h-5 w-5 text-navy-400" />
                </div>

                <div className="flex-1 min-w-0 space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-0.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {app.region}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[12px] text-navy-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(app.uploadedAt)}
                    </span>
                    <span>{formatSize(app.fileSize)}</span>
                    <span className="truncate max-w-[200px]">{app.originalFilename}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(app.savedFilename)}
                  className="flex-shrink-0 flex items-center gap-2 rounded-full bg-navy-900 text-white text-[13px] font-semibold px-4 py-2 hover:bg-navy-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  개별 다운로드
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
