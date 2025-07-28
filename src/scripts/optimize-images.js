// scripts/optimize-images.js
const { optimize } = require('@squoosh/lib');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images');
const allowedExt = ['.jpg', '.jpeg', '.png', '.webp'];

const walk = dir => {
  const files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (allowedExt.includes(path.extname(file).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
};

(async () => {
  const files = walk(dir);

  for (const filePath of files) {
    const imageBuffer = fs.readFileSync(filePath);
    const { binary } = await optimize({
      input: imageBuffer,
      plugins: {
        webp: {},
      },
    });
    fs.writeFileSync(filePath.replace(/\.(jpe?g|png|webp)$/i, '.webp'), binary);
    console.log(`✅ Optimized: ${filePath}`);
  }
})();
