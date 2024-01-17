import { Box, Typography } from "@mui/material"

export default function OtherLinks() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        flexShrink: "0"
    }
    const LinkSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px"
    }
    return (
        <Box sx={ContainerSx}>
            <Typography variant="subtitle1" color="text.secondary">Company</Typography>
            <Box sx={LinkSx}>
                <Typography variant="subtitle1" sx={{ color: "#fff" }}>Home</Typography>
                <Typography variant="subtitle1" sx={{ color: "#fff" }}>About Us</Typography>
                <Typography variant="subtitle1" sx={{ color: "#fff" }}>Blog</Typography>
                <Typography variant="subtitle1" sx={{ color: "#fff" }}>Contact Us</Typography>
            </Box>
        </Box>
    )
}
