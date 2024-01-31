import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import { QualityData } from "../../Assets/QualityData"
export default function Quality() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const ContainerSx = {
        paddingTop: forBelow767 ? "40px" : "64px",
        paddingBottom: forBelow767 ? "40px" : "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "64px",
        flexDirection: 'column'
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        maxWidth: "720px",
        width: "100%"
    }
    const CardSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px"
    }

    return (
        <Container sx={ContainerSx}>
            <Box sx={ContentSx}>
                <PageChip label="Process" />
                <Typography variant="h2" sx={{ textAlign: "center" }}>We are committed to achieve extraordinary results</Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    QualityData.map((data) => {
                        return (
                            <Grid item xs={12} sm={12} md={4} lg={4} key={data.id} sx={{}}>
                                <Box sx={{ ...CardSx, paddingTop: (data.id === 2 && (forBelow899 ? "40px" : "80px")) || (data.id === 3 && (forBelow899 ? "40px" : "280px")) }}>
                                    {!(data.id === 1) &&
                                        <Box sx={{ width: forBelow899 ? "100%" : "190px", display: "flex", justifyContent: "center" }}>
                                            <img src="https://i.ibb.co/z7NJp7d/illustration.png" width="190px" style={{ transform: forBelow899 && data.id === 3 ? "scaleX(-1)" : "scaleX(1)" }} />
                                        </Box>
                                    }
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: forBelow899 && "center", gap: "8px" }}>
                                        <Typography variant="h4" sx={{ width: "260px" }}>{data.title}</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ textAlign: forBelow899 && "center" }}>{data.subtitle}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}
