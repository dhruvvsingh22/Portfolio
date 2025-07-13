"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState("home");

  const handleClick = (link: any) => {
    setActive(link);
  };

  const links = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  const path = usePathname();

  return (
    <div className="headerContainer">
      <div className="navContainer">
        {links.map((link, index) => (
          <Link href={link.path} key={index}>
            <div
              className={link.path === path ? "navLinkActive" : "navLink"}
              onClick={() => handleClick(link.name)}
            >
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
