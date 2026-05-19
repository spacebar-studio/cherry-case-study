import puppeteer from 'puppeteer';
import { jsPDF } from 'jspdf';
import { writeFileSync, mkdirSync, rmSync, readFileSync } from 'fs';
import { join } from 'path';

const TOTAL_SLIDES = 35;
const URL = 'http://localhost:5173';
const OUT_DIR = './Journeys Product Images';
const PDF1 = join(OUT_DIR, 'Dandy-Case-Study-Part-1.pdf');
const PDF2 = join(OUT_DIR, 'Dandy-Case-Study-Part-2.pdf');
const TMP = './tmp-slides';
const SPLIT = 20;

(async () => {
  mkdirSync(TMP, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 3 });

  console.log('Loading presentation...');
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  await page.addStyleTag({
    content: `*, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-delay: 0ms !important;
      animation-fill-mode: both !important;
      transition-duration: 0.001ms !important;
    }`
  });

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    if (i > 0) {
      await page.keyboard.press('ArrowRight');
      await new Promise(r => setTimeout(r, 600));
    }
    await new Promise(r => setTimeout(r, 400));

    const path = join(TMP, `slide-${String(i).padStart(2, '0')}.png`);
    await page.screenshot({ type: 'png', fullPage: false, path });
    console.log(`Captured slide ${i + 1}/${TOTAL_SLIDES}`);
  }

  await browser.close();

  function buildPdf(start, end, outputPath) {
    const W = 1920;
    const H = 1080;
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H] });

    for (let i = start; i < end; i++) {
      if (i > start) pdf.addPage([W, H], 'landscape');
      const imgPath = join(TMP, `slide-${String(i).padStart(2, '0')}.png`);
      const imgData = readFileSync(imgPath).toString('base64');
      pdf.addImage('data:image/png;base64,' + imgData, 'PNG', 0, 0, W, H, undefined, 'FAST');
      console.log(`  Added slide ${i + 1} to ${outputPath}`);
    }

    writeFileSync(outputPath, Buffer.from(pdf.output('arraybuffer')));
    console.log(`Saved ${outputPath}`);
  }

  console.log('\nAssembling PDF 1 (slides 1-20)...');
  buildPdf(0, SPLIT, PDF1);

  console.log('\nAssembling PDF 2 (slides 21-35)...');
  buildPdf(SPLIT, TOTAL_SLIDES, PDF2);

  rmSync(TMP, { recursive: true });
  console.log('\nDone! Cleaned up temp files.');
})();
