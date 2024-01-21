import { Box, Typography } from "@mui/material";
import PageChip from "../../Common/PageChip";

export default function ContentHeader() {
    const ContentContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        alignSelf: "stretch",
        width: "100%"
    }


    return (
        <Box sx={ContentContainerSx}>
            <PageChip label="Client Testimonials" />
            <Typography variant="h3">Insight Impact in Real <Box component="span" sx={{ color: "#00AE60" }}>Stories</Box></Typography>
        </Box>
    )
}
