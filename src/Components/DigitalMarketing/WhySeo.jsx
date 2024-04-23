import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import BulletPoint from "../Common/BulletPoint";
import PageChip from "../Common/PageChip";
export default function WhySeo() {
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const Points = [
    "Targeted Strategies",
    "Keyword Optimization",
    "Content Enhancement",
    "Performance Tracking",
  ];
  const ContainerSx = {
    paddingTop: forBelow899 ? "40px" : "64px",
    paddingBottom: forBelow899 ? "40px" : "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const ContentSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "40px",
  };

  const HeaderSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
  };

  const PointContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
  };

  return (
    <Container sx={ContainerSx}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box sx={ContentSx}>
            <Box sx={HeaderSx}>
              <PageChip label="WHY SEO?" />
              <Typography variant="h3">
                Unlocking Business Growth with Strategic SEO Solutions
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Elevate Your Online Presence with Our Expert SEO Services.
                Harness Targeted Strategies, Keyword Optimization, Content
                Enhancement, and Performance Tracking to Dominate Search
                Rankings and Drive Organic Traffic to Your Website
              </Typography>
            </Box>
            <Box sx={PointContainerSx}>
              {Points.map((data, index) => {
                return <BulletPoint label={data} key={index} />;
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box sx={{ width: "100%" }}>
            <img
              src="/images/digital_marketing/seo-3.webp"
              alt="Social Media"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
