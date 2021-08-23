// Library Imports:
import "./personlig.css"
import React from "react";

// Component Imports:

// Image Imports:
import Dmax from "../../images/personlig/d-max_double-cab.png";

const Personlig = () => {
  return (
    <>
      <div className="flexbox-personlig-outer-container">
        <div className="flexbox-personlig-heading-container">
          <h3 id="personlig-h3">
            Gör Din D-Max Ännu Bättre Och Mer Personlig
          </h3>
          <div className="flexbox-personlig-paragraph-container">
            <p id="personlig-paragraph">
              Din Isuzu är redan i sitt grundutförande en pickup med en alldeles egen karaktär. Men vill du, kan du sätta din personliga prägel genom ett brett utbud av funktionella tillbehör, såväl invändigt som utvändigt.
            </p>
          </div>
          <div className="flexbox-personlig-button-container">
            <button id="personlig-button" type="button">
              <a href="https://www.isuzusverige.se/tillbehor/">Utforska Tillbehör</a>
            </button>
          </div>
        </div>
        <div className="flexbox-personlig-image-container">
          <img src={Dmax} id="personlig-image" alt="d-max-extra-accessories" />
        </div>
      </div>
    </>
  )
}

export default Personlig;
