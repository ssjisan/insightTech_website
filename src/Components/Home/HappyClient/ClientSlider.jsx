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
        <img src="clients/Alozza.jpg" />
        <img src="clients/Whiz.jpg" />
        <img src="clients/JBH.jpg" />
        <img src="clients/GP.jpg" />
        <img src="clients/Sunshine.jpg" />
        <img src="clients/Alnoor.jpg" />
        <img src="clients/FeniEasy.jpg" />
      </Slider>
    </Container>

  )
}
