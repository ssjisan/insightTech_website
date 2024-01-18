import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material"

export default function Reminder() {
    const forBelow999 = useMediaQuery("(max-width:999px)");

    const ReminderContainerSx = {
        paddingTop: "40px",
        paddingBottom: "40px"
    }
    const ContainerSx = {
        display: "flex",
        padding: forBelow999 ? "32px 40px" : "64px 80px",
        flexDirection: forBelow999 && "column",
        gap: forBelow999 && "40px",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        background: "linear-gradient(99deg, #00A76F 0%, #007867 100.7%)"
    }
    const ContentSx = {
        display: "flex",
        maxWidth: "546px",
        width: "100%",
        textAlign: forBelow999 && "center",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        flexShrink: 0
    }
    const ColorSx = {
        color: "#fff"
    }
    const ButtonSx = {
        width: "220px",
        borderRadius: "8px",
        background: "#FFF",
        color: "#000",
        "&:hover": {
            background: "#FFF",
            boxShadow: "0px 8px 16px 0px rgba(255, 255, 255, 0.24)"
        }
    }
    return (
        <Container sx={ReminderContainerSx}>
            <Box sx={ContainerSx}>
                <Box sx={ContentSx}>
                    <Typography variant="h3" sx={ColorSx}>You`ve got a project. Let`s elevate it together</Typography>
                    <Typography variant="body1" sx={{...ColorSx, width:"100%"}}>Schedule a meeting with us.</Typography>
                </Box>
                <Button sx={ButtonSx}>Start a Project</Button>
            </Box>
        </Container>
    )
}
