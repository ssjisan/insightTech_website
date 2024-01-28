import { Button, Container } from "@mui/material";
import ServiceSection from "./ServiceSection";
import BudgetSection from "./BudgetSection";
import InputFields from "./InputFields";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Form() {
    const {handleSubmit} = useContext(DataContext)
    const FormSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        mb:"40px"
    }

    return (
        <Container sx={FormSx} >
            <ServiceSection />
            <BudgetSection />
            <InputFields />
            <Button variant="contained" sx={{width:"220px"}} onClick={handleSubmit}>Submit</Button>
        </Container>
    )
}
