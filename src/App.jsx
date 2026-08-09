import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Plus, Minus, ZoomIn, ZoomOut } from 'lucide-react';
import { gridItems } from './data/gridData';
import { useNavigate, useLocation } from 'react-router-dom';
import { calculateWallDimensions } from './utils/dimensionUtils';

import Home from './components/Home';
import { galleryItems } from './data/galleryData';
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import SEO from './components/SEO';
import { ROUTE_SEO_MAP, getArtworkSEO } from './data/seoData';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Lazy-loaded routes for code splitting and ultra-fast initial page loads
const Awards = lazy(() => import('./components/Awards'));
const Biography = lazy(() => import('./components/Biography'));
const ArtistStatement = lazy(() => import('./components/ArtistStatement'));
const AcrylicOnCanvas = lazy(() => import('./components/AcrylicOnCanvas'));
const Events = lazy(() => import('./components/Events'));
const NewspaperArticles = lazy(() => import('./components/NewspaperArticles'));
const Magazines = lazy(() => import('./components/Magazines'));
const Ted = lazy(() => import('./components/Ted'));
const MicrosoftFutureDecoded = lazy(() => import('./components/MicrosoftFutureDecoded'));
const SBSRadio = lazy(() => import('./components/SBSRadio'));
const WebArticles = lazy(() => import('./components/WebArticles'));
const Videos = lazy(() => import('./components/Videos'));
const LookWorldTalking = lazy(() => import('./components/LookWorldTalking'));
const TwitterMentions = lazy(() => import('./components/TwitterMentions'));
const HuffingtonPost = lazy(() => import('./components/HuffingtonPost'));
const TedX = lazy(() => import('./components/TedX'));
const HoltzmanGallery = lazy(() => import('./components/HoltzmanGallery'));
const Pogo = lazy(() => import('./components/Pogo'));
const ArtExpo = lazy(() => import('./components/ArtExpo'));
const SpectrumMiami = lazy(() => import('./components/SpectrumMiami'));
const CelebrityChefGala = lazy(() => import('./components/CelebrityChefGala'));
const KalidasSanskrit = lazy(() => import('./components/KalidasSanskrit'));
const Contact = lazy(() => import('./components/Contact'));
const TajMahalPalace = lazy(() => import('./components/TajMahalPalace'));
const Nestle = lazy(() => import('./components/Nestle'));
const NDTV = lazy(() => import('./components/NDTV'));
const RKLaxman = lazy(() => import('./components/RKLaxman'));
const Yahoo = lazy(() => import('./components/Yahoo'));
const ReadersDigest = lazy(() => import('./components/ReadersDigest'));

