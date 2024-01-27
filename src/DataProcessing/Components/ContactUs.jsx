import emailjs from '@emailjs/browser';
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        service: null,
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
    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            position: formData.position,
            projectBrief: formData.projectBrief,
            budgetId: formData.budgetId
        };

        emailjs.send('service_8qpmatl', 'template_pwb6kzz', templateParams, 'ilk2iVMcaEmPNdb_V')
            .then((response) => {
                console.log('Email sent successfully:', response);
                // Add your success handling code here
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                // Add your error handling code here
            });
    };
    console.log(formData);
    return (
        {
            formData, handleChange, handleServices, handleBudget, handleSubmit
        }
    )
}
