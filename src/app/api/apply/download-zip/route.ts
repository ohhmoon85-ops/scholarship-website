import { NextRequest, NextResponse } from "next/server";
import { readdir, readFile } from "fs/promises";
import path from "path";
import AdmZip from "adm-zip";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";
const BATCH_SIZE = 10;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");
  const batchStr = searchParams.get("batch") ?? "0";
  const batch = Math.max(0, parseInt(batchStr, 10));

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }

  try {
    const uploadsDir = path.join(process.cwd(), "uploads", "applications");
    const files = await readdir(uploadsDir);
    const jsonFiles = files.filter((f) => f.endsWith(".json"));

    const applications = await Promise.all(
      jsonFiles.map(async (f) => {
        const content = await readFile(path.join(uploadsDir, f), "utf-8");
        return JSON.parse(content);
      })
    );

    // 업로드 시간 내림차순 정렬
    applications.sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    );

    const start = batch * BATCH_SIZE;
    const batchApps = applications.slice(start, start + BATCH_SIZE);

    if (batchApps.length === 0) {
      return NextResponse.json({ error: "해당 묶음에 파일이 없습니다." }, { status: 404 });
    }

    const zip = new AdmZip();

    for (const app of batchApps) {
      const safeName = path.basename(app.savedFilename);
      try {
        const buffer = await readFile(path.join(uploadsDir, safeName));
        // ZIP 안에서의 파일명: "001_홍길동_서울.zip" 형식으로 구분
        const indexInBatch = batchApps.indexOf(app) + 1;
        const entryName = `${String(start + indexInBatch).padStart(3, "0")}_${safeName}`;
        zip.addFile(entryName, buffer);
      } catch {
        // 파일이 없으면 건너뜀
      }
    }

    const zipBuffer = zip.toBuffer();
    const end = start + batchApps.length;
    const zipFilename = `신청서_묶음_${batch + 1}차(${start + 1}-${end}번).zip`;

    return new NextResponse(new Uint8Array(zipBuffer), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(zipFilename)}`,
      },
    });
  } catch {
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
