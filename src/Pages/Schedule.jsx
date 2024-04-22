import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Calender from "../Components/Schedule/Calender";
import TimeSlotSelection from "../Components/Schedule/TimeSlotSelection";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import { CalenderIcon, Clock, GoogleMeet } from "../Assets/IconSet";
import InputFields from "../Components/Schedule/InputFields";
import Confirmation from "../Components/Schedule/Confirmation";

export default function Schedule() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const ContainerSx = {
    mt: { xs: "24px", sm: "48px", md: "80px" },
    mb: { xs: "24px", sm: "48px", md: "80px" },
    display: "flex",
    flexDirection: "column",
  };

  const { meetingData, handleMeetingRequestSubmit, handleBack } =
    useContext(DataContext);

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
          <Grid
            item
            xs={12}
            sm={meetingData.date && meetingData.timeSlot ? 5 : 3}
            md={meetingData.date && meetingData.timeSlot ? 5 : 3}
          >
            <Box sx={{ width: "100%", maxWidth: "280px" }}>
              <Typography variant="h4" color="text.primary">
                Get started on your success with a free expert consultation
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Ready to see how a web solution service agency can help you
                level up? Book a free consultation today!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  mt: "24px",
                }}
              >
                {meetingData.date && meetingData.timeSlot && (
                  <Box sx={{ display: "flex", gap: "8px" }}>
                    <CalenderIcon />
                    <Typography variant="body2">
                      {meetingData.date}&nbsp;&nbsp;{meetingData.timeSlot}
                    </Typography>
                  </Box>
                )}
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Clock />
                  <Typography variant="body2" color="text.secondary">
                    60 Minutes
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <GoogleMeet />
                  <Typography variant="body2" color="text.secondary">
                    Google Meet
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          {!(meetingData.date && meetingData.timeSlot) && (
            <>
              <Grid item xs={12} sm={6} md={6}>
                <Box>
                  <Calender />
                </Box>
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <Box>
                  <TimeSlotSelection />
                </Box>
              </Grid>
            </>
          )}
          {meetingData.date && meetingData.timeSlot && (
            <>
              <Grid item xs={12} sm={7} md={7}>
                <Box>
                  <InputFields />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
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
              </Grid>
            </>
          )}
        </Grid>
      </Box>
      <Confirmation />
    </Container>
  );
}
