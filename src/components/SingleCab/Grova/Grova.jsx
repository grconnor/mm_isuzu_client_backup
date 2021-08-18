// Library Imports:
import "./grova.css";
import React from "react";

// Component Imports:


// Image Imports:
import GrovaImage from "../../../images/single-cab/grova/single-cab.png";

const Grova = () => {
  return (
    <>
      <div className="flexbox-grova-outer-container">
        <div className="flexbox-grova-inner-container">
          <div className="flexbox-grova-text-container">
            <div className="flexbox-grova-heading-container">
              <h2 id="grova-heading">
                För Grova Jobb
              </h2>
              <h5 id="grova-heading-2">
                fr. 254.900 kr exkl. moms
              </h5>
            </div>
            <div className="flexbox-grova-paragraph-container">
              <p id="grova-para-1">
                Isuzu är en av få pickup-leverantörer som lagerför Single Cab. En modell med maximalt flakutrymme på hela 233 cm. Det självklara valet för dig som behöver ett pålitligt arbetsfordon med utrymme.
              </p>
              <p id="grova-para-2">
                Isuzu Single Cab är 100% funktion och ett bra bevis på allt vi lärt oss efter att ha byggt pickuper, transportbilar och dieselmotorer i över 100 år. Den är ett verktyg som tål att användas till alla slags jobb, på alla underlag, i alla väder, utan att tumma på prestanda och säkerhet.
              </p>
            </div>
          </div>
          <div className="flexbox-grova-image-container">
            <img src={GrovaImage} alt="grova" id="grova-image" />
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
  )
}

export default Grova;
