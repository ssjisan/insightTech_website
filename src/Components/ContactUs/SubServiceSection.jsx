import { Box, Typography, useMediaQuery } from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../../DataProcessing/DataProcessing"
import FormChip from "./FormChip"
import { WebDevelopmentServices } from "../../Assets/ServicesCategory/WebDevelopmentServices";
import { DigitalMarketingServices } from "../../Assets/ServicesCategory/DigitalMarketingServices";
import { GraphicsServices } from "../../Assets/ServicesCategory/GraphicsServices";
import { VideographyServices } from "../../Assets/ServicesCategory/VideographyServices";
import { NetworkSolutions } from "../../Assets/ServicesCategory/NetworkSolutions";

export default function SubServiceSection() {
    const serviceSubServicesMap = {
        "Web Development": WebDevelopmentServices,
        "Domain & Hosting": "mobileAppDevelopmentServices",
        "Digital Marketing":DigitalMarketingServices,
        "Graphics":GraphicsServices,
        "Videography":VideographyServices,
        "Network Solution":NetworkSolutions,
        "PBX":"PBX"
      };
    const { formData, handleSubServices } = useContext(DataContext)
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
            <Typography variant="h4">Be Specific...</Typography>
            <Box sx={ChipContainerSx}>
                {serviceSubServicesMap[formData.service]?.map((data, index) => {
                    return (
                        <FormChip key={index}
                            label={data.title}
                            id={data.id}
                            handleClick={() => handleSubServices(data.title)}
                            selected={data.title === formData.subService} />
                    )
                })}
            </Box>
        </Box>
    )
}
