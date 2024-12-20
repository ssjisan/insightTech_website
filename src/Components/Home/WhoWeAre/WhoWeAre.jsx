import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Matrix from "./Matrix";
import PageChip from "../../Common/PageChip";
import { Link } from "react-router-dom";

export default function WhoWeAre() {
  const forBelow800 = useMediaQuery("(max-width:800px)");
  const forBelow599 = useMediaQuery("(max-width:599px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");

  // Configure Style Start

  const ContainerSx = {
    paddingTop: forBelow999 ? "40px" : "64px",
    paddingBottom: forBelow999 ? "40px" : "64px",
  };
  const ContentContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "64px",
    flex: "1 0 0",
  };
  const TitleContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: forBelow599 ? "center" : "flex-start",
    gap: "24px",
    alignSelf: "stretch",
  };
  const TextSx = {
    textAlign: forBelow599 && "center",
  };
  // Configure Style End
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container sx={ContainerSx}>
      <Grid container spacing={forBelow599 ? 3 : 2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Box sx={ContentContainerSx}>
            <Box sx={TitleContainerSx}>
              <PageChip label="Who we are" />
              <Typography variant="h2" sx={TextSx}>
                Driving Digital Growth with{" "}
                <Box component="span" sx={{ color: "#00AE60" }}>
                  Innovation
                </Box>{" "}
                &{" "}
                <Box component="span" sx={{ color: "#00AE60" }}>
                  Success
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={TextSx}>
                Insighttech Bangladesh accelerates digital growth, offering
                innovative solutions to optimize business processes and drive
                efficiency, contributing to a thriving global digital ecosystem.
              </Typography>
            </Box>
            {!forBelow800 && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "64px",
                }}
              >
                <Matrix />
                <Link to="/about_us">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ width: "220px" }}
                    onClick={goToTop}
                  >
                    Learn more about us
                  </Button>
                </Link>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Box>
            <img
              src="/images/home/whoWeAre.webp"
              width="100%"
              height={forBelow599 && "310px"}
              style={{ objectFit: "contain" }}
              alt="Who We Are"
            />
          </Box>
        </Grid>
        {forBelow800 && (
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <Matrix />
              <Link to="/about_us">
                <Button
                  variant="contained"
                  size="large"
                  sx={{ width: "220px" }}
                  onClick={goToTop}
                >
                  Learn more about us
                </Button>
              </Link>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
