// Library Imports:
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Header, Menu, Grid, Dropdown } from "semantic-ui-react";

// Component Imports:

// Image Imports:
import isuzuLogo from "../images/logos/isuzu_logo.png";
import mobilityLogo from "../images/logos/mobility_motors_logo.png";

const MenuColor = ["white"];

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = ({ name }) => {
    setActiveItem(name);
  };
  return (
    <div className="navbar-container">
      <Header id="navbar-header">
        <Grid id="navbar-grid">
          <Grid.Row columns={4} id="navbar-row">
            <Grid.Column
              id="navbar-row-mobility"
              width={2}
              textAlign="center"
              href="/"
            >
              <img
                id="mobility-logo"
                src={mobilityLogo}
                alt="Mobility Motors"
              />
            </Grid.Column>
            <Grid.Column
              id="navbar-row-isuzu"
              width={2}
              textAlign="center"
              href="/"
            >
              <img id="isuzu-logo" src={isuzuLogo} alt="Isuzu" height="25px" />
            </Grid.Column>
            <Grid.Column id="empty-column" width={4}></Grid.Column>
            <Grid.Column id="navbar-row-slogan" width={4} textAlign="right">
              Hitta din bil idag!
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header.Subheader id="navbar-navigation">
          <Menu id="navbar-navigation-menu" color={MenuColor}>
            <Menu.Item></Menu.Item>
            <Menu.Item
              id="navbar-navigation-menu-modeller"
              name="modeller"
              active={activeItem === "modeller"}
              onClick={handleItemClick}
              as={Link}
              to={{ pathname: "/modeller" }}
            >
              Modeller
            </Menu.Item>
            <Menu.Item
              id="navbar-navigation-menu-tillbehor"
              name="tillbehor"
              active={activeItem === "tillbehor"}
              onClick={handleItemClick}
              href="https://isuzusverige.se/tillbehor/"
            >
              Tillbehör
            </Menu.Item>
            <Menu.Item
              id="navbar-navigation-menu-om-oss"
              name="om-oss"
              active={activeItem === "om-oss"}
              onClick={handleItemClick}
              as={Link}
              to={{ pathname: "/om-oss" }}
            >
              Om Oss
            </Menu.Item>
            <Menu.Item
              id="navbar-navigation-menu-provkorning"
              name="provkorning"
              active={activeItem === "provkorning"}
              onClick={handleItemClick}
              as={Link}
              to={{ pathname: "/provkorning" }}
            >
              Boka Provkörning
            </Menu.Item>
            <Menu.Item
              id="navbar-navigation-menu-anlaggningar"
              name="anlaggningar"
              active={activeItem === "anlaggningar"}
              onClick={handleItemClick}
              as={Link}
              to={{ pathname: "/anlaggningar" }}
            >
              Våra Anläggningar
            </Menu.Item>
            <Menu.Item
              id="navbar-navigation-menu-kontakt"
              name="kontakt"
              active={activeItem === "kontakt"}
              onClick={handleItemClick}
              as={Link}
              to={{ pathname: "/kontakt" }}
            >
              Kontakt
            </Menu.Item>
          </Menu>
        </Header.Subheader>
      </Header>
    </div>
  );
};

export default NavigationBar;

{/* <Menu vertical>
  <Dropdown item simple text="NYA D-MAX">
    <Dropdown.Item>Lär dig allt om nya D-Max</Dropdown.Item>
    <Dropdown.Item>Mer Kapacitet</Dropdown.Item>
    <Dropdown.Item>Mer Styrka</Dropdown.Item>
    <Dropdown.Item>Mer Komfort</Dropdown.Item>
    <Dropdown.Item>Mer Säkerhet</Dropdown.Item>
    <Dropdown.Item>Tester och Omdömen</Dropdown.Item>
    <Dropdown.Item>Broschyr</Dropdown.Item>
  </Dropdown>
</Menu>
<Menu vertical>
  <Dropdown item simple text="Finans & Försäkring">
    <Dropdown.Item>Prislista</Dropdown.Item>
    <Dropdown.Item>Offertförfrågan</Dropdown.Item>
    <Dropdown.Item>Begagnat</Dropdown.Item>
    <Dropdown.Item>Isuzu Försäkring</Dropdown.Item>
    <Dropdown.Item>Serviceavtal</Dropdown.Item>
    <Dropdown.Item>Garantier</Dropdown.Item>
    <Dropdown.Item>Återvinning</Dropdown.Item>
    <Dropdown.Item>HVO100</Dropdown.Item>‏‏‎‎‏‏‎‏‏
  </Dropdown>
</Menu> */}