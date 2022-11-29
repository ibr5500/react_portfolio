import React from 'react';
import Side from './Side'; // eslint-disable-line

function Home() {
  return (
    <div className="home-container">
      <div className="flex-column">
        <Side />
      </div>
      <div className="home-content">
        <p className="greeting">Hello, I&#39;m</p>
        <h1 className="name">Ibrahim Ahmat</h1>
        <h3 className="career">software developer</h3>
        <h5>&#34;Full stack developer&#34;</h5>
        <p>frontend (React), backend (Ruby on Rails)</p>
      </div>
    </div>
  );
}

export default Home;
