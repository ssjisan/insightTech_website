import { Box, Grid, Typography, useMediaQuery, } from "@mui/material";
import { services } from "../../../Layout/Navbar/NavConfig"
import { Link } from "react-router-dom";
import { useState } from "react";

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
    const linkStyle = {
        textDecoration: "none",
        color: "#031E21"
    };
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
        }
    }
    const IconSx = {
        display: "flex",
        width: "64px",
        height: "64px",
        padding: "12px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "12px",
        transition: "all .35s ease-in-out",
        border: "1px solid var #F3F3F3",

    }
    const ContentSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px"
    }


    // Configure Style Start

    return (
        <Grid container spacing={2}>
            {services.map((data) => {
                return (
                    <Grid item sx={12} sm={6} lg={[1, 2, 6, 7].includes(data.id) ? 6 : 4} key={data.id}>
                        <Link to={data.link} style={linkStyle}>
                            <Box sx={CardSx} onMouseEnter={() => handleMouseEnter(data.id)} onMouseLeave={handleMouseLeave}>
                                <Box sx={{
                                    ...IconSx, 
                                    background: hoveredId === data.id ? "linear-gradient(161deg, #00AE60 -1.7%, #00AE60 -1.7%, #00CB70 -1.69%, #009050 97.75%)" : "linear-gradient(161deg, #E5E4EC -1.7%, #F3F3F3 -1.69%, #C8C8C8 97.75%)", 
                                }}>
                                    {hoveredId === data.id ? data.iconHover : data.iconDefault}
                                </Box>
                                <Box sx={ContentSx}>
                                    <Typography variant="h4">{data.title}</Typography>
                                    <Typography variant="body1" color="text.secondary">{data.subTitle}</Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                )
            })}
        </Grid >
    )
}
