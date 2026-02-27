"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, LogOut } from "lucide-react";

interface AdminShellProps {
  children: (password: string) => React.ReactNode;
}

const navLinks = [
  { label: "공지사항", href: "/admin/notices" },
  { label: "이사회 결과", href: "/admin/board" },
  { label: "포토갤러리", href: "/admin/gallery" },
  { label: "장학 신청서", href: "/admin/applications" },
];

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const [password, setPassword] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cms_password");
    if (saved) setPassword(saved);
    setHydrated(true);
  }, []);

  const handleLogin = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: inputPw }),
      });
      if (res.ok) {
        localStorage.setItem("cms_password", inputPw);
        setPassword(inputPw);
      } else {
        setError("비밀번호가 올바르지 않습니다.");
      }
    } catch {
      setError("서버 연결 오류가 발생했습니다.");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("cms_password");
    setPassword("");
  };

  // 하이드레이션 전 렌더 방지
  if (!hydrated) return null;

  if (!password) {
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
              콘텐츠 관리 페이지입니다.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={inputPw}
                onChange={(e) => setInputPw(e.target.value)}
                placeholder="관리자 비밀번호"
                required
                className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[14.5px] text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
              />
              {error && <p className="text-[13px] text-red-600">{error}</p>}
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
    <div className="min-h-screen bg-navy-50">
      {/* 관리자 네비게이션 바 */}
      <div className="bg-navy-900 sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold flex-shrink-0">
                Admin CMS
              </span>
              <nav className="flex gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "text-[13px] font-medium px-3 py-1.5 rounded-lg transition-colors",
                      pathname === link.href
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white/70 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {children(password)}
    </div>
  );
}
