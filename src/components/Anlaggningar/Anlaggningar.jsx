// Library Imports:
import "./anlaggningar.css";
import React from "react";

// Component Imports:

// Image Imports:


const Anlaggningar = () => {
  return (
    <>
      <div className="flexbox-anlaggningar-outer-container">
        <div className="flexbox-anlaggningar-heading-container">
          <h2 id="anlaggningar-heading">
            Våra Anläggningar
          </h2>
        </div>
        <div className="flexbox-anlaggningar-container">
          <div className="flexbox-anlaggningar-item flexbox-anlaggningar-item-1">
            <div className="flexbox-anlaggningar-text-container">
              <div className="flexbox-anlaggningar-branch-container">
                <h3 id="branch-name-1">
                  Mobility Motors Bromma
                </h3>
              </div>
              <address className="flexbox-anlaggningar-address-container">
                <span>
                  Ulvsundavägen 112 BROMMA
                </span>
                <span>
                  168 67 Stockholm
                </span>
                <a href="tel:+46775202525">
                  0775-20 25 25
                </a>
                <a href="mailto:info.nissan@mbil.se">
                  info.nissan@mbil.se
                </a>
                <div className="flexbox-anlaggningar-button-container">
                  <button id="button-branch-1" type="button">
                    Boka Provkörning
                  </button>
                </div>
              </address>
            </div>
          </div>
          <div className="flexbox-anlaggningar-item flexbox-anlaggningar-item-2">
            <div className="flexbox-anlaggningar-text-container">
              <div className="flexbox-anlaggningar-branch-container">
                <h3 id="branch-name-2">
                  Mobility Motors Sätra
                </h3>
              </div>
              <address className="flexbox-anlaggningar-address-container">
                <span>
                  Murmästarvägen 1 SKÄRHOLMEN
                </span>
                <span>
                  127 35 Stockholm
                </span>
                <a href="tel:+46775202525">
                  0775-20 25 25
                </a>
                <a href="mailto:info.nissan@mbil.se">
                  info.nissan@mbil.se
                </a>
                <div className="flexbox-anlaggningar-button-container">
                  <button id="button-branch-1" type="button">
                    Boka Provkörning
                  </button>
                </div>
              </address>
            </div>
          </div>
          <div className="flexbox-anlaggningar-item flexbox-anlaggningar-item-3">
            <div className="flexbox-anlaggningar-text-container">
              <div className="flexbox-anlaggningar-branch-container">
                <h3 id="branch-name-3">
                  Mobility Motors Malmö
                </h3>
              </div>
              <address className="flexbox-anlaggningar-address-container">
                <span>
                  Agnesfridsvägen 190
                </span>
                <span>
                  213 75 Malmö
                </span>
                <a href="tel:+46775202525">
                  0775-20 25 25
                </a>
                <a href="mailto:info.nissan@mbil.se">
                  info.nissan@mbil.se
                </a>
                <div className="flexbox-anlaggningar-button-container">
                  <button id="button-branch-1" type="button">
                    Boka Provkörning
                  </button>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Anlaggningar
