// Library Imports:
import "./antligen.css"
import React from "react";
import { Link } from "react-router-dom"
import { Image, Button, Icon } from "semantic-ui-react";

// Component Imports:

// Image Imports:
import DoubleCab from "../../images/double/isuzu_d-max_double-cab_xrx_valencia-orange_900x500.jpeg";


const Antligen = () => {
  return (
    <>
      <div className="flexbox-antligen-container">
        <div className="flexbox-antligen-text-container">
          <h1 className="flexbox-atligen-text-h1">
            Äntligen!
          </h1>
          <div className="flexbox-antligen-text-1">
            <p id="atligen-para">
              Nu är premiären ett faktum. Alla våra återförsäljare har fått Nya D-Max och <br />
              provkörningarna är i full gång. Välkommen du med!
              <br />
              <br />
            </p>
          </div>
          <div className="flexbox-antligen-text-button">
            <button type="button"><a href="/anlaggningar">Våra Anläggningar</a></button>
          </div>
        </div>
        <div className="flexbox-antligen-img">
          <img src={DoubleCab} alt="isuzu-d-max-double-cab" />
        </div>
      </div>
    </>
  );
};

export default Antligen;

// <div className="finally-box">
//   <img id="finally-img" src={DoubleCab} alt="double-cab" />
//   <p id="finally-para">
//     <span>ÄNTLIGEN!</span>
//     <span>
//       Nu är premiären ett faktum. Alla våra återförsäljare har fått Nya
//       D-Max och
//     </span>
//     <span>provkörningarna är i full gång. Välkommen du med!</span>
//   </p>
// </div>


// <p style={{float: "right"}}><Image src={DoubleCab} id="finally-img" alt="double-cab" /></p>
// <p>
// <span>ÄNTIGEN!</span>
// <span>
// Nu är premiären ett faktum. Alla våra återförsäljare har fått Nya D-Max och
// </span>
// <span>provkörningarna är i full gång. Välkommen du med!</span>
// </p>