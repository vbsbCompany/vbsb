import React from "react";

function ContactSection() {
  return (
    <div className="px-6 md:px-16 xl:px-32 py-16 bg-black/50 flex flex-wrap items-center justify-between">
      <div>
        <h2 className="text-white text-3xl">Contact Us</h2>
        <p className="text-white/50">
          “Get in contact with us to get personalized quote for your buisness.“
        </p>
      </div>
      <a
        href="/contact"
        className="px-8 py-2 bg-secondary text-white rounded-full"
      >
        Fill The Form
      </a>
    </div>
  );
}

export default ContactSection;
