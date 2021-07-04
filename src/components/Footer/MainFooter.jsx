// Library Imports:
import React from "react";

// Components Imports:
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./MainFooterStyles";

// Image Imports:

const MainFooter = () => {
  return (
    <Box id="main-footer">
      <h1 style={{ color: "#9A0123", textAlign: "center", marginTop: "-50px" }}>
        Mobility Motors Isuzu, allt du behöver.
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Personuppgifter</Heading>
            <FooterLink href="#">Privacy Notice</FooterLink>
            <FooterLink href="#">Cookies och villkor</FooterLink>
            <FooterLink href="#">Cookie Preferences</FooterLink>
          </Column>
          <Column>
            <Heading>Om Oss</Heading>
            <FooterLink href="#">Vår Mål</FooterLink>
            <FooterLink href="#">Vår Vision</FooterLink>
            <FooterLink href="#">Vittnesmål</FooterLink>
          </Column>
          <Column>
            <Heading>Länkar</Heading>
            <FooterLink href="#">Pressrum</FooterLink>
            <FooterLink href="#">100% Pickup</FooterLink>
          </Column>
          <Column>
            <Heading>Tjänster</Heading>
            <FooterLink href="#">Begagnad Isuzu</FooterLink>
            <FooterLink href="#">Återvinning</FooterLink>
          </Column>
          <Column>
            <Heading>Sociala Medier</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className=" fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default MainFooter;