
function ProjectCard({ name, img, url, text }) {

  return (
    <div className="ProjectCard col-6">
      <div className="ProjectCard-Card" style={{backgroundImage: `url(${img})`}}>
        <span className="description">
          <p><a href={url}><i className="fa fa-link"></i></a></p>
          <p className="description-text">{name}</p>
        </span>
      </div>
      <div className="ProjectCard-Text">
        {text}
      </div>
    </div>
  );
}

export default ProjectCard;