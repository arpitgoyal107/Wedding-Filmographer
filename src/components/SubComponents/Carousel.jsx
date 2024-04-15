import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ events }) => {
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute z-[2] top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
      onClick={onClick}
    >
      <FaChevronRight size={30} color="#fff" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute z-[2] top-1/2 left-2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
      onClick={onClick}
    >
      <FaChevronLeft size={30} color="#fff" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {events.map((event) => (
        <div key={event.name} className="h-[calc(100svh-108px)]">
          <img src={event.url} className="w-full object-cover h-full" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
