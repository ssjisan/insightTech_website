import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {  useState } from "react";
import { NetworkSolutions } from "../../../Assets/ServicesCategory/NetworkSolutions";

export default function ServiceCard() {
    const forBelow787 = useMediaQuery("(max-width:787px)");
    const [hoveredId, setHoveredId] = useState(null);
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

    // Configure Style Start

    return (
        <Grid container spacing={3}>
            {NetworkSolutions.map((data) => {
                return (
                    <Grid item xs={12} sm={6} lg={[1,2].includes(data.id) ? 6 : 4} key={data.id}>
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
        </Grid>
    )
}
