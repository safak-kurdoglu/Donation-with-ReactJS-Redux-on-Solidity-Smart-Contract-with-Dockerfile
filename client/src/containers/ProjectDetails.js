import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProject,
  removeSelectedProject,
} from "../redux/actions/projectsActions";
import Contract from "../contract/components/APIDonate";
import projectDatas from "../projects.json";

const ProjectDetails = () => {
  const { projectId } = useParams();
  let project = useSelector((state) => state.project);
  const { image, title, description } = project;
  const dispatch = useDispatch();
  const fetchProjectDetail = async (id) => {
    const projectData = projectDatas[id-1]
    dispatch(selectedProject(projectData));
  };

  useEffect(() => {
    if (projectId && projectId !== "") fetchProjectDetail(projectId);
    return () => {
      dispatch(removeSelectedProject());
    };
  }, [projectId]);
  
  return (

    <div className="ui grid container">
      {Object.keys(project).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image image-shuttle" src={image} />
              </div>
              
              <div className="column rp">
                <h1>{title}</h1>
                <div>{description}</div><br></br>
                <Contract address={projectDatas[projectId-1].address}/>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
