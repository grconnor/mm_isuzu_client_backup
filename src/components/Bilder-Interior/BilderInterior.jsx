// Library Imports:
import "./bilder-interior.css";
import React from "react";

// Component Imports:
import FbImageLibrary from "react-fb-image-grid";

// Image Imports:
import interiorDash from "../../images/interior/dash.jpeg";
import steeringWheel from "../../images/interior/steering-wheel.jpeg";
import dashSide from "../../images/interior/dash-side.jpeg";
import Seat from "../../images/interior/seat.jpeg";
import Backseat from "../../images/interior/backseat.jpeg";
import seatControl from "../../images/interior/seat-control.jpeg";
import Gear from "../../images/interior/gear.jpeg";
import climateControl from "../../images/interior/climate-control.jpeg";
import Carplay from "../../images/interior/carplay.jpeg";
import Roof from "../../images/interior/roof.jpeg";
import Cupholder from "../../images/interior/cupholder.jpeg";
import usbCharging from "../../images/interior/usb-charging.jpeg";

const images = [
  interiorDash,
  steeringWheel,
  dashSide,
  Seat,
  Backseat,
  seatControl,
  Gear,
  climateControl,
  Carplay,
  Roof,
  Cupholder,
  usbCharging
];

const BilderInterior = () => {
  return (
    <>
      <div className="flexbox-bilder-interior-outer-container">
        <div className="flexbox-bilder-interior-heading-container">
          <h2 id="bilder-interior-heading">
            Interiör
          </h2>
          <p id="bilder-interior-para">
            Insidan på D-Max är rymligare än tidigare. Påkostade materialval och enkel instrumentering ger en lyxig känsla. Sätena ger ordentligt stöd och ljudnivån i kupén är oförskämt låg.
          </p>
        </div>
        <div className="flexbox-bilder-interior-image-outer-container">
          <div className="flexbox-bilder-interior-image-inner-container">
            <FbImageLibrary images={images} countFrom={3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BilderInterior;
