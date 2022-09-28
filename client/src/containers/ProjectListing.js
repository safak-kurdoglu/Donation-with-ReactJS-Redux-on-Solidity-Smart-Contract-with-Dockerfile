import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProjects } from "../redux/actions/projectsActions";
import ProjectComponent from "./ProjectComponent";
import projectDatas from "../projects.json";
import Contract from "../contract/components/APIFinish";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const fetchProjects = async () => {
    dispatch(setProjects(projectDatas));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <div className="ui grid container">
        <ProjectComponent />
      </div>
      <div>
        <Contract/>
      </div>
    </div>
  );
};

export default ProjectPage;
