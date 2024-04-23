import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PageChip from "../../Common/PageChip";
import ProjectShowSlider from "../../Common/ProjectShowSlider";
// import ProjectShowSliderReverse from "../../Common/ProjectShowSliderReverse";

export default function RecentProjects() {
  // const forBelow597 = useMediaQuery("(max-width:597px)");
  const forBelow999 = useMediaQuery("(max-width:999px)");

  // Configure Style Start
  const ContainerSx = {
    paddingTop: forBelow999 ? "40px" : "64px",
    paddingBottom: forBelow999 ? "40px" : "64px",
  };
  const MainBox = {
    display: "flex",
    flexDirection: "column",
    gap: "64px",
    alignItems: "center",
  };
  const ContentContainerSx = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
  };
  const TitleContainerSx = {
    maxWidth: "586px",
    width: "100%",
    textAlign: "center",
  };
  return (
    <Box>
      <Container sx={ContainerSx}>
        <Box sx={MainBox}>
          <Box sx={ContentContainerSx}>
            <PageChip label="Work" />
            <Typography variant="h2" sx={TitleContainerSx}>
              Recent{" "}
              <Box component="span" sx={{ color: "#00AE60" }}>
                Projects
              </Box>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <ProjectShowSlider />
        {/* {!forBelow597 && <ProjectShowSliderReverse />} */}
      </Box>
    </Box>
  );
}
