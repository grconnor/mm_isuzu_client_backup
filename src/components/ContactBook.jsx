// Switch to responsive.

// Library Imports:
import React, { useState } from "react";

// Component Imports:

// Image Imports:

const ContactBook = () => {
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {
      name,
      email,
      message,
      question,
      meddelande,
      forefternamn,
      foretag,
      postnummer,
      stad,
      telefon,
      epostadress,
      registreringsnummer,
      policy,
    } = e.target.elements;
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
      <h1 id="contact-header">
        FYLL I DINA UPPGIFTER NEDAN - SÅ KONTAKTAR VI DIG INOM KORT
      </h1>
      <form onsubmit={handleSubmit} id="contactbookform" name="contactbookform">
        <label for="question">VAD GÄLLER DIN FRÅGA</label>
        <select id="question" name="question" form="contactbookform">
          <option value="nybilskop">Nybilsköp</option>
          <option value="provkorning">Provkörning</option>
          <option value="offert">Offert</option>
          <option value="allmanafragor">
            Allmäna frågor om Mobility Motors
          </option>
        </select>
        <label for="meddelande">Meddelande</label>
        <input
          id="meddelande"
          name="meddelande"
          type="text"
          placeholder="Meddelande"
        />
        
        <h1 id="contact-info">BERÄTTA FÖR OSS VEM DU ÄR</h1>
        <label for="forefternamn">För-och efternamn</label>
        <input
          id="forefternamn"
          name="forefternamn"
          type="text"
          placeholder="John Wayde"
        />
        <label for="foretag">Företag</label>
        <input
          id="foretag"
          name="foretag"
          type="text"
          placeholder="Mobility Motors"
        />
        <label for="postnummer">Postnummer</label>
        <input
          id="postnummer"
          name="postnummer"
          type="number"
          placeholder="141 00"
          onInput={(e) => (e.target.value = e.target.value.slice(0, 5))}
        />
        <label for="stad">Stad</label>
        <input id="stad" name="stad" type="text" placeholder="Stockholm" />
        <label for="telefon">Telefon</label>
        <input
          id="telefon"
          name="telefon"
          type="number"
          placeholder="076 520 4789"
          onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
        />
        <label for="epostadress">E-postadress</label>
        <input
          id="epostadress"
          name="epostadress"
          type="text"
          placeholder="example@mail.com"
        />
        <label for="registreringsnummer">
          Registreringsnummer (krävs för frågor gällande din bil)
        </label>
        <br />
        <br />
        <input
          id="registreringsnummer"
          name="registreringsnummer"
          type="text"
          placeholder="ABC 123"
        />
        <br />
        <br />
        <label for="policy">
          Jag vill ta emot marknadsföring från Mobility Motors Sverige via
          e-post och telefon/meddelandetjänster. Detta samtycke kan när som
          helst återkallas. Mer utförlig information finns i vår
          sekretesspolicy.
        </label>
        <input id="policy" name="policy" type="checkbox" />
        <button id="submit-btn" type="submit">
          Skicka frågan
        </button>
      </form>
    </>
  );
};

export default ContactBook;
