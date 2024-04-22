import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { Box, Typography } from "@mui/material";

export default function Confirmation() {
  const { meetingData } = useContext(DataContext);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "480px",
        border: "1px solid rgba(145, 142, 175, 0.32)",
        borderRadius: "12px",
        p: "24px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          p: "16px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img src="/Done.png" alt="Done" />
        <Typography variant="h4">This meeting is scheduled</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: "24px",
        }}
      >
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Typography sx={{ width: "120px" }} color="text.secondary">
            When
          </Typography>
          <Typography>
            {" "}
            {meetingData.date}&nbsp;{meetingData.timeSlot}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Typography sx={{ width: "120px" }} color="text.secondary">
            Where
          </Typography>
          <Typography>Google Meet</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Typography sx={{ width: "120px" }} color="text.secondary">
            Guest
          </Typography>
          <Typography>{meetingData.name}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Typography sx={{ width: "120px" }} color="text.secondary">
            Description
          </Typography>
          <Typography>{meetingData.brief}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
