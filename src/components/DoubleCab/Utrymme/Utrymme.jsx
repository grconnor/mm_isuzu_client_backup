// Library Imports:
import "./utrymme.css";
import React from "react";

// Component Imports:

// Image Imports:
import UtrymmeImage from "../../../images/double-cab/utrymme/double-cab.png";

const Utrymme = () => {
  return (
    <>
      <div className="flexbox-utrymme-outer-container">
        <div className="flexbox-utrymme-inner-container">
          <div className="flexbox-utrymme-text-container">
            <div className="flexbox-utrymme-heading-container">
              <h2 id="utrymme-heading">Utrymme för allt</h2>
              <h5 id="utrymme-heading-2">fr. 269.900 kr exkl. moms</h5>
            </div>
            <div className="flexbox-utrymme-paragraph-container">
              <p id="utrymme-para-1">
                Vår fyrdörrarsmodell med fullstort baksäte där upp till fem
                personer kan färdas bekvämt. Rejäl lastförmåga på det 157 cm
                långa flaket gör vår Double Cab till en mångsidig modell. Double
                Cab har utrymme för allt och kan sammanfattas som två fordon i
                ett.
              </p>
              <p id="utrymme-para-2">
                Double Cab finns med 4 olika utrustningsnivåer, 8 spännande
                färger och har ett brett utbud av funktionella tillbehör, såväl
                invändigt som utvändigt.
              </p>
            </div>
          </div>
          <div className="flexbox-utrymme-image-container">
            <img src={UtrymmeImage} alt="utrymme" id="utrymme-image" />
            <button type="button">
              <a href="http://www.isuzusverige.se/kop-aga/prislista/">Prislista</a>
            </button>
            <button type="button">
              <a href="/anlaggningar">Våra Anläggningar</a>
            </button>
            <button type="button">
              <a href="/provkorning">Boka Provkörning</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utrymme;
