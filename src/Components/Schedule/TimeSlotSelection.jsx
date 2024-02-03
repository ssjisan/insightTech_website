import { Box, Typography, useMediaQuery } from "@mui/material";
import { TimeSlot } from "../../Assets/TimeSlot";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import TimeSlotChip from "../Common/TimeSlotChip";

export default function TimeSlotSelection() {
    const { meetingData, handleSlotSelect } = useContext(DataContext)
    const forBelow767 = useMediaQuery("(max-width:767px)");


    return (
        <Box sx={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography variant="body2">What time works best?</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: forBelow767 ? "8px" :"16px" }}>
                {
                    TimeSlot.map((data) => {
                        return (
                            <TimeSlotChip 
                            label={data.slot} 
                            key={data.id} 
                            handleClick={() => handleSlotSelect(data.slot)}
                            selected={data.slot === meetingData.timeSlot} />
                        )
                    })
                }
            </Box>
        </Box>
    )
}
