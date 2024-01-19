import { Container, Grid, useMediaQuery } from "@mui/material";
import Controller from "./Controller";
import TestimonialSlider from "./TestimonialSlider";
import ContentHeader from "./ContentHeader";
import ArrowGroup from "./ArrowGroup";

export default function Testimonial() {
    const forBelow899 = useMediaQuery("(max-width:899px)");
    const forBelow999 = useMediaQuery("(max-width:899px)");

    const ContainerSx = {
        paddingTop: forBelow999 ? "40px" : "64px",
        paddingBottom: forBelow999 ? "40px" : "64px",
    }

    const GridSx = {
        marginTop: forBelow899 && "40px",
        marginBottom: forBelow899 && "40px",
        display: "flex",
        justifyContent: "center"
    }
    return (
        <Container sx={ContainerSx}>
            <Grid container spacing={2}>
                {forBelow899 &&
                    <Grid sx={{ width: "100%" }}>
                        <ContentHeader />
                    </Grid>
                }
                {!forBelow899 &&
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Controller />
                    </Grid>
                }
                <Grid item xs={12} sm={12} md={8} lg={8} sx={GridSx}>
                    <TestimonialSlider />
                </Grid>
                {forBelow899 &&
                    <Grid sx={{ width: "100%" }}>
                        <ArrowGroup />
                    </Grid>
                }
            </Grid>
        </Container>
    )
}
