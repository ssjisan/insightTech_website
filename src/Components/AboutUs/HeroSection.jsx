import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../../Components/Common/PageChip"
export default function HeroSection() {
    const forBelow999 = useMediaQuery("(max-width:999px)");

    const ContainerSx = {
        paddingTop: "120px",
        paddingBottom: forBelow999 ? "64px" : "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:"64px",
        flexDirection: 'column'
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
    }

    return (
        <Container sx={ContainerSx}>
            <Box sx={ContentSx}>
                <PageChip label="ABOUT US" />
                <Typography variant="h2" sx={{ textAlign: "center" }}>We are Creative Designers, Insightful Strategists, and Exceptional Engineers</Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
                <img src="about_us/cover.png" alt="" style={{ objectFit: "cover", width:"100%" }} />
            </Box>
        </Container>
    )
}
