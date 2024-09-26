import React from "react";
import "./PartnersAndClients.css";
const PatnersAndClients = () => {
  return (
    <div className="PartnersContainer">
      <div className="TextAbtPartners">
        <h3>
          We Work With the <br />
          Best Partners
        </h3>
        <p>
          While we are at the forefront of brand specialize in design-build, we
          are very familiar with a number of delivery methods and are confident
          we can find the process that will best help you meet your goals.
        </p>
        <button>Learn More</button>
      </div>
      <div className="PartnerLogo">
        <img width="300px" height="auto" loading="lazy" title="redington" src="/redington.png" alt="redington logo" />
        <img width="200px" height="auto"  loading="lazy" title="pi" id="pi" src="/pi.png" alt="pi data center logo" />
        <img width="300px" height="auto" loading="lazy" title="crayon" src="/crayon.png" alt="cryayon logo" />
      </div>
    </div>
  );
};

export default PatnersAndClients;
