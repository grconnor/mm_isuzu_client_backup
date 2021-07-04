import React from "react";
import { Switch, Route } from "react-router-dom";

// Component imports

import NavigationBar from "./components/NavigationBar";
import ContactBook from "./components/ContactBook";
import Main from "./components/Main";
import {  } from "module";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/kontakt-provkorning" component={ContactBook} />
      </Switch>
    </>
  )
}

export default App;