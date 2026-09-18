import { test, expect } from '@playwright/test';

const errors: string[] = [];

test.beforeEach(({ page }) => {
  errors.length = 0;
  page.on('pageerror', (error) => errors.push(String(error)));
});

test.afterEach(() => {
  expect(errors, `Errores de consola: ${errors.join('\n')}`).toEqual([]);
});

test('homepage carga: title, description, H1 y secciones', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ZentroSoft/);
  const description = await page.getAttribute('meta[name="description"]', 'content');
  expect(description).toBeTruthy();
  await expect(page.locator('h1')).toContainText('Software a medida que');
  for (const id of ['#servicios', '#productos', '#nosotros', '#clientes', '#contacto']) {
    await expect(page.locator(id)).toBeVisible();
  }
  const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
  expect(canonical).toBe('https://zentrosoft.vercel.app/');
  const jsonLdCount = await page.locator('script[type="application/ld+json"]').count();
  expect(jsonLdCount).toBe(1);
});

test('navegación por anchors y foco', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Ver servicios' }).click();
  await expect(page.locator('#servicios')).toBeFocused();
});

test('menú móvil abre, cierra con enlace y con Escape', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Solo relevante en viewport móvil');
  await page.goto('/');
  const toggle = page.locator('.menu-toggle');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('.nav-links')).toHaveClass(/nav-open/);
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.locator('.nav-links a[href="#servicios"]').click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('formulario existe, valida y muestra estados', async ({ page }) => {
  await page.goto('/#contacto');
  const form = page.locator('#contact-form');
  await expect(form).toBeVisible();
  await expect(page.locator('#cf-nombre')).toBeVisible();
  await expect(page.locator('#cf-email')).toBeVisible();
  await expect(page.locator('#cf-consent')).toBeVisible();
  // Envío vacío no debe navegar (usa reportValidity nativo)
  await page.locator('#form-submit').click();
  expect(page.url()).toContain('/#contacto');
  const status = page.locator('#form-status');
  await expect(status).toHaveAttribute('role', 'status');
});

test('página /gracias funciona y es noindex', async ({ page }) => {
  await page.goto('/gracias.html');
  await expect(page.getByRole('heading', { name: '¡Gracias por escribirnos!' })).toBeVisible();
  const robots = await page.getAttribute('meta[name="robots"]', 'content');
  expect(robots).toContain('noindex');
  await expect(page.locator('#gracias-countdown')).toHaveText('5');
  await page.getByRole('link', { name: 'Volver al inicio' }).click();
  await expect(page).toHaveURL(/\/$/);
});

test('velarispos carga con su contenido y JSON-LD único', async ({ page }) => {
  await page.goto('/velarispos.html');
  await expect(page.locator('h1')).toContainText('Vende, controla y decide');
  await expect(page.locator('#funcionalidades')).toBeVisible();
  await expect(page.locator('#vp-form')).toBeVisible();
  const jsonLdCount = await page.locator('script[type="application/ld+json"]').count();
  expect(jsonLdCount).toBe(1);
});
