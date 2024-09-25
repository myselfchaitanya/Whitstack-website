import React from "react";
import "./PartnersAndClients.css";
const PatnersAndClients = () => {
  return (
    <div className="PartnersContainer">
      <div className="TextAbtPartners">
        <h1>
          We Work With the <br />
          Best Partners
        </h1>
        <p>
          While we are at the forefront of brand specialize in design-build, we
          are very familiar with a number of delivery methods and are confident
          we can find the process that will best help you meet your goals.
        </p>
        <button>Learn More</button>
      </div>
      <div className="PartnerLogo">
        <img src="../../../redington.png" alt="" />
        <img id="pi" src="../../../pi.png" alt="" />
        <img src="../../../crayon.png" alt="" />
      </div>
    </div>
  );
};

export default PatnersAndClients;
