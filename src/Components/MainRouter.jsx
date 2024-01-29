import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import WebDevelopment from "../Pages/WebDevelopment";
import DomainHosting from "../Pages/DomainHosting";
import DigitalMarketing from "../Pages/DigitalMarketing";
import Graphics from "../Pages/Graphics";
import Videography from "../Pages/Videography";
import NetworkSolution from "../Pages/NetworkSolution";
import PBX from "../Pages/PBX";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Dashboard from "./Dashboard";
import Blog from "../Pages/Blog";


export default function MainRoute() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="web_development" element={<WebDevelopment />} />
        <Route path="domain_hosting" element={<DomainHosting />} />
        <Route path="digital_marketing" element={<DigitalMarketing />} />
        <Route path="graphics" element={<Graphics />} />
        <Route path="videography" element={<Videography />} />
        <Route path="network_solution" element={<NetworkSolution />} />
        <Route path="pbx" element={<PBX />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="contact_us" element={<ContactUs/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="blog" element={<Blog/>} />
      </Routes>
    );
  }