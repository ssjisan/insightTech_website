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
        const formattedDate = dayjs(newDate).format("DD MMMM YYYY");
        setMeetingData({ ...meetingData, date: formattedDate });
    };

    // Time Slot

    const handleSlotSelect = (slot) => {
        setMeetingData({ ...meetingData, timeSlot: slot });
    };
    const handleMeetingFormField = (e) => {
        const { id, value } = e.target;
        setMeetingData({ ...meetingData, [id]: value });
    };
    const handleMeetingRequestSubmit = async (e) => {
        e.preventDefault();
        const { date, timeSlot, name, email, phone, brief } = meetingData

        if (!name || !email || !phone) {
            alert("Error")
            return;
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ date, timeSlot, name, email, phone, brief })
        }
        const res = await fetch("https://insighttechbd-d4ca9-default-rtdb.firebaseio.com/MeetingResuest.json", options)
        if (res) {
            alert("Success")
            setMeetingData({
                date: "",
                timeSlot: "",
                name: "",
                email: "",
                phone: "",
                brief: "",
            });
        }
        else {
            alert("Error")
        }
        setOpenFormModal(false);
    };
    console.log(meetingData);
    return (
        {
            openScheduleModal, handleScheduleModalOpen, handleScheduleModalClose, isDisabled, handleDateChange, lastDay, openFormModal, handleFormModalOpen, handleFormModalClose, handleSlotSelect, meetingData, handleMeetingFormField, handleMeetingRequestSubmit
        }
    )
}
