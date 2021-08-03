// Library Imports:
import React from "react";

// Component Imports:

// Image Imports:
import DoubleCab from "../images/isuzu_d-max_double-cab_xrx_valencia-orange_900x500.jpeg";


const Finally = () => {
  return (
    <div className="finally-box">
      <img id="finally-img" src={DoubleCab} alt="double-cab" />
      <p id="finally-para">
        <span>ÄNTLIGEN!</span>
        <span>
          Nu är premiären ett faktum. Alla våra återförsäljare har fått Nya
          D-Max och
        </span>
        <span>provkörningarna är i full gång. Välkommen du med!</span>
      </p>
    </div>
  );
};

export default Finally;
