import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import dayjs from "dayjs";

export default function Calender() {
    const { isDisabled, lastDay, handleDateChange,meetingData } = useContext(DataContext)
    const selectedDate = dayjs(meetingData.date);
    const DateSx = {
        width: "360px",
        "& .css-1oo78o3-MuiButtonBase-root-MuiPickersDay-root": {
            fontSize: "14px",
            fontWeight: 500,
        },
        "& .MuiTypography-caption": {
            color: "#637381",
            fontSize: "14px"
        },
        "& .Mui-selected": {
            color: "#FFF !important",
        },
        "& .css-1oo78o3-MuiButtonBase-root-MuiPickersDay-root.Mui-disabled:not(.Mui-selected)": {
            color: "rgba(33,43,54,.48)"
        }
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                disablePast
                disableHighlightToday
                disableOpenPicker
                value={selectedDate}
                label={"Choose Date"}
                views={["day"]}
                shouldDisableDate={isDisabled}
                sx={DateSx}
                maxDate={lastDay}
                onChange={handleDateChange}
            />
        </LocalizationProvider>
    )
}
