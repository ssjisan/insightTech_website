import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip"
export default function CleanUI() {
    const forBelow999 = useMediaQuery("(max-width:999px)");

    const ContainerSx = {
        paddingTop: forBelow999 ? "40px" : "64px",
        paddingBottom: forBelow999 ? "24px" : "40px",
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
                <PageChip label="User Interfaces" />
                <Typography variant="h2" sx={{ textAlign: "center", maxWidth:"510px", width:"100%"}}>Beautiful, modern and clean user interfaces</Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
                <img src="web_development/clean.png" alt="" style={{ objectFit: "cover", width:"100%" }} />
            </Box>
        </Container>
    )
}
