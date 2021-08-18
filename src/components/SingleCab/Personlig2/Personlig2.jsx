// Library Imports:
import "./personlig2.css"
import React from "react";

// Component Imports:

// Image Imports:
import Dmax from "../../../images/personlig/d-max_double-cab.png";

const Personlig2 = () => {
  return (
    <>
      <div className="flexbox-personlig2-outer-container">
        <div className="flexbox-personlig2-text-container">
          <div className="flexbox-personlig2-heading-container">
            <h3 id="personlig2-h3">
              Gör Din D-Max Ännu Bättre Och Mer Personlig
            </h3>
            <div className="flexbox-personlig2-paragraph-container">
              <p id="personlig2-paragraph">
                Din Isuzu är redan i sitt grundutförande en pickup med en alldeles egen karaktär. Men vill du, kan du sätta din personliga prägel genom ett brett utbud av funktionella tillbehör, såväl invändigt som utvändigt.
              </p>
            </div>
            <div className="flexbox-personlig2-button-container">
              <button id="personlig2-button" type="button">
                <a href="https://isuzusverige.se/tillbehor/">Utforska Tillbehör</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flexbox-personlig2-image-container">
          <img src={Dmax} id="personlig2-image" alt="d-max-extra-accessories" />
        </div>
      </div>
    </>
  )
}

export default Personlig2;
