import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";

export default function Promotion() {
    const forBelow999 = useMediaQuery("(max-width:999px)");
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const forBelow767 = useMediaQuery("(max-width:767px)");
    const forBelow599 = useMediaQuery("(max-width:599px)");
    const forBelow499 = useMediaQuery("(max-width:499px)");

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
                <PageChip label="Event Cover" />
                <Typography variant="h3" sx={{ textAlign: "center" }}>Event Promotion Central: Your Success Gateway</Typography>
            </Box>
            <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden", height:(forBelow499 && "190px") ||(forBelow599 && "240px") ||(forBelow767 && "280px") || (forBelow999 && "380px") || "520px" }}>
                <img src="https://i.ibb.co/D8hGMk2/alozza-ezgif-com-optimize.gif" alt="" style={{ objectFit: "cover", width: "100%" }} />
            </Box>
        </Container>
    )
}
// 