import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{display:"flex", gap:"24px",mt:8}}>
        <Typography variant="h2">Propelling your business to new heights</Typography>
        <Button variant="contained" color="primary" size="large">large</Button>
        <Button variant="contained" color="primary" size="medium">medium</Button>
        <Button variant="contained" color="primary" size="small">small</Button>
        {/* <Button variant="outlined" color="primary" size="large">large</Button>
        <Button variant="outlined" color="primary" size="medium">small</Button>
        <Button variant="outlined" color="primary" size="small">medium</Button>
        <Button variant="soft" color="primary" size="large">large</Button>
        <Button variant="soft" color="primary" size="medium">small</Button>
        <Button variant="soft" color="primary" size="small">medium</Button> */}
    </Box>
  )
}
