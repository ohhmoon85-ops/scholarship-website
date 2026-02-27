import { NextRequest, NextResponse } from "next/server";
import { unlink } from "fs/promises";
import path from "path";
import { readCollection, writeCollection } from "@/lib/cms-storage";
import type { CmsGalleryPhoto } from "@/lib/cms-storage";

const PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (req.headers.get("x-admin-password") !== PASSWORD) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }
  const { id } = await params;
  const photos = await readCollection<CmsGalleryPhoto>("gallery");
  const target = photos.find((p) => p.id === id);
  if (!target) {
    return NextResponse.json({ error: "찾을 수 없습니다." }, { status: 404 });
  }

  // 이미지 파일 삭제
  try {
    const imgPath = path.join(process.cwd(), "uploads", "gallery", target.filename);
    await unlink(imgPath);
  } catch {
    // 파일이 없어도 계속 진행
  }

  const filtered = photos.filter((p) => p.id !== id);
  await writeCollection("gallery", filtered);
  return NextResponse.json({ success: true });
}
