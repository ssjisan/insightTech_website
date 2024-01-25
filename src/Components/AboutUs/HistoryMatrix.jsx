import { Box, Container, Typography, useMediaQuery } from "@mui/material"

export default function HistoryMatrix() {
    const forBelow999 = useMediaQuery("(max-width:999px)");
    const forBelow599 = useMediaQuery("(max-width:599px)");

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
        width: "100%",
        textAlign: forBelow999 && "center",
        flexDirection: forBelow599 && "column",
        alignItems: forBelow599 ? "center" :"flex-start",
        gap: "16px",
        flexWrap: forBelow999 && "wrap",
        justifyContent: forBelow999 && "center"
    }
    const ColorSx = {
        color: "#fff"
    }
    const ListSx = {
        display: "flex",
        maxWidth:"318px",
        width:"100%",
        padding: "8px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
    }

    return (
        <Container sx={ReminderContainerSx}>
            <Box sx={ContainerSx}>
                <Box sx={ContentSx}>
                    <Box sx={ListSx}>
                        <Typography variant="h2" sx={ColorSx}>2020</Typography>
                        <Typography variant="h5" sx={ColorSx}>InsightTech was founded</Typography>
                    </Box>
                    <Box sx={ListSx}>
                        <Typography variant="h2" sx={ColorSx}>30+</Typography>
                        <Typography variant="h5" sx={ColorSx}>Total Services</Typography>
                    </Box>
                    <Box sx={ListSx}>
                        <Typography variant="h2" sx={ColorSx}>25</Typography>
                        <Typography variant="h5" sx={ColorSx}>Happy Clients</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
