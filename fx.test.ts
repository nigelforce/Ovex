import { test, expect } from '@playwright/test';

// test.describe("fx", () => {
    test("tests fx", async ({ page }) => {
    //   await page.setViewportSize({
    //         width: 1433,
    //         height: 1174
        //   })
      await page.goto("chrome://new-tab-page/");
      await page.goto("https://asgard.review.ovex.io/signin");
      await page.locator("form > div:nth-of-type(1) input").type("test+1@ovex.io");
      await page.locator("form > div:nth-of-type(2) input").type("Password1-+2");
      await page.locator("form > div:nth-of-type(1) input").dblclick();
      await page.locator("form > div:nth-of-type(1) input").click()
      await page.locator("form > div:nth-of-type(1) input").type("test+1@ovex.io");
      await page.locator("form > div:nth-of-type(2) input").dblclick();
      await page.locator("form > div:nth-of-type(2) input").click()
      await page.locator("form > div:nth-of-type(2) input").type("P");
      await page.locator("form > div:nth-of-type(2) input").type("Password1-+2");
      await page.locator("div.md\\:min-h-\\[calc\\(100vh-72px\\)\\] button").click()
      await page.locator("a:nth-of-type(6) > p").click()
      await page.locator("div.md\\:min-h-\\[calc\\(100vh-72px\\)\\] button").click()
      await page.locator("button:nth-of-type(3) img").click()
      await page.locator("#signOut p").click()
      await page.locator("form > div:nth-of-type(1) input").type("test+1@ovex.io");
      await page.locator("form > div:nth-of-type(2) input").type("Password1-+2");
    });
//   });  