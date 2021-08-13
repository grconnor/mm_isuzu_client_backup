// Library Imports:
import "./extendedcab.css";
import React from "react";

// Component Imports:
import Kompromiss from "./Kompromiss/Kompromiss";
import Personlig2 from "../SingleCab/Personlig2/Personlig2";
import FargerExtended from "./FargerExtended/FargerExtended";
import BetyderExtended from "./BetyderExtended/BetyderExtended";
import Klimatpaverkan from '../SingleCab/Klimatpaverkan/Klimatpaverkan';
import UtrustningsnivaExtended from "./UtrustningsnivaExtended/UtrustningsnivaExtended";

// Image Imports:


const ExtendedCab = () => {
  return (
    <>
      <div className="flexbox-extendedcab-main-container">
        <div className="flexbox-extendedcab-text-container">
          <h1 id="extendedcab-heading1">
            Extended Cab
          </h1>
          <button type="button">
            Testa D-Max extended cab idag
          </button>
        </div>
      </div>
      <Kompromiss />
      <UtrustningsnivaExtended />
      <FargerExtended />
      <BetyderExtended />
      <Personlig2 />
      <Klimatpaverkan />
    </>
  )
}

export default ExtendedCab;
