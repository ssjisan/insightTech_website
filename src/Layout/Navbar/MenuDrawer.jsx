import { useContext } from "react"
import { DataContext } from "../../DataProcessing/DataProcessing"
import { Box, Button, Drawer, Typography, useMediaQuery } from "@mui/material"
import { Close } from "../../Assets/IconSet"
import { services } from "./NavConfig"

export default function MenuDrawer() {
    const { toggleDrawer, open, handleDrawerClose } = useContext(DataContext)
    const forBelow999 = useMediaQuery("(max-width:676px)");

    return (
        <Drawer
            variant="temporary"
            anchor="right"
            open={open}
            onClose={toggleDrawer}
            sx={{
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "100%",
                },
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "12px 16px" }}>
                <Box sx={{
                    borderRadius: "8px",
                    background: "rgba(145, 142, 175, 0.16)",
                    p: "4px",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} onClick={handleDrawerClose}>
                    <Close />
                </Box>
            </Box>
            <Box sx={{mt:"40px"}}>
                <Box sx={{ display: "flex", gap: "16px", flexDirection: "column", alignItems:"center"}}>
                    {
                        services.map((data) => {
                            return (
                                <Box sx={{ display: "flex", alignItems: "center" }} key={data.id}>
                                    <Box sx={{ display: "flex", height: "40px", padding: "8px 16px", justifyContent: "center", alignItems: "center" }}>
                                        <Typography sx={{ fontSize:forBelow999 && "18px" }}>{data.title}</Typography>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                    <Button variant="contained" color="primary">Schedule a Call</Button>
                </Box>
            </Box>
        </Drawer>
    )
}
