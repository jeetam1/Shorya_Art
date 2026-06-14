import React from 'react';
import CommentSection from './CommentSection'; 

export default function ReadersDigest() {
  return (
    <div className="rd-page-container">
      <div className="rd-content-wrapper">

        <h1 className="rd-main-title">Reader's Digest</h1>
        <p className="rd-meta">Posted | 0 comments</p>

        <h2 className="rd-sub-title">Growing Up Gifted</h2>

        <div className="rd-text-image-block">
          
          <img src="/media/ab1.jpg" alt="Reader's Digest Logo" className="rd-inline-image-right" />
          <p className="rd-paragraph">
            There simply isn't a single way to define or gauge intelligence. Smartness in kids is a sum of different cognitive abilities not just IQ. It spans across multiple areas: kinetic, musical, spatial, linguistic, logical-mathematical, interpersonal and intrapersonal. We often forget this and tend to benchmark children based on their grades in class. This Children's Day, let's learn how to spot true potential in our kids. For this Reader's Digest met with 5 young child prodigies and tried to uncover their story, here is a snapshot.
          </p>
        </div>

        <div className="rd-text-image-block">
          <p className="rd-paragraph">
            His family had never seen an art like this before—there were shades of Jackson Pollock—and his father, Aditya, was beyond ecstatic. One of the world's youngest signature style abstract artist, with several solo exhibitions under his belt, he has participated at the artexpo in New York and Microsoft's Future Decoded in Mumbai, selling painting worth $40,000 in all. Now 12, Shorya also has honour to do a live demonstration for the late cartoonist R.K. Laxman at the age of five. Shorya gushed, "He blessed me and encouraged me to paint."
          </p>
          <img src="/media/ab2.jpg" alt="Shorya Painting" className="rd-inline-image-center" />
        </div>

        <div className="rd-text-image-block">
          <p className="rd-paragraph">
            When you see Shorya's work, the first thing that strikes you is the sheer maturity and confidence of his strokes. The colours are bold, the patterns are intricate, and the overall composition speaks of an artist who is completely in control of his medium. His works have been compared to those of Jackson Pollock, a testament to his innate talent and unique style. With every brushstroke, Shorya continues to push the boundaries of abstract expressionism, creating a magical world on canvas.
          </p>
          <img src="/media/ab3.jpg" alt="Abstract Art Feature" className="rd-inline-image-center" />
        </div>

        <CommentSection storageKey="comments-readers-digest" />

      </div>
    </div>
  );
}