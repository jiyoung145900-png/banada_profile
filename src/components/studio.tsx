import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { BananaMark } from "@/components/banana-mark";
import { ProfileCard } from "@/components/profile-card";
import { ProfileForm } from "@/components/profile-form";
import { Button } from "@/components/ui/button";
import { downloadName } from "@/lib/profile";
import { useProfileStore } from "@/lib/profile-store";

export function Studio() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);
  const profile = useProfileStore();
  const { setField, reset } = profile;

  useEffect(() => {
    void useProfileStore.persist.rehydrate();
  }, []);

  async function handleDownload() {
    const node = cardRef.current;
    if (!node) return;
    setSaving(true);
    try {
      await document.fonts.ready;
      const dataUrl = await toPng(node, {
        pixelRatio: 3,
        cacheBust: true,
        backgroundColor:
          profile.template === "ivory" ? "#f4efe3" : "#12110e",
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = downloadName(profile.name);
      a.click();
      toast.success("카드를 저장했어요");
    } catch {
      toast.error("저장에 실패했어요. 다시 시도해 주세요.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="relative min-h-dvh bg-ink text-fg">
      <div className="pointer-events-none absolute inset-0 banada-grain" />
      <header className="relative z-10 border-b border-line">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-2.5">
            <BananaMark className="size-7" />
            <div className="leading-none">
              <p className="font-display text-lg font-semibold tracking-brand text-banana">
                BANADA
              </p>
              <p className="mt-0.5 text-xs tracking-brand text-fg-subtle uppercase">
                Profile studio
              </p>
            </div>
          </div>
          <p className="hidden text-xs text-fg-subtle sm:block">
            입력하는 즉시 카드가 바뀝니다
          </p>
        </div>
      </header>

      <main className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-5 py-8 pb-28 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12 lg:py-10 lg:pb-12">
        <aside className="min-w-0 w-full lg:col-start-2 lg:row-start-1">
          <div className="flex w-full flex-col items-center gap-4 lg:sticky lg:top-8">
            <ProfileCard ref={cardRef} profile={profile} />
            <div className="hidden w-full max-w-sm lg:block">
              <Button
                size="lg"
                className="w-full"
                onClick={() => void handleDownload()}
                disabled={saving}
              >
                <Download className="size-4" strokeWidth={2} />
                {saving ? "저장 중…" : "PNG로 저장"}
              </Button>
            </div>
            <p className="hidden max-w-sm text-center text-xs leading-relaxed text-fg-subtle lg:block">
              고해상도 이미지로 저장됩니다. 사진은 이 브라우저에만 남습니다.
            </p>
          </div>
        </aside>

        <section className="min-w-0 rounded-xl bg-ink-2 p-5 shadow-[inset_0_0_0_1px_var(--color-line)] sm:p-7 lg:col-start-1 lg:row-start-1">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl font-semibold tracking-tight text-paper text-balance">
                프로필 카드
              </h1>
              <p className="mt-1 text-sm text-fg-muted">
                만남용 카드를 만들고 PNG로 내려받으세요.
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => reset()}>
              <RotateCcw className="size-3.5" strokeWidth={2} />
              초기화
            </Button>
          </div>
          <ProfileForm profile={profile} onChange={setField} />
        </section>
      </main>

      <div className="banada-dock fixed inset-x-0 bottom-0 z-20 border-t border-line bg-ink/95 lg:hidden">
        <Button
          size="lg"
          className="w-full"
          onClick={() => void handleDownload()}
          disabled={saving}
        >
          <Download className="size-4" strokeWidth={2} />
          {saving ? "저장 중…" : "PNG로 저장"}
        </Button>
      </div>
    </div>
  );
}