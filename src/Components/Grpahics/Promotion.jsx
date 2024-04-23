import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";

export default function Promotion() {
    const forBelow899 = useMediaQuery("(max-width:899px)");

    const ContainerSx = {
        paddingTop: forBelow899 ? "40px" : "64px",
        paddingBottom: forBelow899 ? "40px" : "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        gap: "64px"
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "460px",
        width: "100%",
        gap: "16px"
    }
    return (
        <Container sx={ContainerSx}>
            <Box sx={ContentSx}>
                <PageChip label="Why Brand Identity" />
                <Typography variant="h3" sx={{ textAlign: "center" }}>Deciphering Brand Identity: Your Business&lsquo;s Essence</Typography>
            </Box>
            <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}>
                <img src="/images/graphics/event.webp" alt="" style={{ objectFit: "cover", width: "100%" }} />
            </Box>
        </Container>
    )
}
// 