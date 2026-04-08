/* --- AUTO OVERLAY ICONS --- */

export const AUTO_OVERLAY_MAP: Record<string, string> = {
  "mushic:ceiling-fan-wind": "mushic:ceiling-fan-blades",
  "mushic:ceiling-fan-center": "mushic:ceiling-fan-blades",
  "mushic:printer": "mushic:paper",
};

const alertAnimation = {
  icon: "blink 1.5s ease-in-out infinite",
  shape: "ping 1.5s infinite, blink 1.5s ease-in-out infinite",
};


/* --- AUTO ANIMATIONS --- */

/* ICON */

export const AUTO_ANIMATIONS: Record<
  string,
  Partial<{
    icon: string;
    shape: string;
    overlay: string;
    speed: {
      attribute: string;
      baseDuration: number;
      factor: number;
      minDuration: number;
      template: string;
    }
  }>
> = {
  "mushic:fire": alertAnimation,
  "mushic:water": alertAnimation,
  "mushic:air-freshener": {
    icon: "mushic-air 3s ease-in-out infinite",
  },  
  "mushic:fan": {
    speed: {
      attribute: "percentage",
      baseDuration: 2.5,
      factor: 0.02,
      minDuration: 0.2,
      template: "mushic-rotate {duration}s linear infinite",
    },
  },
};

/* OVERLAY */

export const AUTO_OVERLAY_ANIMATIONS: Record<string, string> = {
  "mdi:battery-high": "mushic-charge 3s steps(1) infinite",
  // beliebig erweiterbar
};

/* BADGE */

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

export function getAutoAnimations(icon?: string, stateObj?: any) {
  if (!icon) return {};
  const base = AUTO_ANIMATIONS[icon] || {};
  // --- SPEED-SENSITIVE ANIMATION ---
  if (base.speed && stateObj) {
    const attr = base.speed.attribute;
    const value = stateObj.attributes?.[attr];
    if (value !== undefined) {
      const v = Number(value) || 0;
      const duration = Math.max(
        base.speed.minDuration,
        base.speed.baseDuration - v * base.speed.factor
      );
      const anim = base.speed.template.replace(
        "{duration}",
        duration.toFixed(1)
      );
      return {
        ...base,
        icon: anim,
      };
    }
  }
  return base;
}

/* Helper: Overlay Animation */
export function getAutoOverlayAnimation(overlayIcon?: string): string | undefined {
  if (!overlayIcon) return undefined;
  return AUTO_OVERLAY_ANIMATIONS[overlayIcon];
}

/* Helper: Badge Animation */
export function getAutoBadgeAnimation(badgeIcon?: string): string | undefined {
  if (!badgeIcon) return undefined;
  return AUTO_BADGE_ANIMATIONS[badgeIcon];
}
