import React from "react";

function ServiceCard({ name }) {
  return (
    <div className="hover:scale-110 transition-all py-12 px-8 bg-primary/60 rounded-md relative cursor-pointer group overflow-hidden shadow-2xl">
      <h3 className="text-xl text-white font-semibold text-center">{name}</h3>
    </div>
  );
}

export default ServiceCard;
