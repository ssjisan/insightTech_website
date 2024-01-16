import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import NavForMobile from "../Layout/Navbar/NavForMobile";

export default function PBX() {
  // eslint-disable-next-line
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const forBelow1100 = useMediaQuery("(max-width:1100px)");

  return (
    <>
      {
        forBelow1100 ? <NavForMobile /> : <Navbar />
      }
      <Box>PBX</Box>
    </>
  )
}
