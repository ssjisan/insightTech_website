import { Box, Typography } from "@mui/material"
import PropTypes from "prop-types";

export default function PageChip({ label }) {
    const ChipSx = {
        display: "flex",
        padding: "10px 20px",
        alignItems: "flex-start",
        gap: "10px",
        borderRadius: "100px",
        background: "rgba(10, 37, 63, 0.05)"
    }
    return (
        <Box sx={ChipSx}>
            <Typography variant="body2">{label}</Typography>
        </Box>
    )
}
PageChip.propTypes = {
    label: PropTypes.string.isRequired
};