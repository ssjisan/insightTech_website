import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/PBX/HeroSection";
import Promotion from "../Components/PBX/Promotion";
import Reminder from "../Components/Common/Reminder";
import Footer from "../Layout/Footer/Footer"
import Features from "../Components/PBX/Features";
import FaQ from "../Components/PBX/FaQ";
import WhyUs from "../Components/PBX/WhyUs";
export default function PBX() {
  // eslint-disable-next-line
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow1100 = useMediaQuery("(max-width:1100px)");

  return (
    <Box>
      {
        forBelow1100 ? <NavForMobile /> : <Navbar />
      }
      <HeroSection />
      <Promotion />
      <Features />
      <WhyUs />
      <FaQ />
      <Reminder />
      <Footer />
    </Box>
  )
}
