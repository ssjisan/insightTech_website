import { Container, Grid, useMediaQuery } from "@mui/material";
import Controller from "./Controller";
import TestimonialSlider from "./TestimonialSlider";
import ContentHeader from "./ContentHeader";
import ArrowGroup from "./ArrowGroup";

export default function Testimonial() {
    const forBelow899px = useMediaQuery("(max-width:899px)");

    const ContainerSx = {
        paddingTop: "64px",
        paddingBottom: "64px",
    }

    const GridSx = {
        marginTop: forBelow899px && "40px",
        marginBottom: forBelow899px && "40px",
        display:"flex",
        justifyContent:"center"
    }
    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={2}>
                {forBelow899px &&
                    <Grid sx={{ width: "100%" }}>
                        <ContentHeader />
                    </Grid>
                }
                {!forBelow899px &&
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Controller />
                    </Grid>
                }
                <Grid item xs={12} sm={12} md={8} lg={8} sx={GridSx}>
                    <TestimonialSlider />
                </Grid>
                {forBelow899px &&
                    <Grid sx={{ width: "100%" }}>
                        <ArrowGroup />
                    </Grid>
                }
            </Grid>
        </Container>
    )
}
