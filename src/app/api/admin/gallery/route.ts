import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { readCollection, writeCollection } from "@/lib/cms-storage";
import type { CmsGalleryPhoto } from "@/lib/cms-storage";

const PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";

function authorized(req: NextRequest): boolean {
  return req.headers.get("x-admin-password") === PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }
  const photos = await readCollection<CmsGalleryPhoto>("gallery");
  return NextResponse.json({ photos });
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }

  const formData = await req.formData();
  const title = (formData.get("title") as string | null)?.trim();
  const date = (formData.get("date") as string | null)?.trim();
  const description = (formData.get("description") as string | null)?.trim() ?? "";
  const file = formData.get("image") as File | null;

  if (!title || !date) {
    return NextResponse.json({ error: "제목과 날짜는 필수입니다." }, { status: 400 });
  }
  if (!file) {
    return NextResponse.json({ error: "이미지 파일을 선택해 주세요." }, { status: 400 });
  }

  // 이미지 확장자 확인
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const allowed = ["jpg", "jpeg", "png", "webp", "gif"];
  if (!allowed.includes(ext)) {
    return NextResponse.json(
      { error: "JPG, PNG, WEBP, GIF 형식만 업로드 가능합니다." },
      { status: 400 }
    );
  }

  // 파일 저장
  const galleryDir = path.join(process.cwd(), "uploads", "gallery");
  await mkdir(galleryDir, { recursive: true });

  const timestamp = Date.now();
  const filename = `${timestamp}.${ext}`;
  const bytes = await file.arrayBuffer();
  await writeFile(path.join(galleryDir, filename), Buffer.from(bytes));

  const photos = await readCollection<CmsGalleryPhoto>("gallery");
  const newPhoto: CmsGalleryPhoto = {
    id: timestamp.toString(),
    title,
    date,
    description,
    imageUrl: `/api/gallery/image/${filename}`,
    filename,
    createdAt: new Date().toISOString(),
  };

  photos.unshift(newPhoto);
  await writeCollection("gallery", photos);
  return NextResponse.json({ photo: newPhoto }, { status: 201 });
}
