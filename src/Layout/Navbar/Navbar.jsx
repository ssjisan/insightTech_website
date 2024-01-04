import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { services } from "../Navbar/NavConfig"
import { Logo } from "../../Assets/Logo"
export default function Navbar() {
    const forBelow416 = useMediaQuery("(max-width:1200px)");

    return (
        <Box sx={{
            padding: forBelow416 ? "16px 24px" : "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(145, 142, 175, 0.24)",
            background: "rgba(255, 255, 255, 0.48)",
            backdropFilter: "blur(16px)"
        }}>
            <Box sx={{ width: forBelow416 ? "120px" : "168px" }}>
                <Logo />
            </Box>
            <Box sx={{ display: "flex", gap: forBelow416 ? "8px" : "16px" }}>
                {
                    services.map((data) => {
                        return (
                            <Box sx={{ display: "flex", alignItems: "center" }} key={data.id}>
                                <Box sx={{ display: "flex", height: "40px", padding: "8px 16px", justifyContent: "center", alignItems: "center" }}>
                                    <Typography variant="subtitle2">{data.title}</Typography>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
            <Button size="medium" variant="contained" color="primary" sx={{ width: forBelow416 ? "140px" : "160px" }}>Schedule a Call</Button>
        </Box>
    )
}
