const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'components');

fs.readdirSync(dirPath).forEach(file => {
  if (file.endsWith('.jsx') && file !== 'PageBanner.jsx') {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regular expression to match the banner pattern
    // The pattern can vary slightly, so we use a relatively flexible regex
    const bannerRegex = /<div\s+className="(?:contact-banner-strip|shorya-custom-header-strip-container)"\s+style=\{\{\s*backgroundImage:\s*`url\('\$\{?[^}]+\}?'\)`\s*(?:,\s*[^}]+)?\}\}[^>]*>[\s\S]*?(?:<h1[^>]*>([^<]+)<\/h1>|)<\/div>\s*<\/div>/g;
    
    // Alternative regex since backgroundImage is sometimes string: "url('/banners/701.jpg')"
    const bannerRegex2 = /<div\s+className="(?:contact-banner-strip|shorya-custom-header-strip-container)"\s+style=\{\{\s*backgroundImage:\s*["']url\((['"]?)([^'")]+)\1\)["']\s*(?:,\s*[^}]+)?\}\}[^>]*>[\s\S]*?<h1[^>]*>([^<]+)<\/h1>\s*<\/div>\s*<\/div>/g;
    
    let modified = false;
    
    // In Contact.jsx it's:
    // <div className="contact-banner-strip" style={{ backgroundImage: "url('/banners/701.jpg')" }}></div>
    // <div className="contact-title-box">
    //   <h1 className="contact-main-title">Contact</h1>
    // </div>
    // We should probably just match <div className="shorya-custom-header-strip-container" ... to </div></div>
    
    content = content.replace(bannerRegex2, (match, p1, bgImage, title) => {
      modified = true;
      return `<PageBanner title="${title}" bgImage="${bgImage}" />`;
    });
    
    // Contact.jsx has a slightly different pattern
    const contactRegex = /<div\s+className="contact-header-section">[\s\S]*?backgroundImage:\s*["']url\((['"]?)([^'")]+)\1\)["'][\s\S]*?<h1[^>]*>([^<]+)<\/h1>[\s\S]*?<\/div>\s*<\/div>/g;
    content = content.replace(contactRegex, (match, p1, bgImage, title) => {
      modified = true;
      return `<PageBanner title="${title}" bgImage="${bgImage}" />`;
    });

    if (modified) {
      // Add import if not present
      if (!content.includes("import PageBanner from")) {
        // find last import
        const lastImportIndex = content.lastIndexOf("import ");
        if (lastImportIndex !== -1) {
          const endOfLine = content.indexOf('\n', lastImportIndex);
          content = content.slice(0, endOfLine + 1) + "import PageBanner from './PageBanner';\n" + content.slice(endOfLine + 1);
        } else {
          content = "import PageBanner from './PageBanner';\n" + content;
        }
      }
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Replaced in ${file}`);
    }
  }
});
