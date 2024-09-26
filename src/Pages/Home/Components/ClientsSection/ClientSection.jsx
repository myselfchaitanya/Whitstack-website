import React from "react";
import "./ClientSection.css";
const ClientSection = () => {
  return (
    <div className="ClientContainer" id="clients">
      <h2>OUR CLIENTS</h2>
      <div className="clients">
        <div className="client">
          <img src="/retina.png" alt="" />
        </div>
        <div className="client">
          <img src="/automatrc.png" alt="" />
        </div>
        <div className="client">
          <img src="/acne.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
