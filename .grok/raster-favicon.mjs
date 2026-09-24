import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 32, height: 32 }, deviceScaleFactor: 1 });
await page.goto('file:///workspace/.grok/favicon-raster.html', { waitUntil: 'load' });
await page.screenshot({ path: '/workspace/.grok/favicon-32.png' });
await page.setViewportSize({ width: 16, height: 16 });
await page.evaluate(() => {
  const svg = document.querySelector('svg');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
});
await page.screenshot({ path: '/workspace/.grok/favicon-16.png' });
await browser.close();
