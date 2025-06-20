import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://asgard.review.ovex.io/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@ovex.io');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password-+2');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password1-+2');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForTimeout(10000); // 10 seconds | 1000ms = 1 second

  // await page.getByRole('link', { name: 'OVEX Logo' }).click();  

  // await page.waitForTimeout(30000); // 30 seconds (limit)| 1000ms = 1 second

  // await page.locator('div').filter({ hasText: /^BTC\/ZAR$/ }).nth(1).click();
  // await page.getByText('ADA/BTC').click();
  // await page.locator('input[name="askAmount"]').click();
  // await page.locator('input[name="askAmount"]').fill('111');
  // await page.getByRole('button', { name: 'Get Quote' }).click();
  // await page.getByRole('img', { name: 'Close' }).click();
  // await page.locator('div').filter({ hasText: /^ADA$/ }).nth(1).click();
  // await page.getByText('ADA/BTC').click();
  // await page.getByText('ADA/USDT').click();
  // await page.locator('input[name="askAmount"]').click();
  // await page.locator('input[name="askAmount"]').fill('111');
  // await page.getByRole('button', { name: 'Get Quote' }).click();
  // await page.getByRole('img', { name: 'Close' }).click();

  // await page.waitForTimeout(5000); // 5 seconds (limit)| 1000ms = 1 second

  await page.getByRole('link', { name: 'Visit Buy & Sell page' }).click();

  await page.waitForTimeout(5000); // 5 seconds (limit)| 1000ms = 1 second

  await page.locator('div').filter({ hasText: /^BTC\/ZAR$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^BNB\/BTC$/ }).click();
  await page.locator('input[name="fromAmount"]').click();
  await page.locator('input[name="fromAmount"]').fill('0.3');
  // await page.getByRole('button', { name: 'Generate Quote' }).click();
  // await page.getByRole('button', { name: 'Confirm Order' }).click();
  // await page.getByRole('button', { name: 'Done!' }).click();
  // await page.getByTitle('Discover Institutional').click();
  // await page.getByTitle('Discover Personalized Over-').click();
  // await page.getByTitle('Discover How to Maximize Your').click();
  // await page.getByRole('link', { name: 'Expansion', exact: true }).click();
  // await page.getByRole('button', { name: 'Wallets dropdown_caret' }).click();
  // await page.getByRole('link', { name: 'Balances' }).click();
  // await page.getByRole('row', { name: 'zar South African Rands (ZAR' }).getByRole('button').first().click();
  // await page.locator('.css-ackcql').click();
  // await page.locator('#react-select-react-select-instance-option-14 div').click();
  // await page.getByRole('button', { name: 'History dropdown_caret' }).click();
  // await page.getByRole('link', { name: 'Deposit History' }).click();
  // await page.getByRole('button', { name: 'History dropdown_caret' }).click();
  // await page.getByRole('link', { name: 'Withdrawal History' }).click();
  // await page.getByRole('button', { name: 'Wallets dropdown_caret' }).click();
  // await page.getByText('☰WalletsBalancesDepositWithdrawHistory').click();
  // await page.locator('div').filter({ hasText: 'Buy & SellInstitutionsOTC DeskInterest AccountExpansionFX☰' }).nth(2).click();
  // await page.getByText('ZAR').first().click();
  // await page.getByText('BTC').click();
  // await page.getByRole('button', { name: 'Deposit' }).click();
  // await page.getByRole('button', { name: 'avatar-img' }).click();
  // await page.getByRole('link', { name: 'Dashboard' }).click();
  // await page.getByRole('button', { name: 'Withdraw' }).click();
  // await page.getByPlaceholder('Minimum Withdrawal Amount 100').click();
  // await page.getByPlaceholder('Minimum Withdrawal Amount 100').fill('1000');
  // await page.locator('.capitalize > .css-1birvly-control > .css-1d8n9bt > .css-ackcql').first().click();
  // await page.locator('svg').nth(2).click();
  // await page.getByRole('textbox', { name: 'Account Holder' }).click();
  // await page.getByRole('textbox', { name: 'Account Holder' }).fill('T Account 1');
  // await page.getByRole('textbox', { name: 'Account Holder' }).press('Tab');
  // await page.locator('.css-im5ps4-control').click();
  // await page.getByText('First National Bank (FNB)').click();
  // await page.getByText('First National Bank (FNB)').click();
  // await page.locator('.css-im5ps4-control > .css-1d8n9bt > .css-ackcql').click();
  // await page.locator('svg').nth(3).click();
  // await page.getByText('Capitec Bank Limited', { exact: true }).click();
  // await page.locator('div').filter({ hasText: /^Bank CountrySelect option\.\.\.$/ }).locator('svg').click();
  // await page.getByText('Albania', { exact: true }).click();
  // await page.getByRole('textbox', { name: 'Account Number' }).click();
  // await page.getByRole('textbox', { name: 'Account Number' }).fill('12345665431');
  // await page.getByRole('textbox', { name: 'XXXXXX' }).click();
  // await page.getByRole('textbox', { name: 'XXXXXX' }).fill('123456');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('button', { name: 'Oops!' }).click();

  // const page1Promise = page.waitForEvent('popup');
  
  // await page.getByRole('link', { name: 'here' }).click();
  
  // const page1 = await page1Promise;
  
  // await page.getByRole('button', { name: 'avatar-img' }).click();
  // await page.getByRole('link', { name: 'Dashboard' }).click();
  // await page.getByRole('button', { name: 'Create API Key' }).click();
  // await page.getByRole('img', { name: 'Close' }).click();
  // await page.getByRole('cell', { name: 'Chrome Version 136.0.0.0 (Mac)' }).first().click();
  // await page.getByRole('button', { name: 'Create Phishing Code' }).click();
  // await page.getByRole('img', { name: 'Close' }).click();
});