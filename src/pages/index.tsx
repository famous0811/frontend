import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import SignUp from "./SignUp";
import MakeProblem from "./makeProblem";
import MakeWorkbook from "./makeWorkbook";
import Community from "./community";
import Mypage from "./Mypage";
import Viewer from "./problemView";
function Index() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/problem" exact component={MakeProblem} />
      <Route path="/problems" exact component={MakeWorkbook} />
      <Route path="/mypage" exact component={Mypage} />
      <Route path="/community" exact component={Community} />
      <Route path="/view/:id" exact component={Viewer} />
    </Switch>
  );
}

export default Index;
