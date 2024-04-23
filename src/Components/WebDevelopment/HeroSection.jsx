import {
  Box,
  Container,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageChip from "../../Components/Common/PageChip";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function HeroSection() {
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const { handleLoad, loaded } = useContext(DataContext);

  const ContainerSx = {
    paddingTop: forBelow999 ? "80px" : "120px",
    paddingBottom: forBelow999 ? "64px" : "80px",
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
        <PageChip label="Web Development" />
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Not Just an Another{" "}
          <Box component="span" sx={{ color: "#00AE60" }}>
            SASS
          </Box>{" "}
          product.
        </Typography>
      </Box>
      <Box sx={{ width: "100%", borderRadius: "16px" }}>
        {!loaded && (
          <Skeleton variant="rectangular" width="100%" height={400} />
        )}
        <img
          src="/images/web_development/hero.webp"
          alt="Hero"
          width="100%"
          style={{ objectFit: "cover" }}
          onLoad={handleLoad}
        />
      </Box>
    </Container>
  );
}
