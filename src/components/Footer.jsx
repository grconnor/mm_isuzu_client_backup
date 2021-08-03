// Library Imports:
import React from "react";
import { Divider, Grid, Button, Segment } from "semantic-ui-react";

// Component Imports:

// Image Imports:


const Footer = () => {
  return (
    <Segment id="footer">
      <Grid columns={4} relaxed="very">
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Button id="kontakt-footer-btn" href="/kontakt">
            Kontakta Oss
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button id="footer-btn" href="/kontakt">
            Boka
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button id="footer-btn" href="/kontakt">
            Boka
          </Button>
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  );
};

export default Footer;
