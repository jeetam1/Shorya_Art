import React from 'react';

export default function Awards() {
  return (
    <div className="awards-page-container">
      
      <div className="awards-header-section">
        <div 
          className="awards-banner-strip" 
          style={{ backgroundImage: "url('/events-photos/701.jpg')" }}
        ></div>
        
        <div className="awards-title-box">
          <h1 className="awards-main-title">Awards & Certificates</h1>
        </div>
      </div>

      <div className="awards-content-wrapper">
        
        {/* Microsoft Section */}
        <section className="award-section">
          <h2 className="award-title">Microsoft</h2>
          <img src="/events-photos/35.jpg" alt="Microsoft Future Decoded" className="award-image" />
          <p className="award-text">
            Shorya was a part of the futuredecoded 2017 event by Microsoft in India. Every design he #createdonsurface was appreciated and the collaboration taught Shorya a things or two about taking his abstract art to digital medium.
          </p>
        </section>

        {/* Celebrity Chef Gala Section */}
        <section className="award-section">
          <h2 className="award-title">Celebrity Chef Gala</h2>
          <img src="/events-photos/36.jpg" alt="Celebrity Chef Gala Certificate" className="award-image" />
          <p className="award-text">
            Just one of the many certificates by Chef Gala has been the highlights of Shorya's abstract art journey. Shorya art found its takers not just in terms of appreciation but also in terms of value and patronage.
          </p>
        </section>

        {/* Pogo Section */}
        <section className="award-section">
          <h2 className="award-title">Pogo</h2>
          <img src="/events-photos/37.jpg" alt="Pogo Amazing Kids Awards 2012" className="award-image" />
          <p className="award-text">
            Need we say more, for us, Shorya has always been an amazing child. The recognition by Pogo in 2012 has further humbled Shorya in his outlook towards the art and the impact it brings in his life.
          </p>
        </section>

        {/* TEDx Section */}
        <section className="award-section">
          <h2 className="award-title">TEDx</h2>
          <img src="/events-photos/38.jpg" alt="TEDx Appreciation" className="award-image" />
          <p className="award-text">
            What marks arrival of the next generation is their courage to create and to speak about themselves. TEDx acknowledged Shorya and his Abstract Art and that's highest appreciation for him and his followers.
          </p>
        </section>

        {/* R.K.Laxman Section */}
        <section className="award-section">
          <h2 className="award-title">R.K.Laxman</h2>
          <img src="/events-photos/39.png" alt="With R.K. Laxman" className="award-image" />
          <p className="award-text">
            When you sit on the shoulders of giants, you see the whole world ahead. A signature style abstract gets a signatured brush from renowned cartoonist (Late) R.K. Laxman, what else one would want in life, if not appreciations and blessings from elders and legends.
          </p>
        </section>

      </div>
    </div>
  );
}