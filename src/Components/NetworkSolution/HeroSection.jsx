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
        gap: "120px",
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
                <PageChip label="Network Solutions" />
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    Elevating <Box component="span" sx={{ color: "#00AE60" }}>Connectivity</Box> Empowering Your <Box component="span" sx={{ color: "#00AE60" }}>Network</Box>
                </Typography>
            </Box>
            <Box sx={{ maxWidth: "780px", width: "100%" }}>
                <img src="https://i.ibb.co/h1PxKxv/Hero-Image.webp" alt="" style={{ objectFit: "cover", width: "100%" }} />
            </Box>
        </Container>
    )
}

