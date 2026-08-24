import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { DEFAULT_PROFILE, type Profile } from "./profile";

type ProfileState = Profile & {
  setField: <K extends keyof Profile>(key: K, value: Profile[K]) => void;
  reset: () => void;
};

const memoryStorage: Storage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      ...DEFAULT_PROFILE,
      setField: (key, value) => set({ [key]: value } as Partial<Profile>),
      reset: () => set({ ...DEFAULT_PROFILE }),
    }),
    {
      name: "banada-profile-v1",
      skipHydration: true,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      partialize: (state) => {
        const { setField: _s, reset: _r, ...profile } = state;
        return profile;
      },
    },
  ),
);
