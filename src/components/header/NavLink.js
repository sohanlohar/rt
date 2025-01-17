import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavLink = ({ href, children }) => {
  const router = useRouter();

  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={`text-lg font-normal font-karla uppercase hover:text-primary ${
        isActive ? "text-primary" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
