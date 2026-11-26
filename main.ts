import { mkdirSync, writeFileSync } from "node:fs";

const GREETING =
  "Hi, it's Miso. Your mug is on the floor. I'd do it again. Leave a message after the beep, and bring tuna.";

if (GREETING.length < 1 || GREETING.length > 120) {
  throw new Error(
    `Greeting must be 1-120 characters, got ${GREETING.length}: ${GREETING}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
console.log(`Wrote ${GREETING.length}-character greeting to /output/entry.txt`);
