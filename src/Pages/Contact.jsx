import { Box, useMediaQuery } from "@mui/material";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import Navbar from "../Layout/Navbar/Navbar";
import ContactUs from "../Components/ContactUs/ContactUs";

export default function Contact() {
    const forBelow1100 = useMediaQuery("(max-width:1100px)");

    return (
        <Box>
            {
                forBelow1100 ? <NavForMobile /> : <Navbar />
            }
            <ContactUs />
        </Box>
    )
}
