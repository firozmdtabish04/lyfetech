import {
  Home,
  Info,
  Phone,
  User,
  Briefcase,
  Users,
  Hammer,
} from "lucide-react";

const MenuItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About Us",
    path: "/about",
    icon: Info,
  },
  {
    name: "Services",
    path: "/service",
    icon: Briefcase, // better for company services
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Hammer, // best for construction projects
  },
  {
    name: "Team",
    path: "/officebearers",
    icon: Users,
  },
  {
    name: "Contact Us",
    path: "/contact",
    icon: Phone,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
];

export default MenuItems;
