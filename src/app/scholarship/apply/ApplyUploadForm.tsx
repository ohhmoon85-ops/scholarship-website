"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Upload, CheckCircle, AlertCircle, FileArchive, X } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ApplyUploadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    if (selected && !selected.name.toLowerCase().endsWith(".zip")) {
      setMessage("ZIP 파일만 업로드 가능합니다.");
      setStatus("error");
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (selected && selected.size > 50 * 1024 * 1024) {
      setMessage("파일 크기는 50MB를 초과할 수 없습니다.");
      setStatus("error");
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setFile(selected);
    setStatus("idle");
    setMessage("");
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setMessage("ZIP 파일을 선택해 주세요.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/apply/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setFile(null);
        (e.target as HTMLFormElement).reset();
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setStatus("error");
        setMessage(data.error ?? "오류가 발생했습니다.");
      }
    } catch {
      setStatus("error");
      setMessage("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-14 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-5">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-navy-900 font-heading mb-2">
          신청이 완료되었습니다
        </h3>
        <p className="text-[14.5px] text-navy-500 leading-relaxed max-w-sm">
          {message}
          <br />
          심사 결과는 추후 이메일로 개별 안내해 드립니다.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-navy-200 px-5 py-2 text-[13px] text-navy-600 hover:border-navy-400 transition-colors"
        >
          다시 신청하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 이름 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-navy-700 mb-1.5">
            신청자 이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="홍길동"
            className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14.5px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-navy-700 mb-1.5">
            이메일
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14.5px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>
      </div>

      {/* 학교 / 학과 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-navy-700 mb-1.5">
            학교명 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="school"
            required
            placeholder="○○대학교"
            className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14.5px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-navy-700 mb-1.5">
            학과(부) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="department"
            required
            placeholder="경영학과"
            className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14.5px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>
      </div>

      {/* 파일 업로드 */}
      <div>
        <label className="block text-[13px] font-semibold text-navy-700 mb-1.5">
          서류 파일 (ZIP) <span className="text-red-500">*</span>
        </label>
        <p className="text-[12px] text-navy-400 mb-2">
          제출 서류를 하나의 ZIP 파일로 압축하여 업로드해 주세요. 최대 50MB
        </p>

        {file ? (
          <div className="flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/5 px-4 py-3">
            <FileArchive className="h-5 w-5 text-gold flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[13.5px] font-semibold text-navy-800 truncate">
                {file.name}
              </p>
              <p className="text-[11px] text-navy-400">
                {(file.size / 1024 / 1024).toFixed(1)} MB
              </p>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="flex-shrink-0 rounded-full p-1 hover:bg-navy-100 transition-colors"
            >
              <X className="h-4 w-4 text-navy-400" />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-navy-200 bg-navy-50 px-6 py-8 cursor-pointer hover:border-gold/60 hover:bg-gold/5 transition-all group">
            <Upload className="h-8 w-8 text-navy-300 group-hover:text-gold transition-colors" />
            <div className="text-center">
              <p className="text-[14px] font-semibold text-navy-700 group-hover:text-navy-900 transition-colors">
                클릭하여 ZIP 파일 선택
              </p>
              <p className="text-[12px] text-navy-400 mt-0.5">
                또는 여기로 파일을 끌어다 놓으세요
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              name="file"
              accept=".zip"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>

      {/* 오류 메시지 */}
      {status === "error" && message && (
        <div className="flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-[13.5px] text-red-700">{message}</p>
        </div>
      )}

      {/* 동의 및 제출 */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer mb-5">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-gold"
          />
          <span className="text-[13px] text-navy-600 leading-relaxed">
            본인은 위에 입력한 정보가 사실임을 확인하며, 개인정보 수집·이용에
            동의합니다.
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto rounded-full bg-navy-900 text-white font-semibold text-[14px] px-8 py-3 hover:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              접수 중...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              신청서 제출하기
            </>
          )}
        </button>
      </div>
    </form>
  );
}
