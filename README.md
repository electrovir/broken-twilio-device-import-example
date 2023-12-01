# broken-twilio-device-import-example

Repro for https://github.com/twilio/twilio-voice.js/issues/204

# Setup

1. clone the repo
2. `cd` to repo
3. `npm i` inside the repo
4. `npm test` to see the failing tests with web-test-runner
5. `npm start` and open the printed url (usually http://localhost:5173/) to see vite working fine

# Explanation

-   `src/broken.ts`: this works in vite but not web-test-runner
    -   Uses a standard import like `import {} from '';`.
-   `src/working.ts`: this works in both vite _and_ web-test-runner
    -   Uses a dynamic import like `await import()`.
-   `src/use-both.ts`: imported in `index.html` and imports both of the above files.
-   `src/index.html`: used as the html page for vite

All other files and scripts are defaults that I use in all my repos to stay sane.

# Errors

These only occur in web-test-runner (`npm test`).

## Firefox

-   `ambiguous indirect export: Device`
-   `ambiguous indirect export: Call`

## Chromium

-   `The requested module './../node_modules/@twilio/voice-sdk/es5/twilio.js' does not provide an export named 'Device'`
-   `The requested module './../node_modules/@twilio/voice-sdk/es5/twilio.js' does not provide an export named 'Call'`

## Webkit

-   `Importing binding name 'Device' is not found.`
-   `Importing binding name 'Call' is not found.`
