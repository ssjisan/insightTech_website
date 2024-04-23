import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import BulletPoint from "../Common/BulletPoint";
import PageChip from "../Common/PageChip";
export default function SocialMedia() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const Points =["Targeted Strategies","Engaging Content","Analytics Insights","Community Building"];
    const ContainerSx = {
        paddingTop: forBelow899 ? "40px" : "64px",
        paddingBottom: forBelow899 ? "40px" : "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "40px"
    }

    const HeaderSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px"
    }

    const PointContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px"
    }

    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{ width: "100%" }}>
                        <img src="/images/digital_marketing/seo.webp" alt="Social Media" style={{ objectFit: "cover", width: "100%" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={ContentSx}>
                        <Box sx={HeaderSx}>
                            <PageChip label="Why social media marketing?" />
                            <Typography variant="h3">Unleashing the Power of Social Media Marketing for Your Business</Typography>
                            <Typography variant="body1" color="text.secondary">Elevate Your Brand with Our Expert Social Media Marketing Services. Harness Targeted Strategies, Engaging Content, Analytics Insights, and Community Building to Drive Growth and Maximize ROI in the Digital Landscape.</Typography>
                        </Box>
                        <Box sx={PointContainerSx}>
                            {Points.map((data,index) => {
                                return (
                                    <BulletPoint label={data} key={index} />
                                )
                            })}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
