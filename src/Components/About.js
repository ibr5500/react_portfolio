import React from 'react';
// import recommendations from './recommendations.json';

const About = () => (
  <div className="about d-flex">
    <div className="recommendation">
      Recommendations:
      {/* {recommendations.recommendations.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.recommend}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))} */}
    </div>
    <div className="skills" />
  </div>
);

export default About;
