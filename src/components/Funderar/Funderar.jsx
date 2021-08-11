// Library Imports:
import "./funderar.css";
import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Icon } from "semantic-ui-react";

// Component Imports:

// Image Imports:
import mp4 from "../../images/double/isuzu_d-max-kopa-pickup-v2.mp4";


const Funderar = () => {
  return (
    <>
      <div className="flexbox-funderar-container">
        <div className="flexbox-funderar-video">
          <video playsInline autoPlay muted loop id="funderar-video">
            <source
              src={mp4}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flexbox-funderar-text-container">
          <div className="flexbox-funderar-heading-container">
            <h1 id="fundera-heading">
              Funderar Du På Att <br />
              Köpa Pickup?
            </h1>
          </div>
          <div className="flexbox-funderar-paragraph-container">
            <p id="funderar-para">
              Då är du nog nyfiken på att veta vad andra tycker om Isuzu. Här har vi <br />
              samlat aktuella tester, filmer och recensioner.
            </p>
          </div>
          <div className="flexbox-funderar-text-button">
            <Button animated href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/">
              <Button.Content visible>Läs Mer Här</Button.Content>
              <Button.Content hidden>
                <Icon name="eye" />
              </Button.Content>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Funderar
