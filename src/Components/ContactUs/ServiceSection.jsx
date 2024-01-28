import { Box, Typography, useMediaQuery } from "@mui/material";
import { services } from "../../Layout/Navbar/NavConfig"
import FormChip from "./FormChip";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";


export default function ServiceSection() {
    const {formData,handleServices} = useContext(DataContext)
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
        gap: forBelow767 ? "16px" : "24px",
        alignSelf: "stretch",
        flexWrap: "wrap",
        width: "100%",
    }

    return (
        <Box sx={ContainerSx}>
            <Typography variant="h4">What can we help you with?</Typography>
            <Box sx={ChipContainerSx}>
                {services.map((data,index) => {
                    return (
                        <FormChip key={index}
                            label={data.title}
                            id={data.id}
                            handleClick={()=>handleServices(data.title)}
                            selected={data.title === formData.service} />
                    )
                })}
            </Box>
        </Box>
    )
}
