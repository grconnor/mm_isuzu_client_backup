// Library Imports:
import React from 'react';

// CSS Imports:
import "./scrollindicator.css";

const ScrolIndicator = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-indicator">l</div>
      <div className="scroll-indicator"></div>
      <div className="scroll-indicator"></div>
      <span className="scroll-text">Scroll down</span>
    </div>
  )
}

export default ScrolIndicator;