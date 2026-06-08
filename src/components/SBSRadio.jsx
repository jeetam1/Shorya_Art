import React from 'react';
import CommentSection from './CommentSection'; // Adjust path if placed inside your './components/' directory

export default function SBSRadio() {
  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* STANDARD GLOBAL HEADER BANNER */}
      <div className="shorya-custom-header-strip-container" style={{ backgroundImage: "url('/701.jpg')", justifyContent: 'flex-start' }}>
        <div className="shorya-custom-title-white-block">
          <h1 className="shorya-custom-title-text-value">SBS Radio</h1>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT */}
      <div style={{ width: '100%', maxWidth: '900px', margin: '50px auto', padding: '0 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        {/* Post Meta Data */}
        <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '14px', color: '#888888', margin: '0 0 50px 0' }}>
          Posted | 0 comments
        </p>

        {/* CENTERED MEDIA SECTION (Image & Audio Player) */}
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto 80px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          
          <h2 style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '18px', fontWeight: '700', color: '#333333', textAlign: 'center', margin: '0' }}>
            Reaching to the land down under.
          </h2>

          <img 
            src="/a539.png" 
            alt="SBS Radio Interview" 
            style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} 
          />

          <audio controls style={{ width: '100%', marginTop: '10px' }}>
            <source src="/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <p style={{ fontFamily: "'Open Sans', Arial, sans-serif", fontSize: '13px', color: '#888888', textAlign: 'center', margin: '0' }}>
            Shorya's Interview with SBS Radio Australia
          </p>

        </div>

        {/* --- DYNAMIC COMMON SHARED COMMENT SECTION COMPONENT --- */}
        <CommentSection storageKey="comments-sbs-radio-page" />

      </div>
    </div>
  );
}