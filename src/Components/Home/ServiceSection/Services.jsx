import { Box, Container, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <Container sx={{ mt: "64px", mb: "64px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "64px", alignItems: "center" }}>
                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                    <Box sx={{ "display": "flex", "padding": "10px 20px", "alignItems": "flex-start", "gap": "10px", "borderRadius": "100px", "background": "rgba(10, 37, 63, 0.05)" }}>
                        <Typography sx={{}} variant="body2">What We Do</Typography>
                    </Box>
                    <Typography variant="h2" sx={{ maxWidth: "586px", width: "100%", textAlign: "center" }}>Explore Our Diverse Range of <Box component="span" sx={{ color: "#00AE60" }}>Solutions</Box></Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ textAlign: "center" }}>Explore a Myriad of Tailored Solutions, Delving into a Spectrum of Services Crafted to Elevate Your Experience and Propel Your Digital Success to Uncharted Heights</Typography>
                </Box>
                <ServiceCard />
            </Box >
        </Container >
    )
}
