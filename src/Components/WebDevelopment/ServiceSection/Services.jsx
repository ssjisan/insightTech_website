import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import ServiceCard from "./ServiceCard";
import PageChip from "../../Common/PageChip";

export default function Services() {
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

    // Configure Style End
    return (
        <Container sx={ContainerSx}>
            <Box sx={MainBox}>
                <Box sx={ContentContainerSx}>
                    <PageChip label="What we do" />
                    <Typography variant="h2" sx={TitleContainerSx}>Explore Our Diverse Range of <Box component="span" sx={{ color: "#00AE60" }}>Solutions</Box></Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ textAlign: "center" }}>Crafting Digital Solutions Tailored to Your Unique Business Needs and Goals</Typography>
                </Box>
                <ServiceCard />
            </Box >
        </Container >
    )
}
