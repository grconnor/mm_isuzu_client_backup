// Library Imports:
import React from "react";
import { Button } from "semantic-ui-react";

// Component Imports:
import ScrollIndicator from "./Scroll Indicator/ScrollIndicator";

// Image Imports:


const BackgroundVideo = () => {
  return (
    <>
      <div className="video-container">
        <video playsInline autoPlay muted loop id="bg-video">
          <source
            src="https://www.isuzusverige.se/globalassets/isuzu/video/hero/isuzu_entreprenad_1280x720_hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="text-overlay">
          <h1>
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
      <ScrollIndicator />
      {/* <div className="scroll-container">
      <div className="scroll-indicator">l</div>
      <div className="scroll-indicator"></div>
      <div className="scroll-indicator"></div>
      <span className="scroll-text">Scroll down</span> */}
    </>
  );
};

export default BackgroundVideo;