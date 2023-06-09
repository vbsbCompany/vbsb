import React from "react";
import { GrMenu } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
function Header({ index }) {
  return (
    <div className="px-6 lg:px-12 py-5 flex justify-between sticky shadow-md z-50">
      <a href="/">
        <span className="text-2xl font-bold">
          <img src="/vbsb.jpeg" alt="" className="w-[110px]" />
        </span>
      </a>

      <nav className=" items-center gap-12 hidden lg:flex">
        <ul className="flex items-center gap-3">
          <li>
            <a
              href="/"
              className={`hover:text-secondary ${
                index === 0 && "text-secondary"
              } font-bold`}
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className={`hover:text-secondary ${
                index === 1 && "text-secondary"
              } font-bold flex items-center gap-2`}
            >
              <span>Who We Are</span>
              <span>
                <FaChevronDown />
              </span>
            </a>
            <ul className="w-[115px] group-hover:top-8 top-16  opacity-0 group-hover:opacity-100 transition-all group-hover:block dropdown-list absolute  py-2 bg-gray-200">
              <li className="w-full hover:bg-gray-300 px-2">
                <a href="/about" className="text-black/50 text-sm">
                  The Firm
                </a>
              </li>
              <li className="w-full hover:bg-gray-300 px-2">
                <a href="/our-team" className="text-black/50 text-sm">
                  Our Team
                </a>
              </li>
              <li className="w-full hover:bg-gray-300 px-2">
                <a href="/feedbacks" className="text-black/50 text-sm">
                  Client Speak
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="/choose-us"
              className={`hover:text-secondary ${
                index === 2 && "text-secondary"
              } font-bold`}
            >
              Why choose Us
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              className={`hover:text-secondary ${
                index === 5 && "text-secondary"
              } font-bold`}
            >
              Gallery
            </a>
          </li>
          {/* <li>
            <a
              href="/blog"
              className={`hover:text-secondary ${
                index === 4 && "text-secondary"
              } font-bold`}
            >
              Blogs
            </a>
          </li> */}
        </ul>
        <a
          href="/contact"
          className="px-6 py-2 bg-secondary text-white rounded-full"
        >
          Contact
        </a>
      </nav>
      <button className="w-12 h-12 bg-gray-100 lg:hidden flex items-center justify-center rounded-full">
        <GrMenu />
      </button>
    </div>
  );
}

export default Header;
