import { Box, Typography, useMediaQuery } from "@mui/material";
import FormChip from "./FormChip";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";


export default function BudgetSection() {
    const {formData,handleBudget} = useContext(DataContext)

    const forBelow767 = useMediaQuery("(max-width:767px)");
    
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "40px",
        width: "100%"
    }

    const ChipContainerSx = {
        display: "flex",
        alignItems: "center",
        alignContent: "flex-start",
        gap: forBelow767 ? "16px" : "24px",
        alignSelf: "stretch",
        flexWrap: "wrap",
    }
    const budget = ["1-100$", "101-200$", "201-300$", "301-400$", "401$+"]

    return (
        <Box sx={ContainerSx}>
            <Typography variant="h4">Your Budget</Typography>
            <Box sx={ChipContainerSx}>
                {budget.map((data,index) => {
                    return (
                        <FormChip 
                        key={index}
                        id={index}
                        label={data}
                        handleClick={()=>handleBudget(data)} 
                        selected={data === formData.budget} />
                    )
                })}
            </Box>
        </Box>
    )
}
