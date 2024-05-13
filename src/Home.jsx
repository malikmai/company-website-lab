import React from 'react';
import './Home.css';

function Home() {
  return (
    <main>
      <div className="homepageDiv">
        <div className="promotionalBox1">
          <p className="box1Text">Have you tried the new flavors?!</p>
        </div>
        <div className="promotionalBox2">
          <p className="box2Text">The Best Coffee Around!</p>
        </div>
        <div className="promotionalBox3">
          <p className="box3Text">Now Selling Pastries and More!</p>
        </div>
      </div>
    </main>
  );
}

export default Home;