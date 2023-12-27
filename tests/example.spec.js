const { test } = require('@playwright/test');

test.afterEach(async ({ page }) => {
  // Comment out the following line to workaround the bug.
  await page.getByTestId('cleanup').click();
});

test('should record a trace', async ({ page }) => {
  test.setTimeout(1000);

  await page.goto('https://example.com');

  await page.getByTestId('does-not-exist').click();
});
