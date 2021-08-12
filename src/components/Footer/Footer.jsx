// Library Imports:
import "./footer.css";
import React from "react";

// Component Imports:

// Image Imports:


const Footer = () => {
  return (
    <>
      <div className="flexbox-footer-outer-container">
        <div className="flexbox-footer-nav-container">
          <div className="flexbox-footer-nav-item flexbox-footer-nav-item-1">
            <a href="/kontakt">Kontakt</a>
          </div>
          <div className="flexbox-footer-nav-item flexbox-footer-nav-item-2">
            <a href="/anlaggningar">Våra anläggningar</a>
          </div>
          <div className="flexbox-footer-nav-item flexbox-footer-nav-item-3">
            <a href="/broschyr">Broschyr</a>
          </div>
        </div>
        <div className="flexbox-footer-footer-container">
          <div className="flexbox-footer-footer-item flexbox-footer-footer-item-1">
            <div className="flexbox-footer-footer-item-heading-container">
              <h2 id="footer-heading-personuppgifter">
                Personuppgifter
              </h2>
            </div>
            <div className="flexbox-footer-footer-item-link-container flexbox-footer-footer-item-link-container-1">
              <a href="https://www.mbil.se/om-oss/integritetspolicy">
                Privacy Notice
              </a>
            </div>
          </div>
          <div className="flexbox-footer-footer-item flexbox-footer-footer-item-2">
            <div className="flexbox-footer-footer-item-heading-container">
              <h2 id="footer-heading-medier">
                Sociala Medier
              </h2>
            </div>
            <div className="flexbox-footer-footer-item-link-container flexbox-footer-footer-item-link-container-2">
              <a href="https://www.youtube.com/channel/UC6JdtUwfUpEnY5G4HO_B9zQ">
                Youtube
              </a>
              <a href="https://www.facebook.com/mbil.se">
                Facebook
              </a>
              <a href="https://www.instagram.com/mobilitymotors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
