// import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/Home/HeroSection";

export default function Home() {
  const forBelow999 = useMediaQuery("(max-width:1000px)");

  return (
    <>
      {
        forBelow999 ? <NavForMobile /> : <Navbar />
      }
      <HeroSection/>
    </>
  )
}
