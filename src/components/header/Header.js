import { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import RTlogo from "../../assets/images/rt-logo.png";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="w-85 z-50 mx-auto flex justify-between items-center md:px-4 sm:px-6 lg:px-8 
  md:h-20 my-6 md:my-8 md:rounded-xl md:border md:border-[#00000033] md:bg-white md:shadow-0"
      >
        <div className="flex-shrink-0 w-[150px]">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image src={RTlogo} alt="RT Logo" />
          </Link>
        </div>

        <div className="hidden md:flex gap-10">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/portfolio">PORTFOLIO</NavLink>
          <NavLink href="/career">CAREER</NavLink>
          <NavLink href="/blog">BLOG</NavLink>
        </div>

        <div className="hidden md:block">
          <button className="btn-primary">Contact US</button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-4 z-40">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
