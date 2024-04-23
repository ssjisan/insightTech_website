import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import BulletPoint from "../Common/BulletPoint";
import PageChip from "../Common/PageChip";
export default function BillingSoftwear() {
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const Points = [
    "User Creation",
    "Billing Cycle Management",
    "Payment",
    "Log Management",
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
              <PageChip label="Billing Software" />
              <Typography variant="h3">
                Efficient Billing Software Solutions for Streamlined Financial
                Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Transform network management with seamless user creation,
                efficient billing cycles, advanced billing management, and
                detailed connectivity logs. Streamline operations and boost
                productivity with our tailored, robust platform.
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
              src="/images/network/billing.webp"
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
