// Library Imports:
import "./singlecab.css";
import React from "react";

// Component Imports:
import Grova from "./Grova/Grova";
import Farger2 from "./Farger2/Farger2";
import Betyder2 from "./Betyder2/Betyder2";
import Personlig2 from "./Personlig2/Personlig2";
import Klimatpaverkan from "./Klimatpaverkan/Klimatpaverkan";
import Utrustningsniva from "./Utrustningsniva/Utrustningsniva";

// Image Imports:


const SingleCab = () => {
  return (
    <>
      <div className="flexbox-singlecab-main-container">
        <div className="flexbox-singlecab-text-container">
          <h1 id="singlecab-heading1">
            Single Cab
          </h1>
          <button type="button">
            <a href="/provkorning">Testa D-Max single cab idag</a>
          </button>
        </div>
      </div>
      <Grova />
      <Utrustningsniva />
      <Farger2 />
      <Betyder2 />
      <Personlig2 />
      <Klimatpaverkan />
    </>
  )
}

export default SingleCab;
