import React from 'react';
import Carousel from 'nuka-carousel';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { VscSourceControl } from 'react-icons/vsc';
import { GiMeshNetwork } from 'react-icons/gi';
import data from './database/data.json';

function Works() {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <div className="projects-carousel">
        <Carousel
          className="container"
          wrapAround="true"
          adaptiveHeight="true"
          cellSpacing={50}
          pauseOnHover="true"
          slidesToShow={1}
          autoplay="true"
          autoplayInterval={5000}
          defaultControlsConfig={{
            nextButtonText: <FaArrowCircleRight className="arrow" />,
            prevButtonText: <FaArrowCircleLeft className="arrow" />,
            pagingDotsStyle: {
              fill: '#89cdbe',
            },
          }}
        >
          {data.data.projects.map((project) => (
            <div key={project.id} className="card d-flex flex-row">
              <img src={project.image} className="card-img-top" alt={project.name} />
              <div className="d-flex flex-column">
                <div className="card-body d-flex flex-column m-3">
                  <h3 className="card-title">{project.name}</h3>
                  <div className="d-flex flex-row gap-3 my-2">
                    {project.spans.map((s) => (
                      <span key={s.id}>{s.span}</span>
                    ))}
                  </div>
                  <p className="card-text">{project.description}</p>
                </div>
                <ul className="d-flex flex-row justify-content-start">
                  {project.tools.map((tool) => (
                    <li key={tool.id} className="list-group p-1 m-1 border">{tool.lang}</li>
                  ))}
                </ul>
                <div className="d-flex flex-row mt-2 mb-5">
                  <div className="card-btns rounded-pill">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn live btn-bg">
                      live
                      {' '}
                      <GiMeshNetwork />
                    </a>
                    <a href={project.sourceLink} target="_blank" rel="noreferrer" className="btn source btn-bg">
                      source
                      {' '}
                      <VscSourceControl />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Works;
