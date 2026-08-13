export const BASE_URL = 'https://www.shoryamahanot.com';
export const DEFAULT_IMAGE = `${BASE_URL}/Shorya_logo.jpg`;

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  "name": "Shorya Mahanot",
  "alternateName": [
    "India's Child Picasso",
    "World's Youngest Signature Style Abstract Artist",
    "Asia's Youngest Abstract Painter",
    "Shorya Mahanot Artist"
  ],
  "url": BASE_URL,
  "image": DEFAULT_IMAGE,
  "jobTitle": "Signature Style Abstract Expressionist Artist",
  "nationality": {
    "@type": "Country",
    "name": "India"
  },
  "description": "Shorya Mahanot is an internationally acclaimed abstract expressionist artist from India, recognized as the World's Youngest Signature Style Abstract Artist and dubbed India's Child Picasso by The Guardian.",
  "knowsAbout": [
    "Abstract Expressionism",
    "Contemporary Fine Art",
    "Acrylic on Canvas",
    "Action Painting",
    "Color Field Painting",
    "Drip Painting Technique",
    "Modern Indian Art"
  ],
  "award": [
    "Best of Art Expo New York (2013)",
    "Pogo Television Amazing Kids Award (2012)",
    "Spectrum Miami Featured Artist (2013)",
    "Autism Speaks Celebrity Chef Gala Honoree (2013)",
    "TEDx Speaker (2018)"
  ],
  "sameAs": [
    "https://www.facebook.com/ShoryaMahanotArt/",
    "https://twitter.com/shoryamahanot/",
    "https://www.instagram.com/shoryamahanot_official/",
    "https://www.linkedin.com/company/signature-style-abstract-artist/",
    "https://www.youtube.com/watch?v=8ju4wewKCzc",
    "https://www.theguardian.com/world/2012/jul/03/india-child-picasso-goggles-canvas",
    "https://holtzmangallery.com/"
  ]
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "Shorya Mahanot | World's Youngest Signature Style Abstract Artist",
  "description": "Official art portfolio of Shorya Mahanot, featuring original acrylic on canvas abstract paintings, international exhibitions, media press, and biography.",
  "publisher": {
    "@id": `${BASE_URL}/#person`
  },
  "inLanguage": "en-US"
};

