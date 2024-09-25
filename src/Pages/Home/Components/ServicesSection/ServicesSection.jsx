import React from "react";
import "./ServicesSection.css";
import { GiCloudRing } from "react-icons/gi";
import { RiCodeView } from "react-icons/ri";
import { BsCloudFill } from "react-icons/bs";
const ServicesSection = () => {
  return (
    <div className="ServiceContainer" id="ourservices">
      <div className="Heading">
        <h1>We Offer our best services</h1>
      </div>
      <div className="bodies">
        <div className="Services">
          <div className="service">
            <div className="icon">
              <GiCloudRing></GiCloudRing>
            </div>
            <div className="content">
              <h1>Cloud Migration</h1>
              <p>
                Assess your current applications, find the right mix of clouds
                for your workloads
              </p>
            </div>
          </div>
          <hr />
          <div className="service">
            <div className="icon">
              <RiCodeView />
            </div>
            <div className="content">
              <h1>Software Devlopement</h1>
              <p>Our IT professionals can build robust software applications</p>
            </div>
          </div>
          <hr />
          <div className="service">
            <div className="icon">
              <BsCloudFill></BsCloudFill>
            </div>
            <div className="content">
              <h1>Cloud Cunsulting Services</h1>
              <p>
                Cloud is one of the most significant technology shifts your
                company will face
              </p>
            </div>
          </div>
          {/* <hr /> */}
          <button id="LearnMoreButton">Learn More</button>
        </div>
        <img id="vectorimage" src="../../../../../public/image4.png" alt="" />
      </div>
    </div>
  );
};

export default ServicesSection;
