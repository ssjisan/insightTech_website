import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/WebDevelopment/HeroSection";
import Services from "../Components/WebDevelopment/ServiceSection/Services";
import FaQ from "../Components/WebDevelopment/FaQ";
import CleanUI from "../Components/WebDevelopment/CleanUI";

export default function WebDevelopment() {
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
      <CleanUI />
      <FaQ />
    </Box>
  )
}
