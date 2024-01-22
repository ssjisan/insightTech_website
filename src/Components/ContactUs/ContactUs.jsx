import { Box } from "@mui/material";
import Form from "./Form";
import Header from "./Header";
import Footer from "../../Layout/Footer/Footer";
import MoreContact from "./MoreContact";
import FaQ from "./FaQ";
import EmailReminder from "./EmailReminder";
export default function ContactUs() {
    return (
        <Box>
            <Header />
            <Form />
            <MoreContact />
            <FaQ />
            <EmailReminder />
            <Footer />
        </Box>
    )
}
