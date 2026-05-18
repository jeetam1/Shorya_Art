import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { gridItems } from './data/gridData';
import Biography from './components/Biography';
import ArtistStatement from './components/ArtistStatement';
import AcrylicOnCanvas from './components/AcrylicOnCanvas';
import Events from './components/Events'; // Import the new Events module
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [currentView, setCurrentView] = useState({ type: 'grid', data: null });

  const [magnifier, setMagnifier] = useState({ x: 0, y: 0, show: false });
  const containerRef = useRef(null);

  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  const ZOOM_LEVEL = 3; 

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

  useEffect(() => {
    const updateSmoothPosition = () => {
      setSmoothPos(prev => {
        const dx = targetPos.current.x - prev.x;
        const dy = targetPos.current.y - prev.y;
        return { x: prev.x + dx * 0.12, y: prev.y + dy * 0.12 };
      });
      animationFrameId.current = requestAnimationFrame(updateSmoothPosition);
    };

    if (magnifier.show) {
      animationFrameId.current = requestAnimationFrame(updateSmoothPosition);
    }
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [magnifier.show]);

  const handleMenuClick = (item) => {
    if (item.hasSub) {
      setExpandedMenu(expandedMenu === item.name ? null : item.name);
    } else {
      setActiveTab(item.name);
      setExpandedMenu(null);
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
      targetPos.current = { x: posX, y: posY };
      if (!magnifier.show) setSmoothPos({ x: posX, y: posY });
      setMagnifier({ x: posX, y: posY, show: true });
    }
  };

  const getMagnifierStyles = () => {
    if (!containerRef.current) return {};
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    const pctX = (smoothPos.x / width) * 100;
    const pctY = (smoothPos.y / height) * 100;

    return {
      left: `${magnifier.x - 75}px`,
      top: `${magnifier.y - 75}px`,
      backgroundImage: `url(${currentView.data.src})`,
      backgroundPosition: `${pctX}% ${pctY}%`
    };
  };

  return (
    <div className="app-container">
      
      {/* SIDEBAR ACCORDION CONTROLLER */}
      <aside className="sidebar">
        <div className="logo-container" onClick={() => window.location.hash = '#home'} style={{ cursor: 'pointer' }}>
          <img src="/image.png" alt="Shorya Logo" className="brand-logo-img" />
        </div>

        <nav className="nav-menu">
          <ul>
            {navItems.map((item) => {
              const isExpanded = expandedMenu === item.name;
              const isActive = activeTab === item.name || (item.name === 'Gallery' && activeTab === 'Acrylic on canvas');
              
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
                          className={`sub-item ${activeTab === sub ? 'sub-active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab(sub);
                            if (sub === 'Acrylic on canvas') {
                              window.location.hash = '#/gallery/acrylic-on-canvas';
                            }
                          }}
                        >
                          <a href={sub === 'Acrylic on canvas' ? '#/gallery/acrylic-on-canvas' : '#home'} onClick={(e) => e.preventDefault()}>
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

      {/* CORE DISPLAY STAGE */}
      <main className="main-content">
        {currentView.type === 'grid' && (
          <div className="art-grid">
            {gridItems.map((item) => (
              <article key={item.id} className="portfolio-entry-card" onClick={() => window.location.hash = `#/artwork/${item.slug}`}>
                <div className="art-card-wrapper">
                  <img src={item.src} alt={item.title} className="art-card-img" />
                  <div className="card-hover-overlay">
                    <h3 className="card-hover-title">{item.title}</h3>
                    {item.summary && <p className="card-hover-summary">{item.summary}</p>}
                    <div className="card-hover-icon-circle"><Search size={18} /></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {currentView.type === 'biography' && <Biography />}
        {currentView.type === 'artist-statement' && <ArtistStatement />}
        {currentView.type === 'acrylic-on-canvas' && <AcrylicOnCanvas />}
        {currentView.type === 'events' && <Events />} {/* Route path hook directly into your events module component rendering environment */}

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