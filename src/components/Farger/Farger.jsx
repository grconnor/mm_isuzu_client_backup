// Library Imports:
import "./farger.css";
import React from "react";
import { Image } from "semantic-ui-react";

// Component Imports:

// Image Imports:
import onyxBlack from "../../images/farger/onyx-black.png";
import redSpinel from "../../images/farger/red-spinel.png";
import splashWhite from "../../images/farger/splash-white.png";
import sapphireBlue from "../../images/farger/sapphire-blue.png";
import obsidianGray from "../../images/farger/obsidian-grey.png";
import mercurySilver from "../../images/farger/mercury-silver.png";
import valenciaOrange from "../../images/farger/valencia-orange.png";
import silkyWhitePearl from "../../images/farger/silky-white-pearl.png";


const Farger = () => {
  return (
    <>
      <div className="flexbox-farger-main-wrapper">
        <div className="flexbox-farger-heading-container">
          <h2 id="farger-heading">
            Färger
          </h2>
          <p id="farger-heading-para">
            Välj mellan en mängd moderna färgalternativ som ser lika bra ut i stadsmiljö som i tuff terräng.
          </p>
        </div>
        <div className="flexbox-farger-image-container">
          <div className="flexbox-farger-top-container">
            <div className="flexbox-farger-item flexbox-farger-item-1">
              <Image src={splashWhite} id="splash-white" alt="splash-white" />
              <div className="color-name">
                Splash White
              </div>
            </div>
            <div className="flexbox-farger-item flexbox-farger-item-2">
              <Image src={silkyWhitePearl} id="silky-white-pearl" alt="silky-white-pearl" />
              <div className="color-name">
                Silky White Pearl
              </div>
            </div>
            <div className="flexbox-farger-item flexbox-farger-item-3">
              <Image src={mercurySilver} id="mercury-silver" alt="mercury-silver" />
              <div className="color-name">
                Mercury Silver
              </div>
            </div>
            <div className="flexbox-farger-item flexbox-farger-item-4">
              <Image src={obsidianGray} id="obsidian-gray" alt="obsidian-gray" />
              <div className="color-name">
                Obsidian Gray
              </div>
            </div>
          </div>
          <div className="flexbox-farger-bottom-container">
            <div className="flexbox-farger-item flexbox-farger-item-5">
              <Image src={valenciaOrange} id="valencia-orange" alt="valencia-orange" />
              <div className="color-name">
                Valencia Orange
              </div>
            </div>
            <div className="flexbox-farger-item flexbox-farger-item-6">
              <Image src={redSpinel} id="red-spinel" alt="red-spinel" />
              <div className="color-name">
                Red Spinel
              </div>
            </div>
            <div className="flexbox-farger-item flexbox-farger-item-7">
              <Image src={sapphireBlue} id="sapphire-blue" alt="sapphire-blue" />
              <div className="color-name">
                Sapphire Blue
              </div>
            </div>
            <div className="flexbox-farger-item flexbox-farger-item-8">
              <Image src={onyxBlack} id="onyx-black" alt="onyx-black" />
              <div className="color-name">
                Onyx Black
              </div>
            </div>
          </div>
        </div>
        <div className="farger-cover-container"></div>
      </div>
    </>
  )};

export default Farger;

