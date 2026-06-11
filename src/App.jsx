import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { gridItems } from './data/gridData';
import { useNavigate, useLocation } from 'react-router-dom';

import Home from './components/Home';
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

import CommentSection from './components/CommentSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ROUTE_MAP = [
  { paths: ['/', '/home'], type: 'grid', tab: 'Home' },
  { paths: ['/biography'], type: 'biography', tab: 'Biography' },
  { paths: ['/artist-statement'], type: 'artist-statement', tab: "Artist's Statement" },
  { paths: ['/gallery/acrylic-on-canvas'], type: 'acrylic-on-canvas', tab: 'Acrylic on canvas', expand: 'Gallery' },
  { paths: ['/events'], type: 'events', tab: 'Events' },
  { paths: ['/media/newspaper-articles'], type: 'newspaper-articles', tab: 'Newspapers Articles', expand: 'Media' },
  { paths: ['/media/magazines'], type: 'magazines', tab: 'Magazines', expand: 'Media' },
  { paths: ['/media/yahoo', '/yahoo'], type: 'yahoo', tab: 'Yahoo', expand: 'Media' },
  { paths: ['/media/readers-digest', '/readers-digest'], type: 'readers-digest', tab: "Reader's Digest", expand: 'Media' },
  { paths: ['/pogo', '/event-c'], type: 'pogo', tab: 'Events' },
  { paths: ['/kalidas-sanskrit', '/event-d'], type: 'kalidas', tab: 'Events' },
  { paths: ['/celebrity-chef-gala', '/event-e'], type: 'celebrity-chef', tab: 'Events' },
  { paths: ['/spectrum-miami', '/event-f'], type: 'spectrum-miami', tab: 'Events' },
  { paths: ['/art-expo', '/event-g'], type: 'art-expo', tab: 'Events' },
  { paths: ['/holtzman-gallery', '/event-j'], type: 'holtzman', tab: 'Events' },
  { paths: ['/ndtv', '/event-k'], type: 'ndtv', tab: 'Events' },
  { paths: ['/nestle', '/event-h'], type: 'nestle', tab: 'Events' },
  { paths: ['/TEDX', '/ted'], type: 'tedx-event-page', tab: 'Events' },
  { paths: ['/microsoft-future-decoded', '/event-i'], type: 'microsoft', tab: 'Events' },
  { paths: ['/sbs-radio', '/event-m'], type: 'sbs-radio', tab: 'Events' },
  { paths: ['/media/web-articles'], type: 'web-articles', tab: 'Web Articles', expand: 'Media' },
  { paths: ['/media/videos'], type: 'videos', tab: 'Videos', expand: 'Media' },
  { paths: ['/look-world-talking'], type: 'look-world-talking', tab: 'Look the world is talking1', expand: 'Look the world is talking' },
  { paths: ['/look-world-talking/twitter-mentions'], type: 'twitter-mentions', tab: 'Twitter Mentions', expand: 'Look the world is talking' },
  { paths: ['/awards-certificates'], type: 'awards', tab: 'Awards & Certificates' },
  { paths: ['/contact'], type: 'contact', tab: 'Contact' },
  { paths: ['/TajMahalPalace', '/taj-mahal'], type: 'taj-mahal', tab: 'Events' },
  { paths: ['/rk-laxman', '/event-b'], type: 'rk-laxman', tab: 'Events' }
];

