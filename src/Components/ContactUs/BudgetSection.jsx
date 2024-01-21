import { Box, Typography } from "@mui/material";
import FormChip from "./FormChip";


export default function BudgetSection() {
    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "40px",
        width:"100%"
    }

    const ChipContainerSx = {
        display: "flex",
        alignItems: "center",
        alignContent: "flex-start",
        gap: "24px",
        alignSelf: "stretch",
        flexWrap: "wrap",
    }
    const budget = ["1-100$", "101-200$", "201-300$", "301-400$", "401$+"]

    return (
        <Box sx={ContainerSx}>
            <Typography variant="h4">Your Budget</Typography>
            <Box sx={ChipContainerSx}>
                {budget.map((data) => {
                    return (
                        <FormChip key={data.id} label={data} />
                    )
                })}
            </Box>
        </Box>
    )
}
