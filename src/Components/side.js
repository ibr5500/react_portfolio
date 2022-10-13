import React from 'react';
import { VscGithubAlt, VscTwitter } from 'react-icons/vsc';
import { ImLinkedin2 } from 'react-icons/im';
import { SiAngellist } from 'react-icons/si';

const Side = () => (
  <div className="icons-container">
    <div className="icon linkedin">
      <ImLinkedin2 />
    </div>
    <div className="icon twitter">
      <VscTwitter />
    </div>
    <div className="icon angelist">
      <SiAngellist />
    </div>
    <div className="icon github">
      <VscGithubAlt />
    </div>
  </div>
);

export default Side;
