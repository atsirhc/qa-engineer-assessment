import { test, expect } from '@playwright/test';

// Setup: Navigate to the site before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/'); 
    });


// TC-003: Successful add to cart - Positive case
test('Successful add to cart', async ({ page }) => {

  // Login first
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Check that the button text changed to 'Remove'
  const removeButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
  await expect(removeButton).toHaveText('Remove');

  // Check that the shopping cart badge displays '1'
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toBeVisible();
  await expect(cartBadge).toHaveText('1');
});




// TC-004: Add to cart in Product Details Page - Positive case
test('Add to cart in Product Details Page', async ({ page }) => {
  
  // Login first
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  // Navigate to the product details page
  await page.locator('[data-test="item-4-title-link"]').click();

  // Verify that we are on the Product Details page
  await expect(page).toHaveURL(/.*inventory-item.html\?id=4/);

  // Add to cart
  await page.locator('[data-test="add-to-cart"]').click();

  // Verify the cart badge updates to 1
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');

  // Verify the button text changes to 'Remove'
  await expect(page.locator('[data-test="remove"]')).toHaveText('Remove');
});




// TC-005: Add Multiple Items to Cart - Positive case
test('Add Multiple Items to Cart', async ({ page }) => {
 
    // Login first
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Add multiple items to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Verify the cart badge updates to 3
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('3');
});




// TC-006: Items in Cart Retain - Positive case
test('Items in Cart Retain', async ({ page }) => {

    // Login first
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Add an item to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    
    // Verification (Pre-navigation): Ensure the badge is '1'
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // Navigate away and then back
    // Clicking "About" takes to a different website, so navigate back to Sauce Demo
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="about-sidebar-link"]').click();
    
    // Navigate back to the inventory page to check retention
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Verify the item is still in the cart
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');

    // Go into the cart to verify the specific item persists
    await page.locator('[data-test="shopping-cart-badge"]').click();
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Fleece Jacket');
});




// TC-007: Add to Cart All Items - Positive case
test('Add to Cart All Items', async ({ page }) => {

    // Login first
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Attempt to add all items to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    // Verify the cart badge updates to 6
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('6');
    });



    
// TC-008: Add to Cart - URL Manipulation - Negative case
    test('Prevent accessing Cart via URL when logged out', async ({ page }) => {

    // 1. Setup & Logout
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Add an item to the cart to ensure we have a cart badge 
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Logout to clear session
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // Manipulate URL
    await page.goto('https://www.saucedemo.com/cart.html');

    // Verification: Check the specific error message
    const errorContainer = page.locator('[data-test="error"]');
    await expect(errorContainer).toBeVisible();
    await expect(errorContainer).toContainText('You can only access \'/cart.html\' when you are logged in');
});