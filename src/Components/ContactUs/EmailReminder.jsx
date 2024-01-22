import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material"

export default function EmailReminder() {
    const forBelow999 = useMediaQuery("(max-width:999px)");

    const ReminderContainerSx = {
        paddingTop: "40px",
        paddingBottom: "40px"
    }
    const ContainerSx = {
        display: "flex",
        padding: forBelow999 ? "24px" :"64px",
        flexDirection: "column",
        gap: "24px",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        background: "linear-gradient(99deg, #00A76F 0%, #007867 100.7%)"
    }

    const ColorSx = {
        color: "#fff",
        textAlign:"center"
    }

    return (
        <Container sx={ReminderContainerSx}>
            <Box sx={ContainerSx}>
                <Typography variant="h3" sx={{ ...ColorSx, maxWidth: "612px", width: "100%" }}>If you prefer, send us an email for new business opportunities</Typography>
                <Typography variant="H5" sx={{ ...ColorSx, width: "100%" }}>insighttechbd@gmail.com</Typography>
            </Box>
        </Container>
    )
}
