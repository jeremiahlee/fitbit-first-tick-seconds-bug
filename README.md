# Bug report for Fitbit OS SDK 4.1

## Expected

The first tick when changing `clock.granularity` from `minutes` to `seconds` fires on next second and reports the correct seconds value in `event.date.getSeconds()`.

## Actual

The first tick event `event.date.getSeconds()` reports `0`. The second tick event reports the actual, correct seconds.

See video evidence in actual.m4v
