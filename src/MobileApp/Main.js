import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Category from "./Category";
import Line from "./UI/Line";
import NewTask from "./NewTask";
const Main = (props) => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(params) => <DashBoard {...params} {...props} />}
        />
        <Route
          exact
          path="/addtask"
          render={(params) => <NewTask {...params} {...props} />}
        />
        <Route
          exact
          path="/:category"
          render={(params) => <Category {...params} {...props} />}
        />
      </Switch>
      <Line />
    </Router>
  );
};

export default Main;
