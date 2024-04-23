import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function HeroSection() {
  const videoUrl = "/images/videography/videography.webm";
  // const MainBoxSx = {
  //     backgroundImage: "url('https://i.ibb.co/VvDrd93/Video-Graphy.gif')", backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat", backgroundPosition: 'center', height: "100vh", display: "flex", alignItems: "center"
  // }
  const MainBoxSx = {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  };

  const VideoSx = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };

  const ContainerSx = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const ChipSx = {
    display: "flex",
    padding: "10px 20px",
    alignItems: "flex-start",
    gap: "10px",
    borderRadius: "100px",
    background: "rgba(255, 255, 255, 0.05)",
  };
  const ContentSx = {
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    display: "flex",
    mb: "40px",
  };
  const ButtonSx = {
    width: "220px",
    borderRadius: "8px",
    background: "#FFF",
    color: "#000",
    "&:hover": {
      background: "#FFF",
      boxShadow: "0px 8px 16px 0px rgba(255, 255, 255, 0.24)",
    },
  };
  return (
    <Box sx={MainBoxSx}>
      <video autoPlay loop muted style={VideoSx}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container sx={ContainerSx}>
        <Box sx={ContentSx}>
          <Box sx={ChipSx}>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "#FFF" }}
            >
              Videography
            </Typography>
          </Box>
          <Typography variant="h1" sx={{ textAlign: "center", color: "#FFF" }}>
            Video that Boost your Business
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center", color: "#FFF" }}>
            Innovation, strategy, passion propel businesses to remarkable
            success.
          </Typography>
        </Box>
        <Link to="/contact_us">
          <Button variant="contained" sx={ButtonSx} size="large">
            Start a Project
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
