import React, { useState, useEffect } from 'react';
import PageBanner from './PageBanner';
import { testimonialsData } from '../data/testimonialsData';

export default function LookWorldTalking() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  useEffect(() => {
    const arr = [...testimonialsData];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffledTestimonials(arr);
  }, []);

  return (
    <div className="shorya-look-talking-view-root">
      
      <PageBanner title="Look the world is talking" bgImage="/look_the_world_is_talking.jpg" />

      <div className="shorya-talking-cards-grid-container">
        <div className="strong-view default dark">
          <div className="strong-content strong-normal columns-1">
            {shuffledTestimonials.map((card, index) => (
              <div key={index} className="testimonial">
                <div className="testimonial-inner">
                  {card.heading && (
                    <h3 className="testimonial-heading">
                      <i className="fa-solid fa-quote-left testimonial-quote-icon"></i>
                      {card.heading}
                    </h3>
                  )}
                  
                  <div className="testimonial-content">
                    {card.imageSrc && (
                      <div className="testimonial-image">
                        <img 
                          loading="lazy" 
                          src={card.imageSrc} 
                          alt={card.heading || card.author} 
                          width="260"
                          height="170"
                        />
                      </div>
                    )}
                    
                    {card.quote && (
                      <p className="testimonial-quote-body-text">
                        {card.quote}
                      </p>
                    )}
                  </div>
                  
                  {card.author && (
                    <div className="testimonial-field testimonial-name">
                      {card.author}
                    </div>
                  )}
                  
                  <div className="clear"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}