import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", gap: "40px", m: 8, flexDirection:"column", }}>
      <Typography variant="h2">Propelling your business to new heights</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap:"24px"}}>
        <Typography variant="h4">Primary Contained</Typography>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Button variant="contained" color="primary" size="large">large</Button>
          <Button variant="contained" color="primary" size="medium">medium</Button>
          <Button variant="contained" color="primary" size="small">small</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap:"24px"}}>
        <Typography variant="h4">Primary Outlined</Typography>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Button variant="outlined" color="primary" size="large">large</Button>
          <Button variant="outlined" color="primary" size="medium">medium</Button>
          <Button variant="outlined" color="primary" size="small">small</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap:"24px"}}>
        <Typography variant="h4">Primary Soft</Typography>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Button variant="soft" color="primary" size="large">large</Button>
          <Button variant="soft" color="primary" size="medium">medium</Button>
          <Button variant="soft" color="primary" size="small">small</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap:"24px"}}>
        <Typography variant="h4">Base Contained</Typography>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Button variant="contained" color="inherit" size="large">large</Button>
          <Button variant="contained" color="inherit" size="medium">medium</Button>
          <Button variant="contained" color="inherit" size="small">small</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap:"24px"}}>
        <Typography variant="h4">Base OUtlined</Typography>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Button variant="outlined" color="inherit" size="large">large</Button>
          <Button variant="outlined" color="inherit" size="medium">medium</Button>
          <Button variant="outlined" color="inherit" size="small">small</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap:"24px"}}>
        <Typography variant="h4">Base OUtlined</Typography>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Button variant="soft" color="inherit" size="large">large</Button>
          <Button variant="soft" color="inherit" size="medium">medium</Button>
          <Button variant="soft" color="inherit" size="small">small</Button>
        </Box>
      </Box>
    </Box>
  )
}
