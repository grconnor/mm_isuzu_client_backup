// Library Imports:
import "./kompromiss.css";
import React from "react";

// Component Imports:

// Image Imports:
import KompromissImage from "../../../images/extended-cab/kompromiss/extended-cab.png";

const Kompromiss = () => {
  return (
    <>
      <div className="flexbox-kompromiss-outer-container">
        <div className="flexbox-kompromiss-inner-container">
          <div className="flexbox-kompromiss-text-container">
            <div className="flexbox-kompromiss-heading-container">
              <h2 id="kompromiss-heading">En smart kompromiss</h2>
              <h5 id="kompromiss-heading-2">fr. 274.900 kr exkl. moms</h5>
            </div>
            <div className="flexbox-kompromiss-paragraph-container">
              <p id="kompromiss-para-1">
                Extended Cab kännetecknas av en förlängd hytt, säten för två
                personer fram samt en sittbänk bak för ytterligare två personer.
                Bänken kan enkelt fällas och användas som extra
                förvaringsutrymme. Dessutom ett extra rymligt flak på 180 cm.
              </p>
              <p id="kompromiss-para-2">
                Isuzu Extended Cab finns i utrustningsnivå XRM, 6 spännande
                färger och har ett brett utbud av funktionella tillbehör, såväl
                invändigt som utvändigt.
              </p>
            </div>
          </div>
          <div className="flexbox-kompromiss-image-container">
            <img src={KompromissImage} alt="kompromiss" id="kompromiss-image" />
            <button
              type="button"
              href="http://www.isuzusverige.se/kop-aga/prislista/"
            >
              Prislista
            </button>
            <button type="button" href="/anlaggningar">
              Våra Anläggningar
            </button>
            <button type="button" href="/provkorning">
              Boka Provkörning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kompromiss;
