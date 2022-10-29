import React from 'react';
import {
  FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngleDown,
} from 'react-icons/fa';
import {
  SiWebpack, SiRedux, SiJest, SiRubyonrails, SiPostgresql, SiMysql,
} from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';

const Skills = () => {
  const langs = [
    { id: 1, name: 'html', icon: <FaHtml5 /> },
    { id: 2, name: 'css', icon: <FaCss3Alt /> },
    { id: 3, name: 'javaScript', icon: <FaJsSquare /> },
    { id: 4, name: 'ruby', icon: <DiRuby /> },
  ];

  const frams = [
    { id: 1, name: 'git', icon: <FaGitAlt /> },
    { id: 2, name: 'webpack', icon: <SiWebpack /> },
    { id: 3, name: 'react', icon: <FaReact /> },
    { id: 4, name: 'redux', icon: <SiRedux /> },
    { id: 5, name: 'bootStrap', icon: <BsFillBootstrapFill /> },
    { id: 6, name: 'jest', icon: <SiJest /> },
    { id: 7, name: 'rails', icon: <SiRubyonrails /> },
    { id: 8, name: 'postgresql', icon: <SiPostgresql /> },
    { id: 9, name: 'mysql', icon: <SiMysql /> },
  ];

  // const profs = [];

  return (
    <section className="file-marker">
      <div>
        <div className="box-title">
          skills
        </div>
        <div className="skills">
          <div className="skill-header d-flex flex-column">
            <div className="collapse-container d-flex flex-column">
              <a className="d-flex drop-btn p-2 justify-content-between" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Languages
                <FaAngleDown />
              </a>
              <div className="">
                <div className="collapse multi-collapse" id="collapseExample">
                  <div className="skills-list gap-2 p-2 text-left border-b">
                    {langs.map((skill) => (
                      <div
                        key={skill.id}
                        className={skill.name}
                      >
                        {skill.icon}
                        <span className="px-2">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <a className="d-flex drop-btn p-2 justify-content-between" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                Frameworks & tools
                <FaAngleDown />
              </a>
              <div className="">
                <div className="collapse multi-collapse" id="collapseExample2">
                  <div className="skills-list gap-2 p-2 text-left border-b">
                    {frams.map((skill) => (
                      <div
                        key={skill.id}
                        className={skill.name}
                      >
                        {skill.icon}
                        <span className="px-2">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <a className="d-flex drop-btn border-0 p-2 justify-content-between" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                Professional Skills
                <FaAngleDown />
              </a>
              <div className="">
                <div className="border-t collapse multi-collapse" id="collapseExample3">
                  <div>
                    skills
                  </div>
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
