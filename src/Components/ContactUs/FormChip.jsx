import { Box, Typography } from "@mui/material"
import PropTypes from "prop-types";

export default function FormChip({ label }) {
    const ChipSx = {
        display: "flex",
        width: "200px",
        height: "52px",
        padding: "4px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "-2px",
        borderRadius: "50px",
        border: "1px solid var(--Primary-Main, #00AB55)",
        cursor: "pointer"
    }
    const TextSx = {
        fontSize: "18px",
        lineHeight: "18px",
        color: "#00AB55"
    }
    return (
        <Box sx={ChipSx}>
            <Typography sx={TextSx}>{label}</Typography>
        </Box>
    )
}
FormChip.propTypes = {
    label: PropTypes.string.isRequired
};