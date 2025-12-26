import { useState } from "react";
import Image from "next/image";
import RTlogo from "../../assets/images/rt-logo.png";
import Link from "next/link";
import { menuList } from "./menuList";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="container">
        <nav className="relative px-0 py-0 md:py-4 w-full md:w-85 z-50 mx-auto md:px-4 sm:px-6 lg:px-8 md:h-20 my-6 md:rounded-xl md:border md:border-[#00000033] md:bg-white md:shadow-0">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src={RTlogo}
                alt="Tailwindcss Navigation"
                className="w-[150px]"
              />
            </Link>
            <ul className="hidden md:flex space-x-6">
              {menuList.filter((item) => item.menuPath !== "/contact-us").map((item) => {
                const isActive = router.pathname === item.menuPath;
                return (
                  <Link
                    key={item.menuName}
                    href={item.menuPath}
                    className={`text-base font-semibold font-karla uppercase hover:text-primary ${isActive ? "text-primary" : "text-gray-700"
                      }`}
                  >
                    {item.menuName}
                  </Link>
                );
              })}
            </ul>
            <div className="hidden md:block">
              <Link
                href="/contact-us"
                className="btn-primary rounded-full px-5 focus:ring-0 focus:ring-offset-0"
              >
                Contact US
              </Link>
            </div>
            <button
              id="mobile-icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
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
                  d={"M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="h-screen overflow-y-auto px-7 py-5">
              <div className="flex justify-between">
                <Link href="/">
                  <Image
                    src={RTlogo}
                    alt="Tailwindcss Navigation"
                    className="w-[150px]"
                  />
                </Link>
                <button
                  id="mobile-icon"
                  className="md:hidden"
                  onClick={toggleMenu}
                  aria-label="Close mobile menu"
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
                      d={"M6 18L18 6M6 6l12 12"}
                    />
                  </svg>
                </button>
              </div>
              <ul className="leading-9 font-bold mt-7">
                {menuList.map((item) => {
                  const isActive = router.pathname === item.menuPath;

                  return (
                    <li
                      key={item.menuName}
                      className="border-b-2 border-gray-300 py-3"
                    >
                      <Link
                        href={item.menuPath}
                        className={`flex items-center gap-5 text-base font-semibold font-karla uppercase hover:text-primary ${isActive ? "text-primary" : "text-gray-700"
                          }`}
                        onClick={toggleMenu}
                      >
                        {item.menuIcon(
                          isActive ? "rgb(1 110 124)" : "#000000A6"
                        )}{" "}
                        {item.menuName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
