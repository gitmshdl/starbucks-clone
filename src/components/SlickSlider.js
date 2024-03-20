import { Box, Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import classes from "./GiftCards.module.css";
import GiftCardImage from "../assets/thankyou.avif";

function SlickSlider({ title, n = 8 }) {
  const settings = {
    // className: classes.slides,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: n !== 8 ? n : 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="slider-container">
        <h3>{title}</h3>
        <Slider {...settings}>
          {[...Array(n)].map((_, index) => (
            <div key={index}>
              <img
                src={GiftCardImage}
                alt="gift card"
                style={{ width: "90%", borderRadius: "10px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default SlickSlider;
