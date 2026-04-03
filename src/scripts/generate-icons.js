import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const ICON_DIR = join("icons", "mushic");
const MANIFEST = join(ICON_DIR, "icons.json");

const files = readdirSync(ICON_DIR)
  .filter((f) => f.endsWith(".svg"))
  .sort();

writeFileSync(MANIFEST, JSON.stringify(files, null, 2));

console.log(`Generated ${MANIFEST} with ${files.length} icons.`);
