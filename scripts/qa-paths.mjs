import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const shots = '/workspace/screenshots';

await page.goto('http://127.0.0.1:8080/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.screenshot({ path: shots + '/home-mascot.png', fullPage: false });

await page.getByRole('button', { name: /New d20/ }).click();
await page.waitForTimeout(600);

// step buttons
const steps = await page.locator('button').filter({ hasText: /Past|Traits|Dossier/ }).allTextContents();
console.log('visible buttons sample', steps.slice(0, 20));

await page.getByRole('button', { name: /Past/ }).first().click();
await page.waitForTimeout(500);
const body = await page.locator('body').innerText();
console.log('has Clinic floor', body.includes('Clinic floor'));
console.log('has Gambler', body.includes("Gambler's hall") || body.includes('Gambler'));
console.log('has Cage years', body.includes('Cage years'));
console.log('has Loyalty debt', body.includes('Loyalty debt'));
console.log('has Glass eye', body.includes('Glass eye'));
console.log('scar copy', body.includes('bill with a refund') || body.includes('hurts and each one pays'));
console.log('education count hint', (body.match(/Filter 24 options/g) || []).length);

await page.screenshot({ path: shots + '/past-d20.png', fullPage: true });

// pick clinic, hired gun, glass eye via filter
const filters = page.getByPlaceholder('Filter');
await filters.nth(0).fill('clinic');
await page.getByRole('button', { name: /Clinic floor/ }).click();
await filters.nth(1).fill('hired');
await page.getByRole('button', { name: /Hired gun/ }).click();
await filters.nth(2).fill('glass');
await page.getByRole('button', { name: /Glass eye/ }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: shots + '/past-picked.png' });

await page.getByRole('button', { name: /Traits/ }).first().click();
await page.waitForTimeout(400);
const t = await page.locator('body').innerText();
console.log('has Bruiser', t.includes('Bruiser'));
console.log('has Fast Metabolism', t.includes('Fast Metabolism'));
console.log('has Sex Appeal', t.includes('Sex Appeal'));
console.log('has Tech Wizard', t.includes('Tech Wizard'));
console.log('has Lifegiver as trait heading', /Lifegiver/.test(t) && t.includes('+4 HP per level'));
console.log('classic list copy', t.includes('Classic Fallout trait list'));
await page.screenshot({ path: shots + '/traits-d20.png', fullPage: true });

await page.getByRole('button', { name: /Bruiser/ }).click();
await page.waitForTimeout(300);

// pnp path
await page.goto('http://127.0.0.1:8080/new?engine=pnp', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.getByRole('button', { name: /Past/ }).first().click();
await page.waitForTimeout(400);
const p = await page.locator('body').innerText();
console.log('pnp has Glow walker', p.includes('Glow walker'));
console.log('pnp has Missing tongue', p.includes('Missing tongue'));
await page.screenshot({ path: shots + '/past-pnp.png' });

await browser.close();
