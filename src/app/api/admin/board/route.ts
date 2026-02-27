import { NextRequest, NextResponse } from "next/server";
import { readCollection, writeCollection } from "@/lib/cms-storage";
import type { CmsBoardResult } from "@/lib/cms-storage";

const PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";

function authorized(req: NextRequest): boolean {
  return req.headers.get("x-admin-password") === PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }
  const results = await readCollection<CmsBoardResult>("board");
  return NextResponse.json({ results });
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }
  const body = await req.json();
  const { title, date, meetingNumber, meetingType, agenda, content } = body;

  if (!title?.trim() || !date?.trim()) {
    return NextResponse.json({ error: "제목과 날짜는 필수입니다." }, { status: 400 });
  }

  // agenda: 줄바꿈 구분 문자열 → 배열
  const agendaArr: string[] =
    typeof agenda === "string"
      ? agenda
          .split("\n")
          .map((s: string) => s.trim())
          .filter(Boolean)
      : Array.isArray(agenda)
      ? agenda
      : [];

  const results = await readCollection<CmsBoardResult>("board");
  const newResult: CmsBoardResult = {
    id: Date.now().toString(),
    title: title.trim(),
    date,
    meetingNumber: Number(meetingNumber) || 1,
    meetingType: meetingType ?? "정기",
    agenda: agendaArr,
    content: content ?? "",
    createdAt: new Date().toISOString(),
  };

  results.unshift(newResult);
  await writeCollection("board", results);
  return NextResponse.json({ result: newResult }, { status: 201 });
}
