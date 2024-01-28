import { useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { service, budget, name, email, phone, company, position, projectBrief } = formData
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ service, budget, name, email, phone, company, position, projectBrief })
        }
        const res = await fetch("https://insighttechbd-d4ca9-default-rtdb.firebaseio.com/ClientRequest.json", options)
        if (res) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your request has been sent. A team will contact with you soon.",
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            alert("Error")
        }
    };
    // console.log(formData);
    return (
        {
            formData, handleChange, handleServices, handleBudget, handleSubmit
        }
    )
}
