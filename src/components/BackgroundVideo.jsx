// Library Imports:
import React from "react";
import { Button, Image } from "semantic-ui-react";

// Component Imports:
import ScrollIndicator from "./Scroll Indicator/ScrollIndicator";

// Image Imports:
import nyadmax from "../images/double/isuzu-d-max-my20-the-next-generation-pickup-mer-banner-1600x640-v2.jpeg";


const BackgroundVideo = () => {
  return (
    <>
      <div className="video-container">
        {/* <video playsInline autoPlay muted loop id="bg-video">
          <source
            src="https://www.isuzusverige.se/globalassets/isuzu/video/hero/isuzu_entreprenad_1280x720_hero.mp4"
            type="video/mp4"
          />
        </video> */}
        <Image src={nyadmax} alt="nya d-max" id="nyadmax" fluid/>
        <div className="text-overlay">
          {/* <h1>
            "NEXT GENERATION PICKUP"
            <br />
            "NYA D-MAX"
          </h1> */}
          <p>
            <Button id="provkorning-btn" href="/kontakt-provkorning">
              Boka Provkörning
            </Button>
          </p>
        </div>
      </div>
      <ScrollIndicator />
    </>
  );
};

export default BackgroundVideo;
