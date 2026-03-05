const fs = require('fs');
const path = require('path');

const distDir = 'dist/02-bases/browser';

function renameFilesToLowerCase(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist`);
    return;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      renameFilesToLowerCase(filePath);
    } else {
      const lowerFile = file.toLowerCase();
      if (file !== lowerFile) {
        const newPath = path.join(dir, lowerFile);
        fs.renameSync(filePath, newPath);
        console.log(`Renamed: ${file} → ${lowerFile}`);
      }
    }
  });
}

function updateIndexHtmlReferences(indexPath) {
  let content = fs.readFileSync(indexPath, 'utf8');
  const originalContent = content;

  // Replace all uppercase characters in file hashes within src and href attributes
  content = content.replace(/([^"']*-)[A-F0-9]+(\.(css|js|woff2?))/gi, (match) => {
    return match.toLowerCase();
  });

  if (content !== originalContent) {
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Updated index.html references to lowercase');
  }
}

// Main execution
console.log('Fixing file case sensitivity...');
renameFilesToLowerCase(distDir);

const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  updateIndexHtmlReferences(indexPath);
}

console.log('Case sensitivity fix completed!');

