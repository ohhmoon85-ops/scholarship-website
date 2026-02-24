import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;
    const name = (formData.get("name") as string | null)?.trim();
    const email = (formData.get("email") as string | null)?.trim();
    const school = (formData.get("school") as string | null)?.trim();
    const department = (formData.get("department") as string | null)?.trim();

    if (!file || !name || !school || !department) {
      return NextResponse.json(
        { error: "이름, 학교, 학과, 파일은 필수 입력 항목입니다." },
        { status: 400 }
      );
    }

    // ZIP 파일 유효성 검사
    if (!file.name.toLowerCase().endsWith(".zip")) {
      return NextResponse.json(
        { error: "ZIP 형식의 파일만 업로드 가능합니다." },
        { status: 400 }
      );
    }

    // 파일 크기 검사 (50MB)
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { error: "파일 크기는 50MB를 초과할 수 없습니다." },
        { status: 400 }
      );
    }

    // 업로드 디렉토리 생성
    const uploadsDir = path.join(process.cwd(), "uploads", "applications");
    await mkdir(uploadsDir, { recursive: true });

    // 파일명 생성 (타임스탬프 + 이름)
    const timestamp = new Date()
      .toISOString()
      .replace(/[T:.]/g, "-")
      .slice(0, 19);
    const safeName = name.replace(/[^\uAC00-\uD7A3a-zA-Z0-9]/g, "_");
    const savedFilename = `${timestamp}_${safeName}.zip`;

    // 파일 저장
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(path.join(uploadsDir, savedFilename), buffer);

    // 메타데이터 저장
    const meta = {
      name,
      email: email ?? "",
      school,
      department,
      originalFilename: file.name,
      savedFilename,
      fileSize: file.size,
      uploadedAt: new Date().toISOString(),
    };
    const metaFilename = savedFilename.replace(".zip", ".json");
    await writeFile(
      path.join(uploadsDir, metaFilename),
      JSON.stringify(meta, null, 2),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      message: "신청서가 성공적으로 접수되었습니다.",
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "업로드 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
