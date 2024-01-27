import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/Grpahics/HeroSection";
import Services from "../Components/Grpahics/ServiceSection/Services"
import Promotion from "../Components/Grpahics/Promotion";
import FaQ from "../Components/Grpahics/FaQ";
import Reminder from "../Components/Common/Reminder";
import Footer from "../Layout/Footer/Footer"
import GraphicsEssentials from "../Components/Grpahics/GraphicsEssentials";
export default function Graphics() {
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
      <GraphicsEssentials />
      {/* <ProjectShowCase /> */}
      <FaQ />
      <Reminder />
      <Footer />
    </Box>
  )
}
