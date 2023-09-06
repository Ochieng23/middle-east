import React from "react";
import Link from "next/link";
import { type } from "os";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <div>
      <header className="bg-gray-800 text-white py-0 text-center">
        <body className={styles.navbar}>
          <nav className="relative px-4 py-4 flex justify-between items-center ">
            <a className="text-3xl font-bold leading-none" href="#">
              <svg className="h-10" viewBox="0 0 10240 10240">
                {/* Your SVG path */}
              </svg>
            </a>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center text-blue-600 p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Your SVG path */}
                </svg>
              </button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
              <li>
                <Link
                  className="text-sm font-bold text-whitw-700 hover:text-gray-500"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold text-white-700 hover:text-gray-500"
                  href="/"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold text-whitw-700 hover:text-gray-500"
                  href="/"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold text-white-700 hover:text-gray-500"
                  href="/"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-bold text-white-700 hover:text-gray-500"
                  href="/"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <Link
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
              href="#"
            >
              Sign In
            </Link>
            <Link
              className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-black font-bold rounded-xl transition duration-200"
              href="#"
            >
              Sign up
            </Link>
          </nav>
          <div className="navbar-menu relative z-50 hidden">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              {/* Your mobile menu items */}
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none" href="#">
                  <svg className="h-12" viewBox="0 0 10240 10240">
                    {/* Your SVG path */}
                  </svg>
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Your SVG path */}
                  </svg>
                </button>
              </div>
              <div>
                <ul>{/* Your mobile menu items */}</ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  <Link
                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                    href="#"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                    href="#"
                  >
                    Sign Up
                  </Link>
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>Copyright © 2021</span>
                </p>
              </div>
            </nav>
          </div>
        </body>
      </header>
    </div>
  );
}

export default Navbar;
