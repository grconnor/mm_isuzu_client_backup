// Library Imports:
import React from 'react';
import "./hyttstorlekar.css";
import { Container, Image } from 'semantic-ui-react';

// Component Imports:

//Image Imports:
import double from "../../images/double/double.png";
import extended from "../../images/extended/extended.png";
import single from "../../images/single/single.png";

import all from "../../images/general/all.png";
import xrm from "../../images/general/xrm.png";
import xrs from "../../images/general/xrs.png";

import twosixnine from "../../images/general/269.png";
import twosevenfour from "../../images/general/274.png";
import twofivefour from "../../images/general/254.png";


const Hyttstorlekar = () => {
  return (
    <Container>
      <div className="flexbox-hyttstorlekar-outer-container">
        <div className="flexbox-hyttstorlekar-heading-container">
          <h1 id="hyttstorlekar-heading">
            Hyttstorlekar
          </h1>
          <p id="hyttstorlekar-para">
            Du vet vad som krävs och därför finns våra pickuper i tre storlekar – Single Cab, Extended Cab och Double Cab. <br /> Oavsett vilken hyttstorlek du väljer, får du samma stryktåliga och driftsäkra pickup.
          </p>
        </div>
        <div className="flexbox-hyttstorlekar-container">
          <div className="flexbox-hyttstorlekar-item flexbox-hyttstorlekar-item-1">
            <h3 id="hyttstorlekar-item-1-h3">
              Double Cab
            </h3>
            <Image src={double} id="hyttstorlekar-image-double" alt="double-cab" />
            <h4 id="hyttstorlekar-item-1-h4">
              Utrymme För Allt
            </h4>
            <p id="hyttstorlekar-item-1-para">
              Vår fyrdörrarsmodell med fullstort baksäte där upp till fem personer kan färdas bekvämt. Rejäl lastförmåga på det 157 cm långa flaket gör vår Double Cab till en mångsidig modell. Double Cab kan sammanfattas som två fordon i ett och har utrymme för allt.
            </p>
            <h4 id="hyttstorlekar-item-1-h4-2">
              Utrustningsnivåer
            </h4>
            <Image src={all} id="hyttstorlekar-utrustning-1" alt="utrustningsnivar" />
            <Image src={twosixnine} id="hyttstorlekar-price-1" alt="price-1" />
          </div>
          <div className="flexbox-hyttstorlekar-item flexbox-hyttstorlekar-item-2">
            <h3 id="hyttstorlekar-item-2-h3">
              Extended Cab
            </h3>
            <Image src={extended} id="hyttstorlekar-image-extended" alt="extended-cab" />
            <h4 id="hyttstorlekar-item-2-h4">
              En Smart Kompromiss
            </h4>
            <p id="hyttstorlekar-item-2-para">
              Extended Cab kännetecknas av en förlängd hytt, säten för två personer fram samt en sittbänk bak för ytterligare två personer. Bänken kan enkelt fällas och användas som extra förvaringsutrymme. Dessutom ett extra rymligt flak på 180 cm.
            </p>
            <h4 id="hyttstorlekar-item-2-h4-2">
              Utrustningsnivå
            </h4>
            <Image src={xrm} id="hyttstorlekar-utrustning-2" alt="utrustningsnivar" />
            <Image src={twosevenfour} id="hyttstorlekar-price-2" alt="price-2" />
          </div>
          <div className="flexbox-hyttstorlekar-item flexbox-hyttstorlekar-item-3">
            <h3 id="hyttstorlekar-item-3-h3">
              Single Cab
            </h3>
            <Image src={single} id="hyttstorlekar-image-single" alt="single-cab" />
            <h4 id="hyttstorlekar-item-3-h4">
              Hundra Procent Funktion
            </h4>
            <p id="hyttstorlek-item-3-para">
              Isuzu är en av få pickup-leverantörer som lagerför Single Cab. En modell med maximalt flakutrymme på hela 233 cm. Det självklara valet för dig som behöver ett pålitligt arbetsfordon med utrymme. Isuzu Single Cab är 100% funktion för grova jobb.
            </p>
            <h4 id="hyttstorlekar-item-3-h4-2">
              Utrustningsnivå
            </h4>
            <Image src={xrs} id="hyttstorlekar-utrustning-3" alt="utrustningsnivar" />
            <Image src={twofivefour} id="hyttstorlekar-price-3" alt="price-3" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hyttstorlekar;
