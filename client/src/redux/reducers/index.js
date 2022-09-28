import { combineReducers } from "redux";
import { projectsReducer, selectedProjectsReducer } from "./projectsReducer";
const reducers = combineReducers({
  allProjects: projectsReducer,
  project: selectedProjectsReducer,
});
export default reducers;
