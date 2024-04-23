import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageChip from "../Common/PageChip";
import { SEOServices } from "../../Assets/ServicesCategory/SEOServices";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function SeoService() {
  const forBelow899 = useMediaQuery("(max-width:999px)");
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const { goToTop } = useContext(DataContext);
  const ContainerSx = {
    paddingTop: forBelow899 ? "40px" : "64px",
    paddingBottom: forBelow899 ? "40px" : "64px",
  };
  const ContentContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "40px",
  };

  const ContentSx = {
    display: "flex",
    paddingTop: "40px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
  };
  const BoxSx = {
    display: "flex",
    padding: forBelow767 ? "12px" : "24px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
  };

  return (
    <Container sx={ContainerSx}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={ContentContainerSx}>
            <Box sx={ContentSx}>
              <PageChip label="SEO" />
              <Typography variant="h3">
                Optimizing Your Online Presence with SEO Solutions
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Elevate Your Visibility and Reach with Tailored SEO Strategies.
                Dominate Search Rankings, Drive Organic Traffic, and Achieve
                Sustainable Growth.
              </Typography>
            </Box>
            <Link to="/contact_us">
              <Button
                variant="contained"
                sx={{ width: "220px" }}
                onClick={goToTop}
              >
                Start a Project
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}>
            <img
              src="/images/digital_marketing/seo-2.webp"
              style={{ objectFit: "cover", width: "100%" }}
              alt="SEO Services"
            />
          </Box>
        </Grid>
        {SEOServices.map((data) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={[4, 5].includes(data.id) ? 6 : 4}
              key={data.id}
            >
              <Box sx={BoxSx}>
                <Typography variant="h4">{data.title}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {data.subTitle}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
