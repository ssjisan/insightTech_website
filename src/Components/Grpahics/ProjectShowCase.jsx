import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import ProjectShowSlider from "../Common/ProjectShowSlider";
import ProjectShowSliderReverse from "../Common/ProjectShowSliderReverse";

export default function ProjectShowCase() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const forBelow599 = useMediaQuery("(max-width:599px)");

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
        <Box>
            <Container sx={ContainerSx}>
                <Box sx={ContentSx}>
                    <PageChip label="Best Projects" />
                    <Typography variant="h3" sx={{ textAlign: "center" }}>Delight customers with great conversations.</Typography>
                </Box>
            </Container>
            <ProjectShowSlider/>
            {
                !forBelow599 && <ProjectShowSliderReverse/>
            }
        </Box>
    )
}
// 