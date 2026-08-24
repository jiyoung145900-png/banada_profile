import { forwardRef } from "react";
import { parseHobbies, type Profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

type ProfileCardProps = {
  profile: Profile;
  className?: string;
};

function Crescent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.2 3.2a9 9 0 1 0 3.1 16.6 7.25 7.25 0 1 1-3.1-16.6z"
      />
    </svg>
  );
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(
  function ProfileCard({ profile, className }, ref) {
    const hobbies = parseHobbies(profile.hobbies);
    const title = [profile.name, profile.age].filter(Boolean).join(", ");
    const brand = (profile.brandName || "BANADA").toUpperCase();
    const stats = [
      profile.height ? `${profile.height}cm` : null,
      profile.cupSize || null,
      profile.weight ? `${profile.weight}kg` : null,
      profile.job || null,
    ].filter(Boolean) as string[];

    return (
      <article
        ref={ref}
        className={cn("banada-card", `theme-${profile.template}`, className)}
      >
        {profile.template === "stripe" ? (
          <div className="banada-card-stripe-head">
            <span className="banada-card-stripe-brand">
              {profile.logo ? (
                <img src={profile.logo} alt="로고" className="banada-card-stripe-logo" />
              ) : null}
              {brand}
            </span>
            <span>PROFILE</span>
          </div>
        ) : null}

        <div className="banada-card-photo">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt=""
              style={{ objectPosition: `50% ${profile.photoPos}%` }}
            />
          ) : (
            <div className="banada-card-photo-empty">
              <span className="banada-card-watermark">{brand}</span>
              <Crescent className="banada-card-empty-mark" />
              <span>사진 추가</span>
            </div>
          )}
          <div className="banada-card-veil" />
          {profile.template !== "stripe" ? (
            <div className="banada-card-brand">
              {profile.logo ? (
                <img src={profile.logo} alt="로고" className="banada-card-brand-logo" />
              ) : (
                <Crescent className="banada-card-brand-mark" />
              )}
              {brand}
            </div>
          ) : null}
        </div>

        <div className="banada-card-body">
          <h3 className="banada-card-name">{title || "이름"}</h3>

          {stats.length > 0 ? (
            <p className="banada-card-stats">{stats.join("  ·  ")}</p>
          ) : null}

          {profile.charm ? (
            <p className="banada-card-charm">{profile.charm}</p>
          ) : null}

          {profile.bio ? (
            <p className="banada-card-bio">{profile.bio}</p>
          ) : null}

          {hobbies.length > 0 ? (
            <ul className="banada-card-tags">
              {hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          ) : null}

        </div>
      </article>
    );
  },
);