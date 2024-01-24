import { Box, Container, Grid, Typography } from "@mui/material";
import PageChip from "../Common/PageChip";
import TechnologyCard from "./TechnologyCard";

export default function Technology() {
    const ContainerSx = {
        display: "flex",
        padding: "40px 16px",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "24px"
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px"
    }

    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Box sx={ContentSx}>
                        <PageChip label="Technology" />
                        <Typography variant="h3">Crafting the Future with Our Essential Tools</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TechnologyCard />
                </Grid>
            </Grid>
        </Container>
    )
}
