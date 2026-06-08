import React from 'react';

export default function LookWorldTalking() {
  // Chronological verification mapping verbatim text frames from your video file
  const quotesData = [
    { src: "/50.png", label: "Naturally Curious", short: "naturally curious", author: "Desh Apnayen" },
    { src: "/51.png", label: "Awe-inspiring", short: "a group of grown-ups watched in awe as four-year-old 'abstract artist' Shorya Mahanot displayed his creativity on canvas.", author: "Hindustan times" },
    { src: "/52.png", label: "An Ageless Art", short: "\"Art Has No Age\"", author: "Means of the false" },
    { src: "/53.jpg", label: "Calculated, Balanced", short: "Like his master Pollock, he spreads his canvas on the floor and embarks on creating with calculated strokes in various layers while weighing the color composition and the balance between his brushstrokes, dripping and pouring.", author: "Abdul Kalam Fan Club" },
    { src: "/54.png", label: "Blissfully Unaware", short: "Shorya is blissfully unaware of the significance of his brushstrokes. He does not understand what is special about the paintings that he creates as a matter of routine. He is ignorant about the impact of his paintings on others. I feel this innocence is the secret ingredient that makes his paintings special.", author: "The Times of India" },
    { src: "/55.jpg", label: "Making Waves Globally", short: "“...Known for his mind-boggling abstract paintings, the little one is making waves on many art platforms”", author: "Yahoo! News" },
    { src: "/56.png", label: "Motivates you", short: "strong enough motivator.", author: "Means of the false" },
    { src: "/57.jpg", label: "Young at Art", short: "“...Mahanot didn't let his young age prevent him from expressing himself in the brightest of colors...”", author: "The Huffington Post" },
    { src: "/58.jpg", label: "Genius at work", short: "this is genius at work.", author: "The Huffington Post" },
    { src: "/59.png", label: "Child Picasso", short: "Dubbed a \"child Picasso\" by the Indian media, five-year-old Shorya hit the headlines last month when India's most famous cartoonist took him under his wing.", author: "The Guardian" },
    { src: "/60.jpg", label: "Splashing Sunlight", short: "“The Little Muse Who Splashed Sunlight While Passing By..”", author: "Indian Women Blog" },
    { src: "/61.png", label: "Bold Brush Strokes", short: "“From bold brush strokes to covering parts of a canvas with chart paper and letting colour drip over, Mahanot uses techniques he was never taught.”", author: "Hindustan times" },
    { src: "/62.jpeg", label: "Prolific Abstractionist", short: "Mahanot has created 200 paintings so far, inspired mainly by nature. Nationally, his works have been shown at galleries in Udaipur in Rajasthan, where three of his paintings were sold for Rs 45,000 each, and in Ujjain in Madhya Pradesh.", author: "Hindustan times" },
    { src: "/63.png", label: "Youngest Abstract Artist Around", short: "Shorya from Neemuch (M.P.) is one of the youngest abstract artists in the world.", author: "The Indian Express" },
    { src: "/64.png", label: "The tender artist", short: "Being compared to the likes of Picasso and Pollock at the tender age of four, Shorya Mahanot from Madhya Pradesh is the youngest abstract artist in Asia.", author: "Daily O" },
    { src: "/65.png", label: "Synonymous", short: "Neemuch may soon be famed as the birthplace and workplace of India's greatest contemporary artist; a South Asian place a place as synonymous with 21st-century abstraction as New York is for pop art.", author: "the guardian" },
    { src: "/65.png", label: "A Sharp Version", short: "This piece of art is like a sharp version of Kandinsky meets Pollock. And best of all, it was made by a four-year-old.", author: "Means of the false" },
    { src: "/67.png", label: "Aces up his sleeves", short: "compared to the ace artist and painter Picasso.", author: "India times" },
    { src: "/68.png", label: "Surprising the World", short: "Shorya Mahanot took the world by surprise with his impressive abstract painting.", author: "Means of the false" },
    { src: "/69.png", label: "Young and Worthy", short: "Many doubt Shorya's talent because he is so young. But when they see him work, they know his worth.", author: "Hindustan times" },
    { src: "/70.png", label: "Nurturing Art", short: "many of the artists from Claridge like the aforementioned Quinn, as well as fellow actor Burt Young, in addition to Becerra, Caplan, Simbari, Fazzino — of whom Holtzman has two of his 3D works, one of A.C. and another of Philly — plus, the now 10-year-old Shorya Mahanot, whom Holtzman has carried since he was 5.", author: "Atlantic city Weekly" },
    { src: "/71.png", label: "A Chronicle of colors and strokes", short: "“Like Pollock, he creates nonfigurative expressionist paintings that steer the expressive forces of chronicle with colouration and motion.”", author: "Hindustan times" },
    { src: "/72.png", label: "Unique", short: "Shorya has been winning laurels from the age of three years because of his unique painting style.", author: "Daily hunt" },
    { src: "/73.jpg", label: "Charming!", short: "Charming, adorable, curious, playful.", author: "Holtzman Gallery" },
    { src: "/74.jpg", label: "Shades of Pollocks", short: "“...His family had never seen an art like this before — there were shades of Jackson Pollock...”", author: "Reader's Digest" },
    { src: "/75.jpg", label: "Beauty", short: "“...His beautiful abstract work has been compared to Jackson Pollock's and has earned him international acclaim.”", author: "Buzz Feed" },
    { src: "/76.png", label: "God-gifted", short: "“...Shorya is God-gifted...”", author: "SBS Australia" },
    { src: "/76.png", label: "Mastery over colours", short: "Passionate about colors, Shorya has mastery over their use, and his technique is again comparable to that of Pollock's famous 'drip painting'.", author: "Abdul Kalam Fan Club" },
    { src: "/78.jpg", label: "Competition to Contemporaries", short: "Contemporary abstract artists watch out! Shorya Mahanot is creating works that are easily mistakeable for a Jackson Pollock... and he is only 6!", author: "Rehs galleries" },
    { src: "/79.jpeg", label: "Blessed", short: "When five-year-old Shorya Mahanot painted one of his masterpieces on Tuesday, the 100-odd spectators experienced just that: a subliminal washing away of the everyday drabness, giving way to a colourful vibrancy. Renowned cartoonist R K Laxman, who witnessed the painting extravaganza unspool in the precincts of his residence in Pune, later blessed", author: "THE TIMES OF INDIA" },
    { src: "/80.jpg", label: "Child Picasso!", short: "witnessing a prodigy at work.", author: "Midday" },
    { src: "/81.jpg", label: "World's Youngest Abstractionist", short: "Madhya Pradesh's Shorya Mahanot, 11, known as the 'World's Youngest Signature Style Abstract Artist' and 'India's Child Picasso' is merely 11 years old. YONO#30UNDER30", author: "The Times of India" },
    { src: "/82.jpg", label: "Inspired", short: "Only five and already he has a signature style.", author: "California Antique Shops Stores" },
    { src: "/83.jpg", label: "Multilayered, Inspired", short: "His art is multilayered, inspired from nature", author: "Reader's Digest" },
    { src: "/84.jpg", label: "Expressive Force of Nature", short: "“Shorya Mahanot a 7-year-old creates abstract expressionist paintings that group the expressive forces of nature with color and life.”", author: "India times" },
    { src: "/85.jpg", label: "Wunderkind", short: "Shorya Mahanot is one perfect living example of what Picasso remarked about children.", author: "Abdul Kalam Fan Club" },
    { src: "/86.png", label: "Making a Splash", short: "“The level of energy is wonderful. He is so little but he does such a great job. He is nothing less than a pro,” says Laxman. “I like the way he mixes the colours on the brush before splashing it on the canvas, very nice technique,” he adds.", author: "Midday" },
    { src: "/87.jpg", label: "India's Child Picasso!", short: "India's 'Child Picasso' puts on his glasses and takes aim at the canvas.", author: "The Guardian" },
    { src: "/88.png", label: "The Art Guide New York", short: "painting\" or \"action painting.\"", author: "The Art Guide New York" },
    { src: "/89.png", label: "Abstract Artist", short: "Shorya works in acrylics in a heavy impasto technique that has been compared to Jackson Pollock's “drip painting” or “action painting.”", author: "The Guardian" }
  ];

  return (
    <div className="shorya-look-talking-view-root" style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center' }}>
      
      {/* HEADER BANNER STRIP */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", width: '100%', justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Look the world is talking</h1>
        </div>
      </div>

      {/* CORE CARDS WRAPPER GRID - CENTERED */}
      <div className="shorya-talking-cards-grid-container" style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {quotesData.map((card, index) => (
          <div key={index} className="shorya-talking-quote-card-item" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* Header section with styling vector symbol */}
            <div className="shorya-talking-card-top-indicator-row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="shorya-talking-quote-mark-icon" style={{ fontSize: '30px', color: '#888', lineHeight: '1' }}>“</span>
              <h2 className="shorya-talking-card-main-label" style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '20px', fontWeight: '700', color: '#333333', margin: '0' }}>{card.label}</h2>
            </div>

            {/* Split body: Left image brand / Right description */}
            <div className="shorya-talking-card-split-body-layout" style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div className="shorya-talking-card-brand-img-box" style={{ flex: '0 0 150px' }}>
                <img src={card.src} alt={card.author} className="shorya-talking-card-publisher-badge-img" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              
              <div className="shorya-talking-card-narrative-text-box" style={{ flex: '1', minWidth: '250px' }}>
                <p className="shorya-talking-card-short-quote" style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '15px', color: '#555555', lineHeight: '1.6', margin: '0 0 10px 0', fontStyle: 'italic' }}>{card.short}</p>
                <span className="shorya-talking-card-author-signature" style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#888888', fontWeight: '600', textTransform: 'uppercase' }}>— {card.author}</span>
              </div>
            </div>

            {/* Optional Divider Line between cards */}
            {index < quotesData.length - 1 && (
              <hr style={{ width: '100%', border: '0', borderBottom: '1px dashed #e5e5e5', marginTop: '20px' }} />
            )}

          </div>
        ))}
      </div>

      
    </div>
  );
}