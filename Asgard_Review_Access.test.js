import { test, expect } from '@playwright/test';

test('Asgard_Review', async ({ page }) => {
  test.slow(); // Mark the test as slow
  await page.goto('https://asgard.review.ovex.io/signup');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@test.te');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('YesterdayTest');
  await page.getByRole('textbox', { name: 'Password', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('YesterdayTest');
  await page.getByRole('textbox', { name: 'Confirm Password' }).press('Tab');
  await page.getByRole('textbox', { name: 'Referral Code' }).press('Tab');
  await page.getByRole('checkbox', { name: 'By creating an account, you' }).check();
  await page.getByRole('checkbox', { name: 'By creating an account, you' }).press('Tab');
  await page.locator('label').getByRole('link', { name: 'Terms and Conditions' }).press('Tab');

// setTimeout(function() {
//   // Code to be executed after 10 seconds
//   console.log("20 seconds have passed.");
// }, 100000); // 20000 milliseconds = 20 seconds

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('YesterdayTest11');
  await page.getByRole('textbox', { name: 'Password', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Confirm Password' }).press('Tab');
  await page.getByRole('textbox', { name: 'Referral Code' }).press('Tab');
  await page.getByRole('checkbox', { name: 'By creating an account, you' }).press('Tab');
  await page.locator('label').getByRole('link', { name: 'Terms and Conditions' }).press('Tab');
  await page.getByRole('button', { name: 'Submit' }).click();

// setTimeout(function() {
//   // Code to be executed after 10 seconds
//   console.log("20 seconds have passed.");
// }, 100000); // 20000 milliseconds = 20 seconds

  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('YesterdayTest11');
  await page.getByRole('button', { name: 'Submit' }).click();


});