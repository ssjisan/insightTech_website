import { Box, Container, Typography } from "@mui/material";

export default function Header() {
    const ContainerSx = {
        paddingTop: "120px",
        paddingBottom:"40px"
    }
    const HeaderSx = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "16px"
    }

    const TitleSx = {
        maxWidth: "830px",
        width: "100%"
    }
    return (
        <Container sx={ContainerSx}>
            <Box sx={HeaderSx}>
                <Typography variant="h1" sx={TitleSx}>Let&apos;s discuss your project!</Typography>
                <Typography variant="h5" color="text.secondary">A project to share with us? We look forward to meeting you. Tell us your needs & desires! You can also contact us at insighttechbd@gmail.com</Typography>
            </Box>
        </Container>
    )
}
