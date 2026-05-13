import { test, expect } from '@playwright/test';

// Setup: Navigate to the site before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/'); 
    });


// TC-009: Successful checkout process - Positive case
test('test', async ({ page }) => {
    
    // Login first
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Add an item to the cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Proceed to checkout
    await page.locator('[data-test="checkout"]').click();
    
    // Fill in checkout information correctly
    await page.locator('[data-test="firstName"]').fill('Jane');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('1234');

    // Continue to the next step and finish the checkout
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    // Ensure we are on the checkout complete page
    await page.goto('https://www.saucedemo.com/checkout-complete.html');

    // Verify the success message is displayed
    const successMessage = page.locator('.complete-header');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toHaveText('Thank you for your order!');

    // Verify the success text (The sub-message)
    const successText = page.locator('.complete-text');
    await expect(successText).toBeVisible();
    await expect(successText).toContainText('Your order has been dispatched');

    // Verify the Back Home button exists
    const backHomeBtn = page.locator('[data-test="back-to-products"]');
    await expect(backHomeBtn).toBeVisible();
    await expect(backHomeBtn).toHaveText('Back Home');

    // Click it to ensure it takes you back to the inventory
    await backHomeBtn.click();
    await expect(page).toHaveURL(/.*inventory.html/);
});




//TC-010: Checkout with Zero Items in Cart - Edge case
test('Checkout with Zero Items in Cart', async ({ page }) => {
    
    // Login first
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Attempt to checkout with zero items in the cart
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Verify the cart is actually empty before clicking
    const cartItem = page.locator('.cart_item');
    await expect(cartItem).toHaveCount(0);

    // Click the checkout button
    await page.locator('[data-test="checkout"]').click();

    // The user should remain on the cart page or see an error
    // If the URL changes to 'checkout-step-one.html', this test will FAIL
    // Logically, we expect to stay on the cart page
    await expect(page).not.toHaveURL(/.*checkout-step-one/);
    // await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    
    // Alternative: Check if an error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});



// TC-011: Checkout with Empty Fields - Edge case
test('Checkout with Empty Fields', async ({ page }) => {

    // Login first
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Add an item to the cart and proceed to checkout
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // Attempt to continue with empty fields
    await page.locator('[data-test="continue"]').click();

    // Verify that we are still on the checkout step one page
    await expect(page).toHaveURL(/.*checkout-step-one/);

    // Verify that error messages are displayed for the required fields
    const errorContainer = page.locator('[data-test="error"]');
    await expect(errorContainer).toBeVisible();
    await expect(errorContainer).toContainText('Error: First Name is required');
});



// TC-012: Checkout with extremely long Zip Code - Edge case
test('Continue Checkout with extremely long Zip Code', async ({ page }) => {

    // Login first
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Add an item to the cart and proceed to checkout
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // Enter valid first and last name but extremely long zip code
    await page.locator('[data-test="firstName"]').fill('Jane');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('1234567890123456abcd');

    // Verify that we are still on the checkout step one page
    await expect(page).toHaveURL(/.*checkout-step-one/);

    // Verify that error messages are displayed for the required fields
    const errorContainer = page.locator('[data-test="error"]');
    await expect(errorContainer).toBeVisible();
    await expect(errorContainer).toContainText('Error: Zip code is invalid.');
});



// TC-013: Complete Checkout without logging in - Negative case
test('Complete Checkout without logging in', async ({ page }) => {

    // Attempt to navigate directly to the checkout complete page without logging in
    await page.goto('https://www.saucedemo.com/checkout-complete.html'); 

    // Verify that we are redirected to the login page
    await expect(page).toHaveURL('https://www.saucedemo.com/'); 
    
    // Verify the error message exists
    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toContainText('You can only access \'/checkout-complete.html\' when you are logged in');
});