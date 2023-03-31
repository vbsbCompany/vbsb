import React from "react";

function PublicationCard() {
  return (
    <div className="relative">
      <div className="publication-thumb w-full bg-primary h-[312px]"></div>
      <a
        href="#"
        className="flex w-[150px] h-[48px] bg-secondary absolute bottom-5 left-[50%] -translate-x-[50%] items-center justify-center text-white font-semibold rounded-full"
      >
        Download
      </a>
    </div>
  );
}

export default PublicationCard;
