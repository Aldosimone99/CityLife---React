import fs from "node:fs";
import path from "node:path";

function toSlug(input) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const inPath = path.resolve("src/shared/data/raw/comuni.json");
const outPath = path.resolve("src/shared/data/italy-cities.json");

const raw = JSON.parse(fs.readFileSync(inPath, "utf8"));

const converted = raw
  .filter((c) => c?.name && c?.lat && c?.lon)
  .map((c) => ({
    name: c.name,
    slug: toSlug(c.name),
    lat: Number(c.lat),
    lng: Number(c.lon),
  }))
  // elimina eventuali NaN
  .filter((c) => Number.isFinite(c.lat) && Number.isFinite(c.lng));

// (Optional) se ci fossero duplicati di slug, tieni il primo
const seen = new Set();
const deduped = [];
for (const c of converted) {
  if (seen.has(c.slug)) continue;
  seen.add(c.slug);
  deduped.push(c);
}

fs.writeFileSync(outPath, JSON.stringify(deduped, null, 2), "utf8");
console.log(`✅ Creato: ${outPath} (${deduped.length} comuni)`);