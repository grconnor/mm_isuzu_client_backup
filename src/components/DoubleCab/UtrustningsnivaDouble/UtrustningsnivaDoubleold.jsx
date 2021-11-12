// Library Imports:
import "./utrustningsnivadouble.css";
import React from "react";

// Component Imports:
import { Image, Button, Icon } from "semantic-ui-react";

// Image Imports:
import xrsIcon from "../../../images/general/xrs_icon.png";
import xrmIcon from "../../../images/general/xrm_icon.png";
import xrlIcon from "../../../images/general/xrl_icon.png";
import xrxIcon from "../../../images/general/xrx_icon.png";

import xrsCar from "../../../images/utrustning/xrs_white.png";
import xrmCar from "../../../images/utrustning/xrm_white.png";
import xrlCar from "../../../images/utrustning/xrl_white.png";
import xrxCar from "../../../images/utrustning/xrx_white.png";


const UtrustningsnivaDouble = () => {
  return (
    <>
      <div className="flexbox-utrustningdouble-outer-container">
        <div className="flexbox-utrustningdouble-heading-container">
          <h2 id="utrustningdouble-heading">
            Utrustningsnivåer
          </h2>
          <p id="utrustningdouble-heading-para">
            Här kan du se vad som bland annat ingår som standard i de olika utrustningsnivåerna. Oavsett om du söker en pickup för bara jobb eller något mer så har vi en modell för dig. Med 4 olika utrustningsnivåer har vi just det du söker.
          </p>
        </div>
        <div className="flexbox-utrustningdouble-top-container">
          <div className="flexbox-utrustningdouble-item flexbox-utrustningdouble-item-1">
            <Image src={xrsIcon} id="xrs-icon" alt="XRS" />
            <Image src={xrsCar} id="xrs-car" alt="XRS-Car" />
            <h4 id="xrs-heading">
              Ett verktyg för all jobb
            </h4>
            <div className="flexbox--utrustningdouble-bullet-list">
              <ul className="utrustningdouble-bullet">
                <li>Dubbel-Din Stereo med Bluetooth</li>
                <li>Manuell växellåda</li>
                <li>ADAS säkerhetssystem</li>
                <li>Teleskopisk ratt</li>
                <li>Automatiskt helljus</li>
              </ul>
            </div>
          </div>
          <div className="flexbox-utrustningdouble-item flexbox-utrustningdouble-item-2">
            <Image src={xrmIcon} id="xrm-icon" alt="XRM" />
            <Image src={xrmCar} id="xrm-car" alt="XRM-Car" />
            <h4 id="xrm-heading">
              Utöver XRS erbjuder XRM:
            </h4>
            <div className="flexbox-utrustningdouble-bullet-list">
              <ul className="utrustningdouble-bullet">
                <li>Parkeringssensorer bak</li>
                <li>18" Alu fälgar</li>
                <li>Stötfångare lackerade i bilens färg</li>
                <li>Diff-spär</li>
                <li>Stolsvärme fram</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flexbox-utrustningdouble-bottom-container">
          <div className="flexbox-utrustningdouble-item flexbox-utrustningdouble-item-3">
            <Image src={xrlIcon} id="xrl-icon" alt="XRL" />
            <Image src={xrlCar} id="xrl-car" alt="XRL-Car" />
            <h4 id="xrl-heading">
              Utöver XRM erbjuder XRL:
            </h4>
            <div className="flexbox-utrustningdouble-bullet-list">
              <ul className="utrustningdouble-bullet">
                <li>7" infotainment med pekskärm, trådlös Apple CarPlay/Andoid Auto</li>
                <li>Elektriskt justerbart förarsäte</li>
                <li>Läderklädsel</li>
                <li>Automatiska BI-LED strålkastare</li>
                <li>Parkeringssensorer fram och bak</li>
                <li>Nyckellös öppning/låsning av bil</li>
                <li>Sidosteg</li>
                <li>Backkamera</li>
              </ul>
            </div>
          </div>
          <div className="flexbox-utrustningdouble-item flexbox-utrustningdouble-item-4">
            <Image src={xrxIcon} id="xrx-icon" alt="XRX" />
            <Image src={xrxCar} id="xrx-car" alt="XRX-Car" />
            <h4 id="xrx-heading">
              Utöver XRL erbjuder XRX:
            </h4>
            <div className="flexbox-utrustning-bullet-list">
              <ul className="utrustningdouble-bullet">
                <li>9" infotainment med pekskärm, trådlös Apple CarPlay/Andoid Auto</li>
                <li>8 högtalare med Live Surround</li>
                <li>Ut- och invändiga detaljer i Gun Metallic</li>
                <li>BI-LED strålkastare med auto level</li>
                <li>Svart innertak</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="utrustningdouble-button">
          <button type="button" id="utrustningdouble-button">
            <a href="https://www.isuzusverige.se/modeller/double-cab/utrustning/">Se Utrustningslista</a>
          </button>
        </div>
      </div>
    </>
  )
}

export default UtrustningsnivaDouble;