export const ROUTE_SEO_MAP = {
  home: {
    title: "Shorya Mahanot | World's Youngest Signature Style Abstract Artist",
    description: "Explore the vibrant original abstract expressionist paintings, exhibitions, and international press of Shorya Mahanot, Asia's youngest signature-style abstract artist.",
    keywords: "Shorya Mahanot, Abstract Artist, Youngest Abstract Painter, Child Prodigy Artist, Indian Abstract Art, Signature Style Art, Acrylic on Canvas, Jackson Pollock India, Fine Art Portfolio, Original Abstract Paintings",
    path: "/",
    image: DEFAULT_IMAGE,
    type: "website"
  },
  biography: {
    title: "Biography | Shorya Mahanot - World's Youngest Signature Style Abstract Artist",
    description: "Read the inspiring biography of Shorya Mahanot, dubbed 'India's Child Picasso' by The Guardian. Discover his international debut at Art Expo New York, Spectrum Miami, and academic accolades.",
    keywords: "Shorya Mahanot Biography, India's Child Picasso, Youngest Signature Style Abstract Artist, Child Prodigy Painter Bio, Shorya Mahanot Life, Art Expo New York 2013, Holtzman Gallery Artist",
    path: "/biography",
    image: `${BASE_URL}/biography-photos/shorya-mahanot-artist-portrait.jpg`,
    type: "profile"
  },
  "artist-statement": {
    title: "Artist's Statement | Shorya Mahanot Abstract Art Philosophy",
    description: "Discover Shorya Mahanot's artistic philosophy, spontaneous drip and splash painting techniques, and passionate perspective on acrylic on canvas abstract expressionism.",
    keywords: "Shorya Mahanot Artist Statement, Abstract Art Philosophy, Drip Painting Canvas, Child Prodigy Art Technique, Spontaneous Abstract Expressionism, Shorya Mahanot Inspiration",
    path: "/artist-statement",
    image: `${BASE_URL}/banners/600.jpg`,
    type: "article"
  },
  "acrylic-on-canvas": {
    title: "Original Acrylic on Canvas Paintings Gallery | Shorya Mahanot",
    description: "Browse the complete catalog of original acrylic on canvas abstract expressionist paintings by Shorya Mahanot with interactive zoom and interior wall visualization.",
    keywords: "Shorya Mahanot Gallery, Acrylic on Canvas Paintings, Original Abstract Art for Sale, Abstract Expressionist Artwork, Indian Contemporary Fine Art, Shorya Mahanot Catalog",
    path: "/gallery/acrylic-on-canvas",
    image: `${BASE_URL}/acrylic_on_canvas.jpg`,
    type: "collection"
  },
  events: {
    title: "Exhibitions & Events Timeline | Shorya Mahanot Art Portfolio",
    description: "Explore Shorya Mahanot's milestone exhibitions and shows including Taj Mahal Palace Mumbai, Art Expo New York, Spectrum Miami, TEDx, and Microsoft Future Decoded.",
    keywords: "Shorya Mahanot Exhibitions, Shorya Mahanot Events, Art Expo New York, Spectrum Miami, Taj Mahal Palace Solo Show, Kalidas Sanskrit Academy, Microsoft Future Decoded",
    path: "/events",
    image: `${BASE_URL}/events-photos/701.jpg`,
    type: "website"
  },
  "newspaper-articles": {
    title: "Newspaper Articles & Print Press Coverage | Shorya Mahanot",
    description: "Read global newspaper coverage and press reviews of Shorya Mahanot from The Guardian, Times of India, Hindustan Times, Daily Mail, and leading international publications.",
    keywords: "Shorya Mahanot Newspaper Articles, Shorya Mahanot Press, The Guardian Child Picasso, Times of India Shorya Mahanot, Global News Abstract Painter",
    path: "/media/newspaper-articles",
    image: `${BASE_URL}/newspaper_and_articles.jpg`,
    type: "website"
  },
  magazines: {
    title: "Magazine Features & Editorial Articles | Shorya Mahanot",
    description: "Explore prestigious magazine features on Shorya Mahanot across Reader's Digest, India Today, child prodigy publications, and international art journals.",
    keywords: "Shorya Mahanot Magazines, Readers Digest Child Prodigy, Art Magazine Features, Young Abstract Artist Interview, Shorya Mahanot Editorial",
    path: "/media/magazines",
    image: `${BASE_URL}/magazines.jpg`,
    type: "website"
  },
  "web-articles": {
    title: "Web Articles & Online Press Mentions | Shorya Mahanot",
    description: "Discover online press articles, digital art reviews, and global web features celebrating the unique signature style of young prodigy Shorya Mahanot.",
    keywords: "Shorya Mahanot Web Articles, Online Art News, Digital Press Mentions, Child Picasso Internet Features, Shorya Mahanot Online Reviews",
    path: "/media/web-articles",
    image: `${BASE_URL}/look_the_world_is_talking.jpg`,
    type: "website"
  },
  videos: {
    title: "Videos & Television Broadcasts | Shorya Mahanot Art in Action",
    description: "Watch live painting videos, television broadcasts on NDTV and Pogo, TEDx keynote presentations, and interviews of young abstract artist Shorya Mahanot.",
    keywords: "Shorya Mahanot Videos, Shorya Mahanot NDTV, Pogo Amazing Kids Shorya, TEDx Shorya Mahanot, Live Abstract Painting Demonstration, Shorya Mahanot YouTube",
    path: "/media/videos",
    image: `${BASE_URL}/videos.jpg`,
    type: "video.other"
  },
  "look-world-talking": {
    title: "Look The World Is Talking | Global Acclaim for Shorya Mahanot",
    description: "Worldwide praise and accolades for Shorya Mahanot from global icons, international art critics, dignitaries, and cultural media outlets.",
    keywords: "Shorya Mahanot Global Acclaim, Art Critics Reviews, World Praise Child Prodigy, Famous Abstract Painters India, Shorya Mahanot Testimonials",
    path: "/look-world-talking",
    image: `${BASE_URL}/look_the_world_is_talking.jpg`,
    type: "website"
  },
  "twitter-mentions": {
    title: "Twitter Mentions & Social Buzz | Shorya Mahanot",
    description: "See what verified influencers, international artists, and art enthusiasts are saying about Shorya Mahanot on Twitter / X.",
    keywords: "Shorya Mahanot Twitter, Social Media Buzz Shorya Mahanot, X Mentions Shorya Artist, Twitter Art Community",
    path: "/look-world-talking/twitter-mentions",
    image: `${BASE_URL}/twitter-mention.jpg`,
    type: "website"
  },
  awards: {
    title: "Awards & Certificates of Recognition | Shorya Mahanot",
    description: "View prestigious awards, academic certificates from Harvard, MIT, Imperial College London, and official recognitions received by Shorya Mahanot.",
    keywords: "Shorya Mahanot Awards, Certificates of Recognition, Harvard Certificate Shorya, MIT Recognition, Pogo Amazing Kids Award, Child Prodigy Honors",
    path: "/awards-certificates",
    image: `${BASE_URL}/biography-photos/503.jpg`,
    type: "website"
  },
  contact: {
    title: "Contact & Art Inquiries | Shorya Mahanot Official Portfolio",
    description: "Contact the management of Shorya Mahanot for artwork acquisitions, private commissions, solo exhibitions, press interviews, and gallery partnerships.",
    keywords: "Contact Shorya Mahanot, Buy Shorya Mahanot Paintings, Art Acquisition Inquiries, Shorya Mahanot Commission, Aditya Singh Mahanot Contact",
    path: "/contact",
    image: `${BASE_URL}/contact.jpg`,
    type: "website"
  },
  "taj-mahal": {
    title: "Solo Exhibition at The Taj Mahal Palace Hotel | Shorya Mahanot",
    description: "Historic solo art exhibition of Shorya Mahanot at the exclusive Chambers Terrace, Hotel Taj Mahal Palace Mumbai in October 2011.",
    keywords: "Taj Mahal Palace Exhibition, Shorya Mahanot Taj Mahal, Chambers Terrace Art Show Mumbai, Shorya Mahanot 2011 Solo Show",
    path: "/TajMahalPalace",
    image: `${BASE_URL}/Taj.jpg`,
    type: "article"
  },
  "rk-laxman": {
    title: "Blessings From Legendary Cartoonist Shri R.K. Laxman | Shorya Mahanot",
    description: "Special demonstration and blessing by the legendary Indian cartoonist Shri R.K. Laxman for young abstract artist Shorya Mahanot in June 2012.",
    keywords: "RK Laxman Shorya Mahanot, Shri RK Laxman Blessing, Young Artist Demonstration, Legendary Cartoonist Art Blessing",
    path: "/rk-laxman",
    image: `${BASE_URL}/RK.jpg`,
    type: "article"
  },
  pogo: {
    title: "Pogo Television Amazing Kids Award | Shorya Mahanot",
    description: "Shorya Mahanot honored with the Turner Broadcasting Pogo Television Amazing Kids Award in November 2012.",
    keywords: "Pogo Amazing Kids Award, Shorya Mahanot Pogo TV, Turner Broadcasting Child Prodigy, Pogo Channel Award Artist",
    path: "/pogo",
    image: `${BASE_URL}/Pogo-1.jpg`,
    type: "article"
  },
  kalidas: {
    title: "Solo Show at Kalidas Sanskrit Academy Ujjain | Shorya Mahanot",
    description: "Solo exhibition of abstract paintings by Shorya Mahanot installed at Kalidas Sanskrit Academy, Ujjain in October 2012.",
    keywords: "Kalidas Sanskrit Academy Ujjain, Shorya Mahanot Ujjain Show, Solo Exhibition Madhya Pradesh, Abstract Art Ujjain",
    path: "/kalidas-sanskrit",
    image: `${BASE_URL}/Kalidas.jpg`,
    type: "article"
  },
  "celebrity-chef": {
    title: "Celebrity Chef Gala for Autism Speaks New York | Shorya Mahanot",
    description: "Shorya Mahanot's artwork auctioned for charity at Cipriani Wall Street, New York City for the Autism Speaks Foundation in October 2013.",
    keywords: "Celebrity Chef Gala Autism Speaks, Cipriani Wall Street New York, Shorya Mahanot Charity Auction, Autism Speaks Art Donation",
    path: "/celebrity-chef-gala",
    image: `${BASE_URL}/Celebrity-chef-gala.jpg`,
    type: "article"
  },
  "spectrum-miami": {
    title: "Spectrum Miami & New York Art Fair | Shorya Mahanot",
    description: "International display and acquisition of Shorya Mahanot's abstract expressionist artworks at Spectrum Miami and Spectrum New York.",
    keywords: "Spectrum Miami Shorya Mahanot, Spectrum New York Art Show, International Art Fair Miami, Contemporary Indian Art USA",
    path: "/spectrum-miami",
    image: `${BASE_URL}/events-photos/706.jpg`,
    type: "article"
  },
  "art-expo": {
    title: "Best of Art Expo New York 2013 | Shorya Mahanot",
    description: "Shorya Mahanot selected as 'Best of Art Expo 2013' in New York City, marking his grand international debut in the United States.",
    keywords: "Art Expo New York 2013, Best of Art Expo NYC, Shorya Mahanot International Debut, Pier 92 Art Expo Manhattan",
    path: "/art-expo",
    image: `${BASE_URL}/Art-Expo.jpg`,
    type: "article"
  },
  holtzman: {
    title: "Holtzman Gallery Featured Artist | Shorya Mahanot",
    description: "Prestigious representation of Shorya Mahanot as a featured international artist at the world-renowned Holtzman Gallery in Atlantic City, NJ.",
    keywords: "Holtzman Gallery Shorya Mahanot, David Holtzman Gallery Artist, Fine Art Gallery Atlantic City, Shorya Mahanot USA Representation",
    path: "/holtzman-gallery",
    image: `${BASE_URL}/holtzman--gallery.jpg`,
    type: "article"
  },
  ndtv: {
    title: "NDTV National Television Feature | Shorya Mahanot",
    description: "Watch NDTV's national television feature and in-depth interview with young abstract expressionist prodigy Shorya Mahanot.",
    keywords: "NDTV Shorya Mahanot, National Television Feature NDTV, Child Prodigy TV Broadcast India, Shorya Mahanot News",
    path: "/ndtv",
    image: `${BASE_URL}/NDTV.jpg`,
    type: "article"
  },
  nestle: {
    title: "Nestle All-India Campaign & Celebration | Shorya Mahanot",
    description: "Shorya Mahanot featured in Nestle's nationwide celebration and inspirational campaign honoring extraordinary young Indian achievers.",
    keywords: "Nestle Shorya Mahanot, Nestle Campaign Young Talent, Nestle India Achievers, Shorya Mahanot Corporate Collaboration",
    path: "/nestle",
    image: `${BASE_URL}/Nestle.jpg`,
    type: "article"
  },
  "tedx-event-page": {
    title: "TEDx Keynote Presentation | Shorya Mahanot",
    description: "Watch Shorya Mahanot's inspiring TEDx talk sharing his extraordinary 7-year journey of abstract art, colors, and creativity.",
    keywords: "TEDx Shorya Mahanot, TEDx Speech Young Artist, Story of My Life TEDx, Abstract Art Keynote Presentation",
    path: "/TEDX",
    image: `${BASE_URL}/home-photos/shorya-mahanot-tedx-speech-abstract-art-journey.jpg`,
    type: "article"
  },
  microsoft: {
    title: "Microsoft Future Decoded Digital Art Collaboration | Shorya Mahanot",
    description: "Shorya Mahanot's high-tech collaboration with Microsoft at Future Decoded, creating signature abstract expressionism on cutting-edge digital devices.",
    keywords: "Microsoft Future Decoded Shorya Mahanot, Microsoft Digital Art Collaboration, Shorya Mahanot Microsoft Surface, Digital Abstract Art",
    path: "/microsoft-future-decoded",
    image: `${BASE_URL}/events-photos/710.png`,
    type: "article"
  },
  "sbs-radio": {
    title: "SBS Radio Australia Broadcast | Shorya Mahanot",
    description: "International radio broadcast and interview of Shorya Mahanot on Australia's premier multicultural network SBS Radio.",
    keywords: "SBS Radio Shorya Mahanot, SBS Australia Interview, International Radio Broadcast Abstract Painter, Shorya Mahanot Australia",
    path: "/sbs-radio",
    image: `${BASE_URL}/events-photos/712.jpg`,
    type: "article"
  },
  yahoo: {
    title: "Yahoo Special Feature: The Jackson Pollock of India | Shorya Mahanot",
    description: "Yahoo global feature highlighting Shorya Mahanot as the Jackson Pollock of India, detailing his vibrant abstract masterpieces.",
    keywords: "Yahoo Shorya Mahanot, Jackson Pollock of India Yahoo, Yahoo News Abstract Art Prodigy, Shorya Mahanot Web Feature",
    path: "/yahoo",
    image: `${BASE_URL}/home-photos/shorya-mahanot-yahoo-news-feature.jpg`,
    type: "article"
  },
  "readers-digest": {
    title: "Reader's Digest: Growing Up Gifted | Shorya Mahanot",
    description: "Reader's Digest magazine exclusive article 'Growing Up Gifted' exploring the early genius and signature style of Shorya Mahanot.",
    keywords: "Readers Digest Shorya Mahanot, Growing Up Gifted Magazine, Readers Digest Child Prodigy, Shorya Mahanot Genius",
    path: "/readers-digest",
    image: `${BASE_URL}/home-photos/shorya-mahanot-readers-digest-magazine-feature.jpg`,
    type: "article"
  },
  "huffington-post": {
    title: "The Huffington Post Feature: Six-Year-Old Jackson Pollock | Shorya Mahanot",
    description: "The Huffington Post arts feature: 'Artist Prodigy Shorya Mahanot May Just Be A Six-Year-Old Jackson Pollock'. Read the full international story.",
    keywords: "Huffington Post Shorya Mahanot, Six Year Old Jackson Pollock, Huffington Post Art Review, Child Prodigy Painter Huffington",
    path: "/artwork/the-huffington-post",
    image: `${BASE_URL}/home-photos/shorya-mahanot-the-huffington-post-interview.jpg`,
    type: "article"
  }
};

