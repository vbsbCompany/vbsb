import React from "react";
import { MdClear } from "react-icons/md";
function HiringModal({ setModal }) {
  const handleClose = () => {
    window.localStorage.setItem("hiringModal", true);
    setModal(false);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-white/70 backdrop-blur-xl">
      <div
        className="hiring-modal w-full sm:w-[375px] h-full sm:h-[565px] relative"
        // style={{
        //   backgroundImage: `url('/hiring.jpeg')`,
        //   backgroundSize: `cover`,
        // }}
      >
        <img
          src="/hiring.jpeg"
          alt="hiring-banner"
          className="absolute w-ful h-full inset-0"
        />
        <button
          className="w-[230px] h-[48px] sm:w-12 sm:h-12 bg-primary flex items-center justify-center rounded-full text-white absolute bottom-10 right-[50%] translate-x-[50%] sm:translate-x-0 sm:right-0 sm:-top-5"
          onClick={handleClose}
        >
          <p className="block sm:hidden">Close</p>
          <MdClear className="hidden sm:block" />
        </button>
      </div>
    </div>
  );
}

export default HiringModal;
