// type definition for an active user profile
export type ActiveProfile = {
  id?: string;
  name?: string;
  avatarUrl?: string;
};

// save the active profile to localStorage and notify other open tabs
export function setActiveProfile(p: ActiveProfile) {
  try {
    const json = JSON.stringify(p);
    localStorage.setItem("activeProfile", json);

    // trigger storage event so other pages update
    window.dispatchEvent(
      new StorageEvent("storage", { key: "activeProfile", newValue: json })
    );
  } catch {
    // silently ignore if localStorage is unavailable or fails
  }
}

// retrieve the active profile from localStorage
export function getActiveProfile(): ActiveProfile | null {
  try {
    const raw = localStorage.getItem("activeProfile");
    return raw ? JSON.parse(raw) : null;
  } catch {
    // return null if data is missing/ can't be parsed
    return null;
  }
}
