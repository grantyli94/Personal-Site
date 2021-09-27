import ProjectCard from "./ProjectCard";
import jobly from './jobly.png';
import warbler from './warbler.png';

const JOBLY_URL = "http://jobly-grant-li.surge.sh/";
const WARBLER_URL = "https://warbler-r22-grant-li.herokuapp.com/";
const joblyText = (
  <div>
    <p><b>Tech Stack:</b> React, Express, PostgreSQL, Bootstrap</p>
    <p><b>Description:</b> Fullstack <i>LinkedIn</i> clone where users can view and apply to company job listings</p>
  </div>
);
const warblerText = (
  <div>
    <p><b>Tech Stack:</b> Flask, Jinja, SQLAlchemy, PostgreSQL</p>
    <p><b>Description:</b> Backend <i>Twitter</i> clone where users can follow and message other users</p>
  </div>
);

function ProjectList() {

  return (
    <div className="ProjectList">
      <h1>Projects</h1>
      <ProjectCard name="Jobly" img={jobly} url={JOBLY_URL} text={joblyText}/>
      <ProjectCard name="Warbler" img={warbler} url={WARBLER_URL} text={warblerText}/>
    </div>
  );
}

export default ProjectList;