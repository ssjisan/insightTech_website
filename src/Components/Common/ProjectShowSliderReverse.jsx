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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
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
        {imageUrls
          .slice()
          .reverse()
          .map((data, index) => {
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
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            );
          })}
      </Slider>
    </div>
  );
}
