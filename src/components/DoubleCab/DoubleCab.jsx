// Library Imports:
import "./doublecab.css";
import React from "react";

// Component Imports:
import Utrymme from "./Utrymme/Utrymme";
import FargerDouble from "./FargerDouble/FargerDouble";
import Personlig2 from "../SingleCab/Personlig2/Personlig2";
import Klimatpaverkan from '../SingleCab/Klimatpaverkan/Klimatpaverkan';
import BetyderExtended from "../ExtendedCab/BetyderExtended/BetyderExtended";
import UtrustningsnivaDouble from "./UtrustningsnivaDouble/UtrustningsnivaDouble";

// Image Imports:

const DoubleCab = () => {
  return (
    <>
      <div className="flexbox-doublecab-main-container">
        <div className="flexbox-doublecab-text-container">
          <h1 id="doublecab-heading1">
            Double Cab
          </h1>
          <button type="button">
            <a href="/provkorning">Testa D-Max single cab idag</a>
          </button>
        </div>
      </div>
      <Utrymme />
      <UtrustningsnivaDouble />
      <FargerDouble />
      <BetyderExtended />
      <Personlig2 />
      <Klimatpaverkan />
    </>
  );
};

export default DoubleCab;
