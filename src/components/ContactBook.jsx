import React from 'react';
import { Container, Button, Form } from "semantic-ui-react";

const ContactBook = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, question, meddelande, forefternamn, foretag, postnummer, stad, telefon, epostadress, registreringsnummer, policy } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      question: question.value,
      meddelande: meddelande.value,
      forefternamn: forefternamn.value,
      foretag: foretag.value,
      postnummer: postnummer.value,
      stad: stad.value,
      telefon: telefon.value,
      epostadress: epostadress.value,
      registreringsnummer: registreringsnummer.value,
      policy: policy.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

  };

  return (
    <>
      <h1 id="contact-header">FYLL I DINA UPPGIFTER NEDAN - SÅ KONTAKTAR VI DIG INOM KORT</h1>
      <form onsubmit={handleSubmit} id="contactbookform" name="contactbookform">
        <label for="question">VAD GÄLLER DIN FRÅGA</label>
        <select id="question" name="question" form="contactbookform">
          <option value="nybilskop">Nybilsköp</option>
          <option value="provkorning">Provkörning</option>
          <option value="offert">Offert</option>
          <option value="allmanafragor">Allmäna frågor om Mobility Motors</option>
        </select>
        <input id="meddelande" name="meddelande" type="text" placeholder="Meddelande">Meddelande</input>

        <h1 id="contact-info">BERÄTTA FÖR OSS VEM DU ÄR</h1>
        <input id="forefternamn" name="forefternamn" type="text" placeholder="John Wayde">För-och efternamn</input>
        <input id="foretag" name="foretag" type="text" placeholder="Mobility Motors">Företag</input>
        <input id="postnummer" name="postnummer" type="number" placeholder="141 00" maxLength="5">Postnummer</input>
        <input id="stad" name="stad" type="text" placeholder="Stockholm">Stad</input>
        <input id="telefon" name="telefon" type="number" placeholder="" maxLength="10">Telefon</input>
        <input id="epostadress" name="epostadress" type="text" placeholder="example@mail.com">E-postadress</input>
        <input id="registreringsnummer" name="registreringsnummer" type="text" placeholder="ABC 123">Registreringsnummer (krävs för frågor gällande din bil)</input>
        <label for="policy">Jag vill ta emot marknadsföring från Mobility Motors Sverige via e-post och telefon/meddelandetjänster. Detta samtycke kan när som helst återkallas. Mer utförlig information finns i vår sekretesspolicy.</label>
        <input id="policy" name="policy" type="checkbox" />
        <button id="submit-btn" type="submit">Skicka</button>
      </form>
    </>
  )
}

export default ContactBook;
