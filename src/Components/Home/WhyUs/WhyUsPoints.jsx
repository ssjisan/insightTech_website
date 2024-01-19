import { Box, Grid, Typography } from "@mui/material";
import { quality } from "../../../Assets/WhyUs"
export default function WhyUsPoints() {
    const PointSx = {
        display: "flex",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flex: "1 0 0",
        borderRadius: "100px",
        border: "1px solid rgba(145, 142, 175, 0.24)",
        background: "#FFF"
    }

    const IconSx = {
        display: "flex",
        width: "60px",
        height: "60px",
        padding: "14px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "30px",
        background: "var(--Grey-Light, #F3F3F3)"
    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: "1 0 0"
    }
    return (
        <Grid container spacing={2}>
            {
                quality.map((data) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={data.id}>
                            <Box sx={PointSx}>
                                <Box sx={IconSx}>
                                    {data.icon}
                                </Box>
                                <Box sx={ContentSx}>
                                    <Typography variant="h6">{data.title}</Typography>
                                    <Typography variant="subtitle12" color="text.secondary">{data.subTitle}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
