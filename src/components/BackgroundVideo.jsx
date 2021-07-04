import React from 'react';
import { Button } from "semantic-ui-react";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video playsInline autoPlay muted loop id="bg-video">
        <source src="https://www.isuzusverige.se/globalassets/isuzu/video/hero/isuzu_entreprenad_1280x720_hero.mp4" type="video/mp4" />
      </video>
      <div className="text-overlay">
        <h1>
          "NEXT GENERATION PICKUP"
          <br />
          "NYA D-MAX"
        </h1>
        <p>
          <Button id="provkorning-btn" href="/kontakt-provkorning">Boka Provkörning</Button>
        </p>
      </div>
    </div>
  )
}

export default BackgroundVideo
