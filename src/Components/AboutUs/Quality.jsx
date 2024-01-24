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
                <PageChip label="About Us" />
                <Typography variant="h2" sx={{ textAlign: "center" }}>We are committed to achieve extraordinary results</Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    QualityData.map((data) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={data.id} sx={{}}>
                                <Box sx={{...CardSx, paddingTop: (data.id === 2 && "80px") || (data.id === 3 && (forBelow899 ? "40px" : "280px"))}}>
                                    {!(data.id === 1) &&
                                        <Box sx={{width:"190px"}}>
                                            <img src="about_us/illustration.png" width="190px" style={{ transform: forBelow899 && data.id === 3 ? "scaleX(-1)" : "scaleX(1)"}}/>
                                        </Box>
                                    }
                                    <Box>
                                        <Typography variant="h4">Smart but simple solutions.</Typography>
                                        <Typography variant="body1" color="text.secondary">Leverage the wealth of knowledge our team of experts offer with over 10 years of experience delivering excellence in complex digital solutions.</Typography>
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
