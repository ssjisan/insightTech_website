import {
  Box,
  Container,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageChip from "../Common/PageChip";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Promotion() {
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const { handleLoad, loaded } = useContext(DataContext);

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
    gap: "16px",
  };

  return (
    <Container sx={ContainerSx}>
      <Box sx={ContentSx}>
        <PageChip label="Better Communication" />
        <Typography variant="h3">
          Delight customers with great conversations.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
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
                src="/images/pbx/1st.webp"
                alt="first"
                style={{ objectFit: "cover", width: "100%" }}
                onLoad={handleLoad}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
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
                src="/images/pbx/2nd.webp"
                alt="first"
                style={{ objectFit: "cover", width: "100%" }}
                onLoad={handleLoad}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
