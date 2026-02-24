import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");
  const filename = searchParams.get("filename");

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }

  if (!filename || !filename.endsWith(".zip")) {
    return NextResponse.json({ error: "유효하지 않은 파일명" }, { status: 400 });
  }

  // 경로 순회 공격 방지: basename만 허용
  const safeName = path.basename(filename);
  const uploadsDir = path.join(process.cwd(), "uploads", "applications");

  try {
    const buffer = await readFile(path.join(uploadsDir, safeName));
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(safeName)}`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "파일을 찾을 수 없습니다." },
      { status: 404 }
    );
  }
}
