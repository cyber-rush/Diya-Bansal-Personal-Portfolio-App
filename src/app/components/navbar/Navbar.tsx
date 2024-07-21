import React from "react";
import Logo from "../logo/Logo";
import { navItems } from "./navdata";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <Logo />
      <div className="flex gap-16">
        {navItems.map((navItem) => (
          <Link
            key={navItem}
            className="text-black font-medium text-base"
            href={"#"}
          >
            {navItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
