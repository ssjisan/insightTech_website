import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import WhyUsPoints from "./WhyUsPoints";

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
    const ChipSx = {
        display: "flex",
        padding: "10px 20px",
        alignItems: "flex-start",
        gap: "10px",
        borderRadius: "100px",
        background: "rgba(10, 37, 63, 0.05)"
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
                    <Box sx={ChipSx}>
                        <Typography variant="body2">Why us</Typography>
                    </Box>
                    <Typography variant="h2" sx={TitleContainerSx}>Unlocking Excellence through Our  <Box component="span" sx={{ color: "#00AE60" }}>Core Values</Box></Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ textAlign: "center" }}> Embark on a Journey of Tech Innovation, Strategic Insight, Global Impact, Delightful Experiences, Uncompromising Quality, and Pursuit of Perfection.</Typography>
                </Box>
                <WhyUsPoints />
            </Box >
        </Container >
    )
}
