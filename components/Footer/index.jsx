import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-primary">
      <div className="footer-top px-10 md:px-12 py-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="footer-top-left col-span-1">
          <div className="footer-top-left-company mb-3">
            <img src="/vbsb.jpeg" alt="" className="w-[110px]" />
            <p className="mt-3 text-white">
              We&#39;re not just accountants, we&#39;re your financial growth
              partners.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-white">Contact us</h3>
            <p className="text-white">
              Office: M-12, BDA Complex, Manisha Market, Bhopal, Madhya
              Pradesh-462039 Mobile: +91 6265255490, 0755- 3550094 I www.vbsb.in
            </p>
          </div>
        </div>
        <div className="footer-top-right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-span-2">
          <div className=" text-white footer-top-right-sections-second flex flex-col items-start gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-2">Our Services</h3>
              <ul>
                <li>
                  <a href="#">Business setup India</a>
                </li>
                <li>
                  <a href="#">Direct Taxation</a>
                </li>
                <li>
                  <a href="#">Good and Service Tax</a>
                </li>
                <li>
                  <a href="#">International Tax</a>
                </li>
                <li>
                  <a href="#">Audit and Assurance</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white footer-top-right-sections-third flex flex-col items-start gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-2">Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Business setup India</a>
                </li>
                <li>
                  <a href="#">Direct Taxation</a>
                </li>
                <li>
                  <a href="#">Good and Service Tax</a>
                </li>
                <li>
                  <a href="#">International Tax</a>
                </li>
                <li>
                  <a href="#">Audit and Assurance</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Ask us</h3>
              <ul>
                <li>Mon-Fri:09:00 am-06:00pm</li>
                <li>Closed on Weekends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom px-16 py-3 bg-black/90 md:flex items-center justify-center">
        <p className="text-white text-center">
          Copyright © 2022-2023 | All Right Reserved | VBSB
        </p>

        {/* <ul className="flex items-center gap-3 mt-3">
          <li>
            <a
              href="#"
              className="w-8 h-8 bg-white flex rounded-md items-center justify-center"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 bg-white flex rounded-md items-center justify-center"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 bg-white flex rounded-md items-center justify-center"
            >
              <FaGooglePlusG />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 bg-white flex rounded-md items-center justify-center"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 bg-white flex rounded-md items-center justify-center"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Footer;
