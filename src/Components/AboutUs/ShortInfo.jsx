import { Box, Container, useMediaQuery } from "@mui/material";

export default function ShortInfo() {
    const forBelow767 = useMediaQuery("(max-width:767px)");

    const ContainerSx = {
        display: "flex",
        flexDirection: "column",
        paddingTop: "24px",
        paddingBottom: "24px",
        justifyContent: "center",
        alignItems: "center",
    }
    const ContextSx = {
        fontSize: forBelow767 ? "18px" : "20px",
        fontWeight: 500,
        lineHeight: "200%",
        color: "text.secondary"
    }
    return (
        <Container sx={ContainerSx}>
            <Box component="span" sx={ContextSx}>
                Insighttech Bangladesh is a dynamic and visionary digital services and consultancy firm, committed to accelerating the growth of Bangladesh in the digital sphere.
            </Box>
            <Box component="span" sx={ContextSx}>
                Our mission is to provide innovative and high-quality technology solutions to our clients, helping them to optimize their business processes, increase efficiency, and drive growth. We believe that by empowering businesses and organizations with the latest technologies, we can contribute to the development of a thriving digital ecosystem in Bangladesh, and help position the country as a global technology leader. a
            </Box>
            <Box component="span" sx={ContextSx}>
                At Insighttech Bangladesh, we are passionate about making a positive impact on society, and are proud to be part of the country’s digital transformation journey.
            </Box>
        </Container>
    )
}
