import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Close, Location } from "../../Assets/IconSet";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import InputFields from "./InputFields";

export default function FormModal() {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const { openFormModal, handleFormModalClose, meetingData, handleMeetingRequestSubmit, handleModifyDate } = useContext(DataContext)
    return (
        <Dialog
            open={openFormModal}
            onClose={handleFormModalClose}
            PaperProps={{
                sx: {
                    borderRadius: "16px",
                    maxWidth: "1000px",
                }
            }}
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6">Schedule a Call</Typography>
                <IconButton onClick={handleFormModalClose}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px", }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <Typography variant="body2">{meetingData.date}  {meetingData.timeSlot}</Typography>
                        <Button variant="soft" size="small" onClick={handleModifyDate}>Change</Button>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Location />
                        <Typography variant="body2" color="text.secondary">Google Meet</Typography>
                    </Box>
                </Box>
                <InputFields />
            </DialogContent>
            <DialogActions sx={{ padding:forBelow767 ? "8px 16px" : "16px 24px", borderTop: "1px solid rgba(145,158,171,0.48)" }}>
                <Button onClick={handleFormModalClose} variant="outlined" color="inherit">Cancel</Button>
                <Button onClick={handleMeetingRequestSubmit} variant="contained" color="primary">Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}
