import React from 'react'
import { Button } from "semantic-ui-react"

// Image imports
// import maxusEDeliver from ".././images/maxus_edeliver3_hero.jpeg";

// Component imports
import BackgroundVideo from './BackgroundVideo';

const Main = () => {
  return (
    <>
      <BackgroundVideo />
      <div className="scroll-container">
        <div className="scroll-indicator">l</div>
        <div className="scroll-indicator"></div>
        <div className="scroll-indicator"></div>
        <span className="scroll-text">Scroll down</span>
      </div>
    </>
  )
}

export default Main;
