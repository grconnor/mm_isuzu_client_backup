// Library Imports:
import "./provkor.css";
import React, { useState } from "react";

// Image Imports:
import SingleCab from "../../images/isuzu_d-max_single-cab_xrs_1000x500.png";
import DoubleCab from "../../images/isuzu_d-max_double-cab_xrx_1000x500.png";
import ExtendedCab from "../../images/isuzu_d-max_extended-cab_xrm_1000x500.png";

const Provkor = () => {
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
      <form onsubmit={handleSubmit} id="contactbookform" name="contactbookform">
        <div id="selection">
          <h1>Välj den bil du vill provköra</h1>
          <ul>
            <li>
              <input type="checkbox" id="car1" />
              <label for="car1" id="checkbox">
                <img src={SingleCab} alt="single-cab" />
              </label>
            </li>
            <li>
              <input type="checkbox" id="car2" />
              <label for="car2" id="checkbox">
                <img src={DoubleCab} alt="double-cab" />
              </label>
            </li>
            <li>
              <input type="checkbox" id="car3" />
              <label for="car3" id="checkbox">
                <img src={ExtendedCab} alt="extended-cab" />
              </label>
            </li>
          </ul>
        </div>

        <h1 id="contact-info">FYLL I DINA KONTAKTUPPGIFTER</h1>
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
        <br />
        <input id="policy" name="policy" type="checkbox" />
        <label for="policy">
          Jag vill ta emot marknadsföring från Mobility Motors Sverige via
          e-post och telefon/meddelandetjänster. Detta samtycke kan när som
          helst återkallas. Mer utförlig information finns i vår
          sekretesspolicy.
        </label>
        <button id="submit-btn" type="submit">
          Skicka
        </button>
        <br />
        <p id="sekretesspolicy">
          De uppgifter du registrerar är konfidentiella och kommer endast att
          föras vidare till bolag inom samma koncern samt anknutna
          återförsäljare för att hantera och följa upp din förfrågan. Alla
          personuppgifter sparas och hanteras i enlighet med gällande datalag
          för personuppgifter. Se vår sekretesspolicy för mer information.
        </p>
      </form>
    </>
  );
};

export default Provkor;