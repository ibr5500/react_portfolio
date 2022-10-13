import React from 'react';
import { VscGithubAlt, VscTwitter } from 'react-icons/vsc';
import { ImLinkedin2 } from 'react-icons/im';

const side = () => (
  <div className="icons-container">
    <div className="icon">
      <ImLinkedin2 />
    </div>
    <div className="icon">
      <VscTwitter />
    </div>
    <div className="icon">
      <VscGithubAlt />
    </div>
  </div>
);

export default side;
