import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Profile from "../pages/profile/Profile";
import Services from "../pages/service/Services";
import OfficeBearers from "../pages/officebearers/officebearers";
import Projects from "../pages/projects/Projects";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="service" element={<Services />} />
        <Route path="OfficeBearers" element={<OfficeBearers />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}
