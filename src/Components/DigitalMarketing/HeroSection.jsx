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
                <PageChip label="Digital Marketing" />
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    Driving <Box component="span" sx={{ color: "#00AE60" }}>Digital</Box> Success, Boosting Your <Box component="span" sx={{ color: "#00AE60" }}>Brand</Box>.
                </Typography>
            </Box>
            <Box sx={{ maxWidth: "780px", width:"100%"}}>
                <img src="https://i.ibb.co/r4L2972/herosection.webp" alt="" style={{ objectFit: "cover", width: "100%" }} />
            </Box>
        </Container>
    )
}
