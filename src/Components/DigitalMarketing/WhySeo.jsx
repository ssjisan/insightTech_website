import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import BulletPoint from "../Common/BulletPoint";
import PageChip from "../Common/PageChip";
export default function WhySeo() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const Points = ["Sponsored Content", "Sponsored Content", "Sponsored Content", "Sponsored Content"];
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
                    <Box sx={ContentSx}>
                        <Box sx={HeaderSx}>
                            <PageChip label="WHY SEO?" />
                            <Typography variant="h3">Power Up Your Social Confirmation and Lift Up Your Sales</Typography>
                            <Typography variant="body1" color="text.secondary">At our core is a distinctive approach that sets us apart. We&lsquo;re committed to crafting digital excellence, navigating the landscape with precision and innovation. It&lsquo;s not just what we do; it&lsquo;s how we do it—ensuring every project reflects our dedication to excellence and passion for digital craftsmanship</Typography>
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
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{ width: "100%" }}>
                        <img src="https://i.ibb.co/V9HPSb8/whySeo.webp" alt="Social Media" style={{ objectFit: "cover", width: "100%" }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
