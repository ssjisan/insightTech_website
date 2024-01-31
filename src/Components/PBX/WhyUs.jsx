import { Box, Container, Grid, Skeleton, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import { PbxWhy } from "../../Assets/PbxWhy";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function WhyUs() {
    const forBelow899 = useMediaQuery("(max-width:999px)");
    const forBelow767 = useMediaQuery("(max-width:767px)");
    const { handleLoad, loaded } = useContext(DataContext)

    const ContainerSx = {
        paddingTop: forBelow899 ? "40px" : "64px",
        paddingBottom: forBelow899 ? "40px" : "64px",
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
        padding: forBelow767 ? "12px" : "24px",
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
                        <Typography variant="body1" color="text.secondary">InsightTech&lsquo;s Trusted PBX Solutions Deliver Precision, Innovation, and Seamless Integration, Empowering Clients with Reliable and Efficient Communication Infrastructure.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden", }}>
                        {!loaded && (
                            <Skeleton variant="rectangular" animation="wave" width="100%" height={400} />
                        )}
                        <img src="https://i.ibb.co/zsWNqcd/whyus.webp" style={{ objectFit: "cover", width: "100%" }} alt="why us?" onLoad={handleLoad} />
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