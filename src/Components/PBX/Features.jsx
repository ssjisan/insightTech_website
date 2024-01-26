import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import BulletPoint from "../Common/BulletPoint";
import { PBXFeatures } from "../../Assets/PBXFeatures"
import PageChip from "../Common/PageChip";
export default function Features() {
    const forBelow899 = useMediaQuery("(max-width:899px)");

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
                <Grid item sx={12} sm={5} md={5} lg={5}>
                    <Box sx={ContentSx}>
                        <Box sx={HeaderSx}>
                            <PageChip label="Features" />
                            <Typography variant="h3">Features To Match Your Business Needs</Typography>
                        </Box>
                        <Box sx={PointContainerSx}>
                            {PBXFeatures.map((data) => {
                                return (
                                    <BulletPoint label={data.title} key={data.id} />
                                )
                            })}
                        </Box>
                    </Box>
                </Grid>
                <Grid item sx={12} sm={7} md={7} lg={7}>
                    <Box sx={{ width: "100%" }}>
                        <img src="PBX/feature.webp" alt="Hero Section" style={{ objectFit: "cover", width: "100%" }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
