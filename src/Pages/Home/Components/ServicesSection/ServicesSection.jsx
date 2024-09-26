import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
    return (
        <div className="ServiceContainer" id="ourservices">
            <h2>OUR SERVICES-</h2>
            <div className="services">
                <div className="service">
                    <div className="left">
                        <h3>Web Development</h3>
                        <p>
                            Our IT professionals can build robust software applications, web applications that can easily be integrated and be optimized across all platforms.
                        </p>
                        <button>Learn more</button>
                    </div>
                    <div className="right">
                        <img src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Web Development" />
                    </div>
                </div>
                <div className="service">
                    <div className="left">
                        <h3>Cloud Consulting Services</h3>
                        <p>
                            Whitstack cloud consulting services can help you find the right cloud design that fits your needs for innovation and growth.
                        </p>
                        <button>Learn more</button>
                    </div>
                    <div className="right">
                        <img src="https://www.stockvault.net/data/2019/04/29/264553/preview16.jpg" alt="Cloud Consulting" />
                    </div>
                </div>
                <div className="service">
                    <div className="left">
                        <h3>AI/ML Services</h3>
                        <p>
                            Our IT professionals can build robust software applications, web applications that can easily be integrated and be optimized across all platforms.
                        </p>
                        <button>Learn more</button>
                    </div>
                    <div className="right">
                        <img src="https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI/ML Services" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
