import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { gridItems } from './data/gridData';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  
  // State to track which dropdown sub-menus are expanded
  const [expandedMenus, setExpandedMenus] = useState({
    Gallery: false,
    Media: false,
    'Look the world is talking': false
  });

  // Full navigation array mapped directly from your reference data
  const navItems = [
    { name: 'Home', hasSub: false },
    { name: 'Biography', hasSub: false },
    { name: 'Artist\'s Statement', hasSub: false },
    { 
      name: 'Gallery', 
      hasSub: true, 
      subItems: ['Acrylic on canvas'] 
    },
    { name: 'Events', hasSub: false },
    { 
      name: 'Media', 
      hasSub: true, 
      subItems: ['Newspapers Articles', 'Magazines', 'Web Articles', 'Videos'] 
    },
    { 
      name: 'Look the world is talking', 
      hasSub: true, 
      subItems: ['Look the world is talking1', 'Twitter Mentions'] 
    },
    { name: 'Awards & Certificates', hasSub: false },
    { name: 'Contact', hasSub: false }
  ];

  // Function to handle click events on parent items
  const handleMenuClick = (item) => {
    setActiveTab(item.name);
    
    if (item.hasSub) {
      setExpandedMenus(prev => ({
        ...prev,
        [item.name]: !prev[item.name] // Toggles the clicked menu open or closed
      }));
    }
  };

  return (
    <div className="app-container">
      
      {/* ==========================================================================
         1. LEFT SIDEBAR COMPONENT
         ========================================================================== */}
      <aside className="sidebar">
        <div className="logo-container">
          <img src="/image.png" alt="Shorya Logo" className="brand-logo-img" />
        </div>

        <nav className="nav-menu">
          <ul>
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <li 
                  className={`${activeTab === item.name ? 'active' : ''} ${item.hasSub ? 'parent-item' : ''}`}
                  onClick={() => handleMenuClick(item)}
                >
                  <a 
                    href={item.hasSub ? undefined : `#${item.name.toLowerCase().replace(/ /g, '-')}`}
                    onClick={(e) => item.hasSub && e.preventDefault()} // Prevents page jumps on dropdown toggle
                  >
                    <span className="nav-text">{item.name}</span>
                    {item.hasSub && (
                      expandedMenus[item.name] ? 
                        <Minus className="nav-icon" size={14} strokeWidth={2} /> : 
                        <Plus className="nav-icon" size={14} strokeWidth={2} />
                    )}
                  </a>
                </li>

                {/* DYNAMIC DROP-DOWN SUB-MENU ITEMS */}
                {item.hasSub && expandedMenus[item.name] && (
                  <ul className="sub-menu-list">
                    {item.subItems.map((sub) => (
                      <li 
                        key={sub} 
                        className={`sub-item ${activeTab === sub ? 'sub-active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation(); // Stops parent collapse trigger execution
                          setActiveTab(sub);
                        }}
                      >
                        <a href={`#${sub.toLowerCase().replace(/ /g, '-')}`}>
                          <span className="sub-nav-text">{sub}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* BOTTOM ANCHORED WIDGET CLUSTER */}
        <div className="sidebar-bottom-widgets">
          <div className="sidebar-social-section">
            <span className="social-section-heading">Social Links</span>
            <div className="social-links-grid">
              <a href="#facebook" className="social-img-btn fb-bg" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#twitter" className="social-img-btn tw-bg" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
              <a href="#instagram" className="social-img-btn insta-bg" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="#pinterest" className="social-img-btn pin-bg" target="_blank" rel="noreferrer"><i className="fa-brands fa-pinterest-p"></i></a>
              <a href="#youtube" className="social-img-btn yt-bg" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="sidebar-twitter-section">
            <span className="twitter-panel-text">Tweets by Shoryamahanot</span>
          </div>
        </div>

        <div className="sidebar-empty-basement"></div>
      </aside>

      {/* ==========================================================================
         2. RIGHT SCROLLING GRID WORKSPACE
         ========================================================================== */}
      <main className="main-content">
        <div className="art-grid">
          {gridItems.map((item) => (
            <article key={item.id} className="portfolio-entry-card">
              <div className="art-card-wrapper">
                <img src={item.src} alt={item.title} className="art-card-img" />
                <div className="card-hover-overlay">
                  <h3 className="card-hover-title">{item.title}</h3>
                  <div className="card-hover-icon-circle">
                    <Search size={18} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

    </div>
  );
}