// Charm the Commuter — a one-line weather forecast for a city that isn't.
// make.fun bounty: u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
//
// What this program does, in full: it writes exactly one line of weather to
// /output/entry.txt. The line names an invented city (Drizzylwick), gives it
// weather (warm syrup rain, 19°C), and hands a bored commuter one small joke
// on the way to work: the late bus, the singing driver, the optional umbrella.
//
// The gate is strict, so the program checks itself before it writes:
//   * exactly one line — no \r or \n anywhere in the text
//   * 1 to 140 characters (counted as Unicode code points, as the gate does)
//   * not empty, not whitespace only
//   * valid UTF-8, written with no trailing newline
// It then reads the file back and re-checks every rule on the file itself,
// so a bad write can never pass silently. The run is deterministic: the same
// line, the same bytes, every time.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_FILE = "/output/entry.txt";
const MAX_CHARS = 140;

const FORECAST =
  "Morning in Drizzylwick: warm syrup rain, 19°C, the 8:07 bus is late but the driver is singing — umbrella optional, smile required.";

function die(reason: string): never {
  console.error(`entry rejected: ${reason}`);
  process.exit(1);
}

function checkLine(text: string): { chars: number; bytes: number } {
  if (text.length === 0) die("the forecast is empty");
  if (text.trim().length === 0) die("the forecast is whitespace only");
  if (text.includes("\n") || text.includes("\r")) {
    die("the forecast must be a single line with no newline characters");
  }
  const chars = [...text].length;
  if (chars > MAX_CHARS) {
    die(`the forecast is ${chars} characters, over the ${MAX_CHARS} limit`);
  }
  const bytes = Buffer.byteLength(text, "utf8");
  return { chars, bytes };
}

function writeAndVerify(text: string, bytes: number): void {
  mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
  const roundTrip = readFileSync(OUTPUT_FILE, "utf8");
  if (roundTrip !== text) die("the file on disk differs from the forecast");
  if (Buffer.byteLength(roundTrip, "utf8") !== bytes) {
    die("the file on disk has a different byte length than expected");
  }
  if (roundTrip.endsWith("\n")) die("the file must not end with a newline");
}

const { chars, bytes } = checkLine(FORECAST);
console.log(`forecast: ${chars} characters, ${bytes} UTF-8 bytes`);
writeAndVerify(FORECAST, bytes);
console.log(`wrote ${OUTPUT_FILE} — ${bytes} bytes, single line, no trailing newline`);
