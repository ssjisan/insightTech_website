import { Box, Typography } from "@mui/material"
import { BulletPointIcon } from "../../Assets/IconSet"
import PropTypes from "prop-types";

export default function BulletPoint({ label }) {
    const IconSx = {
        display: "flex",
        width: "24px",
        height: "24px",
        padding: "2px",
        justifyContent: "center",
        alignItems: "center"
    }
    const BulletPointSx = { display: "flex", alignItems: "flex-start", gap: "8px" }
    return (
        <Box sx={BulletPointSx}>
            <Box sx={IconSx}>
                <BulletPointIcon />
            </Box>
            <Typography variant="body1" color="text.secondary">{label}</Typography>
        </Box>
    )
}
BulletPoint.propTypes = {
    label: PropTypes.string.isRequired
};