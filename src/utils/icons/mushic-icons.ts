export let mushicIcons: Record<string, string> = {};

const basePath = (() => {
  try {
    const url = new URL(import.meta.url);
    const parts = url.pathname.split("/");
    const idx = parts.indexOf("community");
    if (idx !== -1) {
      return `/community/${parts[idx + 1]}`;
    }
  } catch {}
  return "/community/mushroomic-cards-upstream";
})();

async function loadIcons() {
  try {
    // Ordnerinhalt abrufen
    const resp = await fetch(`${basePath}/icons/mushic/`);
    const text = await resp.text();

    // Alle .svg-Dateien extrahieren
    const matches = [...text.matchAll(/href="([^"]+\.svg)"/g)];
    const files = matches.map((m) => m[1]);

    mushicIcons = Object.fromEntries(
      files.map((file) => [
        file.replace(".svg", ""),
        `${basePath}/icons/mushic/${file}`,
      ])
    );
  } catch (e) {
    console.error("Failed to auto-scan mushic icons", e);
  }
}

loadIcons();
