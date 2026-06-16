const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'components');

const mappings = {
  'ArtExpo.jsx': '/Art-Expo.jpg',
  'CelebrityChefGala.jsx': '/Celebrity-chef-gala.jpg',
  'KalidasSanskrit.jsx': '/Kalidas.jpg',
  'NDTV.jsx': '/NDTV.jpg',
  'Nestle.jsx': '/Nestle.jpg',
  'Pogo.jsx': '/Pogo-1.jpg',
  'TajMahalPalace.jsx': '/Taj.jpg',
  'HoltzmanGallery.jsx': '/holtzman--gallery.jpg'
};

Object.entries(mappings).forEach(([file, newImage]) => {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace bgImage="..." or bgImage={'...'} with bgImage="/newImage"
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
