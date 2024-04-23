import {
  Box,
  Container,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageChip from "../Common/PageChip";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function CleanUI() {
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const { handleLoad, loaded } = useContext(DataContext);
  const ContainerSx = {
    paddingTop: forBelow999 ? "40px" : "64px",
    paddingBottom: forBelow999 ? "24px" : "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "64px",
    flexDirection: "column",
  };
  const ContentSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  };

  return (
    <Container sx={ContainerSx}>
      <Box sx={ContentSx}>
        <PageChip label="Clean UI" />
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Crafting Clean and Intuitive UI Designs for Seamless User Experience
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        {!loaded && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height={400}
          />
        )}
        <img
          src="/images/web_development/clean-ui.webp"
          alt="Clean UI"
          width="100%"
          style={{ objectFit: "cover" }}
          onLoad={handleLoad}
        />
      </Box>
    </Container>
  );
}
