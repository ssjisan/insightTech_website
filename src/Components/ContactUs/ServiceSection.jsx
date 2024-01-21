import { Box, Typography } from "@mui/material";
import { services } from "../../Layout/Navbar/NavConfig"
import FormChip from "./FormChip";


export default function ServiceSection() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "40px"
    }

    const ChipContainerSx = {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        gap: "24px",
        alignSelf: "stretch",
        flexWrap: "wrap",
    }

    return (
        <Box sx={ContainerSx}>
            <Typography variant="h4">What can we help you with?</Typography>
            <Box sx={ChipContainerSx}>
                {services.map((data) => {
                    return (
                        <FormChip key={data.id} label={data.title} />
                    )
                })}
            </Box>
        </Box>
    )
}
