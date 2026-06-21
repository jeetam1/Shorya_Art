import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { gridItems } from './data/gridData';
import { useNavigate, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Awards from './components/Awards';
import Biography from './components/Biography';
import ArtistStatement from './components/ArtistStatement';
import AcrylicOnCanvas from './components/AcrylicOnCanvas';
import { galleryItems } from './data/galleryData';
// import PhotoView from './components/PhotoView';
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
  { paths: ['/biography', '/biography/'], type: 'biography', tab: 'Biography' },
  { paths: ['/artist-statement', '/artists-statement', '/artists-statement/'], type: 'artist-statement', tab: "Artist's Statement" },
  { paths: ['/gallery/acrylic-on-canvas', '/acrylic-on-canvas', '/acrylic-on-canvas/'], type: 'acrylic-on-canvas', tab: 'Acrylic on canvas', expand: 'Gallery' },
  // { paths: ['/gallery/photo-view', '/photo-view', '/photo-view/'], type: 'photo-view', tab: 'Photo View', expand: 'Gallery' },
  { paths: ['/events', '/events/'], type: 'events', tab: 'Events' },
  { paths: ['/media/newspaper-articles', '/newspapers-articles', '/newspapers-articles/'], type: 'newspaper-articles', tab: 'Newspapers Articles', expand: 'Media' },
  { paths: ['/media/magazines', '/magazines', '/magazines/'], type: 'magazines', tab: 'Magazines', expand: 'Media' },
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
  { paths: ['/media/web-articles', '/web-articles', '/web-articles/'], type: 'web-articles', tab: 'Web Articles', expand: 'Media' },
  { paths: ['/media/videos', '/audio-video', '/audio-video/'], type: 'videos', tab: 'Videos', expand: 'Media' },
  { paths: ['/look-world-talking', '/look-the-world-is-talking', '/look-the-world-is-talking/'], type: 'look-world-talking', tab: 'Look the world is talking' },
  { paths: ['/look-world-talking/twitter-mentions', '/twitter', '/twitter/'], type: 'twitter-mentions', tab: 'Twitter Mentions' },
  { paths: ['/awards-certificates', '/certificates', '/certificates/'], type: 'awards', tab: 'Awards & Certificates' },
  { paths: ['/contact', '/contact/'], type: 'contact', tab: 'Contact' },
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
  commentSectionRef,
  fromGallery
}) {
  return (
    <div className={`artwork-detail-page ${fromGallery ? 'from-gallery-layout' : ''}`}>
      <header className="detail-page-header">
        <h1 className="artwork-main-title">{data.title}</h1>
        {fromGallery ? null : (
          <div className="artwork-meta-subheader">
            Posted |
            {data.allowComments ? (
              <span onClick={scrollToComments} className="clickable-comment-link"> 0 comments</span>
            ) : (
              <span> 0 comments</span>
            )}
          </div>
        )}
      </header>

      <div className={`detail-page-content-body ${fromGallery ? 'from-gallery-content' : ''}`}>
        <div
          className={`detail-image-container ${data.isArticle ? 'is-article-view' : ''} ${data.isWide ? 'is-wide-view' : ''}`}
          ref={(!data.isArticle && !fromGallery) ? containerRef : null}
          onMouseMove={(!data.isArticle && !fromGallery) ? handleMouseMove : null}
          onMouseLeave={(!data.isArticle && !fromGallery) ? () => setMagnifier(prev => ({ ...prev, show: false })) : null}
          style={{ cursor: fromGallery ? 'default' : 'crosshair' }}
        >
          <img
            src={data.src}
            alt={data.title}
            className="detail-large-img"
          />
          {!data.isArticle && !fromGallery && magnifier.show && containerRef.current && (
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
          ) : fromGallery ? (
            <>
              {data.size && (
                <div className="artwork-spec-size">
                  {data.size}{data.two ? ' Diptych' : ''}
                </div>
              )}
              {data.two && (
                <div className="artwork-spec-two">
                  {data.two.toLowerCase().includes('canvases')
                    ? `Two ${data.two.split(/canvases/i)[0]}Canvases painted together as one`
                    : data.two.startsWith('Two') ? data.two : `Two ${data.two}`}
                </div>
              )}
              {data.age && (
                <div className="artwork-spec-age">
                  Age {data.age}
                </div>
              )}
              <p className="artwork-description-paragraph-gallery">{data.description}</p>
            </>
          ) : (
            <>
              <p className="artwork-description-paragraph-original">{data.description}</p>
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

      {!fromGallery && data.allowComments && (
        <div ref={commentSectionRef}>
          <CommentSection storageKey={`comments-artwork-${data.slug || data.id}`} />
        </div>
      )}
    </div>
  );
}

function getPageTitle(type, data) {
  switch (type) {
    case 'grid': return 'Home';
    case 'biography': return 'Biography';
    case 'huffington-post': return 'Huffington Post';
    case 'artist-statement': return "Artist's Statement";
    case 'acrylic-on-canvas': return 'Acrylic on Canvas';
    // case 'photo-view': return 'Photo View';
    case 'events': return 'Events';
    case 'newspaper-articles': return 'Newspapers Articles';
    case 'magazines': return 'Magazines';
    case 'yahoo': return 'Yahoo';
    case 'readers-digest': return "Reader's Digest";
    case 'web-articles': return 'Web Articles';
    case 'videos': return 'Videos';
    case 'look-world-talking': return 'Look the world is talking';
    case 'twitter-mentions': return 'Twitter Mentions';
    case 'tedx-presentation': return 'TEDx Presentation';
    case 'awards': return 'Awards & Certificates';
    case 'contact': return 'Contact';
    case 'celebrity-chef': return 'Celebrity Chef Gala';
    case 'taj-mahal': return 'Taj Mahal Palace';
    case 'pogo': return 'Pogo';
    case 'spectrum-miami': return 'Spectrum Miami';
    case 'kalidas': return 'Kalidas Sanskrit';
    case 'art-expo': return 'Art Expo';
    case 'holtzman': return 'Holtzman Gallery';
    case 'rk-laxman': return 'R.K. Laxman';
    case 'ndtv': return 'NDTV';
    case 'tedx-event-page': return 'TEDx Event';
    case 'nestle': return 'Nestle';
    case 'sbs-radio': return 'SBS Radio';
    case 'microsoft': return 'Microsoft Future Decoded';
    case 'detail': return data ? data.title : 'Artwork Detail';
    default: return 'Portfolio';
  }
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
    let viewType = 'grid';
    let viewData = null;

    if (matchedRoute) {
      viewType = matchedRoute.type;
      setCurrentView({ type: matchedRoute.type, data: null });
      setActiveTab(matchedRoute.tab);
      if (matchedRoute.expand) {
        setExpandedMenu(matchedRoute.expand);
      }
    } else if (path.startsWith('/artwork/')) {
      const urlSlug = path.replace('/artwork/', '');
      let match = gridItems.find(item => item.slug === urlSlug || item.slug?.toLowerCase() === urlSlug.toLowerCase());

      const galleryMatch = galleryItems.find(item => item.slug === urlSlug || item.slug?.toLowerCase() === urlSlug.toLowerCase());

      if (!match && galleryMatch) {
        match = {
          id: galleryMatch.id,
          slug: galleryMatch.slug,
          title: galleryMatch.name,
          src: galleryMatch.src,
          description: galleryMatch.description || "This abstract painting features vibrant colors and expressive textures. Created using premium pigments on canvas, the composition explores Shorya's early signature style of abstract expressionism.",
          medium: galleryMatch.medium || "Acrylic on Canvas",
          size: galleryMatch.size,
          age: galleryMatch.age,
          allowComments: false,
          isWide: galleryMatch.isWide
        };
      } else if (match && galleryMatch) {
        match.isWide = galleryMatch.isWide;
        match.src = galleryMatch.src;
      }

      if (match) {
        if (match.customLayout === 'huffington') {
          viewType = 'huffington-post';
        } else if (match.customLayout === 'tedx') {
          viewType = 'tedx-presentation';
        } else {
          viewType = 'detail';
        }
        viewData = match;
        setCurrentView({ type: viewType, data: match });
        setActiveTab('Gallery');
      }
    } else {
      setCurrentView({ type: 'grid', data: null });
      setActiveTab('Home');
    }

    if (viewType === 'grid') {
      document.title = 'Shorya Mahanot | Young Abstract Artist';
    } else {
      const pageTitle = getPageTitle(viewType, viewData);
      document.title = `${pageTitle} | ShoryaMahanot`;
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
      else if (item.name === 'Look the world is talking') navigate('/look-world-talking');
      else if (item.name === 'Twitter Mentions') navigate('/look-world-talking/twitter-mentions');
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
    <div className={`app-container ${currentView.type === 'grid' ? 'home-layout' : ''}`}>
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
                (item.name === 'Media' && (activeTab === 'Newspapers Articles' || activeTab === 'Magazines' || activeTab === 'Yahoo' || activeTab === "Reader's Digest" || activeTab === 'Web Articles' || activeTab === 'Videos'));

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
                              // else if (sub === 'Photo View') navigate('/gallery/photo-view');
                              else if (sub === 'Newspapers Articles') navigate('/media/newspaper-articles');
                              else if (sub === 'Magazines') navigate('/media/magazines');
                              else if (sub === 'Yahoo') navigate('/yahoo');
                              else if (sub === "Reader's Digest") navigate('/readers-digest');
                              else if (sub === 'Web Articles') navigate('/media/web-articles');
                              else if (sub === 'Videos') navigate('/media/videos');
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
              <a id="social-fb" href="https://www.facebook.com/ShoryaMahanotArt/" target="_blank" aria-label="Facebook" className="social-img-btn fb-bg" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a id="social-tw" href="https://twitter.com/shoryamahanot/" target="_blank" aria-label="Twitter" className="social-img-btn tw-bg" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
              <a id="social-ig" href="https://www.instagram.com/shoryamahanot_official/" target="_blank" aria-label="Instagram" className="social-img-btn insta-bg" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a id="social-li" href="https://www.linkedin.com/company/signature-style-abstract-artist/?originalSubdomain=in" target="_blank" aria-label="LinkedIn" className="social-img-btn linkedin-bg" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
              <a id="social-yt" href="https://www.youtube.com/watch?v=8ju4wewKCzc" target="_blank" aria-label="YouTube" className="social-img-btn yt-bg" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
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
        {/* {currentView.type === 'photo-view' && <PhotoView />} */}
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
            fromGallery={location.state?.fromGallery}
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
  { name: 'Look the world is talking', hasSub: false },
  { name: 'Twitter Mentions', hasSub: false },
  { name: 'Awards & Certificates', hasSub: false },
  { name: 'Contact', hasSub: false }
];