// Library Imports:
import "./bilder-exterior.css";
import React from "react";

// Component Imports:
import FbImageLibrary from "react-fb-image-grid";

// Image Imports:
import Front from "../../images/exterior/front.jpeg";
import RearViewMirror from "../../images/exterior/rear-view-mirror.jpeg";
import RearLight from "../../images/exterior/rear-light.jpeg";
import Wheels from "../../images/exterior/wheels.jpeg";
import BiLedHeadlamp from "../../images/exterior/bi-led-headlamp.jpeg";
import SideStep from "../../images/exterior/side-step.jpeg";
import Handles from "../../images/exterior/handles.jpeg";
import RearBumperStep from "../../images/exterior/rear-bumper-step.jpeg";

const ExteriorImages = [
  Front,
  RearViewMirror,
  RearLight,
  Wheels,
  BiLedHeadlamp,
  SideStep,
  Handles,
  RearBumperStep
]

const BilderExterior = () => {
  return (
    <>
      <div className="flexbox-bilder-exterior-outer-container">
        <div className="flexbox-bilder-exterior-heading-container">
          <h2 id="">
            Exteriör
          </h2>
          <p id="">
            En pickup väcker uppmärksamhet! Och D-Max lyckas dessutom skilja sig från mängden.
          </p>
        </div>
        <div className="flexbox-bilder-exterior-image-outer-container">
          <div className="flexbox-bilder-exterior-image-inner-container">
            <FbImageLibrary images={ExteriorImages} countFrom={4} />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default BilderExterior;
