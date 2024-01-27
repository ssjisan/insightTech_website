import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import { VideographyProjects } from "../../Assets/Projects/VideographyProjects";
import { Link } from "react-router-dom";

export default function Projects() {
    const forBelow899 = useMediaQuery("(max-width:899px)");

    const ContainerSx = {
        paddingTop: forBelow899 ? "40px" : "64px",
        paddingBottom: forBelow899 ? "40px" : "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        gap: "64px"
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth:"460px",
        width:"100%",
        gap: "16px"
    }
    return (
        <Container sx={ContainerSx}>
            <Box sx={ContentSx}>
                <PageChip label="Best Projects" />
                <Typography variant="h3" sx={{textAlign:"center"}}>Delight customers with great conversations.</Typography>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    {
                        VideographyProjects.map((data) => {
                            return (
                                <Grid item xs={12} sm={[5].includes(data.id) ? 12 : 6} md={[1, 2].includes(data.id) ? 6 : 4} lg={[1, 2].includes(data.id) ? 6 : 4} key={data.id}>
                                    <Box sx={{ width: "100%", height:"300px", overflow:"hidden", borderRadius:"16px"}}>
                                        <img src={data.link} style={{ objectFit: "cover", width: "100%",height:"300px", }} alt={data.title} />
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Link to="/contact_us">
                    <Button variant="contained" sx={{width:"220px"}}>Start a Project</Button>
            </Link>
        </Container>
    )
}
// 