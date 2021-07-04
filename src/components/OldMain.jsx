// Library Imports:
import React from "react";
import { Button } from "semantic-ui-react";

const OldMain = () => {
  return (
    <div className="video-hero-wrapper">
      <div className="ec-image-wrapper">
        <div className="video-hero-desktop">
          <video id="background-video" playsInline autoPlay muted loop>
            <source
              src="https://www.isuzusverige.se/globalassets/isuzu/video/hero/isuzu_entreprenad_1280x720_hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="ec-text-wrapper">
        <div className="ec-text-wrapper-inner">
          <div className="content subaru-font-parent">
            <h1 className="subaru-font white-color">
              "NEXT GENERATION PICKUP"
              <br />
              "NYA D-MAX"
            </h1>
            <p>
              <Button id="provkorning-btn" href="/kontakt-provkorning">
                Boka Provkörning
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldMain;