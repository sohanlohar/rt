import AboutIcon from "@/assets/svg/AboutIcon";
import BlogsIcon from "@/assets/svg/BlogsIcon";
import CareerIcon from "@/assets/svg/CareerIcon";
import ContactIcon from "@/assets/svg/ContactIcon";
import HomeIcon from "@/assets/svg/HomeIcon";
import PortpolioIcon from "@/assets/svg/PortpolioIcon";
import ServicesIcon from "@/assets/svg/ServicesIcon";

export const menuList = [
  {
    menuName: "Home",
    menuIcon: (color) => <HomeIcon color={color} />,
    menuPath: "/",
  },
  {
    menuName: "About",
    menuIcon: (color) => <AboutIcon color={color} />,
    menuPath: "/about",
  },
  {
    menuName: "Services",
    menuIcon: (color) => <ServicesIcon color={color} />,
    menuPath: "/services",
  },
  // {
  //   menuName: "Portfolio",
  //   menuIcon: (color) => <PortpolioIcon color={color} />,
  //   menuPath: "/portfolio",
  // },
  // {
  //   menuName: "Career",
  //   menuIcon: (color) => <CareerIcon color={color} />,
  //   menuPath: "/careers",
  // },
  {
    menuName: "Blog",
    menuIcon: (color) => <BlogsIcon color={color} />,
    menuPath: "/blog",
  },
  {
    menuName: "Contact Us",
    menuIcon: (color) => <ContactIcon color={color} />,
    menuPath: "/contact-us",
  },
];
