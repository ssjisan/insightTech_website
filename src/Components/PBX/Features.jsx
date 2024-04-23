import {
  Box,
  Container,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BulletPoint from "../Common/BulletPoint";
import { PBXFeatures } from "../../Assets/PBXFeatures";
import PageChip from "../Common/PageChip";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function Features() {
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const { handleLoad, loaded } = useContext(DataContext);

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
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <Box sx={ContentSx}>
            <Box sx={HeaderSx}>
              <PageChip label="Features" />
              <Typography variant="h3">
                Features To Match Your Business Needs
              </Typography>
            </Box>
            <Box sx={PointContainerSx}>
              {PBXFeatures.map((data) => {
                return <BulletPoint label={data.title} key={data.id} />;
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={7}>
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
              src="/images/pbx/feature.webp"
              alt="Hero Section"
              width="100%"
              style={{ objectFit: "cover" }}
              onLoad={handleLoad}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
