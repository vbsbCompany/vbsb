import React from "react";

function Alert({ message, handleClose }) {
  return (
    <div className="alert_popover fixed inset-0 w-full h-full bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="alert_main bg-white py-6 px-12 rounded-md">
        <div className="alert_content flex flex-col items-center gap-3">
          <h3 className="text-2xl">Email feedback</h3>
          <p className="text-black/50">{message}</p>
          <div className="alert_actions w-full flex items-center gap-3 justify-center my-6">
            <button
              className="py-2 px-3 bg-black text-white rounded-md min-w-[130px]"
              onClick={() => {
                handleClose("try");
              }}
            >
              Try Again!
            </button>
            <button
              className="py-2 px-3 bg-green-400 hover:bg-green-600 transition-all text-white rounded-md min-w-[130px]"
              onClick={() => {
                handleClose("ok");
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
