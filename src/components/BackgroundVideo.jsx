// Library Imports:
import React from "react";
import { Button, Image, Icon } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

// Component Imports:
import ScrollIndicator from "./Scroll Indicator/ScrollIndicator";

// Image Imports:
import nyadmax from "../images/double/isuzu-d-max-my20-the-next-generation-pickup-mer-banner-1600x640-v2.jpeg";


const BackgroundVideo = () => {
  const isExtraSmallDevice = useMediaQuery({ query: "(max-width: 767px)" })
  const isSmallDevice = useMediaQuery({ query: "(min-width: 600px)" })
  const isMediumDevice = useMediaQuery({ query: "(min-width: 768px)" })
  const isLargeDevice = useMediaQuery({ query: "(min-width: 992px)" })
  const isExtraLargeDevice = useMediaQuery({ query: "(min-width: 1200px)" })
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1175px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <>
      <div className="video-container">
        {/* <video playsInline autoPlay muted loop id="bg-video">
          <source
            src="https://www.isuzusverige.se/globalassets/isuzu/video/hero/isuzu_entreprenad_1280x720_hero.mp4"
            type="video/mp4"
          />
        </video> */}
        <img src={nyadmax} alt="nya-d-max" id="nyadmax" fluid/>
        <div className="text-overlay">
          {isMediumDevice && (
            <button type="button" id="text-overlay-provkorning-button">
              <a href="/provkorning">Boka Provkörning</a>
            </button>
          )}
          {isExtraSmallDevice && (
            <button type="button" id="text-overlay-provkorning-button">
              <a href="/provkorning">Boka</a>
            </button>
          )}
        </div>
      </div>
      {/* {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You  have a huge screen</p>} */}
      {isMediumDevice && (
        <ScrollIndicator />
      )}
    </>
  );
};

export default BackgroundVideo;
