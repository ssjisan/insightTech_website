import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { Link } from "react-router-dom";

export default function Promotion() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const { goToTop } = useContext(DataContext);

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
        maxWidth: "620px",
        width: "100%",
        gap: "16px"
    }
    return (
        <Container sx={ContainerSx}>
            <Box sx={ContentSx}>
                <PageChip label="Movie Streaming Solutions" />
                <Typography variant="h3" sx={{ textAlign: "center" }}>Best Streaming Solutions for Elevated Entertainment Experience</Typography>
            </Box>
            <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}>
                <img src="https://i.ibb.co/6H6B51B/FTP.webp" alt="" style={{ objectFit: "cover", width: "100%" }} />
            </Box>
            <Link to="/contact_us">
                <Button variant="contained" sx={{ width: "220px" }} onClick={goToTop}>Request a Demo</Button>
            </Link>
        </Container>
    )
}
// 