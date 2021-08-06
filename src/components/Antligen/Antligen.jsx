// Library Imports:
import "./antligen.css"
import React from "react";
import { Link } from "react-router-dom"
import { Container, Image, Button, Icon } from "semantic-ui-react";

// Component Imports:

// Image Imports:
import DoubleCab from "../../images/double/isuzu_d-max_double-cab_xrx_valencia-orange_900x500.jpeg";


const Antligen = () => {
  return (
    
    <Container>
      <div className="flexbox-main-container">
        <div className="flexbox-item flexbox-text-container">
          <h1 className="flexbox-text flexbox-text-h1">
            Äntligen!
          </h1>
          <div className="flexbox-text flexbox-text-1">
            Nu är premiären ett faktum. Alla våra återförsäljare har fått Nya D-Max och <br />
            provkörningarna är i full gång. Välkommen du med!
            <br />
            <br />
          </div>
          <div className="flexbox-text-button">
            <Button animated as={Link} to={{ pathname: "/anlaggningar" }}>
              <Button.Content visible>Våra Anläggningar</Button.Content>
              <Button.Content hidden>
                <Icon name="find" />
              </Button.Content>
            </Button>
          </div>
        </div>
        <div className="flexbox-item flexbox-img">
          <Image src={DoubleCab} alt="isuzu-d-max-double-cab" />
        </div>
      </div>
    </Container>
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