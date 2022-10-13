import React from 'react';
import Side from './side';

const Home = () => (
  <div className="home-container">
    <Side />
    <div className="home-content">
      <p className="greeting">Hello, I&#39;m</p>
      <h1 className="name">Ibrahim Ahmat</h1>
      <h3 className="career">software &#34;web&#34; developer</h3>
    </div>
  </div>
);

export default Home;
