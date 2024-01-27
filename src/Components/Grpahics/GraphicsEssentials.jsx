import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

export default function GraphicsEssentials() {
    const forBelow999 = useMediaQuery("(max-width:999px)");

    const ContainerSx = {
        paddingTop: forBelow999 ? "40px" : "64px",
        paddingBottom: forBelow999 ? "40px" : "64px",
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(145, 142, 175, 0.24)"
    }
    const InfoSx = {
        display: "flex",
        padding: "40px 24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        alignSelf: "stretch"
    }

    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={ContentSx}>
                        <Box sx={InfoSx}>
                            <Typography variant="h3">Next generation of logo’s</Typography>
                            <Typography variant="body1" color="text.secondary">Create professional designs, videos and social posts no matter your skill level. Choose from thousands of smart templates to edit within your browser</Typography>
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <img src="https://i.ibb.co/0sQwwcz/logo.webp" style={{ width: "100%" }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={ContentSx}>
                        <Box sx={InfoSx}>
                            <Typography variant="h3">High-quality infographics</Typography>
                            <Typography variant="body1" color="text.secondary">Create professional designs, videos and social posts no matter your skill level. Choose from thousands of smart templates to edit within your browser</Typography>
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <img src="https://i.ibb.co/NrRLK0Z/infographics.webp" style={{ width: "100%" }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
