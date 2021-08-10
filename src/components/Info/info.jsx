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

const Info = () => {
  return (
    <>
      <div className="flexbox-info-container">
        <div className="flexbox-info-item flexbox-item-1" id="">
          <div className="flexbox-info-image flexbox-info-image-1">
            <Image src={vikt} id="" alt="vikt" />
          </div>
          <h1 id="clc-heading">Klassledande Kapacitet</h1>
          <p id="clc-para">med 3,5 ton dragvikt och upp till <br /> 1,1 ton lastvikt</p>
        </div>
        <div className="flexbox-info-item flexbox-info-item-2" id="">
          <div className="flexbox-info-image flexbox-info-image-2">
            <Image src={wheel} id="" alt="4x4" />
          </div>
          <h1 id="wdo-heading">Fyrhjulsdrift</h1>
          <p id="wdo-para">med hög- & lågväxel och spårrbar <br /> differential i bakaxeln</p>
        </div>
        <div className="flexbox-info-item flexbox-info-item-3" id="">
          <div className="flexbox-info-image flexbox-info-image-3">
            <Image src={euro} id="" alt="euro" />
          </div>
          <h1 id="oap-heading">Endast en Pickup</h1>
          <p id="oap-para">klara 5 sjärnor i Euro NCAP <br /> 2020 - Isuzu D-Max</p>
        </div>
        <div className="flexbox-info-item flexbox-info-item-4" id="">
          <div className="flexbox-info-image flexbox-info-image-4">
            <Image src={adas} id="" alt="adas" />
          </div>
          <h1 id="">Alla Säkerhetssystem</h1>
          <p id="">är standard i nya Isuzu <br /> D-Max</p>
        </div>
      </div>
    </>
  )
}

export default Info;
