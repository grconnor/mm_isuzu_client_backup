// Library Imports:
import "./info.css";
import React from 'react';
import { Container, Image } from "semantic-ui-react";

// Component Imports:

// Image Imports:
import vikt from "../../images/icons/dragvikt.png";
import wheel from "../../images/icons/4x4.png";
import euro from "../../images/icons/euroncap.png";
import adas from "../../images/icons/adas.png";

const info = () => {
  return (
    <Container>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <div className="flexbox-image flexbox-image-1">
            <Image src={vikt} id="" alt="image1" />
          </div>
          <h1 id="clc-heading">Klassledande Kapacitet</h1>
          <p id="clc-para">med 3,5 ton dragvikt och upp till <br /> 1,1 ton lastvikt</p>
        </div>
        <div className="flexbox-item flexbox-item-2">
          <div className="flexbox-image flexbox-image-2">
            <Image src={wheel} id="" alt="img2" />
          </div>
          <h1 id="wdo-heading">Fyrhjulsdrift</h1>
          <p id="wdo-para">med hög- & lågväxel och spårrbar <br /> differential i bakaxeln</p>
        </div>
        <div className="flexbox-item flexbox-item-3">
          <div className="flexbox-image flexbox-image-3">
            <Image src={euro} id="" alt="img3" />
          </div>
          <h1 id="oap-heading">Endast en Pickup</h1>
          <p id="oap-para">klara 5 sjärnor i Euro NCAP <br /> 2020 - Isuzu D-Max</p>
        </div>
        <div className="flexbox-item flexbox-item-4">
          <div className="flexbox-image flexbox-image-4">
            <Image src={adas} id="" alt="img4" />
          </div>
          <h1 id="">Alla Säkerhetssystem</h1>
          <p id="">är standard i nya Isuzu <br /> D-Max</p>
        </div>
      </div>
    </Container>
  )
}

export default info;
