// Library Imports:
import React from "react";
import { Switch, Route } from "react-router-dom";

// Component Imports:
import Main from "./components/Main";
import Footer from "./components/Footer";
import Provkor from "./components/provkor/Provkor";
import ContactBook from "./components/ContactBook";
import NavigationBar from "./components/NavigationBar";
import MainFooter from "./components/Footer/MainFooter";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/kontakt" component={ContactBook} />
        <Route exact path="/provkorning" component={Provkor} />
      </Switch>
      {/* <Footer /> */}
      {/* <MainFooter /> */}
    </>
  );
};

export default App;