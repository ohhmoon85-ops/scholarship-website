import { NextRequest, NextResponse } from "next/server";
import { readCollection, writeCollection } from "@/lib/cms-storage";
import type { CmsNotice } from "@/lib/cms-storage";

const PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";

function authorized(req: NextRequest): boolean {
  return req.headers.get("x-admin-password") === PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }
  const notices = await readCollection<CmsNotice>("notices");
  return NextResponse.json({ notices });
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }
  const body = await req.json();
  const { title, date, category, isPinned, content } = body;

  if (!title?.trim() || !date?.trim()) {
    return NextResponse.json({ error: "제목과 날짜는 필수입니다." }, { status: 400 });
  }

  const notices = await readCollection<CmsNotice>("notices");
  const newNotice: CmsNotice = {
    id: Date.now().toString(),
    title: title.trim(),
    date,
    category: category ?? "공지",
    isPinned: isPinned ?? false,
    content: content ?? "",
    createdAt: new Date().toISOString(),
  };

  notices.unshift(newNotice);
  await writeCollection("notices", notices);
  return NextResponse.json({ notice: newNotice }, { status: 201 });
}
