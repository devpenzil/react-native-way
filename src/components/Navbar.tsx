/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          RN Way
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="btn btn-ghost ">Add a package 📦</li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
