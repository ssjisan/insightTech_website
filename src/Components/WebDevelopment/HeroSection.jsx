import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../../Components/Common/PageChip"
export default function HeroSection() {
    const forBelow999 = useMediaQuery("(max-width:999px)");

    const ContainerSx = {
        paddingTop: forBelow999 ? "80px" : "120px",
        paddingBottom: forBelow999 ? "64px" : "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "64px",
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
                <PageChip label="Web Development" />
                <Typography variant="h1" sx={{ textAlign: "center" }}>Not Just an Another <Box component="span" sx={{ color: "#00AE60" }}>SASS</Box> product.</Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
                <img src="web_development/hero.png" alt="" style={{ objectFit: "cover", width: "100%" }} />
            </Box>
        </Container>
    )
}
