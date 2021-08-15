// Library Imports:
import "./kontakt.css";
import React, { useState } from "react";

// Component Imports:

// Image Imports:
import SingleCab from "../../images/single/isuzu_d-max_single-cab_xrs_1000x500.png";
import DoubleCab from "../../images/double/isuzu_d-max_double-cab_xrx_1000x500.png";
import ExtendedCab from "../../images/extended/isuzu_d-max_extended-cab_xrm_1000x500.png";

const hi = 1;

const Kontakt = () => {
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
      <div className="flexbox-kontakt-main-container">
        <div className="flexbox-kontakt-image-container">
          <div className="flexbox-kontakt-image-text-container">
            <h1 id="kontakt-heading1">Kontakt</h1>
          </div>
        </div>
        <div className="flexbox-kontakt-form-container">
          <div className="flexbox-kontakt-form-text-container">
            <div className="flexbox-kontakt-heading-container">
              <h2 id="kontakt-heading">
                Fyll i dina uppgifter nedan - så kontaktar vi dig inom kort
              </h2>
            </div>
            <form onsubmit={handleSubmit} id="kontaktform" name="kontaktform">
              <div className="flexbox-kontakt-form-question-container">
                <label for="question">VAD GÄLLER DIN FRÅGA</label>
                <select
                  id="question"
                  name="question"
                  form="kontaktform"
                  placeholder="-- Välj ett alternativ --"
                >
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
              </div>
              <div className="flexbox-kontakt-form-aterforsaljare-container">
                <label for="aterforsaljare">
                  Välj återförsäljare (frivilligt)
                </label>
                <select
                  id="aterforsaljare"
                  name="aterforsaljare"
                  form="kontaktform"
                  placeholder="-- Välj ett alternativ --"
                >
                  <option value="bromma">Mobility Motors Bromma</option>
                  <option value="satra">Mobility Motors Sätra</option>
                  <option value="malmo">Mobilty Motors Malmö</option>
                </select>
              </div>
              <div className="flexbox-kontakt-form-beratta-container">
                <div className="flexbox-kontakt-form-beratta-heading-container">
                  <h2 id="kontakt-beratta-heading">
                    Berätta för oss vem du är:
                  </h2>
                </div>
                <div className="flexbox-kontakt-form-beratta-item-container">
                  <div className="flexbox-kontakt-form-beratta-item flexbox-kontakt-form-beratta-item-1">
                    <div className="flexbox-kontakt-form-beratta-label-input-container">
                      <label for="forefternamn">För-och efternamn</label>
                      <input
                        id="forefternamn"
                        name="forefternamn"
                        type="text"
                        placeholder="John Wayde"
                      />
                    </div>
                    <div className="flexbox-kontakt-form-beratta-label-input-container">
                      <label for="postnummer">Postnummer</label>
                      <input
                        id="postnummer"
                        name="postnummer"
                        type="number"
                        placeholder="141 00"
                        onInput={(e) =>
                          (e.target.value = e.target.value.slice(0, 5))
                        }
                      />
                    </div>
                    <div className="flexbox-kontakt-form-beratta-label-input-container">
                      <label for="telefon">Telefon</label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="number"
                        placeholder="076 520 4789"
                        onInput={(e) =>
                          (e.target.value = e.target.value.slice(0, 10))
                        }
                      />
                    </div>
                  </div>
                  <div className="flexbox-kontakt-form-beratta-item flexbox-kontakt-form-beratta-item-2">
                    <div className="flexbox-kontakt-form-beratta-label-input-container">
                      <label for="foretag">Företag</label>
                      <input
                        id="foretag"
                        name="foretag"
                        type="text"
                        placeholder="Mobility Motors"
                      />
                    </div>
                    <div className="flexbox-kontakt-form-beratta-label-input-container">
                      <label for="stad">Stad</label>
                      <input
                        id="stad"
                        name="stad"
                        type="text"
                        placeholder="Stockholm"
                      />
                    </div>
                    <div className="flexbox-kontakt-form-beratta-label-input-container">
                      <label for="epostadress">E-postadress</label>
                      <input
                        id="epostadress"
                        name="epostadress"
                        type="text"
                        placeholder="example@mail.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flexbox-kontakt-form-beratta-item-lower-container">
                  <div className="flexbox-kontakt-form-beratta-item-lower">
                    <div className="flexbox-kontakt-form-beratta-lower-label-input-container">
                      <div className="flexbox-kontakt-form-beratta-lower-registreringsnummer-label-container">
                        <label for="registreringsnummer">
                          Registreringsnummer (kravs för frågor gällande din
                          bil)
                        </label>
                      </div>
                      <div className="flexbox-kontakt-form-beratta-lower-registreringsnummer-input-container">
                        <input
                          id="registreringsnummer"
                          name="registreringsnummer"
                          type="text"
                          placeholder="ABC 123"
                        />
                      </div>
                    </div>
                    <div className="flexbox-kontakt-form-beratta-lower-policy-container">
                      <div className="flexbox-kontakt-form-beratta-lower-policy-input-container">
                        <input id="policy" name="policy" type="checkbox" />
                      </div>
                      <div className="flexbox-kontakt-form-beratta-lower-policy-label-container">
                        <label for="policy">
                          Jag vill ta emot marknadsföring från Mobility Motors
                          Sverige via e-post och telefon/meddelandetjänster.
                          Detta samtycke kan när som helst återkallas. Mer
                          utförlig information finns i vår sekretesspolicy.
                        </label>
                      </div>
                    </div>
                    <div className="flexbox-kontakt-form-beratta-lower-button-container">
                      <button type="button">Skicka</button>
                    </div>
                  </div>
                </div>
                <div className="flexbox-kontakt-form-beratta-lower-personuppgifter-container">
                  <div className="flexbox-kontakt-form-beratta-lower-personuppgifter-span-container">
                    <span id="personuppgifter-span">
                      De uppgifter du registrerar är konfidentiella och kommer
                      endast att föras vidare till bolag inom samma koncern samt
                      anknutna återförsäljare för att hantera och följa upp din
                      förfrågan. Alla personuppgifter sparas och hanteras i
                      enlighet med gällande datalag för personuppgifter. Se vår{" "}
                      <a href="https://www.mbil.se/om-oss/integritetspolicy">
                        sekretesspolicy
                      </a>{" "}
                      för mer information.
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
