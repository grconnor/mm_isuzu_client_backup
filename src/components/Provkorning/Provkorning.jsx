// Library Imports:
import "./provkorning.css";
import React, { useState } from "react";

// Component Imports:

// Image Imports:
import SingleCab from "../../images/single/isuzu_d-max_single-cab_xrs_1000x500.png"
import DoubleCab from "../../images/double/isuzu_d-max_double-cab_xrx_1000x500.png";
import ExtendedCab from "../../images/extended/isuzu_d-max_extended-cab_xrm_1000x500.png";


const Provkorning = () => {
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    var policyElement = document.getElementById("policy");
    policyElement.value = policyElement.checked ? "Ja, vill ta emot marknadsföring." : "Nej, vill inte ta emot marknadsföring."
    var singlecabElement = document.getElementById("singlecab");
    var doublecabElement = document.getElementById("doublecab");
    var extendedcabElement = document.getElementById("extendedcab");
    singlecabElement.value = singlecabElement.checked ? "Ja" : "Nej"
    doublecabElement.value = doublecabElement.checked ? "Ja" : "Nej"
    extendedcabElement.value = extendedcabElement.checked ? "Ja" : "Nej"
    
    const { singlecab, doublecab, extendedcab, aterforsaljare, forefternamn, postnummer, telefon, foretag, stad, epostadress, policy } = e.target.elements;
    let details = {
      singlecab: singlecab.value,
      doublecab: doublecab.value,
      extendedcab: extendedcab.value,
      aterforsaljare: aterforsaljare.value,
      forefternamn: forefternamn.value,
      postnummer: postnummer.value,
      telefon: telefon.value,
      foretag: foretag.value,
      stad: stad.value,
      epostadress: epostadress.value,
      policy: policy.value
    };
    let response = await fetch("http://localhost:5001/provkorning", {
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
      <div className="Flexbox-provkorning-main-container">
        <div className="flexbox-provkorning-image-container">
          <div className="flexbox-provkorning-image-text-container">
            <h1 id="provkorning-heading1">Boka Provkörning</h1>
          </div>
        </div>
        <div className="flexbox-provkorning-form-outer-container">
          <div className="flexbox-provkorning-form-container">
            <form onSubmit={handleSubmit} id="provkorningform" name="provkorningform">
              <div className="flexbox-provkorning-form-car-selection">
                <h2 id="car-selection-heading">Välj den bil du vill provköra</h2>
                <ul>
                  <div className="flexbox-provkorning-form-car-list-container">
                    <li>
                      <input type="checkbox" id="singlecab" />
                      <label for="singlecab" id="checkbox">
                        <img src={SingleCab} alt="single-cab" />
                        <span>Single Cab</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="doublecab" />
                      <label for="doublecab" id="checkbox">
                        <img src={DoubleCab} alt="double-cab" />
                        <span>Double Cab</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="extendedcab" />
                      <label for="extendedcab" id="checkbox">
                        <img src={ExtendedCab} alt="extended-cab" />
                        <span>Extended Cab</span>
                      </label>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="flexbox-provkorning-form-aterforsaljare-container">
              <label for="aterforsaljare">
                  Välj återförsäljare
                </label>
                <select
                  id="aterforsaljare"
                  name="aterforsaljare"
                  form="provkorningform"
                  placeholder="-- Välj ett alternativ --"
                >
                  <option value="bromma">Mobility Motors Bromma</option>
                  <option value="satra">Mobility Motors Sätra</option>
                  <option value="malmo">Mobilty Motors Malmö</option>
                </select>
              </div>
              <div className="flexbox-provkorning-form-kontaktuppgifter-container">
                <div className="flexbox-provkorning-form-kontaktuppgifter-heading-container">
                  <h2 id="kontaktuppgifter-heading">
                    Fyll i dina kontaktuppgifter
                  </h2>
                </div>
                <div className="flexbox-provkorning-form-kontaktuppgifter-item-container">
                  <div className="flexbox-provkorning-form-kontaktuppgifter-item flexbox-provkorning-form-kontaktuppgifter-item-1">
                    <div className="flexbox-provkorning-form-kontaktuppgifter-label-input-container">
                      <label for="forefternamn">För-och efternamn</label>
                      <input
                        id="forefternamn"
                        name="forefternamn"
                        type="text"
                        placeholder="John Wayde"
                      />
                    </div>
                    <div className="flexbox-provkorning-form-kontaktuppgifter-label-input-container">
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
                    <div className="flexbox-provkorning-form-kontaktuppgifter-label-input-container">
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
                  <div className="flexbox-provkorning-form-kontaktuppgifter-item flexbox-provkorning-form-kontaktuppgifter-item-2">
                    <div className="flexbox-provkorning-form-kontaktuppgifter-label-input-container">
                      <label for="foretag">Företag</label>
                      <input
                        id="foretag"
                        name="foretag"
                        type="text"
                        placeholder="Mobility Motors"
                      />
                    </div>
                    <div className="flexbox-provkorning-form-kontaktuppgifter-label-input-container">
                      <label for="stad">Stad</label>
                      <input
                        id="stad"
                        name="stad"
                        type="text"
                        placeholder="Stockholm"
                      />
                    </div>
                    <div className="flexbox-provkorning-form-kontaktuppgifter-label-input-container">
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
                <div className="flexbox-provkorning-form-policy-container">
                  <div className="flexbox-provkorning-form-policy-input-container">
                    <input id="policy" name="policy" type="checkbox" />
                  </div>
                  <div className="flexbox-provkorning-form-policy-label-container">
                    <label for="policy">
                      Jag vill ta emot marknadsföring från Mobility Motors
                      Sverige via e-post och telefon/meddelandetjänster.
                      Detta samtycke kan när som helst återkallas. Mer
                      utförlig information finns i vår sekretesspolicy.
                    </label>
                  </div>
                </div>
                <div className="flexbox-provkorning-form-button-container">
                  <button type="submit" id="provkorning-foorm-submit-button" form="provkorningform">Skicka</button>
                </div>
              </div>
              <div className="flexbox-provkorning-form-personuppgifter-container">
                <div className="flexbox-provkorning-form-personuppgifter-span-container">
                  <span id="provkorning-personuppgifter-span">
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Provkorning;
