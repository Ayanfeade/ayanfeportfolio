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
  const myHero = [{ image: Image1 }, { image: Image2 }, { image: Image3 }];
  return (
    <>
      <div className="hero-session">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          loop={true}
          effect="fade"
          navigation
          autoplay={{ delay: 25000, disableOnInteraction: false }}
        >
          {myHero.map((myHeroes, index) => (
            <SwiperSlide key={index}>
              <div className="hero">
                <div
                  className="hero-img"
                  style={{ backgroundImage: `URL(${myHeroes.image})` }}
                >
                  <div className="big-hero">
                    {/* <img src="" alt="" /> */}
                    <div className="hero-text">
                      <h3>HELLO!</h3>
                      <h1>I'm Ogungbeje Ayanfe Adesola</h1>
                      <h2>I am a Web Developer</h2>
                      <p>
                        I have a good knowledge of Frontend and backend
                        development. I can build a responsive website for both
                        individuals and organization
                      </p>
                      <div className="hero-btn">
                        <Link to="/Project" className="view-btn">
                          View My Work <ChevronRight size={16} />
                        </Link>
                        <Link to="/Contact" className="hire-btn">
                          Hire Me <ChevronRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
