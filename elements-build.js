const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/Angular8/runtime-es2015.js',
    './dist/Angular8/polyfills-es2015.js',
    './dist/Angular8/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/Angular8.js');
  await fs.copyFile(
    './dist/Angular8/styles.css',
    'elements/styles.css'
  );
})();
