import { ActionTypes } from "../constants/action-types";
const intialState = {
  projects: [],
};

export const projectsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROJECTS:
      return { ...state, projects: payload };
    default:
      return state;
  }
};

export const selectedProjectsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PROJECT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PROJECT:
      return {};
    default:
      return state;
  }
};
