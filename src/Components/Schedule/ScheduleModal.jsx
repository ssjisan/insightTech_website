import { Button, Dialog, DialogActions, DialogTitle, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import Calender from "./Calender";
import { Close } from "../../Assets/IconSet";

export default function ScheduleModal() {
    const { openScheduleModal, handleScheduleModalClose } = useContext(DataContext)

    return (
        <Dialog
            open={openScheduleModal}
            onClose={handleScheduleModalClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <Typography variant="h6">Schedule a Call</Typography>
                <IconButton onClick={handleScheduleModalClose}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <Calender />
            <DialogActions sx={{padding:"16px 24px"}}>
                <Button onClick={handleScheduleModalClose} variant="outlined" color="inherit">Cancel</Button>
                <Button onClick={handleScheduleModalClose} variant="contained" color="primary">Next</Button>
            </DialogActions>
        </Dialog>
    )
}
