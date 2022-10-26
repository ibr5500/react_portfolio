import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { RiSingleQuotesR, RiSingleQuotesL, RiSpectrumFill } from 'react-icons/ri';
import {
  FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
} from 'react-icons/fa';
import {
  SiWebpack, SiRedux, SiJest, SiRubyonrails, SiPostgresql, SiMysql,
} from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
// import { IoIosHand } from 'react-icons/io';
import { BsFillBootstrapFill } from 'react-icons/bs';
import data from './database/data.json';

const About = () => {
  const listSkills = [
    { id: 1, name: 'git', icon: <FaGitAlt /> },
    { id: 2, name: 'html', icon: <FaHtml5 /> },
    { id: 3, name: 'css', icon: <FaCss3Alt /> },
    { id: 4, name: 'js', icon: <FaJsSquare /> },
    { id: 5, name: 'webpack', icon: <SiWebpack /> },
    { id: 6, name: 'react', icon: <FaReact /> },
    { id: 7, name: 'redux', icon: <SiRedux /> },
    { id: 8, name: 'bootstrap', icon: <BsFillBootstrapFill /> },
    { id: 9, name: 'jest', icon: <SiJest /> },
    { id: 10, name: 'ruby', icon: <DiRuby /> },
    { id: 11, name: 'rails', icon: <SiRubyonrails /> },
    { id: 12, name: 'rspec', icon: <RiSpectrumFill /> },
    { id: 13, name: 'postgresql', icon: <SiPostgresql /> },
    { id: 14, name: 'mysql', icon: <SiMysql /> },
  ];

  return (
    <div className="about d-flex flex-column">
      <div className="about-me d-flex flex-row">
        <div className="intro-dev d-flex flex-row">
          <img src={data.data.devImage} alt={data.data.developer} />
          <p>
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
            <Link to="/" className="contact-link text-decoration-none">CONTANT ME</Link>
            , or review my
            {' '}
            <Link to="https://drive.google.com/file/d/1Q-YwP0mRhtHhgUNL7PFHNiFmKr-JrT2I/view?usp=sharing" className="resume text-decoration-none">RESUME</Link>
            .
          </p>
        </div>
        <div className="skills gap-2">
          {listSkills.map((skill) => (
            <span key={skill.id} className={skill.name}>{skill.icon}</span>
          ))}
        </div>
      </div>
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
                {' '}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
