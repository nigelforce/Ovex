test.describe("Test_1", () => {
  test("tests Test_1", async ({ page }) => {
    await page.setViewportSize({
          width: 1497,
          height: 1174
        })
    await page.goto("https://asgard.review.ovex.io/");
    await page.locator("div.bg-white a:nth-of-type(2) > p").click()
    await page.locator("div.w-\\[30px\\] img").click()
    await page.locator("div:nth-of-type(3) input").click()
    await page.locator("div:nth-of-type(3) input").type("1000");
    await page.locator("div.py-14 div.bg-white span").click()
    await page.locator("div.fixed > div > div.flex img").click()
    await page.locator("div:nth-of-type(3) input").click()
    await page.locator("div:nth-of-type(3) input").type("10000");
    await page.locator("form > div > div.justify-between p").click()
    await page.locator("div:nth-of-type(4) > button").click()
    await page.locator("form > div > div.justify-between p").click()
    await page.locator("div:nth-of-type(3) input").dblclick();
    await page.locator("div:nth-of-type(3) input").type("");
    await page.locator("div:nth-of-type(4) input").click()
    await page.locator("div:nth-of-type(4) input").type("100000");
    await page.locator("div.bg-mono-light div.bg-white > div > div > div:nth-of-type(2) button").click()
    await page.locator("div.fixed div.px-4 > div > div span").click()
  });
});
