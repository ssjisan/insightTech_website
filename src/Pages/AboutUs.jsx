import { Box, useMediaQuery } from "@mui/material";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import Navbar from "../Layout/Navbar/Navbar";
import HeroSection from "../Components/AboutUs/HeroSection";
import Footer from "../Layout/Footer/Footer"
import ShortInfo from "../Components/AboutUs/ShortInfo";
import HistoryMatrix from "../Components/AboutUs/HistoryMatrix";
import Quality from "../Components/AboutUs/Quality";
import FaQ from "../Components/AboutUs/FaQ";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
export default function AboutUs() {
    const forBelow1100 = useMediaQuery("(max-width:1100px)");

    return (
        <Box>
            {
                forBelow1100 ? <NavForMobile /> : <Navbar />
            }
            <HeroSection />
            <ShortInfo />
            <HistoryMatrix />
            <Quality />
            <FaQ />
            <Testimonial />
            <Footer />
        </Box>
    )
}
