import { Box, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import { NetworkTech } from "../../../Assets/NetworkTech";

export default function TechnologyCard() {
    const CardContainerSx = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        alignContent: "flex-start",
        rowGap: "24px",
        flex: "1 0 0",
        flexWrap: "wrap"
    }
    const IconBoxSx = {
        display: "flex",
        width: "120px",
        height: "120px",
        padding: "24px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px"
    }

    return (
        <Box sx={CardContainerSx}>
            {NetworkTech.map((data) => {
                return (
                    <Tooltip title={data.name} TransitionComponent={Zoom} key={data.id} placement="top">
                        <Box sx={IconBoxSx}>
                            {data.icon}
                        </Box>
                    </Tooltip>
                )
            })}
        </Box>
    )
}
