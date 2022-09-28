import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const ProjectComponent = () => {
  const projects = useSelector((state) => state.allProjects.projects);
  const renderList = projects.map((project) => {
    const { id, title, image } = project;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/project/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
              </div>
            </div>
          </div>
        </Link> 
      </div>
    );
  });
  return  <>
            {renderList}
            
          </>;
};

export default ProjectComponent;
