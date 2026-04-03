export const customIconset = (name: string, iconset: any) => {
  (window as any).customIconsets = (window as any).customIconsets || {};
  (window as any).customIconsets[name] = iconset;
};
