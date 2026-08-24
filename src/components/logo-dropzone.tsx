import { useCallback, useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { readLogoFile } from "@/lib/profile";

type LogoDropzoneProps = {
  logo: string | null;
  onLogo: (dataUrl: string | null) => void;
};

export function LogoDropzone({ logo, onLogo }: LogoDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const takeFile = useCallback(
    async (file: File | undefined) => {
      if (!file) return;
      setError(null);
      try {
        const data = await readLogoFile(file);
        onLogo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "업로드에 실패했어요.");
      }
    },
    [onLogo],
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
          "relative flex h-20 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-ink-3",
          "shadow-[inset_0_0_0_1px_var(--color-line)]",
          "transition-[box-shadow,background-color] duration-150 ease-out",
          dragging && "bg-ink-2 shadow-[inset_0_0_0_1.5px_var(--color-banana)]",
        )}
      >
        {logo ? (
          <img
            src={logo}
            alt="업로드한 로고"
            className="max-h-14 max-w-[160px] object-contain"
          />
        ) : (
          <div className="flex items-center gap-3 px-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-ink-2 text-banana">
              <ImagePlus className="size-4" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-medium text-fg">로고 올리기</p>
              <p className="text-xs text-fg-subtle">
                투명 PNG 권장
              </p>
            </div>
          </div>
        )}
        {logo ? (
          <div className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-150 hover:opacity-100">
            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-paper">
              로고 바꾸기
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
      {logo ? (
        <button
          type="button"
          onClick={() => onLogo(null)}
          className="inline-flex h-9 items-center gap-1.5 text-xs text-fg-muted transition-colors duration-150 hover:text-fg"
        >
          <X className="size-3.5" strokeWidth={2} />
          로고 제거
        </button>
      ) : null}
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
