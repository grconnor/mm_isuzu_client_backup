// Library Imports:
import React from "react";
import { Switch, Route } from "react-router-dom";

// Component Imports:
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import Provkor from "./components/Provkor/Provkor";
import ContactBook from "./components/ContactBook";
import Modeller from "./components/Modeller/Modeller";
import NavigationBar from "./components/NavigationBar";
import Anlaggningar from "./components/Anlaggningar/Anlaggningar";

const App = () => {
  return (
    <>
      <div className="flexbox-content-wrapper">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/kontakt" component={ContactBook} />
          <Route exact path="/provkorning" component={Provkor} />
          <Route exact path="/anlaggningar" component={Anlaggningar} />
          <Route exact path="/modeller" component={Modeller} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;