/**
 * CMS 스토리지 유틸리티
 * JSON 파일 기반의 간단한 콘텐츠 저장소
 * 파일 위치: data/cms/{collection}.json
 */
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data", "cms");

export type CmsCollection = "notices" | "board" | "gallery";

/* ── 공지사항 ── */
export interface CmsNotice {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: "공지" | "모집" | "행사" | "결과";
  isPinned: boolean;
  content: string; // HTML 또는 일반 텍스트
  createdAt: string;
}

/* ── 이사회 결과 ── */
export interface CmsBoardResult {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  meetingNumber: number; // 제N회
  meetingType: "정기" | "임시";
  agenda: string[]; // 의결 안건 목록
  content: string; // 상세 내용
  createdAt: string;
}

/* ── 포토갤러리 ── */
export interface CmsGalleryPhoto {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  imageUrl: string; // /api/gallery/image/[filename] 형태
  filename: string; // uploads/gallery/ 에 저장된 실제 파일명
  createdAt: string;
}

async function ensureDir(): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
}

function dataFilePath(collection: CmsCollection): string {
  return path.join(DATA_DIR, `${collection}.json`);
}

export async function readCollection<T>(collection: CmsCollection): Promise<T[]> {
  try {
    await ensureDir();
    const raw = await readFile(dataFilePath(collection), "utf-8");
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

export async function writeCollection<T>(collection: CmsCollection, data: T[]): Promise<void> {
  await ensureDir();
  await writeFile(dataFilePath(collection), JSON.stringify(data, null, 2), "utf-8");
}
