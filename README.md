# Bug report for Fitbit OS SDK 4.1

## Expected

The first tick when changing `clock.granularity` from `minutes` to `seconds` fires on next second and reports the correct seconds value in `event.date.getSeconds()`.

## Actual

The first tick event `event.date.getSeconds()` reports `0`. The second tick event reports the actual, correct seconds.

Confirmed in Fitbit OS Simulator and Fitbit Versa 2 version 70.7.21. Bug present when Always On Display is not enabled. Bug not present when the Always On Display is enabled.

This example code prints the seconds value via console.log and updates the text on screen.

See video evidence in [actual.m4v](https://github.com/jeremiahlee/fitbit-first-tick-seconds-bug/blob/master/actual.m4v?raw=true)
