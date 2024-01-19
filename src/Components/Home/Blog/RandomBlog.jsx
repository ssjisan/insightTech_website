import { useContext } from "react"
import { DataContext } from "../../../DataProcessing/DataProcessing"
import { Box, Grid, Typography, useMediaQuery } from "@mui/material"

export default function RandomBlog() {
    const { randomBlogs } = useContext(DataContext)
    const forBelow599 = useMediaQuery("(max-width:599px)");
    const forBelow1199 = useMediaQuery("(max-width:1199px)");

    const ImageSx = {
        width: "100%",
        height: forBelow599 ? "260px" : (forBelow1199 ? "160px" : "180px"),
        borderRadius: "20px",
        overflow: "hidden",
    }
    const ContentSx = {
        display: "flex",
        padding: "20px 0px",
        flexDirection: "column",
        gap: forBelow599 && "24px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100%",
        alignSelf: "stretch"
    }
    const BottomSx = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch"
    }

    return (
        <Box>
            {
                randomBlogs.map((data) => {
                    return (
                        <Box key={data.id} sx={{ mb: "24px" }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Box sx={ImageSx}>
                                        <img src={data.image} alt={data.title} width="100%" height="100%" style={{ objectFit: "cover" }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Box sx={ContentSx}>
                                        <Typography variant="h5">{data.title}</Typography>
                                        <Box sx={BottomSx}>
                                            <Typography variant="subtitle2" color="text.secondary">Posted {data.date}</Typography>
                                            <Typography variant="subtitle2" color="text.secondary">{data.readTime}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })
            }
        </Box>
    )
}
