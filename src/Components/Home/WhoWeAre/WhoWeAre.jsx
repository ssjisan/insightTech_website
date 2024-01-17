import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Matrix from "./Matrix";

export default function WhoWeAre() {
    const forBelow800 = useMediaQuery("(max-width:800px)");
    const forBelow599 = useMediaQuery("(max-width:599px)");

    // Configure Style Start

    const ContainerSx = {
        paddingTop: "64px",
        paddingBottom: "64px",
    }
    const ContentContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "64px",
        flex: "1 0 0"
    }
    const ChipSx = {
        display: "flex",
        padding: "10px 20px",
        borderRadius: "100px",
        background: "rgba(10, 37, 63, 0.05)"
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
                <Grid item xs={12} sm={6} lg={6}>
                    <Box sx={ContentContainerSx}>
                        <Box sx={TitleContainerSx}>
                            <Box sx={ChipSx}>
                                <Typography variant="body2">What We Do</Typography>
                            </Box>
                            <Typography variant="h2" sx={TextSx}>Driving Digital Growth with <Box component="span" sx={{ color: "#00AE60" }}>Innovation</Box> &  <Box component="span" sx={{ color: "#00AE60" }}>Success</Box></Typography>
                            <Typography variant="body1" color="text.secondary" sx={TextSx}>Insighttech Bangladesh accelerates digital growth, offering innovative solutions to optimize business processes and drive efficiency, contributing to a thriving global digital ecosystem.</Typography>
                        </Box>
                        {!forBelow800 &&
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "64px" }}>
                                <Matrix />
                                <Button variant="contained" size="large" sx={{ width: "220px" }}>Learn more about us</Button>
                            </Box>
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Box>
                        <img src="whoweare.png" style={{ width: "100%", objectFit: "contain", height: forBelow599 && "310px" }} />
                    </Box>
                </Grid>
                {forBelow800 &&
                    <Grid item xs={12} sm={12}>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
                            <Matrix />
                            <Button variant="contained" size="large" sx={{ width: "220px" }}>Learn more about us</Button>
                        </Box>
                    </Grid>
                }
            </Grid>
        </Container>
    )
}
