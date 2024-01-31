import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import RandomBlog from "./RandomBlog";
import FoucsBlog from "./FoucsBlog";
import PageChip from "../../Common/PageChip";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import { Link } from "react-router-dom";

export default function Blog() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const forBelow999 = useMediaQuery("(max-width:999px)");
    const { goToTop } = useContext(DataContext)
    const ContainerSx = {
        paddingTop: forBelow999 ? "40px" : "64px",
        paddingBottom: forBelow999 ? "40px" : "64px",
    }
    const BoxSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "40px",
    }

    const ContentContainerSx = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: forBelow899 ? "center" : "flex-start"
    }
    const TitleContainerSx = {
        maxWidth: "356px",
        width: "100%",
        textAlign: forBelow899 && "center"
    }
    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={BoxSx}>
                        <Box sx={ContentContainerSx}>
                            <PageChip label="Blogs" />
                            <Typography variant="h3" sx={TitleContainerSx}>The <Box component="span" sx={{ color: "#00AE60" }}>Blog</Box> of Insighttech</Typography>
                        </Box>
                        <FoucsBlog />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <RandomBlog />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/blog">
                        <Button variant="contained" color="primary" sx={{ width: "220px", }} onClick={goToTop}>See All</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}
