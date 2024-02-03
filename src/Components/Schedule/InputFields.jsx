import { Box, TextField, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function InputFields() {
    const forBelow767 = useMediaQuery("(max-width:767px)");
    const { meetingData, handleMeetingFormField } = useContext(DataContext)

    return (
        <Box sx={{ maxWidth: "648px", width:"100%", display: "flex", gap: "16px", flexDirection: "column" }}>
            <TextField
                id="name"
                label="Your Name"
                type="text"
                variant="outlined"
                fullWidth
                required
                size={forBelow767 ? "medium" : "large"}
                value={meetingData.name}
                onChange={handleMeetingFormField}
            />
            <TextField
                id="email"
                label="Mail"
                type="mail"
                variant="outlined"
                fullWidth
                required
                size={forBelow767 ? "medium" : "large"}
                value={meetingData.email}
                onChange={handleMeetingFormField}
            />
            <TextField
                id="phone"
                label="Phone"
                type="number"
                variant="outlined"
                fullWidth
                required
                size={forBelow767 ? "medium" : "large"}
                value={meetingData.phone}
                onChange={handleMeetingFormField}
            />
            <TextField
                id="brief"
                label="Brief"
                variant="outlined"
                type="text"
                fullWidth
                multiline
                rows={4}
                value={meetingData.brief}
                onChange={handleMeetingFormField}
            />
        </Box>
    )
}
