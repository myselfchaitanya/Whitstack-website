import React from "react";
import "./HeroSection.css";

const HeroSectioon = () => {
  return (
    <div className="container" id="Aboutus">
      <div className="Intro">
        <div className="welcomePart">
          <h1>
            Welcome To <br /> Whitestack Solutions
          </h1>
          <p>
            Use the expertise and deep tech background of the best minds at
            Whitstack to create a comprehensive IT strategy for a digital and
            technological transformation of your organization that goes in line
            with your business objectives. <br />
            We help people and companies solve complex business problems with
            speed and accuracy.Every company has unique challenges and goals,
            and Whitstack values each client relationship to understand their
            structure and deliver customized solutions
          </p>
        </div>
      </div>
      <div className="Images">
        <img id="img1" src="../../../../../public/image2.png" alt="" />

        <img id="img2" src="../../../../../public/image1.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSectioon;
