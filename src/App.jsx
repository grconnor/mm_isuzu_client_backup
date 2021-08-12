// Library Imports:
import React from "react";
import { Switch, Route } from "react-router-dom";

// Component Imports:
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import Provkor from "./components/Provkor/Provkor";
import ContactBook from "./components/ContactBook";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <>
      <div className="flexbox-content-wrapper">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/kontakt" component={ContactBook} />
          <Route exact path="/provkorning" component={Provkor} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;