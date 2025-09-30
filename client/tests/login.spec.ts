import { expect, test } from "@playwright/test";

test("user can login", async ({ page }) => {
  await page.goto("/app/login");

  const emailInput = page.locator("input[type='email']");
  const passwordInput = page.locator("input[type='password']");
  const submitButton = page.locator("button[type='submit']");

  const email = process.env.TRISTAN_EMAIL as string;
  const password = process.env.TRISTAN_PASSWORD as string;

  if (!email || !password) {
    throw new Error("Can't access env variables...");
  }

  await emailInput.fill(email);

  await passwordInput.fill(password);

  await submitButton.click();

  const toast = page.locator(".Toastify__toast--success");

  await expect(toast).toHaveText("Félicitation, vous êtes connecté !");
});