function ArtworkDetailView({
  data,
  scrollToComments,
  containerRef,
  handleMouseMove,
  setMagnifier,
  magnifier,
  getMagnifierStyles,
  commentSectionRef
}) {
  return (
    <div className="artwork-detail-page">
      <header className="detail-page-header">
        <h1 className="artwork-main-title">{data.title}</h1>
        <div className="artwork-meta-subheader">
          Posted |
          {data.allowComments ? (
            <span onClick={scrollToComments} className="clickable-comment-link"> 0 comments</span>
          ) : (
            <span> 0 comments</span>
          )}
        </div>
      </header>

      <div className="detail-page-content-body">
        <div
          className={`detail-image-container ${data.isArticle ? 'is-article-view' : ''}`}
          ref={!data.isArticle ? containerRef : null}
          onMouseMove={!data.isArticle ? handleMouseMove : null}
          onMouseLeave={!data.isArticle ? () => setMagnifier(prev => ({ ...prev, show: false })) : null}
        >
          <img
            src={data.src}
            alt={data.title}
            className="detail-large-img"
          />
          {!data.isArticle && magnifier.show && containerRef.current && (
            <div className="artwork-magnifier-glass-lens" style={getMagnifierStyles()} />
          )}
        </div>

        <div className="detail-text-description-area">
          {data.isArticle ? (
            <div className="article-content-layout">
              <p className="article-quote-text">{data.summary}</p>
              <p className="article-body-text">{data.description}</p>
              {data.linkText && (
                <p className="article-link-text">
                  To read full article visit <a href={data.linkUrl} target="_blank" rel="noopener noreferrer">{data.linkText}</a>
                </p>
              )}
            </div>
          ) : (
            <>
              <p className="artwork-description-paragraph">{data.description}</p>
              <ul className="artwork-technical-bullet-list">
                <li><strong>{data.medium || "Acrylic on Canvas"}</strong></li>

                {data.size && (
                  <li><strong>Size: {data.size}</strong></li>
                )}

                {data.two && (
                  <li><strong>Two {data.two}</strong></li>
                )}

                {data.age && (
                  <li><strong>Age: {data.age}</strong></li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>

      {data.allowComments && (
        <div ref={commentSectionRef}>
          <CommentSection storageKey={`comments-artwork-${data.slug || data.id}`} />
        </div>
      )}
    </div>
  );
}

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

    const matchedRoute = ROUTE_MAP.find(route => route.paths.includes(path));

    if (matchedRoute) {
      setCurrentView({ type: matchedRoute.type, data: null });
      setActiveTab(matchedRoute.tab);
      if (matchedRoute.expand) {
        setExpandedMenu(matchedRoute.expand);
      }
    } else if (path.startsWith('/artwork/')) {
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
    } else {
      
      setCurrentView({ type: 'grid', data: null });
      setActiveTab('Home');
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
    const lensSize = 180;
    const zoomLevel = 2.5;
    const { width, height } = containerRef.current.getBoundingClientRect();

    const bgWidth = width * zoomLevel;
    const bgHeight = height * zoomLevel;

    const bgPosX = -(magnifier.x * zoomLevel) + (lensSize / 2);
    const bgPosY = -(magnifier.y * zoomLevel) + (lensSize / 2);

    return {
      left: `${magnifier.x - (lensSize / 2)}px`,
      top: `${magnifier.y - (lensSize / 2)}px`,
      width: `${lensSize}px`,
      height: `${lensSize}px`,
      backgroundImage: `url(${currentView.data.src})`,
      backgroundPosition: `${bgPosX}px ${bgPosY}px`,
      backgroundSize: `${bgWidth}px ${bgHeight}px`,
      imageRendering: 'high-quality'
    };
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div id="brand-logo" className="logo-container" onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>
          <img src="/image.png" alt="Shorya Logo" className="brand-logo-img" />
        </div>

        <div
          id="mobile-menu-toggle"
          className="mobile-menu-toggle-bar"
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }
          }}
        >
          <span className="mobile-toggle-title-text">Navigation Menu</span>
          <span className="mobile-toggle-icon-symbol">{isMobileMenuOpen ? '–' : '+'}</span>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-expanded-view' : 'mobile-collapsed-view'}`} role="navigation" aria-label="Main Navigation">
          <ul>
            {navItems.map((item) => {
              const isExpanded = expandedMenu === item.name;
              const isActive = activeTab === item.name ||
                (item.name === 'Gallery' && activeTab === 'Acrylic on canvas') ||
                (item.name === 'Media' && (activeTab === 'Newspapers Articles' || activeTab === 'Magazines' || activeTab === 'Yahoo' || activeTab === "Reader's Digest" || activeTab === 'Web Articles' || activeTab === 'Videos')) ||
                (item.name === 'Look the world is talking' && (activeTab === 'Look the world is talking1' || activeTab === 'Twitter Mentions'));

              const itemSlug = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
              return (
                <React.Fragment key={item.name}>
                  <li
                    id={`nav-item-${itemSlug}`}
                    className={`${isActive ? 'active' : ''}`}
                    onClick={() => handleMenuClick(item)}
                  >
                    <a
                      href="#"
                      aria-expanded={item.hasSub ? isExpanded : undefined}
                      aria-haspopup={item.hasSub ? "true" : undefined}
                      onClick={(e) => { e.preventDefault(); if (item.hasSub === false) handleMenuClick(item); }}
                    >
                      <span className="nav-text">{item.name}</span>
                      {item.hasSub && (isExpanded ? <Minus className="nav-icon" size={14} /> : <Plus className="nav-icon" size={14} />)}
                    </a>
                  </li>

                  <div className={`sub-menu-wrapper ${isExpanded ? 'is-open' : ''}`}>
                    <ul className="sub-menu-list">
                      {item.hasSub && item.subItems.map((sub) => {
                        const subSlug = sub.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                        return (
                          <li
                            key={sub}
                            id={`sub-nav-item-${subSlug}`}
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
                        );
                      })}
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
              <a id="social-fb" href="#facebook" aria-label="Facebook" className="social-img-btn fb-bg" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a id="social-tw" href="#twitter" aria-label="Twitter" className="social-img-btn tw-bg" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
              <a id="social-ig" href="#instagram" aria-label="Instagram" className="social-img-btn insta-bg" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a id="social-pi" href="#pinterest" aria-label="Pinterest" className="social-img-btn pin-bg" rel="noopener noreferrer"><i className="fa-brands fa-pinterest-p"></i></a>
              <a id="social-yt" href="#youtube" aria-label="YouTube" className="social-img-btn yt-bg" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="sidebar-empty-basement"></div>
      </aside>

      <main className="main-content">

        {currentView.type === 'grid' && <Home />}

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
          <ArtworkDetailView
            data={currentView.data}
            scrollToComments={scrollToComments}
            containerRef={containerRef}
            handleMouseMove={handleMouseMove}
            setMagnifier={setMagnifier}
            magnifier={magnifier}
            getMagnifierStyles={getMagnifierStyles}
            commentSectionRef={commentSectionRef}
          />
        )}
        {currentView.type !== 'grid' && <Footer />}

        {['newspaper-articles', 'magazines', 'events', 'look-world-talking', 'twitter-mentions', 'biography', 'videos', 'web-articles'].includes(currentView.type) && (
          <ScrollToTopButton />
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