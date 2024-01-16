import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { services } from "../Navbar/NavConfig"
import { Logo } from "../../Assets/Logo"
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
    const { pathname } = useLocation();

    // eslint-disable-next-line
    const forBelow1400 = useMediaQuery("(max-width:1400px)");
    // eslint-disable-next-line
    const forBelow1300 = useMediaQuery("(max-width:1300px)");
    const forBelow1100 = useMediaQuery("(max-width:1100px)");
    const linkStyle = {
        textDecoration: "none",
        color: "#031E21"
    };
    return (
        <Box sx={{
            padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(145, 142, 175, 0.24)",
            background: "rgba(255, 255, 255, 0.48)",
            backdropFilter: "blur(16px)"
        }}>
            <Link to="/">
                <Box sx={{ width: forBelow1100 ? "120px" : "120px" }}>
                    <Logo />
                </Box></Link>
            <Box sx={{ display: "flex" }}>
                {
                    services.map((data) => {
                        return (
                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }} key={data.id}>
                                <Link to={data.link} style={linkStyle}>
                                    <Box sx={{
                                        display: "flex", height: "40px", padding: "10px", justifyContent: "center", alignItems: "center", backgroundColor: pathname == data.link && "rgba(0, 174, 96, 0.08)", borderRadius: "4px"
                                    }}>
                                        <Typography variant="subtitle2" sx={{ color: pathname == data.link && "#00AE60", fontWeight: pathname == data.link && 500 }}>{data.title}</Typography>
                                    </Box>
                                </Link>
                            </Box>
                        )
                    })
                }
            </Box>
            <Button size="medium" variant="contained" color="primary" >Schedule a Call</Button>
        </Box>
    )
}
