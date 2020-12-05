// import "./packages/react-router-dom/examples/Animation/styles.css";

import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  useLocation
  // useParams
} from "react-router-dom";
import EvaluationRouter from "./evaluationRouter";
export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <Redirect to="/hsl/10/90/50" />
        </Route> */}
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}

function AnimationApp() {
  let location = useLocation();
  console.log(location);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch>
          <EvaluationRouter />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
