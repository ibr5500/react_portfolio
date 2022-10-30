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

  const profs = [
    {
      id: 1, cls: 'team', name: 'Teamwork', icon: <i className="fa-solid fa-users-gear" />,
    },
    {
      id: 2, cls: 'pair', name: 'Pair Programming', icon: <i className="fa-solid fa-user-group" />,
    },
    {
      id: 3, cls: 'remote', name: 'Remote Work', icon: <i className="fa-solid fa-house-laptop" />,
    },
  ];

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
              <div>
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
              <div>
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
              <div>
                <div className="collapse multi-collapse" id="collapseExample3">
                  <div className="pro-skills-list gap-2 p-2 text-left border-t">
                    {profs.map((skill) => (
                      <div
                        key={skill.id}
                        className={skill.cls}
                      >
                        {skill.icon}
                        <span className="px-2">{skill.name}</span>
                      </div>
                    ))}
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
