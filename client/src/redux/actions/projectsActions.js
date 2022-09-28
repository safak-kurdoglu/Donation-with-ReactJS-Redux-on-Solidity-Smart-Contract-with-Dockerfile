import { ActionTypes } from "../constants/action-types";

export const setProjects = (projects) => {
  return {
    type: ActionTypes.SET_PROJECTS,
    payload: projects,
  };
};

export const selectedProject = (project) => {
  return {
    type: ActionTypes.SELECTED_PROJECT,
    payload: project,
  };
};
export const removeSelectedProject = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PROJECT,
  };
};
