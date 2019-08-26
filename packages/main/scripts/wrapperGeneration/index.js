const puppeteer = require('puppeteer');
const fileUrl = require('file-url');
const { createWrapperForComponent } = require('./steps/createWrapper');
const { createDemoForComponent } = require('./steps/createDemo');
const { createTestForComponent } = require('./steps/createTest');

let pattern;
let onlyStopForMerge = false;
const queue = [];

process.argv.forEach((val) => {
  if (val.startsWith('-pattern') || val.startsWith('--pattern')) {
    pattern = val.split('=')[1];
  } else if (val.indexOf('onlyStopForMerge') !== -1) {
    onlyStopForMerge = true;
  }
});

async function executeQueue() {
  for await (const msg of queue) {
    if (!msg) {
      return;
    }
    try {
      const dto = JSON.parse(msg.text());
      if (!pattern || dto.componentName.indexOf(pattern) !== -1) {
        await createWrapperForComponent(dto, { onlyStopForMerge });
        createTestForComponent(dto);
        createDemoForComponent(dto);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', (msg) => {
    queue.push(msg);
  });
  await page.goto(fileUrl('./scripts/wrapperGeneration/puppeteer.html'));
  await browser.close().then(executeQueue);
})();
