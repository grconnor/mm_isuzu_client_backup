// Library Imports:
import React from "react";
import { Switch, Route } from "react-router-dom";

// Component Imports:
import Main from "./components/Main";
import Omoss from "./components/OmOss/OmOss";
import Footer from "./components/Footer/Footer";
import Kontakt from "./components/Kontakt/Kontakt";
import Provkor from "./components/Provkorning/Provkorning";
import Modeller from "./components/Modeller/Modeller";
import NavigationBar from "./components/NavigationBar";
import SingleCab from "./components/SingleCab/SingleCab";
import DoubleCab from "./components/DoubleCab/DoubleCab";
import Anlaggningar from "./components/Anlaggningar/Anlaggningar";
import ExtendedCab from "./components/ExtendedCab/ExtendedCab";

const App = () => {
  return (
    <>
      <div className="flexbox-content-wrapper">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/kontakt" component={Kontakt} />
          <Route exact path="/anlaggningar" component={Anlaggningar} />
          <Route exact path="/modeller" component={Modeller} />
          <Route exact path="/single-cab" component={SingleCab} />
          <Route exact path="/extended-cab" component={ExtendedCab} />
          <Route exact path="/double-cab" component={DoubleCab} />
          <Route exact path="/provkorning" component={Provkor} />
          <Route exact path="/om-oss" component={Omoss} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;