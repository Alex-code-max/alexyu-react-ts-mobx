import React from "react";
import { Route } from "react-router-dom";
// const EvaluationIndex = () => import("../../page/evaluation/index");
import EvaluationIndex from "../../page/evaluation/home";
console.log(EvaluationIndex);
export default function EvaluationRouter() {
  return (
    <div>
      <Route path="/evaluation">
        <EvaluationIndex />
      </Route>
    </div>
  );
}
