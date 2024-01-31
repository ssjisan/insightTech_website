import { Container } from "@mui/material";
import Slider from "react-slick";


export default function ClientSlider() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <Container>
      <Slider {...settings}>
        <img src="https://i.ibb.co/VJp6k4j/Whiz.jpg" />
        <img src="https://i.ibb.co/CtNwHRS/Alozza.jpg" />
        <img src="https://i.ibb.co/fDRxJJB/JBH.jpg" />
        <img src="https://i.ibb.co/HKqLmFP/GP.jpg" />
        <img src="https://i.ibb.co/GRMpg0k/Sunshine.jpg" />
        <img src="https://i.ibb.co/JFVcNF5/Alnoor.jpg" />
        <img src="https://i.ibb.co/gv30rgH/FeniEasy.jpg" />
      </Slider>
    </Container>

  )
}
