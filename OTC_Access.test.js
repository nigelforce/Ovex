import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://asgard.review.ovex.io/otc');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Ovex');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByPlaceholder('Contact Number').fill('0848999007');
  await page.getByPlaceholder('Contact Number').press('Tab');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@ovex.io');
  await page.getByRole('button', { name: 'Request a Call' }).click();
  await page.getByRole('button', { name: 'Done!' }).click();
});
