import { Box, useMediaQuery } from "@mui/material";
import { Logo } from "../../Assets/Logo";
import { Menu } from "../../Assets/IconSet";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import MenuDrawer from "./MenuDrawer";

export default function NavForMobile() {
    const { toggleDrawer, open } = useContext(DataContext)
    const forBelow676 = useMediaQuery("(max-width:676px)");

    return (
        <>
            <Box sx={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ width: forBelow676 ? "140px" :"168px" }}>
                    <Logo />
                </Box>
                <Box sx={{
                    borderRadius: "8px",
                    background: "rgba(145, 142, 175, 0.16)",
                    p: "4px",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} onClick={toggleDrawer}>
                    <Menu />
                </Box>
            </Box>
            <MenuDrawer open={open} />
        </>
    )
}
