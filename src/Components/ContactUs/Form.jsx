import { Button, Container } from "@mui/material";
import ServiceSection from "./ServiceSection";
import BudgetSection from "./BudgetSection";
import InputFields from "./InputFields";

export default function Form() {
    const FormSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        mb:"40px"
    }

    return (
        <Container sx={FormSx}>
            <ServiceSection />
            <BudgetSection />
            <InputFields />
            <Button variant="contained" sx={{width:"220px"}}>Submit</Button>
        </Container>
    )
}
