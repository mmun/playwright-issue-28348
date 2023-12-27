__Reproduction for https://github.com/microsoft/playwright/issues/28348__

Dependencies:

- `@playwright/test`: 1.40.1

Steps:

1. `npm install`
2. `npx playwright install --with-deps chromium`
3. `npx playwright test`
4. Wait about 31 seconds for the test to timeout
5. Observe that no trace was captured despite `trace: 'on'` in playwright.config.js.
