import fs from 'fs';
import path from 'path';

const REPLACEMENTS = [
  { from: /Free Code/g, to: 'Momo' },
  { from: /Claude/g, to: 'Momo' },
  { from: /CLAUDE\.md/g, to: 'MOMO.md' },
  { from: /claude /g, to: 'momo ' }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        processDir(fullPath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let modified = false;
      for (const r of REPLACEMENTS) {
        if (r.from.test(content)) {
          content = content.replace(r.from, r.to);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDir('./src');
console.log('Rebranding complete!');
