const MenuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/officebearers" },

  {
    name: "Pages",
    children: [
      { name: "Service Details", path: "/service" },
      { name: "Project Details", path: "/project-details" },
      { name: "Terms", path: "/terms" },
      { name: "Privacy", path: "/privacy" },
    ],
  },

  { name: "Contact", path: "/contact" },
];

export default MenuItems;
