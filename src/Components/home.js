import React from 'react';
import Side from './side';

const Home = () => (
  <div className="home-container">
    <Side />
    <div className="home-content">
      <p className="greeting">Hello, I&#39;m</p>
      <h1 className="name">Ibrahim Ahmat</h1>
      <h4 className="info">full stack developer</h4>
    </div>
  </div>
);

export default Home;
