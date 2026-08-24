import type { ReactNode } from "react";
import { Shuffle } from "lucide-react";
import { CARD_TEMPLATES, TEMPLATE_META, randomIntro, type Profile } from "@/lib/profile";
import { LogoDropzone } from "@/components/logo-dropzone";
import { PhotoDropzone } from "@/components/photo-dropzone";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ProfileFormProps = {
  profile: Profile;
  onChange: <K extends keyof Profile>(key: K, value: Profile[K]) => void;
};

export function ProfileForm({ profile, onChange }: ProfileFormProps) {
  const handleRandomIntro = () => {
    const { charm, bio, hobbies } = randomIntro();
    onChange("charm", charm);
    onChange("bio", bio);
    onChange("hobbies", hobbies);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <SectionLabel>사진</SectionLabel>
        <PhotoDropzone
          photo={profile.photo}
          onPhoto={(photo) => onChange("photo", photo)}
        />
        {profile.photo ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="photo-pos">얼굴 위치</Label>
              <span className="text-xs tabular-nums text-fg-subtle">
                {profile.photoPos}%
              </span>
            </div>
            <input
              id="photo-pos"
              type="range"
              min={0}
              max={100}
              value={profile.photoPos}
              onChange={(e) => onChange("photoPos", Number(e.target.value))}
              className="banada-range"
            />
          </div>
        ) : null}
      </section>

      <section className="space-y-3">
        <SectionLabel>기본</SectionLabel>
        <Field label="이름" htmlFor="name">
          <Input
            id="name"
            value={profile.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="이름"
            autoComplete="name"
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="나이" htmlFor="age">
            <Input
              id="age"
              inputMode="numeric"
              value={profile.age}
              onChange={(e) => onChange("age", e.target.value)}
              placeholder="28"
            />
          </Field>
          <Field label="직업" htmlFor="job">
            <Input
              id="job"
              value={profile.job}
              onChange={(e) => onChange("job", e.target.value)}
              placeholder="직업"
            />
          </Field>
        </div>
      </section>

      <section className="space-y-3">
        <SectionLabel>피지컬</SectionLabel>
        <div className="grid grid-cols-3 gap-3">
          <Field label="키 cm" htmlFor="height">
            <Input
              id="height"
              inputMode="numeric"
              value={profile.height}
              onChange={(e) => onChange("height", e.target.value)}
              placeholder="165"
            />
          </Field>
          <Field label="사이즈" htmlFor="cup">
            <Input
              id="cup"
              value={profile.cupSize}
              onChange={(e) => onChange("cupSize", e.target.value)}
              placeholder="C컵"
            />
          </Field>
          <Field label="몸무게 kg" htmlFor="weight">
            <Input
              id="weight"
              inputMode="numeric"
              value={profile.weight}
              onChange={(e) => onChange("weight", e.target.value)}
              placeholder="50"
            />
          </Field>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <SectionLabel>소개</SectionLabel>
          <button
            type="button"
            onClick={handleRandomIntro}
            className="inline-flex items-center gap-1.5 rounded-md bg-banana px-2.5 py-1.5 text-xs font-semibold text-ink transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-banana"
          >
            <Shuffle className="size-3.5" strokeWidth={2.5} />
            랜덤
          </button>
        </div>
        <Field label="매력 포인트" htmlFor="charm">
          <Input
            id="charm"
            value={profile.charm}
            onChange={(e) => onChange("charm", e.target.value)}
            placeholder="한 줄로"
          />
        </Field>
        <Field label="한 줄 소개" htmlFor="bio">
          <Textarea
            id="bio"
            rows={3}
            value={profile.bio}
            onChange={(e) => onChange("bio", e.target.value)}
            placeholder="나를 한 문장으로"
          />
        </Field>
        <Field label="관심사 · 쉼표로 구분" htmlFor="hobbies">
          <Input
            id="hobbies"
            value={profile.hobbies}
            onChange={(e) => onChange("hobbies", e.target.value)}
            placeholder="요가, 와인, 전시"
          />
        </Field>
      </section>

      <section className="space-y-3">
        <SectionLabel>업체 브랜딩</SectionLabel>
        <Field label="업체명" htmlFor="brand-name">
          <Input
            id="brand-name"
            value={profile.brandName}
            onChange={(e) => onChange("brandName", e.target.value)}
            placeholder="BANADA"
          />
        </Field>
        <p className="text-xs text-fg-subtle">
          카드 상단·워터마크·스트라이프에 표시됩니다
        </p>
        <div className="pt-2">
          <Label htmlFor="logo-upload">로고 이미지</Label>
        </div>
        <LogoDropzone
          logo={profile.logo}
          onLogo={(logo) => onChange("logo", logo)}
        />
        <p className="text-xs text-fg-subtle">
          업체명 옆에 로고가 함께 표시됩니다
        </p>
      </section>

      <section className="space-y-3">
        <SectionLabel>카드 스타일</SectionLabel>
        <div className="grid grid-cols-3 gap-2">
          {CARD_TEMPLATES.map((id) => {
            const meta = TEMPLATE_META[id];
            const selected = profile.template === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onChange("template", id)}
                className={cn(
                  "flex h-16 flex-col items-start justify-center rounded-md px-3 text-left",
                  "transition-[box-shadow,background-color] duration-150 ease-out",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-banana",
                  selected
                    ? "bg-banana text-ink"
                    : "bg-ink-3 text-fg shadow-[inset_0_0_0_1px_var(--color-line)] hover:shadow-[inset_0_0_0_1px_var(--color-line-strong)]",
                )}
              >
                <span className="font-display text-sm font-semibold tracking-wide">
                  {meta.label}
                </span>
                <span
                  className={cn(
                    "text-xs leading-tight",
                    selected ? "text-ink/70" : "text-fg-subtle",
                  )}
                >
                  {meta.hint}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-display text-xs font-semibold tracking-brand text-banana uppercase">
      {children}
    </p>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}