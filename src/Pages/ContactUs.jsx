import { Box, useMediaQuery } from "@mui/material";
import NavForMobile from "../Layout/Navbar/NavForMobile";
import Navbar from "../Layout/Navbar/Navbar";
import Header from "../Components/ContactUs/Header";
import Form from "../Components/ContactUs/Form";
import MoreContact from "../Components/ContactUs/MoreContact";
import FaQ from "../Components/ContactUs/FaQ";
import EmailReminder from "../Components/ContactUs/EmailReminder";
import Footer from "../Layout/Footer/Footer";

export default function ContactUs() {
  const forBelow1100 = useMediaQuery("(max-width:1100px)");

  return (
    <Box>
      {forBelow1100 ? <NavForMobile /> : <Navbar />}
      <Header />
      <Form />
      <MoreContact />
      <FaQ />
      <EmailReminder />
      <Footer />
    </Box>
  );
}
