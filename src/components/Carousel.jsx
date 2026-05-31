import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/carousel.css";

import img1 from "../assets/images/image1.webp";
import img2 from "../assets/images/prezes.webp";
import img3 from "../assets/images/tlo.webp";
import img4 from "../assets/images/tecza.webp";

export default function Carousel() {
  const slides = [
    {
      img: img1,
      alt: "Witajcie w składzie opału Energoszok",
      title: "WITAJCIE",
      subtitle: "",
    },
    {
      img: img2,
      title: "Pracowitość",
      alt: "Pracowitość. Każdego dnia nasz Prezes pracuje nad idealnym rozłożeniem palet z towarem.",
      subtitle:
        "Każdego dnia nasz Prezes pracuje nad idealnym rozłożeniem palet z towarem.",
    },
    {
      img: img3,
      alt: "Zapasy. Nasz skład jest zawsze pełny pierwszorzędznego opału!",
      title: "Zapasy",
      subtitle: "Nasz skład jest zawsze pełny pierwszorzędznego opału!",
    },
    {
      img: img2,
      alt: "Transport. Szybka i bezpieczna dostawa pod wskazany adres.",
      title: "Transport",
      subtitle: "Szybka i bezpieczna dostawa pod wskazany adres.",
    },
    {
      img: img3,
      alt: "Jakość. Oferujemy tylko sprawdzony opał najlepszej jakości.",
      title: "Jakość",
      subtitle: "Oferujemy tylko sprawdzony opał najlepszej jakości.",
    },
    {
      img: img4,
      alt: "Szukajcie nas pomiędzy dwoma końcami tęczy",
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
    adaptiveHeight: true,
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = img1;
    document.head.appendChild(link);
  }, []);

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
                    alt={slide.alt}
                    width="900"
                    height="675"
                    className="slide-image"
                    loading={idx === 0 ? "eager" : "lazy"}
                    fetchPriority={idx === 0 ? "high" : "auto"}
                    decoding="async"
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
