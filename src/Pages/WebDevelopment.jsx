import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/WebDevelopment/HeroSection";
import Services from "../Components/WebDevelopment/ServiceSection/Services";
import FaQ from "../Components/WebDevelopment/FaQ";
import CleanUI from "../Components/WebDevelopment/CleanUI";
import Technology from "../Components/WebDevelopment/Technology";
import NeedWebsite from "../Components/WebDevelopment/NeedWebsite";
import Reminder from "../Components/Home/Reminder"
import Footer from "../Layout/Footer/Footer"
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
      <NeedWebsite />
      <CleanUI />
      <Technology />
      <FaQ />
      <Reminder />
      <Footer />
    </Box>
  )
}
