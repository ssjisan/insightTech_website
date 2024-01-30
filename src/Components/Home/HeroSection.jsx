import { Box, Button, Container, Typography } from "@mui/material";
import { keyframes } from '@emotion/react';
import { Link } from "react-router-dom";

export default function HeroSection() {

    const gradientAnimation = keyframes`from {filter: hue-rotate(0deg);} to {filter: hue-rotate(-360deg);}`;
    const MainBoxSx = {
        backgroundImage: "url('https://i.ibb.co/f0zmnGD/homeBG.png')", backgroundSize: "cover",
        backgroundRepeat: "no-repeat", backgroundPosition: 'center', height: "100vh", display: "flex", alignItems: "center"
    }
    const ContainerSx = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    }
    const ContentSx = {
        flexDirection: 'column',
        alignItems: 'center',
        gap: "40px",
        display: 'flex',
        mb: "64px"
    }
    const SpanSx = {
        backgroundImage: "linear-gradient(90deg, rgba(0,167,111,1) 0%, rgba(0,91,227,1) 50%, rgba(0,167,111,1) 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        animation: `${gradientAnimation} 3s infinite linear`,
    }
    return (
        <Box sx={MainBoxSx}>
            <Container sx={ContainerSx}>
                <Box sx={ContentSx}>
                    <Typography variant="h1" sx={{
                        textAlign: "center",
                    }} color="text.primary">
                        Propelling your <Box component="span" sx={SpanSx}>business</Box>  to new heights
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ textAlign: "center" }}>
                        Innovation, strategy, passion propel businesses to remarkable success.
                    </Typography>
                </Box>
                <Link to="/contact_us">
                    <Button variant="contained" color="primary" sx={{ width: "220px" }} size="large">Start a Project</Button>
                </Link>
            </Container>
        </Box>
    )
}
