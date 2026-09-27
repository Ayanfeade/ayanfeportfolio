import React from "react";
import "./Service.css";
import image1 from "../assets/img/webpage.png";
import image2 from "../assets/img/Ella's Cakes.png";
import image3 from "../assets/img/8.jpg";
import image4 from "../assets/img/coding-man.jpg";
import image5 from "../assets/img/10.jpg";
// import image6 from "../assets/img/11.jpg";

function Service() {
  const services = [
    {
      image: image1,
      title: "Frontend Development",
      desc: "I build Responsive and interactive websites using React, HTML, CSS and JavaScript",
    },
    {
      image: image2,
      title: "UI/UX Design",
      desc: " I design clean ,intuitive and visually appealing user interfaces that focus on usability, accessibility and delivering an enjoyable experience for users",
    },
    {
      image: image3,
      title: "UI Implementation",
      desc: " I convert Figma or design mockups into clean and functional web pages",
    },
    {
      image: image4,
      title: "Responsive Web Design",
      desc: " I create websites that look great on desktops, tablets and mobile devices, providing a consistent experience across all screen sizes",
    },
    {
      image: image5,
      title: "Website Maintenance",
      desc: "I provide ongoing websites updates, bug fixes and performance improvement to keep your website secure and running smoothly.",
    },
    // {
    //   image: image6,
    //   title: "Performance Optimization",
    //   desc: " I optimize websites for speed , efficiency and search engine visibility by improving loading times and reducing unnecessary resources",
    // },
  ];
  return (
    <div className="service">
      <h1>What am I good at ? </h1>
      <div className="service-card">
        {services.map((service, index) => (
          <div className="service-text" key={index}>
            <img src={service.image} alt="Images" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
