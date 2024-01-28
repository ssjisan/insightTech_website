import { Button, useMediaQuery } from "@mui/material"
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
        backgroundColor: selected ? "#00AB55" : "transparent",
        color: selected ? "#FFF" : "#00AB55",
        "&:hover": {
            backgroundColor: selected ? "#008549" : "#F5FBF9",
        }
    }
    return (

        <Button sx={ChipSx} onClick={() => handleClick(id)}>
            {label}
        </Button>
    )
}
FormChip.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};