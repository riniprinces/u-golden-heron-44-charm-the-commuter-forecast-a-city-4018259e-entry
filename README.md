# Charm the Commuter: Forecast a City That Isn't

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/riniprinces/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e-entry/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/riniprinces/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e-entry/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

Entry for the [make.fun](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) bounty **"Charm the Commuter: Forecast a City That Isn't"**.

## The entry

One line of weather, 130 characters, for a city that does not exist:

> Morning in Drizzylwick: warm syrup rain, 19°C, the 8:07 bus is late but the driver is singing — umbrella optional, smile required.

Drizzylwick gets warm syrup rain instead of ordinary drizzle, a bus that is late but a driver who is singing, and an umbrella that is optional — because a forecast a bored commuter actually smiles at is worth more than a dry one.

## How it works

`main.ts` holds the single forecast line and writes it to `/output/entry.txt`. Before writing, it validates the line against the competition gate: exactly one line, 1–140 characters, not whitespace only, valid UTF-8, no trailing newline. It then reads the file back and re-checks every rule on the file itself. The output is deterministic — every run produces the same 133 bytes.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later (Node runs the TypeScript directly).

---

Built for [make.fun](https://make.fun/?ref=vs2rmk5b) — play with referral code `vs2rmk5b`.
