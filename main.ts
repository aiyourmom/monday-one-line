import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Monday reviewed: the coffee was strong, the Wi-Fi was weak, and my 9 a.m. standup lasted until lunch.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
