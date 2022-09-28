import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectListing from "./containers/ProjectListing";
import Header from "./containers/Header";
import "./App.css";
import ProjectDetails from "./containers/ProjectDetails";
import { EthProvider } from "./contract/contexts/EthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <EthProvider>
            <Route path="/" exact component={ProjectListing} />
            <Route path="/project/:projectId" component={ProjectDetails} />
          </EthProvider>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
