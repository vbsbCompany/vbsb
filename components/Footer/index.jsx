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
      <div className="footer-top px-6 md:px-32 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="footer-top-left col-span-1">
          <div className="footer-top-left-company mb-3">
            <img src="/vbsb.jpeg" alt="" className="w-[110px]" />
            <p className="mt-3 text-white">
              We&#39;re not just accountants, we&#39;re your financial growth
              partners.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Contact us</h3>
            <p className="text-white"></p>
          </div>
        </div>
        <div className="footer-top-right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  col-span-2">
          <div className="text-white footer-top-right-secondary">
            <div>
              <h3 className="font-semibold text-xl mb-2">Ask us</h3>
              <ul>
                <li>Mon-Sat:10:00 am-06:30pm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom px-16 py-3 bg-black/90 md:flex items-center justify-center">
        <p className="text-white/50 text-center">
          Copyright © 2022-2023 | All Right Reserved | VBSB
        </p>
      </div>
    </div>
  );
}

export default Footer;
