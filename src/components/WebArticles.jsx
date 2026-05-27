import React from 'react';

export default function WebArticles() {
  // Verbatim chronological sequence extracted from your 2026 media video clip
  const webArticlesData = [
    { src: "/50.png", alt: "SBS Radio", text: "“Shorya is God-gifted”" },
    { src: "/51.png", alt: "Business Insider", text: "“This five-year-old prodigy, Shaurya Mahanot proves to the nation that art is a form of expression which cannot be stopped.”" },
    { src: "/52.png", alt: "Canyon Creek", text: "“Shorya is a 6-year-old boy and one of the world's youngest abstract artists.”" },
    { src: "/53.jpg", alt: "ht", text: "“From bold brushstrokes to covering parts of a canvas with chart paper and letting colour drip over, Mahanot uses techniques he was never taught.”" },
    { src: "/54.png", alt: "BookOfAchievers", text: "BookOfAchievers overwhelmed by this young talent." },
    { src: "/55.jpg", alt: "Top Ten New", text: "Child Prodigy Of India To Shock You With His Talent." },
    { src: "/56.png", alt: "WJ", text: "...Of course, five is incredibly young, but if what Shorya is doing is good, it should be shown to the people." },
    { src: "/57.jpg", alt: "Indias Hindu", text: "Confident, Inspired Artist..." },
    { src: "/58.jpg", alt: "Abdul Kalam Fan Club", text: "Shorya Mahanot is one perfect living example of what Picasso remarked about children. A 'wunderkind'..." },
    { src: "/59.png", alt: "Speaking Tree", text: "The flair with which he paints can outdo any renowned painter or artist." },
    { src: "/60.jpg", alt: "Mojarto", text: "...some of the child art prodigies from across the world who learnt to art before the talk." },
    { src: "/61.png", alt: "Times of India", text: "Shorya Mahanot a 7-year-old creates abstract expressionist paintings that group the expressive forces of nature with color and life." },
    { src: "/62.jpeg", alt: "Parent Circle", text: "Charming, Adorable, Curious...Add prodigy, confident, inspired, artist..." },
    { src: "/63.png", alt: "Art of the False", text: "Art Has No Age." },
    { src: "/64.png", alt: "Famous Cine Blog", text: "Like Pollock, he creates nonfigurative expressionist paintings that steer the expressive forces of chronicle with colouration and motion." },
    { src: "/65.png", alt: "Desh Apnayen", text: "The Spirit of the Indian Child." },
    { src: "/67.png", alt: "Accion Preferente", text: "Different language." },
    { src: "/67.png", alt: "DNA After Hrs", text: "...those who watched him paint were left speechless" },
    { src: "/68.jpg", alt: "Mid Day", text: "Child prodigy Shorya Mahanot from Neemuch in Madhya Pradesh receives blessings from the legendary cartoonist RK Laxman." },
    { src: "/69.png", alt: "Audio Gorgeous", text: "Like Pollock, he creates abstract expressionist paintings that channel the expressive forces of life with color and motion. Unlike Pollock, however, Mahanot is six years old." },
    { src: "/70.png", alt: "Kalki Group", text: "His view is compared in similarity with Sir John Pollock which places him on this world arena of higher appreciation." },
    { src: "/71.png", alt: "Proudly India", text: "Meet India's five-year-old 'Picasso'." },
    { src: "/72.png", alt: "Blogthela", text: "...He gravitated towards abstract works, very much like Jackson Pollock, who incidentally happens to be this young prodigy's role model." },
    { src: "/73.jpg", alt: "PW", text: "The painting of this 10 year old are sold at the price of 45,000 dollars and has been placed alongside the legendary artists like Anthony Quinn, Burt Young, John Lennon etc." },
    { src: "/74.jpg", alt: "Career India", text: "By the age of 4, he had made 100 acrylic paintings..." },
    { src: "/75.jpg", alt: "IFF", text: "...an astounding painter, who is usually compared to the legendary artist, Jackson Pollock, because of the similarity in their style of works." },
    { src: "/76.png", alt: "ProEves", text: "When asked about Pollock in an interview, Shorya replied, \"He also makes paintings like me.\"" },
    { src: "/86.png", alt: "BuzzFeed", text: "...His beautiful abstract work has been compared to Jackson Pollock's and has earned him international acclaim." },
    { src: "/78.png", alt: "ScoopWhoop", text: "...When asked about Pollock in an interview, Shorya replied, \"He also makes paintings like me.\"" },
    { src: "/79.jpeg", alt: "The Times of India", text: "R.K. Laxman...blessed Shorya and gifted him with an autographed painting..." },
    { src: "/80.jpg", alt: "Hindustan Times", text: "Doodle with a difference." }
  ];

  return (
    <div className="shorya-web-articles-view-root">
      
      {/* HEADER BANNER FRAME */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')" }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Web Articles</h1>
        </div>
      </div>

      {/* ARTICLES SCROLL COLUMN SCAFOLD */}
      <div className="shorya-web-articles-list-container">
        {webArticlesData.map((article, index) => (
          <div key={index} className="shorya-web-article-row-card">
            <div className="shorya-web-article-split-layout">
              
              {/* Left Publisher Badge Box */}
              <div className="shorya-web-article-badge-box">
                <div className="shorya-web-article-badge-frame">
                  <img src={article.src} alt={article.alt} className="shorya-web-article-badge-img" />
                </div>
              </div>

              {/* Right Verbatim Text Block */}
              <div className="shorya-web-article-text-box">
                <p className="shorya-web-article-paragraph-value">{article.text}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* FOOTER SIGNATURE PANEL */}
      <footer className="shorya-view-footer-signature-line">
        Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
      </footer>
    </div>
  );
}