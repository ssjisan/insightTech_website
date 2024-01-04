import { Box, Button, Container, Typography } from "@mui/material";

export default function HeroSection() {
    return (
        <Box sx={{
            backgroundImage: "url('homeBG.png')", backgroundSize:"cover",
            backgroundRepeat: "no-repeat",
        }}>
            <Container sx={{ p: "160px 0px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                <Box sx={{ flexDirection: 'column', alignItems: 'center', gap: "40px", display: 'flex', mb: "64px" }}>
                    <Typography variant="h1" sx={{ textAlign: "center" }} color="text.primary">Propelling your <span style={{
                        backgroundImage:
                            "linear-gradient(99deg, #00A76F 50.8%, #005BE3 79.77%)", "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                    }}>business</span>  to new heights</Typography>
                    <Typography variant="h5" color="text.secondary">Innovation, strategy, passion propel businesses to remarkable success.</Typography>
                </Box>
                <Button variant="contained" color="primary" sx={{ width: "220px" }} size="large">Start a Project</Button>
            </Container>
        </Box>
    )
}
