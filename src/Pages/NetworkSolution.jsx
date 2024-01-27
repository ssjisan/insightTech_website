import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/NetworkSolution/HeroSection";
import Services from "../Components/NetworkSolution/ServiceSection/Services"
import BillingSoftwear from "../Components/NetworkSolution/BillingSoftwear";
import Promotion from "../Components/NetworkSolution/Promotion";
import Technology from "../Components/NetworkSolution/TechnologySection/Technology";
import FaQ from "../Components/NetworkSolution/FaQ";
import Reminder from "../Components/Common/Reminder"
import Footer from "../Layout/Footer/Footer"
export default function NetworkSolution() {
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
      <BillingSoftwear />
      <Promotion />
      <Technology />
      <FaQ />
      <Reminder />
      <Footer />
    </Box>
  )
}
