import dayjs from "dayjs";
import { useState } from "react";

export default function ScheduleData() {
    const [openScheduleModal, setOpenScheduleModal] = useState(false);
    const [openFormModal, setOpenFormModal] = useState(false);

    const handleScheduleModalOpen = () => {
        setOpenScheduleModal(true);
    };

    const handleScheduleModalClose = () => {
        setOpenScheduleModal(false);
        setOpenFormModal(true)
    };
    const handleFormModalOpen = () => {
        setOpenFormModal(true);
    };

    const handleFormModalClose = () => {
        setOpenFormModal(false);
    };
    // Calender Data
    const isDisabled = (date) => {
        const today = new Date();
        const day = date.day();
        const isWeekend = day === 6 || day === 5;
        const isToday = date.isSame(today, "day");
        return isWeekend || isToday;
    };
    const lastDay = dayjs().endOf("month");


    const [meetingData, setMeetingData] = useState({
        date: "",
        timeSlot: "",
        name: "",
        email: "",
        phone: "",
        brief: "",
    });

    const handleDateChange = (newDate) => {
        setMeetingData({ ...meetingData, date: newDate });
    };

    // Time Slot

    const handleSlotSelect = (slot) => {
        setMeetingData({ ...meetingData, timeSlot: slot });
    };

    console.log("als", meetingData);
    return (
        {
            openScheduleModal, handleScheduleModalOpen, handleScheduleModalClose, isDisabled, handleDateChange, lastDay, openFormModal, handleFormModalOpen, handleFormModalClose, handleSlotSelect,meetingData
        }
    )
}
