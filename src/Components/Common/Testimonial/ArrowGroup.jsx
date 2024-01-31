import { useContext } from "react"
import { DataContext } from "../../../DataProcessing/DataProcessing"
import { Box, IconButton } from "@mui/material"
import { LeftArrow, RightArrow } from "../../../Assets/IconSet"

export default function ArrowGroup() {
    const { nextSlide, prevSlide } = useContext(DataContext)

    const ControllerSx = {
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        justifyContent: "center"
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
        <Box sx={ControllerSx}>
            <IconButton sx={ArrowBoxSx} onClick={nextSlide}>
                <LeftArrow />
            </IconButton>
            <IconButton sx={ArrowBoxSx} onClick={prevSlide}>
                <RightArrow />
            </IconButton>
        </Box>
    )
}
