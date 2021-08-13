// Library Imports:
import "./betyderextended.css";
import React from "react";

// Component Imports:
import { Button, Icon} from "semantic-ui-react";

// Image Imports:
import kapacitet from "../../../images/general/kapacitet.jpeg";
import styrka from "../../../images/general/styrka.jpeg";
import sakerhet from "../../../images/general/sakerhet.jpeg";
import komfort from "../../../images/general/komfort.jpeg";


const BetyderExtended = () => {
  return (
    <>
      <div className="flexbox-betyderextended-outer-container">
        <div className="flexbox-betyderextended-heading-container">
          <h1 id="betyderextended-heading">
            Mer Av Allt Som Betyder Något
          </h1>
        </div>
        <div className="flexbox-betyderextended-container">
          <div className="flexbox-betyderextended-item flexbox-betyderextended-item-1">
            <div className="flexbox-betyderextended-item-image">
              <img
                src={kapacitet}
                id="betyderextended-image-kapacitet"
                alt="kapacitet"
              />
            </div>
            <h1 id="betyderextended-kapacitet-heading">Mer Kapacitet</h1>
            <p id="betyderextended-kapacitet-para">
              3,5 ton dragvikj och över 1 ton lastvikt. Lägger du till 240 mm
              markfrigång och ett vadningsdjup på hela 800 mm är nya D-Max
              svårslagen. Nya D-Max har dessutom begåvats med spårrbar
              differential...
            </p>
            <Button
              animated
              href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/"
            >
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
          <div className="flexbox-betyderextended-item flexbox-betyderextended-item-2">
            <div className="flexbox-betyderextended-item-image">
              <img src={styrka} id="betyderextended-image-styrka" alt="styrka" />
            </div>
            <h1 id="betyder2-styrka-heading">Mer Styrka</h1>
            <p id="betyder2-styrka-para">
              D-Max är byggd med den kraftigaste ramen på marknaden. Det gör att
              den tål tung last och kan köras i besvärlig terräng, samtidigt.
              Även bromsskivor och trummor har graderats upp. D-Max är redo
              för...
            </p>
            <Button
              animated
              href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/"
            >
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>extended
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
          <div className="flexbox-betyderextended-item flexbox-betyderextended-item-3">
            <div className="flexbox-betyderextended-item-image">
              <img
                src={sakerhet}
                id="betyderextended-image-sakerhet"
                alt="sakerhet"
              />
            </div>
            <h1 id="betyderextended-kapacitet-Sakerhet">Mer Säkerrhet</h1>
            <p id="betyderextended-sakerhet-para">
              Vår vision är att erbjuda den säkraste pickupen på marknaden.
              Autobroms, kollisionsvarnare, adaptiv farthållare,
              trafikskyltsavläsning och filassistans, för att nämna några av
              säkerhetssystemen...
            </p>
            <Button
              animated
              href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/"
            >
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
          <div className="flexbox-betyderextended-item flexbox-betyderextended-item-4">
            <div className="flexbox-betyderextended-item-image">
              <img src={komfort} id="betyderextended-image-komfort" alt="komfort" />
            </div>
            <h1 id="betyderextended-komfort-heading">Mer Komfort</h1>
            <p id="betyderextended-komfort-para">
              Den nya fjädringen i D-Max ger mjuk och komfortabel körning både
              med full last och när du kör helt olastat. Personbilskänslan
              förstärks ytterligare med 2-zons klimatanläggning och 9-tums
              touch-skärm...
            </p>
            <Button
              animated
              href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/"
            >
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetyderExtended;
