import React from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { RiSingleQuotesR, RiSingleQuotesL } from 'react-icons/ri';
import data from './database/data.json';
import Side from './Side';
import Skills from './Skills';

const About = () => (
  <div className="d-flex flex-row">
    <Side />
    <div className="about d-flex flex-column gap-2">
      <div className="about-me d-flex flex-row gap-3">
        <div className="intro-dev d-flex flex-row">
          <p>
            <img className="dev-img" src={data.data.devImage} alt={data.data.developer} />
            Hello,
            I&apos;m
            <br />
            <span className="name">
              {' '}
              {data.data.developer}
              {' '}
            </span>
            a software developer,
            I am passionate about building projects from scratch to deployment.
            Look through some of my work and experience!
            If you like what you see and have a project you need coding for,
            don’t hesitate to
            {' '}
            <NavLink to="/contact" className="contact-link text-decoration-none">CONTACT ME</NavLink>
            , or review my
            {' '}
            <a href="https://docs.google.com/document/d/e/2PACX-1vTNVRXkDbBVs0xw_qTF8A6HDk_ZzXBteA_bTpk2mNPYdl1lfgb5TMp05WfZqbSoXeFH9WCQfXp3RShH/pub" target="_blank" rel="noreferrer" className="resume text-decoration-none">
              RESUME
            </a>
            .
          </p>
        </div>
      </div>
      <div className="recommendation">
        <div className="carousel-container">
          <Carousel
            autoplay="true"
            wrapAround="true"
            adaptiveHeight="true"
            cellSpacing={50}
            pauseOnHover="true"
            autoplayInterval={5000}
            slidesToShow={1}
            swiping="true"
            defaultControlsConfig={{
              nextButtonText: null,
              prevButtonText: null,
              pagingDotsStyle: {
                fill: '#3f3f3f',
              },
            }}
          >
            {data.data.recomendations.map((item) => (
              <div key={item.id} className="letter d-flex flex-column">
                <div className="d-flex flex-row">
                  <img className="rounded-circle recomend-img" src={item.img} alt={item.name} />
                  <div className="recomand-header align-items-center m-2">
                    <h4>{item.name}</h4>
                    <p>{item.occupation}</p>
                  </div>
                </div>
                <p className="reco-letter">
                  <RiSingleQuotesL className="qoute" />
                  {' '}
                  {item.recommend}
                  <RiSingleQuotesR className="qoute" />
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
    <Skills />
  </div>
);

export default About;
