import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSectioon = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images you want to cycle through
  const images = [
    "../../../../../public/image05.png",
    "../../../../../public/image1.jpg",
    "../../../../../public/software.jpg",
  ];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

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
            speed and accuracy. Every company has unique challenges and goals,
            and Whitstack values each client relationship to understand their
            structure and deliver customized solutions.
          </p>
        </div>
      </div>
      <div className="Images">
        <img id="img1" src="../../../../../public/image2.png" alt="" />
        <img id="img2" src={images[currentImage]} alt="Dynamic" />
      </div>
    </div>
  );
};

export default HeroSectioon;
