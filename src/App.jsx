import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { gridItems } from './data/gridData';
import { useNavigate, useLocation } from 'react-router-dom';

// --- COMPONENTS ---
import Awards from './components/Awards';
import Biography from './components/Biography';
import ArtistStatement from './components/ArtistStatement';
import AcrylicOnCanvas from './components/AcrylicOnCanvas';
import Events from './components/Events';
import NewspaperArticles from './components/NewspaperArticles';
import Magazines from './components/Magazines'; 
import Ted from './components/Ted';
import MicrosoftFutureDecoded from './components/MicrosoftFutureDecoded';
import SBSRadio from './components/SBSRadio';
import WebArticles from './components/WebArticles';
import Videos from './components/Videos'; 
import LookWorldTalking from './components/LookWorldTalking';
import TwitterMentions from './components/TwitterMentions';
import HuffingtonPost from './components/HuffingtonPost'; 
import TedX from './components/TedX'; 
import HoltzmanGallery from './components/HoltzmanGallery';
import Pogo from './components/Pogo';
import ArtExpo from './components/ArtExpo';
import SpectrumMiami from './components/SpectrumMiami';
import CelebrityChefGala from './components/CelebrityChefGala';
import KalidasSanskrit from './components/KalidasSanskrit';
import Contact from './components/Contact';
import TajMahalPalace from './components/TajMahalPalace'; 
import Nestle from './components/Nestle';
import NDTV from './components/NDTV';
import RKLaxman from './components/RKLaxman'; 
import Yahoo from './components/Yahoo'; 
import ReadersDigest from './components/ReadersDigest';

