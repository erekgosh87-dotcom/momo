import fs from 'fs';
import path from 'path';

function renameFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        renameFiles(fullPath);
      }
    }
    
    if (file.includes('Claude')) {
      const newFile = file.replace(/Claude/g, 'Momo');
      const newPath = path.join(dir, newFile);
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
    else if (file.includes('FreeCode')) {
      const newFile = file.replace(/FreeCode/g, 'Momo');
      const newPath = path.join(dir, newFile);
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
  }
}

renameFiles('./src');
console.log('File renaming complete!');
