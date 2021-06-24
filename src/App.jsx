import React from "react";
import { Switch, Route } from "react-router-dom";

// Components

import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import {  } from "module";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  )
}

export default App;