import { NextRequest, NextResponse } from "next/server";
import { readCollection, writeCollection } from "@/lib/cms-storage";
import type { CmsBoardResult } from "@/lib/cms-storage";

const PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (req.headers.get("x-admin-password") !== PASSWORD) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }
  const { id } = await params;
  const results = await readCollection<CmsBoardResult>("board");
  const filtered = results.filter((r) => r.id !== id);
  if (filtered.length === results.length) {
    return NextResponse.json({ error: "찾을 수 없습니다." }, { status: 404 });
  }
  await writeCollection("board", filtered);
  return NextResponse.json({ success: true });
}
