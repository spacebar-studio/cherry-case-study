import puppeteer from 'puppeteer';
import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const TOTAL_SLIDES = 34;
const SPLIT_AT = 20;
const URL = 'http://localhost:5173/';
const OUTPUT_DIR = './Journeys Product Images';

async function capture() {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Navigate and wait for initial load
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForSelector('[data-slide-container]');
  
  // Inject CSS to disable all animations instantly
  await page.addStyleTag({
    content: `*, *::before, *::after { 
      animation-duration: 0.001ms !important; 
      animation-delay: 0ms !important; 
      animation-fill-mode: both !important;
      transition-duration: 0.001ms !important; 
    }`
  });
  
  // Wait a moment for styles to apply
  await new Promise(r => setTimeout(r, 500));
  
  const screenshots = [];
  
  for (let i = 0; i < TOTAL_SLIDES; i++) {
    // Navigate to slide by pressing right arrow
    if (i > 0) {
      await page.keyboard.press('ArrowRight');
      await new Promise(r => setTimeout(r, 600));
    }
    
    // Wait for content to settle
    await new Promise(r => setTimeout(r, 800));
    
    // Take screenshot
    const screenshot = await page.screenshot({ 
      type: 'png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    screenshots.push(screenshot);
    console.log(`Captured slide ${i + 1}/${TOTAL_SLIDES}`);
  }
  
  await browser.close();
  
  // Create PDF Part 1 (slides 1-20)
  const pdf1 = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });
  for (let i = 0; i < SPLIT_AT; i++) {
    if (i > 0) pdf1.addPage([1920, 1080], 'landscape');
    const imgData = 'data:image/png;base64,' + screenshots[i].toString('base64');
    pdf1.addImage(imgData, 'PNG', 0, 0, 1920, 1080);
  }
  const out1 = path.join(OUTPUT_DIR, 'Dandy-Presentation-Part1.pdf');
  fs.writeFileSync(out1, Buffer.from(pdf1.output('arraybuffer')));
  console.log(`Part 1 saved: ${out1} (${SPLIT_AT} slides)`);
  
  // Create PDF Part 2 (slides 21-34)
  const pdf2 = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });
  for (let i = SPLIT_AT; i < TOTAL_SLIDES; i++) {
    if (i > SPLIT_AT) pdf2.addPage([1920, 1080], 'landscape');
    const imgData = 'data:image/png;base64,' + screenshots[i].toString('base64');
    pdf2.addImage(imgData, 'PNG', 0, 0, 1920, 1080);
  }
  const out2 = path.join(OUTPUT_DIR, 'Dandy-Presentation-Part2.pdf');
  fs.writeFileSync(out2, Buffer.from(pdf2.output('arraybuffer')));
  console.log(`Part 2 saved: ${out2} (${TOTAL_SLIDES - SPLIT_AT} slides)`);
}

capture().catch(console.error);
