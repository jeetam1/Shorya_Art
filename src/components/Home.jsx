import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { gridItems } from '../data/gridData'; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="art-grid">
      {gridItems.map((item) => (
        <article 
          key={item.id} 
          className="portfolio-entry-card" 
          onClick={() => {
           
            if (item.id === 10) {
              navigate('/readers-digest');
            } else if (item.id === 13) {
              navigate('/yahoo');
            } else if (item.id === 14) {
              navigate('/sbs-radio'); 
            } else if (item.directLink) {
              navigate(item.directLink.replace('#', '')); 
            } else {
              navigate(`/artwork/${item.slug}`);
            }
          }}
        >
          <div className="art-card-wrapper">
            <img 
              loading="lazy" 
              src={item.src} 
              alt={item.isArticle ? `${item.title} Press Feature - Shorya Mahanot` : `${item.title} - Acrylic on Canvas Abstract Painting by Shorya Mahanot`} 
              className="art-card-img" 
            />
            
            <div className="card-hover-overlay">
              <h3 className="card-hover-title">{item.title}</h3>
              <p className="card-hover-description">
                {item.summary || item.description || ""}
              </p>
              <div className="card-hover-icon-circle" aria-hidden="true">
                <Search size={20} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}