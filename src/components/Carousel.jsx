import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/carousel.css";

import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/prezes.jpg";
import img3 from "../assets/images/tlo.jpg";
import img4 from "../assets/images/tecza.jpg";

export default function Carousel() {
  const slides = [
    {
      img: img1,
      title: "WITAJCIE",
      subtitle: "",
    },
    {
      img: img2,
      title: "Pracowitość",
      subtitle:
        "Każdego dnia nasz Prezes pracuje nad idealnym rozłożeniem palet z towarem.",
    },
    {
      img: img3,
      title: "Zapasy",
      subtitle: "Nasz skład jest zawsze pełny pierwszorzędznego opału!.",
    },
    {
      img: img2,
      title: "Transport",
      subtitle: "Szybka i bezpieczna dostawa pod wskazany adres.",
    },
    {
      img: img3,
      title: "Jakość",
      subtitle: "Oferujemy tylko sprawdzony opał najlepszej jakości.",
    },
    {
      img: img4,
      title: "Szukajcie nas pomiędzy dwoma końcami tęczy",
      subtitle: "",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <Box sx={{ width: "100%", maxWidth: 900, mt: 4 }}>
            <Slider {...settings}>
              {slides.map((slide, idx) => (
                <Box key={idx} sx={{ position: "relative" }}>
                  <img
                    src={slide.img}
                    alt={`Slide ${idx + 1}`}
                    className="slide-image"
                  />
                  <div className="text-box">
                    <h3 style={{ margin: 0, fontSize: "1.5rem" }}>
                      {slide.title}
                    </h3>
                    <p style={{ margin: "5px 0 0", fontSize: "1rem" }}>
                      {slide.subtitle}
                    </p>
                    <br />
                  </div>
                </Box>
              ))}
            </Slider>
            <br />
            <br />
            <br />
          </Box>
        </div>
      </div>
    </div>
  );
}
