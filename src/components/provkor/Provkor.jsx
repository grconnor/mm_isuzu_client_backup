import React from 'react';
import "./provkor.css"

// Image Imports
import single from "../../images/isuzu_d-max_single-cab_xrs_1000x500.png";
import double from "../../images/isuzu_d-max_double-cab_xrx_1000x500.png";
import extended from "../../images/isuzu_d-max_extended-cab_xrm_1000x500.png";

const Provkor = () => {

  return (
    <>
      <ul>
        <li><input type="checkbox" id="car1" />
          <label for="car1"><img src={single} alt="single cab" /></label>
        </li>
        <li><input type="checkbox" id="car2" />
          <label for="car2"><img src={double} alt="double cab" /></label>
        </li>
        <li><input type="checkbox" id="car3" />
          <label for="car3"><img src={extended} alt="extended cab" /></label>
        </li>
      </ul>
      <form onsubmit={handleSubmit} id="contactbookform" name="contactbookform">
        <label for="question">VAD GÄLLER DIN FRÅGA</label>
        <select id="question" name="question" form="contactbookform">
          <option value="nybilskop">Nybilsköp</option>
          <option value="provkorning">Provkörning</option>
          <option value="offert">Offert</option>
          <option value="allmanafragor">Allmäna frågor om Mobility Motors</option>
        </select>
        <label for="meddelande">Meddelande</label>
        <input id="meddelande" name="meddelande" type="text" placeholder="Meddelande" />

        <h1 id="contact-info">BERÄTTA FÖR OSS VEM DU ÄR</h1>
        <label for="forefternamn">För-och efternamn</label>
        <input id="forefternamn" name="forefternamn" type="text" placeholder="John Wayde" />
        <label for="foretag">Företag</label>
        <input id="foretag" name="foretag" type="text" placeholder="Mobility Motors" />
        <label for="postnummer">Postnummer</label>
        <input id="postnummer" name="postnummer" type="number" placeholder="141 00" maxLength="5" />
        <label for="stad">Stad</label>
        <input id="stad" name="stad" type="text" placeholder="Stockholm" />
        <label for="telefon">Telefon</label>
        <input id="telefon" name="telefon" type="number" placeholder="" maxLength="10" />
        <label for="epostadress">E-postadress</label>
        <input id="epostadress" name="epostadress" type="text" placeholder="example@mail.com" />
        <label for="registreringsnummer">Registreringsnummer (krävs för frågor gällande din bil)</label>
        <input id="registreringsnummer" name="registreringsnummer" type="text" placeholder="ABC 123" />
        <label for="epostadress">E-postadress</label>
        <label for="policy">Jag vill ta emot marknadsföring från Mobility Motors Sverige via e-post och telefon/meddelandetjänster. Detta samtycke kan när som helst återkallas. Mer utförlig information finns i vår sekretesspolicy.</label>
        <input id="policy" name="policy" type="checkbox" />
        <button id="submit-btn" type="submit">Skicka</button>
      </form>
    </>
  )
}

export default Provkor
