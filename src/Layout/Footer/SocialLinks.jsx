import { Box, Typography } from "@mui/material";

export default function SocialLinks() {
    const BoxSx = {
        display: "flex",
        alignItems: "center",
        gap: "24px"
    }
    return (
        <Box sx={BoxSx}>
            <Typography variant="subtitle1" sx={{ color: "#fff" }}>Terms</Typography>
            <Typography variant="subtitle1" sx={{ color: "#fff" }}>Policies</Typography>
        </Box>
    )
}
