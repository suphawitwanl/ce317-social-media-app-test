const {test, expect} = require('@playwright/test');

test('web app', async({page}) => {
    await page.goto('https://ce317-social-media-app-1640900245.onrender.com/');
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('username04');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('1234');
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder('Enter your username').click();
    await page.getByPlaceholder('Enter your username').fill('username04');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('1234');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('link', { name: 'Create New Post' }).click();
    await page.getByLabel('Headline').click();
    await page.getByLabel('Headline').fill('automate test01');
    await page.getByLabel('Content').click();
    await page.getByLabel('Content').fill('content01');
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.getByRole('link', { name: 'View Post' }).click();
    await page.getByRole('link', { name: 'Back to posts' }).click();
    await page.getByRole('link', { name: 'Edit Post' }).click();
    await page.getByLabel('Headline').click();
    await page.getByLabel('Headline').fill('automate test01 edited');
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.getByRole('button', { name: 'Like' }).nth(3).click();
    await page.getByPlaceholder('Add a comment...').nth(3).click();
    await page.getByPlaceholder('Add a comment...').nth(3).fill('hi tester');
    await page.getByRole('button', { name: 'Add Comment' }).nth(3).click();
    await page.getByRole('button', { name: 'Unlike' }).click();
    await page.getByRole('link', { name: 'Log Out' }).click();
});

