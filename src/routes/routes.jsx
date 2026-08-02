import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

import Services from "../pages/service/Services";
import OfficeBearers from "../pages/officebearers/officebearers";
import Projects from "../pages/projects/Projects";
import ContactForm from "../pages/contact/components/ContactForm";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Services />} />
        <Route path="OfficeBearers" element={<OfficeBearers />} />
        <Route path="projects" element={<Projects />} />
        <Route path="Estimate-form" element={<ContactForm />} />
      </Route>
    </Routes>
  );
}
