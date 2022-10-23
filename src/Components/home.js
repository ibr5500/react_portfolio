import React from 'react';
import Side from './Side';

const Home = () => (
  <div className="home-container">
    <Side />
    <div className="home-content">
      <p className="greeting">Hello, I&#39;m</p>
      <h1 className="name">Ibrahim Ahmat</h1>
      <h3 className="career">software developer</h3>
      <h6>&#34; full stack developer &#34;</h6>
    </div>
  </div>
);

export default Home;
