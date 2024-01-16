import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { keyframes } from '@emotion/react';

export default function HeroSection() {
    const forBelow667 = useMediaQuery("(max-width:667px)");
    const forBelow999 = useMediaQuery("(max-width:999px)");
    const gradientAnimation = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(-360deg);
  }
`;
    return (
        <Box sx={{
            backgroundImage: !forBelow667 && "url('homeBG.png')", backgroundSize: "cover",
            backgroundRepeat: "no-repeat", backgroundPosition: 'center'
        }}>
            <Container sx={{ p: forBelow999 ? "80px 16px" : "160px 0px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                <Box sx={{ flexDirection: 'column', alignItems: 'center', gap: "40px", display: 'flex', mb: "64px" }}>
                    <Typography variant="h1" sx={{
                        textAlign: "center",
                    }} color="text.primary">Propelling your <Box component="span" sx={{
                        backgroundImage: "linear-gradient(90deg, rgba(0,167,111,1) 0%, rgba(0,91,227,1) 50%, rgba(0,167,111,1) 100%)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                        animation: `${gradientAnimation} 3s infinite linear`,
                    }}>business</Box>  to new heights</Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ textAlign: "center" }}>Innovation, strategy, passion propel businesses to remarkable success.</Typography>
                </Box>
                <Button variant="contained" color="primary" sx={{ width: "220px" }} size="large">Start a Project</Button>
            </Container>
        </Box>
    )
}
