const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'components');

fs.readdirSync(dirPath).forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match <img ... but not if it contains loading="..."
    // Also handle multiline <img
    const imgRegex = /<img\s+(?![^>]*\bloading\s*=)([^>]+)>/g;
    
    const newContent = content.replace(imgRegex, '<img loading="lazy" $1>');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Added loading="lazy" to images in ${file}`);
    }
  }
});
