import React from 'react';
import { Container, Button, Form } from "semantic-ui-react";

const ContactBook = () => {

  return (
    <>
      <h1 id="contact-header">FYLL I DINA UPPGIFTER NEDAN - SÅ KONTAKTAR VI DIG INOM KORT</h1>
      <form onsubmit={submit} id="contactbookform">
        <label for="question">VAD GÄLLER DIN FRÅGA</label>
        <select name="which-question" id="question" form="contactbookform">
          <option value="nybilskop">Nybilsköp</option>
          <option value="provkorning">Provkörning</option>
          <option value="offert">Offert</option>
          <option value="allmanafragor">Allmäna frågor om Mobility Motors</option>
        </select>
        <input id="meddelande" type="text" placeholder="Meddelande">Meddelande</input>

        <h1 id="contact-info">BERÄTTA FÖR OSS VEM DU ÄR</h1>
        <input id="for-efter-namn" type="text" placeholder="John Wayde">För-och efternamn</input>
        <input id="foretag" type="text" placeholder="Mobility Motors">Företag</input>
        <input id="postnummer" type="number" placeholder="141 00" maxLength="5">Postnummer</input>
        <input id="stad" type="text" placeholder="Stockholm">Stad</input>
        <input id="telefon" type="number" placeholder="" maxLength="10"></input>
        <input id="epostadress" type="text" placeholder="example@mail.com">E-postadress</input>
        <input id="registreringsnummer" type="text" placeholder="ABC 123">Registreringsnummer (krävs för frågor gällande din bil)</input>
        <input id="policy" type="checkbox" name="policy1" />
        <label for="policy1">Jag vill ta emot marknadsföring från Mobility Motors Sverige via e-post och telefon/meddelandetjänster. Detta samtycke kan när som helst återkallas. Mer utförlig information finns i vår sekretesspolicy.</label>
        <button id="submit-btn" type="submit">Skicka</button>
      </form>
    </>
  )
}

export default ContactBook
