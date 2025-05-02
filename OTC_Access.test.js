import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://asgard.review.ovex.io/otc');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Nigel+test');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('ovex');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByPlaceholder('Contact Number').fill('0848999007');
  await page.getByPlaceholder('Contact Number').press('Tab');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@gmail.com');
  await page.getByRole('button', { name: 'Request a Call' }).click();
  await page.getByRole('button', { name: 'Done!' }).click();
});
