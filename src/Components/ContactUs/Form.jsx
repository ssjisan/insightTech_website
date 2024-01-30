import { Alert, AlertTitle, Button, Container, Snackbar } from "@mui/material";
import ServiceSection from "./ServiceSection";
import BudgetSection from "./BudgetSection";
import InputFields from "./InputFields";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Form() {
    const { handleSubmit, openErrorAlert, handleClose,openSuccessAlert } = useContext(DataContext)
    const FormSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        mb: "40px"
    }

    return (
        <Container sx={FormSx} >
            <ServiceSection />
            <BudgetSection />
            <InputFields />
            <Button variant="contained" sx={{ width: "220px" }} onClick={handleSubmit}>Submit</Button>
            <Snackbar open={openErrorAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    <AlertTitle>Error</AlertTitle>
                    Please fill in your name, phone number & email so we can get back to you.
                </Alert>
            </Snackbar>
            <Snackbar open={openSuccessAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    <AlertTitle>Successfully sent</AlertTitle>
                    Thanks for your interest. We will contact you soon.
                </Alert>
            </Snackbar>
        </Container>
    )
}
