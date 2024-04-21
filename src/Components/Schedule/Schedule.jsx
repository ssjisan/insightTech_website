import {
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "../../Assets/IconSet";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import TimeSlotSelection from "../PreviousSchedule/TimeSlotSelection";
import Calender from "../PreviousSchedule/Calender";

export default function Schedule() {
  const DrawerSx = {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "100%",
    },
  };
  const TopBarSx = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "12px 16px",
  };
  const CloseButtonSx = {
    borderRadius: "8px",
    background: "rgba(145, 142, 175, 0.16)",
    p: "4px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  // Configure Style End

  const { openScheduleDrawer, handleScheduleDrawerClose } =
    useContext(DataContext);
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={openScheduleDrawer}
      onClose={handleScheduleDrawerClose}
      sx={DrawerSx}
    >
      <Box sx={TopBarSx}>
        <IconButton sx={CloseButtonSx} onClick={handleScheduleDrawerClose}>
          <Close />
        </IconButton>
      </Box>
      <Container sx={{ mt: "140px" }}>
        <Grid
          container
          sx={{
            border: "1px solid rgba(145, 142, 175, 0.32)",
            p: "24px",
            borderRadius: "12px",
          }}
        >
          <Grid item xs={12} sm={3} md={3}>
            <Box>
              <Typography>
                Get started on your success with a free expert consultation
              </Typography>
              <Typography>
                Ready to see how a web solution service agency can help you
                level up? Book a free consultation today!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Calender />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <TimeSlotSelection />
          </Grid>
        </Grid>
      </Container>
    </Drawer>
  );
}
