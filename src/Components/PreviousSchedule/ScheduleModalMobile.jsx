import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import Calender from "./Calender";
import { Close } from "../../Assets/IconSet";
import TimeSlotSelection from "./TimeSlotSelection";

export default function ScheduleModalMobile() {
    const { openScheduleModal, handleScheduleModalClose, meetingData, handleNext } = useContext(DataContext)
    const forBelow767 = useMediaQuery("(max-width:767px)");

    return (
        <DialogContent sx={{ display: "flex", gap: forBelow767 ? "8px" : "24px", maxWidth: "1000px" }}>
            {meetingData.date !== " " ? <Calender />

                : <TimeSlotSelection />
            }
        </DialogContent>
    )
}
