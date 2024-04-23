import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { CalenderIcon, GoogleMeet, Clock } from "../../Assets/IconSet";
import { useNavigate } from "react-router-dom";

export default function MeetingInfo() {
  const { meetingData } = useContext(DataContext);
  
  return (
    <Box>
      <Typography variant="h4" color="text.primary">
        Get started on your success with a free expert consultation
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Ready to see how a web solution service agency can help you level up?
        Book a free consultation today!
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
  );
}
