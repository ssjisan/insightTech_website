import { Box, useMediaQuery } from "@mui/material"
import PropTypes from "prop-types";

export default function FormChip({ label, id, handleClick, selected }) {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const ChipSx = {
        display: "flex",
        width: forBelow767 ? "auto" : "220px",
        height: forBelow767 ? "40px" : "52px",
        padding: "4px 16px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        border: "1px solid #00AB55",
        cursor: "pointer",
        backgroundColor: selected ? "#00AB55" : "transparent"
    }

    const TextSx = {
        fontSize: forBelow767 ? "14px" : "18px",
        color:  selected ? "#FFF" : "#00AB55"
    }
    return (
        <Box sx={ChipSx} onClick={() => handleClick(id)}>
            <Box componsnt="span" sx={TextSx}>{label}</Box>
        </Box>
    )
}
FormChip.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};