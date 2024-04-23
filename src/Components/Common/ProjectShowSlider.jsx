import { Box } from "@mui/material";
import { useRef } from "react";
import Slider from "react-slick";

export default function ProjectShowSlider() {
  //eslint-disable-next-line
  let sliderRef = useRef(null);

  const imageUrls = [
    "/images/home/projects/1.webp",
    "/images/home/projects/2.webp",
    "/images/home/projects/3.webp",
    "/images/home/projects/4.webp",
    "/images/home/projects/5.webp",
    "/images/home/projects/6.webp",
    "/images/home/projects/7.webp",
    "/images/home/projects/8.webp",
    "/images/home/projects/9.webp",
    "/images/home/projects/10.webp",
  ];
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
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
        {imageUrls.map((data, index) => {
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
                alt="Project Preview"
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
}
