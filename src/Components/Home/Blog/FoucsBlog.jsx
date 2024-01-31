import { useContext } from "react"
import { DataContext } from "../../../DataProcessing/DataProcessing"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom";

export default function FoucsBlog() {
  const { blogWithId1 } = useContext(DataContext)
  const forBelow899 = useMediaQuery("(max-width:899px)");
  const { goToTop } = useContext(DataContext)

  const BlogBodySx = {
    backgroundImage:
      `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 74.59%),\n    url(${blogWithId1 && blogWithId1.image})`,
    width: "100%",
    height: forBelow899 ? "300px" : "400px",
    backgroundSize: "cover",
    color: "white",
    padding: "20px",
    borderRadius: "16px"
  }
  const ContentSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "24px",
    flex: "1 0 0",
    height: "100%"
  }

  const ButtonSx = {
    width: "160px",
    borderRadius: "8px",
    background: "#FFF",
    color: "#000",
    "&:hover": {
      background: "#FFF",
      boxShadow: "0px 8px 16px 0px rgba(255, 255, 255, 0.24)"
    }
  }
  return (
    <Box sx={BlogBodySx}>
      <Box sx={ContentSx}>
        <Typography variant="h5" sx={{ color: "#fff" }}>Crafting a Dynamic Online Presence with Web Development</Typography>
        <Link to="/blog">
          <Button sx={ButtonSx} onClick={goToTop}>Read More</Button>
        </Link>
      </Box>
    </Box>
  )
}
