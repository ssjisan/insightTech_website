import { Box, TextField, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function InputFields() {
    const {formData,handleChange } = useContext(DataContext)
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: forBelow767 ? "24px" : "40px",
        width: "100%"
    }
   
    return (
        <Box sx={ContainerSx}>
            <TextField
                id="name"
                label="Your Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                id="email"
                label="Your Email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                id="phone"
                label="Your Phone"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                id="company"
                label="Your Company"
                variant="outlined"
                fullWidth
                value={formData.company}
                onChange={handleChange}
            />
            <TextField
                id="position"
                label="Your Position"
                variant="outlined"
                fullWidth
                value={formData.position}
                onChange={handleChange}
            />
            <TextField
                id="projectBrief"
                label="Project Brief"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.projectBrief}
                onChange={handleChange}
            />
        </Box>
    )
}
