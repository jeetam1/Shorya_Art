import React from 'react';

// We pass 'title' and 'bgImage' as props so they can change on every page
export default function PageBanner({ title, bgImage }) {
  return (
    <div 
      className="shorya-custom-header-strip-container" 
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="shorya-custom-title-white-block">
        <h1 className="shorya-custom-title-text-value">{title}</h1>
      </div>
    </div>
  );
}