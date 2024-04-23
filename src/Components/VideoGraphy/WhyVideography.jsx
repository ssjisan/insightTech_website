import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../Common/PageChip";
import { Audience, Decisions, Strategy, Suitable } from "../../Assets/IconSet";

export default function WhyVideography() {
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const forBelow499 = useMediaQuery("(max-width:499px)");

  const ContainerSx = {
    paddingTop: forBelow899 ? "40px" : "64px",
    paddingBottom: forBelow899 ? "40px" : "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "64px",
  };
  const ContentSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "460px",
    width: "100%",
    gap: "16px",
  };
  const ImageContainerSx = {
    display: "flex",
    width: (forBelow499 && "100%") || (forBelow899 && "75%") || "100%",
    padding: "24px 80px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    overflow: "hidden",
  };
  const ContentNewSx = {
    display: "flex",
    padding: "24px 12px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    alignSelf: "stretch",
    borderRadius: "16px",
  };
  const IconSx = {
    display: "flex",
    padding: "8px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "8px",
    background: "rgba(0, 174, 96, 0.20)",
  };
  const TitleSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    alignSelf: "stretch",
    textAlign: "center",
  };

  return (
    <Container sx={ContainerSx}>
      <Box sx={ContentSx}>
        <PageChip label="Why Videography" />
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Discovering Videography&lsquo;s Impact on Your Business
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ alignItems: "center" }}>
        <Grid item sm={12} md={3} lg={3}>
          <Box>
            <Box sx={ContentNewSx}>
              <Box sx={IconSx}>
                <Audience />
              </Box>
              <Box sx={TitleSx}>
                <Typography variant="h4">Reach Niche Audience</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Target Your Unique Market Segment with Tailored Visual
                  Strategies
                </Typography>
              </Box>
            </Box>
            <Box sx={ContentNewSx}>
              <Box sx={IconSx}>
                <Strategy />
              </Box>
              <Box sx={TitleSx}>
                <Typography variant="h4">Enriches Content Strategy</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Elevate Your Content Approach with Compelling Visual
                  Storytelling Techniques
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: forBelow899 && "flex",
            justifyContent: forBelow899 && "center",
          }}
        >
          <Box sx={ImageContainerSx}>
            <video
              autoPlay
              loop
              muted
              style={{
                objectFit: "cover",
                width: "100%",
                border: "1px solid transparent",
              }}
            >
              <source src="/images/videography/mobile.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid>
        <Grid item sm={12} md={3} lg={3}>
          <Box>
            <Box sx={ContentNewSx}>
              <Box sx={IconSx}>
                <Decisions />
              </Box>
              <Box sx={TitleSx}>
                <Typography variant="h4">Drive Purchase Decisions</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Influence Consumer Behavior with Persuasive Video Marketing
                  Campaigns
                </Typography>
              </Box>
            </Box>
            <Box sx={ContentNewSx}>
              <Box sx={IconSx}>
                <Suitable />
              </Box>
              <Box sx={TitleSx}>
                <Typography variant="h4">Suitable For Any Business</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Benefit from Versatile Videography Solutions Adapted to Your
                  Business
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
