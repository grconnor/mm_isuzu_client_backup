// Library Imports:
import "./betyder.css";
import React from 'react';
import { Container, Image, Button, Icon } from "semantic-ui-react";

// Component Imports:


// Image Imports:
import kapacitet from "../../images/general/kapacitet.jpeg";
import styrka from "../../images/general/styrka.jpeg";
import sakerhet from "../../images/general/sakerhet.jpeg";
import komfort from "../../images/general/komfort.jpeg";


const Betyder = () => {
  return (
    <Container>
      <div className="flexbox-betyder-outer-container">
        <div className="flexbox-betyder-heading-container">
          <h1 id="betyder-heading">
            Nya D-Max Har Mer Av Allt <br /> Som Betyder Något
          </h1>
        </div>
        <div className="flexbox-betyder-container">
          <div className="flexbox-betyder-item flexbox-betyder-item-1">
            <div className="flexbox-betyder-item-image">
              <Image src={kapacitet} id="betyder-image-kapacitet" alt="kapacitet" />
            </div>
            <h1 id="kapacitet-heading">
              Mer Kapacitet
            </h1>
            <p id="kapacitet-para">
              3,5 ton dragvikj och över 1 ton <br /> lastvikt. Lägger du till 240 mm <br /> markfrigång och ett vadningsdjup <br /> på hela 800 mm är nya D-Max <br /> svårslagen. Nya D-Max har <br /> dessutom begåvats med spårrbar <br /> differential...
            </p>
            <Button animated href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/">
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
          <div className="flexbox-betyder-item flexbox-betyder-item-2">
            <div className="flexbox-betyder-item-image">
              <Image src={styrka} id="betyder-image-styrka" alt="styrka" />
            </div>
            <h1 id="styrka-heading">
              Mer Styrka
            </h1>
            <p id="styrka-para">
              D-Max är byggd med den <br /> kraftigaste ramen på marknaden. <br /> Det gör att den tål tung last och <br /> kan köras i besvärlig terräng, <br /> samtidigt. Även bromsskivor och <br /> trummor har graderats upp. <br /> D-Max är redo för...
            </p>
            <Button animated href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/">
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
          <div className="flexbox-betyder-item flexbox-betyder-item-3">
            <div className="flexbox-betyder-item-image">
              <Image src={sakerhet} id="betyder-image-sakerhet" alt="sakerhet" />
            </div>
            <h1 id="kapacitet-Sakerhet">
              Mer Säkerrhet
            </h1>
            <p id="sakerhet-para">
              Vår vision är att erbjuda den <br /> säkraste pickupen på marknaden. <br /> Autobroms, kollisionsvarnare, adaptiv  farthållare, trafikskyltsavläsning <br /> och filassistans, för att nämna några <br /> av säkerhetssystemen...
            </p>
            <Button animated href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/">
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
          <div className="flexbox-betyder-item flexbox-betyder-item-4">
            <div className="flexbox-betyder-item-image">
              <Image src={komfort} id="betyder-image-komfort" alt="komfort" />
            </div>
            <h1 id="komfort-heading">
              Mer Komfort
            </h1>
            <p id="komfort-para">
              Den nya fjädringen i D-Max ger <br /> mjuk och komfortabel körning <br /> både med full last och när du kör <br /> helt olastat. Personbilskänslan <br /> förstärks ytterligare med 2-zons <br /> klimatanläggning och 9-tums <br /> touch-skärm...
            </p>
            <Button animated href="https://www.isuzusverige.se/kopa-aga/tester-och-omdomen/">
              <Button.Content visible>Läs Mer Och Se Video</Button.Content>
              <Button.Content hidden>
                <Icon name="file text" />
              </Button.Content>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Betyder;