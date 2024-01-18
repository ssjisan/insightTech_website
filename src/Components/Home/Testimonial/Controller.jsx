import { Box, Typography } from "@mui/material";
import { LeftArrow, RightArrow } from "../../../Assets/IconSet";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";

export default function Controller() {
    const { nextSlide, prevSlide } = useContext(DataContext)
    const ControllerContainerSx = {
        display: "flex",
        height: "400px",
        padding: "24px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderRadius: "16px",
        background: "#F5FBF9"
    }
    const ContentContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch"
    }

    const ChipSx = {
        display: "flex",
        padding: "10px 20px",
        alignItems: "flex-start",
        gap: "10px",
        borderRadius: "100px",
        background: "rgba(10, 37, 63, 0.05)"
    }
    const ControllerSx = { 
        display: "flex", 
        alignItems: "flex-start", 
        gap: "10px" 
    }
    const ArrowBoxSx = {
        display: "flex",
        width: "40px",
        height: "40px",
        padding: "8px",
        alignItems: "flex-start",
        gap: "10px"
    }

    return (
        <Box sx={ControllerContainerSx}>
            <Box sx={ContentContainerSx}>
                <Box sx={ChipSx}>
                    <Typography variant="body2">Client Testimonials</Typography>
                </Box>
                <Typography variant="h3">Insight Impact in Real <Box component="span" sx={{color:"#00AE60"}}>Stories</Box></Typography>
            </Box>
            <Box sx={ControllerSx}>
                <Box sx={ArrowBoxSx} onClick={nextSlide}>
                    <LeftArrow />
                </Box>
                <Box sx={ArrowBoxSx} onClick={prevSlide}>
                    <RightArrow />
                </Box>
            </Box>
        </Box>
    )
}
