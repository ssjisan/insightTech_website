import { Box, Rating, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import Review from "../../../Assets/Testimonial.json";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
export default function TestimonialSlider() {
  const { sliderRef } = useContext(DataContext);
  const forBelow500 = useMediaQuery("(max-width:500px)");
  const forBelow870 = useMediaQuery("(max-width:870px)");

  const TestimonialBodySx = {
    display: "flex",
    height: forBelow500 ? "480px" : "400px",
    padding: forBelow500 ? "32px" : "48px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: "16px",
    background: "linear-gradient(99deg, #00A76F 0%, #007867 100.7%)",
  };
  const MessageSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px",
    alignSelf: "stretch",
  };
  const SenderSx = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexDirection: forBelow870 && "column",
    width: "100%",
  };
  const AvatarSx = {
    width: "64px",
    height: "64px",
    borderRadius: "100%",
    overflow: "hidden",
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };
  return (
    <Slider {...settings} ref={sliderRef} style={{ width: "95%" }}>
      {Review.map((data) => {
        return (
          <Box key={data.id}>
            <Box sx={TestimonialBodySx}>
              <Box sx={MessageSx}>
                <Rating
                  name="read-only"
                  value={data.rating}
                  readOnly
                  size="medium"
                  sx={{ color: "#fff" }}
                />
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  {data.message}
                </Typography>
              </Box>
              <Box sx={SenderSx}>
                <Box sx={AvatarSx}>
                  <img
                    src={data.avatar}
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", textAlign: forBelow500 && "center" }}
                >
                  {data.name} - {data.company}, {data.position}{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Slider>
  );
}
