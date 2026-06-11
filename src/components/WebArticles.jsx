import React from 'react';

export default function WebArticles() {
  const webArticlesData = [
  { src: "/web-articles-photos/50.png", alt: "SBS Radio", text: "“…one of the world’s youngest abstract artists and painting prodigy. Shorya is returning to the U.S. to participate and exhibit his works at the First Annual SPECTRUM New York.”" },
  { src: "/web-articles-photos/51.png", alt: "Business Insider", text: "“Shorya is God-gifted”" },
  { src: "/web-articles-photos/52.png", alt: "Canyon Creek", text: "“This five-year-old prodigy, Shaurya Mahanot proves to the nation that art is a form of expression which cannot be stopped.”" },
  { src: "/web-articles-photos/53.jpg", alt: "ht", text: "“Shorya is a 6-year-old boy and one of the world’s youngest abstract artists.” " },
  { src: "/web-articles-photos/54.png", alt: "BookOfAchievers", text: "“From bold brushstrokes to covering parts of a canvas with chart paper and letting colour drip over, Mahanot uses techniques he was never taught.”" },
  { src: "/web-articles-photos/55.jpg", alt: "Top Ten New", text: "“His family had never seen art like this before — there were shades of Jackson Pollock”" },
  { src: "/web-articles-photos/56.png", alt: "WJ", text: "Calm, composed and completely unperturbed by the attention…engrossed in colours and textures in front of him." },
  { src: "/web-articles-photos/57.jpg", alt: "Indias Hindu", text: "Mahanot didn’t let his young age prevent him from expressing himself in the brightest of colors." },
  { src: "/web-articles-photos/58.jpg", alt: "Abdul Kalam Fan Club", text: "The Claridge has swapped its casino for some culture…more than 50 artists who hail from around the world, and right in Atlantic City…from abstract expressionist art from an 8-year-old boy named Shorya Mahanot." },
  { src: "/web-articles-photos/59.png", alt: "Speaking Tree", text: "Known as a young Jackson Pollock, he specializes in abstract art and his work has already earned him international acclaim." },
  { src: "/web-articles-photos/060.jpg", alt: "Mojarto", text: "…Known for his mind-boggling abstract paintings, the little one is making waves on many art platforms." },
  { src: "/web-articles-photos/60.jpg", alt: "Times of India", text: "…There’s definitely an old soul in a child’s body." },
  { src: "/web-articles-photos/61.png", alt: "Parent Circle", text: "This 10-year-old boy can say a story without using a single word." },
  { src: "/web-articles-photos/62.jpeg", alt: "Art of the False", text: "Being compared to the likes of Picasso and Pollock at the tender age of four, Shorya Mahanot from Madhya Pradesh is the youngest abstract artist in Asia." },
  { src: "/web-articles-photos/063.png", alt: "Famous Cine Blog", text: "The Little Muse Who Splashed Sunlight While Passing By." },
  { src: "/web-articles-photos/064.png", alt: "Desh Apnayen", text: "When he showcased some of his Art along-side some well know artists like Yaacov Agam and Burt Young. The Artist community was overwhelmed by this young talent." },
  { src: "/web-articles-photos/065.png", alt: "Accion Preferente", text: "Child Prodigy Of India To Shock You With his Talent." },
  { src: "/web-articles-photos/67.png", alt: "DNA After Hrs", text: "…Of course, five is incredibly young, but if what Shorya is doing is good, it should be shown to the people."},
  { src: "/web-articles-photos/68.png", alt: "Mid Day", text: "Confident, Inspired Artist…" },
  { src: "/web-articles-photos/69.png", alt: "Audio Gorgeous", text: "Shorya Mahanot is one perfect living example of what Picasso remarked about children. A ‘wunderkind…" },
  { src: "/web-articles-photos/70.png", alt: "Kalki Group", text: "“The flair with which he paints can outdo any renowned painter or artist.”" },
  { src: "/web-articles-photos/72.png", alt: "Proudly India", text: "“…some of the child art prodigies from across the world who learnt to art before the talk.”" },
  { src: "/web-articles-photos/73.jpg", alt: "Blogthela", text: "“Shorya Mahanot a 7- year-old creates abstract expressionist paintings that group the expressive forces of nature with color and life.”" },
  { src: "/web-articles-photos/074.png", alt: "PW", text: "“Charming, adorable, Curious…add prodigy, confident, inspired, artist…”" },
  { src: "/web-articles-photos/74.jpg", alt: "Career India", text: "“Art Has No Age.”" },
  { src: "/web-articles-photos/75.jpg", alt: "IFF", text: "“Like Pollock, he creates nonfigurative expressionist paintings that steer the expressive forces of chronicle with colouration and motion.”" },
  { src: "/web-articles-photos/76.png", alt: "ProEves", text: "“The Spirit of the Indian Child.”" },
  { src: "/web-articles-photos/78.png", alt: "BuzzFeed", text: "“Different language.”" },
  { src: "/web-articles-photos/79.jpeg", alt: "ScoopWhoop", text: "“…those who watched him paint were left speechless”" },
  { src: "/web-articles-photos/80.jpg", alt: "The Times of India", text: "“Child prodigy Shorya Mahanot from Neemuch in Madhya Pradesh receives blessings from the legendary cartoonist RK Laxman.”" },
  { src: "/web-articles-photos/1080.jpg", alt: "Hindustan Times", text: "“Like Pollok, he creates abstract expressionist paintings that channel the expressive forces of life with color and motion. Unlike Pollock, however, Mahanot is six years old.”" },
  { src: "/web-articles-photos/180.jpg", alt: "Hindustan Times", text: "“His view is compared in similarity with Sir John Pollock which places him on this world arena of higher appreciation.”" },
  { src: "/web-articles-photos/280.jpg", alt: "Hindustan Times", text: "“Meet India’s five-year-old ‘Picasso’.”" },
  { src: "/web-articles-photos/380.jpg", alt: "Hindustan Times", text: "““Madhya Pradesh’s Shorya Mahanot, 11, known as the “World’s Youngest Signature Style Abstract Artist” and “India’s Child Picasso” is merely 11 years old…”" },
  { src: "/web-articles-photos/580.jpg", alt: "Hindustan Times", text: "“…he gravitated towards abstract works, very much like Jackson Pollock, who incidentally happens to be this young prodigy’s role model.”" },
  { src: "/web-articles-photos/680.png", alt: "Hindustan Times", text: "“The painting of this 10 year are sold at the price of 45,000 dollars and has been placed alongside the legendary artists like Anthony Quinn, Burt Young, John Lennon etc.”" },
  { src: "/web-articles-photos/7080.jpg", alt: "Hindustan Times", text: "“By the age 4, he had made 100 acrylic paintings…”" },
  { src: "/web-articles-photos/1081.png", alt: "Hindustan Times", text: "“….an astounding painter, who is usually compared to the legendary artist, Jackson Pollock, because of the similarity in their style of works.”" },
  { src: "/web-articles-photos/1082.png", alt: "Hindustan Times", text: "“When asked about Pollock in an interview, Shorya replied, “He also makes paintings like me.”" },
  { src: "/web-articles-photos/1083.png", alt: "Hindustan Times", text: "“…His beautiful abstract work has been compared to Jackson Pollock’s and has earned him international acclaim.”" },
  { src: "/web-articles-photos/1084.png", alt: "Hindustan Times", text: "“…When asked about Pollock in an interview, Shorya replied, “He also makes paintings like me.”" },
  { src: "/web-articles-photos/1085.jpeg", alt: "Hindustan Times", text: "“R.K. Laxman…blessed Shorya and gifted him with an autographed painting…”" },
  { src: "/web-articles-photos/1086.png", alt: "Hindustan Times", text: "“Doodle with a difference.”" },
  { src: "/web-articles-photos/1087.jpg", alt: "Hindustan Times", text: "“Industry”" },
  { src: "/web-articles-photos/1088.jpg", alt: "Hindustan Times", text: "“Contemporary abstract artists watch out! Shorya Mahanot is creating works that are easily mistakable for a Jackson Pollock….. and he is only 6!”" },
  { src: "/web-articles-photos/1089.jpg", alt: "Hindustan Times", text: "“Xuất hiện “tiểu Picasso” của Ấn Độ”" },
  { src: "/web-articles-photos/1090.jpg", alt: "Hindustan Times", text: "“… he’s nine-years-old, and is going to teach Ranveer Singh and Sourav Ganguly how to paint.”" },
  { src: "/web-articles-photos/1091.jpg", alt: "Hindustan Times", text: "“California Antique shops stores”" },
  { src: "/web-articles-photos/1092.png", alt: "Hindustan Times", text: "“…even amazed the great Indian cartoonist RK Laxman who accepted Mahanot as his disciple.”" }
];

  return (
    <div className="shorya-web-articles-root">

      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">Web Articles</h1>
        </div>
      </div>

      <div className="shorya-articles-main-wrapper">
        {webArticlesData.map((article, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div key={index} className="shorya-article-row-item">
              <div className={`shorya-article-flex-box-layout ${isImageLeft ? 'image-on-left' : 'image-on-right'}`}>

                <div className="shorya-article-image-box">
                  <img src={article.src} alt={article.alt} loading="lazy" className="shorya-article-inline-responsive-img" />
                </div>

                <div className="shorya-article-text-box">
                  <p className="shorya-web-article-paragraph-value">
                    {article.text}
                  </p>
                </div>

              </div>

              {index < webArticlesData.length - 1 && (
                <hr className="shorya-article-dashed-line-divider" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}