const ROUTE_MAP = [
  { paths: ['/', '/home'], type: 'grid', tab: 'Home' },
  { paths: ['/biography', '/biography/'], type: 'biography', tab: 'Biography' },
  { paths: ['/artist-statement', '/artists-statement', '/artists-statement/'], type: 'artist-statement', tab: "Artist's Statement" },
  { paths: ['/gallery/acrylic-on-canvas', '/acrylic-on-canvas', '/acrylic-on-canvas/'], type: 'acrylic-on-canvas', tab: 'Acrylic on canvas', expand: 'Gallery' },
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
  const [activeImageSrc, setActiveImageSrc] = useState(data.src);
  const [isRoomZoomed, setIsRoomZoomed] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageSrc(data.src);
    setIsRoomZoomed(false);
    setIsLightboxOpen(false);
  }, [data.src]);

  const isStartingTwo = data.id === 12 || data.slug === 'Sunshine';
  const images = fromGallery
    ? (data.images && data.images.length > 0
      ? [data.src, ...data.images]
      : (isStartingTwo ? [data.src, '/design1.png', '/design5.png'] : [data.src]))
    : [data.src];

  const isWallPhoto = activeImageSrc !== data.src;
  const wallDims = calculateWallDimensions(data.size, {
    ppi: 3.6,
    maxWallHeightPx: 260,
    maxWallWidthPx: 600,
    minWallHeightPx: 40
  });

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
        <div className={`detail-image-and-thumbs-wrapper ${data.isWide ? 'is-wide-wrapper' : ''}`}>
          <div
            className={`detail-image-container ${data.isArticle ? 'is-article-view' : ''} ${data.isWide ? 'is-wide-view' : ''} ${isWallPhoto ? 'is-wall-view-container' : ''}`}
            ref={!data.isArticle && !isWallPhoto ? containerRef : null}
            onMouseMove={!data.isArticle && !isWallPhoto ? handleMouseMove : null}
            onMouseLeave={!data.isArticle && !isWallPhoto ? () => setMagnifier(prev => ({ ...prev, show: false })) : null}
            style={{ cursor: !data.isArticle && !isWallPhoto ? 'crosshair' : 'default', position: 'relative' }}
          >
            {isWallPhoto ? (
              <div className={`shorya-dynamic-room-view ${isRoomZoomed ? 'zoomed' : ''}`}>
                <div
                  className="shorya-room-painting-on-wall"
                  style={{
                    width: `${wallDims.widthPx * (isRoomZoomed ? 1.75 : 1.0)}px`,
                    height: `${wallDims.heightPx * (isRoomZoomed ? 1.75 : 1.0)}px`,
                    cursor: 'pointer'
                  }}
                  onClick={() => setIsRoomZoomed(prev => !prev)}
                  title={isRoomZoomed ? "Click to zoom out" : "Click to zoom in"}
                >
                  <img
                    src={data.src}
                    alt={`${data.title} displayed on wall - Abstract Art by Shorya Mahanot`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <button
                  className="shorya-room-zoom-toggle"
                  onClick={() => setIsRoomZoomed(prev => !prev)}
                  aria-label={isRoomZoomed ? "Zoom Out" : "Zoom In"}
                  title={isRoomZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isRoomZoomed ? (
                    <>
                      <ZoomOut size={15} style={{ marginRight: '6px' }} />
                      <span>Zoom Out</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn size={15} style={{ marginRight: '6px' }} />
                      <span>Zoom In</span>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <>
                {/* Invisible original image to lock container height/width */}
                <img
                  src={data.src}
                  alt=""
                  aria-hidden="true"
                  className="detail-large-img-placeholder"
                />
                {/* Active image absolute-positioned over it */}
                <img
                  src={activeImageSrc}
                  alt={`${data.title} - Acrylic on Canvas Abstract Painting by Shorya Mahanot`}
                  className="detail-large-img-active"
                />
                {!data.isArticle && magnifier.show && containerRef.current && (
                  <div className="artwork-magnifier-glass-lens" style={getMagnifierStyles(activeImageSrc)} />
                )}
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="detail-artwork-thumbnails-strip">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`detail-artwork-thumb-btn ${activeImageSrc === img ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveImageSrc(img);
                    setMagnifier(prev => ({ ...prev, show: false }));
                  }}
                  title={
                    data.slug === 'Blushing' || data.id === 25
                      ? (idx === 0 ? "Original View" : idx === 1 ? "Wide Angle View" : idx === 2 ? "Closer View" : "Close to Wall View")
                      : data.slug === 'Galaxy-Dreams' || data.id === 30 || data.slug === 'Rainy-Day' || data.id === 15 || data.slug === 'Moving-Colour' || data.id === 28 || data.slug === 'Pretty-Dreams' || data.id === 26 || data.slug === 'In-The-Sea' || data.id === 24 || data.slug === 'Colours-of-Life' || data.slug === 'Sunshine' || data.slug === 'Cloudy-Dreams' || data.slug === 'green-rising' || data.slug === 'electric-lights' || data.slug === 'firebright' || data.slug === 'dancing-with-color' || data.slug === 'swirls' || data.slug === 'clouds-and-wind' || data.slug === 'emotions' || data.slug === 'moving-fast' || data.slug === 'Sea-Splash'
                        ? (idx === 0 ? "Original View" : "Wall Display View")
                        : (idx === 0 ? "Original View" : idx === 1 ? "Design 1 (Living Room)" : "Design 5 (Bedroom)")
                  }
                >
                  <img src={img} alt={`${data.title} view ${idx + 1} - Shorya Mahanot`} className="detail-artwork-thumb-img" />
                </button>
              ))}
            </div>
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

      {isLightboxOpen && (
        <div
          className="shorya-zoom-lightbox-overlay-shroud open-animation"
          onClick={() => setIsLightboxOpen(false)}
          style={{ zIndex: 99999 }}
        >
          <div className="shorya-zoom-lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="shorya-zoom-lightbox-container open-animation" style={{ width: 'auto', height: 'auto', maxWidth: '92vw', maxHeight: '88vh' }}>
              <button className="shorya-zoom-lightbox-close-btn" onClick={() => setIsLightboxOpen(false)}>&times;</button>
              <img
                src={activeImageSrc}
                alt={data.title}
                className="shorya-zoom-lightbox-img"
                style={{ maxWidth: '90vw', maxHeight: '82vh', objectFit: 'contain' }}
              />
            </div>
            {data.title && (
              <div className="shorya-zoom-lightbox-caption">
                {data.title} {data.size ? `(${data.size})` : ''}
              </div>
            )}
          </div>
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
          isWide: galleryMatch.isWide,
          images: galleryMatch.images || []
        };
      } else if (match && galleryMatch) {
        match.isWide = galleryMatch.isWide;
        match.src = galleryMatch.src;
        match.images = galleryMatch.images || [];
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

  const getMagnifierStyles = (overrideSrc) => {
    if (!containerRef.current) return {};
    const lensSize = 180;
    const zoomLevel = 2.5;
    const { width, height } = containerRef.current.getBoundingClientRect();

    const bgWidth = width * zoomLevel;
    const bgHeight = height * zoomLevel;

    const bgPosX = -(magnifier.x * zoomLevel) + (lensSize / 2);
    const bgPosY = -(magnifier.y * zoomLevel) + (lensSize / 2);

    const srcToUse = overrideSrc || currentView.data.src;

    return {
      left: `${magnifier.x - (lensSize / 2)}px`,
      top: `${magnifier.y - (lensSize / 2)}px`,
      width: `${lensSize}px`,
      height: `${lensSize}px`,
      backgroundImage: `url(${srcToUse})`,
      backgroundPosition: `${bgPosX}px ${bgPosY}px`,
      backgroundSize: `${bgWidth}px ${bgHeight}px`,
      imageRendering: 'high-quality'
    };
  };

  const getSEOProps = () => {
    if (currentView.type === 'detail' && currentView.data) {
      const artSEO = getArtworkSEO(currentView.data);
      return {
        ...artSEO,
        path: location.pathname,
        breadcrumbs: [
          { name: 'Gallery', url: '/gallery/acrylic-on-canvas' },
          { name: currentView.data.title || currentView.data.name, url: location.pathname }
        ]
      };
    }

    const routeKey = currentView.type === 'grid' ? 'home' : currentView.type;
    const baseSEO = ROUTE_SEO_MAP[routeKey] || ROUTE_SEO_MAP.home;
    const pageTitle = getPageTitle(currentView.type, currentView.data);

    let breadcrumbs = [];
    if (currentView.type !== 'grid') {
      if (['newspaper-articles', 'magazines', 'web-articles', 'videos', 'yahoo', 'readers-digest'].includes(currentView.type)) {
        breadcrumbs = [
          { name: 'Media', url: '/media/newspaper-articles' },
          { name: pageTitle, url: location.pathname }
        ];
      } else if (['taj-mahal', 'rk-laxman', 'pogo', 'kalidas', 'celebrity-chef', 'spectrum-miami', 'art-expo', 'holtzman', 'ndtv', 'nestle', 'tedx-event-page', 'microsoft', 'sbs-radio'].includes(currentView.type)) {
        breadcrumbs = [
          { name: 'Events', url: '/events' },
          { name: pageTitle, url: location.pathname }
        ];
      } else if (currentView.type === 'acrylic-on-canvas') {
        breadcrumbs = [
          { name: 'Gallery', url: '/gallery/acrylic-on-canvas' },
          { name: 'Acrylic on canvas', url: '/gallery/acrylic-on-canvas' }
        ];
      } else if (currentView.type === 'twitter-mentions') {
        breadcrumbs = [
          { name: 'Look the world is talking', url: '/look-world-talking' },
          { name: 'Twitter Mentions', url: '/look-world-talking/twitter-mentions' }
        ];
      } else {
        breadcrumbs = [
          { name: pageTitle, url: location.pathname }
        ];
      }
    }

    return {
      ...baseSEO,
      path: location.pathname,
      breadcrumbs
    };
  };

  const currentSEO = getSEOProps();

  return (
    <div className={`app-container ${currentView.type === 'grid' ? 'home-layout' : ''}`}>
      <SEO {...currentSEO} />
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
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', width: '100%' }}>
            <div className="shorya-spinner-circle" style={{ width: '36px', height: '36px', border: '3px solid #e2e8f0', borderTopColor: '#0f172a', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
          </div>
        }>
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
              fromGallery={location.state?.fromGallery}
            />
          )}
        </Suspense>
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