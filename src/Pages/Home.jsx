import { Box, useMediaQuery, Alert, AlertTitle, Snackbar } from "@mui/material";
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
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import ScheduleModal from "../Components/Schedule/ScheduleModal"
import FormModal from "../Components/Schedule/FormModal"
export default function Home() {
  // eslint-disable-next-line
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow1100 = useMediaQuery("(max-width:1100px)");
  const { openMeetingErrorAlert, openMeetingSuccessAlert, handleMeetingAlertClose } = useContext(DataContext);

  return (
    <Box>
      {
        forBelow1100 ? <NavForMobile /> : <Navbar />
      }
      <ScheduleModal />
      <FormModal />
      <Snackbar open={openMeetingErrorAlert} autoHideDuration={6000} onClose={handleMeetingAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleMeetingAlertClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <AlertTitle>Error</AlertTitle>
          Please fill in your name, phone number & email so we can get back to you.
        </Alert>
      </Snackbar>
      <Snackbar open={openMeetingSuccessAlert} autoHideDuration={6000} onClose={handleMeetingAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleMeetingAlertClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <AlertTitle>Successfully sent</AlertTitle>
          Thanks for your interest. We will contact you soon.
        </Alert>
      </Snackbar>
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
