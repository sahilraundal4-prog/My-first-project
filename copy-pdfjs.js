// Copies the PDF.js files into www so the app works offline.
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build');
const dst = path.join(__dirname, '..', 'www');
for (const f of ['pdf.min.js', 'pdf.worker.min.js']) {
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
  console.log('Copied', f);
}
