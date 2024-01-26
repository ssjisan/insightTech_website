import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/DigitalMarketing/HeroSection";
import Services from "../Components/DigitalMarketing/ServiceSection/Services";
import SeoService from "../Components/DigitalMarketing/SeoService";
import FaQ from "../Components/DigitalMarketing/FaQ";
import Reminder from "../Components/Common/Reminder"
import Footer from "../Layout/Footer/Footer"
import SocialMedia from "../Components/DigitalMarketing/SocialMedia";
import WhySeo from "../Components/DigitalMarketing/WhySeo";
export default function DigitalMarketing() {
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
      <SocialMedia />
      <SeoService />
      <WhySeo />
      <FaQ />
      <Reminder />
      <Footer />
    </Box>
  )
}
