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
          <header>
            <h1>
              Welcome to <br /> Whitstack Solutions
            </h1>
          </header>
          <p>
            Transform Your Business with Whitstack's Expert IT Strategy and Digital Solutions <br />
            Leverage Whitstack's top-tier expertise and advanced tech capabilities to develop a tailored IT strategy that drives your organization’s digital transformation. Our solutions align with your business goals, ensuring a seamless technological transition.
<br />
            At Whitstack, we help individuals and companies tackle complex business challenges with speed, precision, and customized solutions. Every business is unique, and we prioritize understanding your company’s structure and objectives to deliver personalized results that set you up for success.
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
