import { Box, Grid, Typography } from "@mui/material";

export default function Matrix() {
    const CardSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width:"100%"
    }
    return (
        <Grid container spacing={1}>
            <Grid item xs={4} sm={4} lg={4}>
                <Box sx={CardSx}>
                    <Typography variant="h2">2020</Typography>
                    <Typography variant="subtitle1" color="text.secondary">Founded</Typography>
                </Box>
            </Grid>
            <Grid item xs={4} sm={4} lg={4}>
                <Box sx={CardSx}>
                    <Typography variant="h2">30+</Typography>
                    <Typography variant="subtitle1" color="text.secondary">Services</Typography>
                </Box>
            </Grid>
            <Grid item xs={4} sm={4} lg={4}>
                <Box sx={CardSx}>
                    <Typography variant="h2">25</Typography>
                    <Typography variant="subtitle1" color="text.secondary">Happy Clients</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
