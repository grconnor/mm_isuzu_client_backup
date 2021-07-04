import React from "react";
import { Switch, Route } from "react-router-dom";

// Component imports

import NavigationBar from "./components/NavigationBar";
import ContactBook from "./components/ContactBook";
import Provkor from "./components/provkor/Provkor";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/kontakt" component={ContactBook} />
        <Route exact path="/provkorning" component={Provkor} />
      </Switch>
    </>
  )
}

export default App;