import { Box, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function InputFields() {
    const { meetingData, handleMeetingFormField } = useContext(DataContext)

    return (
        <Box sx={{ width: "100%", display: "flex", gap: "16px", flexDirection: "column" }}>
            <TextField
                id="name"
                label="Your Name"
                type="text"
                variant="outlined" 
                fullWidth
                required
                size="small"
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
                size="small"
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
                size="small"
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
