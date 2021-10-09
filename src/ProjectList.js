import ProjectCard from "./ProjectCard";
import jobly from './jobly.png';
import warbler from './warbler.png';
import minesweeper from './minesweeper.png';
import aimly from './aimly.png';

const JOBLY_URL = "http://jobly-grant-li.surge.sh/";
const WARBLER_URL = "https://warbler-r22-grant-li.herokuapp.com/";
const MINESWEEPER_URL = "http://www.minesweeper.grant-li.com/";
const AIMLY_URL = "https://aimly.surge.sh/";

const joblyText = (
  <div>
    <p><b>Tech Stack:</b> React, Express, PostgreSQL</p>
    <p><b>Description:</b> Fullstack LinkedIn clone where users can view and apply to company job listings</p>
  </div>
);

const warblerText = (
  <div>
    <p><b>Tech Stack:</b> Flask, Jinja, SQLAlchemy, PostgreSQL</p>
    <p><b>Description:</b> Backend Twitter clone where users can follow and message other users</p>
  </div>
);

const minesweeperText = (
  <div>
    <p><b>Tech Stack:</b> React, TypeScript</p>
    <p><b>Description:</b> Based off of the popular Minesweeper game; built with a depth-first search (DFS) algorithm</p>
  </div>
);

const aimlyText = (
  <div>
    <p><b>Tech Stack:</b> React, Express, PostgreSQL</p>
    <p><b>Description:</b> Light-weight first-person shooter (FPS) aim trainer</p>
  </div>
);

function ProjectList() {

  return (
    <div className="ProjectList">
      <h1>Projects</h1>
      <div className="row">
        <ProjectCard name="Jobly" img={jobly} url={JOBLY_URL} text={joblyText}/>
        <ProjectCard name="Warbler" img={warbler} url={WARBLER_URL} text={warblerText}/>
        <ProjectCard name="Minesweeper" img={minesweeper} url={MINESWEEPER_URL} text={minesweeperText}/>
        <ProjectCard name="Aim.ly" img={aimly} url={AIMLY_URL} text={aimlyText}/>
      </div>
    </div>
  );
}

export default ProjectList;