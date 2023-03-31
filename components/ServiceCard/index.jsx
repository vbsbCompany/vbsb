import React from "react";

function ServiceCard({ name }) {
  return (
    <div className="py-12 px-8 bg-primary/60 rounded-md relative cursor-pointer group overflow-hidden shadow-2xl">
      {/* <img
        src="https://vjmglobal.com/wp-content/uploads/2021/06/work-8.jpg"
        alt="card-thumb"
        className="absolute h-full w-full inset-0 rounded-md group-hover:scale-110 transition-all"
      /> */}
      <div className="z-50 relative">
        <div className="service-card-title mb-3">
          <h3 className="text-3xl text-white font-semibold">{name}</h3>
        </div>

        {/* <div className="service-card-links flex flex-col items-start gap-3 text-white">
          <a href="#">First Service</a>
          <a href="#">Second Service</a>
          <a href="#">Third Service</a>

          <a href="#">Fourth Service</a>
        </div> */}
      </div>
    </div>
  );
}

export default ServiceCard;
