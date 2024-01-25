import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import HeroSection from "../Components/Home/HeroSection";
import Services from "../Components/Home/ServiceSection/Services";
import WhoWeAre from "../Components/Home/WhoWeAre/WhoWeAre";
import HappyClient from "../Components/Home/HappyClient/HappyClient";
import Footer from "../Layout/Footer/Footer";
import Reminder from "../Components/Common/Reminder";
import Blog from "../Components/Home/Blog/Blog";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Testimonial from "../Components/Common/Testimonial/Testimonial";

export default function Home() {
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
      <WhoWeAre />
      <HappyClient />
      <WhyUs />
      <Testimonial />
      <Blog />
      <Reminder />
      <Footer />
    </Box>
  )
}
