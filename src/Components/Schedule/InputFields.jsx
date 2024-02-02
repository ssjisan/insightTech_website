import { Box, TextField, useMediaQuery } from "@mui/material";

export default function InputFields() {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    return (
        <Box sx={{ width: "648px", display: "flex", gap: "16px", flexDirection: "column" }}>
            <TextField
                id="name"
                label="Your Name"
                type="text"
                variant="outlined"
                fullWidth
                required
                size={forBelow767 ? "medium" : "large"}
            />
            <TextField
                id="mail"
                label="Mail"
                type="text"
                variant="outlined"
                fullWidth
                required
                size={forBelow767 ? "medium" : "large"}
            />
            <TextField
                id="mobile"
                label="Mobile"
                type="text"
                variant="outlined"
                fullWidth
                required
                size={forBelow767 ? "medium" : "large"}
            />
            <TextField
                id="projectBrief"
                label="Project Brief"
                variant="outlined"
                type="text"
                fullWidth
                multiline
                rows={4}
            // value={formData.projectBrief}
            // onChange={handleChange}
            />
        </Box>
    )
}