// --- SHARED REUSABLE COMPONENTS ---
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [currentView, setCurrentView] = useState({ type: 'grid', data: null });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  
  const navigate = useNavigate();
  const location = useLocation();
  const [magnifier, setMagnifier] = useState({ x: 0, y: 0, show: false });
  const containerRef = useRef(null);
  const commentSectionRef = useRef(null); 
  
  const scrollToComments = () => {
    if (commentSectionRef.current) {
      commentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const path = location.pathname;
    
    if (!path || path === '/' || path === '/home') {
      setCurrentView({ type: 'grid', data: null });
      setActiveTab('Home');
    } else if (path === '/biography') {
      setCurrentView({ type: 'biography', data: null });
      setActiveTab('Biography');
    } else if (path === '/artist-statement') {
      setCurrentView({ type: 'artist-statement', data: null });
      setActiveTab("Artist's Statement");
    } else if (path === '/gallery/acrylic-on-canvas') {
      setCurrentView({ type: 'acrylic-on-canvas', data: null });
      setActiveTab('Acrylic on canvas');
      setExpandedMenu('Gallery');
    } else if (path === '/events') {
      setCurrentView({ type: 'events', data: null });
      setActiveTab('Events');
    } else if (path === '/media/newspaper-articles') {
      setCurrentView({ type: 'newspaper-articles', data: null });
      setActiveTab('Newspapers Articles');
      setExpandedMenu('Media');
    } else if (path === '/media/magazines') { 
      setCurrentView({ type: 'magazines', data: null });
      setActiveTab('Magazines');
      setExpandedMenu('Media');
    } else if (path === '/media/yahoo' || path === '/yahoo') {
      setCurrentView({ type: 'yahoo', data: null });
      setActiveTab('Yahoo');
      setExpandedMenu('Media');
    } else if (path === '/media/readers-digest' || path === '/readers-digest') {
      setCurrentView({ type: 'readers-digest', data: null });
      setActiveTab("Reader's Digest");
      setExpandedMenu('Media');
    } else if (path === '/pogo' || path === '/event-c') {
      setCurrentView({ type: 'pogo', data: null });
      setActiveTab('Events'); 
    } else if (path === '/kalidas-sanskrit' || path === '/event-d') {
      setCurrentView({ type: 'kalidas', data: null });
      setActiveTab('Events'); 
    } else if (path === '/celebrity-chef-gala' || path === '/event-e') {
      setCurrentView({ type: 'celebrity-chef', data: null });
      setActiveTab('Events'); 
    } else if (path === '/spectrum-miami' || path === '/event-f') {
      setCurrentView({ type: 'spectrum-miami', data: null });
      setActiveTab('Events'); 
    } else if (path === '/art-expo' || path === '/event-g') {
      setCurrentView({ type: 'art-expo', data: null });
      setActiveTab('Events'); 
    } else if (path === '/holtzman-gallery' || path === '/event-j') {
      setCurrentView({ type: 'holtzman', data: null });
      setActiveTab('Events'); 
    } else if (path === '/ndtv' || path === '/event-k') {
      setCurrentView({ type: 'ndtv', data: null });
      setActiveTab('Events'); 
    } else if (path === '/nestle' || path === '/event-h') {
      setCurrentView({ type: 'nestle', data: null });
      setActiveTab('Events'); 
    } else if (path === '/TEDX' || path === '/ted') {
      setCurrentView({ type: 'tedx-event-page', data: null });
      setActiveTab('Events'); 
    } else if (path === '/microsoft-future-decoded' || path === '/event-i') {
      setCurrentView({ type: 'microsoft', data: null });
      setActiveTab('Events'); 
    } else if (path === '/sbs-radio' || path === '/event-m') {
      setCurrentView({ type: 'sbs-radio', data: null });
      setActiveTab('Events'); 
    } else if (path === '/media/web-articles') {
      setCurrentView({ type: 'web-articles', data: null });
      setActiveTab('Web Articles');
      setExpandedMenu('Media');
    } else if (path === '/media/videos') {
      setCurrentView({ type: 'videos', data: null });
      setActiveTab('Videos');
      setExpandedMenu('Media');
    } else if (path === '/look-world-talking') {
      setCurrentView({ type: 'look-world-talking', data: null });
      setActiveTab('Look the world is talking1');
      setExpandedMenu('Look the world is talking');
    } else if (path === '/look-world-talking/twitter-mentions') {
      setCurrentView({ type: 'twitter-mentions', data: null });
      setActiveTab('Twitter Mentions');
      setExpandedMenu('Look the world is talking');
    } else if (path === '/awards-certificates') {
      setCurrentView({ type: 'awards', data: null });
      setActiveTab('Awards & Certificates');
    } else if (path === '/contact') {
      setCurrentView({ type: 'contact', data: null });
      setActiveTab('Contact');
    } else if (path === '/TajMahalPalace' || path === '/taj-mahal') {
      setCurrentView({ type: 'taj-mahal', data: null });
      setActiveTab('Events'); 
    } else if (path === '/rk-laxman' || path === '/event-b') {
      setCurrentView({ type: 'rk-laxman', data: null });
      setActiveTab('Events'); 
    }
    else if (path.startsWith('/artwork/')) {
      const urlSlug = path.replace('/artwork/', '');
      const match = gridItems.find(item => item.slug === urlSlug);
      
      if (match) {
        if (match.customLayout === 'huffington') {
          setCurrentView({ type: 'huffington-post', data: match });
        } else if (match.customLayout === 'tedx') {
          setCurrentView({ type: 'tedx-presentation', data: match }); 
        } else {
          setCurrentView({ type: 'detail', data: match });
        }
        setActiveTab('Gallery');
      }
    }
    
    setMagnifier(prev => ({ ...prev, show: false }));
    window.scrollTo(0, 0);
  }, [location]);

  const handleMenuClick = (item) => {
    if (item.hasSub) {
      setExpandedMenu(expandedMenu === item.name ? null : item.name);
    } else {
      setActiveTab(item.name);
      setExpandedMenu(null);
      setIsMobileMenuOpen(false); 
      
      if (item.name === 'Biography') navigate('/biography');
      else if (item.name === "Artist's Statement") navigate('/artist-statement');
      else if (item.name === 'Events') navigate('/events');
      else if (item.name === 'Awards & Certificates') navigate('/awards-certificates');
      else if (item.name === 'Contact') navigate('/contact');
      else navigate('/');
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
    const lensSize = 150; 
    const { width, height } = containerRef.current.getBoundingClientRect();
    const pctX = (magnifier.x / width) * 100;
    const pctY = (magnifier.y / height) * 100;

    return {
      left: `${magnifier.x - (lensSize / 2)}px`,
      top: `${magnifier.y - (lensSize / 2)}px`,
      backgroundImage: `url(${currentView.data.src})`,
      backgroundPosition: `${pctX}% ${pctY}%`,
      backgroundSize: `${width * 1.2}px ${height * 1.2}px`, 
      imageRendering: 'high-quality'
    };
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-container" onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>
          <img src="/image.png" alt="Shorya Logo" className="brand-logo-img" />
        </div>

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
                               (item.name === 'Media' && (activeTab === 'Newspapers Articles' || activeTab === 'Magazines' || activeTab === 'Yahoo' || activeTab === "Reader's Digest" || activeTab === 'Web Articles' || activeTab === 'Videos')) ||
                               (item.name === 'Look the world is talking' && (activeTab === 'Look the world is talking1' || activeTab === 'Twitter Mentions'));
              
              return (
                <React.Fragment key={item.name}>
                  <li className={`${isActive ? 'active' : ''}`} onClick={() => handleMenuClick(item)}>
                    <a 
                      href="#"
                      onClick={(e) => { e.preventDefault(); if(item.hasSub === false) handleMenuClick(item); }}
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
                            
                            if (sub === 'Acrylic on canvas') navigate('/gallery/acrylic-on-canvas');
                            else if (sub === 'Newspapers Articles') navigate('/media/newspaper-articles');
                            else if (sub === 'Magazines') navigate('/media/magazines');
                            else if (sub === 'Yahoo') navigate('/yahoo');
                            else if (sub === "Reader's Digest") navigate('/readers-digest');
                            else if (sub === 'Web Articles') navigate('/media/web-articles');
                            else if (sub === 'Videos') navigate('/media/videos');
                            else if (sub === 'Look the world is talking1') navigate('/look-world-talking');
                            else if (sub === 'Twitter Mentions') navigate('/look-world-talking/twitter-mentions');
                          }}
                        >
                          <a href="#" onClick={(e) => e.preventDefault()}>
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
        </div>
        
        <div className="sidebar-empty-basement"></div>
      </aside>

      <main className="main-content">
        
        {/* Look for this specific section in your home page grid view inside App.jsx */}
{currentView.type === 'grid' && (
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
          } else if (item.directLink) {
            navigate(item.directLink.replace('#', '')); 
          } else {
            navigate(`/artwork/${item.slug}`);
          }
        }}
      >
        <div className="art-card-wrapper">
          <img src={item.src} alt={item.title} className="art-card-img" />
          
          <div className="card-hover-overlay">
            <h3 className="card-hover-title">{item.title}</h3>
            
            {/* CHANGED HERE: Now displays the item's custom summary value instead of description */}
            <p className="card-hover-description">
              {item.summary || "Temporary dummy content placeholder goes here..."}
            </p>
            
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
        {currentView.type === 'huffington-post' && <HuffingtonPost />}
        {currentView.type === 'artist-statement' && <ArtistStatement />}
        {currentView.type === 'acrylic-on-canvas' && <AcrylicOnCanvas />}
        {currentView.type === 'events' && <Events />}
        {currentView.type === 'newspaper-articles' && <NewspaperArticles />}
        {currentView.type === 'magazines' && <Magazines />} 
        {currentView.type === 'yahoo' && <Yahoo />}
        {currentView.type === 'readers-digest' && <ReadersDigest />}
        {currentView.type === 'web-articles' && <WebArticles />}
        {currentView.type === 'videos' && <Videos />}
        {currentView.type === 'look-world-talking' && <LookWorldTalking />}
        {currentView.type === 'twitter-mentions' && <TwitterMentions />}
        {currentView.type === 'tedx-presentation' && <TedX />}
        {currentView.type === 'awards' && <Awards />}
        {currentView.type === 'contact' && <Contact />}
        {currentView.type === 'celebrity-chef' && <CelebrityChefGala />}
        {currentView.type === 'taj-mahal' && <TajMahalPalace />}
        {currentView.type === 'pogo' && <Pogo />}
        {currentView.type === 'spectrum-miami' && <SpectrumMiami />}
        {currentView.type === 'kalidas' && <KalidasSanskrit />}
        {currentView.type === 'art-expo' && <ArtExpo />}
        {currentView.type === 'holtzman' && <HoltzmanGallery />}
        {currentView.type === 'rk-laxman' && <RKLaxman />}
        {currentView.type === 'ndtv' && <NDTV />}
        {currentView.type === 'tedx-event-page' && <Ted />}
        {currentView.type === 'nestle' && <Nestle />}
        {currentView.type === 'sbs-radio' && <SBSRadio />}
        {currentView.type === 'microsoft' && <MicrosoftFutureDecoded />}
        
        {currentView.type === 'detail' && (
          <div className="artwork-detail-page">
            <header className="detail-page-header">
              <h1 className="artwork-main-title">{currentView.data.title}</h1>
              <div className="artwork-meta-subheader">
                Posted | 
                {currentView.data.allowComments ? (
                  <span onClick={scrollToComments} className="clickable-comment-link"> 0 comments</span>
                ) : (
                  <span> 0 comments</span>
                )}
              </div>
            </header>
    
            <div className="detail-page-content-body">
              <div 
                className={`detail-image-container ${currentView.data.isArticle ? 'is-article-view' : ''}`} 
                ref={!currentView.data.isArticle ? containerRef : null} 
                onMouseMove={!currentView.data.isArticle ? handleMouseMove : null} 
                onMouseLeave={!currentView.data.isArticle ? () => setMagnifier(prev => ({ ...prev, show: false })) : null}
              >
                <img 
                  src={currentView.data.src} 
                  alt={currentView.data.title} 
                  className="detail-large-img" 
                />
                {!currentView.data.isArticle && magnifier.show && containerRef.current && (
                  <div className="artwork-magnifier-glass-lens" style={getMagnifierStyles()} />
                )}
              </div>

              <div className="detail-text-description-area">
                {currentView.data.isArticle ? (
                  <div className="article-content-layout">
                    <p className="article-quote-text">{currentView.data.summary}</p>
                    <p className="article-body-text">{currentView.data.description}</p>
                    {currentView.data.linkText && (
                      <p className="article-link-text">
                        To read full article visit <a href={currentView.data.linkUrl} target="_blank" rel="noreferrer">{currentView.data.linkText}</a>
                      </p>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="artwork-description-paragraph">{currentView.data.description}</p>
                   <ul className="artwork-technical-bullet-list">
  <li><strong>{currentView.data.medium || "Acrylic on Canvas"}</strong></li>
  
  {currentView.data.size && (
    <li><strong>Size: {currentView.data.size}</strong></li>
  )}
  
  {/* ADDED: This block checks if the 'two' key exists and renders it perfectly */}
  {currentView.data.two && (
    <li><strong>Two {currentView.data.two}</strong></li>
  )}
  
  {currentView.data.age && (
    <li><strong>Age: {currentView.data.age}</strong></li>
  )}                    
</ul>
                  </>
                )}
              </div>
            </div>

            {/* Render the Common Shared Comment Box component safely via props */}
            {currentView.data.allowComments && (
              <div ref={commentSectionRef}>
                <CommentSection storageKey={`comments-artwork-${currentView.data.slug || currentView.data.id}`} />
              </div>
            )}

            
          </div>
        )}
        {currentView.type !== 'grid' && <Footer />}
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