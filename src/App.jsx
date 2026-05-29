import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { gridItems } from './data/gridData';
import Biography from './components/Biography';
import ArtistStatement from './components/ArtistStatement';
import AcrylicOnCanvas from './components/AcrylicOnCanvas';
import Events from './components/Events';
import NewspaperArticles from './components/NewspaperArticles';
import Magazines from './components/Magazines'; 
import WebArticles from './components/WebArticles';
import Videos from './components/Videos'; 
import LookWorldTalking from './components/LookWorldTalking';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [currentView, setCurrentView] = useState({ type: 'grid', data: null });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const [magnifier, setMagnifier] = useState({ x: 0, y: 0, show: false });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleUrlRouting = () => {
      const currentHash = window.location.hash;
      
      if (!currentHash || currentHash === '#home') {
        setCurrentView({ type: 'grid', data: null });
        setActiveTab('Home');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/biography') {
        setCurrentView({ type: 'biography', data: null });
        setActiveTab('Biography');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/artist-statement') {
        setCurrentView({ type: 'artist-statement', data: null });
        setActiveTab("Artist's Statement");
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/gallery/acrylic-on-canvas') {
        setCurrentView({ type: 'acrylic-on-canvas', data: null });
        setActiveTab('Acrylic on canvas');
        setExpandedMenu('Gallery');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/events') {
        setCurrentView({ type: 'events', data: null });
        setActiveTab('Events');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/media/newspaper-articles') {
        setCurrentView({ type: 'newspaper-articles', data: null });
        setActiveTab('Newspapers Articles');
        setExpandedMenu('Media');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/media/magazines') { 
        setCurrentView({ type: 'magazines', data: null });
        setActiveTab('Magazines');
        setExpandedMenu('Media');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/media/web-articles') {
        setCurrentView({ type: 'web-articles', data: null });
        setActiveTab('Web Articles');
        setExpandedMenu('Media');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/media/videos') {
        setCurrentView({ type: 'videos', data: null });
        setActiveTab('Videos');
        setExpandedMenu('Media');
        setMagnifier(prev => ({ ...prev, show: false }));
        window.scrollTo(0, 0);
      } else if (currentHash === '#/look-world-talking') {
        setCurrentView({ type: 'look-world-talking', data: null });
        setActiveTab('Look the world is talking1');
        setExpandedMenu('Look the world is talking');
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
      setIsMobileMenuOpen(false); 
      if (item.name === 'Biography') {
        window.location.hash = '#/biography';
      } else if (item.name === "Artist's Statement") {
        window.location.hash = '#/artist-statement';
      } else if (item.name === 'Events') {
        window.location.hash = '#/events';
      } else {
        window.location.hash = '#home';
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const posX = e.clientX - left;
    const posY = e.clientY - top;

    if (posX < 0 || posY < 0 || posX > width || posY > height) {
      setMagnifier(prev => ({ ...prev, show: false }));
    } else {
      setMagnifier({ x: posX, y: posY, show: true });
    }
  };

  const getMagnifierStyles = () => {
    if (!containerRef.current) return {};
    
    // We set a fixed size for the lens to 250px
    const lensSize = 150; 
    
    // Calculate the percentage position
    const { width, height } = containerRef.current.getBoundingClientRect();
    const pctX = (magnifier.x / width) * 100;
    const pctY = (magnifier.y / height) * 100;

    return {
      left: `${magnifier.x - (lensSize / 2)}px`,
      top: `${magnifier.y - (lensSize / 2)}px`,
      backgroundImage: `url(${currentView.data.src})`,
      backgroundPosition: `${pctX}% ${pctY}%`,
      backgroundSize: `${width * 2.5}px ${height * 2.5}px` // 2.5x zoom level
    };
  };

  return (
    <div className="app-container">
      
      {/* SIDEBAR NAVIGATION PANEL */}
      <aside className="sidebar">
        <div className="logo-container" onClick={() => { window.location.hash = '#home'; setIsMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>
          <img src="/image.png" alt="Shorya Logo" className="brand-logo-img" />
        </div>

        {/* Mobile Menu Trigger Strip */}
        <div className="mobile-menu-toggle-bar" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="mobile-toggle-title-text">Navigation Menu</span>
          <span className="mobile-toggle-icon-symbol">{isMobileMenuOpen ? '–' : '+'}</span>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-expanded-view' : 'mobile-collapsed-view'}`}>
          <ul>
            {navItems.map((item) => {
              const isExpanded = expandedMenu === item.name;
              
              const isActive = activeTab === item.name || 
                               (item.name === 'Gallery' && activeTab === 'Acrylic on canvas') ||
                               (item.name === 'Media' && (activeTab === 'Newspapers Articles' || activeTab === 'Magazines' || activeTab === 'Web Articles' || activeTab === 'Videos')) ||
                               (item.name === 'Look the world is talking' && (activeTab === 'Look the world is talking1' || activeTab === 'Twitter Mentions'));
              
              return (
                <React.Fragment key={item.name}>
                  <li className={`${isActive ? 'active' : ''}`} onClick={() => handleMenuClick(item)}>
                    <a 
                      href={item.name === 'Biography' ? '#/biography' : item.name === "Artist's Statement" ? '#/artist-statement' : item.name === 'Events' ? '#/events' : (item.hasSub ? undefined : '#home')}
                      onClick={(e) => item.hasSub && e.preventDefault()}
                    >
                      <span className="nav-text">{item.name}</span>
                      {item.hasSub && (isExpanded ? <Minus className="nav-icon" size={14} /> : <Plus className="nav-icon" size={14} />)}
                    </a>
                  </li>

                  <div className={`sub-menu-wrapper ${isExpanded ? 'is-open' : ''}`}>
                    <ul className="sub-menu-list">
                      {item.hasSub && item.subItems.map((sub) => (
                        <li 
                          key={sub} 
                          className={`sub-item ${activeTab === sub ? 'sub-item-active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab(sub);
                            setIsMobileMenuOpen(false); 
                            if (sub === 'Acrylic on canvas') {
                              window.location.hash = '#/gallery/acrylic-on-canvas';
                            } else if (sub === 'Newspapers Articles') {
                              window.location.hash = '#/media/newspaper-articles';
                            } else if (sub === 'Magazines') { 
                              window.location.hash = '#/media/magazines';
                            } else if (sub === 'Web Articles') {
                              window.location.hash = '#/media/web-articles';
                            } else if (sub === 'Videos') {
                              window.location.hash = '#/media/videos';
                            } else if (sub === 'Look the world is talking1') {
                              window.location.hash = '#/look-world-talking';
                            }
                          }}
                        >
                          <a 
                            href={
                              sub === 'Acrylic on canvas' 
                                ? '#/gallery/acrylic-on-canvas' 
                                : sub === 'Newspapers Articles' 
                                  ? '#/media/newspaper-articles' 
                                  : sub === 'Magazines' 
                                    ? '#/media/magazines' 
                                    : sub === 'Web Articles' 
                                      ? '#/media/web-articles' 
                                      : sub === 'Videos' 
                                        ? '#/media/videos' 
                                        : sub === 'Look the world is talking1' 
                                          ? '#/look-world-talking' 
                                          : '#home'
                            }
                          >
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
          <div className="sidebar-twitter-section"><span className="twitter-panel-text">Tweets by Shoryamahanot</span></div>
        </div>
        <div className="sidebar-empty-basement"></div>
      </aside>

      {/* CORE WORKSPACE DISPLAY LAYOUT ENGINE */}
      <main className="main-content">
        
        {/* FIXED: Removed the broken useState hooks from here to unfreeze the React App */}
        {currentView.type === 'grid' && (
          <div className="art-grid">
            {gridItems.map((item) => (
              <article 
                key={item.id} 
                className="portfolio-entry-card" 
                onClick={() => window.location.hash = `#/artwork/${item.slug}`}
              >
                <div className="art-card-wrapper">
                  {/* Base Image Asset */}
                  <img src={item.src} alt={item.title} className="art-card-img" />
                  
                  {/* Golden Orange 3D Pop-Out Overlay */}
                  <div className="card-hover-overlay">
                    <h3 className="card-hover-title">{item.title}</h3>
                    
                    {/* Automatically limits description to exactly 8 words */}
                    {/* We removed the JS .split() math. CSS will handle the lines now! */}
<p className="card-hover-description">
  {item.description || "Temporary dummy content placeholder goes here..."}
</p>
                    
                    {/* Magnifying Glass Icon Circle */}
                    <div className="card-hover-icon-circle">
                      <Search size={20} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {currentView.type === 'biography' && <Biography />}
        {currentView.type === 'artist-statement' && <ArtistStatement />}
        {currentView.type === 'acrylic-on-canvas' && <AcrylicOnCanvas />}
        {currentView.type === 'events' && <Events />}
        {currentView.type === 'newspaper-articles' && <NewspaperArticles />}
        {currentView.type === 'magazines' && <Magazines />} 
        {currentView.type === 'web-articles' && <WebArticles />}
        {currentView.type === 'videos' && <Videos />}
        {currentView.type === 'look-world-talking' && <LookWorldTalking />}

        {currentView.type === 'detail' && (
          <div className="artwork-detail-page">
            <header className="detail-page-header">
              <h1 className="artwork-main-title">{currentView.data.title}</h1>
              <div className="artwork-meta-subheader">Posted | <span>0 comments</span></div>
            </header>
            <div className="detail-page-content-body">
              <div className="detail-image-container" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setMagnifier(prev => ({ ...prev, show: false }))}>
                <img src={currentView.data.src} alt={currentView.data.title} className="detail-large-img" />
                {magnifier.show && containerRef.current && <div className="artwork-magnifier-glass-lens" style={getMagnifierStyles()} />}
              </div>
              <div className="detail-text-description-area">
                <p className="artwork-description-paragraph">{currentView.data.description}</p>
                <ul className="artwork-technical-bullet-list">
                  <li><strong>{currentView.data.medium || "Acrylic on Canvas"}</strong></li>
                  <li><strong>Size: {currentView.data.size}</strong></li>
                </ul>
              </div>
            </div>
            <footer className="detail-page-footer-signature">Designed by Shreya Mahanot | &copy; <span>shoryamahanot.com</span></footer>
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