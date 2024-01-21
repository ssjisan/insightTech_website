import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import WhyUsPoints from "./WhyUsPoints";
import PageChip from "../../Common/PageChip";

export default function WhyUs() {
    const forBelow999 = useMediaQuery("(max-width:999px)");

    // Configure Style Start
    const ContainerSx = {
        paddingTop: forBelow999 ? "40px" : "64px",
        paddingBottom: forBelow999 ? "40px" : "64px",
    }
    const MainBox = {
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        alignItems: "center"
    }
    const ContentContainerSx = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center"
    }

    const TitleContainerSx = {
        maxWidth: "586px",
        width: "100%",
        textAlign: "center"
    }

    return (
        <Container sx={ContainerSx}>
            <Box sx={MainBox}>
                <Box sx={ContentContainerSx}>
                    <PageChip label="Why US" />
                    <Typography variant="h2" sx={TitleContainerSx}>Unlocking Excellence through Our  <Box component="span" sx={{ color: "#00AE60" }}>Core Values</Box></Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ textAlign: "center" }}> Embark on a Journey of Tech Innovation, Strategic Insight, Global Impact, Delightful Experiences, Uncompromising Quality, and Pursuit of Perfection.</Typography>
                </Box>
                <WhyUsPoints />
            </Box >
        </Container >
    )
}
