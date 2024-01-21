import { Box, TextField } from "@mui/material";

export default function InputFields() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        width: "100%"
    }

    return (
        <Box sx={ContainerSx}>
            <TextField id="outlined-basic" label="Your Name" variant="outlined" fullWidth />
            <TextField id="outlined-basic" label="Your Email" variant="outlined" fullWidth />
            <TextField id="outlined-basic" label="Your Phone" variant="outlined" fullWidth />
            <TextField id="outlined-basic" label="Your Company" variant="outlined" fullWidth />
            <TextField id="outlined-basic" label="Your Position" variant="outlined" fullWidth />
            <TextField id="outlined-basic" label="Project Brief" variant="outlined" fullWidth multiline
                rows={4} />
        </Box>
    )
}
