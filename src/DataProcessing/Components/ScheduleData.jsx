import { useState } from "react";

export default function ScheduleData() {
    const [openScheduleModal, setOpenScheduleModal] = useState(false);

    const handleScheduleModalOpen = () => {
        setOpenScheduleModal(true);
    };

    const handleScheduleModalClose = () => {
        setOpenScheduleModal(false);
    };


    return (
        {
            openScheduleModal,handleScheduleModalOpen,handleScheduleModalClose
        }
    )
}
