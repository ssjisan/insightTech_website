import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { services } from "../Navbar/NavConfig"
import { Logo } from "../../Assets/Logo"
export default function Navbar() {
    // eslint-disable-next-line
    const forBelow1400 = useMediaQuery("(max-width:1400px)");
    // eslint-disable-next-line
    const forBelow1300 = useMediaQuery("(max-width:1300px)");
    const forBelow1100 = useMediaQuery("(max-width:1100px)");

    return (
        <Box sx={{
            padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(145, 142, 175, 0.24)",
            background: "rgba(255, 255, 255, 0.48)",
            backdropFilter: "blur(16px)"
        }}>
            <Box sx={{ width:forBelow1100 ? "120px" : "120px"}}>
                <Logo />
            </Box>
            <Box sx={{ display: "flex" }}>
                {
                    services.map((data) => {
                        return (
                            <Box sx={{ display: "flex", alignItems: "center", gap:"8px"}} key={data.id}>
                                <Box sx={{ display: "flex", height: "40px", padding: "10px", justifyContent: "center", alignItems: "center" }}>
                                    <Typography variant="subtitle2">{data.title}</Typography>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
            <Button size="medium" variant="contained" color="primary" >Schedule a Call</Button>
        </Box>
    )
}
