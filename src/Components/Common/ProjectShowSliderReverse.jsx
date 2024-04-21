import { Box } from "@mui/material";
import { useRef } from "react";
import Slider from "react-slick";

export default function ProjectShowSliderReverse() {
  //eslint-disable-next-line
  let sliderRef = useRef(null);
  const imageUrls = [
    "/images/home/projects/1.gif",
    "/images/home/projects/2.png",
    "/images/home/projects/3.png",
    "/images/home/projects/4.gif",
    "/images/home/projects/5.png",
    "/images/home/projects/6.png",
    "/images/home/projects/7.png",
    "/images/home/projects/8.gif",
    "/images/home/projects/9.png",
    "/images/home/projects/10.png",
  ];
  const settings = {
    initialSlide: 0,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    pauseOnHover: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 597,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {imageUrls.slice().reverse().map((data, index) => {
          return (
            <Box
              sx={{
                width: "384px",
                height: "280px",
                overflow: "hidden",
                borderRadius: "16px",
              }}
              key={index}
            >
              <img
                src={data}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
}
