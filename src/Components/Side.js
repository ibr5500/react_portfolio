import React from 'react';
import { VscGithubAlt, VscTwitter } from 'react-icons/vsc';
import { ImLinkedin2 } from 'react-icons/im';
import { SiAngellist } from 'react-icons/si';
import { AiOutlineMedium } from 'react-icons/ai';

function Side() {
  return (
    <div className="icons-container">
      <div className="icon linkedin">
        <a href="https://www.linkedin.com/in/ibrahim-ahmat/" target="_blank" rel="noreferrer">
          <ImLinkedin2 />
        </a>
      </div>
      <div className="icon twitter">
        <a href="https://twitter.com/ibr_ahmat" target="_blank" rel="noreferrer">
          <VscTwitter />
        </a>
      </div>
      <div className="icon angelist">
        <a href="https://angel.co/u/ibrahim-ahmat" target="_blank" rel="noreferrer">
          <SiAngellist />
        </a>
      </div>
      <div className="icon github">
        <a href="https://github.com/ibr5500" target="_blank" rel="noreferrer">
          <VscGithubAlt />
        </a>
      </div>
      <div className="icon medium">
        <a href="https://medium.com/@ibr.s.ahmat" target="_blank" rel="noreferrer">
          <AiOutlineMedium />
        </a>
      </div>
    </div>
  );
}

export default Side;
