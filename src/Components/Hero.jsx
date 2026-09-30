import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

import Image1 from "../assets/img/comp1.jpg";
import Image2 from "../assets/img/comp2.jpg";
import Image3 from "../assets/img/comp3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "lucide-react";

import { EffectFade, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function Hero() {
  const myHero = [
    {
      image: Image1,
    },
    {
      image: Image2,
    },
    {
      image: Image3,
    },
  ];

  return (
    <section className="hero-session">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        navigation={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        className="hero-swiper"
      >
        {myHero.map((hero, index) => (
          <SwiperSlide key={index}>
            <div className="hero">

              {/* Background Image */}
              <div
                className="hero-img"
                style={{
                  backgroundImage: `url(${hero.image})`,
                }}
              >

                {/* Hero Content */}
                <div className="big-hero">
                  <div className="hero-text">

                    <h3>HELLO!</h3>

                    <h1>
                      I'm Ogungbeje Ayanfe Adesola
                    </h1>

                    <h2>
                      I am a Web Developer
                    </h2>

                    <p>
                      I have a good knowledge of frontend and backend
                      development. I can build responsive websites for
                      both individuals and organizations.
                    </p>

                    {/* Buttons */}
                    <div className="hero-btn">

                      <Link
                        to="/Project"
                        className="view-btn"
                      >
                        <span>View My Work</span>
                        <ChevronRight size={18} />
                      </Link>

                      <Link
                        to="/Contact"
                        className="hire-btn"
                      >
                        <span>Hire Me</span>
                        <ChevronRight size={18} />
                      </Link>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;