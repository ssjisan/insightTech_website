import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import Calender from "./Calender";
import { Close } from "../../Assets/IconSet";
import TimeSlotSelection from "./TimeSlotSelection";
import ScheduleModalMobile from "./ScheduleModalMobile";

export default function ScheduleModal() {
    const { openScheduleModal, handleScheduleModalClose, meetingData, handleNext } = useContext(DataContext)
    const forBelow767 = useMediaQuery("(max-width:767px)");

    return (
        <Dialog
            open={openScheduleModal}
            onClose={handleScheduleModalClose}
            PaperProps={{
                sx: {
                    borderRadius: "16px",
                    maxWidth: "1000px"
                }
            }}
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6">Schedule a Call</Typography>
                <IconButton onClick={handleScheduleModalClose}>
                    <Close />
                </IconButton>
            </DialogTitle>
            {forBelow767 ?
                <ScheduleModalMobile /> :
                <DialogContent sx={{ display: "flex", gap: forBelow767 ? "8px" : "24px", maxWidth: "1000px" }}>
                    <Calender />
                    <TimeSlotSelection />
                </DialogContent>
            }
            <DialogActions sx={{ padding: forBelow767 ? "8px 16px" : "16px 24px", borderTop: "1px solid rgba(145,158,171,0.48)" }}>
                <Button onClick={handleScheduleModalClose} variant="outlined" color="inherit">Cancel</Button>
                {
                    meetingData.date === "" || meetingData.timeSlot === "" ?
                        <Button onClick={handleScheduleModalClose} variant="contained" color="primary" disabled>Next</Button> :
                        <Button onClick={handleNext} variant="contained" color="primary" >Next</Button>
                }
            </DialogActions>
        </Dialog>
    )
}
