// import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');
test('Broker_Test', async ({ page }) => {
  test.slow(); // Mark the test as slow
  await page.goto('https://asgard.review.ovex.io/');
  await page.getByText('Sign InGet Started').click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test+broker@ovex.io');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Password1-+2');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Pass');
//   await page.locator('div').filter({ hasText: /^Sign InGet Started$/ }).getByRole('link').click();
  await page.locator('div').filter({ hasText: /^Sign In$/ }).getByRole('link').click();

  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test+broker@ovex.io');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password1-+2');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('.css-ackcql').click();
  await page.locator('#react-select-react-select-instance-option-9').click();
  await page.getByRole('button', { name: 'avatar-img' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'avatar-img' }).click();
  await page.getByRole('link', { name: 'Client Overview' }).click();
  await page.getByRole('button', { name: 'Wallets dropdown_caret' }).click();
  await page.getByRole('link', { name: 'Balances' }).click();
  await page.getByRole('button', { name: 'Wallets dropdown_caret' }).click();
  await page.getByRole('link', { name: 'Deposit' }).click();
  await page.locator('.css-1kyltep-control > .css-1d8n9bt > .css-ackcql').click();
  await page.locator('#react-select-react-select-instance-option-17 div').click();
  await page.getByText('WalletsHistory').click();
  await page.getByRole('button', { name: 'Wallets dropdown_caret' }).click();
  await page.getByRole('link', { name: 'Withdraw' }).click();
  await page.getByRole('button', { name: 'avatar-img' }).click();
  await page.getByText('Sign Out').click();


});

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