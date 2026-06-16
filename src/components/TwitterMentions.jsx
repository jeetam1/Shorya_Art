import React, { useState, useEffect } from 'react';
import PageBanner from './PageBanner';

export default function TwitterMentions() {
  const [visibleCount, setVisibleCount] = useState(2);

  const tweetData = [
    {
      id: "1010495566265143297",
      text1: "Shorya Mahanot is the world’s youngest abstract artist, who has created and maintained a signature style in his paintings since the age of four. Today this award-winning young artist has displayed his works across world. ",
      tags1: "#ShoryaMahanot #YoungArtist #ChildProdigy #IndianProdigies pic.twitter.com/PwN1TlSxNb",
      author: "KidZania DELHI NCR (@KidZaniaDELNCR)",
      date: "June 23, 2018"
    },
    {
      id: "524102899643588609",
      text1: "That's ",
      tags1: "#ShoryaMahanot",
      text2: " for you. India's 'child Picasso' puts on his goggles and takes aim at the canvas ",
      tags2: "http://t.co/3uhAJVON5c via @guardian",
      author: "Camlin_Official (@Camlin_Official)",
      date: "October 20, 2014"
    },
    {
      id: "524101964187979778",
      text1: "Have you heard of Shorya Mahanot? From India he is termed as the Jackson Pollock of the future. ",
      tags1: "#ShoryaMahanot",
      author: "Camlin_Official (@Camlin_Official)",
      date: "October 20, 2014"
    },
    {
      id: "975722689368395776",
      tags1: "#ShoryaMahanot",
      text2: " is World’s Youngest Abstract Artist, who started painting wonders at the age of 4 from Neemuch, a town in the central Indian state of Madhya Pradesh. Now he is 12 years old. ",
      tags2: "#SeedlingPublicSchool #SeedlingSchools #Jaipur #childprodigy #childPicasso pic.twitter.com/StuTLH91ie",
      author: "SeedlingSchoolsJpr (@SeedlingSchools)",
      date: "March 19, 2018"
    },
    
    { id: "356771400608006144", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" },
    { id: "1086123696769589248", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" },
    { id: "1091191914316017665", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" },
    { id: "1006113817976172544", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" },
    { id: "833925878010695681", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" },
    { id: "216004034790817792", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" },
    { id: "354690843623432192", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" },
    { id: "128675148537671680", text1: "Loading Tweet...", author: "Twitter User", date: "View on Twitter" }
  ];

  useEffect(() => {
    if (visibleCount < tweetData.length) {
      const timer = setTimeout(() => setVisibleCount(prev => prev + 2), 800);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, tweetData.length]);

  useEffect(() => {
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    } else if (window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, [visibleCount]);

  return (
    <div className="shorya-twitter-view-root">
      
      <PageBanner title="Twitter Mentions" bgImage="/twitter-mention.jpg" />

      <div className="twitter-mentions-content-container">
        <div className="twitter-mentions-feed-list">
          
          {tweetData.slice(0, visibleCount).map((tweet) => (
            <div key={tweet.id} className="tweet-wrapper-box">

              <blockquote className="twitter-tweet" data-conversation="none" data-dnt="true">
                <p lang="en" dir="ltr">
                  {tweet.text1 && <span>{tweet.text1}</span>}
                  {tweet.tags1 && <a href={`https://twitter.com/x/status/${tweet.id}`}>{tweet.tags1}</a>}
                  {tweet.text2 && <span>{tweet.text2}</span>}
                  {tweet.tags2 && <a href={`https://twitter.com/x/status/${tweet.id}`}>{tweet.tags2}</a>}
                </p>
                &mdash; {tweet.author} <a href={`https://twitter.com/x/status/${tweet.id}`}>{tweet.date}</a>
              </blockquote>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}