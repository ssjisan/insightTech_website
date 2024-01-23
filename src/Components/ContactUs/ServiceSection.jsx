import { Box, Typography, useMediaQuery } from "@mui/material";
import { services } from "../../Layout/Navbar/NavConfig"
import FormChip from "./FormChip";


export default function ServiceSection() {
    const forBelow767 = useMediaQuery("(max-width:767px)");


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
        gap: forBelow767?"16px":"24px",
        alignSelf: "stretch",
        flexWrap: "wrap",
        width:"100%",
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
