import { Box, Typography } from "@mui/material"

export default function RequestProject() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        flexShrink: "0"
    }
    return (
        <Box sx={ContainerSx}>
            <Typography variant="subtitle1" color="text.secondary">Request a Quote</Typography>
            <Typography variant="subtitle1" sx={{ color: "#fff" }}>Got a project? <br /> Let`s talk </Typography>
        </Box>
    )
}
