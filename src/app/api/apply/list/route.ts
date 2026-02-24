import { NextRequest, NextResponse } from "next/server";
import { readdir, readFile } from "fs/promises";
import path from "path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

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

    applications.sort(
      (a, b) =>
        new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    );

    return NextResponse.json({ applications });
  } catch {
    return NextResponse.json({ applications: [] });
  }
}
