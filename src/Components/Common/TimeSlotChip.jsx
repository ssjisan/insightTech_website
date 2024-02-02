import { Button, useMediaQuery } from "@mui/material"
import PropTypes from "prop-types";

export default function TimeSlotChip({ label, handleClick, selected }) {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const ChipSx = {
        display: "flex",
        width: forBelow767 ? "auto" : "220px",
        height: "36px",
        padding: "4px 16px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: 500,
        border: "1px solid rgba(145,158,171,0.48)",
        cursor: "pointer",
        backgroundColor: selected ? "#00AB55" : "transparent",
        color: selected ? "#FFF" : "#031E21", // Use timeSlot variable
        "&:hover": {
            backgroundColor: selected ? "#008549" : "#F5FBF9", // Use timeSlot variable
        },
    }
    return (

        <Button sx={ChipSx} onClick={() => handleClick(label)}>
            {label}
        </Button>
    )
}
TimeSlotChip.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};

