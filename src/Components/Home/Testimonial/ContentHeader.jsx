import { Box, Typography } from "@mui/material";

export default function ContentHeader() {
    const ContentContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        alignSelf: "stretch",
        width: "100%"
    }

    const ChipSx = {
        display: "flex",
        padding: "10px 20px",
        alignItems: "flex-start",
        gap: "10px",
        borderRadius: "100px",
        background: "rgba(10, 37, 63, 0.05)"
    }
    return (
        <Box sx={ContentContainerSx}>
            <Box sx={ChipSx}>
                <Typography variant="body2">Client Testimonials</Typography>
            </Box>
            <Typography variant="h3">Insight Impact in Real <Box component="span" sx={{color:"#00AE60"}}>Stories</Box></Typography>
        </Box>
    )
}
