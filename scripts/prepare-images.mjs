import sharp from "sharp";
import fs from "node:fs/promises";
const manifest = JSON.parse(await fs.readFile("asset-manifest.json", "utf8"));
const captions = [
  "Aaron Isaiah Liu",
  "Aaron Isaiah Liu",
  "Aaron Isaiah Liu",
  "Aaron Isaiah Liu",
  "Hudson Zhang’s book launch · Harvard Club of New York City",
  "Hudson Zhang’s exhibition · Harvard Club of New York City",
  "Leah Li & Xian Zhang",
  "Cai Guo-Qiang",
  "Quinn Kelsey",
  "Elim Chan",
  "Xian Zhang",
  "Xian Zhang",
  "Yue-Sai Kan",
  "Jasmine Choi",
  "Jasmine Choi",
  "Jasmine Choi & Alice Sara Ott",
  "Jasmine Choi",
  "Danny Koo & the Korea Music Foundation team",
  "Sehwan Park / Piano Obba",
  "Sophia Liu",
  "Dani Bedoni, Jasmine Choi & Adi Konstatzky",
  "Dani Bedoni",
  "Sumi Jo",
  "Sumi Jo",
  "Erin Lunsford Norton",
  "Kyung Hee Kim",
  "New York Star Artist Management team",
  "Gil Shaham",
];
const data = [];
for (let i = 0; i < manifest.length; i++) {
  const file = "public" + manifest[i].src;
  const m = await sharp(file).metadata();
  await sharp(file).webp({ quality: 84 }).toFile(file.replace(".jpg", ".webp"));
  data.push({
    ...manifest[i],
    id: i + 1,
    src: manifest[i].src.replace(".jpg", ".webp"),
    caption: captions[i],
    group: captions[i],
    width: m.width,
    height: m.height,
  });
}
await fs.writeFile("content/images.json", JSON.stringify(data, null, 2) + "\n");
console.log("Prepared 28 optimized images and source manifest.");
