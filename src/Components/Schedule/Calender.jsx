import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
export default function Calender() {

    const isDisabled = (date) => {
        const today = new Date();
        const day = date.day();
        const isWeekend = day === 6 || day === 5;
        const isToday = date.isSame(today, "day");
        return isWeekend || isToday;
    };
    const [selectedDate, setSelectedDate] = useState();
    const handleDateChange = (newDate) => {
        const formattedDate = dayjs(newDate).format("DD MMMM YYYY");
        setSelectedDate(formattedDate);
    };
    console.log(selectedDate);
    const lastDay = dayjs().endOf("month");

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
