import { Box, Container, Typography } from "@mui/material";
import ClientSlider from "./ClientSlider";

export default function HappyClient() {
    const ClientContainerSx = {
        paddingTop: "40px",
        paddingBottom: "40px"
    }
    const ContainerSx = {
        display: "flex",
        padding: "40px 0px",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        borderRadius: "16px",
        border: "1px solid rgba(145, 142, 175, 0.24)"
    }
    return (
        <Container sx={ClientContainerSx}>
            <Box sx={ContainerSx}>
                <Typography variant="h5">Brands that have trusted us</Typography>
                <ClientSlider />
            </Box>
        </Container>
    )
}
