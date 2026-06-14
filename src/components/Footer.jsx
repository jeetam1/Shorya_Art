import React from 'react';

export default function Footer() {
  return (
    <footer className="detail-page-footer-signature">
      <p className="footer-signature-text">
        Designed by Shreya Mahanot | <strong style={{ fontWeight: 'bold' }}>&copy; <span>
          {/* FUTURE CHANGE LINK: Change the href URL and/or link text below to update the portfolio link */}
          <a href="https://shorya1.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>
            shoryamahanot.com
          </a>
        </span></strong>
      </p>
    </footer>
  );
}