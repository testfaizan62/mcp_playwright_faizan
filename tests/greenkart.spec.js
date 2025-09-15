const { test, expect } = require('@playwright/test');

// Test data for vegetables
const vegetables = ['Brocolli', 'Cauliflower', 'Cucumber'];
const nonExistingVegetable = 'InvalidVegetable123';

test('GreenKart Store E2E Test', async ({ page }) => {
    // Step 1: Navigate to the GreenKart store
    await page.goto('/');
    await expect(page).toHaveTitle('GreenKart - veg and fruits kart');

    // Step 2: Search and add three vegetables to cart
    const addedVegetables = [];
    for (const vegetable of vegetables) {
        // Search for the vegetable
        const searchBox = page.getByPlaceholder('Search for Vegetables and Fruits');
        await searchBox.clear();
        await searchBox.fill(vegetable);
        
        // Wait for search results
        await page.waitForTimeout(1000); // Wait for search results to update
        
        // Add to cart
        const addToCartButton = page.getByRole('button', { name: 'ADD TO CART' }).first();
        await addToCartButton.click();
        
        // Store the added vegetable for later verification
        addedVegetables.push(vegetable);
        
        // Clear search for next iteration
        await searchBox.clear();
    }

    // Step 3: Test negative scenario with non-existing vegetable
    const searchBox = page.getByPlaceholder('Search for Vegetables and Fruits');
    await searchBox.fill(nonExistingVegetable);
    await page.waitForTimeout(1000);

    // Verify no results are shown for invalid vegetable
    const noDataText = await page.locator('.no-results').textContent();
    expect(noDataText).toContain('Sorry, no products matched your search!');

    // Step 4: Verify cart contents
    // Click on cart icon
    await page.locator('.cart-icon').click();
    
    // Verify each added vegetable is in the cart
    for (const vegetable of addedVegetables) {
        const cartItem = page.locator('.cart-items').getByText(vegetable, { exact: false });
        await expect(cartItem).toBeVisible();
    }

    // Step 5: Proceed to checkout
    await page.getByText('PROCEED TO CHECKOUT').click();

    // Step 6: Verify information in the table
    // Wait for the table to be visible
    const cartTable = page.locator('table.cartTable');
    await expect(cartTable).toBeVisible();

    // Verify each vegetable in the table
    for (const vegetable of addedVegetables) {
        const tableRow = cartTable.getByText(vegetable, { exact: false });
        await expect(tableRow).toBeVisible();
    }
});