import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
function Header({ index }) {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="bg-white px-6 lg:px-32 py-2 flex justify-between sticky shadow-md z-50">
      <a href="/">
        <span className="text-2xl font-bold">
          <img src="/vbsb.jpeg" alt="" className="w-[135px]" />
        </span>
      </a>

      <nav className="items-center gap-12 hidden lg:flex">
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
            <ul className="w-[115px] group-hover:top-6 top-16  opacity-0 group-hover:opacity-100 transition-all group-hover:block dropdown-list absolute  py-2 bg-gray-200">
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
                index === 3 && "text-secondary"
              } font-bold`}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/deadlines"
              className={`hover:text-secondary ${
                index === 4 && "text-secondary"
              } font-bold`}
            >
              Deadlines
            </a>
          </li>
          <li>
            <a
              href="/careers"
              className={`hover:text-secondary ${
                index === 5 && "text-secondary"
              } font-bold`}
            >
              Careers
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
      <button
        tabIndex={1}
        className="relative w-12 h-12 bg-gray-100 lg:hidden flex items-center justify-center rounded-full"
        onClick={() => setMobile(!mobile)}
      >
        <GrMenu />
        <div
          className={`${
            mobile ? "block" : "hidden"
          }  mobile-nav absolute -bottom-[250px] -left-[190px] px-3 bg-gray-100 w-[230px] py-6 shadow-2xl rounded-md`}
        >
          <ul className="w-full flex flex-col items-start gap-3">
            <li className="w-full text-left">
              <a
                href="/"
                className={`hover:text-secondary ${
                  index === 0 && "text-secondary"
                } font-bold`}
              >
                Home
              </a>
            </li>
            <li className="w-full text-left">
              <a
                href="/about"
                className={`hover:text-secondary ${
                  index === 1 && "text-secondary"
                } font-bold`}
              >
                The Firm
              </a>
            </li>
            <li className="w-full text-left">
              <a
                href="/our-team"
                className={`hover:text-secondary ${
                  index === 2 && "text-secondary"
                } font-bold`}
              >
                Our Team
              </a>
            </li>
            <li className="w-full text-left">
              <a
                href="/choose-us"
                className={`hover:text-secondary ${
                  index === 3 && "text-secondary"
                } font-bold`}
              >
                Why Choose Us
              </a>
            </li>
            <li className="w-full text-left">
              <a
                href="/gallery"
                className={`hover:text-secondary ${
                  index === 4 && "text-secondary"
                } font-bold`}
              >
                Gallery
              </a>
            </li>
            <li className="w-full text-left">
              <a
                href="/contact"
                className={`hover:text-secondary ${
                  index === 5 && "text-secondary"
                } font-bold`}
              >
                Contact
              </a>
            </li>
            <li className="w-full text-left">
              <a
                href="/deadlines"
                className={`hover:text-secondary ${
                  index === 6 && "text-secondary"
                } font-bold`}
              >
                Deadlines
              </a>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
}

export default Header;
