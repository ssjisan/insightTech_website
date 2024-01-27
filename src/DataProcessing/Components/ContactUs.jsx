import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        service:null,
        budget: null,
        name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        projectBrief: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };
    const handleServices = (title) => {
        setFormData({ ...formData, service: title }); 
    };
    const handleBudget = (data) => {
        setFormData({ ...formData, budget: data }); 
    };

    console.log(formData);
    return (
        {
            formData,handleChange,handleServices,handleBudget
        }
    )
}
