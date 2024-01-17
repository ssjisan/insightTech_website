import { Box, Grid, Typography } from "@mui/material";
import { services } from "../../../Layout/Navbar/NavConfig"

export default function ServiceCard() {
    return (
        <Grid container spacing={2}>
            {services.map((data) => {
                return (
                    <Grid item sx={12} sm={6} lg={[1, 2, 6, 7].includes(data.id) ? 6 : 4} key={data.id}>
                        <Box sx={{
                            display: "flex",
                            padding: "40px 24px",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "30px",
                            borderRadius: "20px",
                            border: "1px solid rgba(145, 142, 175, 0.24)",
                            transition: "all .35s ease-in-out",
                            "&:hover": {
                                border: "1px solid #00AE60",
                                boxShadow: "0px 8px 24px 0px rgba(0, 174, 96, 0.16)",
                            }
                        }}>
                            <Box sx={{
                                display: "flex",
                                width: "64px",
                                height: "64px",
                                padding: "12px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                borderRadius: "12px",
                                border: "1px solid var(--Grey-Light, #F3F3F3)",
                                background: "linear-gradient(161deg, #E5E4EC -1.7%, #F3F3F3 -1.69%, #C8C8C8 97.75%)",
                            }}>
                                {data.icon}
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "12px"
                            }}>
                                <Typography variant="h4">{data.title}</Typography>
                                <Typography variant="body1" color="text.secondary">{data.subTitle}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                )
            })}
        </Grid>
    )
}
