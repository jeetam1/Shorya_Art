const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'components');

const mappings = {
  'AcrylicOnCanvas.jsx': '/acrylic_on_canvas.jpg',
  'ArtistStatement.jsx': '/artist_statement.jpg',
  'Biography.jsx': '/biography.jpg',
  'Contact.jsx': '/contact.jpg',
  'Events.jsx': '/events.jpg',
  'LookWorldTalking.jsx': '/look_the_world_is_talking.jpg',
  'Magazines.jsx': '/magazines.jpg',
  'WebArticles.jsx': '/magazines.jpg',
  'NewspaperArticles.jsx': '/newspaper_and_articles.jpg',
  'RKLaxman.jsx': '/RK.jpg',
  'Videos.jsx': '/videos.jpg',
  'TwitterMentions.jsx': '/twitter-mention.jpg'
};

Object.entries(mappings).forEach(([file, newImage]) => {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace bgImage="..." or bgImage={'...'} with bgImage="/newImage.jpg"
    // Also handling single or double quotes
    const bannerRegex = /(<PageBanner\s+title=(?:["'][^"']+["']|\{[^}]+\})\s+bgImage=)(?:["'][^"']+["']|\{["'][^"']+["']\})([^>]*>)/g;
    
    // In some components, title comes after bgImage:
    const bannerRegexAnyOrder = /(<PageBanner\b[^>]+bgImage=)(?:["'][^"']+["']|\{["'][^"']+["']\})([^>]*>)/g;

    const newContent = content.replace(bannerRegexAnyOrder, `$1"${newImage}"$2`);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated banner image in ${file} to ${newImage}`);
    } else {
      console.log(`No matching PageBanner found or already updated in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
