import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import { VideographyServices } from "../../../Assets/ServicesCategory/VideographyServices";

export default function ServiceCard() {
    const forBelow787 = useMediaQuery("(max-width:787px)");
    const [hoveredId, setHoveredId] = useState(null);
    const { goToTop } = useContext(DataContext)
    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };
    // Configure Style Start

    const CardSx = {
        display: "flex",
        padding: forBelow787 ? "20px 12px" : "40px 24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "30px",
        borderRadius: "20px",
        border: "1px solid rgba(145, 142, 175, 0.24)",
        transition: "all .35s ease-in-out",
        "&:hover": {
            border: "1px solid #00AE60",
            boxShadow: "0px 8px 24px 0px rgba(0, 174, 96, 0.16)",
        },
    }
    const SpanSx = {
        fontSize: "72px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "80px",
        transition: "all .35s ease-in-out",

    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px"
    }
    const ReminderCardSx = {
        display: "flex",
        padding: "40px 24px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderRadius: "20px",
        border: "1px solid rgba(145, 142, 175, 0.24)",
        background: "linear-gradient(99deg, #00A76F 0%, #007867 100.7%)",
        alignSelf: "stretch",
        height: "100%"
    }
    const ButtonSx = {
        width: "142px",
        borderRadius: "8px",
        background: "#FFF",
        color: "#000",
        "&:hover": {
            background: "#FFF",
            boxShadow: "0px 8px 16px 0px rgba(255, 255, 255, 0.24)"
        }
    }
    // Configure Style Start

    return (
        <Grid container spacing={2}>
            {VideographyServices.map((data) => {
                return (
                    <Grid item xs={12} sm={6} lg={4} key={data.id}>
                        <Box sx={CardSx} onMouseEnter={() => handleMouseEnter(data.id)}
                            onMouseLeave={handleMouseLeave}>
                            <Box component="span" sx={{
                                ...SpanSx, color: data.id === hoveredId ? '#00AE60' : "rgba(145, 142, 175, 0.24)",
                            }}>
                                {data.id}
                            </Box>
                            <Box sx={ContentSx}>
                                <Typography variant="h4">{data.title}</Typography>
                                <Typography variant="body1" color="text.secondary">{data.subTitle}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                )
            })}
            <Grid item xs={12} sm={6} lg={4} >
                <Box sx={ReminderCardSx}>
                    <Typography variant="h4" sx={{color:"#FFF"}}>Your Brand and Our Excellence</Typography>
                    <Link to="/contact_us">
                        <Button sx={ButtonSx} onClick={goToTop}>Start a Project</Button>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}
