import React from 'react';
import { Button } from "semantic-ui-react";

const BackgroundVideo = () => {
  return (
    <div id="video-container">
      <video playsInline autoPlay muted loop id="bg-video">
        <source src="https://www.isuzusverige.se/globalassets/isuzu/video/hero/isuzu_entreprenad_1280x720_hero.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo
