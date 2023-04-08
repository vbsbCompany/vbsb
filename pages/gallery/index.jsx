import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsappFab";
import React from "react";

function index() {
  return (
    <div>
      <Header />
      <div className="px-6 sm:px-16 lg:px-32 py-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-6xl font-bold">
          Gallery
        </h1>
        <div className="my-12 gallery-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          ].map((num, index) => {
            return (
              <div className="cursor-pointer gallery-img w-full h-auto md:h-[320px] lg:h-auto group overflow-hidden hover:shadow-2xl rounded-md bg-gray-300 ">
                <img
                  src={`/imgs/photo${num}.jpeg`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-all"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default index;
