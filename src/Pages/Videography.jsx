import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/VideoGraphy/HeroSection";
import Services from "../Components/VideoGraphy/ServiceSection/Services"
import Reminder from "../Components/Common/Reminder"
import Footer from "../Layout/Footer/Footer"
import FaQ from "../Components/VideoGraphy/FaQ";
import Projects from "../Components/VideoGraphy/Projects";
import Promotion from "../Components/VideoGraphy/Promotion";
import WhyVideography from "../Components/VideoGraphy/WhyVideography";
export default function Videography() {
  // eslint-disable-next-line
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow1100 = useMediaQuery("(max-width:1100px)");

  return (
    <Box>
      {
        forBelow1100 ? <NavForMobile /> : <Navbar />
      }
      <HeroSection />
      <Services />
      <Promotion />
      <WhyVideography />
      <Projects />
      <FaQ />
      <Reminder />
      <Footer />
    </Box>
  )
}