/**
 * Builds SEO properties for dynamic artwork detail pages
 */
export function getArtworkSEO(artwork) {
  if (!artwork) return ROUTE_SEO_MAP.home;

  const title = `${artwork.title || artwork.name} | Original Abstract Painting by Shorya Mahanot`;
  const desc = artwork.description
    ? `${artwork.description.slice(0, 145)}... Original acrylic on canvas abstract expressionist painting by Shorya Mahanot.`
    : `Original abstract painting '${artwork.title || artwork.name}' (${artwork.size || 'Acrylic on Canvas'}) by child prodigy and signature-style artist Shorya Mahanot.`;

  const imgUrl = artwork.src?.startsWith('http') ? artwork.src : `${BASE_URL}${artwork.src}`;

  return {
    title,
    description: desc,
    keywords: `${artwork.title || artwork.name}, Shorya Mahanot Painting, Original Abstract Art, Acrylic on Canvas ${artwork.size || ''}, Buy Abstract Painting, Indian Contemporary Art, Shorya Mahanot Gallery`,
    path: `/artwork/${artwork.slug || artwork.id}`,
    image: imgUrl,
    type: "article",
    artworkData: {
      name: artwork.title || artwork.name,
      description: artwork.description || desc,
      image: imgUrl,
      medium: artwork.medium || "Acrylic on Canvas",
      size: artwork.size || "",
      year: artwork.year || "",
      age: artwork.age || "",
      url: `${BASE_URL}/artwork/${artwork.slug || artwork.id}`
    }
  };
}
