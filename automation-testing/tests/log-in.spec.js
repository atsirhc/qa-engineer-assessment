import { test, expect } from '@playwright/test';

// Setup: Navigate to the site before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/'); 
    });

// TC-001: Successful login - Positive case
test('Successful login', async ({ page }) => {
  
  // Fill handles the focus/click automatically
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Ensure the products page is displayed after login
  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});


// TC-002: Failed login - Negative case
test('Failed login - Invalid credentials', async ({ page }) => {

  // Enter invalid credentials
  await page.locator('[data-test="username"]').fill('standard_user2');
  await page.locator('[data-test="password"]').fill('wrong_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verification of the error message
  const errorContainer = page.locator('[data-test="error"]');
  
  // Assert that the error message is visible 
  await expect(errorContainer).toBeVisible();
  
  // Assert that the text matches the system's error 
  await expect(errorContainer).toContainText('Epic sadface: Username and password do not match any user in this service');
});