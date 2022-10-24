import React from 'react';
import Carousel from 'nuka-carousel';
import recommendations from './recommendations.json';

const About = () => (
  <div className="about d-flex flex-row-reverse">
    <div className="recommendation">
      <Carousel
        autoplay="true"
        wrapAround="true"
        adaptiveHeight="true"
        cellSpacing={50}
        pauseOnHover="true"
        slidesToShow={1}
        swiping="true"
        defaultControlsConfig={{
          nextButtonText: '',
          prevButtonText: '',
          pagingDotsStyle: {
            fill: '#67a799',
          },
        }}
      >
        {recommendations.recommendations.map((item) => (
          <div key={item.id} className="letter d-flex flex-column gap-3">
            <div className="d-flex flex-row gap-1">
              <img className="rounded-circle recomend-img" src="./assets/photo.png" alt={item.name} />
              <div className="recomand-header align-items-center m-2">
                <h4>{item.name}</h4>
                <p>{item.occupation}</p>
              </div>
            </div>
            <p className="reco-letter">{item.recommend}</p>
          </div>
        ))}
      </Carousel>
    </div>
    <div className="about-me">
      <div className="d-flex flex-column">
        about me
      </div>
    </div>
  </div>
);

export default About;
