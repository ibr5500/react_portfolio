import React from 'react';
import {
  FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
} from 'react-icons/fa';
import {
  SiWebpack, SiRedux, SiJest, SiRubyonrails, SiPostgresql, SiMysql,
} from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';

const Skills = () => {
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
    { id: 12, name: 'postgresql', icon: <SiPostgresql /> },
    { id: 13, name: 'mysql', icon: <SiMysql /> },
  ];

  return (
    <section className="file-marker">
      <div>
        <div className="box-title">
          <p>
            <a className="drop-btn rounded-pill p-2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Languages ~</a>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">prof</button>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample3">Toggle both elements</button>
          </p>
        </div>
        <div className="skills">
          <div className="skill-header d-flex flex-column">
            <div className="collapse-container d-flex flex-row">
              <div className="col">
                <div className="collapse multi-collapse" id="collapseExample">
                  <div className="skills-list gap-3 text-left">
                    {listSkills.map((skill) => (
                      <div
                        key={skill.id}
                        className={skill.name}
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="collapse multi-collapse" id="collapseExample2">
                  <div className="skills-list gap-3 text-left">
                    <div>
                      soft skills
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="collapse multi-collapse">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
