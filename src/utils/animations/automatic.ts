/* AUTO OVERLAY ICONS */

export const AUTO_OVERLAY_MAP: Record<string, string> = {
  "mushic:ceiling-fan-wind": "mushic:ceiling-fan-blades",
  "mushic:ceiling-fan-center": "mushic:ceiling-fan-blades",
  "mushic:printer": "mushic:paper",
};

const alertAnimation = {
  icon: "blink 1.5s ease-in-out infinite",
  shape: "ping 1.5s infinite, blink 1.5s ease-in-out infinite",
};


/* AUTO ANIMATIONS */

export const AUTO_ANIMATIONS: Record<
  string,
  Partial<{
    icon: string;
    shape: string;
    overlay: string;
  }>
> = {
  "mushic:fire": alertAnimation,
  "mushic:water": alertAnimation,
  "mushic:fan": {
    icon: "mushic-rotate 1.5s linear infinite",
  },
  "mushic:air-freshener": {
    icon: "mushic-air 3s ease-in-out infinite",
  },  
  
  // beliebig erweiterbar
};

export const AUTO_BADGE_ANIMATIONS: Record<string, string> = {
  "mdi:battery-high": "mushic-charge 3s steps(1) infinite",
  // beliebig erweiterbar
};

/* Helper: Overlay-Icon*/

export function getAutoOverlay(icon?: string): string | undefined {
  if (!icon) return undefined;
  return AUTO_OVERLAY_MAP[icon];
}
/* Helper: Animation*/

export function getAutoAnimations(icon?: string) {
  if (!icon) return {};
  return AUTO_ANIMATIONS[icon] || {};
}

/* Helper: Badge Animation */
export function getAutoBadgeAnimation(badgeIcon?: string): string | undefined {
  if (!badgeIcon) return undefined;
  return AUTO_BADGE_ANIMATIONS[badgeIcon];
}
