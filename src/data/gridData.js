export const gridItems = [
  // ==========================================================================
  // FIRST LOOP (ITEMS 1 - 12)
  // ==========================================================================
  {
    id: 1,
    slug: "in-the-deep-ii",
    title: "In the deep II",
    summary: "I look at mountains and oceans. Where you stand can change the...",
    description: "I look at mountains and oceans. Where you stand can change the meaning of deep for you.",
    medium: "Acrylic on canvas",
    size: "2' X 3'",
    src: "/1.jpg"
  },
  {
    id: 2,
    slug: "the-guardian",
    title: "The Guardian",
    isArticle: true, 
    articleImageWidth: "350px", 
    
    /* ADD THIS: The magic switch that turns on the comment box */
    allowComments: true, 
    
    summary: "“…Only five and already he has a signature style..” Guardian",
    description: "Shorya Mahanot, Asia’s youngest abstract painter, could become a global figure in the art\nworld, believes his proud father.",
    linkText: "theGuardian.com",
    linkUrl: "https://www.theguardian.com", 
    src: "/2.jpg"
  },
  {
    id: 3,
    slug: "Pretty-Dreams",
    title: "Pretty Dreams",
    summary: "My friends, my family, they all come into my pretty dreams.",
    description: "My friends, my family, they all come into my pretty dreams.",
    medium: "Acrylic on canvas",
    size: "30\" x 40\"",
    src: "/3.jpg"
  },
  {
    id: 4,
    slug: "the-huffington-post",
    title: "The Huffington Post",
    
    /* ADD THIS FLAG: Tells React to look for a custom file */
    customLayout: 'huffington', 
    
    src: "/4.jpg", // The image shown on the grid
    description: "Read the full interview...", // Shown on hover
  },
  {
    id: 5,
    slug: "Artist's-Biography",
    title: "Artist's Biography",
    
    /* ADD THIS LINE: Tells React to skip the detail page and go straight to Biography */
    directLink: '#/biography', 
    
    summary: "World’s youngest signature style abstract artist.",
    description: "World’s youngest signature style abstract artist.",
    
    src: "/5.jpg"
  },
  {
    id: 6,
    slug: "In-The-Sea",
    title: "In The Sea",
    summary: "We wonder what goes on in the depths of the sea. We imagine it and the colors come through",
    description: "We wonder what goes on in the depths of the sea. We imagine it and the colors come through",
    medium: "Acrylic on canvas",
    size: "18\" x 24\"",
    Age: "4",
    src: "/6.jpg"
  },
  {
    id: 7,
    slug: "Bright-Light",
    title: "Bright Light",
    customLayout: 'tedx',
    
    summary: "The story of my life\’ – see my TEDx speech about 7 years of my Abstract Art Journey.",
    description: "The story of my life\’ – see my TEDx speech about 7 years of my Abstract Art Journey.",
    medium: "Oil on canvas",
    size: "2' X 4'",
    src: "/30.jpg"
  },
  {
    id: 8,
    slug: "sunset-waves",
    title: "Sunset Waves",
    summary: "Warm crimson gradients reflecting off fluid textural motions...",
    description: "Warm crimson gradients reflecting off fluid textural motions captured at dusk thresholds.",
    medium: "Acrylic on canvas",
    size: "24\" x 24\"",
    src: "/9.jpg"
  },
  {
    id: 9,
    slug: "deep-thoughts",
    title: "Deep Thoughts",
    summary: "A complex labyrinth of heavy palette strokes and dark fields...",
    description: "A complex labyrinth of heavy palette strokes and dark fields provoking introspective visual states.",
    medium: "Mixed Media",
    size: "3' X 5'",
    src: "/10.jpg"
  },
  {
    id: 10,
    slug: "abstract-view",
    title: "Abstract View",
    summary: "Deconstructing symmetrical perspective into broad dynamic layers...",
    description: "Deconstructing symmetrical perspective into broad dynamic layers of bold primary balances.",
    medium: "Acrylic on canvas",
    size: "36\" x 48\"",
    src: "/11.jpg"
  },
  {
    id: 11,
    slug: "vibrant-strokes",
    title: "Vibrant Strokes",
    summary: "High-energy expressive paint applications crossing paths cleanly...",
    description: "High-energy expressive paint applications crossing paths cleanly on a heavy-weight canvas backdrop.",
    medium: "Acrylic on canvas",
    size: "30\" x 30\"",
    src: "/12.jpg"
  },
  {
    id: 12,
    slug: "the-core-painting",
    title: "The Core Painting",
    summary: "The absolute foundational balance point of raw aesthetic energy...",
    description: "The absolute foundational balance point of raw aesthetic energy and structural center points.",
    medium: "Oil on canvas",
    size: "4' X 4'",
    src: "/7.jpg"
  },

  // ==========================================================================
  // SECOND LOOP (ITEMS 13 - 24)
  // ==========================================================================
  {
    id: 13,
    slug: "in-the-deep-ii-c1",
    title: "In the deep II (Copy 1)",
    summary: "Alternative spatial exploration into mountains and vast horizons...",
    description: "Alternative spatial exploration into mountains and vast horizons using premium cold shades.",
    medium: "Acrylic on canvas",
    size: "2' X 3'",
    src: "/1.jpg"
  },
  {
    id: 14,
    slug: "the-guardian-c1",
    title: "The Guardian (Copy 1)",
    summary: "...Only five and already he has a signature style...",
    description: "A profound reflection on structure and scale, bringing out signature textures and heavy layers.",
    medium: "Oil on canvas",
    size: "24\" x 36\"",
    src: "/2.jpg"
  },
  {
    id: 15,
    slug: "abstract-ocean-c1",
    title: "Abstract Ocean (Copy 1)",
    summary: "Extended flow variations across deep marine brush techniques...",
    description: "Extended flow variations across deep marine brush techniques and turquoise canvas bases.",
    medium: "Acrylic on canvas",
    size: "30\" x 40\"",
    src: "/3.jpg"
  },
  {
    id: 16,
    slug: "modern-horizon-c1",
    title: "Modern Horizon (Copy 1)",
    summary: "A focused study on the horizontal baseline segment layers...",
    description: "A focused study on the horizontal baseline segment layers using modern metallic pigments.",
    medium: "Mixed Media",
    size: "3' X 3'",
    src: "/4.jpg"
  },
  {
    id: 17,
    slug: "in-the-sea-c1",
    title: "In The Sea (Copy 1)",
    summary: "A secondary look underneath fluid visual surface elements...",
    description: "A secondary look underneath fluid visual surface elements, expanding raw movement fields.",
    medium: "Acrylic on Canvas",
    size: "18\" x 24\"",
    src: "/5.jpg"
  },
  {
    id: 18,
    slug: "nature-canvas-c1",
    title: "Nature Canvas (Copy 1)",
    summary: "Re-evaluating rich forest floor patterns with warm earth strokes...",
    description: "Re-evaluating rich forest floor patterns with warm earth strokes and textured palette knives.",
    medium: "Acrylic on canvas",
    size: "40\" x 40\"",
    src: "/6.jpg"
  },
  {
    id: 19,
    slug: "bright-light-c1",
    title: "Bright Light (Copy 1)",
    summary: "Shifting light focus fields along high-contrast focal bands...",
    description: "Shifting light focus fields along high-contrast focal bands against raw black layouts.",
    medium: "Oil on canvas",
    size: "2' X 4'",
    src: "/7.jpg"
  },
  {
    id: 20,
    slug: "sunset-waves-c1",
    title: "Sunset Waves (Copy 1)",
    summary: "Dusk wave tracking utilizing deep magenta fluid properties...",
    description: "Dusk wave tracking utilizing deep magenta fluid properties over solid geometry grids.",
    medium: "Acrylic on canvas",
    size: "24\" x 24\"",
    src: "/8.jpg"
  },
  {
    id: 21,
    slug: "deep-thoughts-c1",
    title: "Deep Thoughts (Copy 1)",
    summary: "A deeper descent into visual mental complexity and tracking...",
    description: "A deeper descent into visual mental complexity using heavy impasto texturing methods.",
    medium: "Mixed Media",
    size: "3' X 5'",
    src: "/9.jpg"
  },
  {
    id: 22,
    slug: "abstract-view-c1",
    title: "Abstract View (Copy 1)",
    summary: "Asymmetrical balance patterns mapped across broad panels...",
    description: "Asymmetrical balance patterns mapped across broad panels with high-fidelity color fields.",
    medium: "Acrylic on canvas",
    size: "36\" x 48\"",
    src: "/10.jpg"
  },
  {
    id: 23,
    slug: "vibrant-strokes-c1",
    title: "Vibrant Strokes (Copy 1)",
    summary: "High-energy expressive paint applications crossing paths cleanly...",
    description: "High-energy expressive paint applications crossing paths cleanly on a heavy-weight template.",
    medium: "Acrylic on canvas",
    size: "30\" x 30\"",
    src: "/11.jpg"
  },
  {
    id: 24,
    slug: "the-core-c1",
    title: "The Core Painting (Copy 1)",
    summary: "The second variance layout inspecting central aesthetic points...",
    description: "The second variance layout inspecting central aesthetic points and micro-texture elements.",
    medium: "Oil on canvas",
    size: "4' X 4'",
    src: "/12.jpg"
  },

  // ==========================================================================
  // THIRD LOOP (ITEMS 25 - 36)
  // ==========================================================================
  {
    id: 25,
    slug: "in-the-deep-ii-c2",
    title: "In the deep II (Copy 2)",
    summary: "Final atmospheric landscape variations using broad geometric panels...",
    description: "Final atmospheric landscape variations using broad geometric panels and deep value shades.",
    medium: "Acrylic on canvas",
    size: "2' X 3'",
    src: "/1.jpg"
  },
  {
    id: 26,
    slug: "the-guardian-c2",
    title: "The Guardian (Copy 2)",
    summary: "The final layer review tracking massive abstract figure structures...",
    description: "The final layer review tracking massive abstract figure structures and rich charcoal additions.",
    medium: "Oil on canvas",
    size: "24\" x 36\"",
    src: "/2.jpg"
  },
  {
    id: 27,
    slug: "abstract-ocean-c2",
    title: "Abstract Ocean (Copy 2)",
    summary: "Concluding exploration into oceanic visuals and high-speed motion strokes...",
    description: "Concluding exploration into oceanic visuals and high-speed motion strokes.",
    medium: "Acrylic on canvas",
    size: "30\" x 40\"",
    src: "/3.jpg"
  },
  {
    id: 28,
    slug: "modern-horizon-c2",
    title: "Modern Horizon (Copy 2)",
    summary: "A definitive geometric summary mapping horizontal space grids...",
    description: "A definitive geometric summary mapping horizontal space grids using deep matte textures.",
    medium: "Mixed Media",
    size: "3' X 3'",
    src: "/4.jpg"
  },
  {
    id: 29,
    slug: "in-the-sea-c2",
    title: "In The Sea (Copy 2)",
    summary: "Final deep-water concepts breaking up linear alignment tracks...",
    description: "Final deep-water concepts breaking up linear alignment tracks with fluid pouring mediums.",
    medium: "Acrylic on Canvas",
    size: "18\" x 24\"",
    src: "/5.jpg"
  },
  {
    id: 30,
    slug: "nature-canvas-c2",
    title: "Nature Canvas (Copy 2)",
    summary: "Organic structural patterns finalized inside broad paint fields...",
    description: "Organic structural patterns finalized inside broad paint fields with premium earth tones.",
    medium: "Acrylic on canvas",
    size: "40\" x 40\"",
    src: "/6.jpg"
  },
  {
    id: 31,
    slug: "bright-light-c2",
    title: "Bright Light (Copy 2)",
    summary: "Concluding structural light study tracing high-intensity core nodes...",
    description: "Concluding structural light study tracing high-intensity core nodes in thick oil layers.",
    medium: "Oil on canvas",
    size: "2' X 4'",
    src: "/7.jpg"
  },
  {
    id: 32,
    slug: "sunset-waves-c2",
    title: "Sunset Waves (Copy 2)",
    summary: "The final dusk spectrum exploration capturing ambient field hues...",
    description: "The final dusk spectrum exploration capturing ambient field hues over fine woven linen.",
    medium: "Acrylic on canvas",
    size: "24\" x 24\"",
    src: "/8.jpg"
  },
  {
    id: 33,
    slug: "deep-thoughts-c2",
    title: "Deep Thoughts (Copy 2)",
    summary: "The final complex configuration layout of intersecting emotional paint paths...",
    description: "The final complex configuration layout of intersecting emotional paint paths and raw media tones.",
    medium: "Mixed Media",
    size: "3' X 5'",
    src: "/9.jpg"
  },
  {
    id: 34,
    slug: "abstract-view-c2",
    title: "Abstract View (Copy 2)",
    summary: "Definitive secondary perspective tracking clean primary balances...",
    description: "Definitive secondary perspective tracking clean primary balances across wide canvas profiles.",
    medium: "Acrylic on canvas",
    size: "36\" x 48\"",
    src: "/10.jpg"
  },
  {
    id: 35,
    slug: "vibrant-strokes-c2",
    title: "Vibrant Strokes (Copy 2)",
    summary: "The closing macro-stroke exploration tracing dynamic gestural rhythms...",
    description: "The closing macro-stroke exploration tracing dynamic gestural rhythms and speed motions.",
    medium: "Acrylic on canvas",
    size: "30\" x 30\"",
    src: "/11.jpg"
  },
  {
    id: 36,
    slug: "the-core-c2",
    title: "The Core Painting (Copy 2)",
    summary: "The ultimate focal center master panel closing the gallery series...",
    description: "The ultimate focal center master panel closing the gallery series with premium textured glazes.",
    medium: "Oil on canvas",
    size: "4' X 4'",
    src: "/12.jpg"
  }
];