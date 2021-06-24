import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Menu, Grid, Button } from "semantic-ui-react";
import mobilityLogo from "../images/mobility_motors_logo.png";
// import maxusLogo from "../images/maxus_logo.png";

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = ({ name }) => {
    setActiveItem(name);
  };
  return (
    <div className="navbar-container">
      <Header as="h1" id="navbar-header">
        <Grid id="navbar-grid">
          <Grid.Row columns={4} id="navbar-row">
            <Grid.Column id="navbar-row-mobility" width={2} textAlign="center">
              <img id="mobility-logo" src={mobilityLogo} alt="Mobility Motors" />
            </Grid.Column>
            {/* <Grid.Column id="navbar-row-motors" width={2} textAlign="center">
              Motors
            </Grid.Column>
            <Grid.Column id="navbar-row-maxus" widht={2} textAlign="center">
              <img id="maxus-logo" src={maxusLogo} alt="Maxus" />
            </Grid.Column> */}
            <Grid.Column id="empty-column" width={4}></Grid.Column>
            <Grid.Column id="navbar-row-slogan" width={4} textAlign="right">
              Hitta din bil idag
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header.Subheader id="navbar-navigation">
          <Menu id="navbar-navigation-menu">
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
              as={Link}
              to={{ pathname: "https://www.izuzusverige.se/tillbehor/" }}
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
              Om oss
            </Menu.Item>
            <Menu.Item
              id="navbar-navigation-menu-provkorning"
              name="provkorning"
              active={activeItem === "provkorning"}
              onClick={handleItemClick}
              as={Link}
              to={{ pathname: "/kontakt-provkorning" }}
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
              to={{ pathname: "/kontakt-provkorning" }}
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
