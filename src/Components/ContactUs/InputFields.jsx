import { Box, TextField, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function InputFields() {
    const { formData, handleChange, openAlert } = useContext(DataContext)
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: forBelow767 ? "24px" : "40px",
        width: "100%"
    }
    const InputFieldSx = {
        '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
        '& input[type=number]': {
            '-moz-appearance': 'textfield', /* Firefox */
        },
    }
    const ErrorInputFieldSx = {
        borderRadius: openAlert && "10px", border: openAlert && "1px solid #C22635"
    }
    return (
        <Box sx={ContainerSx}>
            <TextField
                id="name"
                label="Your Name"
                type="text"
                variant="outlined"
                fullWidth
                required
                size={forBelow767 ? "medium" : "large"}
                value={formData.name}
                onChange={handleChange}
                sx={ErrorInputFieldSx}
            />
            <TextField
                id="email"
                label="Your Email"
                variant="outlined"
                type="email"
                required
                fullWidth
                size={forBelow767 ? "medium" : "large"}
                value={formData.email}
                onChange={handleChange}
                sx={ErrorInputFieldSx}
            />
            <TextField
                id="phone"
                label="Your Phone"
                variant="outlined"
                type="number"
                required
                sx={{...InputFieldSx, ...ErrorInputFieldSx}}
                fullWidth
                size={forBelow767 ? "medium" : "large"}
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                id="company"
                label="Your Company"
                variant="outlined"
                type="text"
                fullWidth
                size={forBelow767 ? "medium" : "large"}
                value={formData.company}
                onChange={handleChange}
            />
            <TextField
                id="position"
                label="Your Position"
                variant="outlined"
                type="text"
                fullWidth
                size={forBelow767 ? "medium" : "large"}
                value={formData.position}
                onChange={handleChange}
            />
            <TextField
                id="projectBrief"
                label="Project Brief"
                variant="outlined"
                type="text"
                fullWidth
                multiline
                rows={4}
                value={formData.projectBrief}
                onChange={handleChange}
            />
        </Box>
    )
}
