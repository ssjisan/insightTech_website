import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip"
import { Call } from "../../Assets/IconSet";

export default function MoreContact() {
    const forBelow999 = useMediaQuery("(max-width:999px)");
    const ContainerSx = {
        paddingTop: forBelow999 ? "40px" : "64px",
        paddingBottom: forBelow999 ? "40px" : "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px"
    }
    const HeaderSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        alignSelf: "stretch"
    }
    const InfoContainerSx = {
        display: "flex",
        padding: "20px 20px",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        borderRadius: "16px",
        border: "1px solid rgba(57, 62, 80, 0.24)"
    }

    return (
        <Container sx={ContainerSx}>
            <Box sx={HeaderSx}>
                <PageChip label="Call" />
                <Typography variant="h2">Need to know more?</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={InfoContainerSx}>
                        <Call />
                        <Typography variant="h4">+880 1914 47 46 61</Typography>
                        <Typography variant="body1" color="text.secondary">Call us for sales related queries</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={InfoContainerSx}>
                        <Call />
                        <Typography variant="h4">+880 1894 68 89 20 - 22</Typography>
                        <Typography variant="body1" color="text.secondary">Call us for sales related queries</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
