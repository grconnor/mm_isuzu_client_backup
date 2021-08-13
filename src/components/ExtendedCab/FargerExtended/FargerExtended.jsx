// Library Imports:
import "./fargerextended.css";
import React from "react";

// Component Imports:

// Image Imports:
import onyxBlack from "../../../images/farger/onyx-black.png";
import redSpinel from "../../../images/farger/red-spinel.png";
import splashWhite from "../../../images/farger/splash-white.png";
import sapphireBlue from "../../../images/farger/sapphire-blue.png";
import obsidianGray from "../../../images/farger/obsidian-grey.png";
import mercurySilver from "../../../images/farger/mercury-silver.png";

const FargerExtended = () => {
  return (
    <>
      <div className="flexbox-fargerextended-main-wrapper">
        <div className="flexbox-fargerextended-heading-container">
          <h2 id="fargerextended-heading">Färger</h2>
          <p id="fargerextended-heading-para">
            Välj mellan en mängd moderna färgalternativ som ser lika bra ut i
            stadsmiljö som i tuff terräng.
          </p>
        </div>
        <div className="flexbox-fargerextended-image-container">
          <div className="flexbox-fargerextended-top-container">
            <div className="flexbox-fargerextended-item flexbox-fargerextended-item-1">
              <img src={splashWhite} id="splash-white" alt="splash-white" />
              <div className="color-name-extended">Splash White</div>
            </div>
            <div className="flexbox-fargerextended-item flexbox-fargerextended-item-3">
              <img
                src={mercurySilver}
                id="mercury-silver"
                alt="mercury-silver"
              />
              <div className="color-name-extended">Mercury Silver</div>
            </div>
            <div className="flexbox-fargerextended-item flexbox-fargerextended-item-4">
              <img src={obsidianGray} id="obsidian-gray" alt="obsidian-gray" />
              <div className="color-name-extended">Obsidian Gray</div>
            </div>
          </div>
          <div className="flexbox-fargerextended-bottom-container">
            <div className="flexbox-fargerextended-item flexbox-fargerextended-item-7">
              <img src={sapphireBlue} id="sapphire-blue" alt="sapphire-blue" />
              <div className="color-name-extended">Sapphire Blue</div>
            </div>
            <div className="flexbox-fargerextended-item flexbox-fargerextended-item-6">
              <img src={redSpinel} id="red-spinel" alt="red-spinel" />
              <div className="color-name-extended">Red Spinel</div>
            </div>
            <div className="flexbox-fargerextended-item flexbox-fargerextended-item-8">
              <img src={onyxBlack} id="onyx-black" alt="onyx-black" />
              <div className="color-name-extended">Onyx Black</div>
            </div>
          </div>
        </div>
        <div className="fargerextended-cover-container"></div>
      </div>
    </>
  );
};

export default FargerExtended;
