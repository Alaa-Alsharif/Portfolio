import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import "../styles/styles.css";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <nav className="deskNav">
        <div className="logocontainer">
          <Link
            to="#Hero"
            className="logoLink"
            onClick={() => {
              SetActive("");
              window.scrollTo(0, 0);
            }}
          >
            <h1>
              Alaa<span> Alsharif</span>{" "}
            </h1>
            {/* <img src={logo} alt="logo" /> */}
          </Link>
        </div>

        <ul className="navlist">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "active" : ""}`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hiddenmenu" : "shown"
            } mobilemenu`}
          >
            <ul className="list-none flex flex-col jusitfy-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
