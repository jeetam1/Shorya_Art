import React from 'react';
import CommentSection from './CommentSection';

export default function HuffingtonPost() {
  return (
    <div className="artwork-detail-page custom-article-page">
      <header className="detail-page-header">
        <h1 className="artwork-main-title">The Huffington Post</h1>
        <div className="artwork-meta-subheader">Posted | <span>0 comments</span></div>
      </header>

      <div className="detail-page-content-body custom-article-flow">
        <h3 className="article-italic-subtitle">
          Artist Prodigy Shorya Mahanot May Just Be A Six-Year-Old Jackson Pollock.
        </h3>
        
        <div className="article-top-split">
          <div className="split-text-left">
            <p className="article-body-text">
              Jackson Pollock devotees, meet <a href="https://shoryamahanot.com" className="teal-link">Shorya Mahanot</a>. Like Pollock, he creates abstract expressionist paintings that channel the expressive forces of life with color and motion.
            </p>
            <p className="article-body-text">
              Unlike Pollock, however, Mahanot is six years old. That’s right, we have another child prodigy on our hands:
            </p>
          </div>
          <div className="split-img-right">
            <img loading="lazy" src="/home-photos/shorya-mahanot-the-huffington-post-interview.jpg" alt="The Huffington Post Feature - Shorya Mahanot Child Prodigy" className="inline-article-img" />
          </div>
        </div>

        <div className="article-inline-image-container">
          <img loading="lazy" src="/events-photos/1000.jpeg" alt="Artwork Details" className="inline-article-img full-width-article-img" />
        </div>

        <p className="article-body-text">
          Like the brilliant minds and eager, tiny hands of miniature artistes before him, Mahanot didn’t let his young age prevent him from expressing himself in the brightest of colors. In an interview with the Huffington Post, Mahanot explained he was inspired after watching his older sisters paint, though while they worked with figurative images, he veered toward abstraction.
        </p>

        <div className="article-inline-image-container">
          <img loading="lazy" src="/events-photos/1001.jpg" alt="Artwork Details" className="inline-article-img full-width-article-img" />
        </div>

        <p className="article-body-text">
          Well, he didn’t exactly explain it like that — but he did say “my sisters.”
        </p>

        <p className="article-body-text">
          His father then clarified: “Once I was in Mumbai and my daughters left their colors in their room, and Shorya had made an abstract painting. He saw a lot of art books belonging to my daughters, but they were not making abstract art works.”
        </p>

        <p className="article-body-text">
          According to Mr. Mahanot, each of Shorya’s works takes approximately four days to make and contains up to five layers of pigment. Living in Neemuch, a small town in the middle of India, Mahanot isn’t exactly in the center of the art world, but that doesn’t have any effect on his dreams. “Artist!” he cheerfully responds when asked about his future plans.
        </p>

        <p className="article-body-text">
          And his favorite artist? Not surprisingly, Mahanot cited Pollock himself. “He also makes paintings like me,” he explained.
        </p>

        <p className="article-body-text">
          Continue reading here at the <a href="https://www.huffpost.com" target="_blank" rel="noreferrer" className="teal-link">Huffington Post...</a>
        </p>
      </div>

      <CommentSection storageKey="comments-huffington-post" />

    </div>
  );
}