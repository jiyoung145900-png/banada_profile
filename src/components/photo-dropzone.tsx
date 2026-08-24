import { useCallback, useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { readPhotoFile } from "@/lib/profile";

type PhotoDropzoneProps = {
  photo: string | null;
  onPhoto: (dataUrl: string | null) => void;
};

export function PhotoDropzone({ photo, onPhoto }: PhotoDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const takeFile = useCallback(
    async (file: File | undefined) => {
      if (!file) return;
      setError(null);
      try {
        const data = await readPhotoFile(file);
        onPhoto(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "업로드에 실패했어요.");
      }
    },
    [onPhoto],
  );

  return (
    <div className="space-y-2">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          void takeFile(e.dataTransfer.files[0]);
        }}
        className={cn(
          "relative flex min-h-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-ink-3 text-center",
          "shadow-[inset_0_0_0_1px_var(--color-line)]",
          "transition-[box-shadow,background-color] duration-150 ease-out",
          dragging && "bg-ink-2 shadow-[inset_0_0_0_1.5px_var(--color-banana)]",
        )}
      >
        {photo ? (
          <img
            src={photo}
            alt="업로드한 프로필"
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 px-4 py-6">
            <span className="flex size-10 items-center justify-center rounded-md bg-ink-2 text-banana">
              <ImagePlus className="size-5" strokeWidth={1.75} />
            </span>
            <p className="text-sm font-medium text-fg">사진 올리기</p>
            <p className="text-xs text-fg-subtle">드래그하거나 탭해서 선택</p>
          </div>
        )}
        {photo ? (
          <div className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-150 hover:opacity-100">
            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-paper">
              사진 바꾸기
            </span>
          </div>
        ) : null}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => {
            void takeFile(e.target.files?.[0]);
            e.target.value = "";
          }}
        />
      </div>
      {photo ? (
        <button
          type="button"
          onClick={() => onPhoto(null)}
          className="inline-flex h-9 items-center gap-1.5 text-xs text-fg-muted transition-colors duration-150 hover:text-fg"
        >
          <X className="size-3.5" strokeWidth={2} />
          사진 제거
        </button>
      ) : null}
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
