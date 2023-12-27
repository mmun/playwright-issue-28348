__Reproduction for https://github.com/microsoft/playwright/issues/28348__

Dependencies:

- `@playwright/test`: 1.40.1

Steps:

1. `npm install`
2. `npx playwright install --with-deps chromium`
3. `npx playwright test`
4. Wait about 31 seconds for the test to timeout
5. Observe that no trace was captured despite `trace: 'on'` in playwright.config.js. __This is the issue.__
6. Comment out [example.spec.js#L5](https://github.com/mmun/playwright-issue-28348/blob/main/tests/example.spec.js#L5).
7. Run `npx playwright test` again
8. Observe that a trace is captured as expected. __This is the expected behavior.__
