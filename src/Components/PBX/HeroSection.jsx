import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip"
import { Link } from "react-router-dom";
export default function HeroSection() {
    //eslint-disable-next-line
    const forBelow999 = useMediaQuery("(max-width:999px)");
    const forBelow899 = useMediaQuery("(max-width:899px)");

    const ContainerSx = {
        paddingTop: forBelow899 ? "80px" : "160px",
        paddingBottom: forBelow899 ? "64px" : "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    }
    const HeroSectionContentSx = {
        display: "flex",
        paddingTop: "40px",
        flexDirection: "column",
        alignItems: forBelow899 ? "center" : "flex-start",
        gap: "64px",
        flexShrink: 0
    }

    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: forBelow899 ? "center" : "flex-start",
        gap: "16px"
    }
    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={forBelow899 ? 5 :2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={HeroSectionContentSx}>
                        <Box sx={ContentSx}>
                            <PageChip label="PBX" />
                            <Typography variant="h2" sx={{ textAlign: forBelow899 && "center" }}>The phone system solution every business needs</Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ textAlign: forBelow899 && "center" }}>Boost your team productivity and customer satisfaction with our all-in-one app, featuring built-in call center capabilities.</Typography>
                        </Box>
                        <Link to="/contact_us"><Button variant="contained" sx={{ width: "220px" }}>Start a Project</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ width: "100%" }}>
                        <img src="PBX/hero.png" alt="Hero Section" style={{ objectFit: "cover", width: "100%" }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
