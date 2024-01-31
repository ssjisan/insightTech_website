import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function NeedWebsite() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const forBelow599 = useMediaQuery("(max-width:599px)");
    const forBelow999 = useMediaQuery("(max-width:999px)");
    const {goToTop} = useContext(DataContext)
    // Configure Style Start

    const ContainerSx = {
        paddingTop: forBelow999 ? "40px" : "64px",
        paddingBottom: forBelow999 ? "40px" : "64px",
    }
    const ContentContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "64px",
        flex: "1 0 0"
    }
    const TitleContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: forBelow599 ? "center" : "flex-start",
        gap: "24px",
        alignSelf: "stretch"
    }
    const TextSx = {
        textAlign: forBelow599 && "center"
    }
    // Configure Style End

    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={forBelow599 ? 3 : 2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={ContentContainerSx}>
                        <Box sx={TitleContainerSx}>
                            <PageChip label="Looking for a website?" />
                            <Typography variant="h3" sx={TextSx}>Ready for Your Own Website? Let&lsquo;s Bring Your Vision to Life!</Typography>
                            <Typography variant="body1" color="text.secondary" sx={TextSx}>Unlock the Power of Online Presence with Our Custom Website Development Services. From Concept to Launch, We&lsquo;ll Build a Website that Reflects Your Brand, Engages Your Audience, and Drives Results.</Typography>
                        </Box>
                        {!forBelow899 &&
                            <Link to="/contact_us"><Button variant="contained" size="large" sx={{ width: "220px" }} onClick={goToTop}>Start a Project</Button></Link>
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                        <img src="https://i.ibb.co/mvBrvCR/sample.webp" style={{ width: "100%", objectFit: "contain", height: forBelow599 && "310px" }} />
                    </Box>
                </Grid>
                {forBelow899 &&
                    <Grid item xs={12} sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Link to="/contact_us"><Button variant="contained" size="large" sx={{ width: "220px" }}>Start a Project</Button></Link>
                    </Grid>
                }
            </Grid>
        </Container>
    )
}
