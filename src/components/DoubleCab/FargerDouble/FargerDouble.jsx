// Library Imports:
import "./fargerdouble.css"
import React from "react";

// Component Imports:
import { Image } from "semantic-ui-react";

// Image Imports:
import onyxBlack from "../../../images/farger/onyx-black.png";
import redSpinel from "../../../images/farger/red-spinel.png";
import splashWhite from "../../../images/farger/splash-white.png";
import sapphireBlue from "../../../images/farger/sapphire-blue.png";
import obsidianGray from "../../../images/farger/obsidian-grey.png";
import mercurySilver from "../../../images/farger/mercury-silver.png";
import valenciaOrange from "../../../images/farger/valencia-orange.png";
import silkyWhitePearl from "../../../images/farger/silky-white-pearl.png";


const FargerDouble = () => {
  return (
    <>
      <div className="flexbox-fargerdouble-main-wrapper">
        <div className="flexbox-fargerdouble-inner-wrapper">
          <div className="flexbox-fargerdouble-heading-container">
            <h2 id="fargerdouble-heading">
              Färger
            </h2>
            <p id="fargerdouble-heading-para">
              Välj mellan en mängd moderna färgalternativ som ser lika bra ut i stadsmiljö som i tuff terräng.
            </p>
          </div>
          <div className="flexbox-fargerdouble-image-container">
            <div className="flexbox-fargerdouble-top-container">
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-1">
                <Image src={splashWhite} id="splash-white" alt="splash-white" />
                <div className="color-name-double">
                  Splash White
                </div>
              </div>
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-2">
                <Image src={silkyWhitePearl} id="silky-white-pearl" alt="silky-white-pearl" />
                <div className="color-name-double">
                  Silky White Pearl
                </div>
              </div>
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-3">
                <Image src={mercurySilver} id="mercury-silver" alt="mercury-silver" />
                <div className="color-name-double">
                  Mercury Silver
                </div>
              </div>
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-4">
                <Image src={obsidianGray} id="obsidian-gray" alt="obsidian-gray" />
                <div className="color-name-double">
                  Obsidian Gray
                </div>
              </div>
            </div>
            <div className="flexbox-fargerdouble-bottom-container">
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-5">
                <Image src={valenciaOrange} id="valencia-orange" alt="valencia-orange" />
                <div className="color-name-double">
                  Valencia Orange
                </div>
              </div>
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-6">
                <Image src={redSpinel} id="red-spinel" alt="red-spinel" />
                <div className="color-name-double">
                  Red Spinel
                </div>
              </div>
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-7">
                <Image src={sapphireBlue} id="sapphire-blue" alt="sapphire-blue" />
                <div className="color-name-double">
                  Sapphire Blue
                </div>
              </div>
              <div className="flexbox-fargerdouble-item flexbox-fargerdouble-item-8">
                <Image src={onyxBlack} id="onyx-black" alt="onyx-black" />
                <div className="color-name-double">
                  Onyx Black
                </div>
              </div>
            </div>
          </div>
          <div className="fargerdouble-cover-container"></div>
        </div>
      </div>
    </>
  )
}

export default FargerDouble;
