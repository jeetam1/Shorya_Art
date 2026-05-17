import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { gridItems } from './data/gridData';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [expandedMenu, setExpandedMenu] = useState(null);
  
  // Dynamic template routing state tracking variables
  const [currentView, setCurrentView] = useState({ type: 'grid', data: null });

  // Pinned magnifier coordinate tracking metrics
  const [magnifier, setMagnifier] = useState({ x: 0, y: 0, show: false });
  const containerRef = useRef(null);

  // Set your desired zoom magnification power scale here (3.5 matches the CSS background-size)
  const ZOOM_LEVEL = 3.5; 

  useEffect(() => {
    const handleUrlRouting = () => {
      const currentHash = window.location.hash;
      
      if (!currentHash || currentHash === '#home') {
        setCurrentView({ type: 'grid', data: null });
        setActiveTab('Home');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash.startsWith('#/artwork/')) {
        const urlSlug = currentHash.replace('#/artwork/', '');
        const match = gridItems.find(item => item.slug === urlSlug);
        
        if (match) {
          setCurrentView({ type: 'detail', data: match });
          setActiveTab('Gallery');
          setMagnifier(prev => ({ ...prev, show: false }));
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleUrlRouting);
    handleUrlRouting(); 
    return () => window.removeEventListener('hashchange', handleUrlRouting);
  }, []);

  const handleMenuClick = (item) => {
    if (item.hasSub) {
      setExpandedMenu(expandedMenu === item.name ? null : item.name);
    } else {
      setActiveTab(item.name);
      setExpandedMenu(null);
      window.location.hash = '#home'; 
    }
  };

  const handleArtworkSelection = (item) => {
    if (item.slug) {
      window.location.hash = `#/artwork/${item.slug}`;
    } else {
      window.location.hash = `#/artwork/${item.title.toLowerCase().replace(/ /g, '-')}`;
    }
  };

  // CORRECTED PIXEL MATH: Keeps the background image strictly locked inside the container bounds
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Get cursor positions relative to the image container box edges
    const posX = e.clientX - left;
    const posY = e.clientY - top;

    // Boundary validation checks to turn off the lens outside the asset perimeter
    if (posX < 0 || posY < 0 || posX > width || posY > height) {
      setMagnifier(prev => ({ ...prev, show: false }));
    } else {
      setMagnifier({ x: posX, y: posY, show: true });
    }
  };

  return (
    <div className="app-container">
      
      {/* 1. LEFT ACCORDION NAVIGATION SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-container" onClick={() => window.location.hash = '#home'} style={{ cursor: 'pointer' }}>
          <img src="/image.png" alt="Shorya Logo" className="brand-logo-img" />
        </div>

        <nav className="nav-menu">
          <ul>
            {navItems.map((item) => {
              const isExpanded = expandedMenu === item.name;
              const isActive = activeTab === item.name;
              
              return (
                <React.Fragment key={item.name}>
                  <li 
                    className={`${isActive ? 'active' : ''} ${item.hasSub ? 'parent-item' : ''}`}
                    onClick={() => handleMenuClick(item)}
                  >
                    <a 
                      href={item.hasSub ? undefined : `#home`}
                      onClick={(e) => item.hasSub && e.preventDefault()}
                    >
                      <span className="nav-text">{item.name}</span>
                      {item.hasSub && (
                        isExpanded ? 
                          <Minus className="nav-icon" size={14} strokeWidth={2} /> : 
                          <Plus className="nav-icon" size={14} strokeWidth={2} />
                      )}
                    </a>
                  </li>

                  <div className={`sub-menu-wrapper ${isExpanded ? 'is-open' : ''}`}>
                    <ul className="sub-menu-list">
                      {item.hasSub && item.subItems.map((sub) => (
                        <li 
                          key={sub} 
                          className={`sub-item ${activeTab === sub ? 'sub-active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab(sub);
                            window.location.hash = '#home'; 
                          }}
                        >
                          <a href="#home" onClick={(e) => e.preventDefault()}>
                            <span className="sub-nav-text">{sub}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-bottom-widgets">
          <div className="sidebar-social-section">
            <span className="social-section-heading">Social Links</span>
            <div className="social-links-grid">
              <a href="#facebook" className="social-img-btn fb-bg"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#twitter" className="social-img-btn tw-bg"><i className="fa-brands fa-twitter"></i></a>
              <a href="#instagram" className="social-img-btn insta-bg"><i className="fa-brands fa-instagram"></i></a>
              <a href="#pinterest" className="social-img-btn pin-bg"><i className="fa-brands fa-pinterest-p"></i></a>
              <a href="#youtube" className="social-img-btn yt-bg"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="sidebar-twitter-section">
            <span className="twitter-panel-text">Tweets by Shoryamahanot</span>
          </div>
        </div>

        <div className="sidebar-empty-basement"></div>
      </aside>

      {/* 2. RIGHT DISPLAY WORKSPACE CONTAINER */}
      <main className="main-content">
        
        {currentView.type === 'grid' ? (
          <div className="art-grid">
            {gridItems.map((item) => (
              <article 
                key={item.id} 
                className="portfolio-entry-card" 
                onClick={() => handleArtworkSelection(item)}
              >
                <div className="art-card-wrapper">
                  <img src={item.src} alt={item.title} className="art-card-img" />
                  <div className="card-hover-overlay">
                    <h3 className="card-hover-title">{item.title}</h3>
                    {item.summary && <p className="card-hover-summary">{item.summary}</p>}
                    <div className="card-hover-icon-circle">
                      <Search size={18} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="artwork-detail-page">
            <header className="detail-page-header">
              <h1 className="artwork-main-title">{currentView.data.title}</h1>
              <div className="artwork-meta-subheader">
                Posted | <span className="comment-ticker">0 comments</span>
              </div>
            </header>

            <div className="detail-page-content-body">
              
              {/* IMAGE WRAPPER WITH EXACT CURSOR TRACKING EVENT CONTROLLERS */}
              <div 
                className="detail-image-container"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMagnifier(prev => ({ ...prev, show: false }))}
              >
                <img 
                  src={currentView.data.src} 
                  alt={currentView.data.title} 
                  className="detail-large-img" 
                />

                {/* THE MOVING VIEWPORT WINDOW LAYER REPLICA */}
                {magnifier.show && (
                  <div 
                    className="artwork-magnifier-glass-lens"
                    style={{
                      left: `${magnifier.x - 75}px`, // Centers the 150px square exactly horizontally on cursor
                      top: `${magnifier.y - 75}px`,  // Centers the 150px square exactly vertically on cursor
                      backgroundImage: `url(${currentView.data.src})`,
                      
                      /* FIXED CALCULATIONS: Multiplies relative cursor coordinates against zoom factor levels 
                         to lock the underlying image perfectly in place as your frame transitions */
                      backgroundPosition: `-${(magnifier.x * ZOOM_LEVEL) - 75}px -${(magnifier.y * ZOOM_LEVEL) - 75}px`
                    }}
                  />
                )}
              </div>

              <div className="detail-text-description-area">
                <p className="artwork-description-paragraph">
                  {currentView.data.description || "I look at mountains and oceans. Where you stand can change the meaning of deep for you."}
                </p>
                
                <ul className="artwork-technical-bullet-list">
                  <li><strong>{currentView.data.medium || "Acrylic on Canvas"}</strong></li>
                  <li><strong>Size: {currentView.data.size || "2' X 3'"}</strong></li>
                </ul>
              </div>
            </div>

            <footer className="detail-page-footer-signature">
              Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span>
            </footer>
          </div>
        )}

      </main>

    </div>
  );
}

const navItems = [
  { name: 'Home', hasSub: false },
  { name: 'Biography', hasSub: false },
  { name: 'Artist\'s Statement', hasSub: false },
  { name: 'Gallery', hasSub: true, subItems: ['Acrylic on canvas'] },
  { name: 'Events', hasSub: false },
  { name: 'Media', hasSub: true, subItems: ['Newspapers Articles', 'Magazines', 'Web Articles', 'Videos'] },
  { name: 'Look the world is talking', hasSub: true, subItems: ['Look the world is talking1', 'Twitter Mentions'] },
  { name: 'Awards & Certificates', hasSub: false },
  { name: 'Contact', hasSub: false }
];