import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;

