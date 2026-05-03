import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h4>{project.name}</h4>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;