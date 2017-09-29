import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import { Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Header/>
      <hr/>
        <Switch>
          <Route exact path="/" component={Projects}/>
          <Route exact path="/about" component={About}/>
        </Switch>
    </div>
  );
}

export default App;
