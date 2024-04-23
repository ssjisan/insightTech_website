import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
} from "@mui/material";
import Calender from "../Components/Schedule/Calender";
import TimeSlotSelection from "../Components/Schedule/TimeSlotSelection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import InputFields from "../Components/Schedule/InputFields";
import MeetingInfo from "../Components/Schedule/MeetingInfo";

export default function Schedule() {
  const handleGoBack = () => {
    window.history.back();
  };
  const ContainerSx = {
    mt: { xs: "24px", sm: "48px", md: "80px" },
    mb: { xs: "24px", sm: "48px", md: "80px" },
    display: "flex",
    flexDirection: "column",
  };

  const {
    meetingData,
    handleMeetingRequestSubmit,
    handleBack,
    scheduleErrorAlert,
    scheduleSuccessAlert,
    handleAlertClose,
  } = useContext(DataContext);

  return (
    <Container sx={ContainerSx}>
      <Box sx={{ mb: "24px" }}>
        <Button color="inherit" onClick={handleGoBack}>
          Back
        </Button>
      </Box>
      <Box
        sx={{
          border: "1px solid rgba(145, 142, 175, 0.32)",
          borderRadius: "12px",
          p: "24px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <MeetingInfo />
          </Grid>
          {!(meetingData.date && meetingData.timeSlot) && (
            <Grid item xs={12} sm={6} md={6}>
              <Calender />
            </Grid>
          )}
          {!(meetingData.date && meetingData.timeSlot) && (
            <Grid item xs={12} sm={6} md={3}>
              <TimeSlotSelection />
            </Grid>
          )}
          {meetingData.date && meetingData.timeSlot && (
            <Grid item xs={12} sm={12} md={9}>
              <Box>
                <InputFields />
              </Box>
            </Grid>
          )}
          {meetingData.date && meetingData.timeSlot && (
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="outlined" color="inherit" onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleMeetingRequestSubmit}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      <Snackbar
        open={scheduleErrorAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Error</AlertTitle>
          Please fill in your name, phone number & email so we can get back to
          you.
        </Alert>
      </Snackbar>
      <Snackbar
        open={scheduleSuccessAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Successfully sent</AlertTitle>
          Thanks for your interest. We will contact you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
}
