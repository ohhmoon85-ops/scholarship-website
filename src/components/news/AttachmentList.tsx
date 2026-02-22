import type { Attachment } from "@/lib/content";
import { Download, FileText, File } from "lucide-react";

interface AttachmentListProps {
  attachments: Attachment[];
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  pdf: FileText,
  hwp: FileText,
  docx: FileText,
  xlsx: FileText,
};

function formatBytes(bytes?: number): string {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function AttachmentList({ attachments }: AttachmentListProps) {
  if (!attachments.length) return null;

  return (
    <div className="mt-8 rounded-xl border border-navy-100 bg-navy-50 p-5">
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-navy-700">
        <Download className="h-4 w-4" />
        첨부파일 ({attachments.length})
      </p>
      <ul className="space-y-2">
        {attachments.map((file, i) => {
          const Icon = iconMap[file.fileType.toLowerCase()] ?? File;
          return (
            <li key={i}>
              <a
                href={file.url}
                download
                className="group flex items-center gap-3 rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-700 hover:border-navy-300 hover:text-primary transition-all"
              >
                <Icon className="h-4 w-4 flex-shrink-0 text-navy-400 group-hover:text-primary" />
                <span className="flex-1 truncate">{file.name}</span>
                {file.size && (
                  <span className="flex-shrink-0 text-xs text-navy-400">
                    {formatBytes(file.size)}
                  </span>
                )}
                <Download className="h-3.5 w-3.5 flex-shrink-0 text-navy-300 group-hover:text-primary" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
