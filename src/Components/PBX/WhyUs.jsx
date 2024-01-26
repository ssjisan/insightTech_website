import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import { PbxWhy } from "../../Assets/PbxWhy";

export default function WhyUs() {
    const forBelow899 = useMediaQuery("(max-width:999px)");
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const ContainerSx = {
        paddingTop: forBelow899 ? "40px" : "64px",
        paddingBottom: forBelow899 ? "40px" : "64px",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "flex-start",
        // alignContent: "flex-start",
        // flexDirection: 'column',
        // gap: "40px 24px",
        // flexWrap: "wrap"
    }

    const ContentSx = {
        display: "flex",
        paddingTop: "40px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px"
    }
    const BoxSx = {
        display: "flex",
        padding: forBelow767 ? "12px":"24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px"
    }

    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={ContentSx}>
                        <PageChip label="Why Us?" />
                        <Typography variant="h3">Benefits of an IP PBX Solution from InsightTech</Typography>
                        <Typography variant="body1" color="text.secondary">At our core is a distinctive approach that sets us apart. We&lsquo;re committed to crafting digital excellence, navigating the landscape with precision and innovation. It&lsquo;s not just what we do; it&lsquo;s how we do it—ensuring every project reflects our dedication to excellence and passion for digital craftsmanship</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden", }}>
                        <img src="PBX/whyus.webp" style={{ objectFit: "cover", width: "100%" }} alt="why us?" />
                    </Box>
                </Grid>
                {
                    PbxWhy.map((data) => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} key={data.id}>
                                <Box sx={BoxSx}>
                                    <Typography variant="h4">{data.title}</Typography>
                                    <Typography variant="body1" color="text.secondary">{data.subTitle}</Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}